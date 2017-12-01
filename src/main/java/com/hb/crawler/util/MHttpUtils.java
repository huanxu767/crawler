package com.hb.crawler.util;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class MHttpUtils {

    static Logger logger = LoggerFactory.getLogger(MHttpUtils.class);
    /**
     * 通过GET方式发起http请求
     */
    public static String requestByGetMethod(String url) throws IOException {
        String res = null;
        //创建默认的httpClient实例
        CloseableHttpClient httpClient = getHttpClient();
        try {
            //用get方法发送http请求
            HttpGet get = new HttpGet(url);
            RequestConfig config = RequestConfig.custom().build();
            get.setConfig(config);
            System.out.println(get.getURI());
            CloseableHttpResponse httpResponse = null;
            //发送get请求
            httpResponse = httpClient.execute(get);
            //response实体
            HttpEntity entity = httpResponse.getEntity();
            if (null != entity){
                res = EntityUtils.toString(entity);
            }
        }finally{
            try{
                closeHttpClient(httpClient);
            } catch (IOException e){
                logger.error("访问异常",e);
            }
        }
        return res;
    }


    /**
     * POST方式发起http请求
     */
    public static String requestByPostMethod(String url,String js,String type,String proxyHost,int proxyPort,boolean isProxyFlag){
        System.out.println(url);
        String result = "{}";
        String appendScript = "var missionId = " + type + ";";
        CloseableHttpClient httpClient = getHttpClient();
        try {
            String[] paramsArray = url.split("\\?");
            HttpPost post = new HttpPost(paramsArray[0]);
            HttpHost proxy;
            RequestConfig config;
            // 依次是代理地址，代理端口号，协议类型
            if(isProxyFlag){
                //需要代理
                proxy = new HttpHost(proxyHost, proxyPort);
                config = RequestConfig.custom().setProxy(proxy).build();
            }else{
                config = RequestConfig.custom().build();
            }
            post.setConfig(config);
            //创建参数列表
            List<NameValuePair> list = new ArrayList<NameValuePair>();
            if(paramsArray.length > 1){
                String[] paArray = paramsArray[1].split("&");
                for (String temp : paArray) {
                    String[] paramsMap = temp.split("=");
                    list.add(new BasicNameValuePair(paramsMap[0],paramsMap[1]));
                }
            }
            post.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36");
            //url格式编码
            UrlEncodedFormEntity uefEntity = new UrlEncodedFormEntity(list,"UTF-8");
            post.setEntity(uefEntity);
            //执行请求
            CloseableHttpResponse httpResponse = httpClient.execute(post);
            try{
                HttpEntity entity = httpResponse.getEntity();
                if (null != entity){
                    result = EntityUtils.toString(entity);
//                    System.out.println(result);
                }
                ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
                engine.eval(appendScript + js);
                Invocable inv = (Invocable) engine;
                String res = (String) inv.invokeFunction("dodo", result);
                System.out.println(res);
                return res;
            } catch (Exception e) {
                logger.error("访问异常",e);
            } finally{
                httpResponse.close();
            }

        } catch( UnsupportedEncodingException e){
            logger.error("访问异常",e);
        }
        catch (IOException e) {
            logger.error("访问异常",e);
        }
        finally{
            try{
                closeHttpClient(httpClient);
            } catch(Exception e){
                logger.error("访问异常",e);
            }
        }
        return null;
    }

    private static CloseableHttpClient getHttpClient(){
        return HttpClients.createDefault();
    }

    private static void closeHttpClient(CloseableHttpClient client) throws IOException{
        if (client != null){
            client.close();
        }
    }

}