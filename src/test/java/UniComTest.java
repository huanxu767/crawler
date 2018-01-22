import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.JsChinaCrawlerCall;
import com.hb.crawler.pojo.JsChinaCrawlerNet;
import com.hb.crawler.pojo.JsChinaCrawlerSMS;
import com.hb.crawler.pojo.JsChinaCrawlerSourceLog;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import com.hb.crawler.util.MDateUtils;
import com.hb.crawler.util.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.StringUtils;

import javax.swing.text.html.HTML;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

import static com.hb.crawler.util.MDateUtils.getCurrentYearDays;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class UniComTest {

    @Autowired
    private RedisUtils redisUtils;

    private final String instanceId = "123a4qwe54asd";

    @Test
    public void url() {
//        String url = "https://uac.10010.com/portal/Service/SendCkMSG?req_time="+System.currentTimeMillis()+"&mobile=18652090357";
//        System.out.println(url);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);

        try {
            webClient.getPage("https://uac.10010.com/oauth2/genqr?timestamp="+System.currentTimeMillis());
            readCookies(webClient.getCookieManager());
            UnexpectedPage unexpectedPage = webClient.getPage("https://uac.10010.com/portal/Service/CheckNeedVerify?callback=jQuery17209577406664329835_"+System.currentTimeMillis()+"&userName=18652090357&pwdType=01&_="+System.currentTimeMillis());
            System.out.println(readStream(unexpectedPage.getInputStream()));
            readCookies(webClient.getCookieManager());

            UnexpectedPage unexpectedPage2 = webClient.getPage("https://uac.10010.com/portal/Service/CreateImage?t="+System.currentTimeMillis());
//            System.out.println(readStream(unexpectedPage2.getInputStream()));
            readCookies(webClient.getCookieManager());

            HtmlPage htmlPage = webClient.getPage("https://uac.10010.com/portal/Service/SendCkMSG?callback=jQuery17209577406664329835_"+System.currentTimeMillis()+"&req_time="+System.currentTimeMillis()+"&mobile=18652090357&_="+System.currentTimeMillis());
            System.out.println(htmlPage.asXml());
            readCookies(webClient.getCookieManager());

        }catch (Exception e){
            e.printStackTrace();
        }finally {
            webClient.close();
        }

    }

    /**
     * 读取流
     *
     * @param inStream
     * @return 字节数组
     * @throws Exception
     */
    public static String readStream(InputStream inStream) throws Exception {
        ByteArrayOutputStream outSteam = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = -1;
        while ((len = inStream.read(buffer)) != -1) {
            outSteam.write(buffer, 0, len);
        }
        outSteam.close();
        inStream.close();
        return new String(outSteam.toByteArray());
    }

    @Test
    public void sendMsg() {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        try {
            HtmlPage htmlPage = webClient.getPage("https://uac.10010.com/portal/homeLogin");
            String js ="$('#userName').focus().val('18652090357');loginCommon.checkNeedVerify();" +
                    "$('#userPwd').focus().val('154326');";
//            System.out.println(js);
//            ScriptResult s1 =  htmlPage.executeJavaScript(js);
//            synchronized (s1) {
//                s1.wait(3000);
//            }
//
//                                                                                           17208642436513735501
            String check ="https://uac.10010.com/portal/Service/CheckNeedVerify?callback=jQuery17207942186095942099_1516588745587&userName=18652090357&pwdType=01&_=1516588753203";
            String createImage = "https://uac.10010.com/portal/Service/CreateImage?t=";

            readCookies(webClient.getCookieManager());
            webClient.getPage(check + System.currentTimeMillis());

            webClient.getPage(createImage + System.currentTimeMillis());
//            ScriptResult s2 =  htmlPage.executeJavaScript(" $('#randomCKCode').click()");
            readCookies(webClient.getCookieManager());
            redisUtils.setSerializable(instanceId,webClient.getCookieManager(),30000);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    @Test
    public void login(){
//        $('#userName').focus().val('18652090357');
//        $('#userPwd').focus().val('789456');
//        loginCommon.checkNeedVerify();
//        $('#userCKDiv').show();
//        $('#randomCode').click();
//        $('#userCK').focus().val('');
//        $('#login1').click();

    }

    private static void  readCookies(CookieManager cookieManager){
        System.out.println("begin read cookies!");
        for (Cookie cookie:cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue());
        }
    }
}
