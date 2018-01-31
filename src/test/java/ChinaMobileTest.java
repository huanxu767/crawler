import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.gargoylesoftware.htmlunit.util.NameValuePair;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.*;
import com.hb.crawler.service.JsChinaMobileApiService;
import com.hb.crawler.util.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml", "classpath:application-db.xml", "classpath:application-redis.xml"})
public class ChinaMobileTest {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RedisUtils redisUtils;

    private final static String COOKIES = "cookies:";

    /**
     * 预登录缓存时间 3分钟
     */
    private Long PRE_EXPIRE_TIME = 60 * 30L;


    private String mobile = "13585119230";
    private String pwd = "789456";
    private String imei = "imei";

    @Test
    public void verificationCode() {
        Map resultMap = new HashMap();
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        //是否需要验证码
        try {
            HtmlPage loginPage = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
            System.out.println(loginPage.asXml().contains("\"resultObj\":true"));
            System.out.println(loginPage.asXml().contains("\"resultObj\":false"));
        } catch (Exception e) {
            throw new ResultException(ReturnCode.UNKNOWN);
        } finally {
            webClient.close();
        }
        System.out.println(resultMap);
    }


    @Test
    public void preLogin() {
        Map resultMap = new HashMap();
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        //是否需要验证码
        boolean verificationCodeFlag;
        try {
            HtmlPage loginPage = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
//            verificationCodeFlag = ifNeedVerificationCode(loginPage);
//            resultMap.put("verificationCodeFlag", verificationCodeFlag);
//            String path = "";
//            if (verificationCodeFlag) {
//                logger.debug("需要验证码");
//                //将验证码写入磁盘
//                path = RandomGenerator.timeId() + ".png";
//                HtmlImage verificationCodeImg = (HtmlImage) loginPage.getElementById("vcimg");
//                FileUtils.downLoadImage(verificationCodeImg, "D:\\");
//            }
            redisUtils.setSerializable(COOKIES + mobile, webClient.getCookieManager(), PRE_EXPIRE_TIME);
        } catch (Exception e) {
            throw new ResultException(ReturnCode.UNKNOWN);
        } finally {
            webClient.close();
        }
        System.out.println(resultMap);
    }


