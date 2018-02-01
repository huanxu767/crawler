package com.hb.crawler.util;

import com.hb.crawler.pojo.HTTPResponseInstance;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

public class MHttpUtils {

    static Logger logger = LoggerFactory.getLogger(MHttpUtils.class);

    /**
     * get方式请求
     * @param url
     * @return
     * @throws IOException
     */
    public static HTTPResponseInstance request(String url) throws IOException {
        return request(url,null);
    }

    /**
     * get方式请求并获取cookie
     * @param url
     * @param cookieStore
     * @return
     * @throws IOException
     */
    public static HTTPResponseInstance request(String url, CookieStore cookieStore) throws IOException {
        return request(url,cookieStore,null,true);
    }

    /**
     * get方式请求并获取cookie
     * @param url
     * @param cookieStore
     * @return
     * @throws IOException
     */
    public static HTTPResponseInstance request(String url, CookieStore cookieStore,String referer,boolean flag) throws IOException {
        HTTPResponseInstance httpResponseInstance = new HTTPResponseInstance();
        CloseableHttpClient httpclient = HttpClients.createDefault();

        try {
            HttpClientContext context = HttpClientContext.create();
            if(cookieStore != null){
                context.setCookieStore(cookieStore);
            }
            RequestConfig config = RequestConfig.custom()
                    .setSocketTimeout(3000)
                    .setConnectTimeout(3000)
                    .setConnectionRequestTimeout(3000)
//                    .setProxy(new HttpHost("myotherproxy", 8080))
                    .build();

//            request.setAdditionalHeader("Referer", "");


            HttpGet httpget = new HttpGet(url);
            httpget.setConfig(config);
            httpget.setHeader("Referer", referer);
            ResponseHandler<String> responseHandler = new MyResponseHandler();
            String responseBody = httpclient.execute(httpget, responseHandler,context);
            httpResponseInstance.setResponseBody(responseBody);
            httpResponseInstance.setCookieStore(context.getCookieStore());
            return httpResponseInstance;
        } finally {
            httpclient.close();
        }
    }

