package com.hb.crawler.util;

import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.ReturnCode;
import org.springframework.util.StringUtils;

public class ValidateParamsUtils {

    public static void validatePreLoinParams(String mobile, String realName, String identityCode){
        if (StringUtils.isEmpty(mobile) || StringUtils.isEmpty(realName)) {
            throw new ResultException(ReturnCode.PARAMS_NOT_ENOUGH);
        }
        // 验证手机号格式
        if (!StringPatternUtils.isMobile(mobile)) {
            throw new ResultException(ReturnCode.PARAMS_FORMAT_ERROR);
        }
    }

    public static void validateLoinParams(String instanceId, String mobile, String password, String verificationCode) {

    }
}
