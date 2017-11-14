package com.hb.crawler.listener;


public interface MyMessageDelegate {

    void handleMessage(String message);

//    public void handleMessage(Map<?, ?> message);
//
//    public void handleMessage(byte[] message);
//
//    public void handleMessage(Serializable message);
//
//    // pass the channel/pattern as well
//    void handleMessage(Serializable message, String channel);
}

