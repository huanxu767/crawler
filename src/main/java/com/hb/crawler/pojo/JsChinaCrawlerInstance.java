package com.hb.crawler.pojo;


import java.util.Date;

/**
 * 江苏爬虫实例缓存
 */
public class JsChinaCrawlerInstance {

    public final static String NEED_VERIFY_CODE = "1";
    public final static String NOT_NEED_VERIFY_CODE = "0";
    /**
     * 实例编号
     */
    private String instanceId;

    /**
     * 手机号
     */
    private String mobile;
    /**
     * 密码
     */
    private String password;

    /**
     * 是否需要图形验证码 0 不需要 1 需要
     */
    private String needVerifyCode;
    /**
     * 客户端编号
     */
    private String imei;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 第一个紧急联系人
     */
    private String firstEmergencyContact;
    /**
     * 第二个紧急联系人
     */
    private String secondEmergencyContact;
    /**
     * 状态1预登录，2登录，3验证码，4用户信息提交
     */
    private String status;
    /**
     * 最近更新时间
     */
    private Date lastUpdateTime;
    /**
     * 完成时间
     */
    private Date finishTime;
    /**
     * 创建时间
     */
    private Date createTime;


    public JsChinaCrawlerInstance() {

    }

    public JsChinaCrawlerInstance(String instanceId) {
        this.instanceId = instanceId;
    }

    public JsChinaCrawlerInstance(String instanceId, String mobile, String imei) {
        this.instanceId = instanceId;
        this.mobile = mobile;
        this.imei = imei;
    }

    public JsChinaCrawlerInstance(String instanceId, String userName, String firstEmergencyContact, String secondEmergencyContact) {
        this.instanceId = instanceId;
        this.userName = userName;
        this.firstEmergencyContact = firstEmergencyContact;
        this.secondEmergencyContact = secondEmergencyContact;
        Date date = new Date();
        this.lastUpdateTime = date;
        this.finishTime = date;

    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

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

    public String getNeedVerifyCode() {
        return needVerifyCode;
    }

    public void setNeedVerifyCode(String needVerifyCode) {
        this.needVerifyCode = needVerifyCode;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstEmergencyContact() {
        return firstEmergencyContact;
    }

    public void setFirstEmergencyContact(String firstEmergencyContact) {
        this.firstEmergencyContact = firstEmergencyContact;
    }

    public String getSecondEmergencyContact() {
        return secondEmergencyContact;
    }

    public void setSecondEmergencyContact(String secondEmergencyContact) {
        this.secondEmergencyContact = secondEmergencyContact;
    }

    public Date getLastUpdateTime() {
        return lastUpdateTime;
    }

    public void setLastUpdateTime(Date lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
    }

    public Date getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Date finishTime) {
        this.finishTime = finishTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "JsChinaCrawlerInstance{" +
                "instanceId='" + instanceId + '\'' +
                ", mobile='" + mobile + '\'' +
                ", needVerifyCode='" + needVerifyCode + '\'' +
                ", imei='" + imei + '\'' +
                ", userName='" + userName + '\'' +
                ", firstEmergencyContact='" + firstEmergencyContact + '\'' +
                ", secondEmergencyContact='" + secondEmergencyContact + '\'' +
                ", status='" + status + '\'' +
                ", lastUpdateTime=" + lastUpdateTime +
                ", finishTime=" + finishTime +
                ", createTime=" + createTime +
                '}';
    }
}
