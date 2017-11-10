import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.ScriptResult;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.hb.crawler.dao.CrawlerInstanceMapper;
import com.hb.crawler.pojo.CrawlerInstance;
import com.hb.crawler.pojo.JsChinaMobileUrl;
import com.hb.crawler.util.RandomGenerator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.Date;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml","classpath:application-db.xml","classpath:application-redis.xml"})
public class CrawlerInstanceTest {

    @Autowired
    private CrawlerInstanceMapper crawlerInstanceMapper;

    private CrawlerInstance crawlerInstance;

    @Before
    public void getCrawlerInstance(){
        crawlerInstance = new CrawlerInstance();
        crawlerInstance.setStatus(1);
        crawlerInstance.setInstanceId(RandomGenerator.generateInstanceId());
        crawlerInstance.setTypeCode("江苏移动");
        crawlerInstance.setExpirationTime(new Date());
    }
    @Test
    public void accountBalance(){

    }
}
