package com.hb.crawler.thread;

import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerInstanceMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.*;
import com.hb.crawler.util.MDateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.hb.crawler.util.MDateUtils.getCurrentYearDays;


public class JsChinaAnalysisLogThread implements Runnable {

    static Logger logger = LoggerFactory.getLogger(JsChinaAnalysisLogThread.class);

    private final static Long sleepTime = 1000 * 20L;
    private JsChinaCrawlerInstanceMapper jsChinaCrawlerInstanceMapper;

    private JsChinaCrawlerCallMapper jsChinaCrawlerCallMapper;

    private JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper;

    private JsChinaCrawlerReportMapper jsChinaCrawlerReportMapper;


    private JsChinaCrawlerReport jsChinaCrawlerReport = new JsChinaCrawlerReport();
    private String instanceId;

    public JsChinaAnalysisLogThread(String instanceId, JsChinaCrawlerInstanceMapper jsChinaCrawlerInstanceMapper,
                                    JsChinaCrawlerCallMapper jsChinaCrawlerCallMapper, JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper,
                                    JsChinaCrawlerReportMapper jsChinaCrawlerReportMapper) {
        this.instanceId = instanceId;
        this.jsChinaCrawlerInstanceMapper = jsChinaCrawlerInstanceMapper;
        this.jsChinaCrawlerCallMapper = jsChinaCrawlerCallMapper;
        this.jsChinaCrawlerSourceLogMapper = jsChinaCrawlerSourceLogMapper;
        this.jsChinaCrawlerReportMapper = jsChinaCrawlerReportMapper;

    }

