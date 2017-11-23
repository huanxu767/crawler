package com.hb.crawler.pojo;

/**
 * 江苏网页地址结合
 */
public class JsChinaMobileUrl {

    /**
     * 登录页地址
     */
    public static final String LOGIN_URL = "http://service.js.10086.cn/login.html";

    /**
     * 登录接口地址
     */
    public static final String LOGIN_INTERFACE_URL = "http://service.js.10086.cn/my/actionDispatcher.do?" +
            "userLoginTransferProtocol=https" +
            "&reqUrl=login" +
            "&busiNum=LOGIN" +
            "&operType=0" +
            "&passwordType=1" +
            "&isSavePasswordVal=0" +
            "&isSavePasswordVal_N=1" +
            "&currentD=1" +
            "&loginFormTab=http" +
            "&loginType=1" +
            "&smsFlag=1" +
            "&phone-login=on" +
            "&mobile={mobile}&city=NJDQ&password={password}&verifyCode={verificationCode}";

    /**
     * 通话详情记录
     */
    public static final String MY_DETAIL_CALL_URL = "http://service.js.10086.cn/my/MY_QDCX.html#home";

    /**
     * 余额及有效期
     */
    public static final String BALANCE_URL = "http://service.js.10086.cn/my/MY_ZHYEJYXQ.html#home";

    /**
     * 个人账单
     */
    public static final String BILL_URL = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_GRZDQuery&busiNum=ZDCX&methodName=getMobileHistoryBill&beginDate=";
    /**
     * 我开通的套餐
     */
    public static final String OPENED_PACKAGE = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_WDYWQuery&operNum=2&busiNum=TCJYWCX_MWYW&queryPageNum=1";

    /**
     * 我开通的业务
     */
    public static final String OPENED_BUSINESS = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_WDYWQuery&operNum=2&busiNum=TCJYWCX_MWYW&queryPageNum=1";

    /**
     * 我开通的功能
     */
    public static final String OPENED_FUNCTION = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_WDYWQuery&operNum=3&busiNum=TCJYWCX_FJGN&queryPageNum=1";

    /**
     * 语音账单
     */
    public static final String CALL_URL = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&operType:3" +
            "&queryItem=1&queryBeginTime={beginTime}&queryEndTime={endTime}";

    /**
     * 移动数据流量
     */
    public static final String NET_URL = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&operType:3" +
            "&queryItem=7&queryBeginTime={beginTime}&queryEndTime={endTime}";
    /**
     * 短信
     */
    public static final String MESSAGE_URL = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&operType:3" +
            "&queryItem=6&queryBeginTime={beginTime}&queryEndTime={endTime}";
}
