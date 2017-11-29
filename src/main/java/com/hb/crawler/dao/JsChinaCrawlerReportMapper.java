package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerReport;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface JsChinaCrawlerReportMapper {

    /**
     * 新增报告
     *
     * @param jsChinaCrawlerReport
     * @return
     */
    int addJsChinaCrawlerReport(JsChinaCrawlerReport jsChinaCrawlerReport);


    /**
     * 查询报告
     *
     * @param instanceId
     * @return
     */
    JsChinaCrawlerReport queryJsChinaCrawlerReport(@Param("instanceId") String instanceId);

    /**
     * 查询联系人按次数排序
     * @param mobile
     * @param otherParty
     * @return
     */
    List<Map> queryCallTimes(@Param("mobile") String mobile,@Param("otherParty") String otherParty);
    /**
     * 查询联系人位置
     * @param mobile
     * @param beginTime
     * @param endTime
     * @return
     */
    List<Map> queryPositions(@Param("mobile") String mobile,@Param("beginTime") String beginTime,@Param("endTime") String endTime);


}
