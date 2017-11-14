package com.hb.crawler.thread;

import com.hb.crawler.dao.JsChinaCrawlerInstanceMapper;
import com.hb.crawler.pojo.JsChinaCrawlerInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class JsChinaAnalysisLogThread implements Runnable {

    static Logger logger = LoggerFactory.getLogger(JsChinaAnalysisLogThread.class);

    private JsChinaCrawlerInstanceMapper jsChinaCrawlerInstanceMapper;
    private String instanceId;
    public JsChinaAnalysisLogThread(String instanceId,JsChinaCrawlerInstanceMapper jsChinaCrawlerInstanceMapper) {
        this.jsChinaCrawlerInstanceMapper = jsChinaCrawlerInstanceMapper;
        this.instanceId = instanceId;
    }

    @Override
    public void run() {
        JsChinaCrawlerInstance jsChinaCrawlerInstance = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if(jsChinaCrawlerInstance == null){
            return;
        }
        String firstEmergencyContact = jsChinaCrawlerInstance.getFirstEmergencyContact();
        String secondEmergencyContact = jsChinaCrawlerInstance.getSecondEmergencyContact();
        String userName = jsChinaCrawlerInstance.getUserName();


    }



}
