package com.hb.crawler.dao;

import com.hb.crawler.pojo.MobileAddress;
import org.springframework.stereotype.Repository;


@Repository
public interface MobileAddressMapper {
    /**
     * 新增手机归属地
     *
     * @param mobileAddress
     * @return
     */
    int addMobileAddress(MobileAddress mobileAddress);

    /**
     * 查询
     * @param mobile
     * @return
     */
    MobileAddress getMobileAddress(String mobile);
}
