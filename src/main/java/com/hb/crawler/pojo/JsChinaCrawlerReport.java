package com.hb.crawler.pojo;

import java.util.Date;

/**
 * 江苏移动用户报告
 */
public class JsChinaCrawlerReport {
    private Long id;
    private String instanceId;
    private String mobile;
    private String user_name;

    private String isRealName;
    private Long monthAveragePayment;
    private Long maxPayment;
    private Long standardDeviation;
    private Long emergencyContactDays ;
    private Long totalContact ;
    private String isGroup;
    private Long joinGroupDays ;
    private Long onlineDays ;
    private Long creditLevel ;
    private Long accountBalance ;
    private Long continuousOfflineDays ;
    private Long offlineDaysTimes ;

    private Date createTime ;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getIsRealName() {
        return isRealName;
    }

    public void setIsRealName(String isRealName) {
        this.isRealName = isRealName;
    }

    public Long getMonthAveragePayment() {
        return monthAveragePayment;
    }

    public void setMonthAveragePayment(Long monthAveragePayment) {
        this.monthAveragePayment = monthAveragePayment;
    }

    public Long getMaxPayment() {
        return maxPayment;
    }

    public void setMaxPayment(Long maxPayment) {
        this.maxPayment = maxPayment;
    }

    public Long getStandardDeviation() {
        return standardDeviation;
    }

    public void setStandardDeviation(Long standardDeviation) {
        this.standardDeviation = standardDeviation;
    }

    public Long getEmergencyContactDays() {
        return emergencyContactDays;
    }

    public void setEmergencyContactDays(Long emergencyContactDays) {
        this.emergencyContactDays = emergencyContactDays;
    }

    public Long getTotalContact() {
        return totalContact;
    }

    public void setTotalContact(Long totalContact) {
        this.totalContact = totalContact;
    }

    public String getIsGroup() {
        return isGroup;
    }

    public void setIsGroup(String isGroup) {
        this.isGroup = isGroup;
    }

    public Long getJoinGroupDays() {
        return joinGroupDays;
    }

    public void setJoinGroupDays(Long joinGroupDays) {
        this.joinGroupDays = joinGroupDays;
    }

    public Long getOnlineDays() {
        return onlineDays;
    }

    public void setOnlineDays(Long onlineDays) {
        this.onlineDays = onlineDays;
    }

    public Long getCreditLevel() {
        return creditLevel;
    }

    public void setCreditLevel(Long creditLevel) {
        this.creditLevel = creditLevel;
    }

    public Long getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Long accountBalance) {
        this.accountBalance = accountBalance;
    }

    public Long getContinuousOfflineDays() {
        return continuousOfflineDays;
    }

    public void setContinuousOfflineDays(Long continuousOfflineDays) {
        this.continuousOfflineDays = continuousOfflineDays;
    }

    public Long getOfflineDaysTimes() {
        return offlineDaysTimes;
    }

    public void setOfflineDaysTimes(Long offlineDaysTimes) {
        this.offlineDaysTimes = offlineDaysTimes;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
