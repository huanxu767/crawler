var LOGIN_INFO = {
    URL_PREFIX: '',
    BUSINESS_REQ_URI: './actionDispatcher.do',
    SMS_REQ_URI: './sms.do'
};
var GLOBAL_INFO = {
    URL_PREFIX: '',
    BUSINESS_REQ_URI: './actionDispatcher.do',
    SMS_REQ_URI: './sms.do',//2014-11-7修改，临时解决服务器中，短信验证码无法下发的问题；
    DEFAULT_ANCHOR: '#home',
    PAGE_CONTAINER: '__mainPage',
    LOAD_PAGE_FOLDER: '/pages/',
    PLACE_HOLDER_IMG: 'http://files01.js.10086.cn/obsh/images/white.gif',
    GROUP_MONEY: '免费',
    RESOURCE_TIMESTAMP: '?t=201408261900'
};
//登录后用户信息
var UserInfo = {
    userMobile: null,
    userName: null,
    balance: null,
    score: null,
    mPoint: null,
    brandJbNum: null,
    brandJbName: null,
    brandBusiName: null,
    userCity: null,
    loginSource: null,
    isGroupMobile: null,
    surveyStauts: null,
    clear: function () {
        this.userMobile = null;
        this.userName = null;
        this.balance = null;
        this.score = null;
        this.mPoint = null;
        this.brandJbNum = null;
        this.brandJbName = null;
        this.brandBusiName = null;
        this.userCity = null;
        this.loginSource = null;
        this.isGroupMobile = null;
    }
};
var loginComponent = BmonPage.createComponent('loginNew');

