package com.hb.crawler.service.impl;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.HTTPResponseInstance;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.pojo.ReturnCode;
import com.hb.crawler.service.SpiderService;
import com.hb.crawler.util.*;
import org.apache.http.Header;
import org.apache.http.NameValuePair;
import org.apache.http.client.CookieStore;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SpiderServiceImpl implements SpiderService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RedisUtils redisUtils;

    /**
     * redis缓存有效期 3分钟
     */
    private Long EXPIRE_TIME = 60 * 25L;

    @Override
    public Map preLogin(String mobile, String realName, String identityCode) {
        Map resultMap = new HashMap();
        ValidateParamsUtils.validatePreLoinParams(mobile, realName, identityCode);
        String instanceId = RandomGenerator.generateInstanceId();
        instanceId = "test";
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
        ValidateParamsUtils.validateLoinParams(instanceId, mobile, password, verificationCode);
        CookieStore cookieStore = (CookieStore) redisUtils.getSerializable("cookies:" + instanceId, EXPIRE_TIME);
        if (cookieStore == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        HTTPResponseInstance httpResponseInstance;

        Map params = new HashMap();
        params.put("mobile", mobile);
        params.put("password", DesUtils.encrypt(password));
        params.put("verificationCode", verificationCode);
        Header header = new BasicHeader("Referer", "http://service.js.10086.cn/login.html");
        try {
            String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL, params);
            httpResponseInstance = MHttpUtils.request(url, cookieStore, header, false, false);
            System.out.println(httpResponseInstance.getResponseBody());
            System.out.println(httpResponseInstance.getCookieStore());
            if (httpResponseInstance.getResponseBody().contains("<title>302")) {
                logger.info("登录成功");
                redisUtils.setSerializable("cookies:" + instanceId, httpResponseInstance.getCookieStore(), EXPIRE_TIME);
                httpResponseInstance = sendJsSMS(cookieStore);
                redisUtils.setSerializable("cookies:" + instanceId, httpResponseInstance.getCookieStore(), EXPIRE_TIME);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return resultMap;
    }

    @Override
    public Map verifySMSCode(String instanceId, String smsCode) {
        Map params = new HashMap();
        CookieStore cookieStore = (CookieStore) redisUtils.getSerializable("cookies:" + instanceId, EXPIRE_TIME);
        if (cookieStore == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        HTTPResponseInstance httpResponseInstance;
        try {
            httpResponseInstance = verifyJsSMSCode(cookieStore,smsCode);
            redisUtils.setSerializable("cookies:" + instanceId, httpResponseInstance.getCookieStore(), EXPIRE_TIME);
            System.out.println(httpResponseInstance.getResponseBody());
            System.out.println(httpResponseInstance.getCookieStore());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return params;
    }

    /**
     * 发送江苏移动短信验证码
     * @param cookieStore
     * @return
     * @throws IOException
     */
    private HTTPResponseInstance sendJsSMS(CookieStore cookieStore) throws IOException {
        Header[] headers = new Header[4];
        headers[0] = new BasicHeader("Referer", "http://service.js.10086.cn/my/MY_QDCX.html");
        headers[1] = new BasicHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36");
        headers[2] = new BasicHeader("Host", "service.js.10086.cn");
        headers[3] = new BasicHeader("Origin", "http://service.js.10086.cn");

        List<NameValuePair> nameValuePairList = new ArrayList<NameValuePair>();
        nameValuePairList.add(new BasicNameValuePair("busiNum", "QDCX"));
        String url = "http://service.js.10086.cn/my/sms.do";
        return MHttpUtils.requestByPostMethod(url, cookieStore, headers, nameValuePairList);

    }

    /**
     * 验证江苏移动短信验证码
     * @param cookieStore
     * @param smsCode
     * @return
     * @throws IOException
     */
    private HTTPResponseInstance verifyJsSMSCode(CookieStore cookieStore,String smsCode) throws IOException {
        Header[] headers = new Header[4];
        headers[0] = new BasicHeader("Referer", "http://service.js.10086.cn/my/MY_QDCX.html");
        headers[1] = new BasicHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36");
        headers[2] = new BasicHeader("Host", "service.js.10086.cn");
        headers[3] = new BasicHeader("Origin", "http://service.js.10086.cn");

        List<NameValuePair> nameValuePairList = new ArrayList();
        nameValuePairList.add(new BasicNameValuePair("reqUrl", "MY_QDCXQueryNew"));
        nameValuePairList.add(new BasicNameValuePair("busiNum", "QDCX"));
        nameValuePairList.add(new BasicNameValuePair("queryMonth", "201802"));
        nameValuePairList.add(new BasicNameValuePair("queryItem", "1"));
        nameValuePairList.add(new BasicNameValuePair("qryPages", ""));
        nameValuePairList.add(new BasicNameValuePair("qryNo", "1"));
        nameValuePairList.add(new BasicNameValuePair("operType", "3"));
        nameValuePairList.add(new BasicNameValuePair("queryBeginTime", "2018-02-01"));
        nameValuePairList.add(new BasicNameValuePair("queryEndTime", "2018-02-02"));
        nameValuePairList.add(new BasicNameValuePair("smsNum", smsCode));
        nameValuePairList.add(new BasicNameValuePair("confirmFlg", "1"));
        String url = "http://service.js.10086.cn/my/actionDispatcher.do";
        return MHttpUtils.requestByPostMethod(url, cookieStore, headers, nameValuePairList);

    }


}
