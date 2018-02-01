package com.hb.crawler.service.impl;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.HTTPResponseInstance;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.pojo.ReturnCode;
import com.hb.crawler.service.SpiderService;
import com.hb.crawler.util.*;
import org.apache.http.client.CookieStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class SpiderServiceImpl implements SpiderService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RedisUtils redisUtils;

    /**
     * redis缓存有效期 3分钟
     */
    private Long EXPIRE_TIME = 60 * 3L;

    @Override
    public Map preLogin(String mobile, String realName, String identityCode) {
        Map resultMap = new HashMap();
        ValidateParamsUtils.validatePreLoinParams(mobile, realName, identityCode);
        String instanceId = RandomGenerator.generateInstanceId();
        HTTPResponseInstance httpResponseInstance;
        boolean isNeedVerifyCode;
        try {
            httpResponseInstance = MHttpUtils.request(JsChinaMobileUrl.LOGIN_URL);
            System.out.println(httpResponseInstance.getCookieStore());
            isNeedVerifyCode = httpResponseInstance.getResponseBody().contains("\"resultObj\":true");
            if (isNeedVerifyCode) {
                httpResponseInstance = MHttpUtils.getImage("http://service.js.10086.cn/imageVerifyCode?t=new&r=0.17684052637636394", httpResponseInstance.getCookieStore());
                System.out.println(httpResponseInstance.getCookieStore());
                resultMap.put("verificationCodeImage", httpResponseInstance.getResponseBody());
            }
            redisUtils.setSerializable("cookies:" + instanceId, httpResponseInstance.getCookieStore(), EXPIRE_TIME);
        } catch (Exception e) {
            logger.error("江苏移动网厅预登陆", e);
            throw new ResultException(ReturnCode.UNKNOWN);
        }
        resultMap.put("instanceId", instanceId);
        resultMap.put("needPassword", true);
        resultMap.put("needSMSCode", false);
        resultMap.put("verificationCodeFlag", isNeedVerifyCode);
        return resultMap;
    }

    @Override
    public Map login(String instanceId, String mobile, String password, String verificationCode) {
        Map resultMap = new HashMap();
        ValidateParamsUtils.validateLoinParams(instanceId, mobile, password,verificationCode);
        CookieStore cookieStore = (CookieStore) redisUtils.getSerializable("cookies:" + instanceId,EXPIRE_TIME);
        if(cookieStore == null){
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        HTTPResponseInstance httpResponseInstance;

        Map params = new HashMap();
        params.put("mobile",mobile);
        params.put("password",DesUtils.encrypt(password));
        params.put("verificationCode",verificationCode);

      try {
          String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL, params);
          httpResponseInstance = MHttpUtils.request(url,cookieStore,"http://service.js.10086.cn/login.html",false);
                          System.out.println(httpResponseInstance.getResponseBody());
                System.out.println(httpResponseInstance.getCookieStore());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return resultMap;
    }

}
