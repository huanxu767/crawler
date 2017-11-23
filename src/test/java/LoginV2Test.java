import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.*;
import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.util.EntityUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class LoginV2Test {

    @Autowired
    private RedisUtils redisUtils;

    @Autowired
    public RedisTemplate<String, Object> redisTemplate;

    private final String instanceId = "123a4qwe54asd";
    @Test
    public void preLogin(){
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        try {
            HtmlPage homePage = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
            for (Cookie cookie:webClient.getCookieManager().getCookies()) {
                System.out.print(cookie.getName() + "=" + cookie.getValue()+",");
            }

            System.out.println("");
            //刷新验证码
//            String path = RandomGenerator.timeId() + ".png";
//            String verificationCodeURL = "D:\\verification-code-img\\" + path;
//            HtmlImage verificationCodeImg = (HtmlImage) homePage.getElementById("vcimg");
//            FileUtils.downLoadImage(verificationCodeImg, verificationCodeURL);
            redisUtils.setSerializable("cookies:preLogin:"+instanceId,webClient.getCookieManager(),60000);
            //输入
//            Scanner sc = new Scanner(System.in);
//		    String verificationCode = sc.nextLine();
//            System.out.println("您输入的验证码是："+verificationCode);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }


    @Test
    public void login() throws IOException {
        Long t1 = System.currentTimeMillis();
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        CookieManager cookieManager = (CookieManager)redisUtils.getSerializable("cookies:preLogin:"+instanceId,60000);
        webClient.getOptions().setRedirectEnabled(false);
        for (Cookie cookie:cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue()+",");
        }
        System.out.println("------------------------------------");
        webClient.setCookieManager(cookieManager);

        Long t2 = System.currentTimeMillis();
        System.out.println(t2-t1);
        String mobile = "13585119230";
        try {
            String pwd = DesUtils.encrypt("456123");
            Map params = new HashMap();
            params.put("mobile",mobile);
            params.put("password",pwd);
            params.put("verificationCode","");
            String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL,params);
            System.out.println(url);
            WebRequest request=new WebRequest(new URL(url));
            request.setAdditionalHeader("Referer", "http://service.js.10086.cn/login.html");
            HtmlPage htmlPage = webClient.getPage(request);
            for (Cookie cookie:webClient.getCookieManager().getCookies()) {
                System.out.println(cookie.getName() + "=" + cookie.getValue()+",");
            }
            System.out.println(htmlPage.asXml());
            redisUtils.setSerializable("cookies:preLogin:"+instanceId,webClient.getCookieManager(),60000);
        }catch (FailingHttpStatusCodeException e){
            if(e.getStatusCode() == 302){
                System.out.println("登录成功");
                for (Cookie cookie:webClient.getCookieManager().getCookies()) {
                    System.out.println(cookie.getName() + "=" + cookie.getValue()+",");
                }

            }
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }


    @Test
    public void LoginByHttpClient(){
        //设置cookies
        CookieStore cookieStore = new BasicCookieStore();
        CookieManager cookieManager = (CookieManager)redisUtils.getSerializable("cookies:preLogin:"+instanceId,60000);
        for (Cookie cookie :cookieManager.getCookies()) {
            BasicClientCookie basicCookie = new BasicClientCookie(cookie.getName(), cookie.getValue());
            basicCookie.setDomain(cookie.getDomain());
            basicCookie.setPath(cookie.getPath());
            basicCookie.setExpiryDate(cookie.getExpires());
            cookieStore.addCookie(basicCookie);
        }
        CloseableHttpClient httpclient = HttpClients.custom().setDefaultCookieStore(cookieStore).build();
        try {
            String mobile = "13585119230";
            String pwd = DesUtils.encrypt("456123");
            Map params = new HashMap();
            params.put("mobile",mobile);
            params.put("password",pwd);
            params.put("verificationCode","1cY6");
            String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL,params);
//            String url= "http://localhost:8080/crawler/index.jsp";
            HttpGet httpGet = new HttpGet(url);
            httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
            httpGet.setHeader("Accept-Encoding", "gzip, deflate");
            httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8");
            httpGet.setHeader("Cache-Control", "no-cache");
            httpGet.setHeader("Connection", "keep-alive");
            httpGet.setHeader("Host", "service.js.10086.cn");
            httpGet.setHeader("Pragma", "no-cache");
            httpGet.setHeader("Referer", "http://service.js.10086.cn/login.html");
            httpGet.setHeader("Upgrade-Insecure-Requests", "1");
            httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36");
            // 执行get请求.
            CloseableHttpResponse response = httpclient.execute(httpGet);

            StatusLine statusLine=response.getStatusLine();//获取请求对象中的响应行对象
            int responseCode=statusLine.getStatusCode();//从状态行中获取状态码
            System.out.println(responseCode);
            System.out.println("executing request " + httpGet.getURI());

            try {

                // 获取响应实体
                HttpEntity entity = response.getEntity();
                System.out.println("--------------------------------------");
                // 打印响应状态
                System.out.println(response.getStatusLine());
                System.out.println("executing request " + httpGet.getURI());
                if (entity != null) {
                    // 打印响应内容长度
                    System.out.println("Response content length: " + entity.getContentLength());
                    // 打印响应内容
                    System.out.println("Response content: " + EntityUtils.toString(entity));
                }
                System.out.println("------------------------------------");
            } finally {
                response.close();
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭连接,释放资源
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    @Test
    public void sendMsg(){
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        CookieManager cookieManager = (CookieManager)redisUtils.getSerializable("cookies:preLogin:"+instanceId,60000);
        webClient.setCookieManager(cookieManager);
        try {
            HtmlPage htmlPage = webClient.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
            System.out.println(htmlPage.asXml());
            String js = "$('#txtToDate').next('a').click();";
            htmlPage.executeJavaScript(js);
            synchronized (htmlPage) {
                htmlPage.wait(2000);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    @Test
    public void Test3(){
        String str = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<html>\n" +
                "  <head>\n" +
                "    <script>\n" +
                "//<![CDATA[\n" +
                "window.location.href='http://service.js.10086.cn/./login.html?url=index.html&resultCode=700';\n" +
                "//]]>\n" +
                "    </script>\n" +
                "  </head>\n" +
                "  <body/>\n" +
                "</html>";
        str = str.substring(str.indexOf("resultCode=")+11,str.indexOf(";")-1);
        System.out.println(str);
//        -3001 对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！
//        -3002 对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！
//        -3003 对不起，您已连续输错3次密码，请于24小时后再次尝试或携带有效证件至营业厅办理。
//        -3004 您输入的密码累计三次错误,帐户将被锁定二十四小时。欢迎您继续使用我们的服务
//        -3005 用户不存在
//        -3006 对不起，登录失败，请稍后再试！
//        -3007 对不起，您的密码不正确，请重新输入！
//        -4001 对不起，该账户已销户，不能登录网上营业厅！
//        -4003 对不起,您输入的验证码不正确,请重新输入!
//        -4004 登录用户较多，请稍候再试。
//        -4005 用户登陆失败！用户手机号码在登录黑名单中，不允许登录！
//        -4006 您输入的短信密码不正确，请重新输入!
//        -4007 短信密码已失效，请重新获取!
//        -4008 短信密码不存在，请获取短信密码!
//        -4027 短信密码输入错误超过3次，请重新获取!
//        -200008 登录用户较多，请稍候再试。
//        700 对不起，登录失败，请检查您的号码输入是否正确！
//        对不起，登录失败，请稍后再试！
    }


    @Test
    public void Test4(){

    }




}
