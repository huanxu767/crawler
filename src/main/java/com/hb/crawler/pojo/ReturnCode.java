package com.hb.crawler.pojo;

import java.util.HashMap;
import java.util.Map;

/**
 * 返回码
 */
public class ReturnCode {
    /**
     * 成功
     */
    public static final String SUCCESS = "0";

    /**
     * 未知错误
     */
    public static final String UNKNOWN = "10000";

    /**
     * 参数不全
     */
    public static final String PARAMS_NOT_ENOUGH = "10001";
    /**
     * 参数格式不正确
     */
    public static final String PARAMS_FORMAT_ERROR = "10002";


    /**
     * 用户名密码不能为空
     */
    public static final String USER_PWD_NULL = "20001";

    /**
     * 实例编号不能为空
     */
    public static final String INSTANCE_ID_NULL = "20002";


    /**
     * 已登录，请不要重复调用
     */
    public static final String HAS_LOGIN = "20003";

    /**
     * 验证码不能为空
     */
    public static final String VERIFICATION_CODE_NULL = "20004";


    /**
     * 实例过期
     */
    public static final String INSTANCE_ID_EXPIRE = "20005";

    /**
     * 短信验证码重试次数超过3次
     */
    public static final String SMS_CODE_RETRY_TIMES_EXCEEDED = "20006";


    /**
     * 距离上次短信验证码发送间隔30秒
     */
    public static final String SMS_CODE_PERIOD = "20007";

    /**
     * 短信验证码重试次数超过3次,并且距离上次短信验证码发送间隔30秒
     */
    public static final String SMS_CODE_RETRY_TIMES_EXCEEDED_PERIOD = "20008";

    /**
     * 短信验证码验证不正确
     */
    public static final String SMS_CODE_WRONG = "20009";

    /**
     * 短信码已验证
     */
    public static final String HAS_SMS_CODE_CHECKED = "20010";
    /**
     * 不需要短信验证码
     */
    public static final String NO_NEED_VERIFICATION_CODE = "20011";

    /**
     * 实例不存在
     */
    public static final String INSTANCE_ID_NOT_EXSIT = "20012";
    /**
     * 流程尚未走完
     */
    public static final String INSTANCE_NOT_END = "20013";
    /**
     * 报告尚未生成
     */
    public static final String REPORT_NOT_END = "20014";

    /**
     * 登录失败 错误描述由页面返回
     */
    public static final String LOGIN_FAILURE = "30000";


    static Map<String, String> codeMap = new HashMap();

    static {
        codeMap.put(SUCCESS, "成功");
        codeMap.put(UNKNOWN, "未知错误");
        codeMap.put(PARAMS_NOT_ENOUGH, "参数不全");
        codeMap.put(PARAMS_FORMAT_ERROR, "参数格式不正确");
        codeMap.put(USER_PWD_NULL, "用户名密码不能为空");
        codeMap.put(INSTANCE_ID_NULL, "实例不能为空");
        codeMap.put(HAS_LOGIN, "已登录，请不要重复调用");
        codeMap.put(VERIFICATION_CODE_NULL, "验证码不能为空");
        codeMap.put(INSTANCE_ID_EXPIRE, "实例已失效");
        codeMap.put(SMS_CODE_RETRY_TIMES_EXCEEDED, "短信验证码重试次数超过3次");
        codeMap.put(SMS_CODE_PERIOD, "距离上次短信验证码发送间隔30秒");
        codeMap.put(SMS_CODE_RETRY_TIMES_EXCEEDED_PERIOD, "短信验证码重试次数超过3次,并且距离上次短信验证码发送间隔30秒");
        codeMap.put(SMS_CODE_WRONG, "短信验证码验证不正确");
        codeMap.put(HAS_SMS_CODE_CHECKED, "短信码已验证");
        codeMap.put(INSTANCE_ID_NOT_EXSIT, "实例不存在");
        codeMap.put(INSTANCE_NOT_END, "流程未走完");
        codeMap.put(REPORT_NOT_END, "数据尚未解析完");
    }

    /**
     * 获得中文注释
     *
     * @param code
     * @return
     */
    public static String getDefine(String code) {
        return codeMap.get(code);
    }

}
