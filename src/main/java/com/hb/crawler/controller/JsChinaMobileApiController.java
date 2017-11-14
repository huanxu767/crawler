package com.hb.crawler.controller;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.BaseResultBean;
import com.hb.crawler.pojo.JsChinaCrawlerInstance;
import com.hb.crawler.pojo.JsChinaCrawlerReport;
import com.hb.crawler.pojo.LoginForm;
import com.hb.crawler.property.ConfigProperties;
import com.hb.crawler.service.JsChinaMobileApiService;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/jsChinaMobile")
public class JsChinaMobileApiController {

    static Logger logger = LoggerFactory.getLogger(JsChinaMobileApiController.class);

    @Autowired
    private JsChinaMobileApiService jsChinaMobileApiService;

    @Autowired
    private ConfigProperties configProperties;

    /**
     * 预登录接口，返回实例编号，如果有验证码则返回验证码。
     *
     * @return
     */
    @RequestMapping(value = "preLogin")
    public BaseResultBean preLogin(String mobile, String imei) {
        logger.info("预登录", mobile, imei);
        BaseResultBean bean = new BaseResultBean();
        bean.success();
        try {
            Map resultMap = jsChinaMobileApiService.preLogin(mobile, imei);
            bean.setResult(resultMap);
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("预登录失败", e);
        }
        return bean;
    }

    /**
     * 刷新验证码
     *
     * @param instanceId
     * @return
     */
    @RequestMapping(value = "/refreshVerificationCode")
    public BaseResultBean refreshVerificationCode(String instanceId) {
        logger.info("刷新验证码", instanceId);
        BaseResultBean bean = new BaseResultBean();
        bean.success();
        try {
            Map resultMap = jsChinaMobileApiService.refreshVerificationCode(instanceId);
            bean.setResult(resultMap);
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("刷新验证码", e);
        }
        return bean;
    }

    /**
     * 登录
     *
     * @param loginForm
     * @return
     */
    @RequestMapping(value = "login")
    public BaseResultBean login(LoginForm loginForm) {
        logger.info("登录", loginForm);
        BaseResultBean bean = new BaseResultBean();
        try {
            bean = jsChinaMobileApiService.login(loginForm);
        } catch (Exception e) {
            bean.failure();
            logger.error("登录失败", e);
        }
        return bean;
    }

    /**
     * 验证短信验证码
     *
     * @param instanceId
     * @return
     */
    @RequestMapping(value = "/validateSMSCode")
    public BaseResultBean validateSMSCode(String instanceId, String smsCode) {
        logger.info("验证短信验证码", instanceId, smsCode);
        BaseResultBean bean = new BaseResultBean();
        bean.success();
        try {
            jsChinaMobileApiService.validateSMSCode(instanceId, smsCode);
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("验证短信验证码", e);
        }
        return bean;
    }

    /**
     * 重新下发短信码
     *
     * @param instanceId
     * @return
     */
    @RequestMapping(value = "/sendSMSCode")
    public BaseResultBean sendSMSCode(String instanceId) {
        logger.info("重新下发短信码", instanceId);
        BaseResultBean bean = new BaseResultBean();
        try {
            jsChinaMobileApiService.sendSMSCode(instanceId);
            bean.success();
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("重新下发短信码", e);
        }
        return bean;
    }


    /**
     * 接受用户填写基本信息
     *
     * @return
     */
    @RequestMapping(value = "/customerInformation")
    public BaseResultBean customerInformation(JsChinaCrawlerInstance jsChinaCrawlerInstance) {
        logger.info("接受用户填写基本信息", jsChinaCrawlerInstance);
        BaseResultBean bean = new BaseResultBean();
        try {
            jsChinaMobileApiService.addCustomerInformation(jsChinaCrawlerInstance);
            bean.success();
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("接受用户填写基本信息", e);
        }
        return bean;
    }

    /**
     * 查询报告
     *
     * @param instanceId
     * @return
     */
    @RequestMapping(value = "/getReport")
    public BaseResultBean getReport(String instanceId) {
        logger.info("查询报告");
        BaseResultBean bean = new BaseResultBean();
        try {
            JsChinaCrawlerReport report = jsChinaMobileApiService.getReport(instanceId);
            bean.setResult(report.getMap());
            bean.success();
        } catch (ResultException e) {
            bean.failure(e);
        } catch (Exception e) {
            bean.failure();
            logger.error("查询报告", e);
        }
        return bean;
    }

    /**
     * 验证码服务
     *
     * @param fileName
     * @return
     * @throws IOException
     */
    @RequestMapping("/getVerifyCodeImg/{fileName}.{suffix}")
    public ResponseEntity<byte[]> getVerifyCodeImg(@PathVariable("fileName") String fileName, @PathVariable("suffix") String suffix) throws IOException {
        fileName = fileName + "." + suffix;
        File file = new File(configProperties.getVerificationCodePath() + fileName);
        HttpHeaders headers = new HttpHeaders();
        fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
        headers.setContentDispositionFormData("attachment", fileName);
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        return new ResponseEntity(FileUtils.readFileToByteArray(file), headers, HttpStatus.OK);
    }


}
