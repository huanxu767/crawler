package com.hb.crawler.pojo;



import java.util.Date;

/**
 * 爬虫实例
 */
public class CrawlerInstance {
    /**
     * 编号
     */
    private Long id;
    /**
     * 实例编号
     */
    private String instanceId;
    /**
     * 实例类型 jsChinaMobile 江苏移动
     */
    private String typeCode;
    /**
     * 状态：0过期，1生效中，2正常结束
     */
    private Integer status;
    /**
     * 过期时间
     */
    private Date expirationTime;
    /**
     * 创建时间
     */
    private Date createTime;

    public CrawlerInstance() {

    }

    public CrawlerInstance(String instanceId, Date expirationTime) {
        this.instanceId = instanceId;
        this.typeCode = "jsChinaMobile";
        this.expirationTime = expirationTime;
    }

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

    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(String typeCode) {
        this.typeCode = typeCode;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getExpirationTime() {
        return expirationTime;
    }

    public void setExpirationTime(Date expirationTime) {
        this.expirationTime = expirationTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
