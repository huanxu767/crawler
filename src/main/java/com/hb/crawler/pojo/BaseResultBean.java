package com.hb.crawler.pojo;


import com.github.pagehelper.PageInfo;
import com.hb.crawler.exception.ResultException;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 增、删、改操作结果
 *
 * @author xuhuan
 */
public class BaseResultBean {

    private boolean success;
    private String code = "";
    private String msg = "";

    private Map result = new HashMap();

    public Map getResult() {
        return result;
    }

    public void setResult(Map result) {
        this.result.putAll(result);
    }

    public void setResult(PageInfo page) {
        this.result.put("page", page);
    }

    public void setResult(List list) {
        this.result.put("list", list);
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public void success() {
        this.success = true;
        this.code = ReturnCode.SUCCESS;
        this.msg = ReturnCode.getDefine(ReturnCode.SUCCESS);
    }

    public void failure() {
        this.success = false;
        if (StringUtils.isEmpty(this.msg)) {
            this.msg = "系统异常，请稍后重试";
        }
    }

    public void failure(String code, String msg) {
        this.success = false;
        this.code = code;
        this.msg = msg;
    }

    public void failure(String code) {
        this.success = false;
        this.code = code;
        this.msg = ReturnCode.getDefine(code);
    }

    public void failure(ResultException e) {
        this.success = false;
        this.code = e.getResultCode();
        this.msg = e.getResultMsg();
    }
}
