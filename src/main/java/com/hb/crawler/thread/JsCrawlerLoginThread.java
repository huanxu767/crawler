package com.hb.crawler.thread;

import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.JsChinaCrawlerSourceLog;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.service.impl.JsChinaMobileApiServiceImpl;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import com.hb.crawler.util.MDateUtils;
import com.hb.crawler.util.PattenUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;


public class JsCrawlerLoginThread implements Runnable {

    static Logger logger = LoggerFactory.getLogger(JsChinaMobileApiServiceImpl.class);

    /**
     * 程序出错重试次数
     */
    private int times = 3;

    private CookieManager cookieManager;

    private JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper;

    private String instanceId;

    public JsCrawlerLoginThread(String instanceId, CookieManager cookieManager, JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper) {
        this.instanceId = instanceId;
        this.cookieManager = cookieManager;
        this.jsChinaCrawlerSourceLogMapper = jsChinaCrawlerSourceLogMapper;
    }

    @Override
    public void run() {
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        webClient.setCookieManager(cookieManager);
        getDetail(webClient);
        webClient.close();
    }

    private void getDetail(WebClient webClient) {
        String phoneRemain = "";
        String js = "$('.font-pink1').html();";
        String creditLevelFlagJs = "$('#popBox-verifyCode-idType').is(':visible');";
        String creditLevelJs = "$('#creditlevalchinese').text();";
        JsChinaCrawlerSourceLog jsChinaCrawlerSourceLog = new JsChinaCrawlerSourceLog();
        try {
            jsChinaCrawlerSourceLog.setInstanceId(instanceId);
            // 取余额
            HtmlPage htmlPage = webClient.getPage(JsChinaMobileUrl.BALANCE_URL);
            ScriptResult scriptResult = htmlPage.executeJavaScript(js);
            String account = scriptResult.getJavaScriptResult().toString();
            if (!StringUtils.isEmpty(account)) {
                phoneRemain = PattenUtils.getNumbers(account);
            }

            ScriptResult creditFlagScriptResult = htmlPage.executeJavaScript(creditLevelFlagJs);
            int creditLevel = 0;
            if (Boolean.parseBoolean(creditFlagScriptResult.getJavaScriptResult().toString())) {
                ScriptResult creditScriptResult = htmlPage.executeJavaScript(creditLevelJs);
                creditLevel = Integer.parseInt(PattenUtils.getNumbers(creditScriptResult.getJavaScriptResult().toString()));
            }

            jsChinaCrawlerSourceLog.setCreditLevel(creditLevel);

            // 取近个月花费金额
            TextPage monthBillTextPage = webClient.getPage(JsChinaMobileUrl.BILL_URL + MDateUtils.getLastMonthYearMonth());
            String monthBill = monthBillTextPage.getContent().toString();

            // 开通的套餐
            TextPage openedPackageTextPage = webClient.getPage(JsChinaMobileUrl.OPENED_PACKAGE + MDateUtils.getLastMonthYearMonth());
            String openedPackage = openedPackageTextPage.getContent().toString();
            // 开通的业务
            TextPage openedBusinessTextPage = webClient.getPage(JsChinaMobileUrl.OPENED_BUSINESS + MDateUtils.getLastMonthYearMonth());
            String openedBusiness = openedBusinessTextPage.getContent().toString();
            // 开通的功能
            TextPage openedFunctionTextPage = webClient.getPage(JsChinaMobileUrl.OPENED_FUNCTION + MDateUtils.getLastMonthYearMonth());
            String openedFunction = openedFunctionTextPage.getContent().toString();

            jsChinaCrawlerSourceLog.setAccountBalance(phoneRemain);
            jsChinaCrawlerSourceLog.setMonthBill(monthBill);
            jsChinaCrawlerSourceLog.setOpenedPackage(openedPackage);
            jsChinaCrawlerSourceLog.setOpenedBusiness(openedBusiness);
            jsChinaCrawlerSourceLog.setOpenedFunction(openedFunction);

            jsChinaCrawlerSourceLogMapper.updateJsChinaCrawlerSourceLog(jsChinaCrawlerSourceLog);
        } catch (Exception e) {
            if (--times <= 0) {
                logger.error("获取个人账单：", e);
            }
            getDetail(webClient);
        }
    }

}
