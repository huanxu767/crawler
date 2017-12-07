package com.hb.crawler.util;

import com.gargoylesoftware.htmlunit.html.HtmlImage;
import com.hb.crawler.exception.ResultException;
import com.hb.crawler.pojo.ReturnCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 文件操作
 */
public class FileUtils {

    static Logger logger = LoggerFactory.getLogger(FileUtils.class);

    public static void downLoadImage(HtmlImage verificationCodeImg, String path) {
        FileOutputStream fos = null;
        try {
            ImageReader imageReader = verificationCodeImg.getImageReader();
            //验证码输出制定路径
            BufferedImage bufferedImage = imageReader.read(0);
            ImageIO.write(bufferedImage,"png",new File(path));
        } catch (Exception e) {
            logger.error("图片写入磁盘出错",e);
            throw new ResultException(ReturnCode.SAVE_IMG_ERROR);
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
