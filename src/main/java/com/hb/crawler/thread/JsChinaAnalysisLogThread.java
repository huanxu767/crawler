package com.hb.crawler.thread;

import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
import com.hb.crawler.dao.CrawlerInstanceMapper;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.pojo.JsCrawlerChinaMobileLog;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import com.hb.crawler.util.MDateUtils;
import com.hb.crawler.util.StringFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;


public class JsChinaAnalysisLogThread implements Runnable {

    static Logger logger = LoggerFactory.getLogger(JsChinaAnalysisLogThread.class);


    public JsChinaAnalysisLogThread() {
    }

    @Override
    public void run() {
    }



}
