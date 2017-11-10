package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerCall;
import com.hb.crawler.pojo.JsChinaCrawlerNet;
import com.hb.crawler.pojo.JsChinaCrawlerSMS;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JsChinaCrawlerCallMapper {

    int addJsChinaCrawlerCallBatch(List<JsChinaCrawlerCall> jsChinaCrawlerCalls);

    int addJsChinaCrawlerSMSBatch(List<JsChinaCrawlerSMS> jsChinaCrawlerSMSs);

    int addJsChinaCrawlerNetBatch(List<JsChinaCrawlerNet> jsChinaCrawlerNets);
}
