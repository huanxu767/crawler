package com.hb.crawler.util;

import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

import javax.imageio.ImageReader;
import java.awt.image.BufferedImage;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 文件操作
 */
public class FileUtils {

    public static void downLoadImage(HtmlImage verificationCodeImg, String path) {
        FileOutputStream fos = null;
        try {
            ImageReader imageReader = verificationCodeImg.getImageReader();
            //验证码输出制定路径
            BufferedImage bufferedImage = imageReader.read(0);
            fos = new FileOutputStream(path);
            JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(fos);
            encoder.encode(bufferedImage);
        } catch (Exception e) {
            throw new RuntimeException("图片写入磁盘出错");
        } finally {
            if (fos != null) {
                try {
                    fos.flush();
                    fos.close();
                } catch (IOException e) {
                }
            }
        }

    }
}
