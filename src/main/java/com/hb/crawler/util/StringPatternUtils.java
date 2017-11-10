package com.hb.crawler.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringPatternUtils {


    public static boolean isNumeric(String str) {
        Pattern pattern = Pattern.compile("[0-9]*");
        Matcher isNum = pattern.matcher(str);
        if (!isNum.matches()) {
            return false;
        }
        return true;
    }

    public static boolean isMobile(String str) {
        boolean flag = isNumeric(str);
        if (!flag) {
            return false;
        }
        if (str.length() != 11) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isMobile("12345678912"));
    }
}
