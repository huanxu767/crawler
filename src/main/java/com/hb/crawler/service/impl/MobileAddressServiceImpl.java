package com.hb.crawler.service.impl;

import com.hb.crawler.dao.*;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.*;
import com.hb.crawler.service.MobileAddressService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * 江苏移动爬虫接口实现
 */
@Service
public class MobileAddressServiceImpl implements MobileAddressService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MobileAddressMapper mobileAddressMapper;

    @Override
    public int addMobileAddress(MobileAddress mobileAddress) {
        return mobileAddressMapper.addMobileAddress(mobileAddress);
    }

    @Override
    public Map getMobileAddress(String mobile) {
        if(StringUtils.isEmpty(mobile)){
            throw new ResultException(ReturnCode.PARAMS_NOT_ENOUGH);
        }
        if(!StringUtils.isNumeric(mobile) || mobile.length() < 7 || mobile.length()>11){
            throw new ResultException(ReturnCode.PARAMS_FORMAT_ERROR);
        }
        MobileAddress mobileAddress = mobileAddressMapper.getMobileAddress(mobile.substring(0,7));
        if(mobileAddress == null){
            throw new ResultException(ReturnCode.NO_RECORD_HIT);
        }
        return mobileAddress.toMap();
    }
}
