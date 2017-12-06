package com.hb.crawler.property;

import org.springframework.util.StringUtils;

/**
 * Created by xuhuan
 */
public class ConfigProperties {

    private String verificationCodePath;

    private String localhostUrl;

    private String pythonWebUrl;

    public void setVerificationCodePath(String verificationCodePath) {
        this.verificationCodePath = verificationCodePath;
    }

    public String getLocalhostUrl() {
        return localhostUrl;
    }

    public void setLocalhostUrl(String localhostUrl) {
        this.localhostUrl = localhostUrl;
    }

    public String getVerificationCodePath() {
        return verificationCodePath;
    }

    public String getLocalhostUrl(String imagePath) {
        return StringUtils.isEmpty(imagePath)?"":localhostUrl+imagePath;
    }

    public String getPythonWebUrl() {
        return pythonWebUrl;
    }

    public void setPythonWebUrl(String pythonWebUrl) {
        this.pythonWebUrl = pythonWebUrl;
    }
}
