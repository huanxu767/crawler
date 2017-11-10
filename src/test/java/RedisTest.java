import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.pojo.JsSpiderInstance;
import com.hb.crawler.util.FileUtils;
import com.hb.crawler.util.RandomGenerator;
import com.hb.crawler.util.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class RedisTest {
    @Autowired
    private RedisUtils redisUtils;

    @Autowired
    public RedisTemplate<String, Object> redisTemplate;

    @Test
    public void set(){
        redisUtils.set("我","你");
        String value = redisUtils.get("我");
        System.out.println(value);
    }


    @Test
    public void Test2(){
        ObjectInputStream ois = null;
        final WebClient wc;
        try {
            ois = new ObjectInputStream(new FileInputStream("D:\\wc.txt"));
            wc = (WebClient) ois.readObject();
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true

            wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
            wc.waitForBackgroundJavaScript(10000);
            HtmlPage loginPage = (HtmlPage) wc.getCurrentWindow().getEnclosedPage();
//            HtmlPage loginPage = wc.getPage("http://127.0.0.1:8080/crawler/");
            String js = "document.getElementById('result').value = '456';" ;
            ScriptResult scriptResult = loginPage.executeJavaScript(js);
            final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
            System.out.println(homePage.asXml());
//            String sjs = "$('#txtToDate').next('a').click();";
//            HtmlPage page;
//            page = wc.getPage("http://service.js.10086.cn/my/MY_QDCX.html#home");
//            page.executeJavaScript(sjs);
//            synchronized (page) {
//                page.wait(2000);
//            }
//            System.out.println(page.asXml());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (ois != null) {
                try {
                    ois.close();
                } catch (IOException e) {
                }
            }
        }


    }

    @Test
    public void Test3(){

        Map map = new HashMap<>();
        int i = 0 ;
        while(i < 100){
            i++;
            System.out.println(i);
            final WebClient wc = new WebClient(BrowserVersion.CHROME);
            wc.setJavaScriptTimeout(10000);
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
            wc.getOptions().setCssEnabled(false); // 禁用css支持
            wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
            wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
            wc.waitForBackgroundJavaScript(10000);
            try {
                HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);
                String js = "$('#userNumber').val('15151861623');" +
                        "$('#userPassword').val('006235');" +
                        "$('#popBox-login-button').click();";
                ScriptResult scriptResult = loginPage.executeJavaScript(js);
                final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
                if(!homePage.getTitleText().contains("登录")){
                    System.out.println("成功");
                }else{
                    System.out.println("失败");
                }
            }catch (Exception e){
                e.printStackTrace();
            }finally {
                wc.close();
            }
            map.put(i,wc);
        }
    }

    public boolean ifNeedVerificationCode(HtmlPage loginPage){
        //判断是否需要验证码
        String js = "$('#popBox-verifyCode-idType').is(':visible');";
        ScriptResult scriptResult = loginPage.executeJavaScript(js);
        String flag = scriptResult.getJavaScriptResult().toString();
        return Boolean.parseBoolean(flag);
    }


    @Test
    public void Test4(){
        JsSpiderInstance jsSpiderInstance = new JsSpiderInstance();
        jsSpiderInstance.setImei("1");
        jsSpiderInstance.setInstanceId("2");
        jsSpiderInstance.setNeedVerifyCode(false);
        jsSpiderInstance.setMobile("11111111");
        redisUtils.set("ddd",jsSpiderInstance);

        JsSpiderInstance q = redisUtils.get("ddd",JsSpiderInstance.class);
        System.out.println(q.toString());
    }


}
