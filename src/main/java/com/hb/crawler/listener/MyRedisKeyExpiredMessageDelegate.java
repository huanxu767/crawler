package com.hb.crawler.listener;


import com.hb.crawler.service.impl.JsChinaMobileApiServiceImpl;
import com.hb.crawler.util.JsBrowserCache;


public class MyRedisKeyExpiredMessageDelegate implements MyMessageDelegate {

    @Override
    public void handleMessage(String message) {
        if (message.startsWith(JsChinaMobileApiServiceImpl.INSTANCE_KEY)) {
            String[] key = message.split(":");
            JsBrowserCache.remove(key[key.length - 1]);
        }
    }
//    @Override
//    public void handleMessage(Map<?, ?> message) {
//        System.out.println("handleMessage(Map<?, ?> message):" + message);
//    }
//
//    @Override
//    public void handleMessage(byte[] message) {
//        System.out.println("handleMessage(byte[] message):"
//                + new String(message));
//    }
//
//    @Override
//    public void handleMessage(Serializable message) {
//        System.out.println("handleMessage(Serializable message):"
//                + message.toString());
//    }
//
//    @Override
//    public void handleMessage(Serializable message, String channel) {
//        System.out
//                .println("handleMessage(Serializable message, String channel):"
//                        + message.toString() + ", channel:" + channel);
//    }
}