$.extend(loginComponent, {
    id: 'loginNew',
    name: '首页登录组件',
    passwordType: 1, // 密码类型
    userInfo: UserInfo,
    isNeedVerifyCode: false, // 是否需要验证码
    lastGetVerifyCodeTime: null, // 最后一次获取短信验证码的时间
    savePassword: false,
    counterId: null,
    count: null,
    divCityHtml: "",
    divCityListHtml: "",
    state:"loaded",
    init: function (result) {
        loginComponent.passwordType = 1;
//        loginComponent.loadPageEvent();
//        loginComponent.showLoginInfo(result);
        loginComponent.getLoginResult(result.user);
//        loginComponent.isGroupMobile(result);
//        loginComponent.get139Mail(result);
//        loginComponent.getClient(result);
//        $("#currentD").val(result.currentD);
        // 集团内嵌页面跳转使用
//        loginComponent.getPhone(result.index1_phone);
        loginComponent.showLoginMobileList();
    },

    showLoginMobileList : function(){
        var listName=getCookie("loginMobileList");
        if(null != listName && "" != listName){
            var listNames=listName.split(",");
            if(listName !=null && listName !=""){
                var htmlstr="";
                for(var i=0;i<listNames.length;i++){
                    htmlstr +="<li><span class='del_number' ></span><em>"+listNames[i]+"</em></li>";
                }
                htmlstr +='<p class="deleteAllNumber"><a class="deleteAllNumbers" href="javascript:">全部删除</a></p>';
                $("#caid").html(htmlstr);
                if(listNames.length >5){
                    $('.remember_number_info').css({'height':160,'overflow':'hidden','overflow-y':'scroll'});
                }
            }
        }else{
            $(".remember_number").hide();
        }
    },


    /**
     * 集团内嵌页面跳转使用
     */
    getPhone: function (phone) {
        if (phone != undefined && phone != null) {
            GlobalDialog.showLoginDialog();
            $("#userNumber").val(phone);
            $("#userPassword").focus();
        }
    },

    getLoginResult: function (result) {
        var isTopUserMobile = getCookie("topUserMobile");
        if(null != isTopUserMobile && "" != isTopUserMobile){
//			$("#userNumber").val(isTopUserMobile);
//			$("#userPassword").focus();
            $("#loginNewDiv").show();
            $(".remember_number").hide();
            $("#loginNewPhone").html(isTopUserMobile);
            $("#userNumber").val(isTopUserMobile);
            $("#loginTypeBox").hide();
            $("#loginNewPhone").click(function() {
                loginComponent.changeLoginBox('2');
            });
        }

        this.isNeedVerifyCode = result.resultObj;
        if (this.isNeedVerifyCode) {
            $("#popBox-verifyCode-idType").show();
            loginComponent.changeVerifyCode('');
        } else {
            $("#popBox-verifyCode-idType").hide();
        }
        // 登录失败手机号码
        var mobile = getCookie("login_error_number_https");
        // 如果Cookie缓存登录失败手机号码为空，则直接返回，不调用登录失败回调函数
        if (mobile == null || mobile == "") {
            return;
        }
        // 清除Cookie缓存登录失败手机号码
        setCookie("login_error_number_https", "", 10 * 365 * 24 * 60 * 60 * 1000);
        // 登录失败账户类型
        var loginType = getCookie("login_error_loginType_https");
        setCookie("login_error_loginType_https", "", 10 * 365 * 24 * 60 * 60 * 1000);
        // 密码类型  1:服务密码登录  2:短信密码
        var passwordType = getCookie("login_error_passwordType_https");
        setCookie("login_error_passwordType_https", "", 10 * 365 * 24 * 60 * 60 * 1000);

        var hash = window.location.href;
        var nIndex = hash.lastIndexOf("&resultCode=");
        if (nIndex > 0) {
            var resultCode = hash.substring(nIndex + 12);
            loginComponent.loginFailedCallBack(resultCode, mobile, loginType, passwordType);
        }
    },





    // 校验是否手机号
    /**
     *    keydown keyup
     * 0-9    e.which的值为48-57（按住Shift键也是该值）
     * a-b    e.which的值为65-90
     * A-Z    e.which的值为65-90
     * Shift为16,TAB为9，BACKSPACE为8,CTRL为17，ESC为27，F1到F12为173到176
     *
     *
     * keypress
     * a-z为97到122
     * A-Z为65到90
     * Shift键不读取
     * Shift+1(!)为33,Shift+2(@)为64,Shift+3(#)为35,Shift+4($)为36,Shift+5(%)为37，Shift+6(^)为94,Shift+7(&)为38,Shift+8(*)为42,Shift+9(()为40,Shift+0())为41
     * 0-9为48到57，_为95
     * keypress操作，TAB，BACKSPACE在IE和chrome不读取(火狐TAB为0，BACKSPACE为8)
     */
    checkIsNumber: function (e) {
        var result = true;
        //var loginType = $("#loginTypeBox").find(".selected").attr("index")
        if ($("#loginTypeBox").find(".selected").attr("index") != '2') {
            result = (e.which >= 48 && e.which <= 57) || e.which == 0 || e.which == 8;
        } else {
            result = (e.which >= 48 && e.which <= 57) || (e.which >= 97 && e.which <= 122) || (e.which >= 65 && e.which <= 90) || e.which == 0 || e.which == 8;
        }
        return result;
    },
    showNum: function () {
        $('.remember_number').data('clicked', !1);
        $('.remember_number').click();
    },
    // 设置页面点击事件
    loadPageEvent: function () {

        $("#userNumber").keypress(function (e) {
            return loginComponent.checkIsNumber(e);
        });

        $("#userNumber").blur(function () {
            //var loginType = $("#loginType").val();
            var loginType = $("#loginTypeBox").find(".selected").attr("index");
            var mobile = $(this).val();
            //固定号码验证
            if (loginType == '3' && mobile && !checkFixedPhoneNumber(mobile)) {
                $("#number-error-message").html("请输入正确电话号码").show();
            }
            // 手机号码和代理商号码验证
            else if ((loginType == '1' || loginType == '4') && mobile && !chkMobileNumber(mobile)) {
                $("#number-error-message").html("请输入正确手机号码").show();
            }
            // 宽带账号验证
            else if (loginType == '2' && mobile && !checkNetNumber(mobile)) {
                $("#number-error-message").html("请输入正确宽带帐号").show();
            }
            // 异网账号验证
            else if (loginType == '5' && mobile && !chkOtherNetMobileNumber(mobile)) {
                $("#number-error-message").html("请输入正确手机号码").show();
            }
            else {
                $("#number-error-message").empty().hide();
            }
        });

        $("#userNumber").focus(function () {
            $("#number-error-message").empty().hide();
        });

        $("#userPassword").blur(function (e) {
            var password = $(this).val();
            if (password.length < 6) {
                $("#password-error-message").html("请输入正确密码").show();
            } else {
                $("#password-error-message").empty().hide();
            }
        });

        $("#userPassword").keypress(function (e) {
            return loginComponent.checkIsNumber(e);
        });

        $("#userPassword").keyup(function (e) {
            if (e.which == 13) {
                loginComponent.loginPrepare();
            }
        });

        $("#Search_txtSearch").keyup(function (e) {
            if (e.which == 13) {
                navComponent.doSearch();
            }
        });

        $("#userPassword").focus(function () {
            $("#password-error-message").empty().hide();
            if (loginComponent.passwordType == '1') {
                loginComponent.getUsrSavePwd(0);
            }
        });

        $("#verifyCode").focus(function () {
            $("#verifyCodeDiv").show();
            $("#verifyCode-error-message").empty().hide();
            loginComponent.getVerifyCode();
        });

        $("#verifyCode").blur(function () {
            var verifyCode = $(this).val();
            if (loginComponent.isNeedVerifyCode && verifyCode && !chkVerifyCode(verifyCode)) {
                $("#verifyCode-error-message").html("请输入正确验证码").show();
            } else if (loginComponent.isNeedVerifyCode && (new Date().getTime() - loginComponent.lastGetVerifyCodeTime) > 1000 * 60 * 5) {
                $("#verifyCode-error-message").html("验证码已失效，请重新获取").show();
            } else {
                $("#verifyCode-error-message").empty().hide();
            }

        });

        $("#verifyCode").keyup(function (e) {
            if (e.which == 13) {
                loginComponent.loginPrepare();
            }
        });

        $("#vcimg").click(function () {
            loginComponent.changeVerifyCode();
        });

        $("#verifyCodeDesc").click(function () {
            loginComponent.changeVerifyCode();
        });
    },

    changeIsSavePass : function(){
        if ($("#isSavePassword").attr('checked') != undefined && ($("#isSavePassword").attr('checked'))) {
            $("#warnInfo").show();
        } else {
            $("#warnInfo").hide();
        }
    },

    changeLoginBox : function(type){
        $("#loginNewDiv").hide();
        $("#loginTypeBox").show();
        if("1" == type) {
            var listName=getCookie("loginMobileList");
            if(null != listName && "" != listName){
                $(".remember_number").show();
            }
            $("#userNumber").val("");
        }
        $("#userNumber").focus();
    },

    //获取图片验证码,两次获取时间间隔未超过5分钟则不重新获取
    getVerifyCode: function (objName) {
        var currentTime = new Date().getTime();
        if (loginComponent.lastGetVerifyCodeTime == null || currentTime - loginComponent.lastGetVerifyCodeTime > 1000 * 60 * 5) {
            this.changeVerifyCode(objName);
        }
    },

    //更换图片验证码
    changeVerifyCode: function (objName) {
        if (objName == null || objName == '')
            objName = "vcimg";
        // 验证码读取中图片暂缺
        loginComponent.lastGetVerifyCodeTime = new Date().getTime();
        vcimgUrl = "./imageVerifyCode?t=new&r=" + Math.random();
        $("#" + objName).show();
        $("#" + objName).attr("src", vcimgUrl);
    },

    showLoginInfo: function (data) {
        if (data.user) {
            // 已登录
            if (data.user.resultCode == '0' && data.user.resultObj) {
                $(".main-leftBar").attr("class", "main-leftBar");
                $("#llyhWntjImg").show();
                $("#jcywWntjImg").show();
//					if(data.isTarget == "-1"){
//				 		this.showHomeAct(data);
//				 	}
                var cityName = getCityName(data.user.resultObj.city_jbNum);
                setCookie("city", getCityNum(cityName), 365 * 24 * 60 * 60 * 1000);
                //顶部地市显示
                this.showCityPro(cityName, "1");
                var user = data.user.resultObj;
                //显示顶部用户号码
                this.showTopUserNum(user);
                //顶部目标库用户展示卷帘广告 start
                if (data.isRecommed == "1") {
                    this.showTopBanner(data);
                }
                //一键查询
                //$("#iframePop").attr("src", "http://www.js.10086.cn/my/iportal/page/experience/experience_index.jsp");
                $("#yjcx_onclick").attr("onclick", "");
                $("#yjcx_onclick").bind("click", function () {
                    loginComponent.showPopYjcx();
                });
                //顶部一键查询入口
                $("#top_yjcx").attr("onclick", "");
                $("#top_yjcx").bind("click", function () {
                    loginComponent.showPopYjcx();
                });
                $("#lift-search").show();
                //安全卫士新引导层
                this.showUserLastDate(data);
                //安全卫士引导层下线：影响卷帘

                if (user.userType == '2') {
                    this.showOtherUserInfo(user);
                } else if (user.userType == '3') {
                    this.showOtherUserInfo(user);
                } else if (user.userType == '4') {
                    this.showOtherUserInfo(user);
                } else {
                    this.showUserInfo(data.user);
                    this.showBalanceScore(data.user);

                    // 显示登录触点营销 (账单查询，套餐使用情况，已开通业务不展示)
                    if (window.location.hash.indexOf("#TCSYQK") == -1 && window.location.hash.indexOf("#ZDCX") == -1 &&
                        window.location.hash.indexOf("#TCJYWCX_CPTC") == -1) {
                        setTimeout("loginComponent.showLoginTouch(" + user.userType + ")", 10000);

                    }

                }
            }
            // 未登录
            else {
                //一键查询
                $("#yjcx_onclick").attr("onclick", "");
                $("#yjcx_onclick").bind("click", function () {
                    BmonPage.showLoginDialog();
                    $("#homeDiv").hide();
                    $("#popMaskAct").hide();
                    $("#popMask").show();
                });
                //顶部一键查询入口
                $("#top_yjcx").attr("onclick", "");
                $("#top_yjcx").bind("click", function () {
                    BmonPage.showLoginDialog();
                });
                $("#lift-search").hide();
                //未登录状态获取用户地市
                var cityName = "";
                if (getCookie("city") != null && getCookie("city") != "") {
                    cityName = getCityName(getCookie("city"));
                }
                else if (data.userCity.resultObj.city) {
                    cityName = getCityName(data.userCity.resultObj.city);
                } else {
                    cityName = "南京"
                }
                //顶部地市显示
                this.showCityPro(cityName, "0");

                $("#topUserNum").html("");
                //改版登录连接
                //$("#topIsLogin").html("<a href=\"/login/newLogin.html?"+window.location.href.substring(window.location.href.indexOf('#'))+"\" style=\"color:#e40077;\" class=\"carmine\" id=\"logout\">[登录]</a>");
                //原登录连接
                $("#topIsLogin").html("<a href=\"javascript:BmonPage.showLoginDialog('topLogin');\" style=\"color:#e40077;\" class=\"carmine\" id=\"logout\">[登录]</a>");
                $(".main-leftBar").attr("class", "main-leftBar main-leftBar-unlogin");
                this.initPage();
                this.isNeedVerifyCode = data.user.resultObj;
                if (this.isNeedVerifyCode) {
                    $("#popBox-verifyCode-idType").show();
                } else {
                    $("#popBox-verifyCode-idType").hide();
                }

                if ($("#quickMenu").length) {
                    $("#quickMenu-jfcx").show();
                    $("#quickMenu_jfcx").show();
                    $("#quickMenu_mzcx").show();
                    $("#quickMenu_jfdh").hide();
                    $("#quickMenu_mzdh").hide();
                }
            }
            //收藏功能气泡引导
            this.showFavTips();
        }
    },

    showUserLastDate: function (data) {
        var lastQueryDate = data.lastQeuryDate.resultObj;
        //0:标记今天使用过 不展示 ； -1 ： 表示从未使用过 提示公测中 ； 其他：展示几天未检测
        var isShowDatePop = getCookie("popUserQueryDate");
        if (lastQueryDate > 0) {
            if ("1" != isShowDatePop) {
                $("#popLayer").show();
                $("#popLayerDays").html("尊敬的用户，您已经有<strong>" + lastQueryDate + "</strong>天没来体检了");
            }
        } else if (0 == lastQueryDate) {
            $("#popLayer").hide();
        } else if (-1 == lastQueryDate) {
            if ("1" != isShowDatePop) {
                $("#popLayer").show();
                $("#popLayerDays").html("不知道消费情况？快来戳我吧！");
            }
        } else {

        }
    },

    fifaBallClick: function () {
        var fifaBallGo = $(".fifa-ball-go"),
            fifaBallUnlogged = $(".fifa-ball-unlogged"),
            fifaBallLogged = $(".fifa-ball-logged"),
            oClose = $(".close-fifa");
        fifaBallGo.bind("click", function () {
            $(this).hide();
            fifaBallUnlogged.add(fifaBallLogged).show();
            fifaBallUnlogged.add(fifaBallLogged).animate({bottom: "0"});
        });

        oClose.bind("click", function () {
            fifaBallUnlogged.add(fifaBallLogged).animate({bottom: "-180px"}, function () {
                if (typeof(_tag) != "undefined") {
                    _tag.dcsMultiTrack('WT.nv', 'TLGG', 'WT.event', 'close');
                }
                fifaBallUnlogged.add(fifaBallLogged).hide();
                fifaBallGo.show();
            });
        });
    },

    showFifaBall: function (cityNum) {
        if (window.location.hash.indexOf("#home") != -1) {
            $("#fifa_ball_unlogin").hide();
            var userCityCode = cityNum;
            if ("" != userCityCode && null != userCityCode && undefined != userCityCode) {
                if (userCityCode == "NJDQ") {
                    urlId = "5875"
                }
                if (userCityCode == "WXDQ") {
                    urlId = "5879"
                }
                if (userCityCode == "ZJDQ") {
                    urlId = "5872"
                }
                if (userCityCode == "SZDQ") {
                    urlId = "5878"
                }
                if (userCityCode == "NTDQ") {
                    urlId = "5881"
                }
                if (userCityCode == "YZDQ") {
                    urlId = "4182"
                }
                if (userCityCode == "YCDQ") {
                    urlId = "5876"
                }
                if (userCityCode == "XZDQ") {
                    urlId = "5877"
                }
                if (userCityCode == "LYGDQ") {
                    urlId = "5913"
                }
                if (userCityCode == "CZDQ") {
                    urlId = "5894"
                }
                if (userCityCode == "TZDQ") {
                    urlId = "5897"
                }
                if (userCityCode == "SQDQ") {
                    urlId = "5880"
                }
                if (userCityCode == "HADQ") {
                    urlId = "5883"
                }
                var titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=" + urlId;
                $("#fifa_ball_yhhd").attr("href", titleUrl);
                $("#fifa_ball_yhhd").bind("click", function () {
                    if (typeof(_tag) != 'undefined') {
                        _tag.dcsMultiTrack('WT.nv', 'TLGG', 'WT.event', 'sdshf', 'WT.city', userCityCode);
                    }
                });
            }
            $("#fifa_ball_login").show();
        }
    },

    showFavTips: function () {
        var isShowFav = getCookie("favTips");
        if ("1" != isShowFav && window.location.hash.indexOf("#home") != -1) {
            $("#saveFavTips").show();
            setTimeout('loginComponent.closeFavTips()', 5000);
        }
    },

    closeFavTips: function () {
        $("#saveFavTips").hide();
        setCookie("favTips", "1", 15 * 24 * 60 * 60 * 1000);
    },

    showTopUserNum: function (user) {
        var CmWebtokenid;
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if ("CmWebtokenid" == arr[0]) {
                var value = arr[1].replace(/\"/g, "").split(",");
                if (value[1] == "js") {
                    CmWebtokenid = value[0];
                }
                break;
            }
        }

        if (CmWebtokenid) {
            $("#topUserNum").html(CmWebtokenid);
            $("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
        } else if (user) {
            $("#topUserNum").html(user.mobile);
            $("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
        } else {
            $("#topUserNum").html("");
            $("#topIsLogin").html("<a href=\"/login/newLogin.html?" + window.location.href.substring(window.location.href.indexOf('#')) + "\" style=\"color:#e40077;\" class=\"orange\" id=\"logout\">[登录]</a>");
        }
    },

    //重新组织省份与地市选择信息
    showCityPro: function (cityName, loginType) {

        this.divCityHtml = $("#chinaCity").html() + "</div>";
        this.divCityListHtml = $("#proCity").html() + "</div>";

        var tmpContent = "<div class=\"topcity\" id=\"topChinaCity\" >江苏</div>";
        if (loginType == "0") {
            //未登录
            tmpContent += "<div class=\"topcity\" id=\"topProCity\"  >" + cityName + "</div>";
        } else {
            tmpContent += "<div class=\"topcity\" id=\"topProCity\">" + cityName + "</div>";
        }
        var divCityHtmlAppend = "<div class=\"DivCityList\" id=\"chinaCity\" style=\"display: none;\" >";
        var divCityListHtmlAppend = "<div class=\"DivCityList\" id=\"proCity\" style=\"display:none;\">";
        $("#pro1").empty().html(tmpContent + divCityHtmlAppend + this.divCityHtml + divCityListHtmlAppend + this.divCityListHtml);
        //重新绑定展示事件

        if (loginType == "0") {
            //未登录
            loginComponent.headShowHideFn($("#topChinaCity"), $("#chinaCity"));
            loginComponent.headShowHideFn($("#topProCity"), $("#proCity"));
        } else {
            loginComponent.headShowHideFn($("#topChinaCity"), $("#chinaCity"));
            // loginComponent.headShowHideFn($("#topProCity"),$("#proCity"));
        }


    },
    //设置展示
    headShowHideFn: function (obj01, obj02) {
        obj01.hover(function () {
            obj02.show();
        }, function () {
            obj02.hide();
        });

        obj02.mouseenter(function () {
            $(this).show();
        })
        obj02.mouseleave(function () {
            $(this).hide();
        });
    },
    //首页大弹，暂时关闭
    showHomeAct: function (data) {
//			var city = cityNum ;
        if ("1" != isShowAct && window.location.hash.indexOf("#home") != -1) {
            var isShowAct = getCookie("forwardActSmqllNew");
            var h = $(document).height();
            $("#popMaskAct").show().height(h);
            $("#homeDiv").find("img").attr("src", data.pic1);
            $("#homeAct").click(function () {
                var recommedWebCode = data.webCode;
                var recommedUrl = data.url;
                if (typeof(_tag) != "undefined") {
                    _tag.dcsMultiTrack('WT.mncj', recommedWebCode, 'WT.city', UserInfo.userCity, 'WT.mobile', UserInfo.userMobile);
                }
                ;

                if ("" != recommedWebCode) {
                    recommedUrl = recommedUrl + "@webtransId=" + recommedWebCode;
                }
                window.open(recommedUrl);
                $("#popMaskAct").hide();
                $("#homeDiv").hide();
                setCookie("forwardActSmqllNew", "1", 1 * 24 * 60 * 60 * 1000);
            });
            $("#homeDiv").css("z-index", 99999);
            $("#homeDiv").show();
        }
    },

    //顶部卷帘广告
    showTopBanner: function (data) {
        var user = data.user.resultObj;
        var recommendData = data.recommedList;
        if (recommendData.length > 0) {
            var recommendItem = recommendData[0];
            // 业务链接地址
            var showViewLink = recommendItem.activityUrl;
            // 业务小图片地址
            var busiSmallIconUrl = recommendItem.activitySmallIcon;
            // 业务大图片地址
            var busiBigIconUrl = recommendItem.activityIcon;

            var webCode = recommendItem.webCode;//recommendItem.webCode;
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.mncj', webCode, 'WT.city', user.city_jbNum, 'WT.mobile', user.mobile);
            }
            ;

            if ("" != webCode) {
                showViewLink = showViewLink + "@webtransId=" + webCode;
            }
            $("#topBannerBig").attr("src", busiBigIconUrl);//busiBigIconUrl
            $("#topBannerSmall").attr("src", busiSmallIconUrl);//busiSmallIconUrl
            $("#topBannerBigWbt").attr("href", showViewLink);//showViewLink
            $("#topBannerBigWbt").bind("click", function () {
                if (typeof(_tag) != 'undefined') {
                    _tag.dcsMultiTrack('WT.yxhddj', webCode, 'WT.city', user.city_jbNum, 'WT.mobile', user.mobile);
                }
            });
            $("#topBannerSmallWbt").attr("href", showViewLink);//showViewLink
            $("#topBannerSmallWbt").bind("click", function () {
                if (typeof(_tag) != 'undefined') {
                    _tag.dcsMultiTrack('WT.yxhddj', webCode, 'WT.city', user.city_jbNum, 'WT.mobile', user.mobile);
                }
            });

            var topSlideBanner = $(".top-slide-banner"), timer1,
                topSlideSimg = $(".topSlideBanner-s"),
                closeTopSlide = $(".close-top-slide");
            if (window.location.hash.indexOf("#home") != -1) {
                $("#top-slide").show();
                topSlideSimg.hide();

                timer2 = setTimeout(function () {
                    topSlideBanner.slideUp(2000, function () {
                        //topSlideBanner.hide();
                        topSlideSimg.show();
                    });
                }, 5000);

                closeTopSlide.bind("click", function () {
                    clearTimeout(timer1);
                    topSlideBanner.slideUp(2000, function () {
                        //topSlideBanner.hide();
                        topSlideSimg.show();
                    });
                })

            } else {
                $("#top-slide").show();
                topSlideBanner.hide();
                topSlideSimg.show();
            }
        }
    },

    showHomePop4g: function () {
        var isShowPop4g = getCookie("forwardPop4g");
        if ("1" != isShowPop4g && window.location.hash.indexOf("#home") != -1) {
            var h = $(document).height();
            $("#popMaskAct").show().height(h);
            $("#pop4G").show();
        }
    },

    showSearchPop: function (userMobile) {
        var nowTime = new Date().getTime();
        var isSearchCookieValue = getCookie("forwardPopSearch_" + userMobile);
        if (window.location.hash.indexOf("#home") != -1) {
            //有值 说明该用户之前存在cookie
            if (isSearchCookieValue) {
                var sevenTime = isSearchCookieValue;
                if ((nowTime - sevenTime) > 0) {
                    var h = $(document).height();
                    $("#popMaskAct").show().height(h);
                    $("#popSearch2").show();

                }
            } else {
                var h = $(document).height();
                $("#popMaskAct").show().height(h);
                $("#popSearch").show();

            }
        }
    },

    showPopYjcx: function () {
        var h = $(document).height();
        $("#popMaskAct").show().height(h);
        $("#popYjcx").show();
        $("#popSearch").hide();
        //一键查询引导层
        $("#popLayer").hide();
        if ("1" != getCookie("popUserQueryDate")) {
            setCookie("popUserQueryDate", "1", 24 * 60 * 60 * 1000);
        }
        //插码开始
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack('WT.nv', 'serv_bottom', 'WT.event', 'YDWS');
        }
        //插码结束
    },

    // 显示登录触点营销
    showLoginTouch: function (userType) {
        // 判断触点营销登录事件是否已经加载
        if (TOUCHAPP.GLOBAL_INFO.IS_LOGINTOUCH_ACTIVED == false) {
            // 用户类型为手机用户，且用户号码不为空时，显示登录触点营销
            if (userType == 1 && this.userInfo.userMobile != null) {
                TOUCHAPP.GETTOUCH.getTouchInfo(TOUCHAPP.EVENT_ID.JS_OBSH_USER_LOGIN);
            }
        }
    },

    // 显示用户积分余额
    showBalanceScore: function (data) {
        if (data && data.resultObj) {
            this.userInfo.balance = data.resultObj.balance;
            this.userInfo.score = data.resultObj.score;
        }
    },

    // 显示用户信息
    showUserInfo: function (data) {
        // 用户号码
        var mobile = data.resultObj.mobile;
        // 用户姓名
        var userName = "用户";
        // 除了短信密码登录不显示用户姓名，其它都显示
        if (data.resultObj.loginSource != 3) {
            userName = data.resultObj.userName == "" ? "用户" : data.resultObj.userName;
        }
        // 大品牌编码
        var brand_jbNum = data.resultObj.brand_jbNum;
        // 大品牌名称
        var brand_jbNum_name = data.resultObj.brand_jbNum_name;
        // 小品牌名称
        var brand_busiNum_name = data.resultObj.brand_busiNum_name;
        // 用户地市
        var userCity = data.resultObj.city_jbNum;
        // 用户登录方式
        var loginSource = data.resultObj.loginSource;
        $("#userNumber").val("");
        $("#userPassword").val("");
        $("#popBox-userLogin").hide();
        $("#popMask").hide();
        $(".topBar-nologin").hide();
        $(".topBar-user").show();
        $("#unlogin-sign").hide();
        $("#login-sign").show();

        this.userInfo.userMobile = mobile;
        this.userInfo.userName = userName;
        this.userInfo.brandJbNum = brand_jbNum;
        this.userInfo.brandJbName = brand_jbNum_name;
        this.userInfo.brandBusiName = brand_busiNum_name;
        this.userInfo.userCity = userCity;

        this.userInfo.loginSource = loginSource;

        var searchInputText = $(".so-quickSearch-btn")

        if ($("#quickMenu").length) {
            if (brand_jbNum == 'QQT' || brand_jbNum == 'SZX') {
                $("#quickMenu-jfcx").show();
                $("#quickMenu-jfcx-a").show();
                $("#quickMenu_jfcx").show();
                $("#quickMenu_jfdh").show();
                $("#quickMenu_mzcx").hide();
                $("#quickMenu_mzdh").hide();
            } else if (brand_jbNum == 'DGDD') {
                $("#quickMenu-jfcx").hide();
                $("#quickMenu-jfcx-a").hide();
                $("#quickMenu_mzcx").show();
                $("#quickMenu_mzdh").show();
                $("#quickMenu_jfcx").hide();
                $("#quickMenu_jfdh").hide();
            }

            var titleUrl = "";
            var urlId = "";
            var userCityCode = userCity;
            if (userCityCode == "NJDQ") {
                urlId = "5875"
            }
            if (userCityCode == "WXDQ") {
                urlId = "5879"
            }
            if (userCityCode == "ZJDQ") {
                urlId = "5872"
            }
            if (userCityCode == "SZDQ") {
                urlId = "5878"
            }
            if (userCityCode == "NTDQ") {
                urlId = "5881"
            }
            if (userCityCode == "YZDQ") {
                urlId = "5918"
            }
            if (userCityCode == "YCDQ") {
                urlId = "5876"
            }
            if (userCityCode == "XZDQ") {
                urlId = "5877"
            }
            if (userCityCode == "LYGDQ") {
                urlId = "5913"
            }
            if (userCityCode == "CZDQ") {
                urlId = "5894"
            }
            if (userCityCode == "TZDQ") {
                urlId = "5897"
            }
            if (userCityCode == "SQDQ") {
                urlId = "5880"
            }
            if (userCityCode == "HADQ") {
                urlId = "5883"
            }
            if ("" != urlId) {
                titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=" + urlId;
            } else {
                titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=5875";
            }
            $("#quickMenuYx").attr("href", titleUrl);

        }

        $("#userBrandNameDisp").html(userName + "(<span class='userNum'>" + mobile + "</span>)");


        // 三楼特惠专区货架优惠精选数据加载 add by limeng begin
        setTimeout("loginComponent.getActivityGoodsShelfInfo()", 1000);
        // 三楼特惠专区货架优惠精选数据加载 add by limeng end

        // 登录后登录飞信|开发人：丁亮|开发日期：2012-8-20
        loginComponent.loginFetionComponent();

        $("#fetionToggle").attr("href", "javascript:void(0);");
        $("#fetionToggle").attr("title", "飞信");
        $("#fetionToggle").click(function () {
            loginComponent.loginFetion(loginComponent.userInfo.userMobile);
        });

        // 登录后插码
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack('WT.event', 'logon', 'WT.log_rt', 'suc', 'WT.mobile', mobile, 'WT.brand', brand_jbNum, 'WT.userCity', userCity);
        }
    },

    getActivityGoodsShelfInfo: function () {
        if (window.location.hash == '#home' && marketActComponent.clickCount == 0) {
            marketActComponent.clickCount = 1;
            marketActComponent.getActivityGoodsShelfNotLoadImg("getWBLYHHD");
        }
    },

    isGroupMobile: function (data) {
        if (data.user.resultCode == '0' && data.user.resultObj) {
            var result = data.group;
            if (result == "1") {
                loginComponent.userInfo.isGroupMobile = "1";
            }
        }
    },

    get139Mail: function (data) {
        if (data.user.resultCode == '0' && data.user.resultObj) {
            $.busiReq({
                "data": {
                    "reqUrl": "get139Mail"
                },
                "success": function (data) {
                    result = eval("(" + data + ")");
                    loginComponent.showIndexMail(result);
                }
            });
        }
    },

    showIndexClient: function (result) {
        // BUSINESS_REQ_URI

        var resultInfo = result.resultObj;

        if ("1" == resultInfo) {
            $(".leftBar-app span").show();
            setTimeout('loginComponent.closeClient(1)', 5000);
            $(".leftBar-app span").click(function () {
                window.open("http://www.js.10086.cn/clientDownload/index.html");
            });
            $(".leftBar-app").mouseover(function () {
                $(".leftBar-app span").show();
            }).mouseout(function () {
                $(".leftBar-app span").hide();
            })
        }
    },
    closeClient: function (num) {
        if (1 == num) {
            $(".leftBar-app span").hide();
        }
        if (2 == num) {
            $(".leftBar-139 span").hide();
        }
    },

    getClient: function (data) {

        if (data.user.resultCode == '0' && data.user.resultObj) {
            $.busiReq({
                "data": {
                    "reqUrl": "getClientIntroduce"
                },
                "success": function (data) {
                    result = eval("(" + data + ")");
                    loginComponent.showIndexClient(result);
                }
            });
        }
    },

    showIndexMail: function (result) {
        // BUSINESS_REQ_URI
        var basePath = GLOBAL_INFO.BUSINESS_REQ_URI.substr(0,
            GLOBAL_INFO.BUSINESS_REQ_URI.lastIndexOf('/') + 1);
        var isOpenEmailUrl = basePath
            + "LoginTran.do?method=Login139Email&nocache=" + Math.random();
        var noOpenEmailUrl = "#139YX";
        if (result && result.resultObj) {
            var emailInfo = result.resultObj;
            if (emailInfo) {
                if (emailInfo.open === 1) { // 已开通
                    if (emailInfo.count == 0) {
                        $("#139mail_num").hide();
                    } else {
                        $("#139mail_num").show();
                        $("#139mail_num").html(emailInfo.count);
                    }
                    $("#139mail_logo").attr('title',
                        "您有" + emailInfo.count + "封新邮件");
                    $("#139mail_logo").attr('href', isOpenEmailUrl);
                    $("#139mail_logo").attr('target', '_blank');
                    $("#139mail_left_num").attr('href', isOpenEmailUrl);
                    $("#139mail_left_num").attr('target', '_blank');
                    // loginComponent.listShowStart();
                } else if (emailInfo.open === 0) { // 未开通
                    $("#139mail_logo").attr("title", "开通139邮箱，我的私人邮件快递");
                    $('#139mail_logo').attr("href", noOpenEmailUrl);
                    $(".leftBar-139 span").show();

                    $(".leftBar-139 span").click(function () {
                        window.open("http://service.js.10086.cn/index.jsp#139YX");
                    })

                    $(".leftBar-139").mouseover(function () {
                        $(".leftBar-139 span").show();
                    }).mouseout(function () {
                        $(".leftBar-139 span").hide();
                    });

                    setTimeout('loginComponent.closeClient(2)', 5000);


                } else {

                }
            }
        }
    },

    listShowStart: function () {
        var t;
        var aIndexSpan = $(".main-leftBar-ico-mail"),
            aList = $(".main-leftbar-139List");
        //标签鼠标事件
        aIndexSpan.hover(
            function () {
                clearTimeout(t);
                var a = aIndexSpan.offset();
                aList.show();
            },
            function () {
                listHide();
            }
        );
        //列表鼠标事件
        aList.hover(
            function () {
                clearTimeout(t);
            },
            function () {
                listHide();
            }
        );
        //隐藏列表
        function listHide() {
            t = setTimeout(function () {
                aList.hide();
            }, 100)
        }
    },

    /**
     * 加载飞信组件
     * 增加人：丁亮
     * 增加日期：2012-9-6
     */
    loginFetionComponent: function (itemUserMobile) {
        var tmpScript = $("#fetion_1");
        if (tmpScript == null) {
            $(body).append("<script id=\"fetion_1\" language=\"javascript\" type=\"text/javascript\" src=\"http://files01.js.10086.cn/obsh/js/fetionBar/fetionAjaxHelper.js\"></script>");
        }
    },

    /**
     * 登录飞信Bar
     * 增加人：丁亮
     * 增加日期：2012-8-20
     */
    loginFetion: function (mobile) {
        var host = window.location.host;
        var getC_Url = "http://" + host + "/fetionBar?userMobile=" + mobile + "&t=" + Math.random();
        window.fxbar_settings = {
            gen_c_url: getC_Url,                    // 获取凭证的接口的url，不能为空。
            c_domain: "js.10086.cn",                // 凭证对应的域，不能为空。
            tag: "jiangsu",                         // 第三方对应的tag，不能为空。
            domain: "js.10086.cn",                  // 第三方网页对应的域。
            autoExpand: false,                       // true展开，false收缩
            width: 170,                             // 飞信BAR主面板的宽度，设置为200
            height: 240,                            // 飞信BAR主面板的高度，设置为350
            skin: "skin_4",
            permission: 3,
            containerId: 'fetion_shell',            //新增，嵌入飞信bar的容器ID
            layout: 7                               // 飞信BAR的布局方式，1:左浮动，2:右浮动，3:固定，6:139邮箱，7:移动微博
        };

        tmpScript = document.getElementById("fetion_2");
        if (tmpScript == null || tmpScript == "") {
            var head = document.getElementsByTagName("head").item(0);
            var script = document.createElement("script");
            script.id = "fetion_2";
            script.type = "text/javascript";
            script.src = "http://files01.js.10086.cn/obsh/js/fetionBar/fetionPreInit.js?" + (+new Date);
            head.appendChild(script);
        }

        setTimeout(function () {
            if (fetion$) {
                if ($("#fetion_shell .fxbar:visible").length != 0) {
                    fetion$.fxbar.ui.toggle(0);
                }
                else {
                    $(".fxbar").css({ "position": "absolute", "top": "-33px", "left": "170px", "z-index": "9999" });
                    fetion$.fxbar.ui.toggle(1);
                    fetion$.fxbar.logic.getUserInfo && fetion$.fxbar.logic.getUserInfo();
                }

                $("#fetionToggle").unbind("click").click(function () {
                    if (fetion$) {
                        if ($("#fetion_shell .fxbar:visible").length != 0) {
                            fetion$.fxbar.ui.toggle(0);
                        }
                        else {
                            $(".fxbar").css({ "position": "absolute", "top": "-33px", "left": "170px", "z-index": "9999" });
                            fetion$.fxbar.ui.toggle(1);
                            fetion$.fxbar.logic.getUserInfo && fetion$.fxbar.logic.getUserInfo();
                        }
                    }
                });
            }
        }, 3000);
    },

    initPage: function () {
        $("#userNumber").val("");
        $("#userPassword").val("");
        $("#popBox-userLogin").hide();
        $("#popMask").hide();
        $(".topBar-nologin").show();
        $("#topBar-user-info-detail").hide();
        $(".topBar-user").hide();
        this.passwordType = 1;
        // 清除触点营销预付费用户余额不足20元提醒，用户是否点击关闭按钮的cookie值
        TOUCHAPP.GETTOUCH.clearBalanceShortCloseCookie(this.userInfo.userMobile);
        this.userInfo.clear();
        // 隐藏触点营销弹出框
        TOUCHAPP.GETTOUCH.hideTouchArea();
    },

    changeLoginType: function (typeNum) {
        //var loginType = $("#loginType").val();
        //var loginType = $("#loginTypeBox").find(".selected").attr("index");
        $("#loginNewDiv").hide();
        $("#loginTypeBox").show();
        if(typeNum != null && typeNum != ""){
            var loginType = typeNum;
            $("#loginWay .login-way-item").removeClass("login-way-item-current");
            $("#loginWay").find("a[index="+typeNum+"]").addClass("login-way-item-current");

            $("#loginTypeBox .label").removeClass("selected").hide();;
            $("#loginTypeBox").find("label[index="+typeNum+"]").addClass("selected").show();
            var loginTilHtml = $("#loginTypeBox").find("label[index="+typeNum+"]").html();
            if("3" == typeNum){
                loginTilHtml = "固定电话账号";
            }
            $("#loginTil").html("使用"+loginTilHtml+"登录");
            $(".login-phone-way").find("input[name=phone-login]").attr("checked",false).eq(0).attr("checked",true);
            $("#loginType").val(typeNum);
        }else{
            var loginType = $("#loginTypeBox").find(".selected").attr("index");
        }
        var numberLabel = "手机号码";
        var maxlength = 11;
        var showSavePassword = false;
        var cityShow = false;
        switch (loginType) {
            case '1' :
                showSavePassword = true;
                break;
            case '2' :
                numberLabel = "宽带帐号";
                maxlength = 15;
                break;
            case '3' :
                numberLabel = "电话号码";
                cityShow = true;
                maxlength = 8;
                break;
            case '4' :
                numberLabel = "帐户";
                break;
            case '5' :
                numberLabel = "异网号码";
                break;
            default :
                break;
        }
        $('#popBox-userLogin-idType').html(numberLabel);
        $("#userNumber").attr("maxlength", maxlength).val("");
        $("#userPassword").val("");
        if (showSavePassword) {
            $("#savePassword").show();
        } else {
            $("#savePassword").hide();
        }

        if (cityShow) {
            $("#loginCity-tr").show();
            $("#loginCity-tr_td").show();
        } else {
            $("#loginCity-tr").hide();
            $("#loginCity-tr_td").hide();
        }
        if (loginType == '1') {
            $("#loginSwitchPhone").hide();
            $("#loginSwitchOther").show();
            $("#loginPhoneType1").show();
            $("#loginPhoneType2").show();
            $("#loginForm-link-word").hide();
            // 如果是短信密码登录后不显示小提示
            if (loginComponent.userInfo.loginSource == '3') {
                $("#userNumber").val(loginComponent.userInfo.userMobile);
                $("#userPassword").focus();
            }
            else {
                // 话务员登录，只有动态密码登录
                var url = window.location.href;
                if (url.indexOf("index_hwy.jsp") != -1) {
                    $("#loginMobile-tr").hide();
                }
                else {
                    $("#popBox-userLogin-loginType_sel").show();
                    $("#loginMobile-tr").show();
                }
                //$("#loginForm-link-switchPswType1").show();
                $("#loginForm-link-password-1").show();
            }
        }
        else if (loginType == '5' || loginType == '4' || loginType == '3' || loginType == '2') {
            loginComponent.popLogin_psdType_input(3);
            $("#popBox-userLogin-loginType_sel").hide();
            $("#loginMobile-tr").hide();
            $("#loginSwitchPhone").show();
            $("#loginSwitchOther").hide();
            $("#loginPhoneType1").hide();
            $("#loginPhoneType2").hide();
        }
        else {
            loginComponent.popLogin_psdType_input(1);
            $("#popBox-userLogin-loginType_sel").hide();
            $("#loginMobile-tr").hide();
        }
    },

    /**
     * http协议登录
     */
    login: function () {
        var mobile = $("#userNumber").val();
        var userCity = $("#loginCity").val();
        var password = $("#userPassword").val();
        //var loginType = $("#loginType").val();
        var loginType = $("#loginTypeBox").find(".selected").attr("index");
        var verifyCode = $("#verifyCode").val();
        // 登录页面与服务密码确认页面标志位
        var isSavePasswordVal_N = $("#isSavePasswordVal_N").val();
        var isSavePassword = '0';
        //var isKeepLogin = '0';
        if ($("#isSavePassword").attr('checked') != undefined && ($("#isSavePassword").attr('checked'))) {
            isSavePassword = '1';
            this.savePassword = true;
        } else {
            isSavePassword = '0';
            this.savePassword = false;
        }

        //get cookie password
        var cookieuserPwd = this.getUsrSavePwd(1);
        if (cookieuserPwd != null && cookieuserPwd == '100866') {
            password = cookieuserPwd;
        }

        if(chkUserPwd(password)){
            password = encryptByDES(password, "1234567890");
        }

        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        $("#topBar-user-message .message-count").empty().hide();
        $.busiReq({
            "data": {
                "reqUrl": "login",
                "busiNum": "LOGIN",
                "operType": "0",
                "mobile": mobile,
                "password": password,
                "city": userCity,
                "verifyCode": verifyCode,
                "loginType": loginType,
                "isSavePasswordVal": isSavePassword,
                "loginFormTab": '',
                "passwordType": loginComponent.passwordType,
                "isSavePasswordVal_N": isSavePasswordVal_N
            },
            "success": function (data) {
                result = eval("(" + data + ")");
                // 如果是服务密码确认
                if (isSavePasswordVal_N == '2') {
                    loginComponent.loginCallBackSecend(result);
                }
                else {
                    loginComponent.loginCallBack(result);
                }
            }
        });
    },

    // http协议登录回调,登录页面
    loginCallBack: function (result) {
        $("#popBox-login-N-buttion").attr("class", "btnBlue-s1").attr("disabled", false).val("登录");
        if (result.resultCode == '0' && result.resultObj) {
            //$("#loginType").val("1");
            $("#loginTypeBox .label").removeClass("selected").hide();
            $("#loginTypeBox").find("label[index=1]").addClass("selected").show();
            loginComponent.changeLoginType();
            $("#userNumber").val("");
            $("#userPassword").val("");
            $("#verifyCode").val("");
            $("#isSavePassword").attr("checked", false);
            $("#number-error-message").empty();
            $("#password-error-message").empty();
            if (result.resultObj.userType == '2') {
                loginComponent.showOtherUserInfo(result.resultObj);
                window.location.href = "./KDMMXG.html";
            } else if (result.resultObj.userType == '3') {
                loginComponent.showOtherUserInfo(result.resultObj);
                window.location.href = "./GDDHZDCX.html";
            } else if (result.resultObj.userType == '4') {
                loginComponent.showOtherUserInfo(result.resultObj);
                window.location.href = "#agent_home";
            } else {
                loginComponent.showUserInfo(result);
                window.location.href = "./index.html";
            }
        } else {
            //插码
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.event', 'logon', 'WT.log_rt', 'error', 'WT.mobile', $("#userNumber").val(), 'WT.log_fail', result.resultMsg);
            }
            if (result.logicCode == '-4009') {
                $("#userLogin-error-result").html(result.resultObj);
            } else if (result.logicCode == '-3006') {
                // 显示图片验证码
                $("#popBox-verifyCode-idType").show();
                $("#userLogin-error-result").html(result.resultMsg);
            } else {
                $("#userLogin-error-result").html(result.resultMsg);
            }

            $("#userPassword").val("");
            $("#userLogin-error-result").show();
            $("#userLogin-error-result-div").show();
        }
    },

    loginCallBackSecend: function (result) {
        $("#popBox-login-N-buttion").attr("class", "btnBlue-s1").attr("disabled", false).val("登录");
        if (result.resultCode == '0' && result.resultObj) {
            loginComponent.showUserInfo(result);

            if (window.location.hash == '#GRZLGL_GRZL' || window.location.hash == '#ZDCX' || window.location.hash == '#XFGK' || window.location.hash == '#YXBD') {
                BmonPage.reload();
            }

            if (GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN != null) {
                $.extend(GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN["data"], {"confirmFlg": "1"});
                $.busiReq(GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN);
            }
        } else {
            if (result.logicCode == '-4009') {
                //插码
                if (typeof(_tag) != "undefined") {
                    _tag.dcsMultiTrack('WT.event', 'logon', 'WT.log_rt', 'error', 'WT.mobile', $("#userNumber").val(), 'WT.log_fail', result.resultMsg);
                }
                $("#userLogin-error-result").html(result.resultObj);
            } else if (result.logicCode == '-3006') {
                // 显示图片验证码
                $("#popBox-verifyCode-idType").show();
                $("#userLogin-error-result").html(result.resultMsg);
            } else {
                $("#userLogin-error-result").html(result.resultMsg);
            }

            $("#userLogin-error-result").show();
            $("#userLogin-error-result-div").show();
        }
    },

    /**
     * https协议登录
     */
    loginHttps: function () {
        var href = window.location.href;
        var loginFormTab = href.substring(href.indexOf('#'), href.indexOf('#') + 5);
        // 手机号码
        var mobile = $("#userNumber").val();
        var password = $("#userPassword").val();
        var isSavePassword = '0';
        //var isKeepLogin = '0';
        if ($("#isSavePassword").attr('checked') != undefined && ($("#isSavePassword").attr('checked'))) {
            isSavePassword = '1';
            // this.savePassword = true;
        } else {
            isSavePassword = '0';
            // this.savePassword = false;
        }

        //get cookie password
        // var cookieuserPwd = this.getUsrSavePwd(1);
        // if (cookieuserPwd != null && cookieuserPwd == '100866') {
        //     password = cookieuserPwd;
        // }
        //存在键盘绑定事件，该方法会被多次调用，加判断
        if(chkUserPwd(password)){
            password = encryptByDES(password, "1234567890");
        }

        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        $("#topBar-user-message .message-count").empty().hide();

        // 登录协议设置为https
        $("#userLoginTransferProtocol").val("https");
        $("#userPassword").val(password);
        $("#isSavePasswordVal").val(isSavePassword);
        $("#loginFormTab").val(loginFormTab);
        $("#passwordType").val(loginComponent.passwordType);
        // 账号类型
        //var loginType = $("#loginType").val();
        var loginType = $("#loginTypeBox").find(".selected").attr("index");
        if (loginType == '1') {
            if (href.indexOf('=') > 0){
                if(href.indexOf('LAN_HOME') != -1 || href.indexOf('PHONE_HOME') != -1 || href.indexOf('AGENT') != -1 || href.indexOf('XXT') != -1){
                    $("#redirectUrl").val("index.html");
                }else{
//                if (href.indexOf("&") > 0) {
//                    var temp = href.substring(href.indexOf("=") + 1, href.indexOf("&"));
//                    $("#redirectUrl").val(temp);
//                } else {
                    var temp = href.substring(href.indexOf("=") + 1, href.length);
                    $("#redirectUrl").val(temp);
//                }
                }
            } else {
                $("#redirectUrl").val("index.html");
            }
        } else if (loginType == '2') {//宽带账户
            $("#redirectUrl").val("KDMMXG.html");
        } else if (loginType == '3') {//固定电话账号
            $("#redirectUrl").val("PHONE_HOME.html");
        } else if (loginType == '4') {//代理商账号
            $("#redirectUrl").val("AGENT.html");
        } else if (loginType == '5') {//异网用户
            $("#redirectUrl").val("XXT.html");
        }


        // 设置form提交路径action
        var host = window.location.host;
        if (loginType == '5') {
            $("#userLogin").attr("action", GLOBAL_INFO.BUSINESS_REQ_URI);
        } else {
            if (host.indexOf("service.js.10086.cn") != -1) {
                var action = GLOBAL_INFO.BUSINESS_REQ_URI;
//                var action = "https://" + host + "/actionDispatcher.do";
                $("#userLogin").attr("action", action);
            }
            else {
                $("#userLogin").attr("action", GLOBAL_INFO.BUSINESS_REQ_URI);
            }
        }
        // 缓存手机号码
        setCookie("login_error_number_https", mobile, 10 * 365 * 24 * 60 * 60 * 1000);
        // 账户类型
        setCookie("login_error_loginType_https", $("#loginTypeBox").find(".selected").attr("index"), 10 * 365 * 24 * 60 * 60 * 1000);
        //var loginType = $("#loginTypeBox").find(".selected").attr("index");
        // 密码类型  1:服务密码登录  2:短信密码
        setCookie("login_error_passwordType_https", loginComponent.passwordType, 10 * 365 * 24 * 60 * 60 * 1000);

        // 请求提交
        $("#userLogin").submit();
    },

    loginFailedCallBack: function (resultCode, mobile, loginType, passwordType) {

        GlobalDialog.showLoginDialog();
        $("#popBox-login-N-buttion").attr("class", "btnBlue-s1").attr("disabled", false).val("登录");

        if (loginType == null || loginType == "") {
            loginType = "1";
        }
        //$("#loginType").val(loginType);
        $("#loginTypeBox .label").removeClass("selected").hide();
        $("#loginTypeBox").find("label[index="+loginType+"]").addClass("selected").show();
        loginComponent.changeLoginType();
        // 先修改loginType，再修改手机号码
        $("#userNumber").val(mobile);

        // 短信密码登录
        if (passwordType == '2') {
            loginComponent.popLogin_psdType_input(2);
        }
        $("#userPassword").focus();

        var errorMsg = "";

        //密码输入框重置成原本样式
        $("#userPassword").css("border", "1px solid #E0E0E0");

        if (resultCode == '-3001') {
            if(loginType == "5"){
                errorMsg = "对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！<br/>忘记密码请登录“和教育客户端”找回";
            }else{
                errorMsg = "对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！<br/>若忘记密码可选择  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"1\");'>服务密码登录</a>  或  <a style=\"color:red;\" href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
            }
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3002') {
            if(loginType == "5"){
                errorMsg = "对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！<br/>忘记密码请登录“和教育客户端”找回";
            }else{
                errorMsg = "对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！<br/>若忘记密码可选择  <a style=\"color:red;\" href='javascript:void(0);' onclick='window.open(\"http://service.js.10086.cn/my/MY_MMSZ.html?operNum=2\")'>密码重置</a>  或  <a style=\"color:red;\" href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
            }
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3003') {
            errorMsg = "您已连续3次输入错误的服务密码，请24小时后再次登录，或使用  <a style=\"color:red;\" href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
            loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3004') {
            errorMsg = "您输入的密码累计三次错误,帐户将被锁定二十四小时。欢迎您继续使用我们的服务";
            loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3005') {
            errorMsg = "用户不存在";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3006') {
            errorMsg = "对不起，登录失败，请稍后再试！";
            // 显示图片验证码
            loginComponent.loginSwicth("1");
            $("#popBox-verifyCode-idType").show();
            $("#popBox-verifyCode-tr").show();
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3007') {
            errorMsg = "对不起，您的密码不正确，请重新输入！";
            loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4001') {
            errorMsg = "对不起，该账户已销户，不能登录网上营业厅！";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4003') {
            errorMsg = "对不起,您输入的验证码不正确,请重新输入!";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4004') {
            errorMsg = "登录用户较多，请稍候再试。";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4005') {
            errorMsg = "登录用户较多，请稍候再试。";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4006') {
            errorMsg = "您输入的短信密码不正确，请重新输入!";
            loginComponent.loginSwicth("0");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4007') {
            errorMsg = "短信密码已失效，请重新获取!";
            loginComponent.loginSwicth("0");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4008') {
            errorMsg = "短信密码不存在，请获取短信密码!";
            loginComponent.loginSwicth("0");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-4027') {
            errorMsg = "短信密码输入错误超过3次，请重新获取!";
            loginComponent.loginSwicth("0");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-200008') // 需要短信验证码校验
        {
            errorMsg = "登录用户较多，请稍候再试。";
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '700') {
            errorMsg = "对不起，登录失败，请检查您的号码输入是否正确！";
            $("#userLogin-error-result").html(errorMsg);
        } else if(resultCode == '-4066'){
            errorMsg = "对不起，您输入的号码未激活，无法登录网上营业厅！";
            $("#userLogin-error-result").html(errorMsg);
        }else if(resultCode == '-4067'){
            errorMsg = "对不起，您输入的号码已预约销户，无法登录网上营业厅！ ";
            $("#userLogin-error-result").html(errorMsg);
        }else if(resultCode == '-4068'){
            errorMsg = "对不起，您输入的号码已销户，无法登录网上营业厅！";
            $("#userLogin-error-result").html(errorMsg);
        }else {
            errorMsg = "对不起，登录失败，请稍后再试！";
            $("#userLogin-error-result").html(errorMsg);
        }
        $("#userLogin-error-result").show();
        $("#userLogin-error-result-div").show();

        // 插码
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack('WT.event', 'logon', 'WT.log_rt', 'error', 'WT.mobile', mobile, 'WT.log_fail', errorMsg);
        }
    },

    loginSwicth: function (temp) {
        if ("1" == temp) {
            loginComponent.popLogin_psdType_input(2);
        }
    },
    // 显示宽带，固定电话，代理商登录信息
    showOtherUserInfo: function (obj) {
        $("#userNumber").val("");
        $("#userPassword").val("");
        $("#popBox-userLogin").hide();
        $("#popMask").hide();
        $(".topBar-nologin").hide();
        $(".topBar-user").show();
        $("#topBar-user-message").hide();
        $("#header .header-city-thisCity").hide();
        // 宽带账户
        if (obj.userType == '2') {
            $("#userBrandNameDisp").html(obj.userName + "(" + obj.mobile + ")");
            $("#userNameDisp").html("<strong>" + obj.userName + "</strong>(" + obj.mobile + ")");
            $("#userBrandDisp").html("地市：<span>" + obj.userAreaName.replace(/地区/g, "") + "</span>");
            $("#userInfo-detail-fun").hide();
            $("#userBalanceDisp").empty().hide();
            $("#userScoreDisp").empty().hide();
        }
        // 固定电话账户
        else if (obj.userType == '3') {
            $("#userBrandNameDisp").html(obj.userName + "(" + obj.mobile + ")");
            $("#userNameDisp").html("<strong>" + obj.userName + "</strong>(" + obj.mobile + ")");
            $("#userBrandDisp").html("地市：<span>" + obj.userAreaName.replace(/地区/g, "") + "</span>");
            $("#userInfo-detail-fun").hide();
            $("#userBalanceDisp").empty().hide();
            $("#userScoreDisp").empty().hide();
        }
        // 代理商账户
        else if (obj.userType == '4') {
            $("#userBrandNameDisp").html(obj.mobile);
            $("#userNameDisp").html(obj.mobile);
            $("#userBrandDisp").html("欢迎使用网上营业厅");
            $("#userInfo-detail-fun").hide();
            $("#userBalanceDisp").empty().hide();
            $("#userScoreDisp").empty().hide();
        }
    },

    // 获取用户保存的密码
    getUsrSavePwd: function (type) {
        var userMobile = $("#userNumber").val();
        var res_savepwd = getCookie(userMobile + "_savepwd");
        if (res_savepwd && res_savepwd != null) {
            if (type == 0) {
                $("#isSavePassword").attr("checked", true);
                $("#userPassword").val("111119");
            }
            return res_savepwd;
        }
        return null;
    },

    // 密码类型切换
    popLogin_psdType_input: function (t) {
        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        var ty = $("#popBox-userLogin-pswType");
        var l1 = $("#loginForm-link-password-1");
        var l2 = $("#loginForm-link-password-2");
        if (t == 1) {
            $("#login_switch").val('1');
            ty.html("服务密码");
            l2.hide();
            l1.show();
            $("#loginForm-link-word").hide();
            $("#savePassword").show();
            $("#loginType").show();
            $("#loginType").val(1);
            $("#loginType-tr").show();
            this.passwordType = 1;
            //20131010 begin
            $("#loginPwd-tr").show();
            $("#smsVerifyCodeSendOver").hide();
            $("#popBox-nextStep-button").hide();
            $("#popBox-login-button").show();
            $("#popBox-verifyCode-tr").hide();
            //
            $("#verifyCode-error-message").empty().hide();
            $("#loginCity-tr").hide();
            $("#loginWay .login-way-item").removeClass("login-way-item-current");
            $("#loginTypeBox .label").removeClass("selected").hide();;
            $("#loginTypeBox").find("label[index=1]").addClass("selected").show();
            $("#loginTil").html("使用手机号码登录");
            $(".login-phone-way").find("input[name=phone-login]").attr("checked",false).eq(0).attr("checked",true);
            $("#loginSwitchPhone").hide();
            $("#loginSwitchOther").show();
            $("#loginPhoneType1").show();
            $("#loginPhoneType2").show();
            //
            if (loginComponent.isNeedVerifyCode) {
                $("#popBox-verifyCode-idType").show();
            } else {
                $("#popBox-verifyCode-idType").hide();
            }
            //20131010 end
            $("#smsSendMessage").hide();
        }
        if (t == 2) {
            $("#login_switch").val('2');
            ty.html("短信密码");
            l1.hide();
            $("#loginForm-link-word").hide();
            $("#savePassword").hide();
            $("#loginType").hide();
            $("#loginType").val(1);
            $("#loginType-tr").hide();
            this.passwordType = 2;
            //20131010 begin
            l2.hide();
            $("#popBox-nextStep-button").show();
            $("#popBox-login-button").hide();
            $("#loginPwd-tr").hide();
            $("#popBox-verifyCode-idType").show();

            $("#popBox-verifyCode-tr").show();
            $("#verifyCode-error-message").empty().hide();
            //
            $("#loginCity-tr").hide();
            $("#loginWay .login-way-item").removeClass("login-way-item-current");
            $("#loginTypeBox .label").removeClass("selected").hide();;
            $("#loginTypeBox").find("label[index=1]").addClass("selected").show();
            $("#loginTil").html("使用手机号码登录");
            $(".login-phone-way").find("input[name=phone-login]").attr("checked",false).eq(1).attr("checked",true);
            $("#loginSwitchPhone").hide();
            $("#loginSwitchOther").show();
            //

            loginComponent.getVerifyCode();
            //20131010 end
        }
        if (t == 3) {
            $("#login_switch").val('1');
            ty.html("服务密码");
            l2.hide();
            l1.hide();
            $("#loginForm-link-word").show();
            $("#savePassword").hide();
            $("#loginType").show();
            $("#loginType-tr").show();
            this.passwordType = 1;
            //20131010 begin
            $("#verifyCode-error-message").empty().hide();
            $("#loginPwd-tr").show();
            $("#smsVerifyCodeSendOver").hide();
            $("#popBox-nextStep-button").hide();
            $("#popBox-login-button").show();
            if (loginComponent.isNeedVerifyCode) {
                $("#popBox-verifyCode-idType").show();
            } else {
                $("#popBox-verifyCode-idType").hide();
            }
            //20131010 end
            $("#smsSendMessage").hide();
            $("#loginSwitchPhone").show();
            $("#loginSwitchOther").hide();
            $("#loginPhoneType1").hide();
            $("#loginPhoneType2").hide();
        }
        $("#userPassword").val("");
        $("#number-error-message").empty().hide();
        $("#password-error-message").empty().hide();
    },

    // 密码类型切换
    popLogin_psdType_input2: function (t) {
        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        var ty = $("#popBox-userLogin-pswType");
        var l1 = $("#loginForm-link-password-1");
        var l2 = $("#loginForm-link-password-2");
        if (t == 1) {
            $("#login_switch").val('1');
            ty.html("服务密码");
            l2.hide();
            l1.show();
            $("#loginForm-link-word").hide();
            $("#savePassword").show();
            $("#loginType").show();
            $("#loginType-tr").show();
            this.passwordType = 1;
            //20131010 begin
            $("#loginPwd-tr").show();
            $("#smsVerifyCodeSendOver").hide();
            $("#popBox-nextStep-button").hide();
            $("#popBox-login-button").show();
            //
            $("#verifyCode-error-message").empty().hide();
            $("#loginCity-tr").hide();
            $("#loginWay .login-way-item").removeClass("login-way-item-current");
            $("#loginTypeBox .label").removeClass("selected").hide();;
            $("#loginTypeBox").find("label[index=1]").addClass("selected").show();
            $("#loginTil").html("使用手机号码登录");
            $(".login-phone-way").find("input[name=phone-login]").attr("checked",false).eq(0).attr("checked",true);
            $("#loginSwitchPhone").hide();
            $("#loginSwitchOther").show();
            $("#loginPhoneType1").show();
            $("#loginPhoneType2").show();
            //
            if (loginComponent.isNeedVerifyCode) {
                $("#popBox-verifyCode-idType").show();
            } else {
                $("#popBox-verifyCode-idType").hide();
            }
            //20131010 end
            $("#smsSendMessage").hide();
        }
        if (t == 2) {
            $("#login_switch").val('2');
            ty.html("短信密码");
            l1.hide();
            $("#loginForm-link-word").hide();
            $("#savePassword").hide();
            $("#loginType").hide();
            $("#loginType-tr").hide();
            this.passwordType = 2;
            //20131010 begin
            l2.hide();
            $("#popBox-nextStep-button").show();
            $("#popBox-login-button").hide();
            $("#loginPwd-tr").hide();
            $("#popBox-verifyCode-idType").show();
            $("#popBox-verifyCode-tr").show();
            $("#verifyCodeDiv").show();
            $("#verifyCode-error-message").empty().hide();
            //
            $("#verifyCode-error-message").empty().hide();
            $("#loginCity-tr").hide();
            $("#loginWay .login-way-item").removeClass("login-way-item-current");
            $("#loginTypeBox .label").removeClass("selected").hide();;
            $("#loginTypeBox").find("label[index=1]").addClass("selected").show();
            $("#loginTil").html("使用手机号码登录");
            $(".login-phone-way").find("input[name=phone-login]").attr("checked",false).eq(1).attr("checked",true);
            $("#loginSwitchPhone").hide();
            $("#loginSwitchOther").show();
            //
            loginComponent.getVerifyCode();
            //20131010 end
        }
        $("#userPassword").val("");
        $("#userPassword").css("border", "1px solid #FF0000");
        $("#userPassword")[0].focus();
        $("#number-error-message").empty().hide();
        $("#password-error-message").empty().hide();
    },

    // http协议登录前校验
    loginPrepare: function () {
        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        // 手机号码
        var mobile = $("#userNumber").val();
        // 服务密码
        var password = $("#userPassword").val();
        // 账号类型
        //var loginType = $("#loginType").val();
        var loginType = $("#loginTypeBox").find(".selected").attr("index");
        // 验证码
        var verifyCode = $("#verifyCode").val();

        var checkResult = false;

        if (!mobile) {
            $("#number-error-message").html("请输入手机号码").show();
            return;
        }

        if (!password) {
            $("#password-error-message").html("请输入密码").show();
            return;
        }

        if (this.isNeedVerifyCode && !verifyCode) {
            $("#verifyCode-error-message").html("请输入验证码").show();
            return;
        }

        /*
        if ($("#number-error-message").html() || $("#password-error-message").html() || $("#verifyCode-error-message").html()) {
            return;
        }
        */

        if (loginType == '1' && this.passwordType == '1' && mobile && password && isSimplePwd(mobile, password)) {
            var errorMsg = "对不起，您输入的密码过于简单，为保障您的账户安全，请进行”<a style=\"color:red;\" href=\"http://service.js.10086.cn/my/MY_MMSZ.html?operNum=2&t=1494578180264#home\">密码重置</a>“后再次登录。";
            $("#userLogin-error-result").html(errorMsg).show();

            $("#userLogin-error-result-div").show();
            return;
        } else if (loginType == '1' && this.passwordType == '1' && isSimplePwdCanLogin(mobile, password)) {
        }


        $("#popBox-login-N-buttion").attr("class", "btnGray-s1").attr("disabled", true).val("登录中...");

        $("#password-error-message").empty().hide();

        // 登录页面与服务密码确认页面标志位
        var isSavePasswordVal_N = $("#isSavePasswordVal_N").val();
        // 2：https
        if (isSavePasswordVal_N == '1') {
            this.loginHttps();
        }
        else {
            this.login();
        }
    },

    // 短信密码登陆的验证码校验
    loginNextStep: function () {
        $("#userLogin-error-result").empty().hide();
        $("#userLogin-error-result-div").hide();
        // 手机号码
        var mobile = $("#userNumber").val();

        if (!mobile) {
            $("#number-error-message").html("请输入手机号码").show();
            return;
        }

        if (!chkMobileNumber(mobile)) {
            $("#number-error-message").html("请输入正确手机号码").show();
            return;
        }
        // 验证码
        var verifyCode = $("#verifyCode").val();

        if (!verifyCode) {
            $("#verifyCode-error-message").html("请输入验证码").show();
            return;
        }

        $.busiReq({
            data: {
                "reqUrl": "SMSLoginVerifyCode",
                "busiNum": "LOGIN",
                "mobile": mobile,
                "verifyCode": verifyCode
            },
            success: function (data) {
                var h = $(document).height();
                $("#popMask").show().height(h);
                var result = eval("(" + data + ")");
                if (result && result.resultCode == "0") {
                    $("#loginPwd-tr").show();
                    $("#popBox-verifyCode-idType").hide();
                    $("#popBox-verifyCode-tr").hide();
                    $("#popBox-nextStep-button").hide();
                    $("#popBox-login-button").show();
                    loginComponent.sendSms();
                } else {
                    $("#verifyCode-error-message").html("请输入正确的验证码").show();
                    return;
                }
            }
        });
    },

    // 发送短信验证码
    sendSms: function () {
        // 手机号码
        var userNumber = $("#userNumber").val();
        if (userNumber && chkMobileNumber(userNumber)) {
            $.busiReq({
                data: {
                    "reqUrl": "checkLimitValue",
                    "busiNum": "LOGIN",
                    "mobile": userNumber,
                    "smsType": "1"
                },
                success: function (data) {
                    var result = eval("(" + data + ")");
                    if (result && result.resultCode == "0") {
                        loginComponent.sendSmsSubmit();

                    } else {
                        var errorMsg;
                        if (result.systemCode == "-200086") {
                            errorMsg = "当天短信密码已达上限!";
                        } else if (result.systemCode == "-200087") {
                            errorMsg = "动态密码已发送到您的手机，1分钟后再重新获取!";
                        } else {
                            errorMsg = result.resultMsg;
                        }
                        $("#userLogin-error-result").html(errorMsg).show();
                        $("#userLogin-error-result-div").show();
                    }
                }

            });
        } else {
            $("#password-error-message").html("请输入手机号码").show();
        }

    },

    sendSmsSubmit: function () {
        // 手机号码
        var userNumber = $("#userNumber").val();
        $.ajax({
            url: GLOBAL_INFO.SMS_REQ_URI,
            type: 'POST',
            data: {
                "busiNum": "LOGIN",
                "mobile": userNumber,
                "smsType": "1"
            },
            timeout: 10000,
            success: function (ret) {
                var result = eval("(" + ret + ")");
                loginComponent.showSmsSendResult(result);
            }
        });
    },

    // 发送结果处理
    showSmsSendResult: function (data) {
        if (data && data.resultCode == '0') {
            //$("#userLogin-error-result").html("短信发送成功!").show();
            $("#password-error-message").empty().hide();
            $("#userLogin-error-result").empty().hide();
            $("#userLogin-error-result-div").hide();
            $("#loginForm-link-password-2").hide();
            this.countTime(60);
        } else {
            var errorMessage = "短信密码发送失败，请稍后再试！";
            if (data.logicCode == '-3005') {
                errorMessage = "您的手机号码不存在，请确认后登录!";
            } else if (data.logicCode == '-4004') {
                errorMessage = "您的IP地址已被列入黑名单，无法登录!";
            } else if (data.logicCode == '-4005') {
                errorMessage = "您的手机号码已被列入黑名单，无法登录!";
            } else if (data.logicCode == '-4027') {
                errorMessage = "您的短信密码在有效期范围内输入错误超过3次，请稍后重新获取!";
            } else if (data.logicCode == '-4028') {
                errorMessage = "短信密码已发送到您的手机，请稍后重新获取!";
            } else if (data.logicCode == '-4029') {
                errorMessage = "您的手机号码已停机状态，请恢复后登录!";
            } else if (data.logicCode == '-4030') {
                errorMessage = "短信密码仅支持江苏移动用户!";
            } else if (data.logicCode == '-4050') {
                errorMessage = "动态密码已发送到您的手机，1分钟后再重新获取!";
            } else if (data.logicCode == '-4051') {
                errorMessage = "登陆用户过多，请稍后重试!";
            }
            $("#userLogin-error-result").html(errorMessage).show();
            $("#userLogin-error-result-div").show();
        }
    },
    countTime: function (count) {
        $("#smsVerifyCodeSendOver").show();
//        $("#smsSendMessage").show();
        $("#smsSendOverCounter").html(count).show();
        if (this.counterId) {
            clearInterval(this.counterId);
        }
        this.count = count;
        this.counterId = window.setInterval(function () {
            loginComponent.count--;
            $("#smsSendOverCounter").html(loginComponent.count);
            if (loginComponent.count < 1) {
                if (this.counterId) {
                    window.clearInterval(this.counterId);
                    if (this.passwordType == '1') {
                        $("#loginForm-link-password-1").show();
                    } else {
                        $("#loginForm-link-password-2").show();
                    }

                    $("#smsVerifyCodeSendOver").hide();
                    $("#smsSendMessage").hide();
                    $("#smsSendOverCounter").hide();
                }
            }
        }.bind(this), 1000);
    },

    logout: function () {
        //清除TOP位置用户号码cookie
        setCookie("topUserMobile","",15 * 24 * 60 * 60 * 1000);
        $.busiReq({
            "data": {
                "reqUrl": "logout",
                "mobile": loginComponent.userInfo.userMobile
            },
            "success": function (result) {
                var webtransId = BmonPage.getTransientParameter('webtransId');
                if ("" != webtransId && "undefined" != webtransId && webtransId != undefined) {
                    var busiNum = window.location.hash;
                    if (null != busiNum && '' != busiNum) {
                        busiNum = window.location.hash.substr(0, window.location.hash.indexOf('@'));
                    }
                    window.location.href = "http://service.js.10086.cn/index.jsp" + busiNum;
                } else {
                    window.location.reload(true);
                }

                var data = eval("(" + result + ")");
                if (data && data.resultCode == '0') {
                    if (data.resultObj) {
                        loginComponent.isNeedVerifyCode = data.resultObj.isNeedVerifyCode;
                        if (loginComponent.isNeedVerifyCode) {
                            $("#popBox-verifyCode-idType").show();
                        } else {
                            $("#popBox-verifyCode-idType").hide();
                        }
                    }
                    loginComponent.lastGetVerifyCodeTime = null;
                    loginComponent.initPage();

                    // 飞信退出
                    $("#fetionPreInit_Component").remove();
                    $("#fetionAjax_Component").remove();
                    if ($(".fxbar_wrap") != null && $(".fxbar_wrap") != undefined) {
                        $(".fxbar_wrap").hide();
                    }
                }
            }});
    },
    getCookie: function (cookieKey) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            return unescape(arr[2]);
        }
        return null;
    },
    setCookie: function (name, value, expire) {
        var exp = new Date();
        exp.setTime(exp.getTime() + expire);
        document.cookie = name + " = " + escape(value) + ";expires=" + exp.toGMTString()+";path=/";
    },
    showLoginDialog:function(){//显示提示框
        var tips = "想看我？先去登录吧！";
        commonFn.showPopup("提示",$("#popup-text-box"));
        $("#popup-text-box p:first").text(tips);
    },
    closeDialog : function(){//关闭提示框
        //弹出层开始
        $closePopup = $(".mod-popup .close-popup");
        commonFn.closePopup();
    },
    focusText : function(){//光标移动至手机号码框
        $closePopup = $(".mod-popup .close-popup");
        commonFn.closePopup();
        $("#userNumber").focus();
        this.setCookie("yjcxFlag", 2, 15*24*60*60*1000);
    }
});






