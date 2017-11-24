import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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
    public void xuLieHua(){
        final WebClient wc = new WebClient(BrowserVersion.CHROME);
        wc.setJavaScriptTimeout(10000);
        wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
        wc.getOptions().setCssEnabled(false); // 禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
        try {
            HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);
            boolean flag = wc.getJavaScriptEngine().isScriptRunning();
            System.out.println(flag);

            wc.getJavaScriptEngine().holdPosponedActions();
//            wc.getJavaScriptEngine().shutdown();
            redisUtils.setSerializable("123",wc,20000);
            System.out.println(loginPage.getTitleText());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void get(){
        final WebClient wc = (WebClient) redisUtils.getSerializable("123",20000);
        try {
            HtmlPage htmlPage = (HtmlPage) wc.getCurrentWindow().getEnclosedPage();

            System.out.println(htmlPage.getTitleText());
            wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
            wc.getJavaScriptEngine().processPostponedActions();
            boolean flag = wc.getJavaScriptEngine().isScriptRunning();
            System.out.println(flag);
            String js = "$('#userNumber').val('15151861623');" +
                    "$('#userPassword').val('006235');" +
                    "$('#popBox-login-button').click();";
            ScriptResult scriptResult = htmlPage.executeJavaScript(js);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void Test3(){

        Map map = new HashMap<>();
        int i = 0 ;
        while(i < 100){
            final WebClient wc = new WebClient(BrowserVersion.CHROME);
            i++;
            System.out.println(i);
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
//                HtmlPage page = wc.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
//                page.executeJavaScript(js);
//                synchronized (page) {
//                    page.wait(2000);
//                }
//                System.out.println("123123");
//                wc.getCookieManager();
//
//                System.out.print("enter a number: ");//println换行；print不换行
//
//                final WebClient wc2 = new WebClient(BrowserVersion.CHROME);
//                wc2.setCookieManager( wc.getCookieManager());
//                wc2.getPage("http://221.178.251.33/dcsch95n910000oyikv5jax99_9t1n/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3&WT.co_f=259c634a01ecd4fdfde1510218403858&dcsdat=1510820196291&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1061x451");
//                wc2.getPage("http://sdc.10086.cn/dcs4vqpi1gn99hjhj4ik4q8d7_4w9z/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3&WT.co_f=259c634a01ecd4fdfde1510218403858&dcsdat=1510820196291&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1061x451");
//                 Scanner xx = new Scanner( System.in );
//                int number = xx.nextInt();//数据类型为int
//                System.out.println( "number = " + number );
//                TextPage textPage = wc2.getPage("http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&queryMonth=201710&queryItem=1&qryPages&qryNo=1&operType=3&queryBeginTime=2017-10-01&queryEndTime=2017-10-17" +
//                        "&browserFinger=3c95ab92663544986e23fb2d833ff643&smsNum="+number+"&confirmFlg=1");
//                System.out.println(textPage.getContent());
            }catch (Exception e){
                e.printStackTrace();
            }finally {
                wc.close();
            }
            map.put(i,wc);
        }
    }
}
