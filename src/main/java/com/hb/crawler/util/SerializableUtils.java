package com.hb.crawler.util;

import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.util.Cookie;

import java.io.*;
import java.util.Set;

public class SerializableUtils {

    /**
     * 序列化方法
     *
     * @throws IOException
     * @throws FileNotFoundException
     */
    public static void serializable(Object cookies) {
        ObjectOutputStream outputStream = null;
        try {
            outputStream = new ObjectOutputStream(new FileOutputStream("D:\\cookies.txt"));
            outputStream.writeObject(cookies);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (outputStream != null) {
                try {
                    outputStream.close();
                } catch (IOException e) {
                }
            }
        }
    }

    /**
     * 反序列化的方法
     *
     * @throws IOException
     * @throws FileNotFoundException
     * @throws ClassNotFoundException
     */
    public static CookieManager deSerializable() {
        ObjectInputStream ois = null;
        try {
            ois = new ObjectInputStream(new FileInputStream("D:\\cookies.txt"));
            return (CookieManager) ois.readObject();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (ois != null) {
                try {
                    ois.close();
                } catch (IOException e) {
                }
            }
        }
        return null;
    }
}
