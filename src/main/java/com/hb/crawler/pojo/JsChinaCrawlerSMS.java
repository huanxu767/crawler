package com.hb.crawler.pojo;

import java.util.Date;

/**
 * 江苏移动短信详情
 */
public class JsChinaCrawlerSMS {

    private long id;
    private String instanceId;
    private String mobile;
    private String startTime;
    private String visitArear;
    private String statusType;
    private String otherParty;
    private String totalFee;
    private String infoLen;
    private String userMobile;
    private Date createTime;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getVisitArear() {
        return visitArear;
    }

    public void setVisitArear(String visitArear) {
        this.visitArear = visitArear;
    }

    public String getStatusType() {
        return statusType;
    }

    public void setStatusType(String statusType) {
        this.statusType = statusType;
    }

    public String getOtherParty() {
        return otherParty;
    }

    public void setOtherParty(String otherParty) {
        this.otherParty = otherParty;
    }

    public String getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(String totalFee) {
        this.totalFee = totalFee;
    }

    public String getInfoLen() {
        return infoLen;
    }

    public void setInfoLen(String infoLen) {
        this.infoLen = infoLen;
    }

    public String getUserMobile() {
        return userMobile;
    }

    public void setUserMobile(String userMobile) {
        this.userMobile = userMobile;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
