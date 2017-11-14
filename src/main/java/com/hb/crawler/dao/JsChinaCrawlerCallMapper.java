package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerCall;
import com.hb.crawler.pojo.JsChinaCrawlerNet;
import com.hb.crawler.pojo.JsChinaCrawlerSMS;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface JsChinaCrawlerCallMapper {
    /**
     * 批量插入通话记录
     *
     * @param jsChinaCrawlerCalls
     * @return
     */
    int addJsChinaCrawlerCallBatch(List<JsChinaCrawlerCall> jsChinaCrawlerCalls);

    /**
     * 批量插入短信记录
     *
     * @param jsChinaCrawlerSMSs
     * @return
     */
    int addJsChinaCrawlerSMSBatch(List<JsChinaCrawlerSMS> jsChinaCrawlerSMSs);

    /**
     * 批量插入上网记录
     *
     * @param jsChinaCrawlerNets
     * @return
     */
    int addJsChinaCrawlerNetBatch(List<JsChinaCrawlerNet> jsChinaCrawlerNets);

    /**
     * 距上次与紧急联系人联系天数
     *
     * @param instanceId
     * @param firstEmergencyContact
     * @param secondEmergencyContact
     * @return
     */
    Map queryLastConnectDay(@Param("instanceId") String instanceId, @Param("firstEmergencyContact") String firstEmergencyContact, @Param("secondEmergencyContact") String secondEmergencyContact);

    /**
     * 总联系天数
     *
     * @param instanceId
     * @return
     */
    Long countCallOtherParties(@Param("instanceId") String instanceId);

    /**
     * 查询在网天数
     *
     * @param instanceId
     * @return
     */
    List<String> queryOnLineDays(@Param("instanceId") String instanceId);
}
