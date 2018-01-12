package com.hb.crawler.controller;

import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.gargoylesoftware.htmlunit.util.WebConnectionWrapper;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.*;
import com.hb.crawler.service.JsChinaMobileApiService;
import com.hb.crawler.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URL;
import java.util.*;

@RestController
@RequestMapping("/")
public class TestController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private JsChinaMobileApiService jsChinaMobileApiService;
    @Autowired
    private RedisUtils redisUtils;
    /**
     * cookies缓存前缀
     */
    private final static String COOKIES = "cookies:";
    /**
     * 预登录缓存时间 3分钟
     */
    private Long PRE_EXPIRE_TIME = 60 * 3L;

//    110.19.189.55:6410 144.255.240.105:2315
    private String ip = "144.255.240.105";
    private String ip2 = "110.19.189.55";
    private boolean preLoginProxyFlag = false;
    private boolean loginProxyFlag = true;
    private int port = 2315;
    private int port2 = 6410;
    private int loop = 1;
    @RequestMapping(value = "/xh")
    public String xh(String name,String mobile,String pwd) {
        String instanceId = RandomGenerator.generateInstanceId();
        int i = 0;
        while(i++<1000){
            System.out.println(name + "==" +i);
            WebClient webClient;
            if(loginProxyFlag){
                webClient = JsChinaMobileCrawlerUtils.getWebClient(false,ip2,port2);
            }else{
                webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
            }
            try {
                preLoginProcess(instanceId);
                CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, PRE_EXPIRE_TIME);
                webClient.setCookieManager(cookieManager);
                webClient.getOptions().setRedirectEnabled(false);
                Map hasLoginMap = loginByJsChinaAPI(webClient, mobile, pwd, "");
                System.out.println(hasLoginMap);
                if (!(boolean) hasLoginMap.get("loginSuccess")) {
                    //登录失败
                    System.out.println("失败");
                }
            }catch (Exception e) {
                logger.error("测试登录", e);
            }finally {
                webClient.close();
            }
        }
        return  "ok";
    }

    /**
     * 预登录
     *
     * @param instanceId
     */
    public Map preLoginProcess(String instanceId) {
        Map resultMap = new HashMap();
        WebClient webClient;
        if(preLoginProxyFlag){
            webClient = JsChinaMobileCrawlerUtils.getWebClient(true,ip,port);
        }else{
            webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        }
        //是否需要验证码
        boolean verificationCodeFlag;
        JsBrowserInstance jsBrowserInstance = new JsBrowserInstance();
        jsBrowserInstance.setInstanceId(instanceId);
        try {
            HtmlPage loginPage = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
            verificationCodeFlag = ifNeedVerificationCode(loginPage);
            resultMap.put("verificationCodeFlag", verificationCodeFlag);
            jsBrowserInstance.setNeedVerifyCode(verificationCodeFlag);
            JsChinaCrawlerInstance jsChinaCrawlerInstance = new JsChinaCrawlerInstance(instanceId);
            if (verificationCodeFlag) {
                System.out.println("需要验证码!!!!!!!!!!!");
            } else {
                jsChinaCrawlerInstance.setNeedVerifyCode(JsChinaCrawlerInstance.NOT_NEED_VERIFY_CODE);
                System.out.println("不需要需要验证码!!!!!!!!!!!");
            }

            for (Cookie cookie:webClient.getCookieManager().getCookies()) {
                System.out.println(cookie.getName()+"="+cookie.getValue());
            }
            redisUtils.setSerializable(COOKIES + instanceId, webClient.getCookieManager(), PRE_EXPIRE_TIME);
        } catch (Exception e) {
           e.printStackTrace();
            throw new ResultException(ReturnCode.UNKNOWN);
        } finally {
            webClient.close();
        }
        return resultMap;
    }

    /**
     * 登录接口调用
     *
     * @param webClient
     * @param mobile
     * @param password
     * @param verificationCode
     * @return
     */
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
//            System.out.println("content:" + content);
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


    @RequestMapping(value = "/getImg")
    public String test2() {
        int i = 0;
        int failure = 0;
        while (i < 1000) {
            i++;
            System.out.println(i);
            final WebClient wc = new WebClient(BrowserVersion.CHROME);
            wc.setJavaScriptTimeout(10000);
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
            wc.getOptions().setCssEnabled(false); // 禁用css支持
            wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
            wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
            wc.waitForBackgroundJavaScript(10000);
            try {
                HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);
                String js = "$('#userNumber').val('15151861623');" +
                        "$('#userPassword').val('006235');" +
                        "$('#popBox-login-button').click();";
                ScriptResult scriptResult = loginPage.executeJavaScript(js);
                final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
                if (!homePage.getTitleText().contains("登录")) {
                    System.out.println("成功");
                } else {
                    System.out.println("失败");
                    failure++;
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                wc.close();
            }
        }
        System.out.println("失败总次数"+failure);
        return "OK";
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

}
