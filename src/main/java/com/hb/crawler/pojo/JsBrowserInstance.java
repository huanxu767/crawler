package com.hb.crawler.pojo;

import com.gargoylesoftware.htmlunit.WebClient;

/**
 * 江苏移动爬虫实例
 */
public class JsBrowserInstance {
    /**
     * 实例编号
     */
    private String instanceId;
    /**
     * 是否需要图形验证码
     */
    private boolean needVerifyCode = false;
    /**
     * webClient客户端
     */
    private WebClient webClient;

    public String getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }

    public WebClient getWebClient() {
        return webClient;
    }

    public void setWebClient(WebClient webClient) {
        this.webClient = webClient;
    }

    public boolean isNeedVerifyCode() {
        return needVerifyCode;
    }

    public void setNeedVerifyCode(boolean needVerifyCode) {
        this.needVerifyCode = needVerifyCode;
    }
}
