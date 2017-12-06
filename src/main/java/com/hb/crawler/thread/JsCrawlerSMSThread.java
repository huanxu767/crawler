package com.hb.crawler.thread;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsBrowserInstance;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.JsBrowserCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class JsCrawlerSMSThread implements Runnable {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private String instanceId;

    public JsCrawlerSMSThread(String instanceId) {
        this.instanceId = instanceId;
    }

    @Override
    public void run() {
        JsBrowserInstance jsBrowserInstance = JsBrowserCache.get(instanceId);
        for (int i = 1; i < 4; i++) {
            try {
                smsAuthorization(jsBrowserInstance.getWebClient());
                break;
            } catch (Exception e) {
                logger.error("第"+i+"次触发短信失败:"+instanceId,e);
            }
        }
        //第一次触发发送短信
        jsBrowserInstance.setHasSendMsg(true);
    }

    /**
     * 发送短信
     */
    void smsAuthorization(WebClient webClient) throws Exception {
        webClient.getOptions().setJavaScriptEnabled(true);
        webClient.getOptions().setRedirectEnabled(true);
        sendMsg(webClient);
    }
    void sendMsg(WebClient webClient) throws Exception {
        String js = "$('#txtToDate').next('a').click();";
        HtmlPage page = webClient.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
        page.executeJavaScript(js);
        synchronized (page) {
            page.wait(2000);
        }
    }
}
