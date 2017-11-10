package com.hb.crawler.property;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Created by xuhuan
 */
@Component("configProperties")
public class ConfigProperties {

    @Value("${verificationCode.path}")
    private String verificationCodePath;

    public String getVerificationCodePath() {
        return verificationCodePath;
    }

}
