$(document).ready(function(){
    var link = window.location.href;
    //手机访问web页面
//	var iswap = mobile_device_detect(link);
//	if(iswap){
//		window.location.href = "http://wap.js.10086.cn/index.html";
//		return;
//	}else{
//
//	}
    if(link.indexOf("service.js.10086.cn/2014") != -1 ) {
        link = link.replace("service.js.10086.cn/2014", "service.js.10086.cn");
        window.location.href = link;
        return;
    }
    if(link.indexOf("service.js.10086.cn/WSCZYL.html") != -1 && link.indexOf("money") == -1){
        var jtMobile = $("#jtMobile").html();
        var jtMoney = $("#jtMoney").html();
        var isNeedAdd = "0";
        if((jtMobile != null && jtMobile != "" && jtMobile != "null") && (jtMoney != null && jtMoney != "" && jtMoney != "null")) {
            isNeedAdd = "1";
        }
        if(isNeedAdd == "1") {
            link += "&mobile=" + jtMobile + "&money=" + jtMoney;
            window.location.href = link;
            return;
        }
    }
    if(link.indexOf("index.jsp#") != -1) {
        link = link.replace("index.jsp#", "#");
    }
    if(link.indexOf("#weixin") != -1) {
        link = link.replace("#weixin", "");
        window.location.href = link;
        return;
    }
    if(link.indexOf("#") != -1 && link.indexOf(".jsp") == -1 && link.indexOf("service.js.10086.cn/#home") == -1 && link.indexOf("my") == -1) {
        if(link.indexOf("ZDCX") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_ZDCX.html";
            return;
        } else if(link.indexOf("QDCX") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_QDCXNEW.html";
            return;
        } else if(link.indexOf("TXL") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_TXL.html";
            return;
        } else if(link.indexOf("GRZLGL_PUKMCK") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_GRZLGL.html";
            return;
        } else if(link.indexOf("GRZLGL_GRZL") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_GRZLGL.html";
            return;
        } else if(link.indexOf("GRZLGL") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_GRZLGL.html";
            return;
        } else if(link.indexOf("DXYZMSZ") != -1) {
            window.location.href = "http://service.js.10086.cn/my/MY_DXYZMSZ.html";
            return;
        } else if(link.indexOf("home") != -1) {
            window.location.href = "http://service.js.10086.cn/index.html";
            return;
        }
        else if(link.indexOf("http://service.js.10086.cn/act_js/") !=-1)
        {
            window.location.href =window.location.href ;
            return;
        }else
        {
            link = link.substring(link.indexOf("#") + 1, link.length);
            window.location.href = "http://service.js.10086.cn/2014/" + link + ".html";
            return
        }
    }
    if(link.indexOf("pptcbg") != -1 && link.indexOf("indexs") == -1) {
        window.location.href = "http://service.js.10086.cn/PPTCBG.html";
        return;
    }
    if(link.indexOf("wscz") != -1 && link.indexOf("indexs") == -1) {
        link = link.substring(link.indexOf("#") + 1, link.length);
        window.location.href = "http://service.js.10086.cn/2014/" + link + ".html";
        return
    }
    if(link.indexOf("wlanhandle") != -1 && link.indexOf("indexs") == -1) {
        window.location.href = "http://service.js.10086.cn/WLANHANDLENEW.html";
        return
    }
    /**
     if(link.indexOf(".html") != -1  && link.indexOf("login.html") == -1 && link.indexOf("BUSIRESULT.html") == -1) {
		if(link.indexOf("?") != -1 && link.indexOf("t=") != -1){
			return;
		}else if(link.indexOf("?") != -1 && link.indexOf("t=") == -1){
			link = link + "&t="+new Date().getTime();
			window.location.href = link;
			return;
		}else{
			window.location.href = link + "?t="+new Date().getTime();
			return;
		}
	}
     */

});

//手机访问web页面
function mobile_device_detect(url){
    //判断地址中有无不跳转参数:有：直接进入WEB页面
    var isWap = false;
    if(url.indexOf("param=wap") != -1){
        //window.location=url;
        return isWap;
    }else{
        var thisOS=navigator.platform;
        var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
        for(var i=0;i<os.length;i++){
            if(thisOS.match(os[i])){
                //window.location=url;
                isWap = true;
            }
        }
        //因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
        if(navigator.platform.indexOf('iPad') != -1){
            //window.location=url;
            isWap = true;
        }
        //做这一部分是因为Android手机的内核也是Linux
        //但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
        var check = navigator.appVersion;
        if( check.match(/linux/i) ){
            //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
            if(check.match(/mobile/i) || check.match(/X11/i)){
                //window.location=url;
                isWap = true;
            }
        }
        //非手机系统则进入网厅地址
        if(!isWap){
            //window.location=url;
        }
        return isWap;
        //类in_array函数
        Array.prototype.in_array = function(e){
            for(i=0;i<this.length;i++){
                if(this[i] == e){
                    return true;
                }
            }
            return false;
        }
    }
}

function log(message) {
    if (window.console && typeof(console.log) == "function")
        console.log(message); // firebug, safari
    else if (window.opera && typeof(opera.postError) == "function")
        opera.postError(message);
}

var GLOBAL_INFO = {
    URL_PREFIX: '',
    BUSINESS_REQ_URI: './actionDispatcher.do',
    SMS_REQ_URI: './sms.do',//2014-11-7修改，临时解决服务器中，短信验证码无法下发的问题；
    DEFAULT_ANCHOR: '#home',
    PAGE_CONTAINER: '__mainPage',
    LOAD_PAGE_FOLDER: '/pages/',
    PLACE_HOLDER_IMG: 'http://files01.js.10086.cn/obsh/images/white.gif',
    GROUP_MONEY: '免费',
    RESOURCE_TIMESTAMP: ''
};

var ResourceLoader =
    {
        asyncLoad: function (checkLoadedFun, callback1, callback2) {
            // 通过定时器检测资源是否加载成功
            var _load_timer1 = setInterval(function () {
                // 加载完成
                if (checkLoadedFun()) {
                    // 清除定时器
                    clearInterval(_load_timer1);
                    clearTimeout(_load_timer2);
                    callback1 && callback1();
                }
            }, 50);

            var _load_timer2 = setTimeout(function () {
                // 清除定时器
                clearInterval(_load_timer1);
                clearTimeout(_load_timer2);
                callback2 && callback2();
            }, 10000);
        },

        loadJS: function (jsURL, callback) {
            if (jsURL) {
                var scriptId = "dynamicJS_" + jsURL;
                //如果该JS文件已经加载过，直接调用回调函数后结束
                if (document.getElementById(scriptId) != null) {
                    //headTag.removeChild(oldScript);
                    callback && callback();
                    return;
                }
                var scriptTag = document.createElement("script");
                scriptTag.type = "text/javascript";
                scriptTag.id = scriptId;
                var headTag = document.getElementsByTagName("head")[0];
                scriptTag.src = jsURL + GLOBAL_INFO.RESOURCE_TIMESTAMP;
                headTag.appendChild(scriptTag);
                //IE
                if ($.browser.msie) {
                    scriptTag.onreadystatechange = function () {
                        if (scriptTag.readyState == 'loaded' || scriptTag.readyState == 'complete') {
                            callback && callback();
                        }
                    };
                }
                //OP/FF/Webkit(SF/CM)
                else {
                    scriptTag.onload = function () {
                        callback && callback();
                    };
                }
            }
            else {
                callback && callback();
            }
        },

        loadCSS: function (cssURL, callback) {
            if (cssURL) {
                var cssId = "dynamicCSS_" + cssURL;
                //如果该CSS文件已经加载过，直接调用回调函数后结束
                if (document.getElementById(cssId) != null) {
                    callback && callback();
                    return;
                }
                var headTag = document.getElementsByTagName("head")[0];
                var cssTag = document.createElement("link");
                cssTag.rel = "stylesheet";
                cssTag.type = "text/css";
                cssTag.id = cssId;
                cssTag.href = cssURL + GLOBAL_INFO.RESOURCE_TIMESTAMP;
                headTag.appendChild(cssTag);

                if (callback) {
                    //IE
                    if ($.browser.msie) {
                        cssTag.onreadystatechange = function () {
                            if (cssTag.readyState == 'loaded' || cssTag.readyState == 'complete') {
                                callback && callback();
                            }
                        };
                    }
                    //opera
                    else if ($.browser.opera) {
                        cssTag.onload = function () {
                            callback && callback();
                        };
                    }
                    //火狐和其它浏览器
                    else {
                        // 通过定时器检测css是否加载成功
                        this.asyncLoad(function () {
                            var loadComplete = false;
                            try {
                                var sheets = document.styleSheets;
                                for (var i = 0, j = sheets.length; i < j; i++) {
                                    var sheet = sheets[i];
                                    if (sheet.ownerNode.id == cssId) {
                                        sheet.cssRules;
                                        loadComplete = true;
                                        break;
                                    }
                                }
                            }
                            catch (e) {
                                // FF看到的可能的报错：
                                //本地：nsresult: "0x8053000f (NS_ERROR_DOM_INVALID_ACCESS_ERR)" ，因为没加载完成还不能读取，加载完毕就不会报错了
                                if (e.name && e.name == "NS_ERROR_DOM_SECURITY_ERR") {
                                    loadComplete = true;
                                }
                            }
                            return loadComplete;
                        }, callback);
                    }
                }
            }
            else {
                callback && callback();
            }
        }
    };

var Pagelet = function (data) {
    return {
        loadCss: function (callback) {
            if (data) {
                if (data.externalCSSURL) {
                    //ResourceLoader.loadCSS(data.externalCSSURL, callback);
                    ResourceLoader.loadCSS(data.externalCSSURL);
                    callback && callback();
                }
                else if (data.externalCSSURLs && data.externalCSSURLs.length > 0) {
                    for (var i = 0; i < data.externalCSSURLs.length; i++) {
                        ResourceLoader.loadCSS(data.externalCSSURLs[i]);
                    }
                    callback && callback();
                }
                else {
                    callback && callback();
                }
            }
        },
        loadJS: function (callback) {
            if (data) {
                if (data.externalJSURL) {
                    ResourceLoader.loadJS(data.externalJSURL, callback);
                }
                else if (data.externalJSURLs) {
                    var jsLoadArr = [];
                    for (var i = 0; i < data.externalJSURLs.length; i++) {
                        ResourceLoader.loadJS(data.externalJSURLs[i], function () {
                            jsLoadArr.push("0");
                        });
                    }
                    if (callback) {
                        ResourceLoader.asyncLoad(function () {
                            var loadComplete = false;
                            if (jsLoadArr.length >= data.externalJSURLs.length) {
                                loadComplete = true;
                            }
                            return loadComplete;
                        }, callback);
                    }
                }
                else {
                    callback && callback();
                }
            }

        },
        updateDOM: function (callback) {
            if (data) {
                var id = data.containerId;
                if (id) {
                    var element = $("#" + id);
                    var content = data.htmlContent;
                    if (element.length) {
                        if (content) {
                            element.html(content);
                        }
                        callback && callback();
                    }
                    else {
                        ResourceLoader.asyncLoad(function () {
                            var loadComplete = false;
                            var element = $("#" + id);
                            if (element.length) {
                                loadComplete = true;
                            }
                            return loadComplete;
                        }, callback);
                    }
                }
            }
        }
    };
};

Pagelet.getDefaultPageletData = function () {
    return {
        "id": "",
        "jsLoadOrder": "0",
        "resultCode": "0",
        "containerId": "",
        "htmlContent": "",
        "externalJSURL": "",
        "externalJSURLs": "",
        "externalCSSURL": "",
        "externalCSSURLs": ""
    };
};

var BigPipe = function () {
    var onPageletArrive = function (pageletData, processEndCallback) {
        BmonPage.changeCompSate(pageletData.id, 'loading');
        if (typeof(processEndCallback) != 'function') {
            processEndCallback = function () {
            };
        }
        if (pageletData && pageletData.resultCode == '0') {
            var pagelet = new Pagelet(pageletData);
            pagelet.loadCss(function () {
                var jsLoadOrder = pageletData.jsLoadOrder;
                if (jsLoadOrder && jsLoadOrder === "0") {
                    pagelet.updateDOM(function () {
                        pagelet.loadJS(function () {
                            BmonPage.changeCompSate(pageletData.id, 'loaded');
                        });
                    });
                }
                else {
                    pagelet.loadJS(function () {
                        pagelet.updateDOM(function () {
                            BmonPage.changeCompSate(pageletData.id, 'loaded');
                        });
                    });
                }
            });
        }
        else {
            alert('Paglet ' + pageletData.id + ' Error!');
        }
    };

    var pipeQueue = new Array();

    //将Pagelet加入到队列中，暂时不输出
    var registerPagelet = function (pageletData, renderSuccessCallBack) {
        if (pipeQueue == null) {
            pipeQueue = new Array();
        }
        pipeQueue.push(function () {
            onPageletArrive($.extend({}, Pagelet.getDefaultPageletData(), pageletData), function () {
                renderSuccessCallBack && renderSuccessCallBack();
            });
        });
    };

    var renderRegisterPagelets = function () {
        var queueLength = pipeQueue.length;
        for (var i = 0; i < queueLength; i++) {
            pipeQueue.shift()();
        }
    };

    var clearRegisterPagelets = function () {
        pipeQueue.length = 0;
    };

    return {
        renderPagelet: onPageletArrive,
        registerPagelet: registerPagelet,
        renderRegisterPagelets: renderRegisterPagelets,
        clearRegisterPagelets: clearRegisterPagelets
    };
}();

var BmonPipe = function () {
    var renderRegisterPageletsTimer = null;
    var renderMainPageFrame = function (frameData, callback) {
        BigPipe.clearRegisterPagelets();
        if (renderRegisterPageletsTimer != null) {
            clearInterval(renderRegisterPageletsTimer);
            renderRegisterPageletsTimer = null;
        }
        BigPipe.renderPagelet($.extend({}, Pagelet.getDefaultPageletData(), frameData), function () {
            if (renderRegisterPageletsTimer == null) {
                renderRegisterPageletsTimer = setInterval(function () {
                    BigPipe.renderRegisterPagelets();
                }, 500);
            }
            callback && callback();
        });
    };
    return {
        renderPagelet: BigPipe.renderPagelet,//立刻输出Pagelet
        registerPagelet: BigPipe.registerPagelet,//把Pagelet加入队列中暂时不输出
        renderMainPageFrame: renderMainPageFrame//输出中间页面框架内容
    };
}();

var BmonHistory = {
    history: null,
    init: function () {
        this.history = new Array();
    },
    saveHistory: function (hash, strContent) {
        this.history[hash] = strContent;
    },
    clear: function () {
        this.history = new Array();
    },
    getHistory: function (hash) {
        var strContent = this.history[hash];
        return strContent;
    }
};

var BmonPage = {
    history: BmonHistory,
    checkURLInterval: null,
    useHistory: false,
    cache: new Array(),
    transientParam: {},
    initState: false,
    currentHash: '',
    fullHash: '',
    pageInit: true,
    HOME_TITLE: '江苏移动_网上营业厅 流量加量不加价 话费流量疯狂送',
    bpeComponentMap: new Map(),
    PAGE_LOADING: 0,
    chargeData: null,
    loadCounter: null,
    surveyStatus: null,
    DialogCallback: function (type) {
        GlobalDialog.Dialog_callback(type);
    },

    showStepSuccessfulDialog: function (msg) {
        GlobalDialog.showStepResultDialog(msg, "0");
        var urlStr = window.location.href;
        var webtransId = "";
        var yxaId = "";
        if (urlStr.indexOf('@yxaId=') >= 0 && urlStr.indexOf('@webtransId=') >= 0) {
            yxaId = urlStr.substring(urlStr.indexOf('@yxaId=') + 7, urlStr.indexOf("@webtransId="));
            webtransId = urlStr.substring(urlStr.indexOf('@webtransId=') + 12);
        } else {
            yxaId = BmonPage.getTransientParameter('yxaId');
            webtransId = BmonPage.getTransientParameter('webtransId');
        }
        var busiNo = "";
        var userCity = TOUCHAPP.GETTOUCH.getCookie("city");
        if ("" != webtransId && "undefined" != webtransId && webtransId != undefined) {
            var busiNo = urlStr.substring(urlStr.indexOf("#") + 1, urlStr.indexOf("@"));
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.yxhd', webtransId, 'WT.city', userCity, 'WT.mobile', UserInfo.userMobile, 'WT.si_n', busiNo, 'WT.si_x', '99');
            }
        }

        if ("" != yxaId && "undefined" != yxaId && yxaId != undefined) {
            $.commonReq({
                data: {
                    "reqUrl": "touchLog",
                    "touchId": yxaId,
                    "touchType": "4"
                },
                success: function (result) {

                }
            });
        }
    },

    //分享抢30M流量的活动   caixiao  2014-7-16
    getchance: function () {
        $("#fxcgzq").hide();
        $("#fxcgqll").show();
        var ycywbh = $("#ycywbh").text();
        if ("GPRS" == ycywbh) {
            var job_name = "开通通用流量包";
        } else if ("GPRSDJB" == ycywbh) {
            var job_name = "开通流量加油包";
        } else if ("zxtc" == ycywbh) {
            var job_name = "办理自选套餐";
        } else if ("PPTCBG" == ycywbh) {
            var job_name = "办理飞享套餐";
        } else if ("PPTCBG2" == ycywbh) {
            var job_name = "办理全球通套餐";
        }
        $.busiReq({
            data: {
                "reqUrl": "FXQLL",
                "job_name": job_name
            },
            success: function (data) {
            }
        });
    },


    showStepFailureDialog: function (msg) {
        GlobalDialog.showStepResultDialog(msg, "1");
    },

    showSuccessfulDialog: function (msg) {
        GlobalDialog.showCommonDialog(msg, '0');
        var urlStr = window.location.href;
        var webtransId = "";
        var yxaId = "";
        if (urlStr.indexOf('@yxaId=') >= 0 && urlStr.indexOf('@webtransId=') >= 0) {
            yxaId = urlStr.substring(urlStr.indexOf('@yxaId=') + 7, urlStr.indexOf("@webtransId="));
            webtransId = urlStr.substring(urlStr.indexOf('@webtransId=') + 12);
        } else {
            yxaId = BmonPage.getTransientParameter('yxaId');
            webtransId = BmonPage.getTransientParameter('webtransId');
        }
        var busiNo = "";
        var userCity = TOUCHAPP.GETTOUCH.getCookie("city");
        if ("" != webtransId && "undefined" != webtransId && webtransId != undefined) {
            var busiNo = urlStr.substring(urlStr.indexOf("#") + 1, urlStr.indexOf("@"));
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.yxhd', webtransId, 'WT.city', userCity, 'WT.mobile', UserInfo.userMobile, 'WT.si_n', busiNo, 'WT.si_x', '99');
            }
        }

        if ("" != yxaId && "undefined" != yxaId && yxaId != undefined) {
            $.commonReq({
                data: {
                    "reqUrl": "touchLog",
                    "touchId": yxaId,
                    "touchType": "4"
                },
                success: function (result) {

                }
            });
        }
    },
    //精确营销展示反馈，在展示时调用。仅适用于IT精确营销
    sendMaketMsgOnShow: function(yxaId,type){
        //================ 发送请求到CRM  =================//
        if(""!=yxaId){
            $.commonReq({
                data: {
                    "reqUrl": "touchLog",
                    "touchId": yxaId,
                    "busiNum": "ITYXAN",
                    "touchType": type
                },
                success: function (result) {
                }
            });
        }
    },
    sendResultData : function (userseq, status, scene) {
        $.commonReq({
            data : {
                "reqUrl"  : "touchLog",
                "busiNum" :	"ITYXAN",
                "scene"   : scene,
                "userseq" : userseq,
                "status"  :	status
            },
            success: function (result) {

            }
        });
    },

    showFailureDialog: function (msg) {
        GlobalDialog.showCommonDialog(msg, '1');
    },

    showConfirmDialog: function (msg, dialogArgument, confirmMsg) {
        GlobalDialog.showCommonDialog(msg, '2', dialogArgument, confirmMsg);
    },

    showQueryErrorMsgDialog: function (msg) {
        $("#errorMsg_prompt").html(msg);
        $("#queryErrorMsg_Pop").show();
    },
    showQueryErrorMsgDialog2014New: function (msg) {
        $("#queryErrorMsg_Pop").html(msg);
        $("#queryErrorMsg_Pop").show();
    },

    //业务页面弹框
    showBusiActDiv: function (divFlag) {
        //登录后各页面大弹下线，不针对各个业务改js了
        divFlag = 0;

        var h = $(document).height();
        if (divFlag == 1) {
            var forwardBusiAct = getCookie("forwardBusiAct");
            if ("1" != forwardBusiAct) {
                $("#payMoneyForGPRS").css("z-index", 99999).show();
                $("#popMaskAct").show().height(h);
            }
        } else if (divFlag == 2) {
            var forwardBusiAct_up = getCookie("forwardBusiAct_up");
            if ("1" != forwardBusiAct_up) {
                $("#goUpForGPRS").css("z-index", 99999).show();
                $("#popMaskAct").show().height(h);
            }
        }

    },

    showLoginDialog: function (areaName) {
        // 登录插码
        if ("centerLogin" == areaName) {
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('DCS.dcsuri', '/nopv.gif', 'WT.nv', 'rightLoginBtn', 'WT.event', 'login');
            }
        } else {
            if (typeof(_tag) != "undefined") {
                _tag.dcsMultiTrack('WT.act', areaName, 'WT.event', 'logon', 'WT.log_rt', 'btClick');
            }
        }
        GlobalDialog.showLoginDialog();
    },

    // 首页登录
    showCommonLoginDialog: function (areaName) {
        // 登录插码
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack('WT.act', areaName, 'WT.event', 'logon', 'WT.log_rt', 'btClick');
        }
        GlobalDialog.showCommonLoginDialog();
    },

    showBusiFlashPicDialog: function (url, flg) {
        GlobalDialog.showFlashDialog(url, flg);
    },

    showLoadingDialog: function () {
        GlobalDialog.showModelDialog(GlobalDialog.LOADINGPOP_ID);
    },

    hideLoadingDialog: function () {
        GlobalDialog.closeModelDialog(GlobalDialog.LOADINGPOP_ID);
    },

    commonCallBack: function (result, pageletId) {
        this.initComponent(result, pageletId);
    },

    commonBusiCallBack: function (result, pageletId) {
        //判断返回JSON对象的错误码，统一错误码处理
        this.initComponent(result, pageletId, true);
    },

    initComponent: function (result, pageletId, isBusi) {
        var component = this.bpeComponentMap.get(pageletId);
        var href = window.location.href;
        if (href.indexOf("?") > 0) {
            href = href.substring(0, href.lastIndexOf("?"));
        }
        var busiNum = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("\."));

        var brandJbNum = loginComponent.userInfo.brandJbNum;//CompObshHeaderComponent.loginUserInfo.brandJbNum;
        //$.delay(800);
