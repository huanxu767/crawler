package com.hb.crawler.exception;

import com.hb.crawler.pojo.ReturnCode;

/**
 * 自定义异常类
 * <p/>
 */
public class ResultException extends RuntimeException {
    /**
     * Exception code
     */
    private String resultCode = "";
    /**
     * Exception message
     */
    private String resultMsg = "";

    public ResultException() {

    }

    public ResultException(String resultCode) {
        this.resultCode = resultCode;
        this.resultMsg = ReturnCode.getDefine(resultCode);
    }

    public ResultException(String resultCode, String resultMsg) {
        this.resultCode = resultCode;
        this.resultMsg = resultMsg;
    }

    public String getResultCode() {
        return resultCode;
    }

    public String getResultMsg() {
        return resultMsg;
    }
}
