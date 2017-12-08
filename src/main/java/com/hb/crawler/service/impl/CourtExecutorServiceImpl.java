package com.hb.crawler.service.impl;


import com.google.gson.Gson;
import com.hb.crawler.dao.CourtExecutorMapper;
import com.hb.crawler.service.CourtExecutorService;
import com.hb.crawler.util.MHttpUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * 抓取法院失信人
 */
@Service
public class CourtExecutorServiceImpl implements CourtExecutorService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CourtExecutorMapper courtExecutorMapper;

    public void spiderCourtExecutor() {
        int[] pageIndexArray = {0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000};
        String[] addressArray = {"%E5%8C%97%E4%BA%AC%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%A4%A9%E6%B4%A5%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%B2%B3%E5%8C%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E5%B1%B1%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%86%85%E8%92%99%E5%8F%A4%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%90%89%E6%9E%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E9%BB%91%E9%BE%99%E6%B1%9F%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E4%B8%8A%E6%B5%B7%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%B1%9F%E8%8B%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E6%B5%99%E6%B1%9F%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%AE%89%E5%BE%BD%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E7%A6%8F%E5%BB%BA%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E6%B1%9F%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%B1%B1%E4%B8%9C%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%B2%B3%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E6%B9%96%E5%8C%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%B9%96%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E5%B9%BF%E4%B8%9C%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E5%B9%BF%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%B5%B7%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E9%87%8D%E5%BA%86%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E5%9B%9B%E5%B7%9D%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E8%B4%B5%E5%B7%9E%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E4%BA%91%E5%8D%97%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E8%A5%BF%E8%97%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E9%99%95%E8%A5%BF%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E9%9D%92%E6%B5%B7%20%E6%89%A7%E8%A1%8C%E4%BA%BA",
                "%E5%AE%81%E5%A4%8F%20%E6%89%A7%E8%A1%8C%E4%BA%BA", "%E6%96%B0%E7%96%86%20%E6%89%A7%E8%A1%8C%E4%BA%BA"};
        for (int i = 0; i < addressArray.length; i++) {
            String address = addressArray[i];
            for (int j = 0; j < pageIndexArray.length; j++) {
                getBaidu(address, pageIndexArray[j]);
            }
        }
    }

    private void getBaidu(String addr, int pageIndex) {
        String url = "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=" + addr + "&pn=" + pageIndex + "&rn=10&ie=utf-8&oe=utf-8&format=json";
        logger.info(url);
        try {
            String json = MHttpUtils.requestByGetMethod(url);
            Gson gson = new Gson();
            Map map = gson.fromJson(json, Map.class);
            List<Map> list = (List) map.get("data");
            for (Map court : list) {
                List<Map> cList = (List) court.get("result");
                for (Map cMap : cList) {
                    try {
                        courtExecutorMapper.addCourtExecutor(cMap);
                    } catch (Exception e) {
                        logger.error(cMap.toString());
                    }
                }
            }
        } catch (Exception e) {
            logger.error("抓取百度执行人",e);
        }
    }

}