//        if (pageletId != "compObshHeader"){
//        	if (CompObshHeaderComponent ){
//        		brandJbNum = CompObshHeaderComponent.loginUserInfo.brandJbNum;
//        	}
//        }
        if ("QQT" == brandJbNum) {
            var brandName = "全球通";
        }
        if ("SZX" == brandJbNum) {
            var brandName = "神州行";
        }
        if ("DGDD" == brandJbNum) {
            var brandName = "动感地带";
        }
        if (brandName == "" || brandName == null || brandName == undefined) {
            brandName = "";
        }
        //TODO:此处为登录所用，当id为loginNew时设置state为loaded  xiaojianbin   2014-11-17 19:17:02  begin
        if(pageletId == "loginNew"){
            component.state = 'loaded';
        }
        //TODO:此处为登录所用，当id为loginNew时设置state为loaded  xiaojianbin   2014-11-17 19:17:02  end
        //if (component && (component.state == 'loaded' || component.state == 'inited')) {
        if (component) {
            if (isBusi) {
                BmonPage.hideLoadingDialog();
//                alert(component.name+result.resultCode == "1" && result.systemCode == "-200006");
                if (result && result.resultCode == "1" && result.systemCode == "-200007") {
                    window.location.href = "./BUSIRESULT.html?systemCode=-200007";
                    return;
                } else if (result && result.resultCode == "1" && result.systemCode == "-200006") {
//                	alert(component.name+"==="+result.resultCode+"==11="+result.systemCode);
//                    window.location.href = "./BUSIRESULT.html?busiNum=" + busiNum + "&brandJbNum=" + brandJbNum + "&systemCode=-200006";
//                    return;
                    if("KDMMXG" == busiNum  || "GRKDZDCX"== busiNum || "GRKDQDCX"== busiNum){
                        result.resultMsg = '对不起，您暂无法操作该业务，请使用宽带账号登录后办理。';
                    } else if("XDXMY" == busiNum){
                        //$("#errorMsg_prompt_after").hide();
                        //BmonPage.showQueryErrorMsgDialog2014New("您好！新定向漫游业务主要面向神州行和动感地带客户，为了帮您节省更多的漫游费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
                        $(".business-info-price").hide();
                        $(".business-info-category").hide();
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");

                    } else if("DXCT" == busiNum){
                        //$("#errorMsg_prompt_after").hide();
                        //BmonPage.showQueryErrorMsgDialog2014New("尊敬的"+brandName+"用户，您好！本业务暂不对您所属的品牌或地市开放，请<a style='color:#005BAF' href='./PERSON_BUSI.html'>返回</a>查看其它业务，给您带来的不便敬请谅解。");
//						BmonPage.showQueryErrorMsgDialog2014New("您好！定向长途业务主要面向神州行和动感地带客户，为了帮您节省更多的长途费用，建议您升级<a href='./pptcbg.html'>全球通套餐</a>。");
                        $(".business-info-price").hide();
                        $(".business-info-category").hide();
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    } else if("DGFCJQ" == busiNum){
//						alert("enter==brandJbNum=="+brandJbNum);
                        $(".business-info-price").hide();
                        $(".business-info-category").hide();
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");


//						if("QQT" == brandJbNum){
//							BmonPage.showQueryErrorMsgDialog2014New("您好！动感非常假期业务主要面向动感地带客户，为了帮您节省更多的费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
//						} else if("SZX" == brandJbNum){
//							BmonPage.showQueryErrorMsgDialog2014New("您好！动感非常假期业务主要面向动感地带客户，为了帮您节省更多的费用，建议您开通<a href='./LCYJ.html'>两城一家</a>业务。");
//						}
                    } else if("LCYJ" == busiNum){
                        //$("#errorMsg_prompt_after").hide();
                        $(".business-info-price").hide();
                        $(".business-info-category").hide();
                        if("QQT" == brandJbNum){
                            //$("#businessTransactArea").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        } else if("DGDD" == brandJbNum){
                            //$("#businessTransactArea").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                    } else if("SZ_LCYJ_SN" == busiNum){
//						$("#errorMsg_prompt_after").hide();
//						if("QQT" == brandJbNum){
//							BmonPage.showQueryErrorMsgDialog2014New("您好！苏州两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
//						} else if("DGDD" == brandJbNum){
//							BmonPage.showQueryErrorMsgDialog2014New("您好！苏州两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您开通<a href='./DGFCJQ.html'>动感非常假期</a>业务。");
//						}
                        $(".business-info-price").hide();
                        $(".business-info-category").hide();
                        if("QQT" == brandJbNum){
                            //$("#businessTransactArea").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        } else if("DGDD" == brandJbNum){
                            //$("#businessTransactArea").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                    }
                    else if("SNMYYHTC5Y"== busiNum){
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    }
                    else if("QLYYB"== busiNum){
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    }
                    else if("QQHMZHKT"== busiNum){
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    }
                    else if("GNMYYHTC"== busiNum){
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    }
                    else if("GNMYYHTCGNB"== busiNum){
                        BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                    }
                    //QQHMZHKT
                    else{
                        //BmonPage.showQueryErrorMsgDialog2014New("您当前没有权限浏览该业务!");
                        if("STK"==busiNum) {
                            if("QQT" == brandJbNum) {
                                BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日苏通卡业务停止推广，只提供该业务的关闭功能。");
                            } else {
                                BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日苏通卡业务停止推广，只提供该业务的关闭功能。");
                            }
                        } else {
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的"+brandName+"用户，您好！本业务暂不对您所属的品牌或地市开放，请<a style='color:#005BAF' href='./PERSON_BUSI.html'>返回</a>查看其它业务，给您带来的不便敬请谅解。");
                        }

                        if ("SNBJMFTC"==busiNum) {
                            if ("QQT" == brandJbNum) {
                                //$("#tb_busiall_new").hide();
                                BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日省内被叫免费套餐业务停止推广，只提供该业务的关闭功能。");
                            } else {
                                BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日省内被叫免费套餐业务停止推广，只提供该业务的关闭功能。");
                            }
                        }
                    }
//					return;
                } else if (result && result.resultCode == "1" && result.systemCode == "-200069") {
                    window.location.href = "./BUSIRESULT.html?systemCode=-200069";
                    return;
                }

            }
            component.init(result);
            this.changeCompSate(pageletId, 'inited');
        }
        else {
            ResourceLoader.asyncLoad(function () {
                var loadComplete = false;
                component = BmonPage.bpeComponentMap.get(pageletId);
                //if (component && (component.state == 'loaded' || component.state == 'inited')) {
                if (component ) {
                    loadComplete = true;
                }
                //alert("loadComplete=="+loadComplete);
                return loadComplete;
            }, function () {
                //alert("isBusi="+isBusi+"busiNum="+busiNum);
                if (isBusi) {
                    BmonPage.hideLoadingDialog();
                    if (result && result.resultCode == "1" && result.systemCode == "-200007") {
                        window.location.href = "./BUSIRESULT.html?systemCode=-200007";
                        return;
                    } else if (result && result.resultCode == "1" && result.systemCode == "-200006") {
//                        window.location.href = "./BUSIRESULT.html?busiNum=" + busiNum + "&brandJbNum=" + brandJbNum + "&systemCode=-200006";
//                        return;
                        if("KDMMXG" == busiNum || "GRKDZDCX"== busiNum || "GRKDQDCX"== busiNum ){
                            result.resultMsg = '对不起，您暂无法操作该业务，请使用宽带账号登录后办理。';
                        } else 	if("XDXMY" == busiNum){
                            $("#errorMsg_prompt_after").hide();
                            $(".business-info-price").hide();
                            $(".business-info-category").hide();
                            //BmonPage.showQueryErrorMsgDialog2014New("您好！新定向漫游业务主要面向神州行和动感地带客户，为了帮您节省更多的漫游费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");

                        } else if("DXCT" == busiNum){
                            $("#errorMsg_prompt_after").hide();
                            $(".business-info-price").hide();
                            $(".business-info-category").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                            //BmonPage.showQueryErrorMsgDialog2014New("尊敬的"+brandName+"用户，您好！本业务暂不对您所属的品牌或地市开放，请<a style='color:#005BAF' href='./PERSON_BUSI.html'>返回</a>查看其它业务，给您带来的不便敬请谅解。");
                        } else if("DGFCJQ" == busiNum){
                            $(".business-info-price").hide();
                            $(".business-info-category").hide();
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");

//							$("#errorMsg_prompt_after").hide();
//							if("QQT" == brandJbNum){
//								BmonPage.showQueryErrorMsgDialog2014New("您好！动感非常假期业务主要面向动感地带客户，为了帮您节省更多的费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
//							} else if("SZX" == brandJbNum){
//								BmonPage.showQueryErrorMsgDialog2014New("您好！动感非常假期业务主要面向动感地带客户，为了帮您节省更多的费用，建议您开通<a href='./LCYJ.html'>两城一家</a>业务。");
//							}
                        } else if("LCYJ" == busiNum){
//							$("#errorMsg_prompt_after").hide();
//							if("QQT" == brandJbNum){
//								$("#businessTransactArea").hide();
//								BmonPage.showQueryErrorMsgDialog2014New("您好！两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
//							} else if("SZX" == brandJbNum){
//								$("#businessTransactArea").hide();
//								BmonPage.showQueryErrorMsgDialog2014New("您好！两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您开通<a href='./DGFCJQ.html'>动感非常假期</a>业务。");
//							}
                            $(".business-info-price").hide();
                            $(".business-info-category").hide();
                            if("QQT" == brandJbNum){
                                //$("#businessTransactArea").hide();
                                BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                            } else if("DGDD" == brandJbNum){
                                //$("#businessTransactArea").hide();
                                BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                            }
                        }
                        else if("SNMYYHTC5Y"== busiNum){
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                        else if("QLYYB"== busiNum){
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                        else if("QQHMZHKT"== busiNum){
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                        else if("GNMYYHTC"== busiNum){
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                        else if("GNMYYHTCGNB"== busiNum){
                            BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                        }
                        else if("SZ_LCYJ_SN" == busiNum){
                            $("#errorMsg_prompt_after").hide();
                            $(".business-info-price").hide();
                            $(".business-info-category").hide();
                            if("QQT" == brandJbNum){
                                //$("#businessTransactArea").hide();
                                BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                            } else if("DGDD" == brandJbNum){
                                //$("#businessTransactArea").hide();
                                BmonPage.showQueryErrorMsgDialog2014New("尊敬的用户，您好！本业务已停止销售，仅面向老用户提供关闭服务。如有疑问可联系在线客户或致电10086。");
                            }
//							if("QQT" == brandJbNum){
//								BmonPage.showQueryErrorMsgDialog2014New("您好！苏州两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您升级您的<a href='./PPTCBG.html'>全球通套餐</a>。");
//							} else if("SZX" == brandJbNum){
//								BmonPage.showQueryErrorMsgDialog2014New("您好！苏州两城一家业务主要面向神州行客户，为了帮您节省更多的费用，建议您开通<a href='./DGFCJQ.html'>动感非常假期</a>业务。");
//							}
                        } else{
                            //BmonPage.showQueryErrorMsgDialog2014New("您当前没有权限浏览该业务!");
                            if ("SNBJMFTC" == busiNum  || "STK" == busiNum) {
                                $("#tb_busiall_new").hide();
                                if ("SNBJMFTC" == busiNum) {
                                    BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日省内被叫免费套餐业务停止推广，只提供该业务的关闭功能。");
                                }else {
                                    BmonPage.showQueryErrorMsgDialog2014New("自2012年11月30日苏通卡业务停止推广，只提供该业务的关闭功能。");
                                }
                            }else{
                                BmonPage.showQueryErrorMsgDialog2014New("尊敬的"+brandName+"用户，您好！本业务暂不对您所属的品牌或地市开放，请<a style='color:#005BAF' href='./PERSON_BUSI.html'>返回</a>查看其它业务，给您带来的不便敬请谅解。");
                            }
                        }
//						return;
                    }
                }
                component.init(result);
                BmonPage.changeCompSate(pageletId, 'inited');
            }, function () {
                if (isBusi) {
                    BmonPage.hideLoadingDialog();
                }
            });
        }
    },

    homeClickLog: function (clickModel, clickCode) {
        $.commonReq({
            "data": {
                "reqUrl": "homeClick",
                "clickModel": clickModel,
                "clickCode": clickCode
            },
            "success": function (result) {

            }
        });
    },

    createComponent: function (id) {
        var component = new BpeComponent();
        this.registerComponent(id, component);
        return component;
    },

    registerComponent: function (id, component) {
        this.bpeComponentMap.put(id, component);
    },

    unregisterComponent: function (id) {
        this.bpeComponentMap.remove(id);
    },

    changeCompSate: function (id, state) {
        var component = this.bpeComponentMap.get(id);
        if (component) {
            component.setState(state);
        }
    },

    gotoPage: function (hash) {
        window.location.hash = hash;
    },

    cache: function (key, obj) {
        this.cache[key] = obj;
    },

    uncache: function (key) {
        this.cache[key] = null;
    },

    getCached: function (key) {
        return this.cache[key];
    },

    checkHash: function () {
        var hash = this.parseURL();
        var forceLoad = false;
        if (this.fullHash == null || this.fullHash == '') {
            this.fullHash = hash;
        }
        else if (this.fullHash != hash) {
            forceLoad = true;
            this.fullHash = hash;
            this.parseTransientParameter(hash);
        }
        if (hash.indexOf('@') > 0) {
            hash = hash.substring(0, hash.indexOf('@'));
        }
        if (this.currentHash != hash && hash != null && hash != '' || forceLoad) {
            // 快捷菜单
            if (quickMenuComponent && quickMenuComponent.reloaded) {
                quickMenuComponent.showData();
            }
            /*/ 人气榜
             if(hotRankComponent && hotRankComponent.reloaded){
             hotRankComponent.showData();
             }
             */
            var quickServiceHidePages = ['#home', '#lan_home', '#phone_home', '#agent_home', '#DLSMMXG', '#DLSJBXXCX', '#CZZZLSCX', '#DLSWJXZ', '#KDMMZZ', '#KDMMXG', '#GRKDZDCX', '#GRKDQDCX', '#GDDHQDCX', '#GDDHYECX', '#GDDHZDCX'];
            if ($.inArray(hash, quickServiceHidePages) != -1) {
                if ($("#Search_txtSearch").length) {
                    //$("#Search_txtSearch").val("请输入您要查询的内容").addClass("font-gray3");
                }
                //$("#leftQuickService").hide();
                $("#leftBusiHot").hide();
                //$("#historyService").hide();
            } else {
                //$("#leftQuickService").show();
                $("#leftBusiHot").show();
                //$("#historyService").show();
            }
            if (this.useHistory) {
                var hisContent = this.history.getHistory(hash);
                if (hisContent != null && hisContent != "") {
                    this.currentHash = hash;
                    this.showContent(hisContent);
                    return;
                }
            }
            this.init(hash, true);
        }
    },

    //参数形式: @paramName=;paramName1=;paramName2=;
    parseTransientParameter: function (hash) {
        var nIndex = hash.indexOf('@');
        if (nIndex > 0) {
            hash = hash.substring(nIndex + 1);
            var groupArr = hash.split(';');
            for (var i = 0; i < groupArr.length; i++) {
                var tempArr = groupArr[i].split('=');
                var key = tempArr[0];
                var val = tempArr[1];
                if (key != null && key != '') {
                    this.transientParam[key] = val;
                }
            }
        }
    },

    getTransientParameter: function (name) {
        return this.transientParam[name];
    },

    clearTransientParameter: function () {
        this.transientParam = {};
    },

    setTransientParameter: function (obj) {
        $.extend(this.transientParam, obj);
    },

    setTransientParameterValue: function (key, value) {
        this.transientParam[key] = value;
    },

    reload: function (flag) {
        this.init(this.currentHash, '', flag);
    },

    init: function (href, bCover, flag) {
        this.initState = true;
        var hash = null;
        if (href == null) {
            hash = this.parseURL();
            if(window.location.href.indexOf("#?") != -1 || window.location.href.indexOf("#&") != -1){
                window.location.href = window.location.href.substring(0,window.location.href.indexOf("#")) + window.location.href.substring(window.location.href.indexOf("#")+1,window.location.href.length);
            }
            this.fullHash = hash;
            if (hash.indexOf('@') > 0) {
                this.parseTransientParameter(hash);
                hash = hash.substring(0, hash.indexOf('@'));
            }
        }
        else {
            hash = href;
        }
        this.loadPage(hash, bCover, flag);
        if (this.checkURLInterval == null) {
            this.checkURLInterval = setInterval(function () {
                if (window.location.href.indexOf("wscz.jsp") != -1) {
                    document.title = "手机话费充值-江苏移动网上营业厅";
                } else if (window.location.href.indexOf("calculator.jsp") != -1) {
                } else {
//                    document.title = BmonPage.HOME_TITLE;
                }
                BmonPage.checkHash();
            }, 500);
        }
    },

    loadPage: function (hash, bCover, flag) {
        if (hash != null && hash != '') {
            if (hash == '#') {
                if (this.currentHash != null && this.currentHash != '') {
                    hash = this.currentHash;
                }
                else {
                    hash = '#home';
                }
                window.location.href = hash;
            }
            this.showLoadingDialog();
            if (!this.pageInit && bCover && !('false' == bCover) && '#404' != hash && '#403' != hash) {
                this.showLoadingDialog();
            }
            this.updateHistory();
            this.currentHash = hash;
            var pageName = this.hashToPage(hash);
            var mainPageIframe = $("#load_mainPage_iframe");
            if (mainPageIframe.length > 0) {
                var hash = this.parseURL();

                if (window.location.hash.indexOf("#home") != -1) {
                    //$("#top-slide").show();
                    $("#topdiv").show();
                    $("#menu-tips").hide();
                    //电梯导航
                    $("#right_shortcut").show(); //右侧快捷菜单
                    $("#bottom_shortcut").show(); //底部跨界菜单
                    $("#flArea-lift").show();
                    $("#lanborder_logo").hide();
                    $("#zxrw_logo").hide();
                    $("#user_survey").hide();  // 问卷调查|丁亮
                    $("#user_survey_zdcx").hide();
                    this.changeChargeData();
                    mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + "?r=" + Math.random());
                    var liftCookie = TOUCHAPP.GETTOUCH.getCookie("liftCookie");
                    if (liftCookie == null || "" == liftCookie) {
                        //$("#flArea-lift-guideRing").show();
                    }
                }
                else {
                    //世界杯通栏只在首屏展示
                    $("#right_shortcut").hide();
                    $("#bottom_shortcut").hide();
                    $("#fifa_ball_login").hide();
                    //$("#top-slide").hide();
                    $("#user_survey").hide();
                    $("#user_survey_zdcx").hide();
                    $("#flArea-lift-guideRing").hide();
                    $("#topdiv").hide();
                    //在线入网主动营销
                    $("#zxrw_logo").removeClass("main-online-show");
                    if (window.location.hash.indexOf("#ZXRW_BUYMOBILE_INFO") != -1) {
                        //1分30秒之后显示动态在线客服
                        setTimeout(this.showNewZxrwLogo, 90000);
                    } else if (window.location.hash.indexOf("#ZXRW_BUYMOBILE") != -1) {
                        //3分钟之后显示动态在线客服
                        setTimeout(this.showNewZxrwLogo, 180000);
                    }
                    //宽带现在营销
                    if (window.location.hash.indexOf("#WLANHANDLE") != -1) {
                        var isShowLanPic = getCookie("lanPic");
                        if (isShowLanPic) {
                            //若一天之内访问超3次，进入的时候直接显示动态主动营销
                            if (parseInt(isShowLanPic) >= 3) {
                                $("#lanborder_logo").addClass("main-online-show");
                            }
                            //若还未超过3次，则
                            else {
                                isShowLanPic = parseInt(isShowLanPic) + 1;
                                //1分30秒之后显示动态在线客服
                                setTimeout(this.showNewLanLogo, 90000);
                            }
                        } else {
                            isShowLanPic = "1";
                            setTimeout(this.showNewLanLogo, 90000);
                        }
                        setCookie("lanPic", isShowLanPic, 1 * 24 * 60 * 60 * 1000);
                    }

                    if (window.location.hash.indexOf("#ZXRW_BUYMOBILE") != -1) {
                        //电梯导航
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").show();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var menuTipsVisitedCookie = getCookie("menuTips_visited");
                        if (menuTipsVisitedCookie && menuTipsVisitedCookie == '1') {
                        } else {
                            $("#menu-tips").show();
                        }
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#WBLYHHD") != -1) {
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#ZXRW_BUYMOBILE_INFO") != -1 || window.location.hash.indexOf("#ZXRW_BUYMOBILE_INFO_NJDQ") != -1 || window.location.hash.indexOf("#XHRW_INFO") != -1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").show();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#WDSCJ") != -1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        if (tmpHash.indexOf("@") != -1) {
                            var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                            params = "?" + params.replace(/@/g, '&');
                            mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                        } else {
                            var menuTipsVisitedCookie = getCookie("menuTips_visited");
                            if (menuTipsVisitedCookie && menuTipsVisitedCookie == '1') {
                            } else {
                                $("#menu-tips").show();
                            }
                            this.changeChargeData();
                            mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + "?r=" + Math.random());
                        }
                    }
                    else if (window.location.hash.indexOf("#B0004") != -1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#JTVW") != -1 && flag != 1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#JTDHYY") != -1 && flag != 1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else if (window.location.hash.indexOf("#WLANHANDLE") != -1) {
                        $("#homeTouchDivAll").hide();
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").show();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        $("#user_survey_zdcx").hide();
                        var tmpHash = window.location.hash;
                        var params = tmpHash.substr(tmpHash.indexOf("@") + 1);
                        params = "?" + params.replace(/@/g, '&');
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + params + "&r=" + Math.random());
                    }
                    else {
                        if (window.location.hash.indexOf("#ZDCX") != -1) {
                        } else {
                            $("#user_survey_zdcx").hide();
                        }
                        $("#homeTouchDivAll").hide();
                        //电梯导航
                        $("#flArea-lift").hide();
                        $("#popShareMore").hide();
                        $("#guidePop").hide();
                        $("#lanborder_logo").hide();
                        $("#zxrw_logo").hide();
                        $("#popMaskAct").hide();
                        $("#homeDiv").hide();
                        var menuTipsVisitedCookie = getCookie("menuTips_visited");
                        if (menuTipsVisitedCookie && menuTipsVisitedCookie == '1') {
                        } else {
                            $("#menu-tips").show();
                        }
                        this.changeChargeData();
                        mainPageIframe.attr("src", GLOBAL_INFO.URL_PREFIX + GLOBAL_INFO.LOAD_PAGE_FOLDER + pageName + "?r=" + Math.random());
                    }
                }//////////////

                this.loadPageEnd();
            }
        } else {
            if (window.location.href.indexOf("zxtc.jsp") != -1 || window.location.href.indexOf("pptcbg.jsp") != -1) {
                window.location.reload();
            }
        }


        //
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
        if (CmWebtokenid && CmWebtokenid != $("#topUserNum").html()) {
            $("#topUserNum").html(CmWebtokenid);
            $("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
        } else if (loginComponent.userInfo.userMobile) {
            $("#topUserNum").html(loginComponent.userInfo.userMobile);
            $("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
        } else {
            $("#topUserNum").html("");
            $("#topIsLogin").html("<a href=\"javascript:BmonPage.showLoginDialog('topLogin');\" style=\"color:#e40077;\" class=\"carmine\" id=\"logout\">[登录]</a>");
        }
    },

    showNewZxrwLogo: function () {
        $("#zxrw_logo").addClass("main-online-show");
    },

    showNewLanLogo: function () {
        $("#lanborder_logo").addClass("main-online-show");
    },

    loadPageEnd: function () {
        // 非业务页面
        var noBusiPage = ['#home', '#agent_home', '#lan_home', '#phone_home', '#CX', '#SZ', '#404', '#MALL_MOBILE', '#PERSON_BUSI', '#FAMILY_BUSI', '#GROUP_BUSI', '#BUSILIST', '#promotions/android', '#promotions/iPhone', '#promotions/wap', '#JF_JS', '#JFJH'];
        if (this.pageInit) {
            this.pageInit = false;
        }
        // IE不支持Array的indexOf方法
        if ($.inArray(this.currentHash, noBusiPage) != -1) {
            this.hideLoadingDialog();
        }
    },

    resetMainPage: function () {
        $("#" + GLOBAL_INFO.PAGE_CONTAINER).empty();
    },

    hashToPage: function (hash) {
        return hash.substring(1) + ".jsp";
    },

    updateHistory: function () {
        this.history.saveHistory(this.currentHash, $("#" + GLOBAL_INFO.PAGE_CONTAINER).html());
    },

    showContent: function (content) {
        $("#" + GLOBAL_INFO.PAGE_CONTAINER).html(content);
    },

    parseURL: function () {
        var hash = window.location.hash;
        var href = window.location.href;
        if (hash == null || hash == '') {
            if (window.location.href.indexOf("wscz.jsp") != -1) {
                hash = "#WSCZYL";
            }else {
                //我的移动内页加随机数
                hash = hash + GLOBAL_INFO.DEFAULT_ANCHOR;
            }
            window.location.hash = hash;
            this.currentHash = hash;
        }
        return hash;
    },

    // 清除网上充值数据
    changeChargeData: function () {
        if (window.location.hash == "#WSCZ" && this.chargeData == null) {
            this.chargeData = new Map();
        } else if (window.location.hash != "#WSCZ" && this.chargeData != null) {
            this.chargeData = null;
        }
    },


    cleanHTML: function (html) {
        // Remove all SPAN tags
        html = html.replace(/<\/?SPAN[^>]*>/gi, "");
        // Remove Class attributes
        html = html.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3");
        // Remove Style attributes
        html = html.replace(/<(\w[^>]*) style="([^"]*)"([^>]*)/gi, "<$1$3");
        // Remove Lang attributes
        html = html.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3");
        // Remove XML elements and declarations
        html = html.replace(/<\\?\?xml[^>]*>/gi, "");
        // Remove Tags with XML namespace declarations: <o:p></o:p>/^.+@.+\..+$/;
        html = html.replace(/<\/?\w+:[^>]*>/gi, "");
        // Replace the &nbsp;
        html = html.replace(/&nbsp;/, " ");
        // Transform <P> to <DIV>
        var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi"); // Different because of a IE 5.0 error
        html = html.replace(re, "<div$2</div>");
        html = html.replace(/<div>/, "");
        html = html.replace(/<\/div>/, "");
        html = html.replace(/<[^>]+>/g, "");//去掉所有的html标记
        return html;
    },

    centerElement: function (id, width, height) {
        var popupName = $("#" + id);
        var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
            _windowHeight = $(window).height(),//获取当前窗口高度
            _windowWidth = $(window).width(),//获取当前窗口宽度
            _popupHeight = popupName.height(),//获取弹出层高度
            _popupWeight = popupName.width();//获取弹出层宽度
        _posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
        _posiLeft = (_windowWidth - _popupWeight) / 2;
        popupName.css({"left": _posiLeft + "px", "top": _posiTop + 80 + "px"});//设置position
    },
    /**
     * 充值专区右侧边栏操作
     * @memberOf {TypeName}
     */
    wsczRightStarboard: function () {
        //显示收藏
        //记录关闭的操作的COOKIE
        var cookieKey = "WsczHelpCookie";
        var cookieValueAfterClose = "close";
        var cookieVal = TOUCHAPP.GETTOUCH.getCookie(cookieKey);
        if (!cookieVal) {
            $(".share-lottery-layer").show();
        }
        var fixedLi = $(".fixed-recharge-list li");
        fixedLi.hover(function () {
            var fixedLayer = $(this).find(".fixed-layer");
            fixedLayer.show();
        }, function () {
            var fixedLayer = $(this).find(".fixed-layer");
            fixedLayer.hide();
        });
        //关闭气泡
        var closeLotteryLayer = $(".close-lottery-layer"),
            shareLotteryLayer = $(".share-lottery-layer");
        closeLotteryLayer.bind("click", function () {
            shareLotteryLayer.hide();
            //记录关闭COOKIE
            TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, 10 * 365 * 24 * 60 * 60 * 1000);
        });
        //添加到收藏夹
        $("#wscz_addFavorite").click(function () {
            var url = "http://service.js.10086.cn/wscz.jsp#WSCZYL";
            var title = "江苏移动官网充值";
            //document.all判断是否为ie
            if (document.all) {
                try {
                    //IE7添加到收藏夹的接口
                    window.external.addFavorite(url, title);
                } catch (e1) {
                    try {
                        //IE8添加到收藏夹的接口
                        window.external.addToFavoritesBar(url, title);
                    } catch (e2) {
                        //$(".js_head_addFav").show();
                        alert("您的浏览器不支持自动加收藏,请按Ctrl + D加入收藏");
                    }
                }
// 判断是否为其他浏览器，例如火狐
            } else if (window.sidebar) {
                alert("您的浏览器不支持自动加收藏,请按Ctrl + D加入收藏");
            } else {
//$(".js_head_addFav").show();
                alert("您的浏览器不支持自动加收藏,请按Ctrl + D加入收藏");
            }

        });
    }
};

BpeComponent = function () {
};
BpeComponent.prototype =
    {
        id: '',
        name: '',
        state: 'loading',//loading、loaded、inited

        init: function () {
        },

        makeCacheKey: function (key) {
            return this.id + key;
        },

        cache: function (key, obj) {
            BmonPage.cache(this.makeCacheKey(key), obj);
        },

        uncache: function (key) {
            BmonPage.uncache(this.makeCacheKey(key));
        },

        getCached: function (key) {
            return BmonPage.getCached(this.makeCacheKey(key));
        },

        setState: function (state) {
            this.state = state;
        },

        destroy: function () {
        }
    };

jQuery.extend({
    commonReq: (function () {
        var default_options = {
            "type": "post",
            "timeout": "60000",
            "url": GLOBAL_INFO.BUSINESS_REQ_URI,
            "success": function (data) {
                alert("Ajax Success!");
            },
            "error": function (request, textStatus, errorThrown) {
            }
        };
        return function (user_options) {
            var options = {};
            user_options["data"].browserFinger=BrowserFinger.get();
            $.extend(options, default_options, user_options);
            $.ajax(options);
        };
    })()
});


jQuery.extend({
    busiReq: (function () {
        var default_options = {
            "type": "post",
            "timeout": "60000",
            "url": GLOBAL_INFO.BUSINESS_REQ_URI,
            "success": function (data) {
                alert("Ajax Success!");
            },
            "error": function (request, textStatus, errorThrown) {
                if (loginComponent.userInfo.isGroupMobile == "1") {
                    window.location.reload();
                } else {
                    if (window.location.hash.indexOf("#home") == -1) {
                        BmonPage.showFailureDialog("系统忙，请稍候再试！");
                    }
                }
            },
            "complete": function () {
                BmonPage.hideLoadingDialog();

            }
        };
        return function (user_options) {
            var options = {};
            var new_options = {};
            for (var key in user_options) {
                if (key != 'success' && key != 'confirmMsg') {
                    new_options[key] = user_options[key];
                }
            }
            new_options['success'] = function (data) {

                var result = eval("(" + data + ")");
                if (result && result.resultCode == '1') {
                    //业务确认
                    if (result.systemCode == '-200011') {
                        GlobalDialog.showOperConfrimDialog(result, user_options, '0');
                    }
                    // 需要短信验证码校验
                    else if (result.systemCode == '-200008') {
                        GlobalDialog.showOperConfrimDialog(result, user_options, '1');
                    }
                    //短信验证码校验失败
                    else if (result.systemCode == '-200009') {
                        GlobalDialog.showOperConfrimDialog(result, user_options, '2');
                    }
                    else if (result.systemCode == '-200057') {
                        GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN = user_options;
                        GlobalDialog.showLoginPwdDialog();
                    }
                    else if (result.systemCode == "-200069") {
                        BmonPage.showFailureDialog("对不起，您是话务员登录，无权执行该操作！");
                    }
                    else {
                        user_options['success'](data);
                    }
                }
                else {
                    if (GlobalDialog.isConfirm != "1") {
                        GlobalDialog.closeDialog();
                    }
                    user_options['success'](data);
                }
            };
            new_options["data"].browserFinger=BrowserFinger.get();
            $.extend(options, default_options, new_options);
            //显示进度条显示或者处理状态
            if (!GlobalDialog.hasDialogShow()) {
                BmonPage.showLoadingDialog();
            }
            var queryErrorMsgPop = $("#queryErrorMsg_Pop");
            if (queryErrorMsgPop) {
                //queryErrorMsgPop.hide();
            }
            $.ajax(options);
        };
    })()
});

Function.prototype.bind = function () {
    var __method = this;
    var args = Array.prototype.slice.call(arguments);
    var object = args.shift();
    return function () {
        return __method.apply(object,
            args.concat(Array.prototype.slice.call(arguments)));
    };
};

function Map() {
    this.keys = new Array();
    this.data = new Object();
    this.put = function (key, value) {
        if (this.data[key] == null) {
            this.keys.push(key);
        }
        this.data[key] = value;
    };
    this.get = function (key) {
        return this.data[key];
    };
    this.remove = function (key) {
        this.keys.remove(key);
        this.data[key] = null;
    };
    this.each = function (fn) {
        if (typeof fn != 'function') {
            return;
        }
        var len = this.keys.length;
        for (var i = 0; i < len; i++) {
            var k = this.keys[i];
            fn(k, this.data[k], i);
        }
    };
    this.entrys = function () {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key: this.keys[i],
                value: this.data[i]
            };
        }
        return entrys;
    };
    this.isEmpty = function () {
        return this.keys.length == 0;
    };
    this.size = function () {
        return this.keys.length;
    };
    this.toString = function () {
        var s = "{";
        for (var i = 0; i < this.keys.length; i++, s += ',') {
            var k = this.keys[i];
            s += k + "=" + this.data[k];
        }
        s += "}";
        return s;
    };
};

$(document).ready(function () {
    headShowHideFn($("#btn0_2"), $("#js00"));
    headShowHideFn($("#btn0_3"), $("#js01"));
    headShowHideFn($("#btn0_4"), $("#js02"));
    function headShowHideFn(obj01, obj02) {
        obj01.hover(function () {
            obj02.show();
        }, function () {
            obj02.hide();
        })

        obj02.mouseenter(function () {
            $(this).show();
        })
        obj02.mouseleave(function () {
            $(this).hide();
        })
    }

    //BmonPage.history.init();
    //BmonPage.init();
    //BmonPage.getLoadingMarketPoint();
});

