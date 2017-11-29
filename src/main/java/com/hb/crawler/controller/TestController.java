package com.hb.crawler.controller;

import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.gargoylesoftware.htmlunit.util.WebConnectionWrapper;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.FileUtils;
import com.hb.crawler.util.RandomGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/")
public class TestController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/ddd")
    public String ddd(int x, int y) {
        logger.info("test",x,y);
        List<WebClient> list = new ArrayList<WebClient>();
        int i = 0;
        while (i < x) {
            if (i > y) {
                WebClient wc = list.get(0);
                HtmlPage h = (HtmlPage) wc.getCurrentWindow().getEnclosedPage();
                System.out.println("remove:" + h.getTitleText());
                wc.close();
                list.remove(0);
            }
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
                System.out.println(loginPage.getTitleText());
//                String js = "$('#userNumber').val('13585119230');" +
//                        "$('#userPassword').val('456123');" +
//                        "$('#popBox-login-button').click();";
//                ScriptResult scriptResult = loginPage.executeJavaScript(js);
//                final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
//                if(!homePage.getTitleText().contains("登录")){
//                    System.out.println("成功");
//                }else{
//                    System.out.println("失败");
//                }
                list.add(wc);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                wc.close();
            }
        }
        return "OK";
    }


    @RequestMapping(value = "/getImg")
    public String test2() {
        Map map = new HashMap<>();
        int i = 0;
        while (i < 100) {
            i++;
            System.out.println(i);
            final WebClient wc = new WebClient(BrowserVersion.FIREFOX_45);
            wc.setJavaScriptTimeout(10000);
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
            wc.getOptions().setCssEnabled(false); // 禁用css支持
            wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
            wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
            wc.waitForBackgroundJavaScript(10000);
            try {
                HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);
                String js = "$('#userNumber').val('13585119230');" +
                        "$('#userPassword').val('456123');" +
                        "$('#popBox-login-button').click();";
                ScriptResult scriptResult = loginPage.executeJavaScript(js);
                final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
                if (!homePage.getTitleText().contains("登录")) {
                    System.out.println("成功");
                } else {
                    System.out.println("失败");
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                wc.close();
            }
            map.put(i, wc);
        }

        return "OK";
    }

    @RequestMapping(value = "/chun")
    public String chun() {
        String result = null;
        System.out.println("chrome");
        final WebClient wc = new WebClient(BrowserVersion.CHROME,"61.155.164.109",3128);
        wc.setJavaScriptTimeout(10000);
        wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
        wc.getOptions().setCssEnabled(false); // 禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
//        wc.setAjaxController(new NicelyResynchronizingAjaxController());
        try {
            HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);

//            new WebConnectionWrapper(wc) {
//                public WebResponse getResponse(WebRequest request) throws IOException {
//                    WebResponse response = super.getResponse(request);
//                    System.out.println(request.getUrl().toExternalForm());
//                    if (request.getUrl().toExternalForm().contains("gov/_/?Load=1&FAST_VERLAST__")) {
//                        String content = response.getContentAsString("UTF-8");
//                        System.out.println(content);
//                    }
//                    return response;
//                }
//            };

            CookieManager cookieManager = new CookieManager();
            for (Cookie cookie:wc.getCookieManager().getCookies()) {
                System.out.println(cookie.getName()+"="+cookie.getValue()+";");
                if(cookie.getName().contains("browserFinger")){
                    Cookie c = new Cookie(cookie.getDomain(),cookie.getName(), "cf6a9e62cc9bee5f1d92dd55bebff3a1");
                    cookieManager.addCookie(c);
                    continue;
                }
                cookieManager.addCookie(cookie);
            }

            System.out.println("--2222222------------------------------------------------------------");
            wc.setCookieManager(cookieManager);

            for (Cookie cookie:wc.getCookieManager().getCookies()) {
                System.out.println(cookie.getName()+":"+cookie.getValue()+";");
            }

            System.out.println("----333333333333----------------------------------------------------------");
            String js = "$('#userNumber').val('15151861623');" +
                    "$('#userPassword').val('006235');" +
                    "$('#popBox-login-button').click();";
            ScriptResult scriptResult = loginPage.executeJavaScript(js);
            final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
            if (!homePage.getTitleText().contains("登录")) {
                System.out.println("成功");
                result = "成功";
            } else {
                System.out.println("失败");
                result = "失败";
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            wc.close();
        }
        return result;
    }

//    @RequestMapping(value = "/chun2")
//    public String chun2() throws IOException {
//        WebClient webClient = new WebClient(BrowserVersion.FIREFOX_45);
//        webClient.getOptions().setJavaScriptEnabled(true);
//        webClient.getOptions().setCssEnabled(false);
//        webClient.getOptions().setThrowExceptionOnScriptError(false);
//        webClient.getOptions().setTimeout(10000);
//
//
//
//        HtmlPage page = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
//        webClient.waitForBackgroundJavaScript(20000);
//        webClient.waitForBackgroundJavaScriptStartingBefore(20000);
//        HtmlInput username = (HtmlInput) page.getElementById("userNumber");
//        HtmlInput password = (HtmlInput) page.getElementById("userPassword");
//        username.setValueAttribute("15151861623");
//        password.setValueAttribute("006235");
//
//        HtmlAnchor submit = page.getHtmlElementById("popBox-login-button");
//        HtmlPage homePage = submit.click();
//        if (!homePage.getTitleText().contains("登录")) {
//            System.out.println("成功");
//        } else {
//            System.out.println("失败");
//        }
//        webClient.close();
//        return "ok";
//    }


}