    @Test
    public void login() {
//        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + mobile, PRE_EXPIRE_TIME);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false,"36.45.201.76",3215);


//        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
//        webClient.setCookieManager(cookieManager);
        webClient.getOptions().setRedirectEnabled(false);
        try {
            Map hasLoginMap = loginByJsChinaAPI(webClient, mobile, pwd, "");
            System.out.println(hasLoginMap);
            if (!(boolean) hasLoginMap.get("loginSuccess")) {
                //登录失败
                webClient.close();
            }
            //将登录后的cookies序列化
            webClient.getOptions().setJavaScriptEnabled(true);
            webClient.getOptions().setRedirectEnabled(true);
            String js = "$('#txtToDate').next('a').click();";
            HtmlPage page = webClient.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
            page.executeJavaScript(js);
            synchronized (page) {
                page.wait(2000);
            }
            redisUtils.setSerializable(COOKIES + mobile, webClient.getCookieManager(), 5 * 60);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

    @Test
    public void readCok() throws MalformedURLException {
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + mobile, PRE_EXPIRE_TIME);
        readCookies(cookieManager);
    }
    @Test
    public void verifySMS() throws MalformedURLException {
        String sms = "503451";
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + mobile, PRE_EXPIRE_TIME);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        webClient.setCookieManager(cookieManager);

        String cookieCode = "";
        for (Cookie cookie : cookieManager.getCookies()) {
            if("WT_FPC".equals(cookie.getName())){
                cookieCode = cookie.getValue().split("=")[1];
                cookieCode = cookieCode.split(":")[0];
            }
        }
        System.out.println(cookieCode);
        Long time = System.currentTimeMillis();
        WebRequest request1 = new WebRequest(new URL("http://221.178.251.33/dcsch95n910000oyikv5jax99_9t1n/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3&WT.co_f="+cookieCode+"&dcsdat="+time+"&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1060x452"), HttpMethod.GET);
        request1.setAdditionalHeader("Referer", "http://service.js.10086.cn/my/MY_QDCX.html");
        request1.setAdditionalHeader("Host", "sdc.10086.cn");
        request1.setAdditionalHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36");

        WebRequest request2 = new WebRequest(new URL("http://sdc.10086.cn/dcs4vqpi1gn99hjhj4ik4q8d7_4w9z/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3&WT.co_f="+cookieCode+"&dcsdat="+time+"&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1060x452"), HttpMethod.GET);
        request2.setAdditionalHeader("Referer", "http://service.js.10086.cn/my/MY_QDCX.html");
        request2.setAdditionalHeader("Host", "sdc.10086.cn");
        request2.setAdditionalHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36");

        WebRequest request3 = new WebRequest(new URL("http://service.js.10086.cn/my/actionDispatcher.do"), HttpMethod.POST);
        request3.setAdditionalHeader("Referer", "http://service.js.10086.cn/my/MY_QDCX.html");
        request3.setAdditionalHeader("Host", "service.js.10086.cn");
        request3.setAdditionalHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36");
        List<NameValuePair> requestParameters = new ArrayList<>();
        requestParameters.add(new NameValuePair("reqUrl","MY_QDCXQueryNew"));
        requestParameters.add(new NameValuePair("busiNum","QDCX"));
        requestParameters.add(new NameValuePair("queryMonth","201801"));
        requestParameters.add(new NameValuePair("queryItem","1"));
        requestParameters.add(new NameValuePair("qryPages",""));
        requestParameters.add(new NameValuePair("qryNo","1"));
        requestParameters.add(new NameValuePair("operType","3"));
        requestParameters.add(new NameValuePair("queryBeginTime","2018-01-01"));
        requestParameters.add(new NameValuePair("queryEndTime","2018-01-29"));
        requestParameters.add(new NameValuePair("smsNum",sms));
        requestParameters.add(new NameValuePair("confirmFlg","1"));
        request3.setRequestParameters(requestParameters);

        try {
//            webClient.getPage(request1);
//            webClient.getPage(request2);
//            Thread.sleep(1000);
            TextPage textPage = webClient.getPage(request3);
            System.out.println(textPage.getContent());
            redisUtils.setSerializable(COOKIES + mobile, webClient.getCookieManager(), 5 * 60);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }

    }

    /**
     * 判断是否需要验证码
     *
     * @param loginPage
     * @return
     */
    public boolean ifNeedVerificationCode(HtmlPage loginPage) {
        //判断是否需要验证码
        String js = "$('#popBox-verifyCode-idType').is(':visible');";
        ScriptResult scriptResult = loginPage.executeJavaScript(js);
        String flag = scriptResult.getJavaScriptResult().toString();
        return Boolean.parseBoolean(flag);
    }


    private static void readCookies(CookieManager cookieManager) {
        System.out.println("begin read cookies!---------------------------------------------");
        for (Cookie cookie : cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue()+";");
        }
    }

    Map loginByJsChinaAPI(WebClient webClient, String mobile, String password, String verificationCode) {
        Map resultMap = new HashMap();
        Map params = new HashMap();
        params.put("mobile", mobile);
        params.put("password", DesUtils.encrypt(password));
        params.put("verificationCode", verificationCode);
        boolean loginSuccess = false;
        String resultCode = "";
        try {
            String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL, params);
            System.out.println("url:" + url);

            System.out.println("params:" + params);

            WebRequest request = new WebRequest(new URL(url));
            request.setAdditionalHeader("Referer", "http://service.js.10086.cn/login.html");
            HtmlPage htmlPage = webClient.getPage(request);
            String content = htmlPage.asXml();
            System.out.println("content:" + content);
            resultCode = content.substring(content.indexOf("resultCode=") + 11, content.indexOf(";") - 1);
            System.out.println("resultCode:" + resultCode);
        } catch (FailingHttpStatusCodeException e) {
            if (e.getStatusCode() == 302) {
                logger.info("登录成功");
                loginSuccess = true;
            }
        } catch (Exception e) {
            logger.error("登录接口", e);
        }
        resultMap.put("resultCode", resultCode);
        resultMap.put("loginSuccess", loginSuccess);
        return resultMap;
    }
}
