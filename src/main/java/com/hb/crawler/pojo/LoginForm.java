package com.hb.crawler.pojo;

/**
 * 登陆表单
 */
public class LoginForm {
    /**
     * 实例编号
     */
    private String instanceId;

    /**
     * imei号
     */
    private String imei;

    /**
     * 用户名
     */
    private String mobile;
    /**
     * 密码
     */
    private String password;
    /**
     * 验证码
     */
    private String verificationCode;

    public String getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    @Override
    public String toString() {
        return "LoginForm{" +
                "instanceId='" + instanceId + '\'' +
                ", imei='" + imei + '\'' +
                ", mobile='" + mobile + '\'' +
                ", password='" + password + '\'' +
                ", verificationCode='" + verificationCode + '\'' +
                '}';
    }
}