    @Override
    public void run() {
        logger.info("生成报告");
        JsChinaCrawlerInstance jsChinaCrawlerInstance = jsChinaCrawlerInstanceMapper.queryJsChinaCrawlerInstance(instanceId);
        if (jsChinaCrawlerInstance == null) {
            return;
        }
        String firstEmergencyContact = jsChinaCrawlerInstance.getFirstEmergencyContact();
        String secondEmergencyContact = jsChinaCrawlerInstance.getSecondEmergencyContact();
        String userName = jsChinaCrawlerInstance.getUserName();
        //月账单
        JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog = new JsChinaCrawlerSourceLog();
        for (int i = 0; i < 20; i++) {
            jsCrawlerChinaMobileLog = jsChinaCrawlerSourceLogMapper.queryJsChinaCrawlerSourceLog(instanceId);
            if (jsCrawlerChinaMobileLog.getUpdateTimes() < 2) {
                try {
                    Thread.sleep(sleepTime);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } else {
                break;
            }
        }
        jsChinaCrawlerReport.setInstanceId(instanceId);
        jsChinaCrawlerReport.setMobile(jsCrawlerChinaMobileLog.getMobile());
        //账户余额
        jsChinaCrawlerReport.setAccountBalance(objectToInt(jsCrawlerChinaMobileLog.getAccountBalance()));
        //用户星级
        jsChinaCrawlerReport.setCreditLevel(jsCrawlerChinaMobileLog.getCreditLevel());
        //月账单
        billMonthBill(jsCrawlerChinaMobileLog, userName);
        //是否集团账户
        vNet(jsCrawlerChinaMobileLog);
        //通话记录
        call(instanceId, jsCrawlerChinaMobileLog);
        //短信记录
        sms(instanceId, jsCrawlerChinaMobileLog);
        //上网记录
        net(instanceId, jsCrawlerChinaMobileLog);
        // 距上次与紧急联系人联系天数
        String lastDays = queryLastConnectDay(instanceId, firstEmergencyContact, secondEmergencyContact);
        jsChinaCrawlerReport.setEmergencyContactDays(objectToInt(lastDays));
        // 总手机通话联系人数
        Long otherParties = jsChinaCrawlerCallMapper.countCallOtherParties(instanceId);
        jsChinaCrawlerReport.setTotalContact(objectToInt(otherParties));
        offLineDays();
        jsChinaCrawlerReportMapper.addJsChinaCrawlerReport(jsChinaCrawlerReport);
    }

    void offLineDays() {
        List<String> countOnLineDays = jsChinaCrawlerCallMapper.queryOnLineDays(instanceId);
        String tempDate = "";
        int sixtyDate = Integer.parseInt(getCurrentYearDays(-60));
        int times = 0;
        int maxOffLineDays = 0;
        for (int i = 0; i < countOnLineDays.size(); i++) {
            String date = countOnLineDays.get(i);
            if (i == 0) {
                tempDate = date;
                continue;
            }
            int days = MDateUtils.betweenDaysNum(date, tempDate);
            // 停机三天 即相差4天
            int offLineDays = days - 1;
            int dateInt = Integer.parseInt(date.replace("-", ""));
            if (offLineDays > 3) {
                //60天内
                if (sixtyDate <= dateInt) {
                    times++;
                }
                maxOffLineDays = maxOffLineDays < offLineDays ? offLineDays : maxOffLineDays;
            }
            tempDate = date;
        }
        jsChinaCrawlerReport.setOfflineDaysTimes(times);
        jsChinaCrawlerReport.setContinuousOfflineDays(maxOffLineDays);
    }

    String queryLastConnectDay(String instanceId, String firstEmergencyContact, String secondEmergencyContact) {
        Map map = jsChinaCrawlerCallMapper.queryLastConnectDay(instanceId, firstEmergencyContact, secondEmergencyContact);
        if (map.isEmpty()) {
            return "9999";
        }
        String startTime = map.get("start_time").toString();
        return MDateUtils.betweenDays(startTime, "yyyy-MM-dd HH:mm:ss");
    }

    private void net(String instanceId, JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog) {
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogOne());
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogTwo());
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogThree());
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogFour());
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogFive());
        addNet(instanceId, jsCrawlerChinaMobileLog.getNetLogSix());

    }

    private void addNet(String instanceId, String netLogJson) {
        List<JsChinaCrawlerNet> jsChinaCrawlerNets = new ArrayList();
        Gson gson = new Gson();
        Map callMap = gson.fromJson(netLogJson, HashMap.class);
        Map resultObj = (Map) callMap.get("resultObj");
        Map qryResult = (Map) resultObj.get("qryResult");
        List gprsBillDetail = (List) qryResult.get("gprsBillDetail");
        if (gprsBillDetail.size() <= 1) {
            return;
        }
        gprsBillDetail.remove(0);
        for (Object object : gprsBillDetail) {
            Map tempMap = (Map) object;
            JsChinaCrawlerNet jsChinaCrawlerNet = new JsChinaCrawlerNet();
            jsChinaCrawlerNet.setInstanceId(instanceId);
            jsChinaCrawlerNet.setStartTime(tempMap.get("startTime").toString());
            jsChinaCrawlerNet.setCdrApnni(tempMap.get("cdrApnni").toString());
            jsChinaCrawlerNet.setDuration(tempMap.get("duration").toString());
            jsChinaCrawlerNet.setBusyData(tempMap.get("busyData").toString());
            jsChinaCrawlerNet.setPackageFee(tempMap.get("packageFee").toString());
            jsChinaCrawlerNet.setMsnc(tempMap.get("msnc").toString());
            jsChinaCrawlerNet.setTotalFee(tempMap.get("totalFee").toString());
            jsChinaCrawlerNets.add(jsChinaCrawlerNet);
        }
        jsChinaCrawlerCallMapper.addJsChinaCrawlerNetBatch(jsChinaCrawlerNets);
    }

    private void sms(String instanceId, JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog) {
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogOne());
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogTwo());
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogThree());
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogFour());
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogFive());
        addSms(instanceId, jsCrawlerChinaMobileLog.getMessageLogSix());

    }

    private void addSms(String instanceId, String smsJson) {
        List<JsChinaCrawlerSMS> jsChinaCrawlerSMSs = new ArrayList();
        Gson gson = new Gson();
        Map callMap = gson.fromJson(smsJson, HashMap.class);
        Map resultObj = (Map) callMap.get("resultObj");
        Map qryResult = (Map) resultObj.get("qryResult");
        List smsBillDetail = (List) qryResult.get("smsBillDetail");
        if (smsBillDetail.size() <= 1) {
            return;
        }
        smsBillDetail.remove(0);
        for (Object object : smsBillDetail) {
            Map tempMap = (Map) object;
            JsChinaCrawlerSMS jsChinaCrawlerSMS = new JsChinaCrawlerSMS();
            jsChinaCrawlerSMS.setInstanceId(instanceId);
            jsChinaCrawlerSMS.setStatusType(tempMap.get("statusType").toString());
            jsChinaCrawlerSMS.setOtherParty(tempMap.get("otherParty").toString());
            jsChinaCrawlerSMS.setStartTime(tempMap.get("startTime").toString());
            jsChinaCrawlerSMS.setTotalFee(tempMap.get("totalFee").toString());
            jsChinaCrawlerSMS.setInfoLen(tempMap.get("infoLen").toString());
            jsChinaCrawlerSMS.setUserMobile(tempMap.get("user").toString());
            jsChinaCrawlerSMS.setVisitArear(tempMap.get("visitArear").toString());
            jsChinaCrawlerSMSs.add(jsChinaCrawlerSMS);
        }
        jsChinaCrawlerCallMapper.addJsChinaCrawlerSMSBatch(jsChinaCrawlerSMSs);
    }

    private void billMonthBill(JsChinaCrawlerSourceLog jsChinaCrawlerSourceLog, String userName) {
        //解析 月账单
        Gson gson = new Gson();
        int sumMonthBill = 0;
        int avgMonthBill = 0;
        int maxMonthBill = 0;
        long bzc = 0;
        String realName = "";
        String monthBillJson = jsChinaCrawlerSourceLog.getMonthBill();
        Map map = gson.fromJson(monthBillJson, HashMap.class);
        Map resultObjMap = (Map) map.get("resultObj");
        Map billBean = (Map) resultObjMap.get("billBean");
        Map columNar = (Map) billBean.get("columNar");
        List columNarsList = (List) columNar.get("columNars");
        for (int i = 0; i < columNarsList.size(); i++) {
            Map monthBill = (Map) columNarsList.get(i);
            int currentFee = Integer.parseInt(monthBill.get("columFee").toString());
            sumMonthBill += currentFee;
            if (i == columNarsList.size() - 1) {
                avgMonthBill = sumMonthBill / columNarsList.size();
            }
            maxMonthBill = maxMonthBill > currentFee ? maxMonthBill : currentFee;
        }
        int sum = 0;
        for (int i = 0; i < columNarsList.size(); i++) {
            Map monthBill = (Map) columNarsList.get(i);
            int currentFee = Integer.parseInt(monthBill.get("columFee").toString());
            sum += (currentFee - avgMonthBill) * (currentFee - avgMonthBill);
        }
        bzc = Math.round(Math.sqrt(sum / columNarsList.size()));
        Map userInfoBean = (Map) resultObjMap.get("userInfoBean");
        realName = (String) userInfoBean.get("userName");
        jsChinaCrawlerReport.setRealName(realName);
        jsChinaCrawlerReport.setMonthAveragePayment(avgMonthBill);
        jsChinaCrawlerReport.setMaxPayment(maxMonthBill);
        jsChinaCrawlerReport.setStandardDeviation(objectToInt(bzc));
        if (userName.equals(realName)) {
            jsChinaCrawlerReport.setIsRealName("1");
        } else {
            jsChinaCrawlerReport.setIsRealName("0");
        }
//        开户时间
        String openedFunctionJson = jsChinaCrawlerSourceLog.getOpenedFunction();
        Map openedFunctionMap = gson.fromJson(openedFunctionJson, HashMap.class);
        Map resultObj = (Map) openedFunctionMap.get("resultObj");
        List keyBizList = (List) resultObj.get("KEY_bizList");
        long minTime = 99999999999999L;
        for (int i = 0; i < keyBizList.size(); i++) {
            Map tempMap = (Map) keyBizList.get(i);
            String startDate = (String) tempMap.get("startDate");
            String effectDate = (String) tempMap.get("effectDate");
            if (!StringUtils.isEmpty(startDate)) {
                long startDateNum = Long.parseLong(startDate);
                minTime = minTime < startDateNum ? minTime : startDateNum;
            }
            if (!StringUtils.isEmpty(effectDate)) {
                long effectDateNum = Long.parseLong(effectDate);
                minTime = minTime < effectDateNum ? minTime : effectDateNum;
            }
        }
        String khsj = "";
        try {
            khsj = (minTime + toString()).substring(0, 8);
        } catch (Exception e) {
            e.printStackTrace();
        }
        jsChinaCrawlerReport.setOnlineDays(objectToInt(MDateUtils.betweenDays(khsj)));
    }

    private void vNet(JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog) {
        Gson gson = new Gson();
        String openedBusinessJson = jsCrawlerChinaMobileLog.getOpenedBusiness();

        Map openedBusinessMap = gson.fromJson(openedBusinessJson, HashMap.class);
        Map bResultObjMap = (Map) openedBusinessMap.get("resultObj");
        List monternetList = (List) bResultObjMap.get("KEY_Monternet");
        String isComVNet = "0";
        String joinComVNetDays = "0";
        for (int i = 0; i < monternetList.size(); i++) {
            Map tempMap = (Map) monternetList.get(i);
            String regName = tempMap.get("regName").toString();
            if (regName.contains("集团V网")) {
                //是集团V网用户
                isComVNet = "1";
                joinComVNetDays = MDateUtils.betweenDays(tempMap.get("regBeginDate").toString().substring(0, 8));
            }
        }
        jsChinaCrawlerReport.setIsGroup(isComVNet);
        jsChinaCrawlerReport.setJoinGroupDays(objectToInt(joinComVNetDays));
    }

    private void call(String instanceId, JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog) {
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogSix());
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogFive());
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogFour());
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogThree());
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogTwo());
        addCall(instanceId, jsCrawlerChinaMobileLog.getCallLogOne());
    }

    private void addCall(String instanceId, String callJson) {
        List<JsChinaCrawlerCall> jsChinaCrawlerCalls = new ArrayList();
        Gson gson = new Gson();
        Map callMap = gson.fromJson(callJson, HashMap.class);
        Map resultObj = (Map) callMap.get("resultObj");
        Map qryResult = (Map) resultObj.get("qryResult");
        List gsmBillDetail = (List) qryResult.get("gsmBillDetail");
        if (gsmBillDetail.size() <= 1) {
            return;
        }
        gsmBillDetail.remove(0);
        for (Object object : gsmBillDetail) {
            Map tempMap = (Map) object;
            JsChinaCrawlerCall jsChinaCrawlerCall = new JsChinaCrawlerCall();
            jsChinaCrawlerCall.setInstanceId(instanceId);
            jsChinaCrawlerCall.setCallDuration(tempMap.get("callDuration").toString());
            jsChinaCrawlerCall.setCallType(tempMap.get("callType").toString());
            jsChinaCrawlerCall.setStatusType(tempMap.get("statusType").toString());
            jsChinaCrawlerCall.setHighDefinition(tempMap.get("highDefinition").toString());
            jsChinaCrawlerCall.setOtherParty(tempMap.get("otherParty").toString());
            String summaryCallType = "被叫";
            if (tempMap.get("callType").toString().contains("主叫") || tempMap.get("statusType").toString().contains("主叫")) {
                summaryCallType = "主叫";
            }
            jsChinaCrawlerCall.setSummaryCallType(summaryCallType);
            jsChinaCrawlerCall.setPkgCode(tempMap.get("pkgCode").toString());
            jsChinaCrawlerCall.setRoamType(tempMap.get("roamType").toString());
            jsChinaCrawlerCall.setStartTime(tempMap.get("startTime").toString());
            jsChinaCrawlerCall.setTotalFee(tempMap.get("totalFee").toString());
            jsChinaCrawlerCall.setUserMobile(tempMap.get("user").toString());
            jsChinaCrawlerCall.setVisitArear(tempMap.get("visitArear").toString());
            jsChinaCrawlerCalls.add(jsChinaCrawlerCall);
        }

        jsChinaCrawlerCallMapper.addJsChinaCrawlerCallBatch(jsChinaCrawlerCalls);
    }


    private static int objectToInt(Object object) {
        try {
            if (StringUtils.isEmpty(object)) {
                return 0;
            }
            String num = object.toString();
            if (num.contains(".")) {
                num = num.substring(0, num.indexOf("."));
            }
            return Integer.parseInt(num);
        } catch (Exception e) {
            return 0;
        }
    }

}
