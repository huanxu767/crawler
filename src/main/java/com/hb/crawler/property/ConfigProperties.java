package com.hb.crawler.property;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

/**
 * Created by xuhuan
 */
@Component("configProperties")
public class ConfigProperties {

    @Value("${verificationCode.path}")
    private String verificationCodePath;

    @Value("${localhost.url}")
    private String localhostUrl;

    public String getVerificationCodePath() {
        return verificationCodePath;
    }

    public String getLocalhostUrl(String imagePath) {
        return StringUtils.isEmpty(imagePath)?"":localhostUrl+imagePath;
    }
}
