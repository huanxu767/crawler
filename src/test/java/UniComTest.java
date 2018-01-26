import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.gargoylesoftware.htmlunit.util.NameValuePair;
import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.JsChinaCrawlerCall;
import com.hb.crawler.pojo.JsChinaCrawlerNet;
import com.hb.crawler.pojo.JsChinaCrawlerSMS;
import com.hb.crawler.pojo.JsChinaCrawlerSourceLog;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import com.hb.crawler.util.MDateUtils;
import com.hb.crawler.util.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.StringUtils;

import javax.swing.text.html.HTML;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;

import static com.hb.crawler.util.MDateUtils.getCurrentYearDays;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class UniComTest {

    @Autowired
    private RedisUtils redisUtils;

    /**
     * 默认过期时长，单位：秒
     */
    public final static long DEFAULT_EXPIRE = 60 * 30;
    public final String jquery = "jQuery17209577406664329885_";

    @Test
    public void url() {
//        String url = "https://uac.10010.com/portal/Service/SendCkMSG?req_time="+System.currentTimeMillis()+"&mobile=18652090357";
//        System.out.println(url);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        String jquery = "jQuery17209577406664329885_";
        try {
            /**
             * 第一步
             */
            WebRequest request1 = new WebRequest(new URL("https://uac.10010.com/oauth2/genqr?timestamp="+System.currentTimeMillis()));
            request1.setAdditionalHeader("Referer", "https://uac.10010.com/portal/homeLogin");
            request1.setAdditionalHeader("Host", "uac.10010.com");
            webClient.getPage(request1);
            readCookies(webClient.getCookieManager());

            /**
             * 第二步
             */
            WebRequest request = new WebRequest(new URL("https://uac.10010.com/portal/Service/CheckNeedVerify?callback="+jquery +System.currentTimeMillis()+"&userName=18652090357&pwdType=01&_="+System.currentTimeMillis()));
            request.setAdditionalHeader("Referer", "https://uac.10010.com/portal/homeLogin");
            request.setAdditionalHeader("Host", "uac.10010.com");
            request.setAdditionalHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
            request.setAdditionalHeader("Connection", "keep-alive");

            UnexpectedPage unexpectedPage = webClient.getPage(request);
            System.out.println(readStream(unexpectedPage.getInputStream()));
            readCookies(webClient.getCookieManager());
            /**
             *
             */
            UnexpectedPage unexpectedPage2 = webClient.getPage("https://uac.10010.com/portal/Service/CreateImage?t="+System.currentTimeMillis());
            System.out.println(readStream(unexpectedPage2.getInputStream()));
            readCookies(webClient.getCookieManager());

            /**
             * 发送短信
             */
            HtmlPage htmlPage = webClient.getPage("https://uac.10010.com/portal/Service/SendCkMSG?callback="+jquery+System.currentTimeMillis()+"&req_time="+System.currentTimeMillis()+"&mobile=18652090357&_="+System.currentTimeMillis());
            System.out.println(htmlPage.asXml());
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable("cookies",webClient.getCookieManager(),DEFAULT_EXPIRE);

        }catch (Exception e){
            e.printStackTrace();
        }finally {
            webClient.close();
        }

    }

    @Test
    public void login() {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable("cookies", DEFAULT_EXPIRE);
        readCookies(cookieManager);
        webClient.setCookieManager(cookieManager);
        String verifyCKCode = "552454";
        try {
            WebRequest request = new WebRequest(new URL("https://uac.10010.com/portal/Service/MallLogin?callback="+jquery+System.currentTimeMillis()+"&req_time="+System.currentTimeMillis()
                    +"&redirectURL=http%3A%2F%2Fwww.10010.com&userName=18652090357&password=154326&pwdType=01&productType=01&redirectType=01&rememberMe=1&verifyCKCode="+ verifyCKCode +"&_=" +System.currentTimeMillis()));
            request.setAdditionalHeader("Referer", "https://uac.10010.com/portal/homeLogin");
            request.setAdditionalHeader("Host", "uac.10010.com");
            Page htmlPage = webClient.getPage(request);
            if(htmlPage instanceof HtmlPage){
                System.out.println("htmlPage");
                System.out.println(((HtmlPage) htmlPage).asXml());
            }else{
                UnexpectedPage unexpectedPage = (UnexpectedPage)htmlPage;
                System.out.println(readStream(unexpectedPage.getInputStream()));
            }
            HtmlPage htmlPage2 = webClient.getPage("http://iservice.10010.com/e4/skip.html?menuCode=000100010001");
            System.out.println(htmlPage2.asXml());
            Thread.sleep(10000);
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable("cookies", webClient.getCookieManager(), DEFAULT_EXPIRE);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

    @Test
    public void sendMsg() throws MalformedURLException {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable("cookies", DEFAULT_EXPIRE);
        readCookies(cookieManager);
        webClient.setCookieManager(cookieManager);

        WebRequest request1 = new WebRequest(new URL("http://iservice.10010.com/e3/static/query/sendRandomCode?_="+System.currentTimeMillis()+"&accessURL=http://iservice.10010.com/e4/query/bill/call_dan-iframe.html&menuid=000100030001"),HttpMethod.POST);
        request1.setAdditionalHeader("Referer", "http://iservice.10010.com/e4/query/bill/call_dan-iframe.html");
        request1.setAdditionalHeader("Host", "iservice.10010.com");
        List<NameValuePair> requestParameters = new ArrayList<>();
        requestParameters.add(new NameValuePair("menuId","000100030001"));
        request1.setRequestParameters(requestParameters);

        try {
            TextPage page = webClient.getPage(request1);
            System.out.println(page.getContent());
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable("cookies", webClient.getCookieManager(), DEFAULT_EXPIRE);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    @Test
    public void verify() throws MalformedURLException {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable("cookies", DEFAULT_EXPIRE);
        readCookies(cookieManager);
        webClient.setCookieManager(cookieManager);

        WebRequest request1 = new WebRequest(new URL("http://iservice.10010.com/e3/static/query/verificationSubmit?_="+System.currentTimeMillis()+"&accessURL=http://iservice.10010.com/e4/query/bill/call_dan-iframe.html&menuid=000100030001"),HttpMethod.POST);
        List<NameValuePair> requestParameters = new ArrayList<>();
        requestParameters.add(new NameValuePair("inputcode","577686"));
        requestParameters.add(new NameValuePair("menuId","000100030001"));
        request1.setRequestParameters(requestParameters);
        request1.setAdditionalHeader("Referer", "http://iservice.10010.com/e4/query/bill/call_dan-iframe.html");
        request1.setAdditionalHeader("Host", "iservice.10010.com");
        try {
            TextPage page = webClient.getPage(request1);
            System.out.println(page.getContent());
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable("cookies", webClient.getCookieManager(), DEFAULT_EXPIRE);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    @Test
    public void getCall() throws MalformedURLException {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable("cookies", DEFAULT_EXPIRE);
        readCookies(cookieManager);
        webClient.setCookieManager(cookieManager);
        WebRequest request1 = new WebRequest(new URL("http://iservice.10010.com/e3/static/query/callDetail?_="+System.currentTimeMillis()+"&accessURL=http://iservice.10010.com/e4/query/bill/call_dan-iframe.html&menuid=000100030001"),HttpMethod.POST);
        List<NameValuePair> requestParameters = new ArrayList<>();
        requestParameters.add(new NameValuePair("pageNo","1"));
        requestParameters.add(new NameValuePair("pageSize","20"));
        requestParameters.add(new NameValuePair("beginDate","20180101"));
        requestParameters.add(new NameValuePair("endDate","20180125"));

        request1.setRequestParameters(requestParameters);
        request1.setAdditionalHeader("Referer", "http://iservice.10010.com/e4/query/bill/call_dan-iframe.html");
        request1.setAdditionalHeader("Host", "iservice.10010.com");
        try {
            TextPage page = webClient.getPage(request1);
            System.out.println(page.getContent());
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable("cookies", webClient.getCookieManager(), DEFAULT_EXPIRE);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }


    @Test
    public void detail() throws MalformedURLException {
        String url = "http://iservice.10010.com/e3/static/query/searchPerInfoDetail/";
        WebRequest request = new WebRequest(new URL(url),HttpMethod.POST);

//        request.setAdditionalHeader("Referer", "http://iservice.10010.com/e4/skip.html?menuCode=000100010001");
//        request.setAdditionalHeader("Host", "iservice.10010.com");
//        request.setAdditionalHeader("Origin", "http://iservice.10010.com");
//        request.setAdditionalHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
//        request.setAdditionalHeader("X-Requested-With", "XMLHttpRequest");

        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable("cookies", DEFAULT_EXPIRE);
        webClient.setCookieManager(cookieManager);
        readCookies(cookieManager);
        TextPage textPage = null;
        try {
            textPage = (TextPage) webClient.getPage(request);
            System.out.println(textPage.getContent());
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    /**
     * 读取流
     *
     * @param inStream
     * @return 字节数组
     * @throws Exception
     */
    public static String readStream(InputStream inStream) throws Exception {
        ByteArrayOutputStream outSteam = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = -1;
        while ((len = inStream.read(buffer)) != -1) {
            outSteam.write(buffer, 0, len);
        }
        outSteam.close();
        inStream.close();
        return new String(outSteam.toByteArray());
    }

    private static void  readCookies(CookieManager cookieManager){
        System.out.println("begin read cookies!---------------------------------------------");
        for (Cookie cookie:cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue());
        }
    }

}
