import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.util.NameValuePair;
import com.hb.crawler.util.JsChinaMobileCrawlerUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class MiniVisionTest {

    public final static long DEFAULT_EXPIRE = 60 * 30;


    @Test
    public void getAccount() throws MalformedURLException {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        WebRequest request1 = new WebRequest(new URL("http://www.miniscores.cn:7201/beem/userLogin"), HttpMethod.POST);
        request1.setAdditionalHeader("Referer", "http://www.miniscores.cn:7201/minivision/login.html");
        request1.setAdditionalHeader("Host", "www.miniscores.cn:7201");
        request1.setRequestBody("{\"uname\":\"huabojinfu\",\"pwd\":\"huabojinfu0901\"}");
        try {
            UnexpectedPage page = webClient.getPage(request1);
            String msg = readStream(page.getInputStream());
            System.out.println(msg);
            if(msg.contains("false")){
                //失败
            }else{

            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }


    @Test
    public void getDetail() throws MalformedURLException {
        WebClient webClient = JsChinaMobileCrawlerUtils.getWebClient(false);
        WebRequest request1 = new WebRequest(new URL("http://www.miniscores.cn:7201/beem/customerInfo"), HttpMethod.POST);
        request1.setAdditionalHeader("Referer", "http://www.miniscores.cn:7201/minivision/coustomer/customer.html");
        request1.setAdditionalHeader("Host", "www.miniscores.cn:7201");
        request1.setRequestBody("{\"uname\":\"huabojinfu\",\"pwd\":\"huabojinfu0901\",\"userType\":\"3\"}");
        try {
            UnexpectedPage page = webClient.getPage(request1);
            String msg = readStream(page.getInputStream());
            System.out.println(msg);
            if(msg.contains("false")){
                //失败
            }else{

            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            webClient.close();
        }
    }

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

}
