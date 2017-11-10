package com.hb.crawler.pojo;

import java.util.Date;

/**
 * 江苏移动上网记录
 */
public class JsChinaCrawlerNet {

    private long id;
    private String instanceId;
    private String mobile;
    private String startTime;
    private String cdrApnni;
    private String duration;
    private String busyData;
    private String packageFee;
    private String msnc;
    private String totalFee;

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

    public String getCdrApnni() {
        return cdrApnni;
    }

    public void setCdrApnni(String cdrApnni) {
        this.cdrApnni = cdrApnni;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getBusyData() {
        return busyData;
    }

    public void setBusyData(String busyData) {
        this.busyData = busyData;
    }

    public String getPackageFee() {
        return packageFee;
    }

    public void setPackageFee(String packageFee) {
        this.packageFee = packageFee;
    }

    public String getMsnc() {
        return msnc;
    }

    public void setMsnc(String msnc) {
        this.msnc = msnc;
    }

    public String getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(String totalFee) {
        this.totalFee = totalFee;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
