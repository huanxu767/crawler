package com.hb.crawler.util;


import org.apache.commons.lang3.time.DateUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class MDateUtils {
    /**
     * 获取时间当前年月
     *
     * @return
     */
    public static String getCurrentYearMonth() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMM");
        return simpleDateFormat.format(new Date());
    }

    /**
     * 获取上月时间
     *
     * @return
     */
    public static String getLastMonthYearMonth() {
        return getCurrentYearMonth(-1);
    }

    /**
     * 获取时间隔月份取年月
     *
     * @return
     */
    public static String getCurrentYearMonth(int month) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMM");
        return simpleDateFormat.format(DateUtils.addMonths(new Date(), month));
    }

    /**
     * 获取当月及前5月的开始年月日和结束年月日
     *
     * @return
     */
    public static List<Map<String, String>> getLastSixMonth() {
        List timeList = new ArrayList();
        for (int i = -5; i <= 0; i++) {
            Map map = getLastMonthBeginAndEndDay(i);
            timeList.add(map);
        }
        return timeList;
    }

    public static Map getLastMonthBeginAndEndDay(int month) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Map map = new HashMap();
        Calendar beginCalendar = Calendar.getInstance();
        //获取前月的第一天
        beginCalendar.add(Calendar.MONTH, month);
        beginCalendar.set(Calendar.DAY_OF_MONTH, 1);//设置为1号,当前日期既为本月第一天
//        System.out.println("firstDay:"+format.format(beginCalendar.getTime()));
        //获取前月的最后一天
        Calendar endCalendar = Calendar.getInstance();
        endCalendar.add(Calendar.MONTH, month + 1);
        endCalendar.set(Calendar.DAY_OF_MONTH, 0);//设置为1号,当前日期既为本月第一天
//        System.out.println("lastDay:"+format.format(endCalendar.getTime()));
        map.put("beginTime", format.format(beginCalendar.getTime()));
        map.put("endTime", format.format(endCalendar.getTime()));
        return map;
    }

    /**
     * 指定日期离现在天数
     *
     * @param day
     * @return
     */
    public static String betweenDays(String day) {
        return betweenDays(day, "yyyyMMdd");
    }

    /**
     * 指定日期离现在天数
     *
     * @param day
     * @param parsePatterns
     * @return
     */
    public static String betweenDays(String day, String parsePatterns) {
        try {
            Date date = DateUtils.parseDate(day, parsePatterns);
            Date now = new Date();
            int days = (int) ((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
            return days + "";
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 日期减法
     *
     * @param beginDateStr
     * @param endDateStr
     * @return
     */
    public static int betweenDaysNum(String beginDateStr, String endDateStr) {
        try {
            Date beginDate = DateUtils.parseDate(beginDateStr, "yyyy-MM-dd");
            Date endDate = DateUtils.parseDate(endDateStr, "yyyy-MM-dd");
            int days = (int) ((endDate.getTime() - beginDate.getTime()) / (1000 * 3600 * 24));
            return days;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * 获取时间隔月份取年月
     *
     * @return
     */
    public static String getCurrentYearDays(int days) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        return simpleDateFormat.format(DateUtils.addDays(new Date(), days));
    }

    public static void main(String[] args) {
        System.out.println(betweenDaysNum("2017-10-06", "2017-09-30"));
        System.out.println(betweenDaysNum("2017-10-01", "2017-09-30"));

    }
}
