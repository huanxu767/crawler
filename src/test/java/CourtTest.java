import com.hb.crawler.service.impl.CourtExecutorServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;


@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml", "classpath:application-db.xml", "classpath:application-redis.xml"})
public class CourtTest {

    @Autowired
    private CourtExecutorServiceImpl courtExecutorService;

    @Test
    public void spiderCourt(){
        courtExecutorService.spiderCourtExecutor();
    }

}
