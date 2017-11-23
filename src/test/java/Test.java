import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.TextPage;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.FileUtils;
import com.hb.crawler.util.RandomGenerator;
import org.apache.commons.lang3.time.DateUtils;

import java.util.Date;
import java.util.Scanner;
import java.util.UUID;

public class Test {


    public static void main(String[] args) {


        final WebClient wc = new WebClient(BrowserVersion.CHROME);
        wc.setJavaScriptTimeout(10000);
        wc.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
        wc.getOptions().setCssEnabled(false); // 禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
        try {
            HtmlPage loginPage = wc.getPage(JsChinaMobileUrl.LOGIN_URL);

            //判断是否需要验证码
            ScriptResult scriptResultd = loginPage.executeJavaScript("$('#popBox-verifyCode-idType').is(':visible');");
            String flag = scriptResultd.getJavaScriptResult().toString();
            System.out.println(flag);



            String path = RandomGenerator.timeId() + ".png";
            String verificationCodeURL = "D:\\verification-code-img\\"+path;
            HtmlImage verificationCodeImg = (HtmlImage) loginPage.getElementById("vcimg");
            FileUtils.downLoadImage(verificationCodeImg, verificationCodeURL);

//
            Scanner xx2 = new Scanner( System.in );
            String verificationCode = xx2.nextLine();//数据类型为int


            String js =
                    "$('#userNumber').val('13585119230');" +
                            "$('#userPassword').val('456123');" +
                            "$('#popBox-login-button').click();";
            js = "$('#verifyCode').val('" + verificationCode + "');" + js;
            ScriptResult scriptResult = loginPage.executeJavaScript(js);
            final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
            if(!homePage.getTitleText().contains("登录")){
                System.out.println("成功");
            }else{
                System.out.println("失败");
            }
            HtmlPage page = wc.getPage(JsChinaMobileUrl.MY_DETAIL_CALL_URL);
            String js2 = "$('#txtToDate').next('a').click();";
            page.executeJavaScript(js2);
            synchronized (page) {
                page.wait(2000);
            }
            page.executeJavaScript("$('#Dialog_smsNum').val('123456');BmonPage.DialogCallback('yes');");

            System.out.println("123123");
            wc.getCookieManager();
            System.out.print("enter a number: ");//println换行；print不换行
            final WebClient wc2 = new WebClient(BrowserVersion.CHROME);
            wc2.setCookieManager( wc.getCookieManager());
            String wof = "";
            for (Cookie cookie:wc.getCookieManager().getCookies()) {
                if(cookie.getName().equals("WT_FPC")){
                    String value = cookie.getValue();
                    wof = value.substring(value.indexOf("=")+1,value.indexOf(":"));
                }
            }
            System.out.println(wof);
            Scanner xx = new Scanner( System.in );
            String number = xx.nextLine();//数据类型为int

            long date = System.currentTimeMillis();
            wc2.getPage("http://221.178.251.33/dcsch95n910000oyikv5jax99_9t1n/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3" +
                    "&WT.co_f="+wof+"&dcsdat="+date+"&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1061x451");
            wc2.getPage("http://sdc.10086.cn/dcs4vqpi1gn99hjhj4ik4q8d7_4w9z/dcs.gif?WT.branch=jiangsu&dcssip=service.js.10086.cn&WT.host=service.js.10086.cn&dcsuri=%2Fmy%2FMY_QDCX.html&WT.es=http%3A%2F%2Fservice.js.10086.cn%2Fmy%2FMY_QDCX.html%23home&dcsref=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.referrer=http%3A%2F%2Fservice.js.10086.cn%2FactionDispatcher.do&WT.sr=1920x1080&WT.ti=%E6%B1%9F%E8%8B%8F%E7%A7%BB%E5%8A%A8_%E6%88%91%E7%9A%84%E7%A7%BB%E5%8A%A8&WT.si_n=MY_QDCX&WT.si_x=1&WT.vt_f=3&" +
                    "WT.co_f="+wof+"&dcsdat="+date+"&WT.type=button&WT.event=null&WT.nv=Dialog_operBtn&WT.pos=1061x451");
            Thread.sleep(20);
            TextPage textPage = wc2.getPage("http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&queryMonth=201710&queryItem=1&qryPages&qryNo=1&operType=3&queryBeginTime=2017-10-01&queryEndTime=2017-10-17" +
                    "&browserFinger=3c95ab92663544986e23fb2d833ff643&smsNum="+number+"&confirmFlg=1");
            System.out.println(textPage.getContent());
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            wc.close();
        }


    }
}
