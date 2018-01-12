import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
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
import java.io.IOException;
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
        String url = "https://uac.10010.com/portal/Service/SendCkMSG?req_time="+System.currentTimeMillis()+"&mobile=18652090357";
        System.out.println(url);
    }
    @Test
    public void sendMsg() {
        String url = "https://uac.10010.com/portal/Service/SendCkMSG?req_time="+System.currentTimeMillis()+"&mobile=18652090357";
        System.out.println(url);
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        try {
            HtmlPage loginPage = webClient.getPage("https://uac.10010.com/portal/homeLogin");
            readCookies(webClient.getCookieManager());
//            System.out.println(loginPage.asXml());
            Thread.sleep(3000);
            readCookies(webClient.getCookieManager());
            loginPage.executeJavaScript("location="+url);
            HtmlPage htmlPage = webClient.getPage(url);
            System.out.println(htmlPage.asXml());
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
//        $('#userCKDiv').show();
//        $('#randomCode').click();
//        $('#userCK').focus().val('');
//        $('#login1').click();

        String code ="912621";
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(true);
        try {
            HtmlPage htmlPage = webClient.getPage("https://uac.10010.com/portal/homeLogin");
            String js ="$('#userName').focus().val('18652090357');" +
                    "$('#userPwd').focus().val('154326');" +
                    "$('#userCKDiv').show();$('#userCK').val("+code+");" +
                    "$('#login1').focus();$('#login1').click();";

            System.out.println(js);
            ScriptResult s = htmlPage.executeJavaScript(js);
            try {
                synchronized (s) {
                    s.wait(3000);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            HtmlPage j = (HtmlPage)s.getNewPage();
            System.out.println(j.asXml());
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            webClient.close();
        }
    }

    private static void  readCookies(CookieManager cookieManager){
        System.out.println("begin read cookies!");
        for (Cookie cookie:cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue());
        }
    }
}
