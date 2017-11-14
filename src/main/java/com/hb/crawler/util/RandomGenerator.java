package com.hb.crawler.util;

import java.util.UUID;

/**
 * 生成实例编号
 */
public class RandomGenerator {
    /**
     * 生成UUID
     *
     * @return
     */
    public static String generateInstanceId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    /**
     * 生成时间编码
     *
     * @return
     */
    public static String timeId() {
        int randomNumber = (int) (Math.random() * (9999 - 1000 + 1)) + 1000;//产生1000-9999的随机数
        return "" + System.currentTimeMillis() + randomNumber;
    }

}
