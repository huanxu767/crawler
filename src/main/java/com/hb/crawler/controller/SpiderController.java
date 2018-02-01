package com.hb.crawler.controller;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.BaseResultBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/spider")
public class SpiderController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    /**
     * 预登录接口，返回实例编号，如果有验证码则返回验证码。
     *
     * @return
     */
    @RequestMapping(value = "preLogin",method = RequestMethod.POST)
    public BaseResultBean preLogin(String mobile, String imei) {
//        logger.info("预登录,mobile[{}]imei[{}]", mobile, imei);
//        BaseResultBean bean = new BaseResultBean();
//        bean.success();
//        try {
//            Map resultMap = jsChinaMobileApiService.preLogin(mobile, imei);
//            bean.setResult(resultMap);
//        } catch (ResultException e) {
//            bean.failure(e);
//        } catch (Exception e) {
//            bean.failure();
//            logger.error("预登录失败", e);
//        }
//        return bean;
        return null;
    }

}
