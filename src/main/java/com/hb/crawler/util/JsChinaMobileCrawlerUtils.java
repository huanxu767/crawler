package com.hb.crawler.util;

/**
 * 江苏移动爬虫工具包
 */

import com.gargoylesoftware.htmlunit.*;
import java.util.HashMap;

/**
 * 江苏移动网上营业厅
 * 信息抓取
 */
public class JsChinaMobileCrawlerUtils {

    /**
     * 获取WebClient实例
     *
     * @param jsEnabledFlag 是否启动js编译器
     * @return
     */
    public static final WebClient getWebClient(boolean jsEnabledFlag) {
        final WebClient wc = new WebClient(BrowserVersion.CHROME);
        wc.setJavaScriptTimeout(10000);
        wc.getOptions().setJavaScriptEnabled(jsEnabledFlag); // 启用JS解释器，默认为true
        wc.getOptions().setCssEnabled(true); // 禁用css支持
//        wc.getOptions().setDownloadImages(true);
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
        return wc;
    }

    /**
     * 获取WebClient实例
     *
     * @param jsEnabledFlag 是否启动js编译器
     * @return
     */
    public static final WebClient getWebClient(boolean jsEnabledFlag,String ip,int port) {
        final WebClient wc = new WebClient(BrowserVersion.CHROME,ip,port);
        wc.setJavaScriptTimeout(10000);
        wc.getOptions().setJavaScriptEnabled(jsEnabledFlag); // 启用JS解释器，默认为true
        wc.getOptions().setCssEnabled(false); // 禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
        return wc;
    }

    /**
     * 时间间隔
     *
     * @param t1
     * @param t2
     */
    static void timeInterval(Long t1, Long t2) {
        System.out.println("间隔：" + (t2 - t1) / 1000 + "S");
    }


}

