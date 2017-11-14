package com.hb.crawler.pojo;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 江苏移动用户报告
 */
public class JsChinaCrawlerReport {
    private Long id;
    private String instanceId;
    private String mobile;

    private String realName;
    private String isRealName;
    private int monthAveragePayment;
    private int maxPayment;
    private int standardDeviation;
    private int emergencyContactDays;
    private int totalContact;
    private String isGroup;
    private int joinGroupDays;
    private int onlineDays;
    private int creditLevel;
    private int accountBalance;
    private int continuousOfflineDays;
    private int offlineDaysTimes;

    private Date createTime;

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

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getIsRealName() {
        return isRealName;
    }

    public void setIsRealName(String isRealName) {
        this.isRealName = isRealName;
    }

    public int getMonthAveragePayment() {
        return monthAveragePayment;
    }

    public void setMonthAveragePayment(int monthAveragePayment) {
        this.monthAveragePayment = monthAveragePayment;
    }

    public int getMaxPayment() {
        return maxPayment;
    }

    public void setMaxPayment(int maxPayment) {
        this.maxPayment = maxPayment;
    }

    public int getStandardDeviation() {
        return standardDeviation;
    }

    public void setStandardDeviation(int standardDeviation) {
        this.standardDeviation = standardDeviation;
    }

    public int getEmergencyContactDays() {
        return emergencyContactDays;
    }

    public void setEmergencyContactDays(int emergencyContactDays) {
        this.emergencyContactDays = emergencyContactDays;
    }

    public int getTotalContact() {
        return totalContact;
    }

    public void setTotalContact(int totalContact) {
        this.totalContact = totalContact;
    }

    public String getIsGroup() {
        return isGroup;
    }

    public void setIsGroup(String isGroup) {
        this.isGroup = isGroup;
    }

    public int getJoinGroupDays() {
        return joinGroupDays;
    }

    public void setJoinGroupDays(int joinGroupDays) {
        this.joinGroupDays = joinGroupDays;
    }

    public int getOnlineDays() {
        return onlineDays;
    }

    public void setOnlineDays(int onlineDays) {
        this.onlineDays = onlineDays;
    }

    public int getCreditLevel() {
        return creditLevel;
    }

    public void setCreditLevel(int creditLevel) {
        this.creditLevel = creditLevel;
    }

    public int getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(int accountBalance) {
        this.accountBalance = accountBalance;
    }

    public int getContinuousOfflineDays() {
        return continuousOfflineDays;
    }

    public void setContinuousOfflineDays(int continuousOfflineDays) {
        this.continuousOfflineDays = continuousOfflineDays;
    }

    public int getOfflineDaysTimes() {
        return offlineDaysTimes;
    }

    public void setOfflineDaysTimes(int offlineDaysTimes) {
        this.offlineDaysTimes = offlineDaysTimes;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Map getMap() {
        Map map = new HashMap();
        map.put("R000", true);
        map.put("IR000", "");
        map.put("R001", "0".equals(isRealName) ? false : true);
        map.put("F000", monthAveragePayment);
        map.put("F0001", maxPayment);
        map.put("F0002", standardDeviation);
        map.put("F001", emergencyContactDays);
        map.put("F002", totalContact);
        map.put("F003", "0".equals(isGroup) ? false : true);
        map.put("F005", joinGroupDays);
        map.put("F006", creditLevel);
        map.put("F007", accountBalance);
        map.put("F0031", joinGroupDays);
        map.put("F010", continuousOfflineDays);
        map.put("F009", offlineDaysTimes);
        return map;
    }


    @Override
    public String toString() {
        return "JsChinaCrawlerReport{" +
                "id=" + id +
                ", instanceId='" + instanceId + '\'' +
                ", mobile='" + mobile + '\'' +
                ", realName='" + realName + '\'' +
                ", isRealName='" + isRealName + '\'' +
                ", monthAveragePayment=" + monthAveragePayment +
                ", maxPayment=" + maxPayment +
                ", standardDeviation=" + standardDeviation +
                ", emergencyContactDays=" + emergencyContactDays +
                ", totalContact=" + totalContact +
                ", isGroup='" + isGroup + '\'' +
                ", joinGroupDays=" + joinGroupDays +
                ", onlineDays=" + onlineDays +
                ", creditLevel=" + creditLevel +
                ", accountBalance=" + accountBalance +
                ", continuousOfflineDays=" + continuousOfflineDays +
                ", offlineDaysTimes=" + offlineDaysTimes +
                ", createTime=" + createTime +
                '}';
    }
}
