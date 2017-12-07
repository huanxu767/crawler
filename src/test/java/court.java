import com.hb.crawler.util.MHttpUtils;

import java.io.IOException;

public class court {

    public static void main(String[] args) {
        String url = "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query={queryArray}&pn={noArray}&rn=10&ie=utf-8&oe=utf-8&format=json";
        int[] pageIndexArray = {0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000};
        String addrees ="%E5%8C%97%E4%BA%AC%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%A4%A9%E6%B4%A5%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B2%B3%E5%8C%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%B1%B1%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%86%85%E8%92%99%E5%8F%A4%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%90%89%E6%9E%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E9%BB%91%E9%BE%99%E6%B1%9F%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E4%B8%8A%E6%B5%B7%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B1%9F%E8%8B%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B5%99%E6%B1%9F%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%AE%89%E5%BE%BD%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E7%A6%8F%E5%BB%BA%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B1%9F%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%B1%B1%E4%B8%9C%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B2%B3%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B9%96%E5%8C%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B9%96%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%B9%BF%E4%B8%9C%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%B9%BF%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%B5%B7%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E9%87%8D%E5%BA%86%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%9B%9B%E5%B7%9D%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E8%B4%B5%E5%B7%9E%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E4%BA%91%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E8%A5%BF%E8%97%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E9%99%95%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E9%9D%92%E6%B5%B7%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E5%AE%81%E5%A4%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA,%E6%96%B0%E7%96%86%20%E6%89%A7%E8%A1%8C%E4%BA%BA";
        try {
            String json = MHttpUtils.requestByGetMethod("https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=%E5%8C%97%E4%BA%AC%20%E6%89%A7%E8%A1%8C%E4%BA%BA&pn=0&rn=10&ie=utf-8&oe=utf-8&format=json");
            System.out.println(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