    /**
     * 获取验证码 BASE64转码
     * @param imgUrl
     * @param cookieStore
     * @return
     * @throws IOException
     */
    public static HTTPResponseInstance getImage(String imgUrl,CookieStore cookieStore) throws IOException{

        HTTPResponseInstance httpResponseInstance = new HTTPResponseInstance();
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            HttpClientContext context = HttpClientContext.create();
            context.setCookieStore(cookieStore);
            HttpGet httpget = new HttpGet(imgUrl);
            ResponseHandler<byte[]> responseHandler = new ImageResponseHandler();
            byte[] responseBody = httpclient.execute(httpget, responseHandler,context);
            httpResponseInstance.setCookieStore(context.getCookieStore());
            httpResponseInstance.setResponseBody(Base64.getEncoder().encodeToString(responseBody));
            return httpResponseInstance;
        } finally {
            httpclient.close();
        }
    }
    /**
     * 通过GET方式发起http请求
     */
    public static String requestByGetMethod(String url) throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            HttpClientContext context = HttpClientContext.create();
            HttpGet httpget = new HttpGet(url);
            System.out.println("Executing request " + httpget.getRequestLine());
            ResponseHandler<String> responseHandler = new ResponseHandler<String>() {

                @Override
                public String handleResponse(
                        final HttpResponse response) throws ClientProtocolException, IOException {
                    int status = response.getStatusLine().getStatusCode();
                    if (status >= 200 && status < 300) {
                        HttpEntity entity = response.getEntity();
                        return entity != null ? EntityUtils.toString(entity) : null;
                    } else {
                        throw new ClientProtocolException("Unexpected response status: " + status);
                    }
                }

            };
            String responseBody = httpclient.execute(httpget, responseHandler,context);
            return responseBody;
        } finally {
            httpclient.close();
        }
    }


    /**
     * 通过GET方式发起http请求
     */
    public static boolean requestByGetMethod(String url,String proxyHost,int proxyPort){
        boolean flag = false;
//        //创建默认的httpClient实例
//        CloseableHttpClient httpClient = getHttpClient();
//        HttpHost proxy;
//        RequestConfig config;
//        // 依次是代理地址，代理端口号，协议类型
//        //需要代理
//        proxy = new HttpHost(proxyHost, proxyPort);
//        config = RequestConfig.custom().setProxy(proxy)
//                .setSocketTimeout(3000)
//                .setConnectTimeout(3000)
//                .setConnectionRequestTimeout(3000)
//                .build();
//        try {
//            //用get方法发送http请求
//            HttpGet get = new HttpGet(url);
//            get.setConfig(config);
//            CloseableHttpResponse httpResponse = null;
//            //发送get请求
//            httpResponse = httpClient.execute(get);
//            if(httpResponse.getStatusLine().getStatusCode() == 200){
//                flag = true;
//            }
//        }catch (Exception e){
////            e.printStackTrace();
//        }finally{
//            try{
//                closeHttpClient(httpClient);
//            } catch (IOException e){
//                logger.error("访问异常",e);
//            }
//        }
        return flag;
    }

    /**
     * POST方式发起http请求
     */
    public static String requestByPostMethod(String url,String js,String type,String proxyHost,int proxyPort,boolean isProxyFlag){
//        System.out.println(url);
//        String result = "{}";
//        String appendScript = "var missionId = " + type + ";";
////        CloseableHttpClient httpClient = getHttpClient();
//        try {
//            String[] paramsArray = url.split("\\?");
//            HttpPost post = new HttpPost(paramsArray[0]);
//            HttpHost proxy;
//            RequestConfig config;
//            // 依次是代理地址，代理端口号，协议类型
//            if(isProxyFlag){
//                //需要代理
//                proxy = new HttpHost(proxyHost, proxyPort);
//                config = RequestConfig.custom().setProxy(proxy).build();
//            }else{
//                config = RequestConfig.custom().build();
//            }
//            post.setConfig(config);
//            //创建参数列表
//            List<NameValuePair> list = new ArrayList<NameValuePair>();
//            if(paramsArray.length > 1){
//                String[] paArray = paramsArray[1].split("&");
//                for (String temp : paArray) {
//                    String[] paramsMap = temp.split("=");
//                    list.add(new BasicNameValuePair(paramsMap[0],paramsMap[1]));
//                }
//            }
//            post.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36");
//            //url格式编码
//            UrlEncodedFormEntity uefEntity = new UrlEncodedFormEntity(list,"UTF-8");
//            post.setEntity(uefEntity);
//            //执行请求
//            CloseableHttpResponse httpResponse = httpClient.execute(post);
//            try{
//                HttpEntity entity = httpResponse.getEntity();
//                if (null != entity){
//                    result = EntityUtils.toString(entity);
////                    System.out.println(result);
//                }
//                ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
//                engine.eval(appendScript + js);
//                Invocable inv = (Invocable) engine;
//                String res = (String) inv.invokeFunction("dodo", result);
//                System.out.println(res);
//                return res;
//            } catch (Exception e) {
//                logger.error("访问异常",e);
//            } finally{
//                httpResponse.close();
//            }
//
//        } catch( UnsupportedEncodingException e){
//            logger.error("访问异常",e);
//        }
//        catch (IOException e) {
//            logger.error("访问异常",e);
//        }
//        finally{
//            try{
//                closeHttpClient(httpClient);
//            } catch(Exception e){
//                logger.error("访问异常",e);
//            }
//        }
        return null;
    }


}


class MyResponseHandler implements ResponseHandler{

    @Override
    public String handleResponse(HttpResponse response) throws ClientProtocolException, IOException {
            int status = response.getStatusLine().getStatusCode();
            if (status >= 200 && status < 300) {
                HttpEntity entity = response.getEntity();
                return entity != null ? EntityUtils.toString(entity) : null;
            } else {
                throw new ClientProtocolException("Unexpected response status: " + status);
            }
    }
}

class ImageResponseHandler implements ResponseHandler{

    @Override
    public byte[] handleResponse(HttpResponse response) throws ClientProtocolException, IOException {
        InputStream in = null;
        try {
            in = response.getEntity().getContent();
            byte[] imageByte = IOUtils.toByteArray(in);
            return imageByte;
        }finally {
            if( in != null){
                in.close();
            }
        }
    }
}
