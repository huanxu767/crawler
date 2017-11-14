package com.hb.crawler.controller;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.BaseResultBean;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.pojo.LoginForm;
import com.hb.crawler.service.JsChinaMobileApiService;
import com.hb.crawler.util.RedisUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class TestController {

    static Logger logger = LoggerFactory.getLogger(TestController.class);

    @Autowired
    private RedisUtils redisUtils;

    /**
     * 查询通话记录
     *
     * @return
     */
    @RequestMapping(value = "/test")
    public String test() throws IOException {
        Map map = new HashMap<>();
        int i = 0;
        while (i < 100) {
            i++;
            System.out.println(i);
            final WebClient wc = new WebClient(BrowserVersion.CHROME);
            wc.setJavaScriptTimeout(10000);
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
            wc.getOptions().setCssEnabled(false); // 禁用css支持
            wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
            wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
            wc.waitForBackgroundJavaScript(10000);
            HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);
            map.put(i, wc);
        }
        return "OK";
    }

    /**
     * 查询通话记录
     *
     * @return
     */
    @RequestMapping(value = "/test2")
    public String test2() {
        Map map = new HashMap<>();
        int i = 0;
        while (i < 100) {
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
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
//                wc.getCurrentWindow().getJobManager().removeAllJobs();
                wc.close();
//                System.gc();
            }
        }
        return "OK";
    }
}
