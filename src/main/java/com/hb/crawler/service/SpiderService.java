package com.hb.crawler.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 江苏移动爬虫接口实现service
 */
public interface SpiderService {

    /**
     * 预登录
     * 返回实例编号，实例有效期3分钟，若期间无请求更新，则销毁。如有图形验证码，将图形验证码BASE64加密
     * @param mobile 必填 手机号码，11位数字
     * @param realName 真实姓名。支持中文、英文和"."，不支持其他特殊字符
     * @param identityCode 选填 身份证号码。18位和15位数字，末尾是数字或X
     * @return
     */
    Map preLogin(String mobile, String realName,String identityCode);

    /**
     * 登录
     * @param instanceId 必填 实例编号
     * @param mobile 必填 手机号码
     * @param password 必填 密码
     * @param verificationCode 选填 验证码
     * @return
     */
    Map login(String instanceId, String mobile, String password, String verificationCode);

    /**
     * 验证短信码
     * @param test
     * @param smsCode
     * @return
     */
    Map verifySMSCode(String test, String smsCode);
}
