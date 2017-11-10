package com.hb.crawler.pojo;

import java.util.Date;

public class JsChinaCrawlerCall {

    private long id;
    private String instanceId;
    private String mobile;
    private String callDuration;
    private String callType;
    private String statusType;
    private String summaryCallType;
    private String pkgCode;
    private String highDefinition;
    private String otherParty;
    private String roamType;
    private String startTime;
    private String totalFee;
    private String userMobile;
    private String visitArear;
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

    public String getCallDuration() {
        return callDuration;
    }

    public void setCallDuration(String callDuration) {
        this.callDuration = callDuration;
    }

    public String getCallType() {
        return callType;
    }

    public void setCallType(String callType) {
        this.callType = callType;
    }

    public String getHighDefinition() {
        return highDefinition;
    }

    public void setHighDefinition(String highDefinition) {
        this.highDefinition = highDefinition;
    }

    public String getOtherParty() {
        return otherParty;
    }

    public void setOtherParty(String otherParty) {
        this.otherParty = otherParty;
    }

    public String getStatusType() {
        return statusType;
    }

    public void setStatusType(String statusType) {
        this.statusType = statusType;
    }

    public String getRoamType() {
        return roamType;
    }

    public void setRoamType(String roamType) {
        this.roamType = roamType;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(String totalFee) {
        this.totalFee = totalFee;
    }

    public String getUserMobile() {
        return userMobile;
    }

    public void setUserMobile(String userMobile) {
        this.userMobile = userMobile;
    }

    public String getVisitArear() {
        return visitArear;
    }

    public void setVisitArear(String visitArear) {
        this.visitArear = visitArear;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getPkgCode() {
        return pkgCode;
    }

    public void setPkgCode(String pkgCode) {
        this.pkgCode = pkgCode;
    }

    public String getSummaryCallType() {
        return summaryCallType;
    }

    public void setSummaryCallType(String summaryCallType) {
        this.summaryCallType = summaryCallType;
    }
}
