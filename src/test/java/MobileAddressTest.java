import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.MobileAddress;
import com.hb.crawler.service.MobileAddressService;
import com.hb.crawler.util.MHttpUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml", "classpath:application-db.xml", "classpath:application-redis.xml"})
public class MobileAddressTest {

    @Autowired
    private MobileAddressService mobileAddressService;

    @Test
    public void spider() {
//        13(老)号段：130,131,132,133,134,135,136,137,138,139
//        14(新)号段：1410,1440,145,146,147,148,149
//        15(新)号段：150,151,152,153,154,155,156,157,158,159
//        16(新)号段：166
//        17(新)号段：170,171,173,175,176,177,178,1740（0-5）,1740（6-9）,1740（10-12）
//        18(3G)号段：180,181,182,183,184,185,186,187,188,189
//        19(新)号段：198,199

        String mobilePrefix = "139,186,151,130,131,132,133,134,135,136,137,138,141,144,145,146,147,148,149,150,152,153,154,155,156,157,158,159,166,170,171,173,175,176,177,178,174,180,181,182,183,184,185,187,188,189,198,199";
        String[] urlArray = mobilePrefix.split(",");
        for (int i = 0; i < urlArray.length; i++) {
            System.out.println(urlArray[i]);
            ogUrl(urlArray[i]);
        }
    }

    private void ogUrl(String mobilePrefix){
        for (int i = 0; i <= 9999; i++) {
            String desMobilePrefix = mobilePrefix;
            for (int j = 0; j < 4 - (i+"").length(); j++) {
                desMobilePrefix += "0";
            }
            desMobilePrefix += i;
            System.out.println(desMobilePrefix);
            String url = "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_name=guishudi&query="+desMobilePrefix+"+手机号段";
            getAddress(desMobilePrefix,url);
        }
    }

    private void getAddress(String mobilePrefix,String url){
        MobileAddress mobileAddress = new MobileAddress();
        mobileAddress.setMobilePrefix(mobilePrefix);
        Gson gson = new Gson();
        try {
            String entity = MHttpUtils.requestByGetMethod(url);
            Map result = gson.fromJson(entity, Map.class);
            if ("0".equals(result.get("status"))) {
                List list = (List) result.get("data");
                if(list.size() == 0){
                    System.out.println("失败");
                    mobileAddress.setStatusType("2");
                }else{
                    Map map = (Map) list.get(0);
                    mobileAddress.setOperator(map.get("type")+"");
                    mobileAddress.setProvince(map.get("prov")+"");
                    mobileAddress.setCity(map.get("city")+"");
                    mobileAddress.setStatusType("1");
                }
            } else {
                System.out.println("失败");
                mobileAddress.setStatusType("3");
            }
        } catch (IOException e) {
            e.printStackTrace();
            mobileAddress.setStatusType("4");
        }
        System.out.println(mobileAddress);
        mobileAddressService.addMobileAddress(mobileAddress);
    }


}