/***************************************************************publicFun.js开始************************************************************/
/* 公用的一些JS函数定义 */
//子菜单的显示隐藏公用方法
function pub_showSubMenu(jM, jMt, jMs, mEvent, mSelectedClassName, mFunShow, mFunHide) {
    /*
     参数解释：
     m,外框容器，用JQ对象方式输入
     mt,菜单标题，用JQ对象方式输入
     ms,子菜单，用JQ对象方式输入
     mEvent,鼠标事件，默认为mouseover
     mSelectedClassName,选中的样式，默认为selected
     mFunShow,显示事件时触发的fun
     mFunHide,隐藏事件事触发的fun
     */
    var m = $(jM);
    var mt = m.find(jMt);
    var ms = m.find(jMs);
    if (!mEvent)mEvent = "mouseover";
    if (!mSelectedClassName)mSelectedClassName = "selected";
    var isMouseout;
//显示事件
    mt.bind(mEvent, function () {
        mMenuTitle_selected();
    });
    var mMenuTitle_selected = function () {
        mt.addClass(mSelectedClassName);
        ms.show();
        if (mFunShow) mFunShow();
    };
//隐藏事件
    mt.mouseover(function () {
        if (isMouseout)clearTimeout(isMouseout);
    });
    ms.mouseover(function () {
        if (isMouseout)clearTimeout(isMouseout);
    });
    mt.mouseout(function () {
        isMouseout = setTimeout(hideSubMenu, 5);
    });
    ms.mouseout(function () {
        isMouseout = setTimeout(hideSubMenu, 5);
    });
    function hideSubMenu() {
        ms.hide();
        mt.removeClass(mSelectedClassName);
        if (mFunHide) mFunHide();
    }

}
//TAB切换的公用方法
function public_tab(jRoot, jTab, jMain, selectedClass, mEvent) {
    /*
     参数解释：
     jRoot：容器JQ选择器
     jTab：tab JQ选择器
     jMain：切换页 JQ选择器
     mEvent,鼠标事件，默认为mouseover
     selectedClassName,选中的样式，默认为selected
     */
    var tRoot = $(jRoot);
    var tTab = tRoot.find(jTab);
    var tMain = tRoot.find(jMain);
    if (!selectedClass) {
        selectedClass = "selected";
    }
    if (!mEvent)mEvent = "mouseover";

    tTab.bind(mEvent, function () {
        var i = tTab.index(this);
        tTab.removeClass(selectedClass);
        $(this).addClass(selectedClass);
        tMain.hide().eq(i).show();
    });
}

