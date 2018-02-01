import com.hb.crawler.service.SpiderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.Map;


@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml", "classpath:application-db.xml", "classpath:application-redis.xml"})
public class PerfectJsSpiderTest {

    @Autowired
    private SpiderService spiderService;

    @Test
    public void preLogin(){
        Map responseMap = spiderService.preLogin("13585119230","许欢","");
        System.out.println(responseMap);
    }

    @Test
    public void login(){
        Map responseMap = spiderService.login("264593b9074547dbb00e5c3fe3bf2b76",
                "13585119230","789456","r2un");
        System.out.println(responseMap);
    }

}