/**
 * 校验是否为移动号码
 * @param {Object} value
 */
function chkMobileNumber(value) {
    var mobile13 = /^13[4-9]\d{8}$/;
    var mobile15 = /^15[012789]\d{8}$/;
    var mobile14 = /^14[7]\d{8}$/;
    var mobile17 = /^17[8]\d{8}$/;	//新增178号段
    var mobile18 = /^18[23478]\d{8}$/;
    return (mobile13.test(value) || mobile15.test(value) || mobile14.test(value) || mobile17.test(value) || mobile18.test(value));
}
/**
 * 校验密码是否为6位数字
 * @param {Object} value
 */
function chkUserPwd(value) {
    var pattern = /^([0-9]){6}/;
    return pattern.test(value);
}
/**
 * 校验验证码是否为四位数字和字符串混合
 * @param {Object} value
 */
function chkVerifyCode(value) {
    var pattern = /[0-9a-zA-Z]{4}/;
    return pattern.test(value);
}
/**
 * 校验是否为简单密码
 * @param {Object} userNumber
 * @param {Object} value
 */
function isSimplePwd(userNumber, value) {
    return ((/^(\d)\1{5}/.test(value)) || (userNumber.indexOf(value) >= 0) ||
        ((value.charCodeAt(0) + 1 == value.charCodeAt(1)) && (value.charCodeAt(1) + 1 == value.charCodeAt(2)) &&
            (value.charCodeAt(2) + 1 == value.charCodeAt(3)) &&
            (value.charCodeAt(3) + 1 == value.charCodeAt(4)) &&
            (value.charCodeAt(4) + 1 == value.charCodeAt(5))) ||
        ((value.charCodeAt(0) - 1 == value.charCodeAt(1)) && (value.charCodeAt(1) - 1 == value.charCodeAt(2)) &&
            (value.charCodeAt(2) - 1 == value.charCodeAt(3)) &&
            (value.charCodeAt(3) - 1 == value.charCodeAt(4)) &&
            (value.charCodeAt(4) - 1 == value.charCodeAt(5))));
}
/**
 * 连续升序（除123456）或者降序或者手机号码段，可以登录，弹出提示框，直接跳转到密码修改业务
 * @param {Object} userNumber
 * @param {Object} value
 */
