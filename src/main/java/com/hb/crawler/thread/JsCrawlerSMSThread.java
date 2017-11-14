package com.hb.crawler.thread;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsBrowserInstance;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.service.impl.JsChinaMobileApiServiceImpl;
import com.hb.crawler.util.JsBrowserCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class JsCrawlerSMSThread implements Runnable {

    static Logger logger = LoggerFactory.getLogger(JsChinaMobileApiServiceImpl.class);
    private String instanceId;

    public JsCrawlerSMSThread(String instanceId) {
        this.instanceId = instanceId;
    }

    @Override
    public void run() {
        JsBrowserInstance jsBrowserInstance = JsBrowserCache.get(instanceId);
        smsAuthorization(jsBrowserInstance.getWebClient());
        jsBrowserInstance.setHasSendMsg(true);
    }

    /**
     * 发送短信
     */
    void smsAuthorization(WebClient webClient) {
        String js = "$('#txtToDate').next('a').click();";
        HtmlPage page;
        try {
            page = webClient.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
            page.executeJavaScript(js);
            synchronized (page) {
                page.wait(2000);
            }
        } catch (Exception e) {
            logger.error("发送短信验证码", e);
        }
    }


}
