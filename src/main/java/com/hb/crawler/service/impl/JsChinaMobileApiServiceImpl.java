package com.hb.crawler.service.impl;

import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerInstanceMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.*;
import com.hb.crawler.property.ConfigProperties;
import com.hb.crawler.service.JsChinaMobileApiService;
import com.hb.crawler.thread.JsChinaAnalysisLogThread;
import com.hb.crawler.thread.JsCrawlerLoginThread;
import com.hb.crawler.thread.JsCrawlerSMSThread;
import com.hb.crawler.thread.JsCrawlerSMSVerifiedThread;
import com.hb.crawler.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.net.URL;
import java.util.*;

/**
 * 江苏移动爬虫接口实现
 */
@Service
public class JsChinaMobileApiServiceImpl implements JsChinaMobileApiService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private ConfigProperties configProperties;
    @Autowired
    private JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper;
    @Autowired
    private JsChinaCrawlerInstanceMapper jsChinaCrawlerInstanceMapper;
    @Autowired
    private JsChinaCrawlerReportMapper jsChinaCrawlerReportMapper;
    @Autowired
    private JsChinaCrawlerCallMapper jsChinaCrawlerCallMapper;
    @Autowired
    private RedisUtils redisUtils;
    /**
     * webClient缓存前缀
     */
    public final static String MOBILE_KEY = "webClient:mobile:";
    /**
     * 实例编号前缀
     */
    public final static String INSTANCE_KEY = "webClient:instanceId:";
    /**
     * 短信验证码 验证次数前缀
     */
    public final static String TIMES = "webClient:times:";
    /**
     * cookies缓存前缀
     */
    private final static String COOKIES = "cookies:";
    /**
     * 预登录缓存时间 3分钟
     */
    private Long PRE_EXPIRE_TIME = 60 * 3L;
    /**
     * 登录成功缓存时间 6分钟
     */
    private Long LOGIN_SUCCESS_TIME = 60 * 5L;
    /**
     * cookies缓存时间 3分钟
     */
    private Long COOKIES_TIME = 60 * 80L;

    @Override
    public Map preLogin(String mobile, String imei) {
        Map resultMap;
        // 验证参数
        if (StringUtils.isEmpty(mobile) || StringUtils.isEmpty(imei)) {
            throw new ResultException(ReturnCode.PARAMS_NOT_ENOUGH);
        }
        // 验证手机号格式
        if (!StringPatternUtils.isMobile(mobile)) {
            throw new ResultException(ReturnCode.PARAMS_FORMAT_ERROR);
        }
        // 获取redis是否已经缓存
        String preCacheKey = MOBILE_KEY + mobile + imei;
        String cacheInstanceId = redisUtils.get(preCacheKey, PRE_EXPIRE_TIME);
        if (!StringUtils.isEmpty(cacheInstanceId)) {
            // 非第一次预登录,删除缓存
            logger.info("非第一次预登录,删除缓存:", cacheInstanceId);
            redisUtils.delete(preCacheKey);
        }
        String instanceId = RandomGenerator.generateInstanceId();
        JsChinaCrawlerInstance jsChinaCrawlerInstance = new JsChinaCrawlerInstance(instanceId, mobile, imei);
        jsChinaCrawlerInstanceMapper.addJsChinaCrawlerInstance(jsChinaCrawlerInstance);
        resultMap = preLoginProcess(mobile, imei, instanceId);
        resultMap.put("instanceId", instanceId);
        resultMap.put("needPassword", true);
        resultMap.put("needSMSCode", false);
        return resultMap;
    }

    /**
     * 预登录
     *
     * @param mobile
     */
    public Map preLoginProcess(String mobile, String imei, String instanceId) {
        Map resultMap = new HashMap();
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        //是否需要验证码
        boolean verificationCodeFlag;
        JsBrowserInstance jsBrowserInstance = new JsBrowserInstance();
        jsBrowserInstance.setInstanceId(instanceId);
        try {
            HtmlPage loginPage = webClient.getPage(JsChinaMobileUrl.LOGIN_URL);
            verificationCodeFlag = ifNeedVerificationCode(loginPage);
            resultMap.put("verificationCodeFlag", verificationCodeFlag);
            String path = "";
            jsBrowserInstance.setNeedVerifyCode(verificationCodeFlag);
            JsChinaCrawlerInstance jsChinaCrawlerInstance = new JsChinaCrawlerInstance(instanceId);
            if (verificationCodeFlag) {
                jsChinaCrawlerInstance.setNeedVerifyCode(JsChinaCrawlerInstance.NEED_VERIFY_CODE);
                logger.debug(jsBrowserInstance.getInstanceId() + ":需要验证码");
                //将验证码写入磁盘
                path = RandomGenerator.timeId() + ".png";
                String verificationCodeURL = configProperties.getVerificationCodePath() + path;
                HtmlImage verificationCodeImg = (HtmlImage) loginPage.getElementById("vcimg");
                FileUtils.downLoadImage(verificationCodeImg, verificationCodeURL);
            } else {
                jsChinaCrawlerInstance.setNeedVerifyCode(JsChinaCrawlerInstance.NOT_NEED_VERIFY_CODE);
                logger.debug(jsBrowserInstance.getInstanceId() + ":不需要需要验证码");
            }
            jsChinaCrawlerInstanceMapper.updateJsChinaCrawlerInstance(jsChinaCrawlerInstance);
            resultMap.put("verificationCodeURL", configProperties.getLocalhostUrl(path));
            JsSpiderInstance jsSpiderInstance = new JsSpiderInstance(instanceId, verificationCodeFlag, imei, mobile, 1);
            redisUtils.set(MOBILE_KEY + mobile + imei, instanceId, PRE_EXPIRE_TIME);
            redisUtils.set(INSTANCE_KEY + instanceId, jsSpiderInstance, PRE_EXPIRE_TIME);
            redisUtils.setSerializable(COOKIES + instanceId, webClient.getCookieManager(), PRE_EXPIRE_TIME);
        } catch (Exception e) {
            logger.error("预登录接口出错,instanceId=" + jsBrowserInstance.getInstanceId(), e);
            throw new ResultException(ReturnCode.UNKNOWN);
        } finally {
            webClient.close();
        }
        return resultMap;
    }

    /**
     * 判断是否需要验证码
     *
     * @param loginPage
     * @return
     */
    public boolean ifNeedVerificationCode(HtmlPage loginPage) {
        //判断是否需要验证码
        String js = "$('#popBox-verifyCode-idType').is(':visible');";
        ScriptResult scriptResult = loginPage.executeJavaScript(js);
        String flag = scriptResult.getJavaScriptResult().toString();
        return Boolean.parseBoolean(flag);
    }

    @Override
    public BaseResultBean login(LoginForm loginForm) {
        BaseResultBean resultBean = new BaseResultBean();
        Map resultMap = new HashMap();
        resultMap.put("verificationCodeFlag", false);
        resultMap.put("verificationCodeURL", "");
        resultMap.put("operators", "CMCC");
        resultMap.put("needSendSMS", false);

        resultBean.setResult(resultMap);
        if (loginForm == null) {
            resultBean.failure(ReturnCode.PARAMS_NOT_ENOUGH);
            return resultBean;
        }
        String instanceId = loginForm.getInstanceId();
        String mobile = loginForm.getMobile();
        String password = loginForm.getPassword();
        String imei = loginForm.getImei();
        String verificationCode = loginForm.getVerificationCode();
        //验证表单数据格式
        if (StringUtils.isEmpty(instanceId)) {
            resultBean.failure(ReturnCode.INSTANCE_ID_NULL);
            return resultBean;
        }
        if (StringUtils.isEmpty(mobile) || StringUtils.isEmpty(password) || StringUtils.isEmpty(imei)) {
            resultBean.failure(ReturnCode.PARAMS_NOT_ENOUGH);
            return resultBean;
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstance = new JsChinaCrawlerInstance(instanceId);
        jsChinaCrawlerInstance.setLastUpdateTime(new Date());
        jsChinaCrawlerInstance.setStatus("2");
        jsChinaCrawlerInstance.setPassword(password);

        int i = jsChinaCrawlerInstanceMapper.updateJsChinaCrawlerInstance(jsChinaCrawlerInstance);
        if (i <= 0) {
            resultBean.failure(ReturnCode.INSTANCE_ID_NOT_EXSIT);
            return resultBean;
        }
        // 获取redis是否已经缓存
        String instanceIdCache = redisUtils.get(MOBILE_KEY + mobile + imei, PRE_EXPIRE_TIME);
        JsSpiderInstance jsSpiderInstance = redisUtils.get(INSTANCE_KEY + instanceId, JsSpiderInstance.class, PRE_EXPIRE_TIME);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, PRE_EXPIRE_TIME);

        if (StringUtils.isEmpty(instanceIdCache) || jsSpiderInstance == null || cookieManager == null) {
            // 已失效 重新预登陆
            resultBean.failure(ReturnCode.INSTANCE_ID_EXPIRE);
            return resultBean;
        }
        //初始化
        if (jsSpiderInstance.isNeedVerifyCode() && StringUtils.isEmpty(verificationCode)) {
            //需要验证码，但是传过来验证码为空
            resultBean.failure(ReturnCode.VERIFICATION_CODE_NULL);
            return resultBean;
        }
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        webClient.setCookieManager(cookieManager);
        webClient.getOptions().setRedirectEnabled(false);
        if (jsSpiderInstance.getStep() != 1) {
            resultBean.failure(ReturnCode.HAS_LOGIN);
            return resultBean;
        }
        Map hasLoginMap = loginByJsChinaAPI(webClient, mobile, password, verificationCode);
        if (!(boolean) hasLoginMap.get("loginSuccess")) {
            //登录失败
            webClient.close();
            Map tempMap = preLoginProcess(mobile, imei, instanceId);
            resultBean.failure(ReturnCode.LOGIN_FAILURE, ReturnCode.getLoginErrorDefine(hasLoginMap.get("resultCode").toString()));
            resultMap.putAll(tempMap);
            resultBean.setResult(resultMap);
            return resultBean;
        }
        //将登录后的cookies序列化
        redisUtils.setSerializable(COOKIES + instanceId, webClient.getCookieManager(), 5 * 60);
        jsSpiderInstance.setStep(2);
        redisUtils.set(INSTANCE_KEY + instanceId, jsSpiderInstance, PRE_EXPIRE_TIME);

        // 是否需要发送短信验证码
        boolean needSendSMS = isNeedSendSMS(webClient);
        resultMap.put("needSendSMS", needSendSMS);
        resultBean.setResult(resultMap);
        logger.info("是否短信验证码登录" + instanceId + needSendSMS);
        // 浏览器缓存
        JsBrowserCache.put(instanceId, webClient);
        CookieManager hasLoginCookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, PRE_EXPIRE_TIME);
        //插入数据库
        jsChinaCrawlerSourceLogMapper.insertJsChinaCrawlerSourceLog(instanceId, mobile);

        if (needSendSMS) {
            // 需要短信验证码登录 异步触发短信
            JsCrawlerSMSThread jsCrawlerSMSThread = new JsCrawlerSMSThread(instanceId);
            Thread jsSMSThread = new Thread(jsCrawlerSMSThread);
            jsSMSThread.start();
        } else {
            // 不需要短信验证码登录 直接抓详细记录
            JsCrawlerSMSVerifiedThread jsCrawlerSMSVerifiedThread = new JsCrawlerSMSVerifiedThread(instanceId, hasLoginCookieManager, jsChinaCrawlerSourceLogMapper);
            Thread jsThread = new Thread(jsCrawlerSMSVerifiedThread);
            jsThread.start();
            JsBrowserCache.remove(instanceId);
        }
        redisUtils.expire(INSTANCE_KEY + instanceId, LOGIN_SUCCESS_TIME);
        redisUtils.set(TIMES + instanceId, 0, LOGIN_SUCCESS_TIME);
        //异步抓取信息
        JsCrawlerLoginThread jsCrawlerLoginThread = new JsCrawlerLoginThread(instanceId, hasLoginCookieManager, jsChinaCrawlerSourceLogMapper);
        Thread jsChinaThread = new Thread(jsCrawlerLoginThread);
        jsChinaThread.start();
        resultBean.success();
        return resultBean;
    }

    @Override
    public void validateSMSCode(String instanceId, String smsCode) {
        if (StringUtils.isEmpty(instanceId) || StringUtils.isEmpty(smsCode)) {
            throw new ResultException(ReturnCode.PARAMS_NOT_ENOUGH);
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstanceDb = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstanceDb == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_NOT_EXSIT);
        }
        //根据instanceId取手机号
        JsSpiderInstance jsSpiderInstance = redisUtils.get(INSTANCE_KEY + instanceId, JsSpiderInstance.class, LOGIN_SUCCESS_TIME);
        if (jsSpiderInstance == null || !JsBrowserCache.hasKey(instanceId)) {
            //超过6分钟 失效 请重新登陆
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        Long retryTimes = redisUtils.increment(TIMES + instanceId, LOGIN_SUCCESS_TIME);
        JsBrowserInstance jsBrowserInstance = JsBrowserCache.get(instanceId);
        WebClient webClient = jsBrowserInstance.getWebClient();
        //验证短信码
        boolean flag = verifySMSCode(instanceId, webClient, retryTimes, smsCode);
        if (flag) {
            //短信验证码验证失败
            throw new ResultException(ReturnCode.SMS_CODE_WRONG);
        }
        //用户短信验证码提交成功
        webClient.close();
        JsBrowserCache.remove(instanceId);
        //cookies缓存
        redisUtils.setSerializable(COOKIES + instanceId, webClient.getCookieManager(), COOKIES_TIME);
        deleteWebClientCache(instanceId, jsSpiderInstance.getMobile(), jsSpiderInstance.getImei());

        //短信验证码完成
        JsChinaCrawlerInstance jsChinaCrawlerInstanceEnd = new JsChinaCrawlerInstance(instanceId);
        jsChinaCrawlerInstanceEnd.setLastUpdateTime(new Date());
        jsChinaCrawlerInstanceEnd.setStatus("3");
        jsChinaCrawlerInstanceMapper.updateJsChinaCrawlerInstance(jsChinaCrawlerInstanceEnd);

        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, COOKIES_TIME);
        JsCrawlerSMSVerifiedThread jsCrawlerSMSVerifiedThread = new JsCrawlerSMSVerifiedThread(instanceId, cookieManager, jsChinaCrawlerSourceLogMapper);
        Thread jsThread = new Thread(jsCrawlerSMSVerifiedThread);
        jsThread.start();
    }

    /**
     * 查询报文数据
     */
    @Override
    public String getCallRecord(String instanceId) {
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, COOKIES_TIME);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
//        CookieManager cookieManager = SerializableUtils.deSerializable();
        webClient.setCookieManager(cookieManager);
        try {
            TextPage page = (TextPage) webClient.getPage("http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&queryMonth=201710&queryItem=1&qryPages=1:1002:-1&qryNo=1&operType=3&queryBeginTime=2017-10-01&queryEndTime=2017-10-30");
            return page.getContent();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
        return null;
    }

    @Override
    public void sendSMSCode(String instanceId) {

        JsChinaCrawlerInstance jsChinaCrawlerInstanceDb = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstanceDb == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_NOT_EXSIT);
        }
        //根据instanceId取手机号
        JsSpiderInstance jsSpiderInstance = redisUtils.get(INSTANCE_KEY + instanceId, JsSpiderInstance.class, LOGIN_SUCCESS_TIME);
        //如果cookies已存在，则已短信验证通过
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, LOGIN_SUCCESS_TIME);
        if (cookieManager != null) {
            throw new ResultException(ReturnCode.HAS_SMS_CODE_CHECKED);
        }
        if (jsSpiderInstance == null || !JsBrowserCache.hasKey(instanceId)) {
            //超过6分钟 失效 请重新登陆
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        JsBrowserInstance jsBrowserInstance = JsBrowserCache.get(instanceId);
        WebClient webClient = jsBrowserInstance.getWebClient();
        WebWindow currentWindow = webClient.getCurrentWindow();
        HtmlPage htmlPage = (HtmlPage) currentWindow.getEnclosedPage();

        ScriptResult textResult = htmlPage.executeJavaScript("$('#Dialog_counter').text()");
        if (!textResult.getJavaScriptResult().toString().endsWith("(0)")) {
            //30秒内无法多次发送验证码
            throw new ResultException(ReturnCode.SMS_CODE_PERIOD);
        }
        ScriptResult afterSendResult = htmlPage.executeJavaScript("$('.send').click();");
        waitForJsExcuse(afterSendResult, 2000);
        redisUtils.set(TIMES + instanceId, 0, LOGIN_SUCCESS_TIME);
    }

    @Override
    public Map refreshVerificationCode(String instanceId) {
        Map resultMap = new HashMap();
        //验证参数完整性
        if (StringUtils.isEmpty(instanceId)) {
            throw new ResultException(ReturnCode.INSTANCE_ID_NULL);
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstanceDb = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstanceDb == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_NOT_EXSIT);
        }
        JsSpiderInstance jsSpiderInstance = redisUtils.get(INSTANCE_KEY + instanceId, JsSpiderInstance.class, PRE_EXPIRE_TIME);
        CookieManager cookieManager = (CookieManager) redisUtils.getSerializable(COOKIES + instanceId, PRE_EXPIRE_TIME);
        if (jsSpiderInstance == null || cookieManager == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_EXPIRE);
        }
        if (jsSpiderInstance.getStep() != 1) {
            //当前非登录页面
            throw new ResultException(ReturnCode.HAS_LOGIN);
        }
        if (!jsSpiderInstance.isNeedVerifyCode()) {
            //不需要验证码
            throw new ResultException(ReturnCode.NO_NEED_VERIFICATION_CODE);
        }
        Map map = preLoginProcess(jsChinaCrawlerInstanceDb.getMobile(), jsChinaCrawlerInstanceDb.getImei(), instanceId);
        resultMap.putAll(map);
        return resultMap;
    }

    @Override
    public void addCustomerInformation(JsChinaCrawlerInstance jsChinaCrawlerInstance) {
        String instanceId = jsChinaCrawlerInstance.getInstanceId();
        String userName = jsChinaCrawlerInstance.getUserName();
        String firstEmergencyContact = jsChinaCrawlerInstance.getFirstEmergencyContact();
        String secondEmergencyContact = jsChinaCrawlerInstance.getSecondEmergencyContact();
        if (StringUtils.isEmpty(instanceId) || StringUtils.isEmpty(userName) || StringUtils.isEmpty(firstEmergencyContact) || StringUtils.isEmpty(secondEmergencyContact)) {
            throw new ResultException(ReturnCode.PARAMS_NOT_ENOUGH);
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstanceDb = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstanceDb == null) {
            throw new ResultException(ReturnCode.INSTANCE_ID_NOT_EXSIT);
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstanceNew = new JsChinaCrawlerInstance(instanceId, userName, firstEmergencyContact, secondEmergencyContact);
        jsChinaCrawlerInstanceNew.setStatus("4");
        jsChinaCrawlerInstanceMapper.updateJsChinaCrawlerInstance(jsChinaCrawlerInstanceNew);
        // 异步生成报告
        JsChinaAnalysisLogThread jsChinaAnalysisLogThread = new JsChinaAnalysisLogThread(instanceId, configProperties.getPythonWebUrl(), jsChinaCrawlerInstanceMapper, jsChinaCrawlerCallMapper, jsChinaCrawlerSourceLogMapper, jsChinaCrawlerReportMapper);
        Thread jsAnalysisLogThread = new Thread(jsChinaAnalysisLogThread);
        jsAnalysisLogThread.start();
    }

    @Override
    public JsChinaCrawlerReport getReport(String instanceId) {
        if (StringUtils.isEmpty(instanceId)) {
            //验证参数完整性
            throw new ResultException(ReturnCode.INSTANCE_ID_NULL);
        }
        JsChinaCrawlerInstance jsChinaCrawlerInstance = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstance == null) {
            //实例不存在
            throw new ResultException(ReturnCode.INSTANCE_ID_NOT_EXSIT);
        }
        String status = jsChinaCrawlerInstance.getStatus();
        if (!"4".equals(status)) {
            //流程未走完
            throw new ResultException(ReturnCode.INSTANCE_NOT_END);
        }
        JsChinaCrawlerReport jsChinaCrawlerReport = jsChinaCrawlerReportMapper.queryJsChinaCrawlerReport(instanceId);
        if (jsChinaCrawlerReport == null) {
            //报告尚未完成
            throw new ResultException(ReturnCode.REPORT_NOT_END);
        }
        return jsChinaCrawlerReport;
    }

    @Override
    public List queryCallTimes(String mobile, String otherParty) {
        return jsChinaCrawlerReportMapper.queryCallTimes(mobile, otherParty);
    }

    @Override
    public List getPositions(String mobile, String pBeginTime, String pEndTime) {
        List<Map> result = jsChinaCrawlerReportMapper.queryPositions(mobile, pBeginTime, pEndTime);
        List<Map> returnList = new ArrayList<>();
        if (result == null) {
            return returnList;
        }
        if (result.size() == 1) {
            Map resultMap = new HashMap();
            Map tempMap = result.get(0);
            resultMap.put("beginTime", tempMap.get("start_time").toString());
            resultMap.put("endTime", tempMap.get("start_time").toString());
            resultMap.put("arear", tempMap.get("visit_arear").toString());
            returnList.add(resultMap);
            return returnList;
        }

        String visitArear = "";
        String beginTime = "";
        String endTime = "";
        for (int i = 0; i < result.size(); i++) {
            Map tempMap = result.get(i);
            String tempArear = tempMap.get("visit_arear").toString();
            String tempTime = tempMap.get("start_time").toString();
            if (i == 0) {
                //第一次循环的时候
                visitArear = tempMap.get("visit_arear").toString();
                beginTime = tempMap.get("start_time").toString();
                endTime = tempMap.get("start_time").toString();
            }
            if (MDateUtils.betweenDaysNum(tempTime, endTime) <= 1 && tempArear.equals(visitArear) && i != result.size() - 1) {
                //同一城市 相差天数<=1天 并且不是最后1条记录
                endTime = tempMap.get("start_time").toString();
            } else if (i == result.size() - 1) {
                //如果最后1次
                Map cityMap = new HashMap();
                cityMap.put("beginTime", beginTime);
                cityMap.put("endTime", tempMap.get("start_time").toString());
                cityMap.put("arear", visitArear);
                returnList.add(cityMap);
            } else {
                Map cityMap = new HashMap();
                cityMap.put("beginTime", beginTime);
                cityMap.put("endTime", endTime);
                cityMap.put("arear", visitArear);
                returnList.add(cityMap);
                visitArear = tempMap.get("visit_arear").toString();
                beginTime = tempMap.get("start_time").toString();
                endTime = tempMap.get("start_time").toString();
            }

        }
        return returnList;
    }

    /**
     * 删除缓存
     *
     * @param instanceId
     * @param mobile
     */
    void deleteWebClientCache(String instanceId, String mobile, String imei) {
        redisUtils.delete(INSTANCE_KEY + instanceId);
        redisUtils.delete(MOBILE_KEY + mobile + imei);
        redisUtils.delete(TIMES + instanceId);
    }

    /**
     * 等待JS执行
     *
     * @param afterScriptResult
     * @param time
     */
    void waitForJsExcuse(ScriptResult afterScriptResult, int time) {
        try {
            synchronized (afterScriptResult) {
                afterScriptResult.wait(time);
            }
        } catch (InterruptedException e) {
            logger.error("waitForJsExcuse出错", e);
        }
    }

    /**
     * 登录接口调用
     *
     * @param webClient
     * @param mobile
     * @param password
     * @param verificationCode
     * @return
     */
    Map loginByJsChinaAPI(WebClient webClient, String mobile, String password, String verificationCode) {
        Map resultMap = new HashMap();
        Map params = new HashMap();
        params.put("mobile", mobile);
        params.put("password", DesUtils.encrypt(password));
        params.put("verificationCode", verificationCode);
        boolean loginSuccess = false;
        String resultCode = "";
        try {
            String url = StringFormat.stringFormat(JsChinaMobileUrl.LOGIN_INTERFACE_URL, params);
            System.out.println("url:" + url);

            System.out.println("params:" + params);

            WebRequest request = new WebRequest(new URL(url));
            request.setAdditionalHeader("Referer", "http://service.js.10086.cn/login.html");
            HtmlPage htmlPage = webClient.getPage(request);
            String content = htmlPage.asXml();
            System.out.println("content:" + content);
            resultCode = content.substring(content.indexOf("resultCode=") + 11, content.indexOf(";") - 1);
            System.out.println("resultCode:" + resultCode);
        } catch (FailingHttpStatusCodeException e) {
            if (e.getStatusCode() == 302) {
                logger.info("登录成功");
                loginSuccess = true;
            }
        } catch (Exception e) {
            logger.error("登录接口", e);
        }
        resultMap.put("resultCode", resultCode);
        resultMap.put("loginSuccess", loginSuccess);
        return resultMap;
    }

    boolean isNeedSendSMS(WebClient webClient) {
        boolean needSendSMS = true;
        TextPage page;
        try {
            page = webClient.getPage("http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX");
            Gson gson = new Gson();
            Map map = gson.fromJson(page.getContent(), Map.class);
            if (!"-200008".equals(map.get("systemCode"))) {
                //不需要短信验证码
                needSendSMS = false;
            }
        } catch (Exception e) {
            logger.error("是否需要短信验证码", e);
        }
        return needSendSMS;
    }

    /**
     * 验证短信码
     *
     * @param instanceId
     * @param webClient
     * @param retryTimes
     * @param smsCode
     * @return
     */
    boolean verifySMSCode(String instanceId, WebClient webClient, long retryTimes, String smsCode) {
        WebWindow currentWindow = webClient.getCurrentWindow();
        HtmlPage htmlPage = (HtmlPage) currentWindow.getEnclosedPage();
        if (retryTimes >= 3) {
            redisUtils.set(TIMES + instanceId, 0);
            //验证码重试次数超过3次 重新下发验证码  并初始化次数
            ScriptResult textResult = htmlPage.executeJavaScript("$('#Dialog_counter').text()");
            if (!textResult.getJavaScriptResult().toString().endsWith("(0)")) {
                //30秒内无法多次发送验证码
                throw new ResultException(ReturnCode.SMS_CODE_RETRY_TIMES_EXCEEDED_PERIOD);
            } else {
                ScriptResult afterSendResult = htmlPage.executeJavaScript("$('.send').click();");
                waitForJsExcuse(afterSendResult, 2000);
                throw new ResultException(ReturnCode.SMS_CODE_RETRY_TIMES_EXCEEDED);
            }
        }
        String validateSMS = "$('#Dialog_smsNum').val('" + smsCode + "');BmonPage.DialogCallback('yes');";
        ScriptResult afterScriptResult = htmlPage.executeJavaScript(validateSMS);
        waitForJsExcuse(afterScriptResult, 2000);
        String js = "$('#popBox-business').is(':visible');";
        HtmlPage afterScriptPage = (HtmlPage) afterScriptResult.getNewPage();
        ScriptResult scriptResult = afterScriptPage.executeJavaScript(js);
        String flag = scriptResult.getJavaScriptResult().toString();
        return Boolean.parseBoolean(flag);
    }

}