function isSimplePwdCanLogin(userNumber, value) {
    return value != 123456 && ((/^(\d)\1{5}/.test(value)) || (userNumber.indexOf(value) >= 0) ||
        ((value.charCodeAt(0) + 1 == value.charCodeAt(1)) && (value.charCodeAt(1) + 1 == value.charCodeAt(2)) &&
            (value.charCodeAt(2) + 1 == value.charCodeAt(3)) &&
            (value.charCodeAt(3) + 1 == value.charCodeAt(4)) &&
            (value.charCodeAt(4) + 1 == value.charCodeAt(5))) ||
        ((value.charCodeAt(0) - 1 == value.charCodeAt(1)) && (value.charCodeAt(1) - 1 == value.charCodeAt(2)) &&
            (value.charCodeAt(2) - 1 == value.charCodeAt(3)) &&
            (value.charCodeAt(3) - 1 == value.charCodeAt(4)) &&
            (value.charCodeAt(4) - 1 == value.charCodeAt(5))) ||
        isRule1(value) ||
        isRule2(value) ||
        isRule3(value)
    );
}

//连续三个数字重复（如111222）
function isRule1(value) {
    return /^(\d)\1{2}(\d)\2{2}$/.test(value);
}

//连续三个数字重复（如123123）
function isRule2(value) {
    //return ;
    return value.charCodeAt(0) + 1 == value.charCodeAt(1) && value.charCodeAt(1) + 1 == value.charCodeAt(2) &&
        value.charCodeAt(3) == value.charCodeAt(0) && value.charCodeAt(3) + 1 == value.charCodeAt(4) &&
        value.charCodeAt(4) + 1 == value.charCodeAt(5);
}
//连续三位数重复（正序+倒序）（如123321；或者321123）
function isRule3(value) {
    //return ;
    return  (value.charCodeAt(0) + 1 == value.charCodeAt(1) &&
        value.charCodeAt(1) + 1 == value.charCodeAt(2) &&
        value.charCodeAt(2) == value.charCodeAt(3) &&
        value.charCodeAt(3) - 1 == value.charCodeAt(4) &&
        value.charCodeAt(4) - 1 == value.charCodeAt(5) ) ||
        (value.charCodeAt(0) - 1 == value.charCodeAt(1) &&
            value.charCodeAt(1) - 1 == value.charCodeAt(2) &&
            value.charCodeAt(2) == value.charCodeAt(3) &&
            value.charCodeAt(3) + 1 == value.charCodeAt(4) &&
            value.charCodeAt(4) + 1 == value.charCodeAt(5));
}
/**
 * 验证宽带是否正确
 */
