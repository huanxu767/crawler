package com.hb.crawler.thread;

import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.*;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import com.hb.crawler.util.MDateUtils;
import com.hb.crawler.util.StringFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;


public class JsCrawlerSMSVerifiedThread implements Runnable {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    /**
     * 程序出错重试次数
     */
    private int times = 3;

    private CookieManager cookieManager;
    private JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper;

    private String instanceId;

    public JsCrawlerSMSVerifiedThread(String instanceId, CookieManager cookieManager, JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper) {
        this.instanceId = instanceId;
        this.cookieManager = cookieManager;
        this.jsChinaCrawlerSourceLogMapper = jsChinaCrawlerSourceLogMapper;
    }

    @Override
    public void run() {
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        webClient.setCookieManager(cookieManager);
        getDetail(webClient);
        webClient.close();
    }

    private void getDetail(WebClient webClient) {
        JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog = new JsChinaCrawlerSourceLog();
        jsCrawlerChinaMobileLog.setInstanceId(instanceId);
        List<Map<String, String>> lastSixMonthList = MDateUtils.getLastSixMonth();
        try {
            for (int i = 0; i < lastSixMonthList.size(); i++) {
                Map paramsMap = lastSixMonthList.get(i);
                TextPage callPage = webClient.getPage(StringFormat.stringFormat(JsChinaMobileUrl.CALL_URL, paramsMap));
                TextPage messagePage = webClient.getPage(StringFormat.stringFormat(JsChinaMobileUrl.MESSAGE_URL, paramsMap));
                TextPage netPage = webClient.getPage(StringFormat.stringFormat(JsChinaMobileUrl.NET_URL, paramsMap));
                String callPageJson = callPage.getContent().toString();
                String messagePageJson = messagePage.getContent().toString();
                String netPageJson = netPage.getContent().toString();

                switch (i) {
                    case 0:
                        jsCrawlerChinaMobileLog.setCallLogSix(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogSix(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogSix(netPageJson);
                        break;
                    case 1:
                        jsCrawlerChinaMobileLog.setCallLogFive(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogFive(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogFive(netPageJson);
                        break;
                    case 2:
                        jsCrawlerChinaMobileLog.setCallLogFour(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogFour(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogFour(netPageJson);
                        break;
                    case 3:
                        jsCrawlerChinaMobileLog.setCallLogThree(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogThree(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogThree(netPageJson);
                        break;
                    case 4:
                        jsCrawlerChinaMobileLog.setCallLogTwo(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogTwo(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogTwo(netPageJson);
                        break;
                    default:
                        jsCrawlerChinaMobileLog.setCallLogOne(callPageJson);
                        jsCrawlerChinaMobileLog.setMessageLogOne(messagePageJson);
                        jsCrawlerChinaMobileLog.setNetLogOne(netPageJson);
                        break;
                }
            }
            jsChinaCrawlerSourceLogMapper.updateJsChinaCrawlerSourceLog(jsCrawlerChinaMobileLog);
        } catch (Exception e) {
            if (--times <= 0) {
                logger.error("获取通话详单：", e);
            }
            getDetail(webClient);
        }
    }


}
