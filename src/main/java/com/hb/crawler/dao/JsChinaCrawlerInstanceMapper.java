package com.hb.crawler.dao;

import com.hb.crawler.pojo.JsChinaCrawlerInstance;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface JsChinaCrawlerInstanceMapper {

    /**
     * 新增实例
     *
     * @param jsChinaCrawlerInstance
     * @return
     */
    int addJsChinaCrawlerInstance(JsChinaCrawlerInstance jsChinaCrawlerInstance);


    /**
     * 查询报告
     *
     * @param instanceId
     * @return
     */
    JsChinaCrawlerInstance queryJsChinaCrawlerInstance(@Param("instanceId") String instanceId);

    /**
     * 更新报告
     *
     * @param jsChinaCrawlerInstance
     * @return
     */
    int updateJsChinaCrawlerInstance(JsChinaCrawlerInstance jsChinaCrawlerInstance);


}
