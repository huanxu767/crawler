package com.hb.crawler.controller;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.RedisUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class TestController {

    static Logger logger = LoggerFactory.getLogger(TestController.class);

    @RequestMapping(value = "/ddd")
    public String ddd(int x) {
        Map map = new HashMap<>();
        int i = 0 ;
        while(i < x){
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
            }catch (Exception e){
                e.printStackTrace();
            }finally {
//                wc.close();
            }
            map.put(i,wc);
        }
        return "OK";
    }



    @RequestMapping(value = "/getImg")
    public String test2() {
        Map map = new HashMap<>();
        int i = 0 ;
        while(i < 100){
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
                String js = "$('#userNumber').val('13585119230');" +
                        "$('#userPassword').val('456123');" +
                        "$('#popBox-login-button').click();";
                ScriptResult scriptResult = loginPage.executeJavaScript(js);
                final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
                if(!homePage.getTitleText().contains("登录")){
                    System.out.println("成功");
                }else{
                    System.out.println("失败");
                }
            }catch (Exception e){
                e.printStackTrace();
            }finally {
                wc.close();
            }
            map.put(i,wc);
        }

        return "OK";
    }
}
