package com.hb.crawler.service;

import com.hb.crawler.pojo.BaseResultBean;
import com.hb.crawler.pojo.JsChinaCrawlerInstance;
import com.hb.crawler.pojo.LoginForm;

import java.util.Map;

/**
 * 江苏移动爬虫接口实现service
 */
public interface JsChinaMobileApiService {
    /**
     * 预登录
     * 返回实例编号，实例有效期3分钟，若期间无请求更新，则销毁。如有图形验证码，将图形验证码保存本地，将图片连接返回，
     *
     * @return
     */
    Map preLogin(String mobile,String imei);

    /**
     * 登录，并下发短信验证码
     * 在3分钟有效期内调用，若超过三分钟，返回已过期。
     *
     * @param loginForm
     * @return
     */
    BaseResultBean login(LoginForm loginForm);

    /**
     * 验证短信验证码
     *
     * @param instanceId
     * @param smsCode
     * @return
     */
    void validateSMSCode(String instanceId, String smsCode);

    /**
     * 查询通话记录
     *
     * @param instanceId
     * @return
     */
    String getCallRecord(String instanceId);

    /**
     * 下发短信码
     * @param instanceId
     */
    void sendSMSCode(String instanceId);

    /**
     * 刷新验证码
     * @param instanceId
     * @return
     */
    Map refreshVerificationCode(String instanceId);

    /**
     * 接受用户基本信息
     * @param jsChinaCrawlerInstance
     */
    void addCustomerInformation(JsChinaCrawlerInstance jsChinaCrawlerInstance);
}
