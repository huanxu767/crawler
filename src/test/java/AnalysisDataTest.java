import com.google.gson.Gson;
import com.hb.crawler.dao.JsChinaCrawlerCallMapper;
import com.hb.crawler.dao.JsChinaCrawlerReportMapper;
import com.hb.crawler.dao.JsChinaCrawlerSourceLogMapper;
import com.hb.crawler.pojo.*;
import com.hb.crawler.util.MDateUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.hb.crawler.util.MDateUtils.getCurrentYearDays;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml", "classpath:application-db.xml", "classpath:application-redis.xml"})
public class AnalysisDataTest {
    @Autowired
    private JsChinaCrawlerSourceLogMapper jsChinaCrawlerSourceLogMapper;

    @Autowired
    private JsChinaCrawlerCallMapper jsChinaCrawlerCallMapper;

    @Autowired
    private JsChinaCrawlerReportMapper jsChinaCrawlerReportMapper;
    @Test
    public void getIm(){
        List map = jsChinaCrawlerReportMapper.queryCallTimes("15151861623",null);
        System.out.println(map);

//        List<Map> result = jsChinaCrawlerReportMapper.queryCallTimes    ("18761898238","");
//        System.out.println(result.size());
//        int days = MDateUtils.betweenDaysNum("20117-11-12","20117-11-13");
//        System.out.println(days);
    }

    @Test
    public void queryArea(){
        List<Map> result = jsChinaCrawlerReportMapper.queryPositions("18761898238","","");
        List<Map> returnList = new ArrayList<>();
        if(result == null){
            return;
        }
        if(result.size() == 1){
            Map resultMap = new HashMap();
            Map tempMap = result.get(0);
            resultMap.put("beginTime",tempMap.get("start_time").toString());
            resultMap.put("endTime",tempMap.get("start_time").toString());
            resultMap.put("arear",tempMap.get("visit_arear").toString());
            System.out.println(resultMap);
            return ;
        }

        String visitArear = "";
        String beginTime = "";
        String endTime = "";
        for (int i = 0; i < result.size(); i++) {
            Map tempMap = result.get(i);
            String tempArear = tempMap.get("visit_arear").toString();
            String tempTime = tempMap.get("start_time").toString();
            if(i == 0){
                //第一次循环的时候
                visitArear = tempMap.get("visit_arear").toString();
                beginTime = tempMap.get("start_time").toString();
                endTime  = tempMap.get("start_time").toString();
            }
            if(MDateUtils.betweenDaysNum(tempTime,endTime) <= 1 && tempArear.equals(visitArear) ){
                //同一城市
                endTime = tempMap.get("start_time").toString();
            }else{
                Map cityMap = new HashMap();
                cityMap.put("beginTime",beginTime);
                cityMap.put("endTime",endTime);
                cityMap.put("arear",visitArear);
                returnList.add(cityMap);
                visitArear = tempMap.get("visit_arear").toString();
                beginTime = tempMap.get("start_time").toString();
                endTime  = tempMap.get("start_time").toString();
            }
        }

    }
    @Test
    public void analysisDataTest() {
        String instanceId = "f2a2af1bbbc0478a9f4de9c1ccd7c5b7";
        //紧急联系人
        String mobile = "18652090357";
        String userName = "";
        JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog = jsChinaCrawlerSourceLogMapper.queryJsChinaCrawlerSourceLog(instanceId);
        //月账单
        billMonthBill(jsCrawlerChinaMobileLog);
        //是否集团账户
        vNet(jsCrawlerChinaMobileLog);
        //通话记录
        call(instanceId,jsCrawlerChinaMobileLog);
        //短信记录
        sms(instanceId,jsCrawlerChinaMobileLog);
        //上网记录
        net(instanceId,jsCrawlerChinaMobileLog);
//        距上次与紧急联系人联系天数
        String lastDays = queryLastConnectDay(instanceId,mobile);
        System.out.println(lastDays);
//        总手机通话联系人数
        Long otherParties = jsChinaCrawlerCallMapper.countCallOtherParties(instanceId);
        System.out.println(otherParties);
        //
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
            int dateInt = Integer.parseInt(date.replace("-",""));
            if (days > 3) {
                //60天内
                if(sixtyDate <= dateInt){
                    times++;
                }
                maxOffLineDays = maxOffLineDays < days ? days : maxOffLineDays;
            }
            tempDate = date;
        }
        System.out.println("近60天关机超过3天次数" + times);
        System.out.println("历史最长关机天数" + maxOffLineDays);
    }

    String queryLastConnectDay(String instanceId, String mobile) {
        Map map = jsChinaCrawlerCallMapper.queryLastConnectDay(instanceId, mobile,"1123644");
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
            System.out.println(tempMap);
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
        int effectSize = jsChinaCrawlerCallMapper.addJsChinaCrawlerNetBatch(jsChinaCrawlerNets);
        System.out.println(effectSize);

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
            System.out.println(tempMap);
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

        int effectSize = jsChinaCrawlerCallMapper.addJsChinaCrawlerSMSBatch(jsChinaCrawlerSMSs);
        System.out.println(effectSize);
    }

    private void billMonthBill(JsChinaCrawlerSourceLog jsChinaCrawlerSourceLog) {
        //解析 月账单
        Gson gson = new Gson();
        int sumMonthBill = 0;
        int avgMonthBill = 0;
        int maxMonthBill = 0;
        long bzc = 0;
        String userName = "";
        String monthBillJson = jsChinaCrawlerSourceLog.getMonthBill();
        Map map = gson.fromJson(monthBillJson, HashMap.class);
        Map resultObjMap = (Map) map.get("resultObj");
        Map billBean = (Map) resultObjMap.get("billBean");
        Map columNar = (Map) billBean.get("columNar");
        List columNarsList = (List) columNar.get("columNars");
//        System.out.println(columNarsList);
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
        userName = (String) userInfoBean.get("userName");
        System.out.println("月均消费账单金额:" + avgMonthBill);
        System.out.println("历史最高账单金额:" + maxMonthBill);
        System.out.println("标准差:" + bzc);
        System.out.println("用户姓名:" + userName);
        System.out.println("手机余额:" + jsChinaCrawlerSourceLog.getAccountBalance());
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
        System.out.println("开户时间:" + khsj);
        System.out.println("在网天数:" + MDateUtils.betweenDays(khsj));
    }

    private void vNet(JsChinaCrawlerSourceLog jsCrawlerChinaMobileLog) {
        Gson gson = new Gson();
        String openedBusinessJson = jsCrawlerChinaMobileLog.getOpenedBusiness();

        Map openedBusinessMap = gson.fromJson(openedBusinessJson, HashMap.class);
        Map bResultObjMap = (Map) openedBusinessMap.get("resultObj");
        List monternetList = (List) bResultObjMap.get("KEY_Monternet");
        boolean isComVNet = false;
        String joinComVNetDays = "0";
        for (int i = 0; i < monternetList.size(); i++) {
            Map tempMap = (Map) monternetList.get(i);
            String regName = tempMap.get("regName").toString();
            if (regName.contains("集团V网")) {
                //是集团V网用户
                isComVNet = true;
                joinComVNetDays = MDateUtils.betweenDays(tempMap.get("regBeginDate").toString().substring(0, 8));
            }
        }
        System.out.println("isComVNet:" + isComVNet);
        System.out.println("集团V网天数:" + joinComVNetDays);
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
            System.out.println(tempMap);
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

        int effectSize = jsChinaCrawlerCallMapper.addJsChinaCrawlerCallBatch(jsChinaCrawlerCalls);
        //总手机通话联系人数
        System.out.println(effectSize);
    }

}
