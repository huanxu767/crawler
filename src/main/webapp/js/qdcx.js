//清单查询组件
var MY_QDCXNEWComponent = BmonPage.createComponent('MY_QDCXNEW');

$.extend(MY_QDCXNEWComponent, {
    id: "QDCXNEW",
    name: "清单查询",
    busiNum: "QDCX",
    queryResult: null,
    queryMonth: null,
    queryItem: null,
    queryItemName : null,
    queryStartDate: null,
    state:'inited',
    queryEndDate: null,
    realMobile: null,
    menuId:'2001',
    pageIndex : 1,
    qryPages : "",
    isEnd : "",
    startTime:"",
    endTime:"",
    queryMobile:"",
    user:null,
    init: function(result) {
//    	  debugger;
//          $("#right_shortcut").html("");
//  		  $("#right_shortcut").html("<ul><li>" +
//  		   "<a  title='参与问卷调查拿积分' href='http://www.js.10086.cn/iquestionnaire/questionnaireAction.do?method=getQuestionParam&queryParam=WTZDCXQR' target='_blank' class='wt-side-link wt-side-wenjuandiaocha'>" +
//  		   "</a></li></ul>");

        //传业务编码给二次服务密码登录弹框
        $("#NumType").val(MY_QDCXNEWComponent.busiNum);
        var date=new Date();
        var day=date.getDate();
        if(day>3){
            $("#notice").hide();
        }
        setHistoryCookieCx("MY_QDCX");
        $.extend(BmonPage,{
            centerElement: function (id, width, height) {
                var popupName = $("#" + id);
                var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
                    _windowHeight = $(window).height(),//获取当前窗口高度
                    _windowWidth = $(window).width(),//获取当前窗口宽度
                    _popupHeight = popupName.height(),//获取弹出层高度
                    _popupWeight = popupName.width();//获取弹出层宽度
                _posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
                _posiLeft = (_windowWidth - _popupWeight) / 2;
                popupName.css({"left": _posiLeft + "px", "top":"250px"});//设置position
            },
            init:function(){

            }
        });

        $("#businessQueryArea").hide();
        if (result.systemCode == "-200010") {
            window.location.href=MY_LOCATION_URL;
            return;
        }
        if (result && result.resultCode == "0") {
            var qdcxData = result.resultObj;
            var user = result.resultObj.user;
            MY_QDCXNEWComponent.user = result.resultObj.user;
            MY_QDCXNEWComponent.getUserInfo(user);
            //初始化月份信息
            MY_QDCXNEWComponent.showQueryMonth(qdcxData.query_ym);
            //初始化菜单信息
            MY_QDCXNEWComponent.queryMenuList(qdcxData.qry39Result);
            //初始化日期信息
            $('#txtFromDate').val(qdcxData.startTime);
            $('#txtToDate').val(qdcxData.endTime);
            MY_QDCXNEWComponent.realMobile = qdcxData.realMobile;
            MY_QDCXNEWComponent.queryStartDate = qdcxData.startTime;
            MY_QDCXNEWComponent.queryEndDate = qdcxData.endTime;
            ////////////////////////业务插码开始
            if (user != null) {
                var userbrand = '';
                var mobileNum = user.mobile;
                var userCity = user.city_jbNum;
                if (user.brand_jbNum == 'QQT') {
                    userbrand = 'gotone';
                } else if (user.brand_jbNum == 'DGDD') {
                    userbrand = 'mzone';
                } else if (user.brand_jbNum == 'SZX') {
                    userbrand = 'easyown';
                }
            }
            var wtStartTime = new Date().getTime();
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '1', 'WT.brand', userbrand, 'WT.mobile', mobileNum, 'WT.userCity', userCity);
            }
            ////////////////////////业务插码结束
        }
        else
        {
            if(result.systemCode == '-200057'){
                $("#popBox-close").click(function(){
                    jQuery(this).parents('.popBox').hide();jQuery('#popMask').hide();
                    clearInterval(timer);
                });
                var timer=setInterval(function(){
                    BmonPage.showFailureDialog("尊敬的客户您好，如想查看详情请使用“服务密码”<a onclick=\"javascript:window.location.href=MY_LOCATION_URL;\" href=\"javascript:void(0);\">登录</a>");
                    jQuery('#popMask').show();
//        		  $("#popbox_fuwuLogin").show();
//        		  document.getElementById("password").focus();
                },1000);
                return;
            }
            BmonPage.showFailureDialog(result.resultMsg, null);
        }

    },
    //添加点击套餐理财插码
    addCM:function(){
        if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','wdyd-tclc', 'WT.event','wdxd');}
    },
    /***
     * 用户基础信息
     */
    getUserInfo : function(user) {
        var userInfoHtml = "";
        userInfoHtml = userInfoHtml
            + "<span>客户姓名：<b class=\"font-pink1\">"+user.userName+"</b></span>"
            + "<span>手机号码：<b class=\"font-pink1\">"+user.mobile+"</b></span>"
            + "<span>品牌：<b class=\"font-pink1\">"+user.brand_jbNum_name+"</b></span>";
        $("#userInfoHeader").html(userInfoHtml);
    },
    showQueryMonth: function(data) {
        var queryMonthStr = "查询月份：";
        $(data).each(function(index, yearMonth) {
            if (index == data.length - 1) {
                queryMonthStr += '<span class="cur" id="'+yearMonth+'">当月准实时</span>';
                //查询月份赋初值(当前月份)
                MY_QDCXNEWComponent.queryMonth=yearMonth;
            } else {
                queryMonthStr += '<span id="'+yearMonth+'">' + yearMonth.substring(0, 4) + '-' + yearMonth.substring(4, 6) + '</span>';
            }
        });
        $("#inquiryMonth").html(queryMonthStr);
        $("#inquiryMonth").show();

        //添加查询条件的级联事件
        //月份选择
        $('#inquiryMonth  span').click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            MY_QDCXNEWComponent.queryMonth=$(this).attr("id");
            //重置查询信息
            var month=$(this).html();
            if( month=="当月准实时"){
                var date=new Date();
                var monthToday=date.getMonth()+1;
                var strDateM=monthToday >9 ? monthToday.toString(): '0'+ monthToday;
                $('#txtFromDate').val(date.getFullYear()+"-"+ strDateM +"-01");
                var day=date.getDate() >9 ? date.getDate():'0'+date.getDate();
                $('#txtToDate').val(date.getFullYear()+"-"+ strDateM +"-"+day);
            }
            else{
                $('#txtFromDate').val(month+"-01");
                $('#txtToDate').val(MY_QDCXNEWComponent.getFirstAndLastMonthDay(month.substr(0,4),month.substr(5,2)));
            }

            MY_QDCXNEWComponent.queryStartDate = $('#txtFromDate').val();
            MY_QDCXNEWComponent.queryEndDate = $('#txtToDate').val();

        });
    },
    // 清单选项菜单
    queryMenuList : function(qry39Result){
        //  var menuPage = qry39Result;
        var array=this.convertToArray(qry39Result);
        var queryServiceType='详单类型：';
        //增加锚点定位
        strFinal = "";
        var reg = new RegExp("(^|&)id=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null){
            strFinal = unescape(r[2]);
        }else{
            strFinal= null;
        }
        if(null != strFinal){
            for(var i in array){
                if(array[i].menu_id ==strFinal){
                    queryServiceType+='<span class="cur" id="'+array[i].menu_id+'">'+array[i].menu_name+'</span>';
                }else{
                    queryServiceType+='<span id="'+array[i].menu_id+'">'+array[i].menu_name+'</span>';
                }
            }
        }else{
            for(var i in array){
                if(array[i].isChoose=='1'){
                    queryServiceType+='<span class="cur" id="'+array[i].menu_id+'">'+array[i].menu_name+'</span>';
                }else{
                    queryServiceType+='<span id="'+array[i].menu_id+'">'+array[i].menu_name+'</span>';
                }
            }
        }
        $('#queryServiceType').html(queryServiceType);
        $('#queryServiceType').show();
        $('#queryServiceType span').click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            var id=$(this).attr('id');
            MY_QDCXNEWComponent.menuId=id;
            if(id==2001){
                if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDXDLX','WT.event','thxd');}
            } else if (id==2002) {
                if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDXDLX','WT.event','swxd');}
            }else if (id==2003) {
                if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDXDLX','WT.event','dcxxd');}
            }else if (id==2004) {
                if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDXDLX','WT.event','zyzzyw');}
            }else if (id==2005) {
                if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDXDLX','WT.event','dsfyw');}
            }
            for(var i in array){
                if(array[i].menu_id===id){
                    MY_QDCXNEWComponent.detailClickInfo(array[i]);
                    break;
                }
            }
        });
        //详细信息与详单类型的联动，增加锚点
        if(null != strFinal){
            for(var i in array){
                if(array[i].menu_id==strFinal){
                    this.detailClickInfo(array[i]);
                    break;
                }
            }
        }else{
            if(window.location.href.indexOf("flag=xq") != -1) {
                this.detailClickInfo(array[1]);
            } else {
                this.detailClickInfo(array[0]);
            }
        }

    },
    detailClickInfo:function(array){
        var items=array.items;
        var detail=array.menu_name+'：';
        for(var i in items){
            if(items[i].isChoose=='1'){
                detail+='<span class="cur" id="'+items[i].value+'">'+items[i].name+'</span>';
                MY_QDCXNEWComponent.queryItem=items[i].value;
            }else{
                detail+='<span id="'+items[i].value+'">'+items[i].name+'</span>';
            }
        }
        $('#queryDetailType').html(detail);
        $('#queryDetailType span').click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            MY_QDCXNEWComponent.queryItem=$(this).attr('id');
        });

    },
    //清单查询方法
    queryBillDetail: function(item) {
        ////////////////////////业务插码开始
        var user = this.user;
        if (user != null) {
            var userbrand = '';
            var mobileNum = user.mobile;
            var userCity = user.city_jbNum;
            if (user.brand_jbNum == 'QQT') {
                userbrand = 'gotone';
            } else if (user.brand_jbNum == 'DGDD') {
                userbrand = 'mzone';
            } else if (user.brand_jbNum == 'SZX') {
                userbrand = 'easyown';
            }
        }
        var wtStartTime = new Date().getTime();
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '20', 'WT.brand', userbrand, 'WT.mobile', mobileNum, 'WT.userCity', userCity);
        }
        ////////////////////////业务插码结束

        if(item == "0"){
            MY_QDCXNEWComponent.qryPages = "";
            MY_QDCXNEWComponent.isEnd = "";
        }
        var queryMonth = MY_QDCXNEWComponent.queryMonth;
        var queryItem = MY_QDCXNEWComponent.queryItem;  //sunpei edit recover
        // var queryItem = 1;

        if(!MY_QDCXNEWComponent.checkSearchDate())
        {
            return;
        }
        var beginTime=$('#txtFromDate').val();
        var endTime=$('#txtToDate').val();
        $.busiReq({
            data : {
                "reqUrl" : "MY_QDCXQueryNew", // 新的清单查询
                "busiNum" : "QDCX",
                "queryMonth" : queryMonth,
                "queryItem" : queryItem,
                "qryPages" : MY_QDCXNEWComponent.qryPages,
                "qryNo" : MY_QDCXNEWComponent.pageIndex,
                "operType" : "3",
                "queryBeginTime":beginTime,
                "queryEndTime":endTime
            },
            success : function(data) {
                var result = eval("(" + data + ")");
                if(undefined!=result.logicCode && null!=result.logicCode && result.logicCode=="-1008"){
                    result.resultMsg="个人用户密码校验失败:禁止业务验证：清单禁查！";
                }
                if (result.systemCode == "-200010") {
                    ////////////////////////业务插码开始
                    if (typeof(_tag) != "undefined") {
                        _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '-200010');
                    }
                    ////////////////////////业务插码结束
                    window.location.href=MY_LOCATION_URL;

                } else if (result.systemCode == "-900002" || "-200002" == result.systemCode) {
                    ////////////////////////业务插码开始
                    if (typeof(_tag) != "undefined") {
                        _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '99');
                    }
                    ////////////////////////业务插码结束
                    BmonPage.showFailureDialog(result.resultMsg);
                } else {
                    //alert(result.resultObj.oldType);
                    MY_QDCXNEWComponent.queryResult = result;
                    if(result.resultObj.oldType=="1"){//新版中查询旧有信息
                        MY_QDCXNEWComponent.pageIndex=1;
                        MY_QDCXNEWComponent.isEnd=1;//不让翻页，旧版一页展示所有
                    }else{
                        MY_QDCXNEWComponent.isEnd = result.resultObj.qryResult.contentList[0].isEnd;
                        MY_QDCXNEWComponent.qryPages = result.resultObj.qryResult.contentList[0].keyV; // 获取每次查询的key值
                        MY_QDCXNEWComponent.startTime = result.resultObj.startTime;
                        MY_QDCXNEWComponent.endTime= result.resultObj.endTime;
                    }
                    //alert(queryItem+"===============");
                    if (result && result.resultCode == "0") {
                        ////////////////////////业务插码开始
                        var wtEndTime = new Date().getTime();
                        var withTime = wtEndTime - wtStartTime;
                        if (typeof(_tag) != "undefined") {
                            _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '99', 'WT.brand', userbrand, 'WT.mobile', mobileNum, 'WT.userCity', userCity, 'WT.withTime', withTime);
                        }
                        ////////////////////////业务插码结束
                        $("#searchInfo").show();
                        $("#searchInfo .fr").show();
                        //过滤手机号码
                        if($.trim($('#txtMobile').val()) != "请输入号码中任意位连续数字")
                        {
                            MY_QDCXNEWComponent.queryMobile=$.trim($('#txtMobile').val());
                        }
                        if($.trim($('#txtMobile').val()) == MY_QDCXNEWComponent.realMobile)
                        {
                            MY_QDCXNEWComponent.queryMobile="";
                        }

                        // 语音详单
                        if (queryItem == 1) {
                            MY_QDCXNEWComponent.showGsmBillDetail(result, 1);
                        }
                        // 集团短号详单
                        else if (queryItem == 8) {
                            MY_QDCXNEWComponent.showJTDHDetail(result, 1);
                        }
                        // 视频电话详单
                        else if (queryItem == 46) {
                            MY_QDCXNEWComponent.showSPDHDetail(result, 1);
                        }
                        // IP直通车详单
                        else if (queryItem == 2) {
                            MY_QDCXNEWComponent.showIPZTCDetail(result, 1);
                        }
                        // 语音增值详单
                        else if (queryItem == 68) {
                            MY_QDCXNEWComponent.showYYZZDetail(result, 1);
                        }

                        // 移动数据流量详单详单
                        else if (queryItem == 7) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showGPRSDetail(result, 1);
                        }
                        // WLAN详单
                        else if (queryItem == 9) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showWLANDetail(result, 1);
                        }
                        // G3上网本详单
                        else if (queryItem == 99) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showG3SWBDetail(result, 1);
                        }
                        // 短信详单
                        else if (queryItem == 6) {
                            MY_QDCXNEWComponent.showDXDetail(result, 1);
                        }
                        // 彩信详单
                        else if (queryItem == 5) {
                            MY_QDCXNEWComponent.showCXDetail(result, 1);
                        }
                        // 国际短信详单
                        else if (queryItem == 600) {
                            MY_QDCXNEWComponent.showGJDXDetail(result, 1);
                        }
                        // 无线音乐详单
                        else if (queryItem == 18) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showWXYYDetail(result, 1);
                        }
                        // 梦网详单（自有业务业务）
                        else if (queryItem == 103) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showMWDetail(result, 1);
                        }
                        // 即时群聊详单
                        else if (queryItem == 41) {
                            MY_QDCXNEWComponent.showJSQLDetail(result, 1);
                        }
                        // 和游戏消费详单
                        else if (queryItem == 36) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showHeGameDetail(result, 1);
                        }
                        // 和游戏消费点数详单
                        else if (queryItem == 82) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showHeGameCountDetail(result, 1);
                        }

                        // LBS详单
                        else if (queryItem == 34) {
                            MY_QDCXNEWComponent.showLBSDetail(result, 1);
                        }
                        // 96121详单
                        else if (queryItem == 11) {
                            MY_QDCXNEWComponent.show96121Detail(result, 1);
                        }
                        // 梦网详单（代收业务）详单
                        else if (queryItem == 104) {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showDSMWDetail(result, 1);
                        }
                        else if(queryItem==602)
                        {
                            $("#searchInfo .fr").hide();
                            MY_QDCXNEWComponent.showHlwWatchDetail(result,1);
                        }
                        else if(queryItem==604)
                        {
                            alert();
                        }
                        else if(queryItem==607)
                        {
                            alert();
                        }
                        //重置手机号码
                        $('#txtMobile').val("请输入号码中任意位连续数字");

                    } else if (loginComponent.userInfo.isGroupMobile == "1") {
                        window.location.href = "#home";
                    } else {
                        ////////////////////////业务插码开始
                        if (typeof(_tag) != "undefined") {
                            _tag.dcsMultiTrack('WT.si_n', 'QDCX', 'WT.si_x', '-99');
                        }
                        ////////////////////////业务插码结束
                        BmonPage.showFailureDialog(result.resultMsg);
                    }
                }
            }
        });
    }

    ,

    //语音详单显示(filterType 1:不过滤信息 2：过滤信息 )
    showGsmBillDetail: function(result, filterType) {
        var listObj=[];
        var listObjNew=[];
        var queryMonth = MY_QDCXNEWComponent.queryMonth;

        //应收基本话费
        var firstCfees = 0;
        //应收长途话费
        var realLfeeAndFirstOfees = 0;
        //实收基本话费
        var realCfees = 0;
        //实收长途话费
        var realLfees = 0;
        //话费总计
        var totalFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //过滤详单总数
        var totalListNumFilter = 0;
        //详单总数
        var totalListNum = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());//.trim();
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：语音详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);

        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTitle);

        var billBusiCount = '基本话费：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '长途话费：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '话费总计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';

        if(parseInt(queryMonth)>201708)
        {
            billBusiCount = '国内话费：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '国际及其港澳台费用：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '话费总计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        }

        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }

        var gsmDetailList = result.resultObj.qryResult.gsmBillDetail;

        var tdCount = 0;
        for (var i = gsmDetailList.length - 1; i >= 1; i--) {
            var gsmDetail = gsmDetailList[i];
            //状态类型
            var statusType = gsmDetail.statusType;
            //对方号码
            var otherParty = gsmDetail.otherParty;
            //开始时间
            var startTime = MY_QDCXNEWComponent.transTime(gsmDetail.startTime);
            //通话时长
            var callDuration = gsmDetail.callDuration;
            //通信地点
            var visitArear = gsmDetail.visitArear;
            //通信类型
            var callType = gsmDetail.roamType;
            //应收基本通话费
            var firstCfee = gsmDetail.firstCfee;
            //应收长途话费和应收其他话费
            var realLfeeAndFirstOfee = gsmDetail.realLfeeAndFirstOfee;
            //实收基本话费
            var realCfee = gsmDetail.realCfee;
            //实收长途话费
            var realLfee = gsmDetail.realLfee;
            //小计
            var totalFee = realCfee+realLfee;
            //套餐费
            var feeItem01 = gsmDetail.feeItem01;
            //套餐描述
            var tpRemarkInfo = gsmDetail.pkgCode;

            tpRemarkInfo=tpRemarkInfo.replace(/[\r\n]/g, "");
            tpRemarkInfo = tpRemarkInfo.replace(/（/g, "<");    //去掉kuohao
            tpRemarkInfo = tpRemarkInfo.replace(/）/g, ">");    //去掉kuohao

            //使用者
            var usedMobile = gsmDetail.user;
            //高清
            var highDefinition=gsmDetail.highDefinition;
            //通信方式
            var callTypeN=gsmDetail.callType;
            // 国际及港澳台话费（元）
            var interGATFee=gsmDetail.interGATFee;
            //国内话费
            var chFee=gsmDetail.chFee;
            //9月后小计
            var totalFeeNew = interGATFee+chFee;

            var queryCondition = false;
            var queryCondition2 = false;

            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));


            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                firstCfees = firstCfees + firstCfee;
                realLfeeAndFirstOfees = realLfeeAndFirstOfees + realLfeeAndFirstOfee;
                if(parseInt(queryMonth)>201708)
                {
                    realCfees = realCfees + chFee;
                    realLfees = realLfees + interGATFee;
                    totalFees = totalFees + chFee+interGATFee;
                }
                else
                {
                    realCfees = realCfees + realCfee;
                    realLfees = realLfees + realLfee;
                    totalFees = totalFees + realCfee+realLfee;
                }
                feeItem01s = feeItem01s + feeItem01;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"startTime\":\""+startTime+"\",\"callDuration\":\""+callDuration+"\",\"visitArear\":\""+visitArear+"\",\"callType\":\""+callType+"\",\"realCfee\":\""+formatNumberValueInfo(realCfee)+"\",\"realLfee\":\""+formatNumberValueInfo(realLfee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemarkInfo\":\""+tpRemarkInfo+"\",\"usedMobile\":\""+usedMobile+"\",\"highDefinition\":\""+highDefinition+"\"}");
                listObj.push(listJson);

                var listJsonNew = JSON.parse("{\"statusType\":\""+callTypeN+"\",\"otherParty\":\""+otherParty+"\",\"startTime\":\""+startTime+"\",\"callDuration\":\""+callDuration+"\",\"visitArear\":\""+visitArear+"\",\"callType\":\""+callType+"\",\"realCfee\":\""+formatNumberValueInfo(chFee)+"\",\"realLfee\":\""+formatNumberValueInfo(interGATFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFeeNew)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemarkInfo\":\""+tpRemarkInfo+"\",\"usedMobile\":\""+usedMobile+"\",\"highDefinition\":\""+highDefinition+"\"}");
                listObjNew.push(listJsonNew);

            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realCfees']").html(formatNumberValueInfo(realCfees));
        $("span[name='realLfees']").html(formatNumberValueInfo(realLfees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));


        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'startTime',
                title : '开始时间',
                css : '',
                width : '70'
            }, {
                key : 'callDuration',
                title : '通话时长',
                css : '',
                width : '60'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '60'
            }, {
                key : 'callType',
                title : '通信类型',
                css : '',
                width : '70'
            }, {
                key : 'realCfee',
                title : '基本话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '长途话费',
                css : '',
                width : '46'
            }, {
                key : 'totalFee',
                title : '实收通信费',
                css : '',
                width : '46'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            }, {
                key : 'tpRemarkInfo',
                title : '所属套餐',
                css : '',
                width : '56'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }, {
                key : 'highDefinition',
                title : '高清',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的语音详单为0元。")
        };

        var jsonNew = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObjNew,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '通信方式',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'startTime',
                title : '开始时间',
                css : '',
                width : '70'
            }, {
                key : 'callDuration',
                title : '通话时长',
                css : '',
                width : '60'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '60'
            }, {
                key : 'callType',
                title : '通信类型',
                css : '',
                width : '70'
            }, {
                key : 'realCfee',
                title : '国内（不含港澳台）话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '国际及港澳台话费',
                css : '',
                width : '46'
            }, {
                key : 'totalFee',
                title : '实收通信费',
                css : '',
                width : '46'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            }, {
                key : 'tpRemarkInfo',
                title : '所属套餐',
                css : '',
                width : '56'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }, {
                key : 'highDefinition',
                title : '高清',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的语音详单为0元。")
        };

        if(parseInt(queryMonth)>201708)
        {
            pageComponent.generatePageHtml(jsonNew);
        }
        else
        {
            pageComponent.generatePageHtml(json);
        }
        $("#printTable").html(pageComponent.queryTableHtml());
    }
    ,

    //集团短号详单
    showJTDHDetail: function(result, filterType) {
        var listObj=[];
        var listObjNew=[];
        var queryMonth = MY_QDCXNEWComponent.queryMonth;
        //基本话费合计
        var realCfees = 0;
        //长途话费合计
        var realLfees = 0;
        //费用合计
        var totalFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：集团短号详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '基本话费合计：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '长途话费合计：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        if(parseInt(queryMonth)>201708)
        {
            billBusiCount = '国内话费：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '国际及其港澳台费用：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        }
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var vpmnBillDetail =result.resultObj.qryResult.vpmnBillDetail;
        var tdCount = 0;
        for (var i = vpmnBillDetail.length - 1; i >= 1; i--) {
            var vpmnDetail = vpmnBillDetail[i];

            //类型
            var statusType = vpmnDetail.statusType;
            //对方号码
            var otherParty = vpmnDetail.otherParty;
            //对方短号
            var shortNum = vpmnDetail.shortNum;
            //日期
            var cdrStartDate = vpmnDetail.cdrStartDate;
            //通话时间
            var startTime = vpmnDetail.startTime;
            //时长(时分秒)
            var callDuration = vpmnDetail.callDuration;
            //通信地点
            var visitArear = vpmnDetail.visitArear;
            //基本话费
            var realCfee = vpmnDetail.realCfee;
            //长途话费
            var realLfee = vpmnDetail.realLfee;
            //其他费用
            var otherFee = vpmnDetail.otherFee;
            //小计
            var totalFee = vpmnDetail.totalFee;
            //套餐费
            var feeItem01 = vpmnDetail.feeItem01;
            //作用套餐
            var tpRemark = vpmnDetail.tpRemark;

            // 国际及港澳台话费（元）
            var interGATFee=vpmnDetail.interGATFee;
            //国内话费（元）
            var chFee=vpmnDetail.chFee;

            //使用者
            var usedMobile = vpmnDetail.user;

            var tpRemarkInfo = '';
            if (tpRemark) {
                tpRemarkInfo = '有';
            } else {
                tpRemarkInfo = '无';
            }

            var queryCondition = false;
            var queryCondition2 = false;

            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= cdrStartDate.substr(0, 10));
            var ret3 = (strEndData >= cdrStartDate.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;
                if(parseInt(queryMonth)>201708)
                {
                    realCfees = realCfees + chFee;
                    realLfees = realLfees + interGATFee;
                    totalFees = totalFees + totalFee;
                }
                else
                {
                    realCfees = realCfees + realCfee;
                    realLfees = realLfees + realLfee;
                    totalFees = totalFees + totalFee;
                }
                feeItem01s = feeItem01s + feeItem01;
                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"shortNum\":\""+shortNum+"\",\"callDuration\":\""+callDuration+"\",\"cdrStartDate\":\""+cdrStartDate+ ' ' + startTime+"\",\"visitArear\":\""+visitArear+"\",\"otherFee\":\""+formatNumberValueInfo(otherFee)+"\",\"realCfee\":\""+formatNumberValueInfo(realCfee)+"\",\"realLfee\":\""+formatNumberValueInfo(realLfee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemarkInfo\":\""+tpRemarkInfo+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObj.push(listJson);

                var listJsonNew = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"shortNum\":\""+shortNum+"\",\"cdrStartDate\":\""+cdrStartDate+ ' ' + startTime+"\",\"callDuration\":\""+callDuration+"\",\"visitArear\":\""+visitArear+"\",\"otherFee\":\""+formatNumberValueInfo(otherFee)+"\",\"realCfee\":\""+formatNumberValueInfo(chFee)+"\",\"realLfee\":\""+formatNumberValueInfo(interGATFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemarkInfo\":\""+tpRemarkInfo+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObjNew.push(listJsonNew);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realCfees']").html(formatNumberValueInfo(realCfees));
        $("span[name='realLfees']").html(formatNumberValueInfo(realLfees));
        $("span[name='totalFees']").html(formatNumberValueInfo(realLfees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '30'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'shortNum',
                title : '短号',
                css : '',
                width : '40'
            }, {
                key : 'callDuration',
                title : '时长(时分秒)',
                css : '',
                width : '60'
            }, {
                key : 'cdrStartDate',
                title : '日期',
                css : '',
                width : '80'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '60'
            }, {
                key : 'realCfee',
                title : '基本话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '长途话费',
                css : '',
                width : '46'
            },{
                key : 'otherFee',
                title : '其它费用',
                css : '',
                width : '56'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            }, {
                key : 'tpRemarkInfo',
                title : '所属套餐',
                css : '',
                width : '56'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的集团短号详单为0元。")
        };

        var jsonNew = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObjNew,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '通信方式',
                css : '',
                width : '30'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'shortNum',
                title : '集团短号',
                css : '',
                width : '40'
            }, {
                key : 'cdrStartDate',
                title : '起始时间',
                css : '',
                width : '80'
            }, {
                key : 'callDuration',
                title : '通话时长(时分秒)',
                css : '',
                width : '60'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '60'
            }, {
                key : 'realCfee',
                title : '国内话费（元）',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '国际及其港澳台费用（元）',
                css : '',
                width : '46'
            },{
                key : 'otherFee',
                title : '应收其他话费(元)',
                css : '',
                width : '56'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            }, {
                key : 'tpRemarkInfo',
                title : '套餐信息',
                css : '',
                width : '56'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的集团短号详单为0元。")
        };

        if(parseInt(queryMonth)>201708)
        {
            pageComponent.generatePageHtml(jsonNew);
        }
        else
        {
            pageComponent.generatePageHtml(json);
        }
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //视频电话详单
    showSPDHDetail: function(result, filterType) {
        var listObj=[];


        //实收基本话费合计
        var realCfees = 0;
        //实收长途话费合计
        var realLfees = 0;
        //话费合计
        var totalFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();

        var billDetailTitle = '<b>当前查询项目：视频电话详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);

        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '实收基本话费合计：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '实收长途话费合计：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '话费合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var gsmVideoBillDetail =result.resultObj.qryResult.gsmVideoBillDetail;

        var tdCount = 0;
        for (var i = gsmVideoBillDetail.length - 1; i >= 1; i--) {
            var gsmVideoDetail = gsmVideoBillDetail[i];

            //类型
            var statusType = gsmVideoDetail.statusType;
            //对方号码
            var otherParty = gsmVideoDetail.otherParty;
            //通信地点
            var visitArear = gsmVideoDetail.visitArear;
            //时间
            var startTime = gsmVideoDetail.startTime;
            //时长
            var callDuration = gsmVideoDetail.callDuration;
            //基本话费
            var realCfee = gsmVideoDetail.realCfee;
            //长途话费
            var realLfee = gsmVideoDetail.realLfee;
            //小计
            var totalFee = gsmVideoDetail.totalFee;
            //套餐费
            var feeItem01 = gsmVideoDetail.feeItem01;
            //作用套餐
            var tpRemark = gsmVideoDetail.tpRemark;
            //网络
            var serviceCode = gsmVideoDetail.serviceCode;


            var queryCondition = false;
            var queryCondition2 = false;

            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                realCfees = realCfees + realCfee;
                realLfees = realLfees + realLfee;
                totalFees = totalFees + totalFee;
                feeItem01s = feeItem01s + feeItem01;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"visitArear\":\""+visitArear+"\",\"startTime\":\""+startTime+"\",\"callDuration\":\""+callDuration+"\",\"realCfee\":\""+formatNumberValueInfo(realCfee)+"\",\"realLfee\":\""+formatNumberValueInfo(realLfee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemark\":\""+tpRemark+"\",\"serviceCode\":\""+serviceCode+"\"}");
                listObj.push(listJson);

                //detailListHtml += '<td>' + statusType + '</td>' + '<td>' + otherParty + '</td>' + '<td>' + visitArear + '</td>' + '<td>' + startTime + '</td>' + '<td>' + callDuration + '</td>' + '<td>' + formatNumberValueInfo(realCfee / 100) + '</td>' + '<td>' + formatNumberValueInfo(realLfee / 100) + '</td>' + '<td>' + formatNumberValueInfo(totalFee / 100) + '</td>' + '<td>' + formatNumberValueInfo(feeItem01 / 100) + '</td>' + '<td>' + tpRemark + '</td>' + '<td>' + serviceCode + '</td>' + '</tr>';
            }

        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realCfees']").html(formatNumberValueInfo(realCfees));
        $("span[name='realLfees']").html(formatNumberValueInfo(realLfees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            },{
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '70'
            },{
                key : 'startTime',
                title : '时间',
                css : '',
                width : '70'
            }, {
                key : 'callDuration',
                title : '时长(时分秒)',
                css : '',
                width : '60'
            },{
                key : 'realCfee',
                title : '基本话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '长途话费',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            },{
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            },{
                key : 'tpRemark',
                title : '所属套餐',
                css : '',
                width : '56'
            },{
                key : 'serviceCode',
                title : '网络',
                css : '',
                width : '56'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的视频电话详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    //IP直通车详单
    showIPZTCDetail: function(result, filterType) {
        var listObj=[];
        var realCfees = 0;
        //实收长途话费合计
        var realLfees = 0;
        //话费合计
        var totalFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();


        var billDetailTitle = '<b>当前查询项目：IP直通车详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '基本话费合计：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '长途话费合计：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);

        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var ipcarBillDetail = result.resultObj.qryResult.ipcarBillDetail;

        for (var i = ipcarBillDetail.length - 1; i >= 1; i--) {
            var ipcarDetail = ipcarBillDetail[i];

            //类型
            var statusType = ipcarDetail.statusType;
            //对方号码
            var otherParty = ipcarDetail.otherParty;
            //通信地点
            var visitArear = ipcarDetail.visitArear;
            //通话日期
            var cdrStartDate = MY_QDCXNEWComponent.transTime(ipcarDetail.startTime);
            //通话时间
            var startTime = MY_QDCXNEWComponent.transTime(ipcarDetail.startTime);
            //时长
            var callDuration = MY_QDCXNEWComponent.time_To_hhmmss(ipcarDetail.callDuration);
            //基本话费
            var realCfee = ipcarDetail.realCfee;
            //长途话费
            var realLfee = ipcarDetail.realLfee;
            //小计
            var totalFee = ipcarDetail.totalFee;
            //套餐费
            var feeItem01 = ipcarDetail.freeFee;

            var queryCondition = false;
            var queryCondition2 = false;

            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= cdrStartDate.substr(0, 10));
            var ret3 = (strEndData >= cdrStartDate.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                realCfees = realCfees + realCfee;
                realLfees = realLfees + realLfee;
                totalFees = totalFees + totalFee;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"callDuration\":\""+callDuration+"\",\"cdrStartDate\":\""+cdrStartDate+"\",\"visitArear\":\""+visitArear+"\",\"realCfee\":\""+formatNumberValueInfo(realCfee)+"\",\"realLfee\":\""+formatNumberValueInfo(realLfee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realCfees']").html(formatNumberValueInfo(realCfees));
        $("span[name='realLfees']").html(formatNumberValueInfo(realLfees));
        $("span[name='totalFees']").html(formatNumberValueInfo(realLfees));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '状态类型',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            },{
                key : 'visitArear',
                title : '通话地点',
                css : '',
                width : '70'
            },{
                key : 'cdrStartDate',
                title : '通话时间',
                css : '',
                width : '60'
            },{
                key : 'callDuration',
                title : '时长',
                css : '',
                width : '60'
            },{
                key : 'realCfee',
                title : '基本话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '长途话费',
                css : '',
                width : '46'
            },{
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的IP直通车详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    // 语音增值详单显示(filterType 1:不过滤信息 2：过滤信息 )
    showYYZZDetail: function(result, filterType) {
        var listObj=[];
        var firstCfees = 0; // 应收基本话费
        var realLfeeAndFirstOfees = 0; // 应收长途话费
        var realCfees = 0; // 实收基本话费
        var realLfees = 0; // 实收长途话费
        var totalFees = 0; // 话费总计
        var feeItem01s = 0; // 套餐费合计
        var totalListNumFilter = 0; // 过滤详单总数
        var totalListNum = 0; // 详单总数

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：语音增值详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '基本话费：<em class="font-green"><span name="realCfees"></span> 元</em>&nbsp;' + '长途话费：<em class="font-green"><span name="realLfees"></span> 元</em>&nbsp;' + '话费总计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }


        var gsmDetailList = result.resultObj.qryResult.gsmMagaBillDetail;
        var tdCount = 0;
        for (var i = gsmDetailList.length - 1; i >= 1; i--) {
            var gsmDetail = gsmDetailList[i];
            var statusType = gsmDetail.statusType; // 状态类型
            var otherParty = gsmDetail.otherParty; // 对方号码
            var startTime = MY_QDCXNEWComponent.transTime(gsmDetail.startTime); // 开始时间
            var callDuration = MY_QDCXNEWComponent.time_To_hhmmss(gsmDetail.callDuration); // 通话时长
            var visitArear = gsmDetail.visitArear; // 通信地点
            var callType = gsmDetail.roamType; // 通信类型
            var firstCfee = gsmDetail.firstCfee; // 应收基本通话费
            var realLfeeAndFirstOfee = gsmDetail.realLfeeAndFirstOfee; // 应收长途话费和应收其他话费
            var realCfee = gsmDetail.realCfee; // 实收基本话费
            var realLfee = gsmDetail.realLfee; // 实收长途话费
            var totalFee = gsmDetail.totalFee; // 小计
            var feeItem01 = gsmDetail.feeItem01; // 套餐费
            var tpRemarkInfo = gsmDetail.pkgCode; // 套餐描述

            var queryCondition = false;
            var queryCondition2 = false;

            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;
                firstCfees = firstCfees + firstCfee;
                realLfeeAndFirstOfees = realLfeeAndFirstOfees + realLfeeAndFirstOfee;
                realCfees = realCfees + realCfee;
                realLfees = realLfees + realLfee;
                totalFees = totalFees + totalFee;
                feeItem01s = feeItem01s + feeItem01;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"startTime\":\""+startTime+"\",\"callDuration\":\""+callDuration+"\",\"callType\":\""+callType+"\",\"visitArear\":\""+visitArear+"\",\"realCfee\":\""+formatNumberValueInfo(realCfee)+"\",\"realLfee\":\""+formatNumberValueInfo(realLfee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"tpRemarkInfo\":\""+tpRemarkInfo+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realCfees']").html(formatNumberValueInfo(realCfees));
        $("span[name='realLfees']").html(formatNumberValueInfo(realLfees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'startTime',
                title : '起始时间',
                css : '',
                width : '70'
            }, {
                key : 'callDuration',
                title : '时长',
                css : '',
                width : '60'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '70'
            }, {
                key : 'callType',
                title : '通信类型',
                css : '',
                width : '70'
            }, {
                key : 'realCfee',
                title : '基本话费',
                css : '',
                width : '46'
            }, {
                key : 'realLfee',
                title : '长途话费',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            },{
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            },{
                key : 'tpRemarkInfo',
                title : '所属套餐',
                css : '',
                width : '56'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的语音增值详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },

    //移动数据流量查询  |优化展示
    showGPRSDetail: function(result, filterType) {
        var listObj=[];
        //费用合计
        var allTotalFees = 0;
        //收费流量合计
        var busyDatas = 0;
        //详单总数
        var totalListNum = 0;
        //随E行上网总时长
        var cmnetConnTimes = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：移动数据流量详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '费用合计：<em class="font-green"><span name="allTotalFees"></span> 元</em>&nbsp;' + '收费流量合计：<em class="font-green"><span name="busyDatas"></span> M</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>&nbsp;' + '上网总时长：<em class="font-green"><span name="cmnetConnTimes"></span> 分钟</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var gprsBillDetail = MY_QDCXNEWComponent.queryResult.resultObj.qryResult.gprsBillDetail;
        for (var i = gprsBillDetail.length - 1; i >= 1; i--) {
            var gprsDetail = gprsBillDetail[i];

            /* //类型
             var statusType = gprsDetail.statusType;*/
            //开始时间
            var startTime = MY_QDCXNEWComponent.transTime(gprsDetail.startTime);;
            //接入点
            var cdrApnni = gprsDetail.cdrApnni;
//                if (gprsDetail.cdrApnni.indexOf("4G") != '-1') {
//                    cdrApnni = "手机</br>4G";
//                }
            //上网地点
            var visitArear = gprsDetail.visitArear;
            //时长
            var duration = gprsDetail.duration; //时长单位为秒，调用公共方法转化为00：00:00展示
            //基本收费流量
            var busyData = gprsDetail.busyData;
            //基本费用(元)
            var busyFee = gprsDetail.busyFee;
            //套餐费(元)
            var packageFee = gprsDetail.packageFee;
            //作用套餐
            var tpremark = gprsDetail.msnc;
            //其他收费流量（K）
            var idlesseData = gprsDetail.idlesseData;
            //其他费用(元)
            var otherFee = gprsDetail.otherFee;
            //总费用(元)
            var totalFee = gprsDetail.totalFee;
            //使用者
            var usedMobile = gprsDetail.user;

            //统付流量
            var groupFee = gprsDetail.groupFee;
            //统付流量明细
            var detail = gprsDetail.detail;
            //var detail = "其他|493568|0|4G限时促销包（赠送1GB省内TD-LTE流量，有效期至2014年12月31日）^淘宝(中国)软件有限公司|53248|0|4G限时促销包（赠送1GB省内TD-LTE流量，有效期至2014年12月31日";
            var detailShow="";
            var str= new Array();
            str=detail.split("^");
            if(str.length >1)
            {
                detailShow += str[0].split("|")[0] +"、";
                detailShow += str[1].split("|")[0];
            }
            else
            {
                detailShow=detail;
            }

            if(detailShow.length >5)
            {
                detailShow ="<apan title='"+detailShow+"'>"+detailShow.substr(0,5)+"...</span>";
            }

            //总流量
            var totalFlus = gprsDetail.totalFlus;

            var queryCondition = true;
            var queryCondition2 = false;

            var ret1 = (strNowData == "" && strEndData == '');
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                allTotalFees = allTotalFees + totalFee;
                busyDatas = busyDatas + busyData + idlesseData;
                cmnetConnTimes += duration;
                var listJson = JSON.parse("{\"startTime\":\""+startTime.substring(5)+"\",\"cdrApnni\":\""+cdrApnni+"\",\"visitArear\":\""+visitArear+"\",\"duration\":\""+MY_QDCXNEWComponent.time_To_hhmmss(duration)+"\",\"busyData\":\""+MY_QDCXNEWComponent.gprs_To_MbKb(busyData)+"\",\"busyFee\":\""+formatNumberValueInfo(busyFee)+"\",\"packageFee\":\""+formatNumberValueInfo(packageFee)+"\",\"tpremark\":\""+tpremark+"\",\"groupFee\":\""+formatNumberValueInfo(groupFee)+"\",\"detail\":\""+detailShow+"\",\"idlesseData\":\""+idlesseData+"\",\"otherFee\":\""+ MY_QDCXNEWComponent.gprs_To_MbKb(otherFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\"}");
                //var listJson = JSON.parse("{\"startTime\":\""+startTime.substring(5)+"\",\"cdrApnni\":\""+cdrApnni+"\",\"duration\":\""+MY_QDCXNEWComponent.time_To_hhmmss(duration)+"\",\"busyData\":\""+MY_QDCXNEWComponent.gprs_To_MbKb(busyData)+"\",\"busyFee\":\""+formatNumberValueInfo(busyFee)+"\",\"packageFee\":\""+formatNumberValueInfo(packageFee)+"\",\"tpremark\":\""+tpremark+"\",\"groupFee\":\""+formatNumberValueInfo(groupFee)+"\",\"detail\":\""+detailShow+"\",\"idlesseData\":\""+idlesseData+"\",\"otherFee\":\""+ MY_QDCXNEWComponent.gprs_To_MbKb(otherFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='allTotalFees']").html(formatNumberValueInfo(allTotalFees));
        $("span[name='busyDatas']").html(formatNumberValueInfo(busyDatas / 1024));
        $("span[name='cmnetConnTimes']").html(formatNumberValueInfo(cmnetConnTimes / 60));
        $("span[name='totalListNum']").html(totalListNumFilter);


        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'startTime',
                title : '起始时间',
                css : '',
                width : '46'
            }, {
                key : 'cdrApnni',
                title : '接入点',
                css : '',
                width : '80'
            }, {
                key : 'visitArear',
                title : '使用地点',
                css : '',
                width : '70'
            }, {
                key : 'duration',
                title : '时长',
                css : '',
                width : '60'
            }, {
                key : 'busyData',
                title : '基本流量',
                css : '',
                width : '70'
            }, {
                key : 'busyFee',
                title : '基本费（元）',
                css : '',
                width : '70'
            }, {
                key : 'packageFee',
                title : '套餐费（元）',
                css : '',
                width : '46'
            }, {
                key : 'tpremark',
                title : '所属套餐',
                css : '',
                width : '46'
            },{
                key : 'groupFee',
                title : '统付流量',
                css : '',
                width : '46'
            },{
                key : 'detail',
                title : '明细',
                css : '',
                width : '80'
            },{
                key : 'idlesseData',
                title : '其它费（元）',
                css : '',
                width : '46'
            },{
                key : 'otherFee',
                title : '其它收费流量',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '总费用（元）',
                css : '',
                width : '56'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的移动数据流量详单为0元。")
        };
//             var json = {
//				//上传参数
//				pageSize :10,
//				//分页数据
//				pageData : listObj,
//				//分页key value
//				params : [ {
//					key : 'startTime',
//					title : '起始时间',
//					css : '',
//					width : '46'
//				}, {
//					key : 'cdrApnni',
//					title : '接入点',
//					css : '',
//					width : '80'
//				}, {
//					key : 'duration',
//					title : '时长',
//					css : '',
//					width : '60'
//				}, {
//					key : 'busyData',
//					title : '基本收费流量',
//					css : '',
//					width : '70'
//				}, {
//					key : 'busyFee',
//					title : '基本费（元）',
//					css : '',
//					width : '70'
//				}, {
//					key : 'packageFee',
//					title : '套餐费（元）',
//					css : '',
//					width : '46'
//				}, {
//					key : 'tpremark',
//					title : '所属套餐',
//					css : '',
//					width : '46'
//				},{
//					key : 'groupFee',
//					title : '统付流量',
//					css : '',
//					width : '46'
//				},{
//					key : 'detail',
//					title : '明细',
//					css : '',
//					width : '80'
//				},{
//					key : 'idlesseData',
//					title : '其它费（元）',
//					css : '',
//					width : '46'
//				},{
//					key : 'otherFee',
//					title : '其它收费流量',
//					css : '',
//					width : '46'
//				},{
//					key : 'totalFee',
//					title : '总费用（元）',
//					css : '',
//					width : '56'
//				}, {
//					key : 'usedMobile',
//					title : '使用者',
//					css : '',
//					width : '46'
//				}],
//				//跳转文本框name值
//				divId:'wdyd_demodsfndui',
//				exportPrintHtml:'1',
//				noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的移动数据流量详单为0元。")
//			    };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //WLAN详单
    showWLANDetail: function(result, filterType) {
        var listObj=[];

        //基本费合计
        var orgSmFees = 0;
        //信息费合计
        var infoFees = 0;
        //小计合计
        var totalFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：WLAN详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);


        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '基本费合计：<em class="font-green"><span name="orgSmFees"></span> 元</em>&nbsp;' + '信息费合计：<em class="font-green"><span name="infoFees"></span> 元</em>&nbsp;' + '小计合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);

        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }

        var wlanBillDetail = MY_QDCXNEWComponent.queryResult.resultObj.qryResult.wlanBillDetail;

        for (var i = wlanBillDetail.length - 1; i >= 1; i--) {
            var wlanDetail = wlanBillDetail[i];

            //计费总流量
            var totalFlow = wlanDetail.rateTotalflow;
            //地点
            var visitArear = wlanDetail.visitArear;
            //开始时间
            var startTime = MY_QDCXNEWComponent.transTime(wlanDetail.startTime);
            //连接时长
            var callDuration = MY_QDCXNEWComponent.time_To_hhmmss(wlanDetail.callDuration);
            //上行数据流量（K）
            var dataUp = wlanDetail.dataUp;
            //下行数据流量（K）
            var dataDown = wlanDetail.dataDown;
            //热点类型 -ISP标识现在被替换成热点类型
            var hotType = wlanDetail.ispCode;
            //基本费
            var orgSmFee = wlanDetail.orgSmFee;
            //信息费
            var infoFee = wlanDetail.infoFee;
            //小计
            var totalFee = wlanDetail.totalFee;
            //使用者
            var usedMobile = wlanDetail.user;
            // WLAN认证类型
            var authType = wlanDetail.authType;

            var queryCondition = true;
            var queryCondition2 = false;

            var ret1 = (strNowData == "") && (strEndData == '');
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));


            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                orgSmFees = orgSmFees + orgSmFee;
                infoFees = infoFees + infoFee;
                totalFees = totalFees + totalFee;
                var listJson = JSON.parse("{\"visitArear\":\""+visitArear+"\",\"startTime\":\""+startTime.substring(5)+"\",\"callDuration\":\""+callDuration+"\",\"authType\":\""+authType+"\",\"totalFlow\":\""+totalFlow+"\",\"hotType\":\""+hotType+"\",\"orgSmFee\":\""+formatNumberValueInfo(orgSmFee)+"\",\"infoFee\":\""+formatNumberValueInfo(infoFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='orgSmFees']").html(formatNumberValueInfo(orgSmFees));
        $("span[name='infoFees']").html(formatNumberValueInfo(infoFees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'visitArear',
                title : '地点',
                css : '',
                width : '46'
            }, {
                key : 'startTime',
                title : '起始时间',
                css : '',
                width : '80'
            }, {
                key : 'callDuration',
                title : '连接时长',
                css : '',
                width : '70'
            }, {
                key : 'authType',
                title : '认证类型',
                css : '',
                width : '60'
            }, {
                key : 'totalFlow',
                title : '计费总流量',
                css : '',
                width : '70'
            }, {
                key : 'hotType',
                title : '热点类型',
                css : '',
                width : '70'
            }, {
                key : 'orgSmFee',
                title : '基本费',
                css : '',
                width : '46'
            }, {
                key : 'infoFee',
                title : '信息费',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '46'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的WLAN详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //G3上网本详单
    showG3SWBDetail: function(result, filterType) {
        var listObj=[];

        //费用合计
        var totalFees = 0;
        //收费流量合计
        var callDurations = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：G3上网本详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);

        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '收费流量合计：<em class="font-green"><span name="callDurations"></span> M</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var cmnetBillDetail = result.resultObj.qryResult.cmnetBillDetail;

        var tdCount = 0;
        for (var i = cmnetBillDetail.length - 1; i >= 1; i--) {
            var cmnetDetail = cmnetBillDetail[i];

            //地点
            var visitArear = cmnetDetail.visitArear;
            //开始时间
            var cdrStartDate = cmnetDetail.startTime;
            //  cdrStartDate = cdrStartDate.substr(0, 4) + "-" + cdrStartDate.substr(4, 2) + "-" + cdrStartDate.substr(6, 2) + " " + cdrStartDate.substr(8, 2) + ":" + cdrStartDate.substr(10, 2) + ":" + cdrStartDate.substr(12, 2);
            //接入点
            var cdrApnni = cmnetDetail.cdrApnni;
            //时长(秒)
            var Cmnet = cmnetDetail.fullTime;
            //基本收费流量（K）
            var callDuration = cmnetDetail.callDuration;
            //基本费用(元)
            var allTotalFee = cmnetDetail.allTotalFee;
            //套餐费(元)
            var pkgFee = cmnetDetail.pkgFee;
            //作用套餐
            var pkgInfo = cmnetDetail.tpremark;
            //其他收费流量（K）
            var realLfee = cmnetDetail.realLfee;
            //其他费用(元)
            var otherFee = cmnetDetail.otherFee;
            //总费用(元)
            var totalFee = cmnetDetail.totalFee;

            var queryCondition = true;
            var queryCondition2 = false;

            var ret1 = (strNowData == "") && (strEndData == '');
            var ret2 = (strNowData <= cdrStartDate.substr(0, 10));
            var ret3 = (strEndData >= cdrStartDate.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));


            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                totalFees = totalFees + totalFee;
                callDurations = callDurations + callDuration;

                var listJson = JSON.parse("{\"visitArear\":\""+visitArear+"\",\"startTime\":\""+cdrStartDate+"\",\"cdrApnni\":\""+cdrApnni+"\",\"cmnet\":\""+Cmnet+"\",\"callDuration\":\""+callDuration+"\",\"allTotalFee\":\""+allTotalFee+"\",\"pkgFee\":\""+pkgFee+"\",\"pkgInfo\":\""+pkgInfo+"\",\"realLfee\":\""+realLfee+"\",\"otherFee\":\""+otherFee+"\",\"totalFee\":\""+totalFee+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='callDurations']").html(formatNumberValueInfo(callDurations /1024));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'visitArear',
                title : '地点',
                css : '',
                width : '46'
            }, {
                key : 'startTime',
                title : '起始时间',
                css : '',
                width : '80'
            }, {
                key : 'cdrApnni',
                title : '接入点',
                css : '',
                width : '70'
            }, {
                key : 'cmnet',
                title : '时长',
                css : '',
                width : '60'
            }, {
                key : 'callDuration',
                title : '基本收费流量',
                css : '',
                width : '70'
            }, {
                key : 'allTotalFee',
                title : '基本费(元)',
                css : '',
                width : '70'
            }, {
                key : 'pkgFee',
                title : '套餐费(元)',
                css : '',
                width : '46'
            },{
                key : 'pkgInfo',
                title : '所属套餐',
                css : '',
                width : '46'
            },{
                key : 'realLfee',
                title : '其他收费流量',
                css : '',
                width : '46'
            },{
                key : 'otherFee',
                title : '其他费(元)',
                css : '',
                width : '46'
            },{
                key : 'totalFee',
                title : '总费用(元)',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的G3上网本详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    //短信详单
    showDXDetail: function(result, filterType) {
        var listObj=[];

        //费用合计
        var totalFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;


        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：短信详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);

        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);


        var billBusiCount = '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var smsBillDetail = result.resultObj.qryResult.smsBillDetail;

        for (var i = smsBillDetail.length - 1; i >= 1; i--) {
            var smsDetail = smsBillDetail[i];

            //发送/接收时间
            var startTime = MY_QDCXNEWComponent.transTime(smsDetail.startTime);
            //通信地址
            var visitArear = smsDetail.visitArear;
            //对方号码
            var otherParty = smsDetail.otherParty;
            //状态类型
            var statusType = smsDetail.statusType;
            //套餐费
            var feeItem01 = smsDetail.feeItem01;
            //小计
            var totalFee = smsBillDetail[i].totalFee;
            //信息长度
            var infoLen = smsDetail.infoLen;
            //使用者
            var usedMobile = smsDetail.user;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));


            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                totalFees = totalFees + totalFee;
                feeItem01s = feeItem01s + feeItem01;

                var listJson = JSON.parse("{\"startTime\":\""+startTime+"\",\"visitArear\":\""+visitArear+"\",\"otherParty\":\""+otherParty+"\",\"infoLen\":\""+infoLen+"\",\"statusType\":\""+statusType+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'startTime',
                title : '起始时间',
                css : '',
                width : '100'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '60'
            }, {
                key : 'infoLen',
                title : '短信长度字段显示',
                css : '',
                width : '60'
            }, {
                key : 'statusType',
                title : '通信方式',
                css : '',
                width : '60'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '70'
            }, {
                key : 'totalFee',
                title : '通信费',
                css : '',
                width : '46'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的短信详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //彩信详单
    showCXDetail: function(result, filterType) {
        var listObj=[];

        //通信费合计
        var orgSmFees = 0;
        //信息费合计
        var infoFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //小计合计
        var totalFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：彩信详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        var billBusiCount = '通信费合计：<em class="font-green"><span name="orgSmFees"></span> 元</em>&nbsp;' + '信息费合计：<em class="font-green"><span name="infoFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '小计合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var mmsBillDetail = result.resultObj.qryResult.mmsBillDetail;


        for (var i = mmsBillDetail.length - 1; i >= 1; i--) {
            var mmsDetail = mmsBillDetail[i];

            //状态类型
            var statusType = mmsDetail.statusType;
            //对方地址
            var mmsRevIp = mmsDetail.mmsRevIp;
            //sp服务
            var spCode = mmsDetail.spCode;
            //对方号码
            var otherParty = mmsDetail.otherParty;
            //MM长度
            var mmsLen = mmsDetail.mmsLen;
            //发送时间
            var sendTime = MY_QDCXNEWComponent.transTime(mmsDetail.sendTime);
            //通信费
            var orgSmFee = mmsDetail.orgSmFee;
            //信息费
            var infoFee = mmsDetail.infoFee;
            //小计
            var totalFee = mmsDetail.totalFee;
            //套餐费
            var feeItem01 = mmsDetail.feeItem01;
            //使用者
            var usedMobile = mmsDetail.user;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= sendTime.substr(0, 10));
            var ret3 = (strEndData >= sendTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));


            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                orgSmFees = orgSmFees + orgSmFee;
                infoFees = infoFees + infoFee;
                feeItem01s = feeItem01s + feeItem01;
                totalFees = totalFees + totalFee;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"mmsRevIp\":\""+mmsRevIp+"\",\"spCode\":\""+spCode+"\",\"otherParty\":\""+otherParty+"\",\"mmsLen\":\""+mmsLen+"\",\"sendTime\":\""+sendTime+"\",\"orgSmFee\":\""+formatNumberValueInfo(orgSmFee)+"\",\"infoFee\":\""+formatNumberValueInfo(infoFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\",\"usedMobile\":\""+usedMobile+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='orgSmFees']").html(formatNumberValueInfo(orgSmFees));
        $("span[name='infoFees']").html(formatNumberValueInfo(infoFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '状态类型',
                css : '',
                width : '46'
            }, {
                key : 'mmsRevIp',
                title : '通信地址',
                css : '',
                width : '80'
            }, {
                key : 'spCode',
                title : 'sp服务',
                css : '',
                width : '70'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '60'
            }, {
                key : 'mmsLen',
                title : 'MM长度',
                css : '',
                width : '70'
            }, {
                key : 'sendTime',
                title : '发送时间',
                css : '',
                width : '70'
            }, {
                key : 'orgSmFee',
                title : '通信费',
                css : '',
                width : '46'
            }, {
                key : 'infoFee',
                title : '信息费',
                css : '',
                width : '70'
            }, {
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '70'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '46'
            }, {
                key : 'usedMobile',
                title : '使用者',
                css : '',
                width : '46'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的彩信详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    //国际短信详单
    showGJDXDetail: function(result, filterType) {
        var listObj=[];

        //费用合计
        var totalFees = 0;
        //套餐费合计
        var feeItem01s = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;


        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：国际短信详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '套餐费合计：<em class="font-green"><span name="feeItem01s"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var ineSmsBillDetail = result.resultObj.qryResult.ineSmsBillDetail;

        for (var i = ineSmsBillDetail.length - 1; i >= 1; i--) {
            var ineSmsDetail = ineSmsBillDetail[i];

            //状态类型
            var statusType = ineSmsDetail.statusType;
            //对方号码
            var otherParty = ineSmsDetail.otherParty;
            //发送/接收时间
            var startTime = MY_QDCXNEWComponent.transTime(ineSmsDetail.startTime);
            //通信地址
            var visitArear = ineSmsDetail.visitArear;
            //小计
            var totalFee = ineSmsDetail.totalFee;
            //套餐费
            var feeItem01 = ineSmsDetail.feeItem01;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                totalFees = totalFees + totalFee;
                feeItem01s = feeItem01s + feeItem01;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"otherParty\":\""+otherParty+"\",\"startTime\":\""+startTime+"\",\"visitArear\":\""+visitArear+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"feeItem01\":\""+formatNumberValueInfo(feeItem01)+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='feeItem01s']").html(formatNumberValueInfo(feeItem01s));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '状态类型',
                css : '',
                width : '46'
            }, {
                key : 'otherParty',
                title : '对方号码',
                css : '',
                width : '80'
            }, {
                key : 'startTime',
                title : '发送/接收时间',
                css : '',
                width : '70'
            }, {
                key : 'visitArear',
                title : '通信地点',
                css : '',
                width : '60'
            }, {
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '70'
            }, {
                key : 'feeItem01',
                title : '套餐费',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的国际短信详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //无限音乐详单
    showWXYYDetail: function(result, filterType) {
        var listObj=[];
        //费用合计
        var realInfoFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：无线音乐详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '费用合计：<em class="font-green"><span name="realInfoFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var mpmusicBillDetail = result.resultObj.qryResult.mpmusicBillDetail;

        for (var i = mpmusicBillDetail.length - 1; i >= 1; i--) {
            var mpmusicDetail = mpmusicBillDetail[i];

            //类型
            var sourceTypeName = mpmusicDetail.sourceTypeName;
            //SP名称
            var spCode = mpmusicDetail.spCode;
            //音乐内容
            var contentId = mpmusicDetail.contentId;
            //下载时间
            var startTime = MY_QDCXNEWComponent.transTime(mpmusicDetail.startTime);
            //信息费
            var realInfoFee = mpmusicDetail.realInfoFee;
            //赠送项目
            var freetimeItem = mpmusicDetail.freetimeItem;
            //赠送数
            var freetime = mpmusicDetail.freetime;
            //计费类型
            var chargeTypeName = mpmusicDetail.chargeTypeName;

            var queryCondition = true;
            var queryCondition2 = false;
            // queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                realInfoFees = realInfoFees + realInfoFee;

                var listJson = JSON.parse("{\"sourceTypeName\":\""+sourceTypeName+"\",\"spCode\":\""+spCode+"\",\"contentId\":\""+contentId+"\",\"startTime\":\""+startTime+"\",\"realInfoFee\":\""+formatNumberValueInfo(realInfoFee)+"\",\"freetimeItem\":\""+freetimeItem+"\",\"freetime\":\""+freetime+"\",\"chargeTypeName\":\""+chargeTypeName+"\"}");
                listObj.push(listJson);
            }
        }


        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='realInfoFees']").html(formatNumberValueInfo(realInfoFees));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'sourceTypeName',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'spCode',
                title : 'SP名称',
                css : '',
                width : '80'
            }, {
                key : 'contentId',
                title : '音乐内容',
                css : '',
                width : '70'
            }, {
                key : 'startTime',
                title : '下载时间',
                css : '',
                width : '60'
            }, {
                key : 'realInfoFee',
                title : '信息费',
                css : '',
                width : '70'
            }, {
                key : 'freetimeItem',
                title : '赠送项目',
                css : '',
                width : '70'
            }, {
                key : 'freetime',
                title : '赠送数',
                css : '',
                width : '70'
            }, {
                key : 'chargeTypeName',
                title : '计费类型',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的无线音乐详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //梦网详单
    showMWDetail: function(result, filterType) {
        var listObj=[];

        //通信费合计
        var orgSmFees = 0;
        //信息费合计
        var infoFees = 0;
        //费用总计
        var totalFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：梦网详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '通信费合计：<em class="font-green"><span name="orgSmFees"></span> 元</em>&nbsp;' + '信息费合计：<em class="font-green"><span name="infoFees"></span> 元</em>&nbsp;' + '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var montnetBillDetail =result.resultObj.qryResult.montnetBillDetail;

        for (var i = montnetBillDetail.length - 1; i >= 1; i--) {
            var montnetDetail = montnetBillDetail[i];

            //类型
            var statusType = montnetDetail.statusType;
            //SP名称
            var cdrSpCode = montnetDetail.cdrSpCode;
            //业务号码
            var cdrServiceCode = montnetDetail.cdrServiceCode;
            //业务名称
            var aDetailName = montnetDetail.ADetailName;
            //生成日期
            var startTime = MY_QDCXNEWComponent.transTime(montnetDetail.startTime);
            //使用方式
            var userType = montnetDetail.userType;
            //通信费
            var orgSmFee = montnetDetail.orgSmFee;
            //信息费
            var infoFee = montnetDetail.infoFee;
            //小计
            var totalFee = montnetDetail.totalFee;
            //全网/本地
            var roamType = montnetDetail.roamType;
            //计费类型
            var aActiveFlag = montnetDetail.AActiveFlag;

            var queryCondition = true;
            var queryCondition2 = false;

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                orgSmFees = orgSmFees + orgSmFee;
                infoFees = infoFees + infoFee;
                totalFees = totalFees + totalFee;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"cdrSpCode\":\""+cdrSpCode+"\",\"cdrServiceCode\":\""+cdrServiceCode+"\",\"aDetailName\":\""+aDetailName+"\",\"startTime\":\""+startTime+"\",\"userType\":\""+userType+"\",\"orgSmFee\":\""+formatNumberValueInfo(orgSmFee)+"\",\"infoFee\":\""+formatNumberValueInfo(infoFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"roamType\":\""+roamType+"\",\"aActiveFlag\":\""+aActiveFlag+"\"}");
                listObj.push(listJson);

            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='orgSmFees']").html(formatNumberValueInfo(orgSmFees));
        $("span[name='infoFees']").html(formatNumberValueInfo(infoFees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'cdrSpCode',
                title : 'SP名称',
                css : '',
                width : '80'
            }, {
                key : 'cdrServiceCode',
                title : '业务号码',
                css : '',
                width : '70'
            }, {
                key : 'aDetailName',
                title : '业务名称',
                css : '',
                width : '60'
            }, {
                key : 'startTime',
                title : '生成日期',
                css : '',
                width : '70'
            }, {
                key : 'userType',
                title : '使用方式',
                css : '',
                width : '70'
            }, {
                key : 'orgSmFee',
                title : '通信费',
                css : '',
                width : '80'
            }, {
                key : 'infoFee',
                title : '信息费',
                css : '',
                width : '70'
            }, {
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '60'
            }, {
                key : 'roamType',
                title : '全网/本地',
                css : '',
                width : '70'
            }, {
                key : 'aActiveFlag',
                title : '计费类型',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的梦网详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //即时群聊详单
    showJSQLDetail: function(result, filterType) {
        var listObj=[];

        //实收长途费合计
        var netFees = 0;
        //实收基本费合计
        var baseFees = 0;
        //实收其它费合计
        var otherFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();


        var billDetailTitle = '<b>当前查询项目：即时群聊详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '实收长途费合计：<em class="font-green"><span name="netFees"></span> 元</em>&nbsp;' + '实收基本费合计：<em class="font-green"><span name="baseFees"></span> 元</em>&nbsp;' + '实收其它费合计：<em class="font-green"><span name="otherFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var meetBillDetail = result.resultObj.qryResult.meetBillDetail;

        for (var i = meetBillDetail.length - 1; i >= 1; i--) {
            var meetDetail = meetBillDetail[i];

            //对方号码
            var toStationId = meetDetail.toStationId;
            //业务名称
            var busiName = meetDetail.busiName;
            //时间
            var startTime = MY_QDCXNEWComponent.transTime(meetDetail.startTime);
            //时长(秒)
            var callDuration = MY_QDCXNEWComponent.time_To_hhmmss(meetDetail.callDuration);
            //实收基本费
            var baseFee = meetDetail.baseFee;
            //实收长途费
            var netFee = meetDetail.netFee;
            //实收其它费
            var otherFee = meetDetail.otherFee;
            //小计
            var totalFee = meetDetail.totalFee;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = toStationId.indexOf(queryFilterMobile) != -1 || queryFilterMobile == toStationId || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                netFees = netFees + netFee;
                baseFees = baseFees + baseFee;
                otherFees = otherFees + otherFee;

                var listJson = JSON.parse("{\"toStationId\":\""+toStationId+"\",\"busiName\":\""+busiName+"\",\"startTime\":\""+startTime+"\",\"callDuration\":\""+callDuration+"\",\"baseFee\":\""+formatNumberValueInfo(baseFee)+"\",\"netFee\":\""+formatNumberValueInfo(netFee)+"\",\"otherFee\":\""+formatNumberValueInfo(otherFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='netFees']").html(formatNumberValueInfo(netFees));
        $("span[name='baseFees']").html(formatNumberValueInfo(baseFees));
        $("span[name='otherFees']").html(formatNumberValueInfo(otherFees));
        $("span[name='totalListNum']").html(totalListNumFilter);

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'toStationId',
                title : '对方号码',
                css : '',
                width : '46'
            }, {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '80'
            }, {
                key : 'startTime',
                title : '时间',
                css : '',
                width : '70'
            }, {
                key : 'callDuration',
                title : '时长（秒）',
                css : '',
                width : '60'
            }, {
                key : 'baseFee',
                title : '实收基本费',
                css : '',
                width : '70'
            }, {
                key : 'netFee',
                title : '实收长途费',
                css : '',
                width : '70'
            }, {
                key : 'otherFee',
                title : '实收其它费',
                css : '',
                width : '80'
            }, {
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的即时群聊详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    // 和游戏消费详单
    showHeGameDetail : function(result,filterType){
        var listObj=[];
        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();
        var totalListNumFilter=0;

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = "<b>当前查询项目：和游戏消费详单</b>";
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var cdrsBillDetail = result.resultObj.qryResult.cdrsBillDetail;
        if (cdrsBillDetail != null && cdrsBillDetail.length - 1 > 0) {
            totalListNum = cdrsBillDetail.length - 1;

            for (var i = cdrsBillDetail.length - 1; i >= 1; i--) {

                var busiCode = cdrsBillDetail[i].businessCode;      // 业务名称
                var busiName = cdrsBillDetail[i].businessName;      // 游戏名称
                var serviceCode = cdrsBillDetail[i].serviceCode;    // 服务编码
                var spService = cdrsBillDetail[i].spService;      // 游戏名称
                var spTime = MY_QDCXNEWComponent.transTime(cdrsBillDetail[i].time);        // 消费时间
                var billType = cdrsBillDetail[i].billType;           // 计费方式
                var status = cdrsBillDetail[i].status;              // 游戏类型
                var roamType = cdrsBillDetail[i].roamType;          // 网络类型
                var useWay = cdrsBillDetail[i].useWay;             // 消费来源
                var infoPay = cdrsBillDetail[i].infoPay;           // 消费点数
                var money = cdrsBillDetail[i].money;           // 消费金额

                var queryCondition = true;
                var queryCondition2 = false;

                var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
                var ret2 = (strNowData <= spTime.substr(0, 10));
                var ret3 = (strEndData >= spTime.substr(0, 10)) || (strEndData == '');
                queryCondition2 = (ret1 || (ret2 && ret3));

                if (queryCondition && queryCondition2) {
                    totalListNumFilter = totalListNumFilter + 1;

                    var listJson = JSON.parse("{\"busiCode\":\""+busiCode+"\",\"busiName\":\""+busiName+"\",\"serviceCode\":\""+serviceCode+"\",\"spService\":\""+spService+"\",\"spTime\":\""+spTime+"\",\"billType\":\""+billType+"\",\"status\":\""+status+"\",\"roamType\":\""+roamType+"\",\"useWay\":\""+useWay+"\",\"infoPay\":\""+infoPay+"\",\"money\":\""+formatNumberValueInfo(money)+"\"}");
                    listObj.push(listJson);

                }

            }
        }


        $("span[name='totalListNum']").html(totalListNumFilter);

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'busiCode',
                title : '业务代码',
                css : '',
                width : '46'
            }, {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '80'
            }, {
                key : 'serviceCode',
                title : '服务代码',
                css : '',
                width : '70'
            }, {
                key : 'spService',
                title : '服务名称',
                css : '',
                width : '60'
            }, {
                key : 'spTime',
                title : '消费时间',
                css : '',
                width : '70'
            }, {
                key : 'billType',
                title : '计费方式',
                css : '',
                width : '70'
            }, {
                key : 'status',
                title : '游戏类型',
                css : '',
                width : '80'
            }, {
                key : 'roamType',
                title : '网络类型',
                css : '',
                width : '70'
            }, {
                key : 'useWay',
                title : '消费来源',
                css : '',
                width : '70'
            }, {
                key : 'infoPay',
                title : '消费点数',
                css : '',
                width : '70'
            }, {
                key : 'money',
                title : '消费金额',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的和游戏消费详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    // 和游戏消费点数详单
    showHeGameCountDetail : function(result,filterType){
        var listObj=[];

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = "<b>当前查询项目：和游戏消费点数详单</b>";
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var totalListNumFilter = 0;

        var cdrsPointBillDetail = result.resultObj.qryResult.cdrsPointBillDetail;

        if (cdrsPointBillDetail != null && cdrsPointBillDetail.length - 1 > 0) {
            for (var i = cdrsPointBillDetail.length - 1; i >= 1; i--) {
                var busiName = cdrsPointBillDetail[i].businessName;      // 游戏名称
                var serviceCode = cdrsPointBillDetail[i].serviceCode;    // 游戏编码
                var spTime = MY_QDCXNEWComponent.transTime(cdrsPointBillDetail[i].spendingTime);        // 消费时间
                var spMoney = cdrsPointBillDetail[i].spendingMoney;      // 消费金额
                var spPoint = cdrsPointBillDetail[i].spendingPoint;      // 消费点数

                var queryCondition = true;
                var queryCondition2 = false;

                var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
                var ret2 = (strNowData <= spTime.substr(0, 10));
                var ret3 = (strEndData >= spTime.substr(0, 10)) || (strEndData == '');
                queryCondition2 = (ret1 || (ret2 && ret3));

                if (queryCondition && queryCondition2) {
                    totalListNumFilter = totalListNumFilter + 1;

                    var listJson = JSON.parse("{\"busiName\":\""+busiName+"\",\"serviceCode\":\""+serviceCode+"\",\"spTime\":\""+spTime+"\",\"spMoney\":\""+formatNumberValueInfo(spMoney)+"\",\"spPoint\":\""+spPoint+"\"}");
                    listObj.push(listJson);
                }

            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '60'
            }, {
                key : 'serviceCode',
                title : '业务代码',
                css : '',
                width : '80'
            }, {
                key : 'spTime',
                title : '消费时间',
                css : '',
                width : '70'
            }, {
                key : 'spMoney',
                title : '消费金额（元）',
                css : '',
                width : '90'
            }, {
                key : 'spPoint',
                title : '消费点数',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的和游戏消费点数详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //LBS详单
    showLBSDetail: function(result, filterType) {
        var listObj=[];

        //费用合计
        var realInfoFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：LBS详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '费用合计：<em class="font-green"><span name="realInfoFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var lbsBillDetail =result.resultObj.qryResult.lbsBillDetail;

        for (var i = lbsBillDetail.length - 1; i >= 1; i--) {
            var lbsDetail = lbsBillDetail[i];

            //使用方式
            var useType = lbsBillDetail[i].useType;
            //业务名称
            var busiName = lbsBillDetail[i].busiName;
            //发起定位方号码
            var msisdn = lbsBillDetail[i].msisdn;
            //被定位方号码
            var otherParty = lbsBillDetail[i].otherParty;
            //起始定位时间
            var startTime = MY_QDCXNEWComponent.transTime(lbsBillDetail[i].startTime);
            //定位结果(X信息)
            var xInfo = lbsBillDetail[i].XInfo;
            //定位结果(Y信息)
            var yInfo = lbsBillDetail[i].YInfo;
            //定位费用
            var realInfoFee = lbsBillDetail[i].realInfoFee;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                realInfoFees = realInfoFees + realInfoFee;
                var listJson = JSON.parse("{\"useType\":\""+useType+"\",\"busiName\":\""+busiName+"\",\"msisdn\":\""+msisdn+"\",\"otherParty\":\""+otherParty+"\",\"startTime\":\""+startTime+"\",\"xInfo\":\""+xInfo+"\",\"yInfo\":\""+yInfo+"\",\"realInfoFee\":\""+formatNumberValueInfo(realInfoFee)+"\"}");
                listObj.push(listJson);
            }
        }


        $("span[name='realInfoFees']").html(formatNumberValueInfo(realInfoFees));
        $("span[name='totalListNum']").html(totalListNumFilter);

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'useType',
                title : '使用方式',
                css : '',
                width : '46'
            }, {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '80'
            }, {
                key : 'msisdn',
                title : '发起定位方号码',
                css : '',
                width : '70'
            }, {
                key : 'otherParty',
                title : '被定位方号码',
                css : '',
                width : '60'
            }, {
                key : 'startTime',
                title : '起始定位时间',
                css : '',
                width : '70'
            }, {
                key : 'xInfo',
                title : '定位结果(X信息)',
                css : '',
                width : '70'
            }, {
                key : 'yInfo',
                title : '定位结果(Y信息)',
                css : '',
                width : '80'
            }, {
                key : 'realInfoFee',
                title : '定位费用',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的LBS详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;
    },
    //96121详单
    show96121Detail: function(result, filterType) {
        var listObj=[];

        //费用合计
        var netFees = 0;
        //详单总数
        var totalListNum = 0;
        //过滤详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：96121详单</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '费用合计：<em class="font-green"><span name="netFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var ac121BillDetail = result.resultObj.qryResult.ac121BillDetail;

        var tdCount = 0;
        for (var i = ac121BillDetail.length - 1; i >= 1; i--) {
            var ac121Detail = ac121BillDetail[i];

            //业务名称
            var busiName = ac121BillDetail[i].busiName;
            //业务端口
            var otherParty = ac121BillDetail[i].otherParty;
            //使用方式
            var useType = ac121BillDetail[i].useType;
            //通话时间
            var startTime = MY_QDCXNEWComponent.transTime(ac121BillDetail[i].startTime);
            //时长
            var callDuration = MY_QDCXNEWComponent.time_To_hhmmss(ac121BillDetail[i].callDuration);
            //通话费用
            var netFee = ac121BillDetail[i].netFee;

            var queryCondition = false;
            var queryCondition2 = false;
            queryCondition = otherParty.indexOf(queryFilterMobile) != -1 || queryFilterMobile == otherParty || queryFilterMobile == "" || queryFilterMobile == "请输入号码中任意位连续数字";

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                netFees = netFees + netFee;
                var listJson = JSON.parse("{\"startTime\":\""+startTime+"\",\"useType\":\""+useType+"\",\"busiName\":\""+busiName+"\",\"otherParty\":\""+otherParty+"\",\"callDuration\":\""+callDuration+"\",\"netFee\":\""+formatNumberValueInfo(netFee)+"\"}");
                listObj.push(listJson);
            }
        }

        $("span[name='totalListNum']").html(totalListNumFilter);
        $("span[name='netFees']").html(formatNumberValueInfo(netFees));

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'startTime',
                title : '通话时间',
                css : '',
                width : '80'
            }, {
                key : 'useType',
                title : '使用方式',
                css : '',
                width : '80'
            }, {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '70'
            }, {
                key : 'otherParty',
                title : '业务端口',
                css : '',
                width : '60'
            }, {
                key : 'callDuration',
                title : '时长',
                css : '',
                width : '70'
            }, {
                key : 'netFee',
                title : '通话费用',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的96121详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    //梦网详单（代收业务）详单
    showDSMWDetail: function(result, filterType) {
        var listObj=[];
        //通信费合计
        var orgSmFees = 0;
        //信息费合计
        var infoFees = 0;
        //费用总计
        var totalFees = 0;
        //详单总数
        var totalListNum = 0;
        //详单总数
        var totalListNumFilter = 0;

        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = '<b>当前查询项目：梦网详单（代收业务）</b>';
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);

        var billBusiCount = '通信费合计：<em class="font-green"><span name="orgSmFees"></span> 元</em>&nbsp;' + '信息费合计：<em class="font-green"><span name="infoFees"></span> 元</em>&nbsp;' + '费用合计：<em class="font-green"><span name="totalFees"></span> 元</em>&nbsp;' + '详单总数：<em class="font-green"><span name="totalListNum"></span> 条</em>';
        $("#showBillBusiCount").html(billBusiCount);
        $("#showBillBusiCountP").html(billBusiCount);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var montnetBillDetail = result.resultObj.qryResult.montnetBillDetail;

        for (var i = montnetBillDetail.length - 1; i >= 1; i--) {
            var montnetDetail = montnetBillDetail[i];

            //类型
            var statusType = montnetDetail.statusType;
            //SP名称
            var cdrSpCode = montnetDetail.cdrSpCode;
            //业务号码
            var cdrServiceCode = montnetDetail.cdrServiceCode;
            //业务名称
            var aDetailName = montnetDetail.ADetailName;
            //生成日期
            var startTime = MY_QDCXNEWComponent.transTime(montnetDetail.startTime);
            //使用方式
            var userType = montnetDetail.userType;
            //通信费
            var orgSmFee = montnetDetail.orgSmFee;
            //信息费
            var infoFee = montnetDetail.infoFee;
            //小计
            var totalFee = montnetDetail.totalFee;
            //全网/本地
            var roamType = montnetDetail.roamType;
            //计费类型
            var aActiveFlag = montnetDetail.AActiveFlag;

            var queryCondition = true;
            var queryCondition2 = false;

            var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
            var ret2 = (strNowData <= startTime.substr(0, 10));
            var ret3 = (strEndData >= startTime.substr(0, 10)) || (strEndData == '');
            queryCondition2 = (ret1 || (ret2 && ret3));

            if (queryCondition && queryCondition2) {
                totalListNumFilter = totalListNumFilter + 1;

                orgSmFees = orgSmFees + orgSmFee;
                infoFees = infoFees + infoFee;
                totalFees = totalFees + totalFee;

                var listJson = JSON.parse("{\"statusType\":\""+statusType+"\",\"cdrSpCode\":\""+cdrSpCode+"\",\"cdrServiceCode\":\""+cdrServiceCode+"\",\"aDetailName\":\""+aDetailName+"\",\"startTime\":\""+startTime+"\",\"userType\":\""+userType+"\",\"orgSmFee\":\""+formatNumberValueInfo(orgSmFee)+"\",\"infoFee\":\""+formatNumberValueInfo(infoFee)+"\",\"totalFee\":\""+formatNumberValueInfo(totalFee)+"\",\"roamType\":\""+roamType+"\",\"aActiveFlag\":\""+aActiveFlag+"\"}");
                listObj.push(listJson);

            }
        }

        $("span[name='orgSmFees']").html(formatNumberValueInfo(orgSmFees));
        $("span[name='infoFees']").html(formatNumberValueInfo(infoFees));
        $("span[name='totalFees']").html(formatNumberValueInfo(totalFees));
        $("span[name='totalListNum']").html(totalListNumFilter);
        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'statusType',
                title : '类型',
                css : '',
                width : '46'
            }, {
                key : 'cdrSpCode',
                title : 'SP名称',
                css : '',
                width : '120'
            }, {
                key : 'cdrServiceCode',
                title : '业务号码',
                css : '',
                width : '70'
            }, {
                key : 'aDetailName',
                title : '业务名称',
                css : '',
                width : '60'
            }, {
                key : 'startTime',
                title : '生成日期',
                css : '',
                width : '70'
            }, {
                key : 'userType',
                title : '使用方式',
                css : '',
                width : '70'
            }, {
                key : 'orgSmFee',
                title : '通信费',
                css : '',
                width : '60'
            }, {
                key : 'infoFee',
                title : '信息费',
                css : '',
                width : '60'
            }, {
                key : 'totalFee',
                title : '小计',
                css : '',
                width : '60'
            }, {
                key : 'roamType',
                title : '全网/本地',
                css : '',
                width : '80'
            }, {
                key : 'aActiveFlag',
                title : '计费类型',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的梦网详单（代收业务）详单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    // 互联网电视增值业务类型清单查询
    showHlwWatchDetail : function(result,filterType){
        var listObj=[];
        var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
        var strNowData=$('#txtFromDate').val();
        var strEndData=$('#txtToDate').val();
        var totalListNumFilter=0;

        $("#showBillDetailTitle").empty();
        $("#showBillDetailTime").empty();
        $("#showBillBusiCount").empty();
        $("#showBillDetailTitleP").empty();
        $("#showBillDetailTimeP").empty();
        $("#showBillBusiCountP").empty();
        $("#printTable").empty();

        var billDetailTitle = "<b>当前查询项目：互联网电视增值业务清单</b>";
        $("#showBillDetailTitle").html(billDetailTitle);
        $("#showBillDetailTitleP").html(billDetailTitle);
        var billDetailTime = "当前查询时间：" + strNowData+" 至 "+strEndData;
        $("#showBillDetailTime").html(billDetailTime);
        $("#showBillDetailTimeP").html(billDetailTime);
        // 每个月1号，可能会有跨月详单
        if(strNowData !="" && strNowData.substr(8,2) == "01")
        {
            strNowData="";
        }
        var cdrsBillDetail = result.resultObj.qryResult.cdrsBillDetail;
        if (cdrsBillDetail != null && cdrsBillDetail.length - 1 > 0) {
            totalListNum = cdrsBillDetail.length - 1;

            for (var i = cdrsBillDetail.length - 1; i >= 1; i--) {

                var spTime = MY_QDCXNEWComponent.transTime(cdrsBillDetail[i].time);        // 消费时间
                var busiName = cdrsBillDetail[i].businessName;      // 游戏名称
                var billType = cdrsBillDetail[i].billType;           // 计费方式
                var infoPay = cdrsBillDetail[i].infoPay;           // 消费点数

//                var busiCode = cdrsBillDetail[i].businessCode;      // 业务名称
//                var serviceCode = cdrsBillDetail[i].serviceCode;    // 服务编码
//                var spService = cdrsBillDetail[i].spService;      // 游戏名称
//                var status = cdrsBillDetail[i].status;              // 游戏类型
//                var roamType = cdrsBillDetail[i].roamType;          // 网络类型
//                var useWay = cdrsBillDetail[i].useWay;             // 消费来源
//                var money = cdrsBillDetail[i].money;           // 消费金额

                var queryCondition = true;
                var queryCondition2 = false;

                var ret1 = (strNowData == "" || strNowData == "请您选择开始时间") && (strEndData == '' || strEndData == "请您选择结束时间");
                var ret2 = (strNowData <= spTime.substr(0, 10));
                var ret3 = (strEndData >= spTime.substr(0, 10)) || (strEndData == '');
                queryCondition2 = (ret1 || (ret2 && ret3));

                if (queryCondition && queryCondition2) {
                    totalListNumFilter = totalListNumFilter + 1;
                    var listJson = JSON.parse("{\"spTime\":\""+spTime+"\",\"busiName\":\""+busiName+"\",\"billType\":\""+billType+"\",\"infoPay\":\""+infoPay+"\"}");

                    //var listJson = JSON.parse("{\"busiCode\":\""+busiCode+"\",\"busiName\":\""+busiName+"\",\"serviceCode\":\""+serviceCode+"\",\"spService\":\""+spService+"\",\"spTime\":\""+spTime+"\",\"billType\":\""+billType+"\",\"status\":\""+status+"\",\"roamType\":\""+roamType+"\",\"useWay\":\""+useWay+"\",\"infoPay\":\""+infoPay+"\",\"money\":\""+formatNumberValueInfo(money)+"\"}");
                    listObj.push(listJson);

                }

            }
        }


        $("span[name='totalListNum']").html(totalListNumFilter);

        var json = {
            //上传参数
            pageSize :10,
            //分页数据
            pageData : listObj,
            //分页key value
            params : [ {
                key : 'spTime',
                title : '时间',
                css : '',
                width : '46'
            }, {
                key : 'busiName',
                title : '业务名称',
                css : '',
                width : '80'
            }, {
                key : 'billType',
                title : '计费类型',
                css : '',
                width : '70'
            }, {
                key : 'infoPay',
                title : '信息费',
                css : '',
                width : '70'
            }],
            //跳转文本框name值
            divId:'wdyd_demodsfndui',
            exportPrintHtml:'1',
            noDataMessageHtml:MY_QDCXNEWComponent.genNoDataQuery("您好！截至到当前，您的和互联网电视增值业务清单为0元。")
        };
        pageComponent.generatePageHtml(json);
        $("#printTable").html(pageComponent.queryTableHtml());
        return ;

    },
    convertToArray : function(arr){
        var array=[];
        var optionsArray=[];
        var num=0;
        var flag=0;
        for(var i=0;i<arr.length;i++){
            var json={};
            if('0'===arr[i].pre_menu_id){
                json.menu_name=arr[i].menu_name;
                json.menu_id=arr[i].menu_id;
                if(window.location.href.indexOf("flag=xq") != -1) {
                    if(flag===1){
                        json.isChoose='1';
                    }else{
                        json.isChoose='0';
                    }
                    flag++;
                } else {
                    if(num===0){
                        json.isChoose='1';
                        num++;
                    }else{
                        json.isChoose='0';
                    }
                }
                array.push(json);
            }else{
                optionsArray.push(arr[i]);
            }
        }
        var finalArray=new Array();
        for(var j=0;j<array.length;j++){
            var currentId=array[j].menu_id;
            var items=[];
            var flag=0;
            for(var i =0;i<optionsArray.length;i++){
                var parentId=optionsArray[i].pre_menu_id;
                if(parentId===currentId){
                    var value=optionsArray[i].billParamList[0].param_value;
                    var name=optionsArray[i].menu_name;
                    if(0===flag){
                        items.push({name:name,value:value,isChoose:'1'});
                        flag++;
                    }else{
                        items.push({name:name,value:value,isChoose:'0'});
                    }

                }
            }
            array[j].items=items;
            finalArray.push(array[j]);
        }
        return finalArray;
    }
    ,
    getFirstAndLastMonthDay:function(year,month){
        var   firstdate = year + '-' + month + '-01';
        var  day = new Date(year,month,0);
        var lastdate = year + '-' + month + '-' + day.getDate();//获取当月最后一天日期
        //给文本控件赋值。同下
        return lastdate;
    },
    //添加默认值
    putSearchText : function(){
        var searchText = $("#txtMobile").val();
        if(searchText == null || $.trim(searchText) == ''){
            $("#txtMobile").val("请输入号码中任意位连续数字");
            $("#txtMobile").css("color","#CCCCCC");
        }

    },
    //清除默认值
    clearSearchText : function () {
        var searchText = $("#txtMobile").val();
        if(searchText == '请输入号码中任意位连续数字'){
            $("#txtMobile").val("");
            $("#txtMobile").focus();
            $("#txtMobile").css("color","");
        }
    },

    /***
     * check search date
     */
    checkSearchDate : function() {
        var beginTime=$('#txtFromDate').val();
        var endTime=$('#txtToDate').val();
        var mobile=$('#txtMobile').val();
        MY_QDCXNEWComponent.queryStartDate  ;
        MY_QDCXNEWComponent.queryEndDate ;
        if (beginTime =="") {
            /// alert("开始时间不能大于结束时间！");
            BmonPage.showFailureDialog("开始时间不能为空！", null);
            return false;
        }
        else if (endTime =="") {
            /// alert("开始时间不能大于结束时间！");
            BmonPage.showFailureDialog("结束时间不能为空！", null);
            return false;
        }
        else if (beginTime != '' && endTime != '' && beginTime > endTime) {
            /// alert("开始时间不能大于结束时间！");
            BmonPage.showFailureDialog("开始时间不能大于结束时间！", null);
            return false;
        }
        else if(beginTime != '' && beginTime < MY_QDCXNEWComponent.queryStartDate)
        {
            //alert("开始时间应大于等于"+MY_QDCXNEWComponent.queryStartDate);
            BmonPage.showFailureDialog("开始时间应大于等于"+MY_QDCXNEWComponent.queryStartDate, null);
            return false;
        }
        else if(endTime != '' && endTime > MY_QDCXNEWComponent.queryEndDate)
        {
            //alert("结束时间应小于等于"+MY_QDCXNEWComponent.queryEndDate);
            BmonPage.showFailureDialog("结束时间应小于等于"+MY_QDCXNEWComponent.queryEndDate, null);
            return false;
        }
        else if(endTime != '' && endTime < MY_QDCXNEWComponent.queryStartDate)
        {
            //alert("结束时间应小于等于"+MY_QDCXNEWComponent.queryEndDate);
            BmonPage.showFailureDialog("结束时间应大于等于"+MY_QDCXNEWComponent.queryStartDate, null);
            return false;
        }
        else if(mobile != '' && mobile !='请输入号码中任意位连续数字')
        {
            var re=/^\d{1,11}$/;
            if(!re.test(mobile))
            {
                BmonPage.showFailureDialog("请输入1到11位数字！", null);
                return false;
            }
        }

        return true;

    },
    genNoDataQuery : function(msg){
        return "<img class='main-table-tips' width='14' height='14' "
            + "src='http://img01.js.10086.cn/obsh2014/images/public-mainRight-recharge-ico-prompt.gif'>"
            + "<span class='font-red'>" + msg + "</span>";
    },
    //查询月份日期格式化
    formatQueryDateDetail: function(date) {
        var dateResult = date.substring(0, 4) + "-" + date.substring(4);
        return dateResult;
    },
    transTime: function(obj) {
        if (obj.length == 6) {
            return MY_QDCXNEWComponent.transferTimeInfo(obj);
        } else if (obj.length == 8) {
            return MY_QDCXNEWComponent.transferDateInfo(obj);
        } else if (obj.length == 14) {
            return MY_QDCXNEWComponent.transferDateAndMinsInfo(obj);
        }else{
            return obj;
        }
        return obj;
    },
    time_To_hhmmss: function(seconds) {
        var hh;
        var mm;
        var ss;
        if (seconds == null || seconds < 0) {
            return;
        }
        if(seconds.toString().indexOf(":") !=-1){
            return seconds;
        }
        hh = seconds / 3600 | 0;
        seconds = parseInt(seconds) - hh * 3600;
        if (parseInt(hh) < 10) {
            hh = "0" + hh;
        }
        mm = seconds / 60 | 0;
        ss = parseInt(seconds) - mm * 60;
        if (parseInt(mm) < 10) {
            mm = "0" + mm;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }
        return hh + ":" + mm + ":" + ss;
    },

    // 设置流量转换格式为**MB**KB
    gprs_To_MbKb : function(duration){
        var MB;
        var KB;

        MB=parseInt(duration/1024);//得到MB
        KB=parseInt(duration)-MB*1024;//得到KB
        if (MB == 0){
            return duration+"KB";
        }else if(KB == 0) {
            return MB+"MB";
        }else {
            return MB+"MB"+KB+"KB";
        }

    },

    formatNumberValueInfo: function(x) {
        var f_x = parseFloat(x);
        var f_x = Math.round(x * 100) / 100;
        var s_x = f_x.toString();
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
        }
        while (s_x.length <= pos_decimal + 2) {
            s_x += '0';
        }
        return s_x;
    },
    //时间转换(hhmmss转换为**:**:**)
    transferTimeInfo: function(obj) {
        var resultInfo = obj.substr(0, 2) + ":" + obj.substr(2, 2) + ":" + obj.substr(4, 2);
        return resultInfo;
    },

    //日期转换(yyyyMMdd转换为MM-dd)
    transferDateInfo: function(obj) {
        var resultInfo = obj.substr(4, 2) + "-" + obj.substr(6, 2);
        return resultInfo;
    },

    //日期转换(yyyyMMddHHmmss转换为yyyy-MM-dd HH:mm:ss)
    transferDateAndMinsInfo: function(obj) {
        var resultInfo = obj.substr(0, 4) + "-" + obj.substr(4, 2) + "-" + obj.substr(6, 2) + " " + obj.substr(8, 2) + ":" + obj.substr(10, 2) + ":" + obj.substr(12, 2);
        return resultInfo;
    },
    doExport:function(){
        //获取查询项目
        var queryType = this.queryItem;
        //查询月份
        var queryMonth = this.queryMonth;

        var queryFilterMobile=MY_QDCXNEWComponent.queryMobile;

//         //过滤手机号码
//         if( $.trim($('#txtMobile').val())== "请输入号码中任意位连续数字")
//         {
//            var queryFilterMobile="";
//         }
//         else
//         {
//           var queryFilterMobile=$.trim($('#txtMobile').val())==MY_QDCXNEWComponent.realMobile ? "" :$.trim($('#txtMobile').val());
//         }

        //开始日期
        var startDate=MY_QDCXNEWComponent.startTime;
        //结束日期
        var endDate=  MY_QDCXNEWComponent.endTime;

        //用户真实手机号码
        var realMobile = this.realMobile;

        var url = GLOBAL_INFO.URL_PREFIX +MY_GLOBAL_INFO.URL_PREFIX+ "/Download?newFlag=newItem&queryType=" + queryType + "&queryMonth=" + queryMonth + "&startDate=" + startDate + "&endDate=" + endDate + "&queryFilterMobile=" + queryFilterMobile + "&realMobile=" + realMobile;
        window.open(url);
    },
    doPrint:function(){
        var url = "print.html?Id=businessQueryArea&t="+Math.random();
        window.open(url);

    }

});
