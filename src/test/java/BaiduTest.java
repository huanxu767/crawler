import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class BaiduTest {


    @Test
    public void bai(){
        //如果火狐浏览器没有默认安装在C盘，需要制定其路径
        System.setProperty("webdriver.chrome.driver","D:\\chromedriver\\chromedriver.exe");
        //定义驱动对象为 FirefoxDriver 对象
        WebDriver driver = new ChromeDriver();
        //驱动的网址
        driver.get("https://login.bce.baidu.com/collaborator?account=f34188fc8247431da9215bd9a450352a");
        //浏览器窗口变大
        driver.manage().window().maximize();
        //定位输入框元素
        WebElement txtbox = driver.findElement(By.name("userName"));
        //在输入框输入文本
        txtbox.sendKeys("老上bd不好");
        //定位输入框元素
        WebElement password = driver.findElement(By.name("password"));
        //在输入框输入文本
        password.sendKeys("a870b3251x5");
        //定位按钮元素
        WebElement btn = driver.findElement(By.id("TANGRAM__PSP_4__submit"));
        //点击按钮
        btn.click();
        //关闭驱动
        try {
            Thread.sleep(15000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement yue = driver.findElement(By.id("_san_32"));
        System.out.println(yue.getText());

        driver.close();
    }
    @Test
    public void getBaidu(){
//        https://console.bce.baidu.com/api/account/get_myaccount?locale=zh-cn&_=1516934858514

        String url = "https://login.bce.baidu.com/collaborator?account=f34188fc8247431da9215bd9a450352a";
        String js = "$('input[name=userName]').val('老上bd不好');\n" +
                "$('input[name=password]').val('a870b3251x5');\n" +
                "$('input[type=submit]').click();";

        final WebClient webClient = new WebClient(BrowserVersion.FIREFOX_52);
        webClient.setJavaScriptTimeout(10000);
        webClient.getOptions().setJavaScriptEnabled(true); // 启用JS解释器，默认为true
        webClient.getOptions().setCssEnabled(true); // 禁用css支持
//        webClient.getOptions().setDownloadImages(true);
        webClient.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        webClient.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        webClient.setAjaxController(new NicelyResynchronizingAjaxController());
        webClient.waitForBackgroundJavaScript(10000);
        try {
            HtmlPage htmlPage = webClient.getPage(url);
//            ScriptResult scriptResult = htmlPage.executeJavaScript(js);
//            synchronized (scriptResult){
//                scriptResult.wait(10000);
//            }
//            HtmlPage htmlPage1 = (HtmlPage) scriptResult.getNewPage();
//            Thread.sleep(30000);
            System.out.println(htmlPage.asXml());
            readCookies(webClient.getCookieManager());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

    private static void  readCookies(CookieManager cookieManager){
        System.out.println("begin read cookies!---------------------------------------------");
        for (Cookie cookie:cookieManager.getCookies()) {
            System.out.println(cookie.getName() + "=" + cookie.getValue());
        }
    }
}
