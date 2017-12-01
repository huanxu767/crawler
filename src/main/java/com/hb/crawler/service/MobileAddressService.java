package com.hb.crawler.service;

import com.hb.crawler.pojo.*;

import java.util.List;
import java.util.Map;

/**
 * 江苏移动爬虫接口实现service
 */
public interface MobileAddressService {

    /**
     * 新增手机归属地
     * @param mobileAddress
     * @return
     */
    int addMobileAddress(MobileAddress mobileAddress);

    /**
     * 查询手机归属地
     * @param mobile
     * @return
     */
    Map getMobileAddress(String mobile);
}
