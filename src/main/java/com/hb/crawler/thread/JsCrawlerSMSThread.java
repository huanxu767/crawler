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
        boolean flag = false;
        //第一次触发发送短信
        try {
            smsAuthorization(jsBrowserInstance.getWebClient());
        } catch (Exception e) {
            logger.error("第一次触发短信失败:"+instanceId,e);
            flag = true;
        }
        //第一次触发失败 触发第二次
        if(flag){
            try {
                smsAuthorization(jsBrowserInstance.getWebClient());
            } catch (Exception e) {
                logger.error("第二次触发短信失败:"+instanceId,e);

            }
        }
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
