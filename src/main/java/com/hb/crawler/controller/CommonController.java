package com.hb.crawler.controller;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.BaseResultBean;
import com.hb.crawler.service.MobileAddressService;
import com.hb.crawler.util.JsBrowserCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


/**
 * 通用
 */
@RestController
@RequestMapping("/api")
public class CommonController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private MobileAddressService mobileAddressService;

    @RequestMapping(value = "/countWebClient")
    public int countWebClient() {
        return JsBrowserCache.countWebClient();
    }
    /**
     * 手机归属地
     * @return
     */
    @RequestMapping(value = "/mobileLocation/{mobile}")
    public BaseResultBean mobileLocation(@PathVariable("mobile") String mobile) {
        logger.info("手机归属地,mobile[{}]", mobile);
        BaseResultBean bean = new BaseResultBean();
        bean.success();
        try {
            Map mobileAddressMap = mobileAddressService.getMobileAddress(mobile);
            bean.setResult(mobileAddressMap);
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("手机归属地", e);
        }
        return bean;
    }

}
