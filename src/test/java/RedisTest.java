import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class RedisTest {
    @Autowired
    private RedisUtils redisUtils;

    @Autowired
    public RedisTemplate<String, Object> redisTemplate;

    @Autowired
    public RedisTemplate<String, Object> redisSerializerTemplate;

    @Test
    public void stringSet(){
        redisUtils.set("我","你");
        String value = redisUtils.get("我");
        System.out.println(value);
    }


    @Test
    public void setTest(){
        SetOperations setOperations = redisTemplate.opsForSet();
        setOperations.add("agent:ipPool","1");
        setOperations.add("agent:ipPool","2");
        setOperations.add("agent:ipPool","3");
        setOperations.add("agent:ipPool","4");
        setOperations.add("agent:ipPool","4");

    }

    @Test
    public void getSeqTest(){
        SetOperations setOperations = redisTemplate.opsForSet();
        for (int i = 0; i < 50; i++) {
            List ips = setOperations.randomMembers("agent:ipPool",1);
            System.out.println(ips);
        }
    }

    @Test
    public void getSetTest(){
        SetOperations setOperations = redisTemplate.opsForSet();
        for (int i = 0; i < 50; i++) {
            Set ips = setOperations.distinctRandomMembers("agent:ipPool",1);
            System.out.println(ips);
        }
    }


    @Test
    public void xuLieHua(){
//        221.217.48.39:9000
//        124.64.25.110:53281
//        183.184.112.78:9797

        final WebClient wc = new WebClient(BrowserVersion.CHROME,"182.121.205.48",9999);
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
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            wc.close();
        }
    }

}