function checkNetNumber(number) {
    return /[0-9A-Za-z_]*/.test(number);
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
function setCookie(name, value, expire) {
    //var Days = 30;            //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + expire);
    document.cookie = name + " = " + escape(value) + ";expires=" + exp.toGMTString()+";path=/";
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2]);
    }
    return null;
};
//关闭左右箭头
function hideArrow(idName) {
    $("#" + arrow + "").hide();
};
/***************************************************************publicFun.js结束************************************************************/
/***************************************************************utils.js开始****************************************************************/
function enterEvent(e, fn) {
    if ($.browser.msie) {
        if (event.keyCode == 13) {
            eval(fn);
        }
    }
    else {
        if (e.which == 13) {
            eval(fn);
        }
    }
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
 * 校验是否为移动号码
 * @param {Object} value
 */
function chkMobileNumber(value) {
    var mobile13 = /^13[4-9]\d{8}$/;
    var mobile15 = /^15[012789]\d{8}$/;
    var mobile14 = /^14[7]\d{8}$/;
    var mobile17 = /^17[8]\d{8}$/;    //新增178号段
    var mobile18 = /^18[23478]\d{8}$/;
    return (mobile13.test(value) || mobile15.test(value) || mobile14.test(value) || mobile17.test(value) || mobile18.test(value));
}

// 异网号码校验
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
/**
 * 校验是否为异网移动号码
 * @param {Object} value
 */
function chkMobileNumberForNet(value) {
    var mobile13 = /^13[0-3]\d{8}$/;
    var mobile15 = /^15[356]\d{8}$/;
    var mobile18 = /^18[69]\d{8}$/;
    return (mobile13.test(value) || mobile15.test(value) || mobile18.test(value));
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
 * 校验验证码是否为四位数字和字符串混合
 * @param {Object} value
 */
function chkVerifyCode(value) {
    var pattern = /[0-9a-zA-Z]{4}/;
    return pattern.test(value);
}
/**
 * 校验用户输入是否为数字
 * @param {Object} e
 */
function isNumber(e) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        e = e == null ? window.event : e;
        if (((e.keyCode > 47) && (e.keyCode < 58)) || (e.keyCode == 8)) {
            return true;
        }
        else {
            e.cancelBubble = true;
            e.returnvalue = false;
            return false;
        }
    }
    else if (navigator.appName.indexOf("Netscape") != -1) {
        if (((e.which > 47) && (e.which < 58)) || (e.which == 8) || (e.which == 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

function inputEvent(obj, value) {
    obj.focus(function () {
        if ($(this).val() == value) {
            $(this).removeClass("font-gray3").val("");
        }
    });
    obj.blur(function () {
        if ($(this).val() == "") {
            $(this).addClass("font-gray3").val(value);
        }
    });
}
// 转化插码的品牌
function transferWTbrand(brand) {
    if (brand) {
        if (brand == 'QQT') {
            return 'gotone';
        } else if (brand == 'SZX') {
            return 'easyown';
        } else if (brand == 'DGDD') {
            return 'mzone';
        } else {
            return '';
        }
    } else {
        return '';
    }
}
// 地区名称转换地区编码
function getCityNum(cityName) {
    var cityMap = {'南京': 'NJDQ', '无锡': 'WXDQ', '徐州': 'XZDQ', '常州': 'CZDQ', '苏州': 'SZDQ', '南通': 'NTDQ', '连云港': 'LYGDQ', '淮安': 'HADQ', '盐城': 'YCDQ', '扬州': 'YZDQ', '镇江': 'ZJDQ', '泰州': 'TZDQ', '宿迁': 'SQDQ'};
    return cityMap[cityName];
}
//地区编码转换地区名称
function getCityName(cityNum) {
    var cityMap = {'NJDQ': '南京', 'WXDQ': '无锡', 'XZDQ': '徐州', 'CZDQ': '常州', 'SZDQ': '苏州', 'NTDQ': '南通', 'LYGDQ': '连云港', 'HADQ': '淮安', 'YCDQ': '盐城', 'YZDQ': '扬州', 'ZJDQ': '镇江', 'TZDQ': '泰州', 'SQDQ': '宿迁'};
    return cityMap[cityNum];
}

//地区编号转换地区名称 省内一卡多号
function getCityNameDq(cityNum) {
    var cityMap = {'14': '南京地区', '19': '无锡地区', '16': '徐州地区', '17': '常州地区', '11': '苏州地区', '20': '南通地区', '15': '连云港地区', '12': '淮安地区', '22': '盐城地区', '23': '扬州地区', '18': '镇江地区', '21': '泰州地区', '13': '宿迁地区', '': '未知地区'};
    return cityMap[cityNum];
}

//浏览历史记录
function setHistoryCookie(busiNum) {
    setCookie("WTYW_" + busiNum, busiNum + "+" + new Date().getTime(), 7 * 24 * 60 * 60 * 1000);
}

//浏览历史记录 查询业务
function setHistoryCookieCx(busiNum) {
    setCookie("WTCX_" + busiNum,  busiNum+ "+" + new Date().getTime(), 7 * 24 * 60 * 60 * 1000);
}

//浏览历史记录 专区
function setHistoryCookieZq(busiNum) {
    setCookie("WTZQ_" + busiNum,  busiNum+ "+" + new Date().getTime(), 7 * 24 * 60 * 60 * 1000);
}

function getBrowser() {
    var na = navigator.userAgent.toLowerCase();
    var bo = {
        name: "unknown",
        ver: "unknown",
        ie: false,
        firefox: false,
        opera: false,
        chrome: false,
        safari: false
    };
    if (na.match(/msie/)) {
        bo.name = "msie";
        bo.ver = na.match(/msie ([\d.]+)/)[1];
        bo.ie = true;
    }
    else if (na.match(/firefox/)) {
        bo.name = "firefox";
        bo.ver = na.match(/firefox\/([\d.]+)/)[1];
        bo.firefox = true;
    }
    else if (na.match(/opera/)) {
        bo.name = "opera";
        bo.ver = na.match(/opera.([\d.]+)/)[1];
        bo.opera = true;
    }
    else if (na.match(/chrome/)) {
        bo.name = "chrome";
        bo.ver = na.match(/chrome\/([\d.]+)/)[1];
        bo.chrome = true;
    }
    else if (na.match(/mobile safari/)) {
        bo.name = "mobileSafari";
        bo.ver = na.match(/version\/([\d.]+)/) ? na.match(/version\/([\d.]+)/)[1] : "unknown";
        bo.safari = true;
    }
    else if (na.match(/safari/)) {
        bo.name = "safari";
        bo.ver = na.match(/version\/([\d.]+)/)[1];
        bo.safari = true;
    }
    return(bo);
    //alert(na);
}

/**楼层中栏TAB切换**/
/*
 参数说明：
 floorSelector 楼层的选择
 tabTagSelector tab标签选择
 floorSelector tab主体选择
 tagEvent 鼠标事件"mouseover"|"click"，默认为mouseover
 */
function panel_center_tab(floorSelector, tabTagSelector, tabMainSelector, tagEvent) {
    var tab = $(floorSelector),
        tabTag = tab.find(tabTagSelector),
        tabMain = tab.find(tabMainSelector);
    if (tagEvent != "click")tagEvent = "mouseover";
    tabTag.filter(":first").addClass("first current");
    tabTag.filter(":last").addClass("last");
    tabMain.hide().eq(0).show();
    tabTag.bind(tagEvent, function () {
        var i = tabTag.index($(this));
        tabMain.hide().eq(i).show();
        lazyloadPageOption(tabMain.eq(i).find("img"));
        tabTag.removeClass("current").eq(i).addClass("current")
    });
}

function floorTabSlide() {
    var flAreaTab = $(".flArea-rightTab");
    flAreaTab.find("li").bind("mouseover", function () {
        var arrowLeft = $(this).position().left;
        $(this).siblings().removeClass("current");
        $(this).parent().next().animate({left: arrowLeft}, 200);
        $(this).addClass("current");
        $(this).parent().parent().parent().find(".flArea-rightBox").hide();
        var tabId = $(this).attr("tabId");
        $("#" + tabId).show();
        lazyloadPageOption($("#" + tabId + " img"));
    });
}

/*事件有分页图片延迟加载*/
function lazyloadPageOption(imgObj) {
    var imgLoad = function () {
        var defObj = imgObj;
        defObj.each(function () {
            var xsrc = $(this).attr("page-lazy-src");
            if (xsrc) {
                $(this).attr("src", xsrc).removeAttr("page-lazy-src");
            }
        });
    };
    imgLoad();
}

/*图片延迟加载*/
//function lazyload(option) {
//    var settings = {defObj: null, defHeight: 0};
//    settings = $.extend(settings, option || {});
//    var defHeight = settings.defHeight;
//    var defObj = (typeof settings.defObj == "object") ? settings.defObj.find("img") : $(settings.defObj).find("img");
//    var pageTop = function () {
//        return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - settings.defHeight;
//    };
//    var imgLoad = function () {
//        defObj.each(function () {
//            var xsrc = $(this).attr("lazy-src");
//            if (xsrc) {
//                if ($(this).offset().top <= pageTop()) {
//                    $(this).attr("src", xsrc).removeAttr("lazy-src");
//                }
//            }
//        });
//    };
//    imgLoad();
//    $(window).bind("scroll", function () {
//        imgLoad();
//    });
//}

/*图片延迟加载*/
function lazyload2(option) {
    var settings = {defObj: null, defHeight: 0};
    settings = $.extend(settings, option || {});
    var defHeight = settings.defHeight;

    var defObj = (typeof settings.defObj == "object") ? settings.defObj.find("img") : $(settings.defObj).find("img");
    var pageTop = function () {
        return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - settings.defHeight;
    };
    var imgLoad = function () {
        defObj.each(function () {
            var xsrc = $(this).attr("lazy-src-sec");
            if (xsrc) {
                if ($(this).offset().top <= pageTop()) {
                    $(this).attr("src", xsrc).removeAttr("lazy-src-sec");
                }
            }
        });
    };
    imgLoad();
    $(window).bind("scroll", function () {
        imgLoad();
    });
}
/***************************************************************utils.js结束****************************************************************/
/***************************************************************component.js开始************************************************************/
/******************************短信验证码开始.***********************************/
//短信验证码组件
var smsValidatorComponent = BmonPage.createComponent('smsValidator');
$.extend(smsValidatorComponent,
    {
        id: 'smsValidator',
        name: '短信验证码组件',
        pageLoadingTime: 3000,
        loadOnce: true,
        user_options: null,
        busiNum: '',
        mobile: '',
        bMobile:'',
        type:'',
        getCode: function () {
            smsValidatorComponent.canSend(false);
            var params =
                {
                    'busiNum': this.busiNum,
                    'mobile': this.mobile,
                    'bMobile': this.bMobile,
                    'type': this.type
                };

            $.ajax({
                url: GLOBAL_INFO.SMS_REQ_URI,
                type: 'POST',
                data: params,
                timeout: 10000,
                success: function (ret) {

                    smsValidatorComponent.doShowSms();
                    var obj = eval("(" + ret + ")");
                    if (obj) {
                        if (obj.resultCode == "0") {
                            $("#Dialog_smsMsg").hide();
                            $("#Dialog_smsMsg").html("");
                            smsValidatorComponent.countTime();
                        }
                        else {
                            $("#Dialog_smsMsg").show();
                            $("#Dialog_smsMsg").html("短信验证码发送失败，请点击重新发送！");
                        }
                    }
                    else {
                        $("#Dialog_smsMsg").show();
                        $("#Dialog_smsMsg").html("短信验证码发送失败，请点击重新发送！");
                    }
                },
                error: function (ret, errorMsg) {
                    smsValidatorComponent.doShowSms();
                    $("#Dialog_smsMsg").show();
                    $("#Dialog_smsMsg").html("短信验证码发送失败，请点击重新发送！");
                    smsValidatorComponent.canSend(true);
                },
                complete: function () {
                }
            });
        },
        // ================ 宽带预约密码重置业务 ============================
        // 新增对宽带业务下发短信验证码事件
        getCodeForLanborder: function () {
            //smsValidatorComponent.canSend(false);
            smsValidatorComponent.canSend(true);
            $.ajax({
                url: GLOBAL_INFO.SMS_REQ_URI,
                type: 'POST',
                data: {
                    "busiNum": "LANBORDER"
                },
                timeout: 10000,
                success: function (ret) {
                    smsValidatorComponent.countTimeForLanborder();
                    $("#txtLanborderCode").attr("value", "");
                    var obj = eval("(" + ret + ")");
                    if (obj) {
                        if (obj.resultCode == "0") {
                            smsValidatorComponent.countTimeForLanborder();
                        }
                        else {
                            $("#spLanborderCode").empty().hide();
                            $("#btnLanborderCode").attr("value", "发送失败,重新发送");
                        }
                    }
                    else {
                        $("#spLanborderCode").empty().hide();
                        $("#btnLanborderCode").attr("value", "发送失败,重新发送");
                    }
                },
                error: function (ret, errorMsg) {
                    $("#txtLanborderCode").attr("value", "");
                    $("#spLanborderCode").empty().hide();
                    $("#btnLanborderCode").attr("value", "发送失败,重新发送");
                    smsValidatorComponent.canSend(true);
                },
                complete: function () {
                }
            });
        },
        countTimeForLanborder: function () {
            if (this.counterId) {
                window.clearInterval(this.counterId);
            }
            var count = 30;
            $("#spLanborderCode").html("* 短信验证码已发送(<b style='color:red;'>" + count + "</b>)").show();
            $("#btnLanborderCode").hide();
            this.counterId = window.setInterval(function () {
                $("#spLanborderCode").html("* 短信验证码已发送(<b style='color:red;'>" + (--count) + "</b>)").show();
                if (count < 1) {
                    if (this.counterId) {
                        window.clearInterval(this.counterId);
                        this.canSend(true);
                        $("#btnLanborderCode").attr("value", "获取验证码").removeAttr("disabled").show();
                        $("#spLanborderCode").empty().hide();
                    }
                }
            }.bind(this), 1000);
        },
        // ================ 宽带预约密码重置业务 ============================

        doShowSms: function () {
            $("#Dialog_smsNum").val("");
        },

        validate: function () {
            $("#popBox-business").find(".popBox-head .close").show();
            var smsNum = $("#Dialog_smsNum").val();
            if (smsNum == null || smsNum == "") {
                $("#Dialog_smsMsg").html("请输入" + $("#Dialog_smsTitle").html().replace(/：/g, "") + "！");
                $("#Dialog_smsMsg").show();
                $("#Dialog_operBtn").show();
                $("#Dialog_waitBtn").hide();
                return;
            }
            if (/^\d{6}$/.test(smsNum)) {
                $.extend(this.user_options["data"], {"smsNum": smsNum, "confirmFlg": "1"});
                $("#Dialog_smsMsg").hide();
                GlobalDialog.dialogWait();
                $.busiReq(this.user_options);
            }
            else {
                $("#Dialog_smsMsg").html("请正确填写" + $("#Dialog_smsTitle").html().replace(/：/g, "") + "！");
                $("#Dialog_smsMsg").show();
                $("#Dialog_operBtn").show();
                $("#Dialog_waitBtn").hide();
                return;
            }
        },

        canSend: function (can) {
            if (can) {
                $('#popBox-business .send').bind("click", function () {
                    smsValidatorComponent.getCode();
                });
                $('#popBox-business .send').show();
                $("#Dialog_counter").css("display", "none");
                $("#smsSendTips").css("display", "none");
            }
            else {
                $('#popBox-business .send').unbind("click");
                $('#popBox-business .send').hide();
            }
        },

        resetSmsDialog: function (loginSource) {
            this.user_options = GlobalDialog.LAST_REQ_OPTIONS;
            if (loginSource != '3' || this.user_options['data'].busiNum=="MMFW_MMCZ") {
                this.busiNum = this.user_options['data'].busiNum;
                this.mobile = this.user_options['data'].mobile;
                this.type = this.user_options['data'].type;
                this.bMobile = this.user_options['data'].bMobile;
                window.clearInterval(this.counterId);
                //this.canSend(true);
                this.getCode();
            }
            $("#Dialog_smsNum").val("");
        },

        counterId: null,

        countTime: function () {
            if (this.counterId) {
                window.clearInterval(this.counterId);
            }
            var count = 30;
            $("#Dialog_counter").find("em").html(count);
            $("#Dialog_counter").css("display", "inline-block");
            // $("#smsSendTips").css("display", "inline-block");
            this.counterId = window.setInterval(function () {
                $("#Dialog_counter").find("em").html(--count);
                if (count < 1) {
                    if (this.counterId) {
                        window.clearInterval(this.counterId);
                        this.canSend(true);
                    }
                }
            }.bind(this), 1000);
        }
    });
/******************************短信验证码结束.***********************************/
/***************************************************************component.js结束************************************************************/
/***************************************************************dialog.js开始***************************************************************/
var GlobalDialog =
    {
        oldMv: null,
        MASK_ID: 'popMask',
        BUSIPOP_ID: 'popBox-business',
        LOGINPOP_ID: 'popBox-userLogin',
        LOADINGPOP_ID: 'popBox-loading',
        PAYORDERPOP_ID: 'popBox-payment',
        PAPERDEMOPOP_ID: 'sjb_introduce_box',
        FLASHPOP_ID: 'popBox-flash',
        TUIJIANBOX_ID: 'tuijianbox',
        DIALOG_CALLBACK_YES: null,
        DIALOG_CALLBACK_NO: null,
        LAST_REQ_OPTIONS: null,
        REQ_OPTIONS_BEFORE_LOGIN: null,

        isConfirm: '',
        flashInterVal: null,
        //我的移动获取问卷调查
        queryBusiSurvey_my: function (busiNum, tmpBusiNum) {
            $.commonReq({
                "data": {
                    "reqUrl": "getUserSurvey",
                    "methodStr": "querySurveisForBusiNum",
                    "busiNum": busiNum,
                    "isQry": "WCX",              // 只获取查询
                    "t": Math.random()
                },
                "success": function (data) {
                    var result = eval("(" + data + ")");
                    var id = "";
                    if (tmpBusiNum == "ZDCX" && null != UserInfo.userMobile) {
                        var userCityCode = UserInfo.userCity;
                        if (userCityCode == "NJDQ") {
                            id = "4173"
                        }
                        if (userCityCode == "WXDQ") {
                            id = "4201"
                        }
                        if (userCityCode == "ZJDQ") {
                            id = "4209"
                        }
                        if (userCityCode == "SZDQ") {
                            id = "4181"
                        }
                        if (userCityCode == "NTDQ") {
                            id = "4183"
                        }
                        if (userCityCode == "YZDQ") {
                            id = "4182"
                        }
                        if (userCityCode == "YCDQ") {
                            id = "4251"
                        }
                        if (userCityCode == "XZDQ") {
                            id = "4184"
                        }
                        if (userCityCode == "LYGDQ") {
                            id = "4193"
                        }
                        if (userCityCode == "CZDQ") {
                            id = "4186"
                        }
                        if (userCityCode == "TZDQ") {
                            id = "4137"
                        }
                        if (userCityCode == "SQDQ") {
                            id = "4185"
                        }
                    }

                    var acvitityUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=" + id;
                    if (result && result.resultCode == '0' && result.resultObj && result.resultObj.resList) {
                        var userSurveis = result.resultObj.resList;
                        if (userSurveis.length > 0) {
                            var taskScType = userSurveis[0].scriptType;
                            var taskName = userSurveis[0].taskName;    // 问卷调查名称
                            var taskId = userSurveis[0].taskId;        // 问卷调查编码
                            var taskType = userSurveis[0].taskType;    // 问卷调查类型
                            var taskScId = userSurveis[0].scriptId;    // 编码
                            var taskCtId = userSurveis[0].contactId;   // 接触编码
                            var taskUrl = "";
                            if (taskScType == "0") {
                                taskUrl = "http://www.js.10086.cn/iquestionnaire/questionnaireAction.do?method=getQuestionParam&queryParam=WCX";
//                          taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                            }

                            if (taskScType == "1") {
                                taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_single_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                            }

                            if (tmpBusiNum == "ZDCX") {
                                $("#user_survey_view-one").attr("href", acvitityUrl);
                                if (taskUrl == "") {
                                    $("#user_survey_zdcx").css({"background": "url('http://files01.js.10086.cn/obsh/pics/invite2.gif')"});
                                    $("#user_survey_view-two").parent("div").hide();
                                    $("#user_survey_zdcx").height(132);
                                }
                                else {
                                    $("#user_survey_zdcx").css({"background": "url('http://files01.js.10086.cn/obsh/pics/invite.gif')"});
                                    $("#user_survey_view-two").attr("href", taskUrl);
                                    $("#user_survey_view-two").parent("div").show();
                                    $("#user_survey_zdcx").height(149);
                                }

                                $("#user_survey_zdcx").show();
                            } else {
                                var html = '<ul><li><a title="问卷调查" href="' + taskUrl + '" target="_blank" class="wt-side-link wt-side-wenjuandiaocha"></a></li>'
                                    + '</ul></div>';
                                $('#right_shortcut').html(html);
                            }
                        }
                    }
                }
            });
        },
        /**
         * 根据业务编码获取是否获取推送问卷调查
         */
        queryBusiSurvey: function (tmpBusiNum) {
            var busiNum = window.location.hash;
            if (null != busiNum && '' != busiNum) {
                busiNum = window.location.hash.substr(1);
            }
            $.commonReq({
                "data": {
                    "reqUrl": "getUserSurvey",
                    "methodStr": "querySurveisForBusiNum",
                    "busiNum": busiNum,
                    "isQry": "WCX",              // 只获取查询
                    "t": Math.random()
                },
                "success": function (data) {
                    var result = eval("(" + data + ")");
                    var id = "";
                    if (tmpBusiNum == "ZDCX" && null != UserInfo.userMobile) {
                        var userCityCode = UserInfo.userCity;
                        if (userCityCode == "NJDQ") {
                            id = "4173"
                        }
                        if (userCityCode == "WXDQ") {
                            id = "4201"
                        }
                        if (userCityCode == "ZJDQ") {
                            id = "4209"
                        }
                        if (userCityCode == "SZDQ") {
                            id = "4181"
                        }
                        if (userCityCode == "NTDQ") {
                            id = "4183"
                        }
                        if (userCityCode == "YZDQ") {
                            id = "4182"
                        }
                        if (userCityCode == "YCDQ") {
                            id = "4251"
                        }
                        if (userCityCode == "XZDQ") {
                            id = "4184"
                        }
                        if (userCityCode == "LYGDQ") {
                            id = "4193"
                        }
                        if (userCityCode == "CZDQ") {
                            id = "4186"
                        }
                        if (userCityCode == "TZDQ") {
                            id = "4137"
                        }
                        if (userCityCode == "SQDQ") {
                            id = "4185"
                        }
                    }

                    var acvitityUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=" + id;

                    if (result && result.resultCode == '0' && result.resultObj && result.resultObj.resList) {
                        var userSurveis = result.resultObj.resList;
                        if (userSurveis.length > 0) {
                            var taskScType = userSurveis[0].scriptType;
                            var taskName = userSurveis[0].taskName;    // 问卷调查名称
                            var taskId = userSurveis[0].taskId;        // 问卷调查编码
                            var taskType = userSurveis[0].taskType;    // 问卷调查类型
                            var taskScId = userSurveis[0].scriptId;    // 编码
                            var taskCtId = userSurveis[0].contactId;   // 接触编码
                            var taskUrl = "";
                            if (taskScType == "0") {
                                taskUrl = "http://www.js.10086.cn/iquestionnaire/questionnaireAction.do?method=getQuestionParam&queryParam=WCX";
//                          taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                            }

                            if (taskScType == "1") {
                                taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_single_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                            }

                            if (tmpBusiNum == "ZDCX") {
                                $("#user_survey_view-one").attr("href", acvitityUrl);
                                if (taskUrl == "") {
                                    $("#user_survey_zdcx").css({"background": "url('http://files01.js.10086.cn/obsh/pics/invite2.gif')"});
                                    $("#user_survey_view-two").parent("div").hide();
                                    $("#user_survey_zdcx").height(132);
                                }
                                else {
                                    $("#user_survey_zdcx").css({"background": "url('http://files01.js.10086.cn/obsh/pics/invite.gif')"});
                                    $("#user_survey_view-two").attr("href", taskUrl);
                                    $("#user_survey_view-two").parent("div").show();
                                    $("#user_survey_zdcx").height(149);
                                }

                                $("#user_survey_zdcx").show();
                            }
                            else {
                                $("#user_survey_view").attr("href", taskUrl);
                                $("#user_survey").show();
                                $("#user_survey_zdcx").hide();
                            }
                        }
                    }
                    else {
                        $("#user_survey").hide();
                        $("#user_survey_zdcx").hide();
                    }
                }
            });
        },
        /**
         * 业务办理后获取用户推送问卷调查
         * 开发人：丁亮
         * 开发时间：2013-8-8
         */
        queryUserSurvey: function () {
            var busiNum = window.location.hash;
            if (null != busiNum && '' != busiNum) {
                busiNum = window.location.hash.substr(1);
            }
            if ("SNYKDH" != busiNum && "PPTCBG" != busiNum) {
                $.commonReq({
                    "data": {
                        "reqUrl": "getUserSurvey",
                        "methodStr": "querySurveisForBusiNum",
                        "busiNum": busiNum,
                        "isQry": "WBL",              // 只获取办理
                        "t": Math.random()
                    },
                    "success": function (data) {
                        // 获取问卷调查状态,1:免打扰状态,0:非免打扰状态并显示提示消息
                        var result = eval("(" + data + ")");
                        //                var surveyHtml = "快来评价网厅服务，分分钟搞定，获得一次抽奖机会，大奖等着您哦！<a class=\"publicBtn btn-m2\" onclick=\"\" href=\"http://http://www.js.10086.cn/iquestionnaire/page/wjdc_single_detail.jsp\" target=\"_blank\" style=\"color:#fff;\">立即参与</a>";
                        //                $("#isSuccessShow-wjdc").html(surveyHtml).show();

                        if (result && result.resultCode == '0' && result.resultObj && result.resultObj.resList) {
                            var userSurveis = result.resultObj.resList;
                            if (userSurveis.length > 0) {
                                var taskScType = userSurveis[0].scriptType;
                                var taskName = userSurveis[0].taskName;    // 问卷调查名称
                                var taskId = userSurveis[0].taskId;        // 问卷调查编码
                                var taskType = userSurveis[0].taskType;    // 问卷调查类型
                                var taskScId = userSurveis[0].scriptId;    // 编码
                                var taskCtId = userSurveis[0].contactId;   // 接触编码
                                var taskUrl = "";
                                if (taskScType == "0") {
                                    taskUrl = "http://www.js.10086.cn/iquestionnaire/questionnaireAction.do?method=getQuestionParam&queryParam=WCX";
//                              taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                                }

                                if (taskScType == "1") {
                                    taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_single_detail.jsp?tid=" + taskId + "&ct=" + taskCtId + "&sc=" + taskScId + "&tn=" + encodeURIComponent(taskName);
                                }

                                //var surveyHtml = "江苏移动正在开展“服务大家评，满意共提升”活动，诚邀您对网厅服务进行评价，分分钟搞定，就有机会获得5元话费奖励！<a class=\"publicBtn btn-m2\" onclick=\"\" href=\""+ taskUrl +"\" target=\"_blank\" style=\"color:#fff;\">立即参与</a>";
                                var surveyHtml = "快来评价网厅服务，分分钟搞定。<a class=\"publicBtn btn-m2\" onclick=\"\" href=\"" + taskUrl + "\" target=\"_blank\" style=\"color:#fff;\">立即参与</a>";

                                $("#isSuccessShow-wjdc").html(surveyHtml).show();
                                $("#isSuccessShow").show();
                                $("#noSuccessShow").hide();
                            }
                            else {
                                $("#isSuccessShow-wjdc").hide();
                                $("#noSuccessShow").show();
                                $("#isSuccessShow").hide();
                            }
                        }
                        else {
                            $("#isSuccessShow-wjdc").hide();
                            $("#noSuccessShow").show();
                            $("#isSuccessShow").hide();
                        }
                    }
                });
            }
        },

        showDialog: function (id) {
            BmonPage.centerElement(id);
            $("#" + id).show();
        },

        hasDialogShow: function () {
            var busiPop = $("#" + this.BUSIPOP_ID);
            var loginPop = $("#" + this.LOGINPOP_ID);
            var payOrderPop = $("#" + this.PAYORDERPOP_ID);
            var flashPop = $("#" + this.FLASHPOP_ID);
            var paperPop = $("#" + this.PAPERDEMOPOP_ID);
            var tuijianbox = $("#" + this.TUIJIANBOX_ID);
            if (busiPop.is(":visible") || loginPop.is(":visible")
                || payOrderPop.is(":visible") || flashPop.is(":visible")
                || paperPop.is(":visible") || tuijianbox.is(":visible")) {
                return true;
            }
            else {
                return false;
            }
        },

        resetGlobalDialog: function () {
            this.DIALOG_CALLBACK_YES = null;
            this.DIALOG_CALLBACK_NO = null;
            this.LAST_REQ_OPTIONS = null;
            $("#" + this.BUSIPOP_ID).hide();
            $("#" + this.LOGINPOP_ID).hide();
            $("#" + this.LOADINGPOP_ID).hide();
            $("#" + this.PAYORDERPOP_ID).hide();
            $("#" + this.FLASHPOP_ID).hide();
            $("#" + this.TUIJIANBOX_ID).hide();
            $("#Dialog_smsMsg").empty().hide();
            $("#Dialog_busiInfo_effectWay").nextAll().remove();
        },

        Dialog_callback: function (type) {
            if (type == 'yes') {
                if (this.DIALOG_CALLBACK_YES != null) {
                    GlobalDialog.dialogWait();
                    this.DIALOG_CALLBACK_YES();
                }
            }
            else if (type == 'no') {
                if (this.DIALOG_CALLBACK_NO != null) {
                    this.DIALOG_CALLBACK_NO();
                }
                this.closeDialog();
            }
            // 解决IE6遮罩层透视select标签
            $("#relationPkgSelect").show();
            $("#takeEffectSelect").show();
        },

        showMask: function () {
            var h = $(document).height();
            $("#" + this.MASK_ID).show().height(h);
        },

        hideMask: function () {
            if (!this.hasDialogShow()) {
                $("#" + this.MASK_ID).hide();
            }
            $("#d_busiMsgB").hide();
        },

        closeDialog: function () {
            $("#" + this.MASK_ID).hide();
            $("#" + this.BUSIPOP_ID).hide();
        },

        showOperConfrimDialog: function (result, reqOption, dialogFlg) {
            this.resetGlobalDialog();
            this.LAST_REQ_OPTIONS = reqOption;
            this.showMask();
            var dialog = $("#" + this.BUSIPOP_ID);
            dialog.find(".popBox-head .close").show();
            dialog.find(".popBox-head h3").html("业务办理");
            //操作方式
            var operType = reqOption['data'].operType;
            //生效类型
            var chooseFlag = reqOption['data'].chooseFlag;
            var confirmMsg = reqOption['confirmMsg'];
            var actRet = null;
            if (result.ELst) {
                var eLst = result.ELst;
                for (var i = 0; i < eLst.length; i++) {
                    if (eLst[i].b == 'checkSms') {
                        actRet = eLst[i].e;
                        break;
                    }
                }
            }
            //是否需要业务确认
            var isConfirm = '';
            //是否需要短信验证
            var isSms = '';
            //登录方式
            var loginSource = '';
            var busiNum ='';
            if (actRet) {
                isConfirm = actRet.isConfirm;
                this.isConfirm = isConfirm;
                isSms = actRet.isSms;
                loginSource = actRet.loginSource;
                busiNum = actRet.busiNum;
            }
            $("#Dialog_popBody").attr("class", "popBox-body");

            //******************业务确认块**********
            //业务信息块
            if (isConfirm == '1') {
                //******************流程块**************
                dialog.find(".business-Process").hide();
                dialog.find(".business-Process li:eq(0)").attr("class", "star-now");
                dialog.find(".business-Process li:eq(1)").attr("class", "step");
                //******************提示信息块**********
                var operString = BusinessUtil.generBusiBtn(operType);
                if (actRet.busiInfo.busiNum == 'WSCZYL') {
                    //网上充值兑换EB 短信验证码
                    $("#Dialog_tip").find(".tipText").html("为确保您的个人信息，请您在办理业务前输入随机验证码");
                    $("#popBox-business div h3").html("E币兑换充值券");
                    $("#Dialog_tip").attr("class", "handling-Tips");
                } else {
                    //普通开关业务
                    $("#Dialog_tip").show();
                    $("#Dialog_tip").attr("class", "handling-Tips");
                    $("#Dialog_tip").find(".tipText").html("请确认您要<strong>" + operString + "</strong>的业务信息");
                    if (confirmMsg != null && confirmMsg != "") {
                        $("#Dialog_tip").find(".warning").show();
                        $("#Dialog_tip").find(".warning").html(confirmMsg);
                    }
                    else {
                        $("#Dialog_tip").find(".warning").hide();
                    }
                    //******************业务信息块**********
                    if (actRet && actRet.busiInfo) {
                        $("#Dialog_popBody").attr("class", "popBox-body showBnsInfo");
                        $("#Dialog_busiInfo").show();
                        dialog.find(".business-Name").html("<span>业务名称：</span><strong>" + actRet.busiInfo.busiName + "</strong>");

                        var fee = actRet.busiInfo.fee;

                        if (fee && '0' == fee) {
                            fee = "";
                        }

                        if ('KSDH' == actRet.busiInfo.busiNum) {
                            fee = "功能免费";
                        } else if ('JTVW' == actRet.busiInfo.busiNum) {
//                        fee = GLOBAL_INFO.GROUP_MONEY + "元/月";
                            fee =$("#selectedbuNam").text()+ "/月";
                        }
                        else if ('GJJGATMYSJLL_1T' == actRet.busiInfo.busiNum || 'GJJGATMYSJLL_3T' == actRet.busiInfo.busiNum || 'GJJGATMYSJLL_7T' == actRet.busiInfo.busiNum || 'GJJGATMYSJLL_18Y1T' == actRet.busiInfo.busiNum) {
                            var num = actRet.busiInfo.busiNum.substring(13, 14) == "1" ? "" : actRet.busiInfo.busiNum.substring(13, 14);
                            fee = fee / 100 + "元/" + num + "天";
                        }
                        else if ('12580LMHYJLB_BNB' == actRet.busiInfo.busiNum || 'JTMSTC_30YJTMSYEAR' == actRet.busiInfo.busiNum || 'XXCS_ZKTS1' == actRet.busiInfo.busiNum  || 'XXCS_ZKTS2' == actRet.busiInfo.busiNum || 'XXCS_ZKTS3' == actRet.busiInfo.busiNum) {
                            fee = (fee ? fee / 100 + "元/年" : "免费");
                        }
                        else if ('BLACKBERRY' == actRet.busiInfo.busiNum) {
                            subId = reqOption['data'].subId;
                            fee = subId + "元/月";
                        }
                        else if ('GPRSLL_30YJB' == actRet.busiInfo.busiNum || 'GPRSLL_60YJB' == actRet.busiInfo.busiNum || 'GPRSLL_90YJB' == actRet.busiInfo.busiNum) {
                            fee = (fee ? fee / 100 + "元/季" : "免费");
                        }
                        else if ('GPRSLL_60YBNB' == actRet.busiInfo.busiNum || 'GPRSLL_120YBNB' == actRet.busiInfo.busiNum || 'GPRSLL_180YBNB' == actRet.busiInfo.busiNum) {
                            fee = (fee ? fee / 100 + "元/半年" : "免费");
                        } else if ('XXCS_YYMK' == actRet.busiInfo.busiNum) {
                            fee = (fee ? fee / 100 + "元/季" : "免费");
                        } else if ('HLX_DBYW' == actRet.busiInfo.busiNum || 'B500MBBDLL' == actRet.busiInfo.busiNum || 'JRLLTC' == actRet.busiInfo.busiNum || 'LLZDJYB' == actRet.busiInfo.busiNum || 'ZDJYB60YB1GB' == actRet.busiInfo.busiNum || 'AYLLB_0Y' == actRet.busiInfo.busiNum || 'AYLLB_10Y' == actRet.busiInfo.busiNum || 'AYLLB' == actRet.busiInfo.busiNum || 'AYLLB_19Y' == actRet.busiInfo.busiNum) {
                            fee = (fee ? fee / 100 + "元/次" : "免费");
                        }else if(actRet.busiInfo.busiNum.substring(0,12) == "GJJGATMYSJLL"){

                            fee = (fee/100).toString().split("/")[0] + "元/次";
                        }else if(actRet.busiInfo.busiNum == 'LL1T1G_1Y'){
                            fee = (fee ? fee / 100 + "元/天" : "免费");
                        }else  if(actRet.busiInfo.busiNum.indexOf('LLKCB')>-1){
                            fee = fee/100 + "元/次";
                        }else {
                            fee = (fee ? fee / 100 + "元/月" : "免费");
                        }

                        //dialog.find(".business-Tariff").html("<span>资费标准：</span><strong>" + fee + "</strong>");

                        var state = "";
                        //业务状态
                        if (('IPZTC' == actRet.busiInfo.busiNum) && operType == 4) {
                            state = "已开通";
                        }
                        else {
                            var currentState = reqOption['data'].busiState;
                            if (currentState) {
                                state = BusinessUtil.generBusiState(currentState);
                            }
                            else {
                                state = BusinessUtil.generBusiState(operType);
                            }
                        }
                        //如果是次日或者立即开通50元，100元，200元流量套餐添加提示语
                        if (actRet.busiInfo.busiNum == "GNYDSJTC_5Y" || actRet.busiInfo.busiNum == "GNYDSJTC_10Y"
                            || actRet.busiInfo.busiNum == "GNYDSJTC_20Y" || actRet.busiInfo.busiNum == "GNYDSJTC_30Y") {
                            //按天计费添加提示(次日的进行提示，次月的不需要提示)
                            if ("次日" == BusinessUtil.generEffectWay(chooseFlag) || "立即" == BusinessUtil.generEffectWay(chooseFlag)) {
                                dialog.find(".business-Tariff").html("<span>资费标准：</span><strong>订购首月套餐费和套餐优惠按实际天数折算，次月<br><span style='width:150px;'></span>开始正常收费" + fee + "</strong>");
                            } else {
                                dialog.find(".business-Tariff").html("<span>资费标准：</span><strong>" + fee + "</strong>");
                            }
                        } else {
                            dialog.find(".business-Tariff").html("<span>资费标准：</span><strong>" + fee + "</strong>");
                        }

                        $("#Dialog_busiInfo_state").html("<span>当前状态：</span>" + state);
                        //对国际及港澳台漫游及长途进行特别的生效时间处理
                        if (actRet.busiInfo.busiNum == "GJTGAMY"||actRet.busiInfo.busiNum == "GJTGACT") {
                            if (chooseFlag) {
                                $("#Dialog_busiInfo_effectWay").html("<span>生效时间：</span>" + chooseFlag);
                            } else {
                                $("#Dialog_busiInfo_effectWay").html("<span>生效方式：</span>立即");
                            }
                        } else if (actRet.busiInfo.busiNum == "ZMB_10Y"){
                            var time=new Date();
                            var day=time.getDay();
                            if(day==6||day==0){
                                $("#Dialog_busiInfo_effectWay").html("<span>生效方式：</span>立即");
                            }else{
                                $("#Dialog_busiInfo_effectWay").html("<span>生效方式：</span>预约");
                            }
                        } else {
                            $("#Dialog_busiInfo_effectWay").html("<span>生效方式：</span>" + BusinessUtil.generEffectWay(chooseFlag));
                        }

                        if(operType == "1"  && (actRet.busiInfo.busiNum.indexOf("YLYD_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDLLB_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDCYB_") != -1 || actRet.busiInfo.busiNum.indexOf("GJJGATMYSJLL_") != -1)) {
                            $("#Dialog_busiInfo_effectWay").after("<li style='color:red;font-size:12px;margin:0 70px;'>温馨提示：订购本业务前请您自行了解并确认您的手机制式支持漫游地网络。如需帮助可拨打10086。</li>");
                        }
                        var showInfo = TOUCHAPP.GETTOUCH.getCookie("showInfo");
                        if(operType == "1" && showInfo && (actRet.busiInfo.busiNum.indexOf("YLYD_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDLLB_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDCYB_") != -1 || actRet.busiInfo.busiNum.indexOf("GJJGATMYSJLL_") != -1)) {
                            $("#Dialog_busiInfo_effectWay").after("<li style='color:red;font-size:12px;margin:0 70px;'>温馨提示：<br>(1)订购本业务前请您自行了解并确认您的手机制式支持漫游地网络。如需帮助可拨打10086。<br>(2)连续点击“开通”按钮，会导致重复订购套餐、产生多笔费用哦，请确认您本次操作无误。</li>");
                            $("#Dialog_busiInfo li:last-child").hide();
                        } else if(operType == "1" && (actRet.busiInfo.busiNum.indexOf("YLYD_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDLLB_") != -1 || actRet.busiInfo.busiNum.indexOf("GATSDCYB_") != -1 || actRet.busiInfo.busiNum.indexOf("GJJGATMYSJLL_") != -1)) {
                            TOUCHAPP.GETTOUCH.setCookie("showInfo", "0", 5 * 60 * 1000);
                        } else if(actRet.busiInfo.busiNum.indexOf("GPRS4G_") != -1 && operType == "1" && $("#YWLX .b-item-opend").html()) {
                            $("#Dialog_busiInfo_effectWay").after("<li><span>即将关闭：</span>" + $("#YWLX .b-item-opend").find("span").html() + "</li>");
                        }
                        //通用流量包在当月新开通且立即生效的情况下，每月21日起在二次确认框界面上增加红字提示
                        if(actRet.busiInfo.busiNum.indexOf("GPRS4G_") != -1 && operType=="1" && chooseFlag==1 )
                        {
                            var myDate=new Date();
                            var nowDate=myDate.getDate();
                            if(nowDate >=21)
                            {
                                $("#Dialog_busiInfo_effectWay").after("<li style='color:red;font-size:12px;margin:0 70px;'>温馨提示：1、开通首月套餐费和套餐内流量按实际天数折算。</li><li style='color:red;font-size:12px;margin:0 130px;'> 2、如您变更或退订原套餐，原套餐剩余流量不享受流量不清零服务</li>");
                            }
                        }



                    }
                    else {
                        $("#Dialog_busiInfo").hide();
                    }
                    //隐藏资费信息
                    if (actRet.busiInfo.busiNum == "LLZZ") {
                        dialog.find(".business-Tariff").empty().hide();
                    }
                }
            }
            else {
                $("#Dialog_popBody").attr("class", "popBox-body justSendCode");
                dialog.find(".business-Process").hide();
                $("#Dialog_tip").hide();
                $("#Dialog_busiInfo").hide();
            }

            //******************短信验证块**********
            //***针对流量加油包业务多次开通多次发送短信验证码二次验证功能***/
            $("#Dialog_smsMsg").hide();
            //if (undefined != actRet.busiInfo && (actRet.busiInfo.busiNum.indexOf('GPRSDJB') > -1 || actRet.busiInfo.busiNum.indexOf('GPRS4G_DJB') > -1)) {
            //isSms = '1';
            //actRet.isSms = '1';
            //}
            if(busiNum == "JTDHYY_NEW"){//更改
                isSms = '1';
                actRet.isSms = '1';
            }

            if (isSms == '1') {
                if (isConfirm != '1') {
                    dialog.find(".popBox-head h3").html((loginSource == '3' && busiNum!="MMFW_MMCZ") ? "服务密码确认" : "短信密码确认");
                }

                if (loginSource == '3' && busiNum!="MMFW_MMCZ") {
                    $("#Dialog_smsTitle").html("服务密码：");
                    dialog.find(".main-ui-list2").html("<li>服务密码是我们通常所说的10086密码。</li>"
                        + "<li>若您不知道或者忘记了密码，可以点击“<a href='http://service.js.10086.cn/my/MY_MMSZ.html?operNum=2&t=1503907638702'>点击此处找回</a>”进行重置。</li>");
                    dialog.find(".sendCode").hide();
                    dialog.find(".main-ui-list2").show();

                    $("#Dialog_smsNum").attr("class", "public-inputText1");
                }
                else {
                    $("#Dialog_smsTitle").html("短信验证码：");
                    /*dialog.find(".main-ui-list2").html("<li>验证码在5分钟内有效，3次输入错误后失效。</li>"
                     + "<li>收不到短信验证码？<a onmouseover='Tip(<p>若您收不到短信验证码，请尝试以下方式：</p><p>手机是否已经停机或关机</p><p>手机关机再开机后等待几分钟</p><p>换个手机重新插上SIM卡试试</p><p>如以上方式您都尝试了，还是收不到，请稍后再试，或者拨打10086与我们联系。</p>)' " +
                     "onmouseout='UnTip()'>点击此处</a>查看可能原因。</li>");*/

                    dialog.find(".main-ui-list2").html("<li>验证码在5分钟内有效，3次输入错误后失效。</li>"
                        + "<li>收不到短信验证码？<a name='11' onmouseover='GlobalDialog.showTip(this)' " +
                        "onmouseout='GlobalDialog.hideTip()'>点击此处</a>查看可能原因。</li>");

                    dialog.find(".sendCode").show();

                    $("#Dialog_smsNum").attr("class", "text");
                }
                if(busiNum=="PPTCBG"){
                    if($("#dgyhbg").val() == "1"){
                        var confirmParam = "您的套餐即将转成【"+$("#selPkg").html()+"】，次月生效！<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:12px;'>注：如您变更原套餐，原套餐剩余流量不享受流量不清零服务。</span>";
                        confirmParam += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:12px;color:red;'>温馨提示：您当前在用的产品已停售，变更后不可恢复，请确认是否继续变更。</span>";
                        $("#jjktdtc").html(confirmParam);
                    }else {
                        var confirmParam = "您的套餐即将转成【"+$("#selPkg").html()+"】，次月生效！<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:12px;'>注：如您变更原套餐，原套餐剩余流量不享受流量不清零服务。</span>";
                        $("#jjktdtc").html(confirmParam);
                    }


                }

//            if(busiNum=="zxtc"){
//            	if($("#dgyhbg").val() == "1"){
//            		var confirmParam = "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:12px;color:red;'>温馨提示：您当前在用的产品已停售，变更后不可恢复，请确认是否继续变更。</span>";
//            		$("#jjktdtc").html(confirmParam);
//            	}else {
//            		var confirmParam = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:12px;'>注：如您变更原套餐，原套餐剩余流量不享受流量不清零服务。</span>";
//                	$("#jjktdtc").html(confirmParam);
//            	}
//            }
                $("#Dialog_busiInfo_sms").show();
                if (dialogFlg == '2') {
                    $("#Dialog_smsMsg").html("您输入的" + $("#Dialog_smsTitle").html().replace(/：/g, "") + "错误!");
                    $("#Dialog_smsMsg").show();
                }
                else {
                    smsValidatorComponent.resetSmsDialog(loginSource);
                }

            }
            else {
                if (actRet.busiInfo.busiNum == 'WSCZYL') {
                    //网上充值EB兑换
                    $("#Dialog_busiInfo_sms").hide();
                    $("#Dialog_tip").find(".tipText").html("为确保您的个人信息，请您确认是否兑换");
                    $("#popBox-business .main-ui-list2").hide();
                } else {

                    $("#Dialog_busiInfo_sms").hide();

                }
            }
            //******************您还可以块**********
            dialog.find(".operating").hide();
            //******************按钮块**********
            $("#Dialog_operBtn").show();
            $("#Dialog_waitBtn").hide();
            this.DIALOG_CALLBACK_YES = function () {
                var smsNum = $("#Dialog_smsNum").val();
                if (actRet.isSms == '1') {
                    smsValidatorComponent.validate();
                }
                else {
                    /**
                     * 改变国际及港澳台漫游业务插码规则
                     * 修改人员：叶星
                     * 修改日期：2012-11-13
                     */
                    var busi_num_mxw = actRet.busiInfo.busiNum;
                    if ("GJTGAMY" == actRet.busiInfo.busiNum) {
                        //开通的时候插码20
                        if (reqOption['data'].operType == "1") {
                            //////////////////////////////////////业务插码开始
                            gjtgamyComponent.setPlugInfo('20');
                            //////////////////////////////////////业务插码结束
                        }
                        //关闭的时候插码0
                        else if (reqOption['data'].operType == "2") {
                            gjtgamyComponent.setPlugInfo('0');
                        }
                    }


                    /**
                     * 改变来电提醒业务插码规则
                     * 修改人员：孟宪伟
                     * 修改日期：2012-11-22
                     */

                    //开通的时候插码20
                    if ("LDTX" == busi_num_mxw) {

                        if (reqOption['data'].operType == "1" || reqOption['data'].operType == "3") {
                            //////////////////////////////////////业务插码开始
                            simpleBusiComponent.setPlugInfo('20', busi_num_mxw);
                            //////////////////////////////////////业务插码结束
                        }
                        //关闭的时候插码0
                        else if (reqOption['data'].operType == "2") {
                            simpleBusiComponent.setPlugInfo('0', busi_num_mxw);
                        }

                    }


                    GlobalDialog.dialogWait();
                    $.extend(reqOption["data"], {"confirmFlg": "1"});
                    $.busiReq(reqOption);
                }
            };
            this.showDialog(this.BUSIPOP_ID);
        },

        showTip: function (obj) {
            var objOffset = $(obj).offset();
            $("#showSmsTip").fadeIn("slow");
            $("#showSmsTip").show();
        },

        hideTip: function () {
            $("#showSmsTip").hide();
        },

        dialogWait: function () {
            $("#Dialog_operBtn").hide();
            $("#Dialog_waitBtn").show();
            var dialog = $("#" + this.BUSIPOP_ID);
            dialog.find(".popBox-head .close").hide();
        },

        dialogOper: function () {
            $("#Dialog_operBtn").show();
            $("#Dialog_waitBtn").hide();
            var dialog = $("#" + this.BUSIPOP_ID);
            dialog.find(".popBox-head .close").show();
        },

        showStepResultDialog: function (msg, flg, busiNum) {
            // 请求问卷调查推送查询
            GlobalDialog.queryUserSurvey();

            this.resetGlobalDialog();
            this.showMask();
            var dialog = $("#" + this.BUSIPOP_ID);
            dialog.find(".popBox-head .close").show();
            $("#Dialog_popBody").attr("class", "popBox-body showBnsInfo");
            //流程块
            dialog.find(".business-Process").hide();
            dialog.find(".business-Process li:eq(1)").attr("class", "step-now");
            dialog.find(".business-Process li:eq(0)").attr("class", "star");
            //提示信息块
            $("#Dialog_tip").show();
            $("#Dialog_tip").find(".warning").hide();
            if (flg == "0") {
                //$("#isSuccessShow").show();
                //$("#noSuccessShow").hide();
                $("#Dialog_tip").attr("class", "handling-Success");
                $("#showRealtiveBusi").hide();
                var busiNumGroup = window.location.hash;
                // sunwei

            }
            else {
                //$("#isSuccessShow").hide();
                //$("#noSuccessShow").show();
                $("#Dialog_tip").attr("class", "handling-Failure");
                $("#showRealtiveBusi").hide();
            }
            /*var bodyHtml = "<script type='text/javascript'>";
             bodyHtml += "function listShowStart2(){"+
             "var t;"+
             "var aIndexSpan = $(\".MoreShare\"),"+
             "    aList = $(\".PopSharebox\");"+
             //标签鼠标事件
             " aIndexSpan.hover("+
             "  function(){"+
             "     clearTimeout(t);"+
             "     aList.show();"+
             "  },"+
             "  function(){"+
             "     listHide();"+
             "  }"+
             ");"+
             //列表鼠标事件
             " aList.hover("+
             "  function(){clearTimeout(t);},"+
             "  function(){listHide();}"+
             ");"+
             //隐藏列表
             " function listHide(){"+
             "   t = setTimeout(function(){aList.hide();},100)"+
             "}  "+
             "}"+
             "listShowStart2();";
             bodyHtml += "</script>";
             if($("#market_tuijian_m").html() != null){
             $("#Dialog_tip").find(".tipText").html(msg + "<br/>" + $("#market_tuijian_m").html() + bodyHtml);
             }else{
             $("#Dialog_tip").find(".tipText").html(msg);
             }
             */
            $("#Dialog_tip").find(".tipText").html(msg);
            //$("#Dialog_tip").find(".tipText").html(msg+"<br/>赶快分享给您的好友吧！");
            //业务信息块
            $("#Dialog_busiInfo").hide();
            //短信验证块
            $("#Dialog_busiInfo_sms").hide();
            //您还可以块
            dialog.find(".operating").show();
            if (flg == "0") {
                if ($("#market_tuijian_m").html() != null) {
                    dialog.find("#newShareList").html($("#market_tuijian_m").html()).show();
                }
            } else {
                $("#newShareList").hide();
            }
            //按钮块
            dialog.find(".business-Btn").hide();
            $("#Dialog_waitBtn").hide();

            this.showDialog(this.BUSIPOP_ID);
        },

        //flg 0:success 1:failed 2:confirm
        showCommonDialog: function (msg, flg, dialogArgument, confirmMsg) {
            // 请求问卷调查推送查询
            GlobalDialog.queryUserSurvey();

            this.resetGlobalDialog();
            if (dialogArgument) {
                this.DIALOG_CALLBACK_YES = dialogArgument.yesCallback;
                this.DIALOG_CALLBACK_NO = dialogArgument.noCallback;
            }
            else {
                this.DIALOG_CALLBACK_YES = null;
                this.DIALOG_CALLBACK_NO = null;
            }

            this.showMask();
            var dialog = $("#" + this.BUSIPOP_ID);
            dialog.find(".popBox-head .close").show();
            $("#Dialog_popBody").attr("class", "popBox-body showBnsInfo");
            dialog.find(".business-Process").hide();
            $("#Dialog_tip").show();
            $("#Dialog_tip").find(".warning").hide();
            if (flg == '0') {
                //$("#isSuccessShow").show();
                //$("#noSuccessShow").hide();
                $("#Dialog_tip").attr("class", "handling-Success");
            }
            else if (flg == '1') {
                //$("#isSuccessShow").hide();
                //$("#noSuccessShow").show();
                $("#Dialog_tip").attr("class", "handling-Failure");
            }
            else if (flg == '2') {
                $("#Dialog_tip").attr("class", "handling-Tips");
            }
            $("#Dialog_tip").find(".tipText").html(msg);
            if (window.location.hash.indexOf("#SNYKDH") != -1) {
                $("#snykdh_tip").show();
                $("#snykdh_else_tip").hide();
            } else {
                if(window.location.href.indexOf("JFDH_JFDHXYW") != -1){
                    $("#isJfdh").show();
                }else{
                    $("#isJfdh").hide();
                }
                $("#snykdh_tip").hide();
                $("#snykdh_else_tip").show();
            }

            $("#Dialog_busiInfo").hide();
            $("#Dialog_busiInfo_sms").hide();
            $("#Dialog_waitBtn").hide();
            if (flg == '0' || flg == '1') {
                dialog.find(".popBox-head h3").html("提示");
                dialog.find(".operating").show();
                if (flg == '0') {
                    if ($("#market_tuijian_m").html() != null) {
                        dialog.find("#newShareList").html($("#market_tuijian_m").html()).show();
                    }
                } else {
                    $("#newShareList").hide();
                }
                $("#Dialog_operBtn").hide();
                $("#Dialog_waitBtn").hide();
            }
            else {
                dialog.find(".popBox-head h3").html("用户确认");
                dialog.find(".operating").hide();
                if (confirmMsg != null && confirmMsg != "") {
                    $("#Dialog_tip").find(".warning").show();
                    $("#Dialog_tip").find(".warning").html(confirmMsg);
                }
                else {
                    $("#Dialog_tip").find(".warning").hide();
                }
                $("#Dialog_operBtn").show();
                $("#Dialog_waitBtn").hide();
                // 解决IE6遮罩层透视select标签
                $("#relationPkgSelect").hide();
                $("#takeEffectSelect").hide();
            }
            this.showDialog(this.BUSIPOP_ID);
        },

        // 原逻辑显示登录层，未改变
        showLoginDialog: function () {
            if (loginComponent.userInfo.userMobile) {
                loginComponent.lastGetVerifyCodeTime = null;
                loginComponent.initPage();
                //loginComponent.getHotRankInfo();
                //loginComponent.getQuickServiceInfo();
            }
            this.resetGlobalDialog();
            this.showMask();
            var dialog = $("#" + this.LOGINPOP_ID);
            var h = $(document).height();
            $("#popMask").show().height(h);
            $("#userNumber").val("");
            $("#userPassword").val("");
            $("#password-error-message").empty().hide();
            $("#verifyCode").val("");
            $("#verifyCodeDiv").hide();
            $("#isSavePassword").attr("checked", false);
            $("#loginType").val(1);
            loginComponent.changeLoginType();
            $("#verifyCode-error-message").empty().hide();
            $("#userLogin-error-result").empty().hide();
            $("#loginCity").val("NJDQ");
            loginComponent.popLogin_psdType_input(1);
            this.showDialog(this.LOGINPOP_ID);
            setTimeout(function () {
                $("#loginForm-tip-password-1").hide();
            }, 3000);
            $("#loginForm-link-switchPswType1").hover(function () {
                $("#loginForm-tip-password-1").show();
            }, function () {
                $("#loginForm-tip-password-1").hide();
            }).show();
            $("#loginForm-link-switchPswType2").hover(function () {
                $("#loginForm-tip-password-2").show();
            }, function () {
                $("#loginForm-tip-password-2").hide();
            });
            loginComponent.count = null;
            $("#userNumber").show().focus();

            // =============================================================
            /**
             * 增加样式切换
             * 修改人：丁亮
             * 修改日期：2012-7-5
             * */
            $("#userPassword_N").val("");
            $(".popBox-password").hide();
            $(".userLogin-userType").show();
            $(".userLogin-loginForm").show();
            $("#login-tip").html("用户登录");
            $("#isSavePasswordVal_N").val(1);
            // =============================================================

            // 话务员登录，只有动态密码登录
            var url = window.location.href;
            if (url.indexOf("index_hwy.jsp") != -1) {
                loginComponent.popLogin_psdType_input(2);
            }

            // 用户成功登录网厅后记录用户的手机号码，下次登录时无需再次输入，默认上一次成功登录的手机号码。
            // 从cookie获取最近一次成功登录的手机号码
            var mobile = getCookie("last_success_login_mobile");
            if (mobile != null && mobile != "") {
                $("#userNumber").val(mobile);
            }
        },

        // 首页弹出登陆框
        showCommonLoginDialog: function () {
            this.resetGlobalDialog();
            this.showMask();
            var h = $(document).height();
            $("#popMask").show().height(h);
            $("#login-frame").attr("src", "https://service.js.10086.cn:8443/login/login.html");
            BmonPage.centerElement("login-popBox-userLogin");
            $("#login-popBox-userLogin").show();
        },

        /**
         * 新增登录层
         * 修改人：丁亮
         * 修改日期：2012-7-4
         */
        showLoginPwdDialog: function (busiNumType) {
            this.showMask();
            var redictUrl = "./login.html?url=" + window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
            BmonPage.showFailureDialog("尊敬的客户您好，如想查看详情或办理请使用“服务密码”<a href='"+redictUrl+"'>登录</a>");

//        var dialog = $("#" + this.LOGINPOP_ID);
//        if ("MMFW_MMXG" == busiNumType) {
//            $("#userPassword_tips").html("使用短信密码登陆的用户无法进行密码修改，<br>请输入您的服务密码继续办理");
//        } else {
//            $("#userPassword_tips").html("请输入服务密码办理您当前选择的业务");
//        }
//        var h = $(document).height();
//        $("#popMask").show().height(h);
//        $("#userNumber").val("");
//        $("#userPassword").val("");
//        $("#password-error-message").empty().hide();
//        $("#verifyCode").val("");
//        $("#verifyCodeDiv").hide();
//        $("#isSavePassword").attr("checked", false);
//        $("#loginType").val(1);
//        loginComponent.changeLoginType();
//        $("#verifyCode-error-message").empty().hide();
//        $("#userLogin-error-result").empty().hide();
//        $("#loginCity").val("NJDQ");
//        loginComponent.popLogin_psdType_input(1);
//        this.showDialog(this.LOGINPOP_ID);
//        loginComponent.count = null;
//        $("#userNumber").val(loginComponent.userInfo.userMobile).hide();
//        $("#userPassword").focus();

//        // =============================================================
//        /**
//         * 增加样式切换
//         * 修改人：丁亮
//         * 修改日期：2012-7-5
//         * */
//        $("#userPassword_N").val("");
//        $(".popBox-password").show();
//        $(".userLogin-userType").hide();
//        $(".userLogin-loginForm").hide();
//        $("#login-tip").html("服务密码确认");
//        $("#isSavePasswordVal_N").val(2);
//        loginComponent.popLogin_psdType_input(1); // 切换到服务密码
//        loginComponent.isNeedVerifyCode = false;
//         =============================================================
        },

        showShareDialog: function () {
            this.resetGlobalDialog();
            this.showMask();
            var dialog = $("#" + this.TUIJIANBOX_ID);
            var h = $(document).height();
            $("#popMask").show().height(h);
            $("#circle_sms_moble").val("");
            $("#sms_error_message").html("");
            $("#circle_mail_address").val("");
            $("#email_error_message").html("");
            this.showDialog(this.TUIJIANBOX_ID);
        },

        //flg 1:flash 2:busi picture
        showFlashDialog: function (flashUrl, flg) {
            this.resetGlobalDialog();
            this.showMask();
            var dialog = $("#" + this.FLASHPOP_ID);
            if (flg == "1") {
                dialog.find(".popBox-head h3").html("FLASH体验");
                $("#twjs_img").hide();
                var flashStr = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" id=\"falsh_obj\" " +
                    "style=\"display: none;\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" " +
                    " width=\"500\" height=\"300\"><param name=\"movie\" id=\"flashMovie\" value=\"" + flashUrl + "\"></param>" +
                    " <param name=\"quality\" value=\"high\"></param> <param name=\"wmode\" value=\"transparent\"></param> " +
                    "<embed  src=\"" + flashUrl + "\" id=\"fireFoxGame\" name=\"fireFoxGame\" quality=\"high\" " +
                    "pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\"" +
                    " width=\"500\" height=\"300\"></embed></object>";
                $("#flashObjDiv").show();
                $("#flashObjDiv").empty();
                $("#flashObjDiv").append(flashStr);
                //$("#falsh_obj").hide();
                $("#flashPercentDiv").show();
                $("#falsh_obj").show();
                //$("#falsh_obj").find("PARAM[NAME='Movie']").val(flashUrl);
                //$("#falsh_obj").find("PARAM[NAME='Src']").val(flashUrl);
                //$("#flashMovie").val(flashUrl);
                //$("#fireFoxGame").attr("src",flashUrl);
                ///////////////////
                if (window.navigator.userAgent.indexOf("Firefox") >= 1 || window.navigator.userAgent.indexOf("AppleWebKit") >= 1) {/*is fireFox*/

                    this.flashInterVal = self.setInterval(this.flashRef, 5);
                } else { /*is IE*/
                    this.refreshProgress();
                }
                /////////////////
            }
            else {

                dialog.find(".popBox-head h3").html("图文介绍");
                $("#twjs_img").show();
                $("#falsh_obj").hide();
                $("#flashPercentDiv").hide();
                dialog.find(".popBox-body img").attr("src", flashUrl);
            }

            this.showDialog(this.FLASHPOP_ID);
        },
        //firefox 刷新进度条
        flashRef: function () {
            var progress = document.fireFoxGame;
            if (progress.PercentLoaded() == 100) {
                $("#flashPercentDiv").hide();
                clearInterval(GlobalDialog.flashInterVal);
            } else {
                //setTimeout('flashRef()',0);
                document.getElementById("flashPercentDiv").innerHTML = "文件正在加载 " + progress.PercentLoaded() + "% 请稍候...";
            }
        },

        //清除flash
        removeFlash: function () {
            clearInterval(GlobalDialog.flashInterVal);
            $("#flashObjDiv").empty();
        },

        refreshProgress: function () {
            //刷新进度条函数
            var bar = document.getElementById("flashPercentDiv");
            var movie = document.getElementById("falsh_obj");

            var nPercentLoaded = movie.PercentLoaded();
            bar.innerHTML = "文件正在加载 " + nPercentLoaded + "% 请稍候...";
            if (nPercentLoaded == 100) {
                bar.innerHTML = "Game download is complete";
                $("#flashPercentDiv").hide();
            } else {
                setTimeout("GlobalDialog.refreshProgress()", 0);
            }
        },


        showModelDialog: function (id) {
            this.resetGlobalDialog();

            var busiNum = window.location.hash;
            if (null != busiNum && '' != busiNum) {
                busiNum = window.location.hash.substr(1);
            }
            if ("YDXY" == busiNum) {

            } else {
                this.showMask();
                this.showDialog(id);
            }
        },

        closeModelDialog: function (id) {
            this.hideMask();
            $("#" + id).hide();
        },

        /**
         * 显示意见反馈
         */
        showYJFK: function () {
            GlobalDialog.showModelDialog("popBox-yjfk");
        }
    };
/***************************************************************dialog.js结束***************************************************************/
/*js_head.js*/
var counter_pop = null;
function findCmProvid() {
    var cookies = document.cookie.split("; ");
    var CmProvid;
    for (var i = 0; i < cookies.length; i++) {
        var arr = cookies[i].split("=");
        if ("CmProvid" == arr[0]) {
            CmProvid = arr[1];
            break;
        }
    }
    return CmProvid;
}


var CmProvid = findCmProvid();


if (CmProvid != "default") {
    var Days = 365;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = "CmProvid=js;path=/;domain=10086.cn;expires=" + exp.toGMTString();
}


(function () {
    var isReady = false;
    var readyList = [];
    var timer;
    ready = function (fn) {
        if (isReady)
            fn.call(document);
        else
            readyList.push(function () {
                return fn.call(this);
            });
        return this;
    }
    var onDOMReady = function () {
        for (var i = 0; i < readyList.length; i++) {
            readyList[i].apply(document);
        }
        readyList = null;
    }
    var bindReady = function (evt) {
        if (isReady)
            return;
        isReady = true;
        onDOMReady.call(window);
        clearInterval(timer);
        timer = null;
    };
    timer = setInterval(function () {
        if (!document.getElementById("js_head")) {
            return;
        }
        bindReady();
    }, 5);
})();

ready(function () {

    var thisURL = document.URL;
    var tmpUPage = thisURL.split("/");
    var thisUPage = tmpUPage[3];

    if (thisURL.charAt(thisURL.length - 1) == "/") {
        thisURL = thisURL.substring(0, thisURL.length - 1);
    }

    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "http://files01.js.10086.cn/obsh/js_head/js_head.css?t=201408142300");                  //各省的样式文件


    var heads = document.getElementsByTagName("head");
    if (heads.length) {
        heads[0].appendChild(link);
    }
    else {
        document.documentElement.appendChild(link);
    }


    var header = document.getElementById("js_head");

    var divTopbar = document.createElement("div");
    divTopbar.id = "topbar";

    header.appendChild(divTopbar);


    var divTopmain = document.createElement("div");
    divTopmain.className = "topmain";

    divTopbar.appendChild(divTopmain);


    var divTopleft = document.createElement("div");
    divTopleft.className = "topleft";


    divTopmain.appendChild(divTopleft);


    var pTopleft = document.createElement("p");

    divTopleft.appendChild(pTopleft);


    var aTopleft1 = document.createElement("a");
    aTopleft1.className = "on";
    aTopleft1.href = "http://www.10086.cn/js";                                          //不可编辑  省首页，www.10086.cn/**
    aTopleft1.innerHTML = "个人客户";

    pTopleft.appendChild(aTopleft1);

    var spanTopleft1 = document.createElement("span");
    spanTopleft1.innerHTML = " ";

    pTopleft.appendChild(spanTopleft1);


    var aTopleft2 = document.createElement("a");
    aTopleft2.href = "http://www.js.10086.cn/group/index/index.html?ver=20121030";
    aTopleft2.innerHTML = "政企客户";

    pTopleft.appendChild(aTopleft2);

    var spanTopleft2 = document.createElement("span");
    spanTopleft2.innerHTML = " 欢迎来到中国移动！";

    pTopleft.appendChild(spanTopleft2);


    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    var CmWebtokenid;
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
        var spanTopleft3 = document.createElement("span");
        spanTopleft3.innerHTML = CmWebtokenid;
        pTopleft.appendChild(spanTopleft3);

        var aTopleft3 = document.createElement("a");
        aTopleft3.id = "login";
        aTopleft3.className = "orange";
        aTopleft3.style.color = "#f0870c";
        var logout = eval('(' + '{"name":null,"responsible":null,"href":"javascript:loginComponent.logoutSure()","editable":null,"isEdit":"0"}' + ')');
        aTopleft3.href = logout.href;                                          //不可编辑  动态代码（详见登录认证）
        aTopleft3.innerHTML = "[退出]";
        pTopleft.appendChild(aTopleft3);
    } else {
        var aTopleft3 = document.createElement("a");
        aTopleft3.id = "logout";
        aTopleft3.className = "orange";
        aTopleft3.style.color = "#f0870c";
        var login = eval('(' + '{"name":null,"responsible":null,"href":"javascript:BmonPage.showLoginDialog(\'topLogin\');","editable":null,"isEdit":"0"}' + ')');
        aTopleft3.href = login.href;                                          //不可编辑  动态代码（详见登录认证）
        aTopleft3.innerHTML = "[请登录]";
        pTopleft.appendChild(aTopleft3);
    }


    var divTopright = document.createElement("div");
    divTopright.className = "topright";

    divTopmain.appendChild(divTopright);

    var divTopAddFav = document.createElement("div");
    divTopAddFav.className = "js_head_addFav";

    var divTopAddFav1 = document.createElement("div");
    divTopAddFav.appendChild(divTopAddFav1);

    //var divTopAddFavP1 = document.createElement("p");
    //divTopAddFavP1.innerHTML = "您的浏览器不支持自动加收藏";
    //var divTopAddFavP2 = document.createElement("p");
    //divTopAddFavP2.innerHTML = "请按Ctrl + D加入收藏";

    //divTopAddFav1.appendChild(divTopAddFavP1);
    //divTopAddFav1.appendChild(divTopAddFavP2);
    //divTopright.appendChild(divTopAddFav);

    /**
     var aTopright00 = document.createElement("div");
     aTopright00.id="topWb";
     aTopright00.style.display = "none";
     divTopright.appendChild(aTopright00);

     var aTopright01 = document.createElement("wb:follow-button");
     aTopright01.setAttribute("uid","1812610191");
     aTopright01.setAttribute("type","red_2");
     aTopright01.setAttribute("height","24");
     aTopright01.setAttribute("width","136");
     aTopright00.appendChild(aTopright01);
     */

    var aTopright0 = document.createElement("a");
    aTopright0.id = "attenUs";
    aTopright0.href = "http://e.weibo.com/jsmcc";
    aTopright0.target = "_blank";
    aTopright0.innerHTML = "关注我们";

    divTopright.appendChild(aTopright0);

    var spanTopright01 = document.createElement("span");
    spanTopright01.innerHTML = " | ";
    divTopright.appendChild(spanTopright01);

    var aTopright02 = document.createElement("a");
    aTopright02.href = "http://www.js.10086.cn/clientDownload/index.html";
    aTopright02.target = "_blank";
    aTopright02.innerHTML = "手机版";

    var aTopright03 = document.createElement("img");
    aTopright03.src = "http://img01.js.10086.cn/obsh/pics/topPhone.gif";
    divTopright.appendChild(aTopright03);

    divTopright.appendChild(aTopright02);

    var spanTopright2 = document.createElement("span");
    spanTopright2.innerHTML = " | ";

    divTopright.appendChild(spanTopright2);

    var aTopright1 = document.createElement("a");
    aTopright1.href = "http://www.10086.cn/support/focus/onlineservice/index.htm";                                          //不可编辑  www.**.10086.cn/onlineservice
    aTopright1.innerHTML = "在线客服";

    divTopright.appendChild(aTopright1);

    var spanTopright1 = document.createElement("span");
    spanTopright1.innerHTML = " | ";

    divTopright.appendChild(spanTopright1);

    var aTopright2 = document.createElement("a");
    aTopright2.href = "http://www.10086.cn/aboutus/";
    aTopright2.innerHTML = "关于中国移动";

    divTopright.appendChild(aTopright2);

    var spanTopright2 = document.createElement("span");
    spanTopright2.innerHTML = " | ";

    divTopright.appendChild(spanTopright2);

    var aTopright3 = document.createElement("a");
    aTopright3.href = "http://www.chinamobileltd.com/?lang=en";
    aTopright3.innerHTML = "ENGLISH";

    divTopright.appendChild(aTopright3);


    var logomenu = document.createElement("div");
    logomenu.className = "logomenu";

    header.appendChild(logomenu);

    var logo = document.createElement("a");
    logo.className = "logo";
    logo.href = "/";


    logomenu.appendChild(logo);

    var logogif = document.createElement("img");
    logogif.src = "http://files01.js.10086.cn/obsh/js_head/images/logo.gif";                             //各省logo
    logogif.alt = "中国移动欢迎您";
    logogif.width = "153";
    logogif.height = "58";

    logo.appendChild(logogif);


    var CmProvid = findCmProvid();

    if (CmProvid == "default") {
        var tips = document.createElement("div");
        tips.style.display = "block";
        tips.className = "tips";
        tips.id = "tips";

        logomenu.appendChild(tips);


        var tips_02 = document.createElement("div");
        tips_02.className = "tips_02";

        tips.appendChild(tips_02);

        var tips_01 = document.createElement("div");
        tips_01.className = "tips_01";

        tips_02.appendChild(tips_01);


        var tipsClose = document.createElement("div");
        tipsClose.className = "close";

        tips_02.appendChild(tipsClose);

        var tipsA = document.createElement("a");
        tipsA.href = "javascript:void(0)";
        tipsA.setAttribute("onclick", "javascript:getElementById('tips').style.display = 'none';");

        tipsClose.appendChild(tipsA);

        var tipsImg = document.createElement("img");
        tipsImg.src = "http://files01.js.10086.cn/obsh/js_head/images/close.gif";
        tipsImg.height = "7";
        tipsImg.width = "7";

        tipsA.appendChild(tipsImg);


        var ts = document.createElement("div");
        ts.className = "ts";

        tips_02.appendChild(ts);

        var tsWord = document.createElement("p");
        tsWord.innerHTML = "点这里可以切换省";

        ts.appendChild(tsWord);


        var Days = 365;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = "CmProvid=js;path=/;domain=10086.cn;expires=" + exp.toGMTString();
    }


    var provinces = document.createElement("div");
    provinces.className = "provinces bj";
    provinces.id = "pro1";

    logomenu.appendChild(provinces);


    if (document.all) {
        try {
            var topcity = document.createElement("div");
            topcity.innerHTML = "江苏";
            topcity.className = "toppro";
            topcity.onmouseover = function () {
                ShowDivCity();
            };
            topcity.onmouseout = function () {
                HiddenDivCity();
            };
            //topcity.setAttribute("onmouseover", "ShowDivCity()");
            //topcity.setAttribute("onmouseout", "HiddenDivCity()");
            provinces.appendChild(topcity);

            var divCity = document.createElement("div");
            divCity.id = "DivCity";
            divCity.style.display = "none";

            divCity.onmouseover = function () {
                ShowDivCity();
            };
            divCity.onmouseout = function () {
                HiddenDivCity();
            };
            //divCity.setAttribute("onmouseover", "ShowDivCity()");
            //divCity.setAttribute("onmouseout", "HiddenDivCity()");
            provinces.appendChild(divCity);

            var ulCity = document.createElement("ul");

            divCity.appendChild(ulCity);
            try {
                var topCountry = document.createElement("div");
                topCountry.innerHTML = getCityName(getCookie("city")) != undefined ? getCityName(getCookie("city")) : "南京";
                topCountry.id = "topcity";
                topCountry.className = "topcity";
                topCountry.onmouseover = function () {
                    ShowDivCountry();
                };
                topCountry.onmouseout = function () {
                    HiddenDivCountry();
                };
                //topCountry.setAttribute("onmouseover", "ShowDivCountry()");
                //topCountry.setAttribute("onmouseout", "HiddenDivCountry()");
                provinces.appendChild(topCountry);

                var divCountry = document.createElement("div");
                divCountry.id = "header-city-cityList";
                divCountry.style.display = "none";
                divCountry.onmouseover = function () {
                    ShowDivCountry();
                };
                divCountry.onmouseout = function () {
                    HiddenDivCountry();
                };

                //divCountry.setAttribute("onmouseover", "ShowDivCountry()");
                //divCountry.setAttribute("onmouseout", "HiddenDivCountry()");
                provinces.appendChild(divCountry);


                var ulCountry = document.createElement("ul");

                divCountry.appendChild(ulCountry);
            } catch (e) {
                var topCountry = document.createElement("div");
                topCountry.className = "topCity";
                topCountry.innerHTML = getCityName(getCookie("city")) != undefined ? getCityName(getCookie("city")) : "南京";
                //topCountry.id="topcity";
                topCountry.setAttribute("onmouseover", "ShowDivCountry()");
                topCountry.setAttribute("onmouseout", "HiddenDivCountry()");
                provinces.appendChild(topCountry);

                var divCountry = document.createElement("div");
                divCountry.id = "header-city-cityList";
                divCountry.setAttribute("onmouseover", "ShowDivCountry()");
                divCountry.setAttribute("onmouseout", "HiddenDivCountry()");
                provinces.appendChild(divCountry);

                var ulCountry = document.createElement("ul");

                divCountry.appendChild(ulCountry);
            }
        } catch (e) {
            var topcity = document.createElement("div");
            topcity.className = "toppro";
            topcity.innerHTML = "江苏";                        //各省名称
            topcity.id = "topcity";
            topcity.setAttribute("onmouseover", "ShowDivCity()");
            topcity.setAttribute("onmouseout", "HiddenDivCity()");
            provinces.appendChild(topcity);

            var divCity = document.createElement("div");
            divCity.id = "DivCity";
            divCity.setAttribute("onmouseover", "ShowDivCity()");
            divCity.setAttribute("onmouseout", "HiddenDivCity()");
            provinces.appendChild(divCity);

            var ulCity = document.createElement("ul");

            divCity.appendChild(ulCity);
        }

    } else {
        var topcity = document.createElement("div");
        topcity.className = "toppro";
        topcity.innerHTML = "江苏";                            //各省名称
        topcity.setAttribute("onmouseover", "ShowDivCity()");
        topcity.setAttribute("onmouseout", "HiddenDivCity()");
        provinces.appendChild(topcity);

        var divCity = document.createElement("div");
        divCity.id = "DivCity";
        divCity.setAttribute("onmouseover", "ShowDivCity()");
        divCity.setAttribute("onmouseout", "HiddenDivCity()");
        provinces.appendChild(divCity);

        var ulCity = document.createElement("ul");

        divCity.appendChild(ulCity);
        var topCountry = document.createElement("div");
        topCountry.className = "topcity";
        topCountry.innerHTML = getCityName(getCookie("city")) != undefined ? getCityName(getCookie("city")) : "南京";
        //topCountry.id="topcity";
        topCountry.setAttribute("onmouseover", "ShowDivCountry()");
        topCountry.setAttribute("onmouseout", "HiddenDivCountry()");
        provinces.appendChild(topCountry);

        var divCountry = document.createElement("div");
        divCountry.id = "header-city-cityList";
        divCountry.setAttribute("onmouseover", "ShowDivCountry()");
        divCountry.setAttribute("onmouseout", "HiddenDivCountry()");
        provinces.appendChild(divCountry);

        var ulCountry = document.createElement("ul");

        divCountry.appendChild(ulCountry);


    }


    var provincesJson =
        eval("[{\"name\":\"北京\",\"href\":\"http://www.bj.10086.cn\"}," +
            "{\"name\":\"广东\",\"href\":\"http://www.gd.10086.cn\"}," +
            "{\"name\":\"上海\",\"href\":\"http://www.sh.10086.cn\"}," +
            "{\"name\":\"天津\",\"href\":\"http://www.tj.10086.cn\"}," +
            "{\"name\":\"重庆\",\"href\":\"http://www.cq.10086.cn\"}," +
            "{\"name\":\"辽宁\",\"href\":\"http://www.ln.10086.cn\"}," +

            "{\"name\":\"江苏\",\"href\":\"http://www.js.10086.cn\"}," +
            "{\"name\":\"湖北\",\"href\":\"http://www.hb.10086.cn\"}," +
            "{\"name\":\"四川\",\"href\":\"http://www.sc.10086.cn\"}," +
            "{\"name\":\"陕西\",\"href\":\"http://www.sn.10086.cn\"}," +
            "{\"name\":\"河北\",\"href\":\"http://www.he.10086.cn\"}," +
            "{\"name\":\"山西\",\"href\":\"http://www.sx.10086.cn\"}," +

            "{\"name\":\"河南\",\"href\":\"http://www.ha.10086.cn\"}," +
            "{\"name\":\"吉林\",\"href\":\"http://www.jl.10086.cn\"}," +
            "{\"name\":\"黑龙江\",\"href\":\"http://www.hl.10086.cn\"}," +
            "{\"name\":\"内蒙古\",\"href\":\"http://www.nm.10086.cn\"}," +
            "{\"name\":\"山东\",\"href\":\"http://www.sd.10086.cn\"}," +
            "{\"name\":\"安徽\",\"href\":\"http://www.ah.10086.cn\"}," +

            "{\"name\":\"浙江\",\"href\":\"http://www.zj.10086.cn\"}," +
            "{\"name\":\"福建\",\"href\":\"http://www.fj.10086.cn\"}," +
            "{\"name\":\"湖南\",\"href\":\"http://www.hn.10086.cn\"}," +
            "{\"name\":\"广西\",\"href\":\"http://www.gx.10086.cn\"}," +
            "{\"name\":\"江西\",\"href\":\"http://www.jx.10086.cn\"}," +
            "{\"name\":\"贵州\",\"href\":\"http://www.gz.10086.cn\"}," +
            "{\"name\":\"云南\",\"href\":\"http://www.yn.10086.cn\"}," +

            "{\"name\":\"西藏\",\"href\":\"http://www.xz.10086.cn\"}," +
            "{\"name\":\"海南\",\"href\":\"http://www.hi.10086.cn\"}," +
            "{\"name\":\"甘肃\",\"href\":\"http://www.gs.10086.cn\"}," +
            "{\"name\":\"宁夏\",\"href\":\"http://www.nx.10086.cn\"}," +
            "{\"name\":\"青海\",\"href\":\"http://www.qh.10086.cn\"}," +
            "{\"name\":\"新疆\",\"href\":\"http://www.xj.10086.cn\"}]");


    for (var i = 0; i < provincesJson.length; i++) {
        var liCity = document.createElement("li");
        ulCity.appendChild(liCity);

        var aCity = document.createElement("a");
        aCity.href = provincesJson[i].href;
        aCity.target = "_blank";
        aCity.innerHTML = provincesJson[i].name;

        liCity.appendChild(aCity);
    }

    var provincesJsonCou =
        eval("[{\"name\":\"南京\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('南京')\"}," +
            "{\"name\":\"无锡\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('无锡')\"}," +
            "{\"name\":\"徐州\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('徐州')\"}," +
            "{\"name\":\"常州\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('常州')\"}," +
            "{\"name\":\"苏州\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('苏州')\"}," +
            "{\"name\":\"南通\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('南通')\"}," +

            "{\"name\":\"连云港\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('连云港')\"}," +
            "{\"name\":\"淮安\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('淮安')\"}," +
            "{\"name\":\"盐城\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('盐城')\"}," +
            "{\"name\":\"扬州\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('扬州')\"}," +
            "{\"name\":\"镇江\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('镇江')\"}," +
            "{\"name\":\"泰州\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('泰州')\"}," +

            "{\"name\":\"宿迁\",\"href\":\" javascript:void(0)\",\"onclick\":\"javascript:doReplaceCity('宿迁')\"}]");


    for (var i = 0; i < provincesJsonCou.length; i++) {
        try {
            var liCountry = document.createElement("li");
            ulCountry.appendChild(liCountry);

            var aCountry = document.createElement("a");
            aCountry.href = provincesJsonCou[i].onclick;
            //aCountry.setAttribute("onclick");
            //aCountry.target="_blank";

            //var bCountry = document.createElement("span");
            //bCountry.onclick=function(){
            //setValue(this);
            //};
            //bCountry.style="cursor: pointer;";
            //bCountry.innerHTML = provincesJsonCou[i].name;


            aCountry.innerHTML = provincesJsonCou[i].name;


            liCountry.appendChild(aCountry);
        } catch (e) {
        }
    }

    var divClear = document.createElement("div");
    divClear.className = "clear";

    provinces.appendChild(divClear);

    var divMenu = document.createElement("div");
    divMenu.id = "menu";

    logomenu.appendChild(divMenu);

    var imgRightLogo = document.createElement("img");
    imgRightLogo.src = "http://files01.js.10086.cn/obsh/js_head/images/right_logo.gif";                         //各省右侧logo
    imgRightLogo.alt = "移动改变生活";
    //imgRightLogo.style.styleFloat="right";
    //imgRightLogo.style.cssFloat="right";
    //imgRightLogo.width="207";
    //imgRightLogo.height="43";
    var imgRightLogoa = document.createElement("a");
    imgRightLogoa.href = "http://www.js.10086.cn/mall/";
    imgRightLogoa.target = "_blank";
    imgRightLogoa.appendChild(imgRightLogo);

    divMenu.appendChild(imgRightLogoa);

    //================一级导航开始

    var divNav = document.createElement("div");
    divNav.className = "nav";

    divMenu.appendChild(divNav);


    var label1 = document.createElement("LABEL");
    if (thisUPage == "js") {
        label1.className = "cur";
    }
    label1.id = "btn0_0";

    var aLabel1 = document.createElement("a");
    aLabel1.href = "http://www.10086.cn/js";                                 //www.10086.cn/**
    aLabel1.innerHTML = "首页";

    label1.appendChild(aLabel1);

    divNav.appendChild(label1);


    var label2;
    if (document.all) {
        try {
            label2 = document.createElement("<LABEL id=btn0_1 onmouseover=navOver(0) onmouseout=navOut(0)>");
        } catch (e) {
            label2 = document.createElement("LABEL");
            label2.id = "btn0_1";
            label2.setAttribute("onmouseover", "navOver(0)");
            label2.setAttribute("onmouseout", "navOut(0)");
        }
    } else {
        label2 = document.createElement("LABEL");
        label2.id = "btn0_1";
        label2.setAttribute("onmouseover", "navOver(0)");
        label2.setAttribute("onmouseout", "navOut(0)");
    }

    if (thisUPage == "my") {
        label2.className = "cur";
    }


    var aLabel2 = document.createElement("a");
    var myMobile = eval('(' + '{"name":null,"responsible":null,"href":"http://www.js.10086.cn/my/","editable":null,"isEdit":"0"}' + ')');
    aLabel2.href = myMobile.href;                                 //www.**.10086.cn/my/
    aLabel2.innerHTML = "我的移动";

    label2.appendChild(aLabel2);

    divNav.appendChild(label2);


    var label3;
    if (document.all) {
        try {
            label3 = document.createElement("<LABEL id=btn0_1 onmouseover=navOver(1) onmouseout=navOut(1)>");
        } catch (e) {
            label3 = document.createElement("LABEL");
            label3.id = "btn0_2";
            label3.setAttribute("onmouseover", "navOver(1)");
            label3.setAttribute("onmouseout", "navOut(1)");
        }
    } else {
        label3 = document.createElement("LABEL");
        label3.id = "btn0_2";
        label3.setAttribute("onmouseover", "navOver(1)");
        label3.setAttribute("onmouseout", "navOut(1)");
    }

    if (thisUPage == "service") {
        label3.className = "cur";
    }


    var aLabel3 = document.createElement("a");
    var onlineBusiness = eval('(' + '{"name":null,"responsible":null,"href":"http://service.js.10086.cn/index.jsp#home","editable":null,"isEdit":"2"}' + ')');
    aLabel3.href = onlineBusiness.href;                                 //www.**.10086.cn/service
    aLabel3.innerHTML = "网上营业厅";

    label3.appendChild(aLabel3);

    divNav.appendChild(label3);

    var label4;
    if (document.all) {
        try {
            label4 = document.createElement("<LABEL id=btn0_1 onmouseover=navOver(2) onmouseout=navOut(2)>");
        } catch (e) {
            label4 = document.createElement("LABEL");
            label4.id = "btn0_3";
            label4.setAttribute("onmouseover", "navOver(2)");
            label4.setAttribute("onmouseout", "navOut(2)");
        }
    } else {
        label4 = document.createElement("LABEL");
        label4.id = "btn0_3";
        label4.setAttribute("onmouseover", "navOver(2)");
        label4.setAttribute("onmouseout", "navOut(2)");
    }

    if (thisUPage == "support") {
        label4.className = "cur";
    }


    var aLabel4 = document.createElement("a");
    aLabel4.href = "http://www.10086.cn/support/js/";                                 //www.10086.cn/support/**/
    aLabel4.innerHTML = "服务与支持";

    label4.appendChild(aLabel4);

    divNav.appendChild(label4);

    var aLabel2Href = aLabel2.href;
    var aLabel3Href = aLabel3.href;
    var aLabel4Href = aLabel4.href;

    if (aLabel2Href.charAt(aLabel2Href.length - 1) == "/") {
        aLabel2Href = aLabel2Href.substring(0, aLabel2Href.length - 1);
    }

    if (aLabel3Href.charAt(aLabel3Href.length - 1) == "/") {
        aLabel3Href = aLabel3Href.substring(0, aLabel3Href.length - 1);
    }

    if (aLabel4Href.charAt(aLabel4Href.length - 1) == "/") {
        aLabel4Href = aLabel4Href.substring(0, aLabel4Href.length - 1);
    }

    if (thisURL == aLabel2Href) {
        label2.className = "cur";
    }
    else if (thisURL == aLabel3Href) {
        label3.className = "cur";
    }
    else if (thisURL == aLabel4Href) {
        label4.className = "cur";
    }

    var divNavjs = document.createElement("div");
    divNavjs.id = "navjs";

    divMenu.appendChild(divNavjs);


    //================一级导航结束

    //=======二三级导航开始            json由后台生成
    var navsJson = eval('[[[{"name":"我的账户","href":"http://www.js.10086.cn/my/"},{"name":"套餐余量查询","href":"http://service.js.10086.cn/#TCSYQK"},{"name":"业务状态查询","href":"http://service.js.10086.cn/#TCJYWCX_CPTC"},{"name":"详单查询","href":"http://service.js.10086.cn/#QDCX"},{"name":"账单查询","href":"http://service.js.10086.cn/#ZDCX"},{"name":"积分查询","href":"http://service.js.10086.cn/#JFDHCX_JFCX"}],[{"name":"我要办理","href":"http://www.js.10086.cn/my/"},{"name":"办理业务","href":"http://service.js.10086.cn/#PERSON_BUSI"},{"name":"银行卡充值","href":"http://service.js.10086.cn/wscz.jsp"},{"name":"优惠活动","href":"http://www.js.10086.cn/promoting.do?method=allAct&cityNum=2071&param=preAct&actCity=2071&status=0"},{"name":"个人设置","href":"http://service.js.10086.cn/#GRZLGL_GRZL"}],[{"name":"移动生活","href":"http://www.js.10086.cn/my/"},{"name":"手机阅读","href":"http://www.js.10086.cn/my/iportal/page/phoneRead.jsp"},{"name":"我的彩铃","href":"http://www.js.10086.cn/my/iportal/page/colorRing.jsp"},{"name":"手机游戏","href":"http://g.10086.cn/"},{"name":"移动微博","href":"http://weibo.10086.cn/"},{"name":"动感社区","href":"http://www.js.10086.cn/mzone/"}]],[[{"name":"话费服务","href":"http://service.js.10086.cn/index.jsp#CX"},{"name":"消费情况查询","href":"http://service.js.10086.cn/index.jsp#ZDCX"},{"name":"套餐使用查询","href":"http://service.js.10086.cn/index.jsp#TCSYQK"},{"name":"已开通的服务","href":"http://service.js.10086.cn/index.jsp#TCJYWCX_CPTC"},{"name":"历史记录查询","href":"http://service.js.10086.cn/index.jsp#BLLSCX"},{"name":"其他信息查询","href":"http://service.js.10086.cn/index.jsp#GSDCX"}],[{"name":"业务办理","href":"http://service.js.10086.cn/index.jsp#PERSON_BUSI"},{"name":"通用流量包","href":"http://service.js.10086.cn/#GPRS4G"},{"name":"流量加油包","href":"http://service.js.10086.cn/#GPRSDJB"},{"name":"套餐变更","href":"http://service.js.10086.cn/pptcbg.jsp#home"},{"name":"自选套餐","href":"http://service.js.10086.cn/zxtc.jsp"},{"name":"个人业务","href":"http://service.js.10086.cn/index.jsp#PERSON_BUSI"},{"name":"家庭业务","href":"http://service.js.10086.cn/index.jsp#JTDHYY"},{"name":"集团业务","href":"http://service.js.10086.cn/index.jsp#GROUP_BUSI"}],[{"name":"积分计划","href":"http://service.js.10086.cn/index.jsp#JFDHCX_JFCX"},{"name":"积分介绍","href":"http://service.js.10086.cn/index.jsp#JF_JS"},{"name":"积分查询","href":"http://service.js.10086.cn/index.jsp#JFDHCX_JFCX"},{"name":"积分商城","href":"http://jf.10086.cn/"}],[{"name":"优惠促销","href":"http://www.js.10086.cn/promoting.do?method=allAct&param=preAct"},{"name":"优惠活动大全","href":"http://www.js.10086.cn/showAct.do?method=more&className=cxPics&h=0"},{"name":"我参加的活动","href":"http://service.js.10086.cn/index.jsp#TCJYWCX_YXYW"},{"name":"我的中奖信息","href":"http://www.js.10086.cn/promotion/promotion.jsp?type=2"},{"name":"中奖信息登记","href":"http://www.js.10086.cn/infoBook.portal?method=isAward&param=awardAct&actCity=2071&status=0"},{"name":"电子券领取","href":"http://www.js.10086.cn/ticket.do?param=ticket&actCity=2071&status=0"}],[{"name":"选号入网","href":"http://service.js.10086.cn/index.jsp#ZXRW_BUYMOBILE"},{"name":"选号入网","href":"http://service.js.10086.cn/index.jsp#ZXRW_BUYMOBILE"},{"name":"订单查询","href":"http://www.js.10086.cn/member/member/imall.html"},{"name":"一卡多号","href":"http://service.js.10086.cn/index.jsp#SNYKDH"},{"name":"校园18元卡","href":"http://www.10086.cn/18card/"}],[{"name":"网上充值","href":"http://service.js.10086.cn/wscz.jsp"},{"name":"银行卡充值","href":"http://service.js.10086.cn/wscz.jsp#WSCZYL"},{"name":"充值卡充值","href":"http://service.js.10086.cn/wscz.jsp#CZKCZNEW"},{"name":"热线查询与充值","href":"http://service.js.10086.cn/index.jsp#RXCXCZ"},{"name":"充值交费记录","href":"http://service.js.10086.cn/index.jsp#CZJF_CZJFJL"},{"name":"网厅优惠精选","href":"http://service.js.10086.cn/bcma.jsp#WBLYHHD"}],[{"name":"优惠购机","href":"http://www.js.10086.cn/mall/"},{"name":"合约购机","href":"http://www.js.10086.cn/mall/web/hygj.html"},{"name":"选机中心","href":"http://www.js.10086.cn/mall/web/goods_center.html"},{"name":"促销活动","href":"http://www.js.10086.cn/mall/web/cxhd.html"},{"name":"团购","href":"http://www.js.10086.cn/mall/web/group_buying_list.html"}],[{"name":"个人设置","href":"http://service.js.10086.cn/index.jsp#SZ"},{"name":"个人设置","href":"http://service.js.10086.cn/index.jsp#GRZLGL_GRZL"},{"name":"功能设置","href":"http://service.js.10086.cn/index.jsp#ZDQDDZ"},{"name":"常用服务","href":"http://service.js.10086.cn/index.jsp#SZ"}]],[[{"name":"服务渠道指南","href":"http://www.10086.cn/support/channel/"},{"name":"实体营业厅","href":"http://www.10086.cn/support/channel/Entity1/"},{"name":"短信营业厅","href":"http://www.10086.cn/support/channel/SMS/"},{"name":"网上营业厅","href":"http://www.10086.cn/support/channel/Online/"},{"name":"wap营业厅","href":"http://www.10086.cn/support/channel/wap/"},{"name":"自助终端","href":"http://www.10086.cn/support/channel/self_service/"},{"name":"10086热线","href":"http://www.10086.cn/support/channel/10086/"}],[{"name":"移动品牌介绍","href":"http://www.10086.cn/support/brand/"},{"name":"了解全球通","href":"http://www.10086.cn/aboutus/culture/gotone/Intro/"},{"name":"全球通资费","href":"http://www.10086.cn/fee/gotone/"},{"name":"了解动感地带","href":"http://www.10086.cn/aboutus/culture/mzone/know/"},{"name":"动感地带资费","href":"http://www.10086.cn/fee/mzone/"},{"name":"了解神州行","href":"http://www.10086.cn/aboutus/culture/easyown/"}],[{"name":"终端使用帮助","href":"http://www.10086.cn/support/phone/"},{"name":"移动自主品牌","href":"http://www.10086.cn/cmphone/"},{"name":"三星手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=samsung"},{"name":"酷派手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=coolpad"},{"name":"诺基亚体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=nokia"},{"name":"更多手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=all"}],[{"name":"下载中心","href":"http://www.10086.cn/support/download"},{"name":"客户端","href":"http://www.10086.cn/support/download/client/"},{"name":"手机主题","href":"http://www.10086.cn/support/download/theme/"},{"name":"全球通杂志","href":"http://www.10086.cn/support/download/magazine/"}],[{"name":"业务使用帮助","href":"http://www.js.10086.cn/support/businesshelp"},{"name":"资费专区","href":"http://www.10086.cn/fee/"},{"name":"国际/港澳台","href":"http://www.10086.cn/roaming/"},{"name":"移动业务大全","href":"http://www.js.10086.cn/support/businesshelp/mainlist/index.html"},{"name":"宽带故障排查","href":"http://www.js.10086.cn/support/businesshelp/morehot/bushelp/2011/content63406.html"},{"name":"Wlan使用帮助","href":"http://www.js.10086.cn/support/businesshelp/morehot/bushelp/2011/content63397.html"},{"name":"139邮箱设置","href":"http://www.js.10086.cn/support/businesshelp/morehot/bushelp/2011/content63396.html"}],[{"name":"无线娱乐","href":"http://www.js.10086.cn/joy/portal/"},{"name":"无线娱乐欢乐多","href":"http://www.js.10086.cn/joy/portal/"},{"name":"热血动漫随心享","href":"http://www.js.10086.cn/joy/portal/index.php?app=cartoon"},{"name":"无线音乐随身听","href":"http://www.js.10086.cn/joy/portal/music"},{"name":"热门小说尽情阅","href":"http://www.js.10086.cn/joy/portal/novel"},{"name":"中秋赢电脑大奖","href":"http://www.js.10086.cn/joy/activity/love/"}],[{"name":"动感社区","href":"http://www.js.10086.cn/mzone/space.php"},{"name":"优惠购机送话费","href":"http://www.js.10086.cn/mzone/space.php?uid=10086&do=blog&id=170266"},{"name":"我在悄悄喜欢你","href":"http://www.js.10086.cn/mzone/space.php?app=314&type=sina"},{"name":"移动型人装备","href":"http://www.js.10086.cn/mzone/space.php?uid=10086&do=blog&id=170197"},{"name":"欢迎新生来报到","href":"http://www.js.10086.cn/school"},{"name":"童鞋你被点名咯","href":"http://www.js.10086.cn/mzone/app/call/"}],[{"name":"其他服务产品","href":"http://www.js.10086.cn/support/otherProducts/"},{"name":"跨省区服务","href":"http://www.js.10086.cn/support/otherProducts/crossregion/"},{"name":"问卷调查","href":"http://www.js.10086.cn/support/otherProducts/survey/"},{"name":"在线客服","href":"http://www.10086.cn/support/focus/onlineservice/index.htm"},{"name":"在线投诉","href":"http://www.10086.cn/service/advise/"},{"name":"Wlan热点查询","href":"http://www.js.10086.cn/support/otherProducts/"}]]]');
    //var navsJson = eval('[[[{"name":"我的账户","href":"http://www.js.10086.cn/my/"},{"name":"套餐余量查询","href":"http://service.js.10086.cn/#TCSYQK"},{"name":"业务状态查询","href":"http://service.js.10086.cn/#TCJYWCX_CPTC"},{"name":"详单查询","href":"http://service.js.10086.cn/#QDCX"},{"name":"账单查询","href":"http://service.js.10086.cn/#ZDCX"},{"name":"积分查询","href":"http://service.js.10086.cn/#JFDHCX_JFCX"}],[{"name":"我要办理","href":"http://www.js.10086.cn/my/"},{"name":"办理业务","href":"http://service.js.10086.cn/#PERSON_BUSI"},{"name":"在线充值","href":"http://service.js.10086.cn/#WSCZ"},{"name":"优惠活动","href":"http://www.js.10086.cn/promote.portal?method=searchAct"},{"name":"个人设置","href":"http://service.js.10086.cn/#GRZLGL_GRZL"}],[{"name":"移动生活","href":"http://www.js.10086.cn/my/"},{"name":"手机阅读","href":"http://www.js.10086.cn/product/area/read/"},{"name":"热门彩铃","href":"http://www.js.10086.cn/product/area/ring/"},{"name":"手机游戏","href":"http://g.10086.cn/"},{"name":"移动微博","href":"http://weibo.10086.cn/"},{"name":"无线娱乐","href":"http://weibo.10086.cn/"},{"name":"动感社区","href":"http://www.js.10086.cn/mzone/"}]],[[{"name":"话费服务","href":"http://service.js.10086.cn/index.jsp#CX"},{"name":"消费情况查询","href":"http://service.js.10086.cn/index.jsp#ZDCX"},{"name":"套餐使用查询","href":"http://service.js.10086.cn/index.jsp#TCSYQK"},{"name":"已开通的服务","href":"http://service.js.10086.cn/index.jsp#TCJYWCX_CPTC"},{"name":"历史记录查询","href":"http://service.js.10086.cn/index.jsp#BLLSCX"},{"name":"其他信息查询","href":"http://service.js.10086.cn/index.jsp#GSDCX"}],[{"name":"业务办理","href":"http://service.js.10086.cn/index.jsp#PERSON_BUSI"},{"name":"个人业务","href":"http://service.js.10086.cn/index.jsp#PERSON_BUSI"},{"name":"家庭业务","href":"http://service.js.10086.cn/index.jsp#FAMILY_BUSI"},{"name":"集团业务","href":"http://service.js.10086.cn/index.jsp#GROUP_BUSI"},{"name":"您的需求","href":"http://service.js.10086.cn/index.jsp#SELF_BUSI"}],[{"name":"积分兑换","href":"http://service.js.10086.cn/index.jsp#JFDHCX_JFCX"},{"name":"M值兑换新业务","href":"http://service.js.10086.cn/index.jsp#MZDH_MZDHXYW"},{"name":"积分查询","href":"http://service.js.10086.cn/index.jsp#JFDHCX_JFCX"},{"name":"M值查询","href":"http://service.js.10086.cn/index.jsp#MZDHCX_MZCX"},{"name":"积分兑换","href":"http://jf.10086.cn/index.html"},{"name":"e币查询","href":"http://service.js.10086.cn/index.jsp#EBCX"},{"name":"商城币查询","href":"http://service.js.10086.cn/index.jsp#SCBCX"}],[{"name":"优惠促销","href":"http://www.js.10086.cn/promoting.do?method=allAct&param=preAct"},{"name":"优惠活动大全","href":"http://www.js.10086.cn/promoting.do?method=allAct&param=preAct"},{"name":"我参加的活动","href":"http://service.js.10086.cn/index.jsp#TCJYWCX_YXYW"},{"name":"我的中奖信息","href":"http://www.js.10086.cn/awards.do?param=myAwardAct&actCity=2071&status=0"},{"name":"中奖信息登记","href":"http://www.js.10086.cn/infoBook.portal?method=isAward&param=awardAct&actCity=2071&status=0"},{"name":"电子券领取","href":"http://www.js.10086.cn/ticket.do?param=ticket&actCity=2071&status=0"}],[{"name":"选号入网","href":"http://service.js.10086.cn/index.jsp#ZXRW_QPPZXRW"},{"name":"选号入网","href":"http://service.js.10086.cn/index.jsp#ZXRW_QPPZXRW"},{"name":"订单查询","href":"http://service.js.10086.cn/index.jsp#ZXRW_QPPZXRWDDCX"},{"name":"炫号随你挑","href":"http://service.js.10086.cn/act_js/activity_web/1143/index.html#home"}],[{"name":"网上充值","href":"http://service.js.10086.cn/index.jsp#WSCZ"},{"name":"在线充值","href":"http://service.js.10086.cn/index.jsp#WSCZ"},{"name":"充值卡充值","href":"http://service.js.10086.cn/index.jsp#CZKCZ"},{"name":"热线查询与充值","href":"http://service.js.10086.cn/index.jsp#RXCXCZ"},{"name":"充值交费记录","href":"http://service.js.10086.cn/index.jsp#CZJF_CZJFJL"},{"name":"网厅优惠精选","href":"http://service.js.10086.cn/bcma.jsp#WBLYHHD"}],[{"name":"优惠购机","href":"http://www.js.10086.cn/mall/"},{"name":"合约购机","href":"http://www.js.10086.cn/mall/web/hygj.html"},{"name":"选机中心","href":"http://www.js.10086.cn/mall/web/goods_center.html"},{"name":"促销活动","href":"http://www.js.10086.cn/mall/web/cxhd.html"},{"name":"团购","href":"http://www.js.10086.cn/mall/web/group_buying_list.html"}],[{"name":"个人设置","href":"http://service.js.10086.cn/index.jsp#SZ"},{"name":"个人设置","href":"http://service.js.10086.cn/index.jsp#GRZLGL_GRZL"},{"name":"功能设置","href":"http://service.js.10086.cn/index.jsp#ZDQDDZ"},{"name":"常用服务","href":"http://service.js.10086.cn/index.jsp#SZ"}]],[[{"name":"服务渠道指南","href":"http://www.10086.cn/support/channel/"},{"name":"实体营业厅","href":"http://www.10086.cn/support/channel/Entity1/"},{"name":"短信营业厅","href":"http://www.10086.cn/support/channel/SMS/"},{"name":"网上营业厅","href":"http://www.10086.cn/support/channel/Online/"},{"name":"掌上/手机营业厅","href":"http://www.10086.cn/support/channel/mobile/"},{"name":"自助终端","href":"http://www.10086.cn/support/channel/self_service/"},{"name":"10086热线","href":"http://www.10086.cn/support/channel/10086/"}],[{"name":"移动品牌介绍","href":"http://www.10086.cn/support/brand/"},{"name":"了解全球通","href":"http://www.10086.cn/aboutus/culture/gotone/Intro/"},{"name":"全球通资费","href":"http://www.10086.cn/fee/gotone/"},{"name":"了解动感地带","href":"http://www.10086.cn/aboutus/culture/mzone/know/"},{"name":"动感地带资费","href":"http://www.10086.cn/fee/mzone/"},{"name":"了解神州行","href":"http://www.10086.cn/aboutus/culture/easyown/"},{"name":"神州行资费","href":"http://www.10086.cn/fee/easyown/"}],[{"name":"终端使用帮助","href":"http://www.10086.cn/support/phone/"},{"name":"三星手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=samsung"},{"name":"酷派手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=coolpad"},{"name":"诺基亚体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=nokia"},{"name":"更多手机体验","href":"http://www.10086.cn/support/phone/terminalhelp/?brand=all"}],[{"name":"下载中心","href":"http://www.10086.cn/support/download"},{"name":"客户端","href":"http://www.10086.cn/support/download/client/"},{"name":"手机主题","href":"http://www.10086.cn/support/download/theme/"},{"name":"全球通杂志","href":"http://www.10086.cn/support/download/magazine/"},{"name":"自主品牌资料","href":"http://www.10086.cn/support/download/ownBrand/"}],[{"name":"服务热点","href":"http://www.10086.cn/support/focus/index.htm"},{"name":"为民服务专区","href":"http://www.10086.cn/support/focus/wmfw/index.htm"},{"name":"跨区服务","http://www.10086.cn/support/focus/Crossregion/index.htm"},{"name":"号码归属地查询","href":"http://www.10086.cn/support/focus/ownership/index.htm"},{"name":"WLAN热点查询","href":"http://www.10086.cn/support/focus/wlan/index.htm"},{"name":"终端售后点查询","href":"http://www.10086.cn/support/focus/terminal/"},{"name":"投诉与建议","href":"http://www.10086.cn/support/focus/suggest/index.htm"}],[{"name":"业务使用帮助","href":"http://www.js.10086.cn/support/businesshelp"},{"name":"资费专区","href":"http://www.10086.cn/fee/"},{"name":"国际/港澳台","href":"http://www.10086.cn/roaming/"},{"name":"移动业务大全","href":"http://www.js.10086.cn/support/businesshelp/mainlist/index.html"},{"name":"宽带故障排查","href":"http://www.js.10086.cn/support/businesshelp/Guide/2011/2011-06-1763406.html"},{"name":"Wlan使用帮<br/>助","href":"http://www.js.10086.cn/support/businesshelp/Guide/2011/2011-05-3063397.html"},{"name":"139邮箱设置","href":"http://www.js.10086.cn/support/businesshelp/Guide/2011/2011-05-3063396.html"}],[{"name":"动感社区","href":"http://www.js.10086.cn/mzone/"},{"name":"动动团开团啦","href":"http://www.js.10086.cn/mzone/m/ddtuan/"},{"name":"新生请猛戳这里","href":"http://www.js.10086.cn/school"},{"name":"考神驾到速膜拜","href":"http://www.js.10086.cn/mzone/space.php?app=381&v=sub"},{"name":"重口味美剧推荐","href":"http://www.js.10086.cn/mzone/space.php?uid=11337621&do=blog&id=171119"},{"name":"海贼迷年终考试","href":"http://www.js.10086.cn/mzone/space.php?uid=9874729&do=blog&id=171129"}],[{"name":"其他服务产品","href":"http://www.js.10086.cn/support/otherProducts/"},{"name":"问卷调查","href":"http://www.js.10086.cn/support/otherProducts/survey/"},{"name":"新版问卷调查","href":"http://www.js.10086.cn/iquestionnaire/page/task_list.jsp"},{"name":"供应商联系平台","href":"http://www.js.10086.cn/supply/"},{"name":"服务社会","href":"http://www.js.10086.cn/daypush/20130124/"},{"name":"网上建议","href":"http://www.js.10086.cn/support/otherProducts/client/index.html"},{"name":"12590语音杂志","href":"http://www.js.10086.cn/12590/001.html"}]]]');
    for (var h = 0; h < navsJson.length; h++) {
        var div;

        if (document.all) {
            try {
                div = document.createElement("<div id=js0" + h + " onmouseover=navOver(" + h + ") onmouseout=navOut(" + h + ")>");
            } catch (e) {
                div = document.createElement("div");
                div.id = "js0" + h;
                div.setAttribute("onmouseover", "navOver(" + h + ")");
                div.setAttribute("onmouseout", "navOut(" + h + ")");
            }
        } else {
            div = document.createElement("div");
            div.id = "js0" + h;
            div.setAttribute("onmouseover", "navOver(" + h + ")");
            div.setAttribute("onmouseout", "navOut(" + h + ")");
        }


        if (h == 0) {
            div.style.right = "200px";
        } else {
            div.style.right = "0";
        }

        divNavjs.appendChild(div);

        var dl = document.createElement("dl");

        div.appendChild(dl);

        var dt = document.createElement("dt");

        if (h == 0) {
            dt.style.top = "2px";
            dt.style.right = "100px";
        } else if (h == 1) {
            dt.style.top = "2px";
            dt.style.right = "160px";
        } else if (h == 2) {
            dt.style.top = "2px";
            dt.style.right = "20px";
        }


        dl.appendChild(dt);

        var dd = document.createElement("dd");

        dl.appendChild(dd);


        for (var i = 0; i < navsJson[h].length; i++) {
            var ul = document.createElement("ul");

            dd.appendChild(ul);

            for (var j = 0; j < navsJson[h][i].length; j++) {
                var href = navsJson[h][i][j].href;
                if (href.charAt(href.length - 1) == "/") {
                    href = href.substring(0, href.length - 1);
                }
                if (thisURL == href) {
                    if (h == 0) {
                        label2.className = "cur";
                    }
                    else if (h == 1) {
                        label3.className = "cur";
                    }
                    else if (h == 2) {
                        label4.className = "cur";
                    }
                }

                if (j == 0) {
                    var h2 = document.createElement("h2");

                    ul.appendChild(h2);

                    var a = document.createElement("a");
                    a.href = navsJson[h][i][0].href;
                    a.innerHTML = navsJson[h][i][0].name;

                    h2.appendChild(a);
                } else {
                    var li = document.createElement("li");

                    ul.appendChild(li);

                    var a = document.createElement("a");
                    a.href = navsJson[h][i][j].href;
                    a.innerHTML = navsJson[h][i][j].name;

                    li.appendChild(a);
                }
            }
            if (i != navsJson[h].length - 1) {
                var p = document.createElement("p");
                p.className = "line";

                dd.appendChild(p);
            }

        }

    }
    //=======二三级导航结束

    // subbar ----------------

    var divSubbar = document.createElement("div");
    divSubbar.className = "subbar";

    logomenu.appendChild(divSubbar);


    var divQuicklink = document.createElement("div");
    divQuicklink.className = "quicklink";

    divSubbar.appendChild(divQuicklink);


    if (document.all) {
        try {
            var divQuickbar = document.createElement("<div class=quickbar onmouseover=ShowDivkjbl() onmouseout=HiddenDivkjbl()>");
        } catch (e) {
            var divQuickbar = document.createElement("div");
            divQuickbar.className = "quickbar";
            divQuickbar.setAttribute("onmouseover", "ShowDivkjbl()");
            divQuickbar.setAttribute("onmouseout", "HiddenDivkjbl()");
        }
    } else {
        var divQuickbar = document.createElement("div");
        divQuickbar.className = "quickbar";
        divQuickbar.setAttribute("onmouseover", "ShowDivkjbl()");
        divQuickbar.setAttribute("onmouseout", "HiddenDivkjbl()");
    }


    divQuicklink.appendChild(divQuickbar);

    var spanQuickbar = document.createElement("span");
    spanQuickbar.innerHTML = "快捷办理通道";

    divQuickbar.appendChild(spanQuickbar);


    if (document.all) {
        try {
            var divDivCity6 = document.createElement("<div id=DivCity6 onmouseover=ShowDivkjbl() onmouseout=HiddenDivkjbl()>");
        } catch (e) {
            var divDivCity6 = document.createElement("div");
            divDivCity6.id = "DivCity6";
            divDivCity6.setAttribute("onmouseover", "ShowDivkjbl()");
            divDivCity6.setAttribute("onmouseout", "HiddenDivkjbl()");
            divDivCity6.style.display = "none";
        }
    } else {
        var divDivCity6 = document.createElement("div");
        divDivCity6.id = "DivCity6";
        divDivCity6.setAttribute("onmouseover", "ShowDivkjbl()");
        divDivCity6.setAttribute("onmouseout", "HiddenDivkjbl()");
        divDivCity6.style.display = "none";
    }


    divQuickbar.appendChild(divDivCity6);


    var ulMenugrop = document.createElement("ul");
    ulMenugrop.id = "menugrop";

    divDivCity6.appendChild(ulMenugrop);

    var liMenugrop = document.createElement("li");

    ulMenugrop.appendChild(liMenugrop);


    var dlMenugrop = document.createElement("dl");

    liMenugrop.appendChild(dlMenugrop);


    //===========================快捷办理通道下拉菜单开始  下拉菜单中项目省公司可自定义，不得超过6项              json由后台生成


    var kjJson = eval('[{"name":"充值","responsible":null,"href":"http://service.js.10086.cn/wscz.jsp#WSCZYL","editable":null,"isEdit":"2"},{"name":"选号入网","responsible":null,"href":"http://service.js.10086.cn/index.jsp#ZXRW_BUYMOBILE","editable":null,"isEdit":"0"},{"name":"网上商城","responsible":null,"href":"http://www.js.10086.cn/mall/","editable":null,"isEdit":"0"},{"name":"业务办理","responsible":null,"href":"http://service.js.10086.cn/index.jsp#PERSON_BUSI","editable":null,"isEdit":"0"},{"name":"优惠促销","responsible":null,"href":"http://www.js.10086.cn/promoting.do?method=allAct&param=preAct","editable":null,"isEdit":"0"},{"name":"查询","responsible":null,"href":"http://service.js.10086.cn/index.jsp#CX","editable":null,"isEdit":"0"}]');

    for (var i = 0; i < kjJson.length; i++) {
        var ddMenugrop = document.createElement("dd");

        dlMenugrop.appendChild(ddMenugrop);


        var aMenugrop = document.createElement("a");
        aMenugrop.href = kjJson[i].href;
        aMenugrop.innerHTML = kjJson[i].name;

        ddMenugrop.appendChild(aMenugrop);
    }

    //===========================快捷办理通道下拉菜单结束


    var pQuicklink = document.createElement("p");
    divQuicklink.appendChild(pQuicklink);

    var recommendedWordJson = eval('[{"name":"选号","responsible":null,"href":"#ZXRW_BUYMOBILE","editable":null,"isEdit":"0"},{"name":"优惠购机","responsible":null,"href":"http://www.js.10086.cn/mall/","editable":null,"isEdit":"0"},{"name":"话费充值","responsible":null,"href":"http://service.js.10086.cn/wscz.jsp#WSCZYL","editable":null,"isEdit":"0"},{"name":"积分商城","responsible":null,"href":"http://jf.10086.cn/","editable":null,"isEdit":"0"},{"name":"资费专区","responsible":null,"href":"http://www.10086.cn/fee/","editable":null,"isEdit":"0"},{"name":"4G专区","responsible":null,"href":"http://www.js.10086.cn/daypush/2013/1221/index.jsp?WT.mc_ev=1401AWT1","editable":null,"isEdit":"0"}]');


    for (var i = 0; i < recommendedWordJson.length; i++) {
        var aQuicklink = document.createElement("a");
        //集团可修改
        aQuicklink.innerHTML = recommendedWordJson[i].name;                //集团可修改
        if (recommendedWordJson[i].name == "积分商城") {
            aQuicklink.href = "javascript:clickHref(this);";
            //aQuicklink.setAttribute("onclick","clickHref(this);");
        } else {
            aQuicklink.href = recommendedWordJson[i].href;
        }

        pQuicklink.appendChild(aQuicklink);

        if (i != recommendedWordJson.length - 1) {
            var pQuicklink_span = document.createElement("span");
            pQuicklink_span.innerHTML = " | ";
            pQuicklink.appendChild(pQuicklink_span);
        }

    }

    // 首页搜索
    // 第一层
    var divQuickSearch = document.createElement("div");
    divQuickSearch.className = "searchbar";
    divSubbar.appendChild(divQuickSearch);

    // 第二层-1
    var divSearchBar = document.createElement("div");
    divSearchBar.className = "so-searchBar2";
    //divSearchBar.setAttribute("onsubmit", "javascript:clickInput();");
    divQuickSearch.appendChild(divSearchBar);

    // 第三层-1-1
    var divSearchMain = document.createElement("div");
    divSearchMain.className = "inputbox";
    divSearchBar.appendChild(divSearchMain);

    // 第四层-1-1-1
    var spanSearchBox = document.createElement("div");
    //spanSearchBox.className = "inputbox-2";
    //divSearchMain.appendChild(spanSearchBox);

    var inputText = document.createElement("input");
    inputText.type = "text";
    inputText.className = "input3";
    inputText.id = "Search_txtSearch";
    //inputText.style.width = "100px";
    inputText.value = "和你一起狂想春天";
    //inputText.setAttribute("onkeyup","navComponent.searchSuggest(event);");
    //inputText.setAttribute("onblur", "if(this.value == '') this.value = this.defaultValue");
    //inputText.setAttribute("onfocus", "if(this.value == this.defaultValue) this.value = ''");

    inputText.onkeydown = function (event) {
        if ($.browser.mozilla) {
            navComponent.searchSuggest(event);
        }
        else if ($.browser.msie) {
            navComponent.searchSuggest(window.event);
        }
    }
    inputText.onblur = function () {
        if (this.value == "") {
            this.value = "和你一起狂想春天";
            if ($("#searchDisplay").val() == '0') {
                $("#Search_searchSuggest").hide();
            }
        }
    }
    inputText.onfocus = function () {
        if (this.value == "和你一起狂想春天") {
            this.value = '';
        }
        if (this.value == '') {
            // 显示用户搜索记录 begin
            var searchTextCookie = getCookie("localSearchText");
            var suggest = "";
            if (searchTextCookie) {
                var searchTextCookieArray = searchTextCookie.split(":");
                if (searchTextCookieArray.length < 11) {
                    searchTextCookieArray = searchTextCookieArray;
                } else {
                    searchTextCookieArray = searchTextCookieArray.slice(0, 10);
                }
                for (var i = 0; i < searchTextCookieArray.length; i++) {
                    var busiName = searchTextCookieArray[i];
                    suggest += '<a href="javascript:void(0);" maxIndex="' + (searchTextCookieArray.length - 1) + '" pIndex="' + i + '"  onmouseover="javascript:navComponent.suggestOver2(this);" onmouseout="javascript:navComponent.suggestOver3(this)" ';
                    suggest += 'onclick="javascript:navComponent.confirmSearch(this.innerHTML, this.id);">' + busiName + '</a>';
                }
                $("#Search_searchSuggest").html(suggest).show();
            }
        }
        // 显示用户搜索记录 end
    }
    divSearchMain.appendChild(inputText);

    // 第三层-1-2
    var aSearch = document.createElement("input");
    aSearch.className = "btn1";
    aSearch.type = "button";
    aSearch.value = "搜索";
    aSearch.style.cursor = "hand";
    //aSearch.setAttribute("onclick","navComponent.doSearch();");
    aSearch.onclick = function () {
        navComponent.doSearch();
    }
    divSearchBar.appendChild(aSearch);

    // 第三层-1-3
    var divSearchSuggest = document.createElement("div");
    divSearchSuggest.id = "Search_searchSuggest";
    divSearchSuggest.className = "header-search-suggest";
    divSearchSuggest.style.display = "none";
    divSearchBar.appendChild(divSearchSuggest);


    // 第二层-2
    var divQuicksearch = document.createElement("div");
    //divQuicksearch.className="quicksearch";
    //divQuickSearch.appendChild(divQuicksearch);

    //===========热门搜索词开始            省公司上报，不超过28个字符                  json由后台生成

    var spanQuicksearch1 = document.createElement("span");
    spanQuicksearch1.innerHTML = "热门搜索：";


    divQuicksearch.appendChild(spanQuicksearch1);


    var keywordJson = eval('[{"name":"非常假期","responsible":null,"href":"http://service.js.10086.cn/index_2012.jsp#DGFCJQ","editable":null,"isEdit":"0"},{"name":"两城一家","responsible":null,"href":"http://service.js.10086.cn/index_2012.jsp#LCYJ","editable":null,"isEdit":"0"}]');

    for (var i = 0; i < keywordJson.length; i++) {
        var aQuicksearch = document.createElement("a");
        aQuicksearch.target = "_blank";
        aQuicksearch.href = keywordJson[i].href;
        aQuicksearch.innerHTML = keywordJson[i].name;
        divQuicksearch.appendChild(aQuicksearch);

        if (i != keywordJson.length - 1) {
            var spanQuicksearch = document.createElement("span");
            spanQuicksearch.innerHTML = " | ";
            divQuicksearch.appendChild(spanQuicksearch);
        }
    }

    //===========热门搜索词结束


});

// 点击商城链接
function clickHref(obj) {
    var h = $(document).height();
    $("#popMask").show().height(h);
    $("#pop_jumpout").show();
    countNum(obj);
}

// 商城弹出层点击取消
function closeClickHref() {
    clearInterval(counter_pop);
    $("#popMask").hide();
    $("#pop_jumpout").hide();
}

// 商城弹出层倒计时
function countNum(obj) {
    var count = 15;
    if (counter_pop) {
        clearInterval(counter_pop);
    }
    counter_pop = window.setInterval(function () {
        count--;
        $("#pop_jumpout_seconds").html("（" + count + "秒）");
        if (count < 1) {
            if (counter_pop) {
                window.clearInterval(counter_pop);
                $("#pop_jumpout_seconds").hide();
                $("#popMask").hide();
                $("#pop_jumpout").hide();
                window.location.href = " http://jf.10086.cn/index.html";
            }
        }
    }.bind(obj), 1000);
}

// 菜单滑动
function navOver(navNumber) {
    var navDiv = document.getElementById("js0" + navNumber);
    navDiv.style.display = "block";
    $("#Search_txtSearch").blur();
}
function navOut(navNumber) {
    var navDiv = document.getElementById("js0" + navNumber);
    navDiv.style.display = "none";
}


// 网站群连接
function ShowDivCity() {
    document.getElementById("DivCity").style.display = "block";
}

function HiddenDivCity() {
    document.getElementById("DivCity").style.display = "none";
}
function ShowDivCountry() {
    document.getElementById("header-city-cityList").style.display = "block";
}

function HiddenDivCountry() {
    document.getElementById("header-city-cityList").style.display = "none";
}

function ShowDivkjbl() {
    document.getElementById("DivCity6").style.display = "block";
}

function HiddenDivkjbl() {
    document.getElementById("DivCity6").style.display = "none";
}


function chk_frm_search() {

    if (document.frm_search.qt.value == '' || document.frm_search.qt.value.length < 2) {
        document.frm_search.qt.focus();
        return false;
    }

    if (document.frm_search.qt.value == '18元炫卡') {
        document.frm_search.qt.focus();
        document.frm_search.qt.value = '';
        return false;
    }

    var qt = document.frm_search.qt.value;
    var url = " http://search.10086.cn/Query?qt=" + encodeURIComponent(qt) + "&database=js";
    window.open(url);
    return false;
}

function search_network_click() {
    document.frm_search.style.value = 'standard';
    document.frm_search.database.value = '';
    return true;
}

function search_local_click() {
    document.frm_search.style.value = 'china';
    document.frm_search.database.value = 'chinamobile';
    return true;
}

function setCookieForReplaceCity(name, value, expire) {
    //var Days = 30;            //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + expire);
    document.cookie = name + " = " + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
/*function doReplaceCity(city) {
    var cityName = city;
    setCookieForReplaceCity("city", getCityNum(cityName), 10 * 365 * 24 * 60 * 60 * 1000);
    // 解决IE6不能刷新页面
    window.location.reload(true);
    // add by sunwei
    var code = getCityNum(cityName);
//'南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'
    if ("NJDQ" == code){
    	window.open("http://www.js.10086.cn/citys/nanjing/index.html");
    } else if ("WXDQ" == code){
    	window.open("http://www.js.10086.cn/citys/wuxi/index.html");
    } else if ("XZDQ" == code){
    	window.open("http://www.js.10086.cn/citys/xuzhou/index.html");
    } else if ("CZDQ" == code){
    	window.open("http://www.js.10086.cn/citys/changzhou/index.html");
    } else if ("SZDQ" == code){
    	window.open("http://www.js.10086.cn/citys/suzhou/index.html");
    } else if ("NTDQ" == code){
    	window.open("http://www.js.10086.cn/citys/nantong/index.html");
    } else if ("LYGDQ" == code){
    	window.open("http://www.js.10086.cn/citys/lianyungang/index.html");
    } else if ("HADQ" == code){
    	window.open("http://www.js.10086.cn/citys/huaian/index.html");
    } else if ("YCDQ" == code){
    	window.open("http://www.js.10086.cn/citys/yancheng/index.html");
    } else if ("YZDQ" == code){
    	window.open("http://www.js.10086.cn/citys/yangzhou/index.html");
    } else if ("ZJDQ" == code){
    	window.open("http://www.js.10086.cn/citys/zhenjiang/index.html");
    } else if ("TZDQ" == code){
    	window.open("http://www.js.10086.cn/citys/taizhou/index.html");
    } else if ("SQDQ" == code){
    	window.open("http://www.js.10086.cn/citys/suqian/index.html");
    }
}*/
function doReplaceCity(city) {
    var cityName = city;
    setCookieForReplaceCity("city", getCityNum(cityName), 10 * 365 * 24 * 60 * 60 * 1000);
    setCookieForReplaceCity("cspd_city", getCityNum(cityName), 10 * 365 * 24 * 60 * 60 * 1000);//城市频道专用cookie
    // 解决IE6不能刷新页面
    window.location.reload(true);
    // add by sunwei
    var code = getCityNum(cityName);
    window.open("http://service.js.10086.cn/city.jsp");
//'南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'
//    if ("NJDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/nanjing/index.html");
//    } else if ("WXDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/wuxi/index.html");
//    } else if ("XZDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/xuzhou/index.html");
//    } else if ("CZDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/changzhou/index.html");
//    } else if ("SZDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/suzhou/index.html");
//    } else if ("NTDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/nantong/index.html");
//    } else if ("LYGDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/lianyungang/index.html");
//    } else if ("HADQ" == code){
//    	window.open("http://www.js.10086.cn/citys/huaian/index.html");
//    } else if ("YCDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/yancheng/index.html");
//    } else if ("YZDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/yangzhou/index.html");
//    } else if ("ZJDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/zhenjiang/index.html");
//    } else if ("TZDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/taizhou/index.html");
//    } else if ("SQDQ" == code){
//    	window.open("http://www.js.10086.cn/citys/suqian/index.html");
//    }
}


/*js_tail.js*/
(function () {
    var isReady = false;
    var readyList = [];
    var timer;
    ready = function (fn) {
        if (isReady)
            fn.call(document);
        else
            readyList.push(function () {
                return fn.call(this);
            });
        return this;
    }
    var onDOMReady = function () {
        for (var i = 0; i < readyList.length; i++) {
            readyList[i].apply(document);
        }
        readyList = null;
    }
    var bindReady = function (evt) {
        if (isReady)
            return;
        isReady = true;
        onDOMReady.call(window);
        clearInterval(timer);
        timer = null;
    };
    timer = setInterval(function () {
        if (!document.getElementById("js_tail")) {
            return;
        }
        bindReady();
    }, 5);
})();

ready(function () {

    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "http://files01.js.10086.cn/obsh2014/js_tail/js_tail.css");
    var heads = document.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        document.documentElement.appendChild(link);


    var linksJson = eval('[{"name":"新闻中心","href":"http://www.10086.cn/aboutus/news/"},{"name":"法律声明","href":"http://www.10086.cn/#"},{"name":"诚聘英才","href":"http://www.js.10086.cn/job"},{"name":"采购信息","href":"http://b2b.10086.cn/"},{"name":"企业合作","href":"http://www.10086.cn/aboutus/hezuo/"},{"name":"站点导航","href":"http://www.10086.cn/web_notice/navigation/"},{"name":"中国移动研究院","href":"http://labs.chinamobile.com/"},{"name":"中国移动设计院","href":"http://www.cmdi.chinamobile.com/"},{"name":"网站地图","href":"http://www.js.10086.cn/sitemap"}]');

    var footer = document.getElementById("js_tail");


    var divFooter = document.createElement("div");
    divFooter.className = "footer";

    footer.appendChild(divFooter);

    var pFooter1 = document.createElement("p");
    pFooter1.className = "footer_text";
    divFooter.appendChild(pFooter1);


    for (var i = 0; i < linksJson.length; i++) {
        if (linksJson[i].name == "法律声明") {
            var span = document.createElement("span");
            span.innerHTML = linksJson[i].name;
            pFooter1.appendChild(span);
        }
        else if (linksJson[i].name == "中国移动研究院") {
            var a1 = document.createElement("a");
            a1.href = linksJson[i].href;
            a1.target = "_blank";
            a1.innerHTML = linksJson[i].name;
            pFooter1.appendChild(a1);
        }
        else if (linksJson[i].name == "中国移动设计院") {
            var a2 = document.createElement("a");
            a2.href = linksJson[i].href;
            a2.target = "_blank";
            a2.innerHTML = linksJson[i].name;
            pFooter1.appendChild(a2);
        } else {
            var a = document.createElement("a");
            a.href = linksJson[i].href;
            a.innerHTML = linksJson[i].name;

            pFooter1.appendChild(a);
        }

        if (i != linksJson.length - 1) {
            var span = document.createElement("span");
            span.innerHTML = "&nbsp;|&nbsp;";
            pFooter1.appendChild(span);
        }

    }

    //西藏添加“天上西藏”
    if ("js" == "xz") {
        var spanLink1 = document.createElement("span");
        spanLink1.innerHTML = "&nbsp;|&nbsp;";
        pFooter1.appendChild(spanLink1);
        var tianshang = document.createElement("a");
        tianshang.href = "http://www.ctibet.cn/";
        tianshang.innerHTML = "天上西藏";
        pFooter1.appendChild(tianshang);
    }
    //添加“友情链接”
    var spanLink = document.createElement("span");
    spanLink.innerHTML = "&nbsp;|&nbsp;";
    pFooter1.appendChild(spanLink);
    var aLink = document.createElement("a");
    aLink.href = "http://www.10086.cn/web_notice/links/";
    aLink.innerHTML = "友情链接";
    pFooter1.appendChild(aLink);


    var pFooter2 = document.createElement("p");
    pFooter2.className = "footer_text";
    divFooter.appendChild(pFooter2);


    var spanFooter1 = document.createElement("span");
    spanFooter1.innerHTML = "掌上营业厅：";

    pFooter2.appendChild(spanFooter1);


    var aFooter1 = document.createElement("a");
    aFooter1.href = "http://wap.10086.cn";
    aFooter1.innerHTML = "wap.10086.cn";

    pFooter2.appendChild(aFooter1);


    var spanFooter2 = document.createElement("span");
    spanFooter2.innerHTML = "&nbsp;语音自助服务：10086  短信营业厅：10086&nbsp;";

    pFooter2.appendChild(spanFooter2);


    var aFooter2 = document.createElement("a");
    aFooter2.href = "http://www.10086.cn/support/channel/self_service/";
    aFooter2.innerHTML = "自助终端";

    pFooter2.appendChild(aFooter2);

    var spanFooter3 = document.createElement("span");
    spanFooter3.innerHTML = "&nbsp;";

    pFooter2.appendChild(spanFooter3);

    var aFooter3 = document.createElement("a");
    aFooter3.href = "http://www.10086.cn/support/channel/Entity1/";
    aFooter3.innerHTML = "营业厅";

    pFooter2.appendChild(aFooter3);

    var spanFooter4 = document.createElement("span");
    spanFooter4.innerHTML = "&nbsp;";

    pFooter2.appendChild(spanFooter4);

    var aFooter4 = document.createElement("a");
    aFooter4.href = "http://www.10086.cn/cmccclient/index.htm";
    aFooter4.innerHTML = "手机营业厅下载";
    pFooter2.appendChild(aFooter4);

    //可信网站标识
    var pFooter3 = document.createElement("div");
    pFooter3.className = "footgov";
    divFooter.appendChild(pFooter3);

    var KXYZ = document.createElement("span");
    KXYZ.setAttribute("id", "KXYZ")
    pFooter3.appendChild(KXYZ);
    var KXWZJS = document.createElement("script");//创建script节点
    KXWZJS.setAttribute("src", "http://kxlogo.knet.cn/seallogo.dll?sn=e130905110100423008ilb000000&size=0");
    pFooter3.appendChild(KXWZJS);

    var pFooter3Txt = document.createElement("div");
    pFooter3Txt.className = "govtxt";
    pFooter3Txt.innerHTML = "<p class='gov'><a href='http://www.miibeian.gov.cn/'>京ICP备05002571号</a></p><p class='govtxt2'>中国移动通信版权所有</p>";
    pFooter3.appendChild(pFooter3Txt);
    //可信验证修改部分结束

    divFooter.appendChild(pFooter3);

});

function sendResult(bizName, resultMsg, isSuccess) {
    $("#busiName").val(encodeURI(bizName));
    $("#msg").val(encodeURI(resultMsg));
    $("#isSuccess").val(isSuccess);
    $("#resultForm").submit();
    sendMaketMsg(bizName, resultMsg, isSuccess);
}
// 和阅读
function sendResultForSJYD(bizName, resultMsg, isSuccess,busNum,operType) {
    $("#busiName").val(encodeURI(bizName));
    $("#msg").val(encodeURI(resultMsg));
    $("#isSuccess").val(isSuccess);
    $("#busNum").val(busNum);
    // ++++++++++ 2017 6 5 增加 operType 请求类型
    $("#operType").val(operType);
    // ++++++++++
    $("#resultForm").submit();
}
function lazyImgShow(ele){
    if(ele.attr("src") !== ele.attr("data-src")){
        ele.attr("src",ele.attr("data-src"));

    }
    ele.animate({"opacity":1,"filter":"alpha(opacity=100)"},1000);
}
function imgLoad(){
    var $dataImg = $(".data-img"),
        scrTop = $(window).scrollTop(),
        screenH = $(window).height();
    $.each($dataImg,function(index,item){
        var imgTop = $(item).offset().top;
        var tempSrc = $(item).attr("data-src");
        if(imgTop - scrTop > 0){ //  tab切换，隐藏div中img的offset().top为0，且随scrTop变化
            if(imgTop < scrTop + screenH ){
                lazyImgShow($(item));
            }
        }
    })
}
function lazyLoad(id){
    if(""==id || null==id){
        var $dataImg = $(".data-img");

        $dataImg.css({"opacity":0,"filter":"alpha(opacity=0)"});
        $(window).bind("scroll",imgLoad);
        imgLoad();
        $(".data-img[flag='0']").css({"opacity":1,"filter":"alpha(opacity=100)"});

    }else{
        var $dataImg = $("#"+id +" .data-img");

        $dataImg.css({"opacity":0,"filter":"alpha(opacity=0)"});
        $(window).bind("scroll",imgLoad);
        imgLoad();
        $(".data-img[flag='0']").css({"opacity":1});
    }
}

function imgLazyLoad(id){
    var ele = $("#" + id + " .data-img");
    $.each(ele,function(index,item){
        if($(item).attr("src") !== $(item).attr("data-src")){
            $(item).attr("src",$(item).attr("data-src"));
            $(item).animate({"opacity":1,"filter":"alpha(opacity=100)"},1000);
        };
    });
};

function wtImgAltFloating(){

    this.fn = this.prototype = {

        init : function(){

            var st;
            var x = 0;
            var loaded;

            var showAlt = $('#showAlt');

            var createLayer = function() {
                if(!showAlt.length) $('body').append('<div id="showAlt" style="position:absolute;top:0;left:0;z-index:99999;display:none;/*height:20px;*/line-height:20px;padding:0 10px;background-color:#fff;border:1px solid #e8e8e8;border-radius:3px;box-shadow:0 0 3px #ccc;font-size:12px;/*white-space:nowrap*/"></div>');
            }();

            var elem = $('[title]'), layer = $('#showAlt');

            elem.each(function(){
                var t = $(this);
                var title = $(this).attr('title');
                t.removeAttr('title').attr('temp-title', title);
            });

            var elem = $('[temp-title]');

            var changeTitle = function(o){

                var o = $(o);
                var title =  o.attr('temp-title');

                layer.text(title).show();

                return title;

            }

            var layerMove = function(e){



                var win         = $(window);

                var winWidth    = win.width(),
                    winHeight   = win.height();

                var layerWidth  = layer.width(),
                    layerHeight = layer.height();

                var xAxis       = e.pageX,
                    yAxis       = e.pageY;

//	            var offsetX = xAxis + 20 + layerWidth > winWidth ? - layerWidth - 20 : 10,
//	                offsetY = yAxis + 20 + layerHeight > winHeight ? - layerHeight : 10;

                var offsetX = 10,
                    offsetY = 10;


                layer.css({ 'left' : xAxis + offsetX, 'top': yAxis + offsetY });

            }

            elem.on('mouseover', function() {
                changeTitle(this);
            });
            elem.on('mousemove', function(e) {
                clearTimeout(st);
                var st = setTimeout(function(){
                    layerMove(e);
                },1);
            });
            elem.on('mouseleave', function() {
                layer.hide();
            });

        }
    }

    return this.fn.init();

};

//精确营销插码和反馈
function sendMaketMsg(bizName, resultMsg, isSuccess){
//================ 参数初始化  =================//
    var yxaId = $.query.get("yxaId");
    var webtransId = $.query.get("webtransId");
    var urlStr = window.location.href;
    var busNum=urlStr.substring(urlStr.lastIndexOf('/')+1 , urlStr.indexOf(".html"));
    var user = CompObshHeaderComponent.loginUserInfo;
    var userCity="";
    var touchType="";
    if(user != null)
    {
        mobileNum = user.userMobile;
        userCity = user.userCity;
    }
//================ 发送插码数据  =================//
    if('1'==isSuccess){
        if (typeof(_tag) != "undefined" && ""!=webtransId) {
            _tag.dcsMultiTrack('WT.yxhd', webtransId, 'WT.city', userCity, 'WT.mobile', mobileNum, 'WT.si_n', busNum, 'WT.si_x', '-99');
        }
        touchType="3";
    }else{
        if (typeof(_tag) != "undefined" && ""!=webtransId) {
            _tag.dcsMultiTrack('WT.yxhd', webtransId, 'WT.city', userCity, 'WT.mobile', mobileNum, 'WT.si_n', busNum, 'WT.si_x', '99');
        }
        touchType="4";
    }
//================ 发送请求到CRM  =================//
    if(""!=yxaId){
        $.commonReq({
            data: {
                "reqUrl": "touchLog",
                "touchId": yxaId,
                "busiNum": busNum,
                "touchType": touchType
            },
            success: function (result) {
            }
        });
    }
}
/* =============== 请求处理类代码 开始 By 王锦阳 =============== */
/**
 * 请求处理类
 * @constructor 无参数构造
 * @author 王锦阳
 */
function Request() {
    this._urlFragment = "/2014";                                       // 处理地址片段
    this._actionName = "/actionDispatcher.do";            // 后台请求地址
}
/**
 * 请求处理类原型定义
 * @type {{getURL: Function}} 获取请求URL地址的函数
 */
Request.prototype = {
    /**
     * 获取请求URL地址的函数
     * @returns 返回真实的后台请求URL
     */
    getURL : function() {
        // 获取当前请求地址
        var _url = window.location.href;
        // 去除http://头
        _url = _url.substring(_url.indexOf('://') + 3);
        // 如果处理地址片段和后台请求地址参数有效则执行
        if (this._actionName && this._urlFragment) {
            // 如果当前地址中包含处理地址片段则执行处理操作，否则直接拼接老网厅请求地址
            if (_url.indexOf(this._urlFragment + '/') != -1) {
                // 获取http://service.js.10086.cn/2014地址的结束位置索引
                var _endIndex = _url.indexOf(this._urlFragment) + this._urlFragment.length;
                // 截取http://service.js.10086.cn/2014地址之后的部分内容
                var _modelName = _url.substring(_endIndex);
                // 去除queryString部分
                _modelName = _modelName.indexOf('?') != -1 ? _modelName.substring(0, _modelName.indexOf('?')) : _modelName;
                // 获取第一次出现"/"位置的索引
                var _indexOf = _modelName.indexOf('/');
                // 获取最后一次出现"/"位置的索引
                var _lastIndexOf = _modelName.lastIndexOf('/');
                // 获取首次出现".html"位置的索引
                var _suffix = _modelName.indexOf(".html");
                // 如果处理地址之后部分内容还包含/和.html地址（表示还有次级路径）
                if (_lastIndexOf !=  -1 && _suffix != -1 && _lastIndexOf > _indexOf) {
                    // 则拼接上次级路径的索引
                    _endIndex += _lastIndexOf;
                }
                // 将完整的URL地址根据处理后的结束索引进行截取
                _url = _url.substring(0, _endIndex);
            } else {
                _url = _url.substring(0, _url.indexOf('/'));
            }
            // 生成完整地址
            _url = "http://" + _url + this._actionName;
        } else {
            _url = "";
        }
        return _url;
    },
    /**
     * 获取请求地址前缀（即：2014）
     * @returns 返回地址前缀
     */
    getPrefix : function() {
        return this._urlFragment;
    }
};

/**
 * 请求处理对象
 * @type {Request}
 */
var request = new Request();
/* =============== 请求处理类代码 结束 By 王锦阳 =============== */


/**
 * 营销案ajax接口调用
 *
 *
 */
var MARKET_REQUEST_PARAMS={
    url:'http://service.js.10086.cn/2014/market/queryEnableMarketForCommon.do',
    type:"post",
    timeout: 600000
};
$.extend({
    marketReq:function(data){
        //全局对象  处理异常
        var options={};
        for(var key in data){
            if('success'!=key){
                options[key]=data[key];
            }
        }
        //转换params数据
        data_options=options['data'];
        //处理userInfo，salesInfo json对象在Ie下转换字符串问题
        var isJudgeJson=function(json){
            return !!json&&typeof json==='object'&&Object.prototype.toString.call(json)==='[object Object]'&&!json.length;
        }
        var jsonToString=function(json){
            var jsonString='';
            var jsonArray=new Array();
            if(isJudgeJson(json)){
                //为json对象
                for(var key in json){
                    if(null==json[key]){
                        json[key]='""';
                    }else{
                        json[key] = typeof (json[key]) == 'string' ? '"' + json[key] + '"' : (typeof (json[key]) === 'object' ? arguments.callee(json[key]) : json[key]);
                    }
                    jsonArray.push(key+':'+json[key]);
                }
                jsonString = '{' + jsonArray.join(',') + '}';
            }else if(Object.prototype.toString.call(json)==='[object Array]'){
                //为数组对象
                for (var i = 0; i < json.length; i++){
                    jsonArray.push(arguments.callee(json[i]));
                }
                jsonString = '[' + jsonArray.join(',') + ']';
            }
            return jsonString;
        }
        for(var key in data_options){
            if(isJudgeJson(data_options[key])){
                data_options[key]=jsonToString(data_options[key]);
            }else if(!data_options[key]){
                data_options[key]='';
            }
        }
        options['data']=data_options;
        options['success']=function(result){
            //异常处理

            //代码打印信息
            if(window.console&&Object.prototype.toString.call(console.log)=='[object Function]'){
                console.log('获取营销案信息');
                console.log(result);
            }
            //执行业务代码
            data['success'].call(data,result);
        }
        $.extend(options,MARKET_REQUEST_PARAMS);
        $.ajax(options);
    }
});


//浏览器指纹模块，与官方第二版本有所区别，经过修改
var BrowserFinger = {
    get : function(options){
        var defaultOptions = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: true,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(options, defaultOptions);
        this.nativeForEach = Array.prototype.forEach;
        this.nativeMap = Array.prototype.map;
        var keys = [];
        keys = this.userAgentKey(keys);
        keys = this.languageKey(keys);
        keys = this.colorDepthKey(keys);
        keys = this.pixelRatioKey(keys);
        keys = this.hardwareConcurrencyKey(keys);
        keys = this.screenResolutionKey(keys);
        keys = this.availableScreenResolutionKey(keys);
        keys = this.timezoneOffsetKey(keys);
        keys = this.sessionStorageKey(keys);
        keys = this.localStorageKey(keys);
        keys = this.indexedDbKey(keys);
        keys = this.addBehaviorKey(keys);
        keys = this.openDatabaseKey(keys);
        keys = this.cpuClassKey(keys);
        keys = this.platformKey(keys);
        keys = this.doNotTrackKey(keys);
        keys = this.canvasKey(keys);
        // keys = this.webglKey(keys);
        keys = this.adBlockKey(keys);
        keys = this.hasLiedLanguagesKey(keys);
        keys = this.hasLiedResolutionKey(keys);
        keys = this.hasLiedOsKey(keys);
        keys = this.hasLiedBrowserKey(keys);
        keys = this.touchSupportKey(keys);
        keys = this.customEntropyFunction(keys);
        var that = this;
        var values = [];
        this.fontsKey(keys, function(newKeys){
            that.each(newKeys, function(pair) {
                var value = pair.value;
                if (typeof pair.value.join !== "undefined") {
                    value = pair.value.join(";");
                }
                values.push(value);
            });
//		          for(var i=0;i<newKeys.length;i++){
//						console.log(newKeys[i].key+":"+newKeys[i].value);
//					}
        });
        return that.x64hash128(values.join("~~~"), 31);
    },
    extend: function(source, target) {
        if (source == null) { return target; }
        for (var k in source) {
            if(source[k] != null && target[k] !== source[k]) {
                target[k] = source[k];
            }
        }
        return target;
    },
    customEntropyFunction: function (keys) {
        if (typeof this.options.customFunction === "function") {
            keys.push({key: "custom", value: this.options.customFunction()});
        }
        return keys;
    },
    userAgentKey: function(keys) {
        if(!this.options.excludeUserAgent) {
            keys.push({key: "user_agent", value: this.getUserAgent()});
        }
        return keys;
    },
    getUserAgent: function(){
        return navigator.userAgent;
    },
    languageKey: function(keys) {
        if(!this.options.excludeLanguage) {
            keys.push({ key: "language", value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "" });
        }
        return keys;
    },
    colorDepthKey: function(keys) {
        if(!this.options.excludeColorDepth) {
            keys.push({key: "color_depth", value: screen.colorDepth || -1});
        }
        return keys;
    },
    pixelRatioKey: function(keys) {
        if(!this.options.excludePixelRatio) {
            keys.push({key: "pixel_ratio", value: this.getPixelRatio()});
        }
        return keys;
    },
    getPixelRatio: function() {
        return window.devicePixelRatio || "";
    },
    screenResolutionKey: function(keys) {
        if(!this.options.excludeScreenResolution) {
            return this.getScreenResolution(keys);
        }
        return keys;
    },
    getScreenResolution: function(keys) {
        var resolution;
        if(this.options.detectScreenOrientation) {
            resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
        } else {
            resolution = [screen.width, screen.height];
        }
        if(typeof resolution !== "undefined") {
            keys.push({key: "resolution", value: resolution});
        }
        return keys;
    },
    availableScreenResolutionKey: function(keys) {
        if (!this.options.excludeAvailableScreenResolution) {
            return this.getAvailableScreenResolution(keys);
        }
        return keys;
    },
    getAvailableScreenResolution: function(keys) {
        var available;
        if(screen.availWidth && screen.availHeight) {
            if(this.options.detectScreenOrientation) {
                available = (screen.availHeight > screen.availWidth) ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight];
            } else {
                available = [screen.availHeight, screen.availWidth];
            }
        }
        if(typeof available !== "undefined") {
            keys.push({key: "available_resolution", value: available});
        }
        return keys;
    },
    timezoneOffsetKey: function(keys) {
        if(!this.options.excludeTimezoneOffset) {
            keys.push({key: "timezone_offset", value: new Date().getTimezoneOffset()});
        }
        return keys;
    },
    sessionStorageKey: function(keys) {
        if(!this.options.excludeSessionStorage && this.hasSessionStorage()) {
            keys.push({key: "session_storage", value: 1});
        }
        return keys;
    },
    localStorageKey: function(keys) {
        if(!this.options.excludeSessionStorage && this.hasLocalStorage()) {
            keys.push({key: "local_storage", value: 1});
        }
        return keys;
    },
    indexedDbKey: function(keys) {
        if(!this.options.excludeIndexedDB && this.hasIndexedDB()) {
            keys.push({key: "indexed_db", value: 1});
        }
        return keys;
    },
    addBehaviorKey: function(keys) {
        // body might not be defined at this point or removed programmatically
        if(document.body && !this.options.excludeAddBehavior && document.body.addBehavior) {
            keys.push({key: "add_behavior", value: 1});
        }
        return keys;
    },
    openDatabaseKey: function(keys) {
        if(!this.options.excludeOpenDatabase && window.openDatabase) {
            keys.push({key: "open_database", value: 1});
        }
        return keys;
    },
    cpuClassKey: function(keys) {
        if(!this.options.excludeCpuClass) {
            keys.push({key: "cpu_class", value: this.getNavigatorCpuClass()});
        }
        return keys;
    },
    platformKey: function(keys) {
        if(!this.options.excludePlatform) {
            keys.push({key: "navigator_platform", value: this.getNavigatorPlatform()});
        }
        return keys;
    },
    doNotTrackKey: function(keys) {
        if(!this.options.excludeDoNotTrack) {
            keys.push({key: "do_not_track", value: this.getDoNotTrack()});
        }
        return keys;
    },
    canvasKey: function(keys) {
        if(!this.options.excludeCanvas && this.isCanvasSupported()) {
            keys.push({key: "canvas", value: this.getCanvasFp()});
        }
        return keys;
    },
    webglKey: function(keys) {
        if(this.options.excludeWebGL) {
            return keys;
        }
        if(!this.isWebGlSupported()) {
            return keys;
        }
        keys.push({key: "webgl", value: this.getWebglFp()});
        return keys;
    },
    adBlockKey: function(keys){
        if(!this.options.excludeAdBlock) {
            keys.push({key: "adblock", value: this.getAdBlock()});
        }
        return keys;
    },
    hasLiedLanguagesKey: function(keys){
        if(!this.options.excludeHasLiedLanguages){
            keys.push({key: "has_lied_languages", value: this.getHasLiedLanguages()});
        }
        return keys;
    },
    hasLiedResolutionKey: function(keys){
        if(!this.options.excludeHasLiedResolution){
            keys.push({key: "has_lied_resolution", value: this.getHasLiedResolution()});
        }
        return keys;
    },
    hasLiedOsKey: function(keys){
        if(!this.options.excludeHasLiedOs){
            keys.push({key: "has_lied_os", value: this.getHasLiedOs()});
        }
        return keys;
    },
    hasLiedBrowserKey: function(keys){
        if(!this.options.excludeHasLiedBrowser){
            keys.push({key: "has_lied_browser", value: this.getHasLiedBrowser()});
        }
        return keys;
    },
    fontsKey: function(keys, done) {
        return this.flashFontsKey(keys, done);
    },
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    flashFontsKey: function(keys, done) {
        if(this.options.excludeFlashFonts) {
            return done(keys);
        }
        // we do flash if swfobject is loaded
        if(!this.hasSwfObjectLoaded()){
            return done(keys);
        }
        if(!this.hasMinFlashInstalled()){
            return done(keys);
        }
        if(typeof this.options.swfPath === "undefined"){
            return done(keys);
        }
        this.loadSwfAndDetectFonts(function(fonts){
            keys.push({key: "swf_fonts", value: fonts.join(";")});
            done(keys);
        });
    },
    touchSupportKey: function (keys) {
        if(!this.options.excludeTouchSupport){
            keys.push({key: "touch_support", value: this.getTouchSupport()});
        }
        return keys;
    },
    hardwareConcurrencyKey: function(keys){
        if(!this.options.excludeHardwareConcurrency){
            keys.push({key: "hardware_concurrency", value: this.getHardwareConcurrency()});
        }
        return keys;
    },
    hasSessionStorage: function () {
        try {
            return !!window.sessionStorage;
        } catch(e) {
            return true;
        }
    },
    hasLocalStorage: function () {
        try {
            return !!window.localStorage;
        } catch(e) {
            return true;
        }
    },
    hasIndexedDB: function (){
        try {
            return !!window.indexedDB;
        } catch(e) {
            return true;
        }
    },
    getHardwareConcurrency: function(){
        if(navigator.hardwareConcurrency){
            return navigator.hardwareConcurrency;
        }
        return "unknown";
    },
    getNavigatorCpuClass: function () {
        if(navigator.cpuClass){
            return navigator.cpuClass;
        } else {
            return "unknown";
        }
    },
    getNavigatorPlatform: function () {
        if(navigator.platform) {
            return navigator.platform;
        } else {
            return "unknown";
        }
    },
    getDoNotTrack: function () {
        if(navigator.doNotTrack) {
            return navigator.doNotTrack;
        } else if (navigator.msDoNotTrack) {
            return navigator.msDoNotTrack;
        } else if (window.doNotTrack) {
            return window.doNotTrack;
        } else {
            return "unknown";
        }
    },
    getTouchSupport: function () {
        var maxTouchPoints = 0;
        var touchEvent = false;
        if(typeof navigator.maxTouchPoints !== "undefined") {
            maxTouchPoints = navigator.maxTouchPoints;
        } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
            maxTouchPoints = navigator.msMaxTouchPoints;
        }
        try {
            document.createEvent("TouchEvent");
            touchEvent = true;
        } catch(_) { }
        var touchStart = "ontouchstart" in window;
        return [maxTouchPoints, touchEvent, touchStart];
    },
    getCanvasFp: function() {
        var result = [];
        var canvas = document.createElement("canvas");
        canvas.width = 2000;
        canvas.height = 200;
        canvas.style.display = "inline";
        var ctx = canvas.getContext("2d");
        ctx.rect(0, 0, 10, 10);
        ctx.rect(2, 2, 6, 6);
        result.push("canvas winding:" + ((ctx.isPointInPath(5, 5, "evenodd") === false) ? "yes" : "no"));

        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = "#069";
        if(this.options.dontUseFakeFontInCanvas) {
            ctx.font = "11pt Arial";
        } else {
            ctx.font = "11pt no-real-font-123";
        }
        ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
        ctx.font = "18pt Arial";
        ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(0,255,255)";
        ctx.beginPath();
        ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(255,255,0)";
        ctx.beginPath();
        ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
        ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
        ctx.fill("evenodd");

        result.push("canvas fp:" + canvas.toDataURL());
        return result.join("~");
    },

    getWebglFp: function() {
        var gl;
        var fa2s = function(fa) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            return "[" + fa[0] + ", " + fa[1] + "]";
        };
        var maxAnisotropy = function(gl) {
            var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
            return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
        };
        gl = this.getWebglCanvas();
        if(!gl) { return null; }
        var result = [];
        var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
        var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
        var vertexPosBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
        var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        vertexPosBuffer.itemSize = 3;
        vertexPosBuffer.numItems = 3;
        var program = gl.createProgram(), vshader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vshader, vShaderTemplate);
        gl.compileShader(vshader);
        var fshader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fshader, fShaderTemplate);
        gl.compileShader(fshader);
        gl.attachShader(program, vshader);
        gl.attachShader(program, fshader);
        gl.linkProgram(program);
        gl.useProgram(program);
        program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
        program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
        gl.enableVertexAttribArray(program.vertexPosArray);
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
        gl.uniform2f(program.offsetUniform, 1, 1);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
        if (gl.canvas != null) { result.push(gl.canvas.toDataURL()); }
        result.push("extensions:" + gl.getSupportedExtensions().join(";"));
        result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
        result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
        result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
        result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
        result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
        result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
        result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
        result.push("webgl max anisotropy:" + maxAnisotropy(gl));
        result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
        result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
        result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
        result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
        result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
        result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
        result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
        result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
        result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
        result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
        result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
        result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
        result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
        result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
        result.push("webgl version:" + gl.getParameter(gl.VERSION));

        try {
            var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (extensionDebugRendererInfo) {
                result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
                result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL));
            }
        } catch(e) {  }

        if (!gl.getShaderPrecisionFormat) {
            return result.join("~");
        }

        result.push("webgl vertex shader high float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision);
        result.push("webgl vertex shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMin);
        result.push("webgl vertex shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMax);
        result.push("webgl vertex shader medium float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision);
        result.push("webgl vertex shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
        result.push("webgl vertex shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
        result.push("webgl vertex shader low float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).precision);
        result.push("webgl vertex shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMin);
        result.push("webgl vertex shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMax);
        result.push("webgl fragment shader high float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision);
        result.push("webgl fragment shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMin);
        result.push("webgl fragment shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMax);
        result.push("webgl fragment shader medium float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision);
        result.push("webgl fragment shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
        result.push("webgl fragment shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
        result.push("webgl fragment shader low float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).precision);
        result.push("webgl fragment shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMin);
        result.push("webgl fragment shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMax);
        result.push("webgl vertex shader high int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).precision);
        result.push("webgl vertex shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMin);
        result.push("webgl vertex shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMax);
        result.push("webgl vertex shader medium int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).precision);
        result.push("webgl vertex shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMin);
        result.push("webgl vertex shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMax);
        result.push("webgl vertex shader low int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).precision);
        result.push("webgl vertex shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMin);
        result.push("webgl vertex shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMax);
        result.push("webgl fragment shader high int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).precision);
        result.push("webgl fragment shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMin);
        result.push("webgl fragment shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMax);
        result.push("webgl fragment shader medium int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).precision);
        result.push("webgl fragment shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMin);
        result.push("webgl fragment shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMax);
        result.push("webgl fragment shader low int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).precision);
        result.push("webgl fragment shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMin);
        result.push("webgl fragment shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMax);
        return result.join("~");
    },
    getAdBlock: function(){
        var ads = document.createElement("div");
        ads.innerHTML = "&nbsp;";
        ads.className = "adsbox";
        var result = false;
        try {
            document.body.appendChild(ads);
            result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
            document.body.removeChild(ads);
        } catch (e) {
            result = false;
        }
        return result;
    },
    getHasLiedLanguages: function(){
        if(typeof navigator.languages !== "undefined"){
            try {
                var firstLanguages = navigator.languages[0].substr(0, 2);
                if(firstLanguages !== navigator.language.substr(0, 2)){
                    return true;
                }
            } catch(err) {
                return true;
            }
        }
        return false;
    },
    getHasLiedResolution: function(){
        if(screen.width < screen.availWidth){
            return true;
        }
        if(screen.height < screen.availHeight){
            return true;
        }
        return false;
    },
    getHasLiedOs: function(){
        var userAgent = navigator.userAgent.toLowerCase();
        var oscpu = navigator.oscpu;
        var platform = navigator.platform.toLowerCase();
        var os;
        if(userAgent.indexOf("windows phone") >= 0){
            os = "Windows Phone";
        } else if(userAgent.indexOf("win") >= 0){
            os = "Windows";
        } else if(userAgent.indexOf("android") >= 0){
            os = "Android";
        } else if(userAgent.indexOf("linux") >= 0){
            os = "Linux";
        } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
            os = "iOS";
        } else if(userAgent.indexOf("mac") >= 0){
            os = "Mac";
        } else{
            os = "Other";
        }
        var mobileDevice;
        if (("ontouchstart" in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0)) {
            mobileDevice = true;
        } else{
            mobileDevice = false;
        }

        if(mobileDevice && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other"){
            return true;
        }

        if(typeof oscpu !== "undefined"){
            oscpu = oscpu.toLowerCase();
            if(oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
                return true;
            } else if(oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android"){
                return true;
            } else if(oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS"){
                return true;
            } else if(oscpu.indexOf("win") === 0 && oscpu.indexOf("linux") === 0 && oscpu.indexOf("mac") >= 0 && os !== "other"){
                return true;
            }
        }

        if(platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
            return true;
        } else if((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android"){
            return true;
        } else if((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS"){
            return true;
        } else if(platform.indexOf("win") === 0 && platform.indexOf("linux") === 0 && platform.indexOf("mac") >= 0 && os !== "other"){
            return true;
        }

        if(typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"){
            return true;
        }

        return false;
    },
    getHasLiedBrowser: function () {
        var userAgent = navigator.userAgent.toLowerCase();
        var productSub = navigator.productSub;
        var browser;
        if(userAgent.indexOf("firefox") >= 0){
            browser = "Firefox";
        } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
            browser = "Opera";
        } else if(userAgent.indexOf("chrome") >= 0){
            browser = "Chrome";
        } else if(userAgent.indexOf("safari") >= 0){
            browser = "Safari";
        } else if(userAgent.indexOf("trident") >= 0){
            browser = "Internet Explorer";
        } else{
            browser = "Other";
        }

        if((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107"){
            return true;
        }

        var tempRes = eval.toString().length;
        if(tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other"){
            return true;
        } else if(tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other"){
            return true;
        } else if(tempRes === 33 && browser !== "Chrome" && browser !== "Opera" && browser !== "Other"){
            return true;
        }

        var errFirefox;
        try {
            throw "a";
        } catch(err){
            try{
                err.toSource();
                errFirefox = true;
            } catch(errOfErr){
                errFirefox = false;
            }
        }
        if(errFirefox && browser !== "Firefox" && browser !== "Other"){
            return true;
        }
        return false;
    },
    isCanvasSupported: function () {
        var elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"));
    },
    isWebGlSupported: function() {
        if (!this.isCanvasSupported()) {
            return false;
        }

        var canvas = document.createElement("canvas"),
            glContext;

        try {
            glContext = canvas.getContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
        } catch(e) {
            glContext = false;
        }

        return !!window.WebGLRenderingContext && !!glContext;
    },
    isIE: function () {
        if(navigator.appName === "Microsoft Internet Explorer") {
            return true;
        } else if(navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) { // IE
            // 11
            return true;
        }
        return false;
    },
    hasSwfObjectLoaded: function(){
        return typeof window.swfobject !== "undefined";
    },
    hasMinFlashInstalled: function () {
        return swfobject.hasFlashPlayerVersion("9.0.0");
    },
    addFlashDivNode: function() {
        var node = document.createElement("div");
        node.setAttribute("id", this.options.swfContainerId);
        document.body.appendChild(node);
    },
    loadSwfAndDetectFonts: function(done) {
        var hiddenCallback = "___fp_swf_loaded";
        window[hiddenCallback] = function(fonts) {
            done(fonts);
        };
        var id = this.options.swfContainerId;
        this.addFlashDivNode();
        var flashvars = { onReady: hiddenCallback};
        var flashparams = { allowScriptAccess: "always", menu: "false" };
        swfobject.embedSWF(this.options.swfPath, id, "1", "1", "9.0.0", false, flashvars, flashparams, {});
    },
    getWebglCanvas: function() {
        var canvas = document.createElement("canvas");
        var gl = null;
        try {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        } catch(e) {  }
        if (!gl) { gl = null; }
        return gl;
    },
    each: function (obj, iterator, context) {
        if (obj === null) {
            return;
        }
        if (this.nativeForEach && obj.forEach === this.nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === {}) { return; }
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (iterator.call(context, obj[key], key, obj) === {}) { return; }
                }
            }
        }
    },

    map: function(obj, iterator, context) {
        var results = [];
        if (obj == null) { return results; }
        if (this.nativeMap && obj.map === this.nativeMap) { return obj.map(iterator, context); }
        this.each(obj, function(value, index, list) {
            results[results.length] = iterator.call(context, value, index, list);
        });
        return results;
    },

    x64Add: function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];
        o[3] += m[3] + n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;
        o[2] += m[2] + n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[1] += m[1] + n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[0] += m[0] + n[0];
        o[0] &= 0xffff;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },

    x64Multiply: function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];
        o[3] += m[3] * n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;
        o[2] += m[2] * n[3];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[2] += m[3] * n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[1] += m[1] * n[3];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[1] += m[2] * n[2];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[1] += m[3] * n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
        o[0] &= 0xffff;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },
    x64Rotl: function(m, n) {
        n %= 64;
        if (n === 32) {
            return [m[1], m[0]];
        }
        else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
        }
        else {
            n -= 32;
            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
        }
    },
    x64LeftShift: function(m, n) {
        n %= 64;
        if (n === 0) {
            return m;
        }
        else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
        }
        else {
            return [m[1] << (n - 32), 0];
        }
    },
    x64Xor: function(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]];
    },
    x64Fmix: function(h) {
        h = this.x64Xor(h, [0, h[0] >>> 1]);
        h = this.x64Multiply(h, [0xff51afd7, 0xed558ccd]);
        h = this.x64Xor(h, [0, h[0] >>> 1]);
        h = this.x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
        h = this.x64Xor(h, [0, h[0] >>> 1]);
        return h;
    },
    x64hash128: function (key, seed) {
        key = key || "";
        seed = seed || 0;
        var remainder = key.length % 16;
        var bytes = key.length - remainder;
        var h1 = [0, seed];
        var h2 = [0, seed];
        var k1 = [0, 0];
        var k2 = [0, 0];
        var c1 = [0x87c37b91, 0x114253d5];
        var c2 = [0x4cf5ad43, 0x2745937f];
        for (var i = 0; i < bytes; i = i + 16) {
            k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)];
            k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)];
            k1 = this.x64Multiply(k1, c1);
            k1 = this.x64Rotl(k1, 31);
            k1 = this.x64Multiply(k1, c2);
            h1 = this.x64Xor(h1, k1);
            h1 = this.x64Rotl(h1, 27);
            h1 = this.x64Add(h1, h2);
            h1 = this.x64Add(this.x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
            k2 = this.x64Multiply(k2, c2);
            k2 = this.x64Rotl(k2, 33);
            k2 = this.x64Multiply(k2, c1);
            h2 = this.x64Xor(h2, k2);
            h2 = this.x64Rotl(h2, 31);
            h2 = this.x64Add(h2, h1);
            h2 = this.x64Add(this.x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
        }
        k1 = [0, 0];
        k2 = [0, 0];
        switch(remainder) {
            case 15:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 14)], 48));
            case 14:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 13)], 40));
            case 13:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 12)], 32));
            case 12:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 11)], 24));
            case 11:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 10)], 16));
            case 10:
                k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 9)], 8));
            case 9:
                k2 = this.x64Xor(k2, [0, key.charCodeAt(i + 8)]);
                k2 = this.x64Multiply(k2, c2);
                k2 = this.x64Rotl(k2, 33);
                k2 = this.x64Multiply(k2, c1);
                h2 = this.x64Xor(h2, k2);
            case 8:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 7)], 56));
            case 7:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 6)], 48));
            case 6:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 5)], 40));
            case 5:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 4)], 32));
            case 4:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 3)], 24));
            case 3:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 2)], 16));
            case 2:
                k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 1)], 8));
            case 1:
                k1 = this.x64Xor(k1, [0, key.charCodeAt(i)]);
                k1 = this.x64Multiply(k1, c1);
                k1 = this.x64Rotl(k1, 31);
                k1 = this.x64Multiply(k1, c2);
                h1 = this.x64Xor(h1, k1);
        }
        h1 = this.x64Xor(h1, [0, key.length]);
        h2 = this.x64Xor(h2, [0, key.length]);
        h1 = this.x64Add(h1, h2);
        h2 = this.x64Add(h2, h1);
        h1 = this.x64Fmix(h1);
        h2 = this.x64Fmix(h2);
        h1 = this.x64Add(h1, h2);
        h2 = this.x64Add(h2, h1);
        return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
    }

}