package com.hb.crawler.dao;

import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface CourtExecutorMapper {
    /**
     * 插入记录
     * @param params
     * @return
     */
    int addCourtExecutor(Map params);

}
