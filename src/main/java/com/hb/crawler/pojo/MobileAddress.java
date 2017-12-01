package com.hb.crawler.pojo;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 手机归属地
 */
public class MobileAddress {
    /**
     * 手机前缀
     */
    private String mobilePrefix;
    /**
     * 省份
     */
    private String province;
    /**
     * 城市
     */
    private String city;
    /**
     * 运营商
     */
    private String operator;
    /**
     * 状态 1抓取成功 0抓取失败
     */
    private String statusType;
    /**
     * 创建时间
     */
    private Date createTime;

    public String getMobilePrefix() {
        return mobilePrefix;
    }

    public void setMobilePrefix(String mobilePrefix) {
        this.mobilePrefix = mobilePrefix;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public String getStatusType() {
        return statusType;
    }

    public void setStatusType(String statusType) {
        this.statusType = statusType;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "MobileAddress{" +
                "mobilePrefix='" + mobilePrefix + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", operator='" + operator + '\'' +
                ", statusType='" + statusType + '\'' +
                ", createTime=" + createTime +
                '}';
    }

    public Map toMap() {
        Map map = new HashMap();
        map.put("province",this.province);
        map.put("city",this.city);
        map.put("operator",this.operator);
        return map;
    }
}
