import com.hb.crawler.util.MHttpUtils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {

//    private static String url = "http://www.qq.com/robots.txt";
//    private static String url = "http://www.baidu.com/robots.txt";
//    private static String url = "http://service.js.10086.cn/login.html";
    private static String url = "https://www.baidu.com/";




    private static String[] ips = {
//            "139.224.24.26:8888",
            "139.224.80.139:3128",
            "219.135.164.245:3128",
            "219.136.245.23:1080",
            "166.111.80.162:3128",
            "14.116.153.16:3128"
    };

    public static void main(String[] args) {
        delEnabledProxy();
//        tilNotWork();

    }

    public static void delEnabledProxy(){
        Long t1;
        Long t2;
        for (String ip :ips) {
            t1 = System.currentTimeMillis();
            boolean flag = MHttpUtils.testProxyAvailabe(url,ip.split(":")[0],Integer.parseInt(ip.split(":")[1]));
            t2  = System.currentTimeMillis();
            if(flag){
                System.out.println(ip+"成功" + "耗时："+(t2-t1) / 1000 + "s");
            }else{
                System.out.println(ip+"失败-------------" + "耗时："+(t2-t1) / 1000 + "s");
            }
        }
    }

    public static void tilNotWork() {
        while (true){
            boolean flag = false;
            Long t1;
            Long t2;
            for (String ip :ips) {
                t1 = System.currentTimeMillis();
                flag = MHttpUtils.testProxyAvailabe(url,ip.split(":")[0],Integer.parseInt(ip.split(":")[1]));
                t2  = System.currentTimeMillis();
                if(flag){
                    System.out.println(ip+"成功" + "耗时："+(t2-t1) / 1000 + "s");
                }else{
                    System.out.println(ip+"失败" + "耗时："+(t2-t1) / 1000 + "s");
                }
            }
            System.out.println("一轮结束啦-----------------------------");

            if(flag){
                System.out.println("其中一个失效啦");
                System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
                break;
            }
            try {
                Thread.sleep(3000L);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }
}
