package com.hb.crawler.util;

/**
 * 江苏移动爬虫工具包
 */

import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.util.Cookie;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

import javax.imageio.ImageReader;
import javax.swing.*;
import java.awt.image.BufferedImage;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * 江苏移动网上营业厅
 * 信息抓取
 */
public class JsChinaMobileCrawlerUtils {

    private static CookieManager cookieManager = null;
    private static Map<String, WebClient> webClients = new HashMap<>();
    /**
     * 登录页地址
     */
    private static final String LOGIN_URL = "http://service.js.10086.cn/login.html";
    /**
     * 通话详情记录
     */
    private static final String MY_DETAIL_CALL_URL = "http://service.js.10086.cn/my/MY_QDCX.html#home";
    /**
     * 语音通话记录
     */
    private static final String CALL_DETAIL_URL = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&queryMonth=201710&queryItem=1&qryPages=1:1002:-1&qryNo=1&operType=3&queryBeginTime=2017-10-01&queryEndTime=2017-10-30";

    /**
     * 个人账单
     */
    private static final String MY_SPEND_DETAIL_URL = " http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_GRZDQuery&busiNum=ZDCX&methodName=getMobileHistoryBill&beginDate=201709";
    /**
     * 验证码标识
     */
    private static boolean verificationCodeFlag = false;
    /**
     * 手机号 13585119230 15151861623
     */
    private static final String MOBILE = "13585119230";
    /**
     * 服务密码
     */
    private static final String PASSWORD = DesUtils.encrypt("456123");

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
        wc.getOptions().setCssEnabled(false); // 禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false); // js运行错误时，是否抛出异常
        wc.getOptions().setTimeout(10000); // 设置连接超时时间 ，这里是10S。如果为0，则无限期等待
        wc.waitForBackgroundJavaScript(10000);
        return wc;
    }

    /**
     * 保存页面cookies
     *
     * @param webClient
     */
    static void saveCookies(WebClient webClient) {
        System.out.println("-----------------------------------------------------");
        cookieManager = webClient.getCookieManager();
//        cookies = cookieManager.getCookies();
//        for (Cookie c : cookies) {
//            System.out.println(c.getName()+"="+c.getValue()+";");
//        }
        System.out.println("-----------------------------------------------------");
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

    /**
     * 赋值cookies
     *
     * @param webClient
     */
    static void setCookies(WebClient webClient) {
//        CookieManager cookieMan = webClient.getCookieManager();
//        if(cookieMan == null){
//            return;
//        }
//        Iterator<Cookie> iterator = cookies.iterator();
//        while (iterator.hasNext()){
//            cookieManager.addCookie(iterator.next());
//        }
    }

    /**
     * 访问登录页
     * 记录cookies，判断此次登录访问是否需要验证码
     */
    public static boolean visitLoginPage() throws Exception {
        System.out.println("预登陆：");
        final WebClient webClient = getWebClient(true);
//        webClients.put("LOGIN",webClient);
        FileOutputStream fos = null;
        try {
            HtmlPage loginPage = webClient.getPage(LOGIN_URL);
            saveCookies(webClient);
//            SerializableUtil.serializable(cookies);
            //判断是否需要验证码
            String js = "$('#popBox-verifyCode-idType').is(':visible');";

            ScriptResult scriptResult = loginPage.executeJavaScript(js);
            String flag = scriptResult.getJavaScriptResult().toString();
            System.out.println(flag);
            verificationCodeFlag = Boolean.parseBoolean(flag);
            if (!verificationCodeFlag) {
                System.out.println("不需要需要验证码");
                return false;
            } else {
                System.out.println("需要验证码");
            }
//            webClients.put("one",webClient);
            HtmlImage verificationCodeImg = (HtmlImage) loginPage.getElementById("vcimg");
            ImageReader imageReader = verificationCodeImg.getImageReader();
            //验证码输出D盘
            BufferedImage bufferedImage = imageReader.read(0);
            fos = new FileOutputStream("D://validateImg.jpg");
            JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(fos);
            encoder.encode(bufferedImage);
            return true;
        } catch (Exception e) {
            throw new Exception("出现壹！");
        } finally {
            if (fos != null) {
                try {
                    fos.flush();
                    fos.close();
                } catch (IOException e) {
                }
            }
            webClient.close();
        }
    }

    static void login(boolean flag) {
        System.out.println("登录：");
        final WebClient webClient = getWebClient(true);
//        cookies = SerializableUtil.deSerializable();
        setCookies(webClient);

//        WebClient webClient = webClients.get("LOGIN");
//        WebWindow webWindow = webClient.getCurrentWindow();
//        HtmlPage htmlPage = (HtmlPage) webWindow.getEnclosedPage();

//        String js ="$('#userNumber').val('"+MOBILE+"');" +
//                "$('#userPassword').val('"+PASSWORD+"');" +
//                "$('#popBox-login-button').click();";
        String url = "http://service.js.10086.cn/my/actionDispatcher.do?userLoginTransferProtocol=https&reqUrl=login" +
                "&busiNum=LOGIN&operType=0&passwordType=1&isSavePasswordVal=0&isSavePasswordVal_N=1" +
                "&currentD=1&loginFormTab=http&loginType=1&smsFlag=1&phone-login=on" +
                "&mobile=" + MOBILE + "&password=" + PASSWORD + "=&verifyCode=";
//&city=NJDQ
//        String url = "http://service.js.10086.cn/my/actionDispatcher.do?userLoginTransferProtocol=https&reqUrl=login" +
//                "&busiNum=LOGIN&operType=0&passwordType=1&isSavePasswordVal=0&isSavePasswordVal_N=1" +
//                "&currentD=1&loginFormTab=http&loginType=1&smsFlag=1&phone-login=on" +
//                "&mobile=15151861623&city=NJDQ&password=iI9SKNGt8bg=&verifyCode=";

        if (flag) {
            //写入验证码
//            System.out.println("请填写验证码：");
//            Scanner sc = new Scanner(System.in);
//		    String verificationCode = sc.nextLine();
//            System.out.println("您输入的验证码是："+verificationCode);

            JFrame f2 = new JFrame();
            f2.setSize(200, 200);
            f2.setTitle("验证码");
            f2.setVisible(true);
            String verificationCode = JOptionPane.showInputDialog("请输入验证码：");
            f2.setVisible(false);
            f2.dispose();
//            js = "$('#verifyCode').val('"+verificationCode+"');"+js;
            url += verificationCode;
        }
        HtmlPage homePage = null;
        try {
            homePage = (HtmlPage) webClient.getPage(url);
            System.out.println(homePage.asXml());
            saveCookies(webClient);
//            SerializableUtil.serializable(cookies);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
//        ScriptResult scriptResult = htmlPage.executeJavaScript(js);
//        final HtmlPage homePage = (HtmlPage) scriptResult.getNewPage();
//        webClients.remove("LOGIN");
    }

    /**
     * 发送短信
     */
    static void smsAuthorization() {
        System.out.println("发送短信：");
        String js = "$('#txtToDate').next('a').click();";
        final WebClient webClient = getWebClient(true);
        //设置cookies
//        cookies = SerializableUtil.deSerializable();
        setCookies(webClient);
        HtmlPage page;
        try {
            page = webClient.getPage(MY_DETAIL_CALL_URL);
            ScriptResult scriptResult = page.executeJavaScript(js);
            synchronized (page) {
                page.wait(2000);
            }


//            -------------------------------------------------------------------------
            System.out.println("-----------------------------------------------");
            saveCookies(webClient);
            System.out.println("-----------------------------------------------");
//            JFrame f2 = new JFrame();
//            f2.setSize(200, 200);
//            f2.setTitle("短信验证码");
//            f2.setVisible(true);
//            String letter = JOptionPane.showInputDialog("请输入短信验证码：");
//            f2.setVisible(false);
//            f2.dispose();
//            HtmlPage newPage = (HtmlPage) scriptResult.getNewPage();
//
//            String validateSMS = "$('#Dialog_smsNum').val('"+letter+"');" +
//                    "BmonPage.DialogCallback('yes');";
//            ScriptResult afterScriptResult = newPage.executeJavaScript(validateSMS);
//            try {
//                synchronized (page) {
//                    page.wait(2000);
//                }
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//
//            HtmlPage afterScriptPage = (HtmlPage) afterScriptResult.getNewPage();
//            System.out.println(afterScriptPage.asXml());
//            -------------------------------------------------------------------------
//            saveCookies(webClient);
//            SerializableUtil.serializable(cookies);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

    static void handle() {
        final WebClient webClient = getWebClient(true);
        //设置cookies
//        cookies = SerializableUtil.deSerializable();
        System.out.println("-----------------------------------------------------");
//        for (Cookie c : cookies) {
//            System.out.println(c.getName()+"="+c.getValue()+";");
//        }
        System.out.println("-----------------------------------------------------");

        setCookies(webClient);

        String url = "http://service.js.10086.cn/my/actionDispatcher.do?reqUrl=MY_QDCXQueryNew&busiNum=QDCX&queryMonth=201710&queryItem=1&qryPages=&qryNo=1&operType=3&queryBeginTime=2017-10-01&queryEndTime=2017-10-17" +
                "&confirmFlg=1&smsNum=";
        TextPage page;
        try {
            JFrame f2 = new JFrame();
            f2.setSize(200, 200);
            f2.setTitle("短信验证码");
            f2.setVisible(true);
            String letter = JOptionPane.showInputDialog("请输入短信验证码：");
            f2.setVisible(false);
            f2.dispose();
            url += letter;
            System.out.println(url);
            page = (TextPage) webClient.getPage(url);

//            String validateSMS = "$('#Dialog_smsNum').val('"+letter+"');" +
//                    "BmonPage.DialogCallback('yes');";
//            ScriptResult afterScriptResult = page.executeJavaScript(validateSMS);
//            try {
//                synchronized (page) {
//                    page.wait(2000);
//                }
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
            System.out.println(page.getContent());
//            HtmlPage afterScriptPage = (HtmlPage) afterScriptResult.getNewPage();
//            System.out.println(afterScriptPage.asXml());

            saveCookies(webClient);
//            SerializableUtil.serializable(cookies);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

    /**
     * 查询报文数据
     */
    static void getCallDetail(String url) {
        final WebClient webClient = getWebClient(false);
//        cookies = SerializableUtil.deSerializable();
        setCookies(webClient);

        try {
            TextPage page = (TextPage) webClient.getPage(url);
//            int count = webClient.getCurrentWindow().getJobManager().getJobCount();
            System.out.println("数据");
            System.out.println(page.getContent());
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

}

