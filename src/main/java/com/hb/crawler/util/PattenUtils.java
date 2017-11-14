package com.hb.crawler.util;

import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PattenUtils {

    private static int times = 3;

    /**
     * 取字符串中数字
     *
     * @param msg
     * @return
     */
    public static String getNumbers(String msg) {
        String regEx = "[^0-9]";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(msg);
        return m.replaceAll("").trim();
    }

    private static void getDetail(final WebClient webClient) {
        String phoneRemain = "";
        String js = "$('.font-pink1').html();";
        try {
            // 取余额
            HtmlPage htmlPage = webClient.getPage("http://www.baidu.com");
            int j = 1 / 0;
        } catch (Exception e) {
            System.out.println(times);
            if (--times <= 0) {
                e.printStackTrace();
            } else {
                getDetail(webClient);
            }
        }
    }

    public static void main(String[] args) {
        final WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        getDetail(webClient);
        webClient.close();
    }
}
