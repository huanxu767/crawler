package com.hb.crawler.util;

import com.gargoylesoftware.htmlunit.WebClient;
import com.hb.crawler.pojo.JsBrowserInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * 江苏
 */
public class JsBrowserCache {

    static Logger logger = LoggerFactory.getLogger(JsBrowserCache.class);

    private static Map<String, JsBrowserInstance> jsBrowserInstances = new HashMap<>();


    public static int countWebClient(){
        return jsBrowserInstances.size();
    }

    public static void put(JsBrowserInstance jsBrowserInstance) {
        logger.info("put:" + jsBrowserInstance.getInstanceId());
        jsBrowserInstances.put(jsBrowserInstance.getInstanceId(), jsBrowserInstance);
    }

    public static JsBrowserInstance get(String instanceId) {
        return jsBrowserInstances.get(instanceId);
    }

    /**
     * 是否包含实例
     *
     * @param instanceId
     * @return
     */
    public static boolean hasKey(String instanceId) {
        return jsBrowserInstances.containsKey(instanceId);
    }

    /**
     * 移除
     *
     * @param instanceId
     */
    public static void remove(String instanceId) {
        logger.info("remove:" + instanceId);
        JsBrowserInstance jsBrowserInstance = jsBrowserInstances.get(instanceId);
        if (jsBrowserInstance == null) {
            return;
        }
        WebClient webClient = jsBrowserInstance.getWebClient();
        webClient.getCurrentWindow().getJobManager().removeAllJobs();
        webClient.close();
        jsBrowserInstances.remove(instanceId);
        System.gc();
    }

}
