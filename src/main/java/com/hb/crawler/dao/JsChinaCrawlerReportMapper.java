package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerReport;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


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


}
