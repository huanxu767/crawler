package com.hb.crawler.pojo;


/**
 * 江苏爬虫实例缓存
 */
public class JsSpiderInstance {
    /**
     * 实例编号
     */
    private String instanceId;
    /**
     * 是否需要图形验证码
     */
    private boolean needVerifyCode = false;
    /**
     * 客户端编号
     */
    private String imei;
    /**
     * 手机号
     */
    private String mobile;
    /**
     * 步骤
     */
    private int step;

    public JsSpiderInstance() {
    }

    public JsSpiderInstance(String instanceId, boolean needVerifyCode, String imei, String mobile, int step) {
        this.instanceId = instanceId;
        this.needVerifyCode = needVerifyCode;
        this.imei = imei;
        this.mobile = mobile;
        this.step = step;
    }

    public String getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }

    public boolean isNeedVerifyCode() {
        return needVerifyCode;
    }

    public void setNeedVerifyCode(boolean needVerifyCode) {
        this.needVerifyCode = needVerifyCode;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getStep() {
        return step;
    }

    public void setStep(int step) {
        this.step = step;
    }

    @Override
    public String toString() {
        return "JsSpiderInstance{" +
                "instanceId='" + instanceId + '\'' +
                ", needVerifyCode=" + needVerifyCode +
                ", imei='" + imei + '\'' +
                ", mobile='" + mobile + '\'' +
                ", step=" + step +
                '}';
    }
}
