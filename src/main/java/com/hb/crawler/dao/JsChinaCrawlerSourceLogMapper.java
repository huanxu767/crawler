package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerSourceLog;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


/**
 * 爬虫实例DAO
 */
@Repository
public interface JsChinaCrawlerSourceLogMapper {

    /**
     * 江苏移动数据入库
     *
     * @param instanceId
     * @return
     */
    int insertJsChinaCrawlerSourceLog(@Param("instanceId") String instanceId, @Param("mobile") String mobile);

    /**
     * 更新江苏移动数据
     *
     * @param jsCrawlerChinaMobileLog
     * @return
     */
    int updateJsChinaCrawlerSourceLog(JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog);

    /**
     * 查询江苏移动抓取的信息
     *
     * @param instanceId
     * @return
     */
    JsChinaCrawlerSourceLog queryJsChinaCrawlerSourceLog(String instanceId);

}