function checkNetNumber(number) {
    return /[0-9A-Za-z_]*/.test(number);
}
/**
 * 校验固定电话号码
 * @param {Object} number
 */
function checkFixedPhoneNumber(number) {
    if (number.length == 7 || number.length == 8) {
        var chk0 = /^[0-9]*$/;
        return chk0.test(number);
    }
    return false;
}
/**
 * 异网号码校验
 */
function chkOtherNetMobileNumber(value) {
    //电信号段
    var mobile_1 = /^15[3]\d{8}$/;
    var mobile_2 = /^18[019]\d{8}$/;
    var mobile_3 = /^13[3]\d{8}$/;

    //联通号段
    var mobile_6 = /^13[012]\d{8}$/;
    var mobile_7 = /^15[56]\d{8}$/;
    var mobile_8 = /^14[5]\d{8}$/;
    var mobile_9 = /^18[56]\d{8}$/;
    return (mobile_1.test(value) || mobile_2.test(value) || mobile_3.test(value) || mobile_8.test(value) || mobile_9.test(value) || mobile_6.test(value) || mobile_7.test(value));
}

function encryptByDES(message, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

function mobileNumberFilter(o) {
    var o = $(o);
    var value=o.val().replace(/[^\d]/g,'');

    o.val(value);
    var length = o.val().length;
    var box = $('.remember_number_info');
    var mem = $('#caid').find('li').length;
    var bum = 0;
    var listName=getCookie("loginMobileList");
    if(null != listName && "" != listName){
        var listNames=listName.split(",");
        if(listName !=null && listName !=""){
            var htmlstr="";
            for(var i=0;i<listNames.length;i++){
                if(listNames[i].indexOf(value)!=-1){
                    htmlstr +="<li class=''><span class='del_number' style='display: none;'></span><em>"+listNames[i]+"</em></li>";
                    bum++;
                }
            }
            if(bum >0){
                htmlstr +='<p class="deleteAllNumber"><a class="deleteAllNumbers" href="javascript:">全部删除</a></p>';
            }
            $("#caid").html(htmlstr);
            if(bum >5){
                $('.remember_number_info').css({'height':160,'overflow':'hidden','overflow-y':'scroll'});
            }
        }
    }else{
        $(".remember_number").hide();
    }
    //box[(mem > 0 && length <= 10 && length >=1 && bum>0) ? 'show' : 'hide']();

    if(mem > 0 && length <= 10 && length >=1 && bum>0){
        $('.remember_number').data('clicked', !1);
        $('.remember_number').click();
    }else{
        $('.remember_number').data('clicked', !0);
        $('.remember_number').click();
    }

    $('.remember_number_info li').click(function (){
        $(this).parents('.form-box').find('.user-name').val($(this).text());
        $(this).parents('.remember_number_info').hide();
        $(this).parents('.form-box').find('.remember_number img').attr('src','module/login/arrowUp.png');
        $('.remember_number').removeClass('ck');
        $("#number-error-message").hide();
    });


    $('.remember_number_info li').hover(function()
    {
        $(this).addClass('cur');
        $(this).find('.del_number').show();
    },function()
    {
        $(this).removeClass('cur');
        $(this).find('.del_number').hide();
    });

    $(".del_number").on('click',function (e){
        e.stopPropagation();
        $(this).parent().remove();
        var listName=getCookie("loginMobileList");
        if(null != listName && "" != listName){
            var listNames=listName.split(",");
            var mobileList = "";
            //重新拼接cookie值
            for(var i=0;i<listNames.length;i++){
                if(listNames[i] == $(this).siblings('em').html()){
                    mobileList += "";
                }else{
                    mobileList += listNames[i] + ",";
                }
            }
            //如果已移除最后一个号码，则不显示三角
            if("" == mobileList){
                $(".remember_number").hide();
                setCookie("loginMobileList","");
            }else{
                //移除最后一个逗号
                setCookie("loginMobileList",mobileList.substring(0,mobileList.length-1),30*24*60*60*1000);
            }
        }
    });

    $('body').on('click', '.deleteAllNumbers', function(){
        setCookie("loginMobileList",'');
        $('#caid').empty();
        $('.remember_number').hide();
        $('.remember_number_info').hide();
    });


}



