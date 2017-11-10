//猜你喜欢New
function autoScroll(obj){
            $(obj).find("ul").animate({
                marginTop : "-60px"
            },500,function(){
                $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
            });
        }
var CompObshFloorLike= BmonPage.createComponent('compObshFloorLike');//猜你喜欢
$.extend(CompObshFloorLike,{
	id : 'compObshFloorLike',
	name:'猜你喜欢',	
	init:function(result){
		if(result&&result.resultCode=='0'&&null!=result.resultObj){
			var creamInfo =result.resultObj.gfglInfoList;
			if(null !=creamInfo && undefined !=creamInfo && creamInfo.length >0)
			{
				var titleS=$.trim(creamInfo[0].F_TITLE);
				var htmlStr="<ul><li><a href='"+creamInfo[0].F_LINK+"' title='"+titleS+"' target='_blank'>"+titleS+"</a></li></ul>";
				$("#cream").html(htmlStr);
			}	
			var hotInfo =result.resultObj.rmwdInfoList;
			if(null !=hotInfo && undefined !=hotInfo && hotInfo.length >0)
			{
				var url = "http://service.js.10086.cn/strategy/RMWD_NEW.html?type="+hotInfo[0].F_ASK_TYPE+"&anchor="+hotInfo[0].F_PKID;
				var titleS=$.trim(hotInfo[0].F_RECOMMENT);
				var htmlStr="<ul><li><a href='"+url+"' title='"+titleS+"' target='_blank'>"+titleS+"</a></li></ul>";
				$("#hot").html(htmlStr);
			}
	           //精华 文字控制字数
	            $("#cream li").each(function(){
	                var maxwidth=14;
	                if($(this).text().length>maxwidth){
	                    $(this).text($(this).text().substring(0,maxwidth)+'…');
	                   // $(this).html($(this).html()+'…');
	                }
	            });
	            //热议 文字控制字数
	            $("#hot li a").each(function(){
	                var maxwidth=14;
	                if($(this).text().length>maxwidth){
	                    $(this).text($(this).text().substring(0,maxwidth)+'…');
	                    //$(this).html($(this).html()+'…');
	                }
	            });
	            //猜你喜欢
	          var userCookieMobile=getCookie("topUserMobile");
	          var likeInfoList= result.resultObj.likeInfoList;	          
	          if(null !=likeInfoList && undefined !=likeInfoList && likeInfoList.length >0)
	          {
	        	  CompObshFloorLike.initLikeInfo(likeInfoList);
	          }
	          
	          CompObshFloorLike.initWtShowBusinessAndActivities();//办理的业务 活动
	          var shareList= result.resultObj.userShareInfoList;
	          if(null !=shareList && undefined !=shareList && shareList.length >0)
			  {
	        	  CompObshFloorLike.initShareInfo(shareList);
			  }
	          var askList=result.resultObj.askInfoList;
	          if(null !=askList && undefined !=askList && askList.length >0)
			  {
	        	  CompObshFloorLike.initAskInfo(askList);
			  }
	          
//	          $(".lovely-live").scrollTop({
//	              speed:35
//	          });
	          setInterval('autoScroll(".lovely-live")',3000);
		}
	
},
initLikeInfo:function(obj){
	var likeInfoList=obj;
	var htmlLeft="";
	for(var i=0;i<3;i++)
	{
		var titleS=likeInfoList[i].busiName;
		var imgUrl=likeInfoList[i].imgUrl=="" ? "http://img02.js.10086.cn/obsh2014/floor/likefloor/images/lovely_06.jpg":likeInfoList[i].imgUrl;
		var url=likeInfoList[i].url;
		var randomImg="http://img02.js.10086.cn/obsh2014/floor/likefloor/images/titleImg0"+(i+1)+".png";
		var titleUrl=likeInfoList[i].titleImgUrl=="" ? randomImg:likeInfoList[i].titleImgUrl;
		var descS=likeInfoList[i].desc;
		var altS="猜你喜欢";
		if(imgUrl.indexOf("lovely_08") >-1)
		{
			altS="近期搜索";
			if(null ==descS || "null"==descS || undefined==descS || ""==descS)
			{
				descS="4G超千万 用了都说好";
			}
		}
		else if(imgUrl.indexOf("lovely_09") >-1)
		{
			altS="您的足迹";
		}
		if(descS.length >18)
		{
			descS=descS.substr(0,18)+"...";
		}
			htmlLeft +="<li>";
			htmlLeft +="<span class='wonderful-pic'><a href='"+url+"' target='_balnk' title='"+titleS+"'><img src='"+titleUrl+"' width='57px' height='55px' /></a></span>";
			htmlLeft +="<span class='wonderful-info'><i><img src='"+imgUrl+"' title='"+altS+"'></i><a href='"+url+"' target='_balnk'>"+titleS+"</a><br /><a href='"+url+"' title='"+likeInfoList[i].desc+"' target='_balnk'><em>"+descS+"</em></a></span>";
			htmlLeft +="</li>";		
	}
	$("#likeInfoLeft").html(htmlLeft);
	var htmlRight="";
	for(var i=3;i<6;i++)
	{
		var titleS=likeInfoList[i].busiName;
		var imgUrl=likeInfoList[i].imgUrl=="" ? "http://img02.js.10086.cn/obsh2014/floor/likefloor/images/lovely_06.jpg":likeInfoList[i].imgUrl;
		var url=likeInfoList[i].url;
		var randomImg="http://img02.js.10086.cn/obsh2014/floor/likefloor/images/titleImg0"+(i+1)+".png";
		var titleUrl=likeInfoList[i].titleImgUrl=="" ? randomImg:likeInfoList[i].titleImgUrl;
		var descS=likeInfoList[i].desc;		
		if(descS.length >18)
		{
			descS=descS.substr(0,18)+"...";
		}
		var altS="猜你喜欢";
		if(imgUrl.indexOf("lovely_08") >-1)
		{
			altS="近期搜索";
			if(null ==descS || "null"==descS || undefined==descS || ""==descS)
			{
				descS="4G超千万 用了都说好";
			}
		}
		else if(imgUrl.indexOf("lovely_09") >-1)
		{
			altS="您的足迹";
		}
		if(descS.length >18)
		{
			descS=descS.substr(0,18)+"...";
		}
			htmlRight +="<li>";
			htmlRight +="<span class='wonderful-pic'><a href='"+url+"' target='_balnk' title='"+titleS+"'><img src='"+titleUrl+"'  width='57px' height='55px' /></a></span>";
			htmlRight +="<span class='wonderful-info'><i><img src='"+imgUrl+"' title='"+altS+"'></i><a href='"+url+"' target='_balnk'>"+titleS+"</a><br /><a href='"+url+"' target='_balnk' title='"+likeInfoList[i].desc+"'><em>"+descS+"</em></a></span>";
			htmlRight +="</li>";		
	}
	$("#likeInfoRight").html(htmlRight);
	 
},
getRandShowMobile:function(){
//	var mobile13 = /^13[4-9]\d{8}$/;
//    var mobile15 = /^15[012789]\d{8}$/;
//    var mobile14 = /^14[7]\d{8}$/;
//    var mobile17 = /^17[8]\d{8}$/;    //新增178号段
//    var mobile18 = /^18[23478]\d{8}$/;
    var showMobile;
    var mobileJson={0:158,1:134,2:135,3:136,4:137,5:138,6:139,7:150,8:151,9:152,10:157,11:158,12:159,13:147,14:178,15:182,16:183,17:184,18:187,19:188,20:188};
    var mobileArray=[158,134,135,136,137,138,139,150,151,152,157,158,159,147,178,182,183,184,187,188,188];

    var ranD=parseInt(Math.random()*20);
    var ranNum1=parseInt(Math.random()*10);
    var ranNum2=parseInt(Math.random()*10);
    var ranNum3=parseInt(Math.random()*10);
    var ranNum4=parseInt(Math.random()*10);
    
    showMobile=mobileArray[ranD]+'****'+ranNum1+''+ranNum2+''+ranNum3+''+ranNum4;
    return showMobile;
},
getRandShowBusiness:function(){
	var jsonArray=[{"busName":"密码重置","busUrl":"http://service.js.10086.cn/my/MY_MMSZ.html?operNum=2"}
	,{"busName":"我的业务","busUrl":"http://service.js.10086.cn/my/MY_WDYW.html"}
	,{"busName":"品牌套餐变更","busUrl":"http://service.js.10086.cn/PPTCBG.html"}
	,{"busName":"自选套餐","busUrl":"http://service.js.10086.cn/zxtc.jsp"}
	,{"busName":"积分兑换","busUrl":"http://service.js.10086.cn/JFDH_JFDHXYW.html"}
	,{"busName":"流量安心包","busUrl":"http://service.js.10086.cn/ZDJYB.html"}
	,{"busName":"彩铃","busUrl":"http://service.js.10086.cn/COLORRING_INDEX.html"}
	,{"busName":"夜间专用流量5元","busUrl":"http://service.js.10086.cn/YJZYLL.html"}
	,{"busName":"夜间专用流量10元","busUrl":"http://service.js.10086.cn/YJZYLL.html"}
	,{"busName":"家庭V网","busUrl":"http://service.js.10086.cn/JTDHYY_NEW.html"}
	,{"busName":"密码修改","busUrl":"http://service.js.10086.cn/my/MY_MMSZ.html"}
	,{"busName":"流量快餐包","busUrl":"http://service.js.10086.cn/LLKCB.html"}
	,{"busName":"国内亲情号码","busUrl":"http://service.js.10086.cn/GNQQHM.html"}
	,{"busName":"咪咕会员","busUrl":"http://service.js.10086.cn/WXYYJLB.html"}
	,{"busName":"通用流量包5元","busUrl":"http://service.js.10086.cn/GPRS4G.html"}
	,{"busName":"通用流量包10元","busUrl":"http://service.js.10086.cn/GPRS4G.html"}
	,{"busName":"通用流量包20元","busUrl":"http://service.js.10086.cn/GPRS4G.html"}
	,{"busName":"通用流量包30元","busUrl":"http://service.js.10086.cn/GPRS4G.html"}
	,{"busName":"通用流量包40元","busUrl":"http://service.js.10086.cn/GPRS4G.html"}
	,{"busName":"任我看","busUrl":"https://dev.10086.cn/rwk/showFlow.action?channelId=C10000000020&channelSeqId=JSWAP&pageType=WWW"}
	,{"busName":"任我看","busUrl":"https://dev.10086.cn/rwk/showFlow.action?channelId=C10000000020&channelSeqId=JSWAP&pageType=WWW"}
	,{"busName":"停复机","busUrl":"http://service.js.10086.cn/YHTFJ.html"}
	,{"busName":"高清语音","busUrl":"http://service.js.10086.cn/GQYYYW.html"}
	,{"busName":"短信呼","busUrl":"http://service.js.10086.cn/DXH.html"}
	,{"busName":"流量加油包5元","busUrl":"http://service.js.10086.cn/GPRSDJB.html"}
	,{"busName":"流量加油包10元","busUrl":"http://service.js.10086.cn/GPRSDJB.html"}
	,{"busName":"至尊日租卡","busUrl":"http://service.js.10086.cn/RZK.html"}	
	,{"busName":"家庭宽带","busUrl":"http://service.js.10086.cn/WLANHANDLENEW.html"}
	,{"busName":"流量至尊包","busUrl":"http://service.js.10086.cn/LLZZB.html"}
	,{"busName":"流量季包半年包","busUrl":"http://service.js.10086.cn/LLBNB.html"}
	,{"busName":"任我用","busUrl":"http://service.js.10086.cn/ZXRW_BUYMOBILE_SHARE2.html"}
	,{"busName":"至尊日租卡","busUrl":"http://service.js.10086.cn/RZK.html"}	
	,{"busName":"流量季包半年包","busUrl":"http://service.js.10086.cn/LLBNB.html"}
	,{"busName":"任我用","busUrl":"http://service.js.10086.cn/ZXRW_BUYMOBILE_SHARE2.html"}
	];
	 var ranD=parseInt(Math.random()*30);
	var myobj=eval(jsonArray);
	return myobj[ranD];
},
getRandowTime:function(hour){	
	if(hour==0)
	{
		hour=23;
	}	
	hour=hour-1;
	if(hour<10)
	{
		hour="0"+hour;
	}	
	var arrayObj = new Array();
	var time;
	for(var i=0;i<60;i++)
	{
		if(i<10)
		{
			time=hour+":0"+i;
		}
		else
		{
			time=hour+":"+i;
		}
		arrayObj.push(time);
	}
	 var ranD=parseInt(Math.random()*60);
	 return arrayObj[ranD];
},
getRandShowActivities:function(){
	var jsonArray=[{"busName":"和多号","busUrl":"http://hdh.10086.cn/pc/login.jsp"}
				  ,{"busName":"速8","busUrl":"http://g.10086.cn/a/gm/fast8"}	
				  ,{"busName":"任我翻","busUrl":"http://service.js.10086.cn/LLYHG.html"}	
				  ,{"busName":"开高清语音VOLTE 送免费通话！","busUrl":"http://service.js.10086.cn/nact/resource/1031/html/index.html"}
				  ,{"busName":"任我翻","busUrl":"http://service.js.10086.cn/LLYHG.html"}	
				  ,{"busName":"和多号","busUrl":"http://hdh.10086.cn/pc/login.jsp"}
				  ,{"busName":"速8","busUrl":"http://g.10086.cn/a/gm/fast8"}	
				  ,{"busName":"任我翻","busUrl":"http://service.js.10086.cn/LLYHG.html"}	
				  ,{"busName":"开高清语音VOLTE 送免费通话！","busUrl":"http://service.js.10086.cn/nact/resource/1031/html/index.html"}
				  ,{"busName":"流量至尊套餐","busUrl":"http://service.js.10086.cn/LLZZXC.html"}				  
				 
	];
	//流量大翻倍  http://service.js.10086.cn/LLYHG.html
	 var week = new Date().getDay();  
	 if (week == 3) {  
		 var jsonZs={};
		 jsonZs.busName="周三特权";
		 jsonZs.busUrl="http://service.js.10086.cn/nact/resource/1011/html/index.html";
		 jsonArray.push(jsonZs);
		 jsonArray.push(jsonZs);
		 jsonArray.push(jsonZs);
		 jsonArray.push(jsonZs);
		 jsonArray.push(jsonZs);
		 jsonArray.push(jsonZs);
		  var ranD=parseInt(Math.random()*10)+5;
			var myobj=eval(jsonArray);
			return myobj[ranD];
	        //{"busName":"周三特权","busUrl":"http://service.js.10086.cn/nact/resource/1011/html/index.html"}
	} 
	    var ranD=parseInt(Math.random()*10);
		var myobj=eval(jsonArray);
		return myobj[ranD];
}
,initWtShowBusinessAndActivities:function(){
	var showHtml="";
	
	var myDate=new Date();
	var hour=myDate.getHours();
	var minute =myDate.getMinutes();
	if(hour >22 || hour<=8)
	{
		//5
		for(var i=0;i<2;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<3;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
	}
	if(hour >8 && hour<=11)
	{
		//40
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
	}
	if(hour >11 && hour<=14)
	{
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		//20
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		//20
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
	}
	if(hour >14 && hour<=16)
	{//25
		for(var i=0;i<5;i++)
		{
		var showM=CompObshFloorLike.getRandShowMobile();
		var busiInfo=CompObshFloorLike.getRandShowBusiness(); 
		var time=CompObshFloorLike.getRandowTime(hour);
		  var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
		showHtml +="<li>";
		showHtml +="<span class=\"time\">"+time+"</span>";
		showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
		showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
		var showM=CompObshFloorLike.getRandShowMobile();
		var busiInfo=CompObshFloorLike.getRandShowBusiness(); 
		var time=CompObshFloorLike.getRandowTime(hour);
		  var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
		showHtml +="<li>";
		showHtml +="<span class=\"time\">"+time+"</span>";
		showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
		showHtml +="</li>";
		}
		for(var i=0;i<5;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
	}
	if(hour >16 && hour<=22)
	{
		//10
		for(var i=0;i<2;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<3;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		    var time=CompObshFloorLike.getRandowTime(hour);
		    var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<3;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowBusiness();
		     var time=CompObshFloorLike.getRandowTime(hour);
		     var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"办理了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
		for(var i=0;i<2;i++)
		{
			var showM=CompObshFloorLike.getRandShowMobile();
			var busiInfo=CompObshFloorLike.getRandShowActivities();
		    var time=CompObshFloorLike.getRandowTime(hour);
		    var busname=busiInfo.busName.length >8 ? busiInfo.busName.substr(0,8)+"..." :busiInfo.busName;
			showHtml +="<li>";
			showHtml +="<span class=\"time\">"+time+"</span>";
			showHtml +="<a href='"+busiInfo.busUrl+"' target='_blank'><span class=\"publish\">"+showM+"参加了<i>"+busname+"</i></span></a>";	
			showHtml +="</li>";
		}
	}	
    
	$("#wtShowInfo").html(showHtml);	
	
	
},
initShareInfo :function(obj){
	var showHtml="";
	var shareList =obj;
	for(var i=0;i<shareList.length;i++)
	{
		var showM=shareList[i].F_PHONE_NUM.substr(0,3)+"****"+shareList[i].F_PHONE_NUM.substr(7,4);
		//var busiInfoName=shareList[i].;
	  var title=shareList[i].F_TITLE;
	  var busname=title.length >6 ? title.substr(0,6)+"..." :title;
	  var url="http://service.js.10086.cn/GLZQ_DETAIL_NEW.jsp?f_pkid="+shareList[i].F_PKID;
		showHtml +="<li>";
		showHtml +="<span class=\"time\" style='font-size:10px;'>一天前</span>";
		showHtml +="<a href='"+url+"' target='_blank' title='"+title+"'><span class=\"publish\">"+showM+"发布了<i>"+busname+"</i></span></a>";	
		showHtml +="</li>";
	}
	$("#wtShowInfo").append(showHtml);	
},
initAskInfo :function(obj){
	var showHtml="";
	var askList =obj;
	for(var i=0;i<askList.length;i++)
	{
		var showM=askList[i].MOBILE.substr(0,3)+"****"+askList[i].MOBILE.substr(7,4);
		//var busiInfoName=shareList[i].;
	  var title=askList[i].ASKCONTENT;	  
	  var type=askList[i].ASKTYPE;
	  var busiNum=askList[i].F_BUSI_NUM;
	  var url="http://service.js.10086.cn/"+busiNum+".html";
	  //var url="http://service.js.10086.cn/GLZQ_DETAIL_NEW.jsp?f_pkid="+shareList[i].F_PKID;
		showHtml +="<li>";
		showHtml +="<span class=\"time\"  style='font-size:10px;'>一天前</span>";
		title=title.substring(title.indexOf(">")+1,title.lastIndexOf("<"));
		var busname=title.length >6 ? title.substr(0,6)+"..." :title;
		if(type ==1)
		{
			showHtml +="<a href='"+url+"' target='_blank' title='"+title+"'><span class=\"publish\">"+showM+"问大家<i>"+busname+"</i></span></a>";	
		}
		else if(type ==2)
		{
			showHtml +="<a href='"+url+"' target='_blank' title='"+title+"'><span class=\"publish\">"+showM+"回答了<i>"+busname+"</i></span><a>";	
		}
		showHtml +="</li>";
	}
	$("#wtShowInfo").append(showHtml);	
}

});





//var userMobile=1;
////猜你喜欢
//var ComponentCaiNiLike= BmonPage.createComponent('compObshFloorLike');//猜你喜欢
//$.extend(ComponentCaiNiLike,{
//	id : 'compObshFloorLike',
//	name:'猜你喜欢',	
//	init:function(result){
//		if(result&&result.resultCode=='0'&&null!=result.resultObj){
//			$("#compObshFloorLike").attr("style","display:none");
//			userMobile=0;//根据接口返回状态号，判断用户是否成功登录0:成功  1：失败/未登陆
//			//alert(userMobile);
//			var showdata=result.resultObj;
//			
//			if(""!=showdata && null!=showdata && showdata.length>0){
//				for(var i=0;i<showdata.length;i++){
//					var desc=showdata[i].desc;
//					if(null==desc || "null"==desc){
//						desc="";
//					}
//					var cookieName="cookieYouLike"+(i+1);
//					var cookieValue=showdata[i].busiName+"||"+desc+"||"+showdata[i].url;
//						
//					addCookie(cookieName,cookieValue,365 * 24 * 60 * 60 * 1000);
//				}
//			}
//			
//		}
//	}
//});
//$(function(){
//	
//	var userCookieMobile=getCookie("topUserMobile");
//	var cookieLikes=getCookie("cookieYouLike1");
//	 var url = location.href;  
//	 if(url.indexOf("service.js.10086.cn/index.html")!=-1){
//		if(""!=userCookieMobile && null!=userCookieMobile && userMobile !=0 && cookieLikes!=null){
//		//alert("用户是否登录：(0:ok   1:no)"+userMobile+"|| 用户号码："+userCookieMobile);
//		var htmlstr="<ul class='gs-main clearfix'>";
//		for(var i=0;i<7;i++){
//			
//			var value=getCookie("cookieYouLike"+(i+1));
//			if(null!=value){
//				var name=value.split("||")[0];
//				var url=value.split("||")[2];
//				var desc=value.split("||")[1];
//				if(null==desc || "null"==desc){
//					desc="";
//				}
//			htmlstr=htmlstr+"<li class='gs-item'><a href='"+url+"' onclick='chama("+(i+1)+")'><img class='gs-item-img' src='http://img02.js.10086.cn/obsh2014/common/upload/youLike"+(i+1)+".png'><br><i class='gs-item-name'>"+name+"</i><p class='gs-item-desc'>"+desc+"</p></a></li>";
//			}
//		}
//		if(undefined !=htmlstr && "<ul class='gs-main clearfix'>"!=htmlstr){
//			if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','ULike', 'WT.event','ULike_show');}
//			$(".youlike").html(htmlstr);
//			$("#compObshFloorLike").attr("style","display:block");
//		}
//		}else{
//			$("#compObshFloorLike").attr("style","display:none");
//		}
//	 }
//});
function chama(value){
	if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','ULike', 'WT.event','ULike_tab'+value);}
}


//流量优惠NEW
var llyhFloorComponent2014New  = BmonPage.createComponent('compObshFloorLl');//流量优惠NEW
$.extend(llyhFloorComponent2014New,{
	id : 'compObshFloorLl',
	name : '流量优惠',
	privilegeMap : new Map,
	remainDay : '1',
	monthMaxDay : '30',
	loginMobile : "",
	loginforSMS : "",
	linkUrl: 'http://service.js.10086.cn/index.jsp',
	init : function(result){
		this.privilegeMap.put("30M",5);
		this.privilegeMap.put("70M",10);
		this.privilegeMap.put("150M",20);
		this.privilegeMap.put("500M",30);
		this.privilegeMap.put("700M",40);
		this.privilegeMap.put("1GB",50);
		this.privilegeMap.put("2GB",70);
		this.privilegeMap.put("3GB",100);
		this.privilegeMap.put("4GB",130);
		this.privilegeMap.put("6GB",180);
		this.privilegeMap.put("11GB",280);
		
		// 后期“我要抢流量”板块和“”流量用不完“板块会不定期替换，这个在db里面写了，所以在showMidInfo方法前面
		var $richGprs = $(".buy-gprs .rich-gprs");
		$richGprs.hover(function(){
			$richGprs.find(".rich-btn").css("cursor","pointer");
		});
		$richGprs.click(function(){

		});
/*        $richGprs.hover(
            function(){
                $(this).addClass("rich-gprs-hover");
            },
            function(){
                $(this).removeClass("rich-gprs-hover");
            }
        );*/
	    loginforSMS = result.isLogin;//是否登录 1：是 0：否
		
		this.showMidInfo(result);
	},
	
	showMidInfo : function(result){
		var isLogin = result.isLogin;//是否登录 1：是 0：否
		if("1" == isLogin && result){
			/**根据流量情况展示登录信息*/
			$("#unLogin").hide();
			$("#isLogin").show();
			//根据流量情况展示登录信息
			
//			llyhFloorComponent2014New.showLoginRightFluxInfo(result);//caixiao   一楼右侧修改
			var mobile =  result.llyhMidInfo.userMobile;
			//采集网厅页面客户号
 			var wtMetaCm = "<meta name=\"WT.mobile\" content=\""+mobile+"\"/>";
 			$("head").prepend(wtMetaCm);
 			//if(window._tag)_tag.dcsMultiTrack('dcsuri','mo.gif','WT.mobile',mobile);
 			
			llyhFloorComponent2014New.showLoginMidFluxInfo(result);
			$("#ForLlFloorLogin").addClass("logged-page");
		}else{
			/**展示未登录信息*/
			$("#unLogin").show();
			$("#isLogin").hide();
			var imgs = result.unLoginInfo.resultObj;
			if (imgs && imgs.length > 0){
				for (var i=0;i < imgs.length;i++){
					var tempInfo = imgs[i];
					if (i == 0){
						var html1 = '<a title="'+tempInfo.title+'" href="'+tempInfo.picLinkUrl+'" target="_blank"><img src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+tempInfo.picImag+'" width="250" height="350" class="data-img"/></a>';
						$("#leftImg").html(html1);
					} else if (i == 1){
						var html1 = '<a title="'+tempInfo.title+'" href="'+tempInfo.picLinkUrl+'" target="_blank"><img src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+tempInfo.picImag+'" width="250" height="350" class="data-img"/></a>';
						$("#midImg").html(html1);
					}
				}
			}
			//中间切换按钮显隐
			//this.showFlooriMidArrow();
			//panel_center_tab(".panel-traffic",".panel-body-center .tab-tag li",".panel-body-center .inner");
			//panel_center_tab(".panel-traffic",".panel-body-right .tab a",".panel-body-right .llyhFloorRight");
			//切换流量选择
			llyhFloorComponent2014New.showRightPrice();
			$("#ForLlFloorLogin").removeClass("logged-page");
//			$(".floor-switch-btn").css("background-image","url(\"http://files01.js.10086.cn/obsh2014/common/global/narrow-floor-switch.jpg\")");
		}
		//indexWeb.floorGprs();
		lazyLoad("compObshFloorLl");
	},
	
	//右侧积分兑换增加  caixiao
	showLoginRightFluxInfo  : function(result){
		var llyhFloorInfo = result.llyhMidInfo.resultObj;//result.llyhMidInfo.resultObj;
//		alert(llyhFloorInfo);
		var userMobile = llyhFloorInfo.userMobile;
		if(result.llyhMidInfo.resultCode == "0" && result.llyhMidInfo.resultObj){
			var userscore = llyhFloorInfo.score;//用户积分
			userscore = parseInt(userscore);
			var isorder4gprod = llyhFloorInfo.isorder4gprod;//是否开通4G功能,1是开通，0是没有开通
			//alert(userscore + "====="+isorder4gprod);
			if(userscore < 420){// 登录后，积分<330,显示充流量
				//右侧充值号码为用户号码
				$("#rechargetRight").val(userMobile).attr("readonly","true");
				//切换流量选择
				this.showRightPrice();
				// 登录后“充流量”板块，4G客户要默认100M，目前无默认选项
				if ("1" == isorder4gprod){
					var cll = $(".amount-item");
					$.each(cll, function (i, item) {
						var strText = $(item).text();
						if ('100M' == strText){
							$(item).click();
						}
					});
				}
//				$(".floor-switch-btn").css("background-image","url(\"http://files01.js.10086.cn/obsh2014/common/global/narrow-floor-switch.jpg\")");
				
			}else{// 登录后，积分>330,显示兑换流量
//				$("#llyhRightCLL").hide();
				$("#llyhRightNOTJFDH").hide();
				$("#llyhRightJFDH").show();
				//右侧充值号码为用户号码
//				$("#jfdhczhm").val(userMobile).attr("readonly","true");	
				$("#jfdhczhm").html(userMobile);
				$("#scoreNum").html("&nbsp;"+userscore);
				//根据积分选择默认档次
				if(userscore < 840){
					$("#keduihuan1").addClass("amount-selected");
					$("#xiaofeijifen").html("420");
				}else{
					$("#keduihuan2").addClass("amount-selected");
					$("#xiaofeijifen").html("840");
				} 
				this.showRightPriceScore(userscore);
				if(userscore < 670){
		    		$("#keduihuan1").click();
		    	}else{
		    		$("#keduihuan2").click();
		    	}
//				$(".floor-switch-btn").css("background-image","url(\"http://files01.js.10086.cn/obsh2014/common/global/narrow-floor-switch.png\")");
			}
		}
	},
	//点击选择不同积分段功能实现
	showRightPriceScore : function(userscore){
		var $gprsPriceItem1 = $("#keduihuan1");
		var $gprsPriceItem2 = $("#keduihuan2");
		var $gprsPriceItem3 = $("#keduihuan3");
		var $gprsPriceItem4 = $("#keduihuan4");
		var $actualRechargeVal = $("#xiaofeijifen");
		if(userscore < 670){
			
			$("#keduihuan2").css("color","#cccccc");
			$("#keduihuan3").css("color","#cccccc");
			$("#keduihuan4").css("color","#cccccc");
			gprsSelectFn($gprsPriceItem1,$actualRechargeVal,"amount-selected");
		}else if(userscore < 1330){
			
			$("#keduihuan3").css("color","#cccccc");
			$("#keduihuan4").css("color","#cccccc");
			gprsSelectFn($gprsPriceItem1,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem2,$actualRechargeVal,"amount-selected");
		}else if(userscore < 2000){
			
			$("#keduihuan4").css("color","#cccccc");
			gprsSelectFn($gprsPriceItem1,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem2,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem3,$actualRechargeVal,"amount-selected");
		}else{
			gprsSelectFn($gprsPriceItem1,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem2,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem3,$actualRechargeVal,"amount-selected");
			gprsSelectFn($gprsPriceItem4,$actualRechargeVal,"amount-selected");
		}	
    	function gprsSelectFn(a,b,sClass){
            a.bind("click",function(){
                var index = a.index($(this));
                var recharge = "0";
                $(this).addClass(sClass).siblings().removeClass(sClass);
                var param = $(this).text();
                if("30M" == $(this).text()){
                	recharge = "420";
                }else if("70M" == $(this).text()){
                	recharge = "840"
                }else if("150M" == $(this).text()){
                	recharge = "1670";
                }else if("500M" == $(this).text()){
                	recharge = "2500";
                }
                b.html(recharge);
                $("#changeScore").attr("href","http://service.js.10086.cn/JFDH_JFDHXYW.html?id="+param);
            })
    	}
	},
		
	showLoginMidFluxInfo : function(result){
		var llyhFloorInfo = result.llyhMidInfo.resultObj;
		if(result.llyhMidInfo.resultCode == "0" && result.llyhMidInfo.resultObj){
			llyhFloorComponent2014New.loginMobile = llyhFloorInfo.userMobile;
			var userMobile = llyhFloorInfo.userMobile;	//用户号码
			var total = llyhFloorInfo.total;			//流量总和
			var used = llyhFloorInfo.used;				//已使用流量
			var twoNetFlux = llyhFloorInfo.twoNetFlux;	//2G
			var threeNetFlux = llyhFloorInfo.threeNetFlux;	//3G
			var fourNetFlux = llyhFloorInfo.fourNetFlux;	//4G
			var averageNetFlux = llyhFloorInfo.averageNetFlux;	//日均流量
			//var isNetFull = llyhFloorInfo.isNetFull;		//流量是否充足1、充足；0、不足
			var isOpenGpr4g = llyhFloorInfo.isOpenGpr4g;	//是否开通通用流量包：1、开通；0、未开通
			var isOpenaxb=llyhFloorInfo.isOpenaxb;
			var gprs20fd = llyhFloorInfo.gprs20fd;			//是否开通20元封顶套餐：1、已开通 0、未开通
			var userscore = llyhFloorInfo.score;  //用户积分
			userscore = parseInt(userscore);
			var numList = llyhFloorInfo.listPhone;// numList.length>0,转赠开通
			//日期刻度  
			this.showStatusDate();
			$("#gprs2g").html(this.getFormatGdata(twoNetFlux));
			$("#gprs3g").html(this.getFormatGdata(threeNetFlux));
			$("#gprs4g").html(this.getFormatGdata(fourNetFlux));
			$("#gprs2g").css("font-family","microsoft yahei");
			$("#gprs3g").css("font-family","microsoft yahei");
			$("#gprs4g").css("font-family","microsoft yahei");
			// add sunwei 2015-02-05
			var tyTotleLl = llyhFloorInfo.tyTotleLl;
			var tyUsedLl = llyhFloorInfo.tyUsedLl;
			var zyTotleLl = llyhFloorInfo.zyTotleLl;
			var zyUsedLl = llyhFloorInfo.zyUsedLl;
			var eb = llyhFloorInfo.eb;
			//20元封顶套餐
			if("1" == gprs20fd){
				//诊断文字
				$("#diagnoseTips").html("您开通的20元封顶套餐，优惠范围仅包括通过CMWAP接入点访问WAP和百宝箱业务产生的GPRS通信费！");
				//仪表盘
				$("#totalGprs_ty").html("20封顶");
				$("#totalGprs_zy").html("0M");// 最右面的总量
				//$(".gprs-status-pie").find("span").attr("style","font-size:11px");
				$("#precent").css("width","35%");// 画线的比例  30% 死的
				//$(".gprs-progress .progress-layer").css("left","80px");
				//$("#gprsNumPie").html("已使用<strong>"+this.getFormatGdata(used)+"</strong>");
				$("#gprsNumPie").html("已使用<strong>"+this.getFormatDataToG(tyUsedLl)+"</strong>");
//				$(".gprs-progress .progress-layer").css("left","0px");
				$("#ty_left").css("left","35px");
				
				$("zy_left").css("left","0px");
				$("#zy_precent").css("width","0%");//专用流量
				$("#zy_NumPie").html("已使用<strong>"+this.getFormatDataToG(zyUsedLl)+"</strong>");
			
				$("#netIsNotFull").show();//sunwei 2015-4-13 大改动 原来的不要了
				$("#netIsNotFull2").show();
				$("#netIsFull").hide();
//				$("#gprsOtherTit").html("【流量使用秘笈】");
			}else{
				if("0" != total){
					//剩余天数
					var mRemainDay = llyhFloorComponent2014New.remainDay;
					//本月天数
					var mMaxDay = llyhFloorComponent2014New.monthMaxDay;
					//本月过去的天数
					var pastDay = mMaxDay-mRemainDay;
						
					//已使用流量/总流量 = 百分比；已百分比对应展示样式gprs-num-pie00 - gprs-num-pie19
//					var percent = parseInt((used/total)*100);
					//已使用流量/过去的天数，得到日均流量，在乘剩下的天数，得到需要的日后 还流量
					var percent = parseInt((used/1024/pastDay)*mRemainDay);
					//剩余流量
//					var residual_Flow= total - used;
					var residual_Flow= (tyTotleLl-tyUsedLl) + (zyTotleLl-zyUsedLl);
					
					var ty_percent=0;
					var zy_percent=0;
					if ("0" != tyTotleLl){
						ty_percent = parseInt((tyUsedLl/tyTotleLl)*100);
					}
                    if ("0" != zyTotleLl){
                    	zy_percent = parseInt((zyUsedLl/zyTotleLl)*100);
					}
					
					//if("1" != isNetFull){//流量不足
						$("#netIsNotFull0").show();
						$("#gprsOtherTit").html("【流量加油站】");
						//诊断文字:本月还有<span>15天</span>，日前日均流量为<span>122M</span>，以此估算，本月流量将超过您的流量额度，建议您<a href="#">升档流量套餐</a>。
						var recommend = "";
						if("1" == isOpenGpr4g) {
							recommend = "<a href='http://service.js.10086.cn/GPRSDJB.html' target='_blank'>流量加油包！</a>开通立即生效，月底自动关闭。";
						} else {
							var tyUrl="";
							var tyName="";
							//已使用流量/过去的天数*剩余天数-剩余流量
							var flowRes=percent-(total-used)/1024;
							if(0<=flowRes && flowRes<=30){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=30M";
								tyName="5元包30MB通用流量包";
							}else if(30<flowRes && flowRes<=100){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=100M";
								tyName="10元包100MB通用流量包";
							}else if(100<flowRes && flowRes<=300){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=300M";
								tyName="20元包300MB通用流量包";
							}else if(300<flowRes && flowRes<=500){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=500M";
								tyName="30元包500MB通用流量包";
							}else if(500<flowRes && flowRes<=700){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=700M";
								tyName="40元包700MB通用流量包";
							}else if(700<flowRes && flowRes<=1024){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=1G";
								tyName="50元包1GB通用流量包";
							}else if(1024<flowRes && flowRes<=2048){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=2G";
								tyName="70元包2GB通用流量包";
							}else if(2048<flowRes && flowRes<=3072){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=3G";
								tyName="100元包3GB通用流量包";
							}else if(3072<flowRes && flowRes<=4096){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=4G";
								tyName="130元包4GB通用流量包";
							}else if(4096<flowRes && flowRes<=6144){
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=6G";
								tyName="180元包6GB通用流量包";
							}else{
								tyUrl="http://service.js.10086.cn/GPRS4G.html?id=11G";
								tyName="280元包11GB通用流量包";
							}
							
							recommend = "<a href='"+tyUrl+"' target='_blank'>"+tyName+"</a>";
							
						}
						if(percent < residual_Flow/1024){
							$("#diagnoseTips").html("本月还有<span>"+mRemainDay+"</span>天，您剩余流量为<span>"+this.getFormatDataToG(residual_Flow)+"</span>，以此估算，本月流量充足。你可以为自己找点儿乐子！<font style=\"font-size:12px\">（具体流量以账单为准）</font>");
						}else {
							if("0" == isOpenGpr4g  ){
								$("#diagnoseTips").html("本月还有<span>"+mRemainDay+"</span>天，您剩余流量为<span>"+this.getFormatDataToG(residual_Flow)+"</span>，以此估算，本月流量将超过您的流量额度。<font style=\"font-size:12px\">（具体流量以账单为准）</font></br>1、建议开通" + recommend + "</br>2、进入套餐理财<a target=\"_blank\" href=\"http://service.js.10086.cn/experience.do\">异常消费</a>板块查询。");
							}else if("0"==isOpenaxb && "1" == isOpenGpr4g ){
								$("#diagnoseTips").html("本月还有<span>"+mRemainDay+"</span>天，您剩余流量为<span>"+this.getFormatDataToG(residual_Flow)+"</span>，以此估算，本月流量将超过您的流量额度。<font style=\"font-size:12px\">（具体流量以账单为准）</font></br>1、建议开通" + recommend + "</br>2、进入套餐理财<a target=\"_blank\" href=\"http://service.js.10086.cn/experience.do\">异常消费</a>板块查询。");
							}else if("1"==isOpenaxb ){
								$("#diagnoseTips").html("本月还有<span>"+mRemainDay+"</span>天，您剩余流量为<span>"+this.getFormatDataToG(residual_Flow)+"</span>，以此估算，本月流量将超过您的流量额度。<font style=\"font-size:12px\">（具体流量以账单为准）</font></br>1、建议开通<a href='http://service.js.10086.cn/LLKCB.html' target='_blank'>6元500M流量快餐包</a></br>2、进入套餐理财<a target=\"_blank\" href=\"http://service.js.10086.cn/experience.do\">异常消费</a>板块查询。");
							}
						}
						if (ty_percent >= 100){
							$("#precent").css("width","100%");// 画线的比例
							$("#ty_left").css("left","240px");
						} else {
							$("#precent").css("width",ty_percent+"%");// 画线的比例
							if (ty_percent <= 10){
								$("#ty_left").css("left","-30px");
							} else {
								var leftPx = llyhFloorComponent2014New.getLeft(ty_percent);
								$("#ty_left").css("left",leftPx+"px");
							}
						}
						if (zy_percent >= 100){
							$("#zy_precent").css("width","100%");// 画线的比例
							$("#zy_left").css("left","240px");
						} else {
							$("#zy_precent").css("width",zy_percent+"%");// 画线的比例
							if (zy_percent <= 10){
								$("#zy_left").css("left","-30px");
							} else {
								var leftPx2 = llyhFloorComponent2014New.getLeft(zy_percent);
								$("#zy_left").css("left",leftPx2+"px");
							}
						}
						//仪表盘总流量
						
						
						$("#totalGprs_ty").html(this.getFormatDataToG(tyTotleLl));
						$("#totalGprs_zy").html(this.getFormatDataToG(zyTotleLl));
						
						$("#gprsNumPie").html("<p><a target=\"_blank\" href='http://service.js.10086.cn/my/MY_ZDCX.html?operNum=2#home'>已用<span>"+this.getFormatDataToG(tyUsedLl)+"</span></a></p>");
						$("#zy_NumPie").html("<p><a target=\"_blank\" href='http://service.js.10086.cn/my/MY_ZDCX.html?operNum=2#home'>已用<span>"+this.getFormatDataToG(zyUsedLl)+"</span></a></p>");
						if("1" == isOpenGpr4g){
							//根据日均流量算本月流量需要200M，则推荐500M的套餐
							var monthNeedFlux = this.getFormatData(averageNetFlux * mMaxDay);//**M
							var gprsOtherHtml = this.getOtherHtml(parseInt(monthNeedFlux));
							$("#gprsOtherSelect").html(gprsOtherHtml);
							
						}else{//未开通通用流量包
							//保留默认
						}
						$("#netIsNotFull").show();//sunwei 2015-4-13 大改动 原来的不要了
						$("#netIsNotFull2").show();
						$("#netIsFull").hide();
					
				}else{//无任何流量情况
					//诊断文字
					$("#diagnoseTips").html("您现在没有开通流量套餐，上网没有优惠哦！建议您开通<a style='cursor:pointer' target='_blank' href='http://service.js.10086.cn/GPRS4G.html'>5元包30M通用流量包</a>，享受高速上网。");
					$("#totalGprs").html("0M");
					$("#precent").css("width","0%");// 画线的比例,这时是0. TODO
					//仪表盘(灰色
					//$("#gprsNumPie").attr("class","gprs-num-pie gprs-num-pie00");
					$("#gprsNumPie").html("<p>尚未开通流量套餐</p>");//不画百分比
					
					$(".gprs-progress .progress-layer").css("left","0px");
					
					$("#zy_precent").css("width","0%");//专用流量
					$("#zy_NumPie").html("<p>尚未开通流量套餐</p>");
					
					$("#netIsNotFull0").show();
					$("#netIsNotFull").show();//sunwei 2015-4-13 大改动 原来的不要了
					$("#netIsNotFull2").show();
					$("#netIsFull").hide();
					$("#gprsOtherTit").html("【流量加油站】");
				}
			}
			$("#myScore").html(userscore);
//			var obj1wer=eval("("+eb+")");
//			if (null != obj1wer.reObj[0] && null != obj1wer.reObj[0].integralLevelName) {
//				var nowEB = obj1wer.reObj[0].integralNow;//parseInt(obj1wer.reObj[0].integralNow);
				$("#myE").html(eb);
				if (eb < 50){
					$("#canChangeByE").html("50e币可兑换5M省内通用流量");
				} else if (eb < 100){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>5M</span>");
				} else if (eb < 200){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>10M</span>");
				} else if (eb < 300){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>20M</span>");
				} else if (eb < 500){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>30M</span>");
				} else if (eb < 700){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>50M</span>");
				} else if (eb < 1000){
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>70M</span>");
				} else {
					$("#canChangeByE").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>100M</span>");
				}
//			}
			if(userscore < 250 ){
				$("#canChangeBySco").html("250积分可兑换10M流量");
			}else if(userscore >= 250 && userscore < 420){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>10M</span>");
			} else if (userscore >= 420 && userscore < 840){
				$("#canChangeBySco").html("兑换流量 ： <span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>30M</span>");
			} else if ( userscore >=840 && userscore < 1670){
				$("#canChangeBySco").html("兑换流量 ： <span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>100M</span>");
			} else if ( userscore >=1670 &&userscore < 2500){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>300M</span>");
			} else if ( userscore >= 2500 &&userscore < 3340){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>500M</span>");
			} else if( userscore>= 3340 &&userscore < 4170){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>700M</span>");
			}else if(userscore >=4170 && userscore < 5840){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>1G</span>");
			}else if(userscore >=5840 && userscore < 8340){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>2G</span>");
			}else if(userscore >=8340 && userscore < 10840){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>3G</span>");
			}else if(userscore >=10840 && userscore < 15000){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>4G</span>");
			}else if(userscore >=15000 && userscore < 23340){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount' style='color:#e40177; font-size:16px'>6G</span>");
			}else if(userscore >=23340){
				$("#canChangeBySco").html("兑换流量 ：<span class='exchange-gprs-amount'style='color:#e40177; font-size:16px'>11G</span>");
			}
			
			
		}
	},
	getLeft : function(perctnt){
		var leftPx = 0;
		if (perctnt > 10 && perctnt <= 15){
			leftPx = -15;
		} else if (perctnt > 15 && perctnt <= 20){
			leftPx = 0;
		}else if (perctnt > 20 && perctnt <= 25){
			leftPx = 20;
		} else if (perctnt > 25 && perctnt <= 30){
			leftPx = 30;
		}else if (perctnt > 30 && perctnt <= 35){
			leftPx = 40;
		}else if (perctnt > 35 && perctnt <= 40){
			leftPx = 55;
		}else if (perctnt > 40 && perctnt <= 45){
			leftPx = 75;
		}else if (perctnt > 45 && perctnt <= 50){
			leftPx = 88;
		}else if (perctnt > 50 && perctnt <= 55){
			leftPx = 105;
		}else if (perctnt > 55 && perctnt <= 60){
			leftPx = 115;
		}else if (perctnt > 60 && perctnt <= 65){
			leftPx = 135;
		}else if (perctnt > 65 && perctnt <= 70){
			leftPx = 150;
		}else if (perctnt > 70 && perctnt <= 75){
			leftPx = 165;
		}else if (perctnt > 75 && perctnt <= 80){
			leftPx = 178;
		}else if (perctnt > 80 && perctnt <= 85){
			leftPx = 198;
		}else if (perctnt > 85 && perctnt <= 90){
			leftPx = 210;
		}else if (perctnt > 90 && perctnt <= 95){
			leftPx = 225;
		}else if (perctnt > 95 && perctnt < 100){
			leftPx = 230;
		}
		return leftPx;
	},
	
	getOtherHtml : function(monthNeedFlux){
		var otherHtml = "";
		var itemFist = "30M";
		var itemSnd = "70M";
		var itemThir = "150M";
		if(monthNeedFlux >= 4096){
			itemFist = "6GB";
			itemSnd = "11GB";
			itemThir="";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=6GB");
		}else if(monthNeedFlux >= 3072 && monthNeedFlux < 4096){
			itemFist = "4GB";
			itemSnd = "6GB";
			itemThir = "11GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=4GB");
		}else if(monthNeedFlux >= 2048 && monthNeedFlux < 3072){
			itemFist = "3GB";
			itemSnd = "4GB";
			itemThir = "6GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=3GB");
		}else if(monthNeedFlux >= 1024 && monthNeedFlux < 2048){
			itemFist = "2GB";
			itemSnd = "3GB";
			itemThir = "4GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=2GB");
		}else if(monthNeedFlux >= 700 && monthNeedFlux < 1024){
			itemFist = "1GB";
			itemSnd = "2GB";
			itemThir = "3GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=1GB");
		}else if(monthNeedFlux >= 500 && monthNeedFlux < 700){
			itemFist = "700M";
			itemSnd = "1GB";
			itemThir = "2GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=700M");
		}else if(monthNeedFlux >= 150 && monthNeedFlux < 500){
			itemFist = "500M";
			itemSnd = "700M";
			itemThir = "1GB";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=500M");
		}else if(monthNeedFlux >= 70){
			itemFist = "150M";
			itemSnd = "500M";
			itemThir = "700M";
			$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id=150M");
		}else{
		}
        var recharge = llyhFloorComponent2014New.privilegeMap.get(itemFist);
		otherHtml += "<a class=\"gprs-package-item gprs-package-selected\" style='width:108px' name='LLJYJ' onclick='llyhFloorComponent2014New.showSelJLL(this)' href=\"javascript:;\"><span class='gprs-cate'>"+itemFist+"</span><span class='gprs-price'>"+recharge+"元/月</span></a> ";
		recharge = llyhFloorComponent2014New.privilegeMap.get(itemSnd);
		otherHtml += "<a class=\"gprs-package-item\" style='width:108px' name='LLJYJ' onclick='llyhFloorComponent2014New.showSelJLL(this)' href=\"javascript:;\"><span class='gprs-cate'>"+itemSnd+"</span><span class='gprs-price'>"+recharge+"元/月</span></a> ";
		if ('' != itemThir){
			recharge = llyhFloorComponent2014New.privilegeMap.get(itemThir);
			otherHtml += "<a class=\"gprs-package-item\" style='width:108px' name='LLJYJ' onclick='llyhFloorComponent2014New.showSelJLL(this)' href=\"javascript:;\"><span class='gprs-cate'>"+itemThir+"</span><span class='gprs-price'>"+recharge+"元/月</span></a>";
		}
		otherHtml += "<a class=\"gprs-package-item gprs-package-more\" href=\"http://service.js.10086.cn/GPRS4G.html\" target='_blank'>...</a>";
		//$("#gprsOtherPrice").html("￥<em class=\"gprs-month-price\">"+recharge+"</em>元/月");
		return otherHtml;
	},
	giveScore :function(){
		var list = $("[name='checkNum']");
		var numberS = "";
		$.each(list, function (i, item) {
			if ($(item).checked){
				numberS += $(item).val()+"&";
			}
		});
		if (numberS != ''){
			$("#giveOther").attr("href","http://service.js.10086.cn/LLZZ.html?id="+numberS);
		}
	},
	
	showSelJLL : function(obj){
		var list = $("[name='LLJYJ']");//$(".gprs-package-item");
		$.each(list, function (i, item) {
			$(item).removeClass("gprs-package-selected");
			if (item == obj){
				var ff = $(item).find(".gprs-cate").text();
				$("#selGPRS4G").val(ff);
				$("#selGPRS4G2").attr("href","http://service.js.10086.cn/GPRS4G.html?id="+ff);
			}
		});
		$(obj).addClass("gprs-package-selected");
	},
	showGPRSDJB : function(obj){
		var list = $("[name='LLJYB']");
		$.each(list, function (i, item) {
			$(item).removeClass("gprs-package-selected");
		});
		$(obj).addClass("gprs-package-selected");
		var vall = $(obj).attr("llVal");
		$("#addGPRSDJB").attr("href","http://service.js.10086.cn/GPRSDJB.html?id="+vall);
	},
	showMidPrice : function(){// 以前的，现在不用
		var $cate01SelectItem = $(".gprs-other-cate01 .select-item"),
            $cate01Price = $(".gprs-other-cate01 .gprs-month-price"),
            $cate02SelectItem = $(".gprs-other-cate02 .select-item"),
            $cate02Price = $(".gprs-other-cate02 .gprs-month-price"); 
		var jyb30 = $("#jyb30");
		var jyb70 = $("#jyb70");
		var jyb100 = $("#jyb100");
	    var jybjg = $("#jybjg"); 
        gprsSelectFn($cate01SelectItem,$cate01Price,"select-item-current");
        //夜猫子：随意玩
    	gprsSelectFn($cate02SelectItem,$cate02Price,"select-item-current");
    	gprsSelectFn(jyb30,jybjg,"select-item-current");
    	gprsSelectFn(jyb70,jybjg,"select-item-current");
    	gprsSelectFn(jyb100,jybjg,"select-item-current");
    	function gprsSelectFn(a,b,sClass){
            a.bind("click",function(){
                var index = a.index($(this));
                var recharge = "0";
                $(this).addClass(sClass).siblings().removeClass(sClass);
                if(b == $cate02Price){
                	if("1G" == $(this).html()){
	                	recharge = "5";
	                }else if("3G" == $(this).html()){
	                	recharge = "10";
	                }
	                b.html(recharge);
                }else if(b == jybjg){
                	if("30M" == $(this).html()){
	                	recharge = "5";
	                }else if("70M" == $(this).html()){
	                	recharge = "10";
	                }else{
	                	recharge = "10";
	                }
	                b.html(recharge);
                }else{
	                recharge = llyhFloorComponent2014New.privilegeMap.get($(this).html());
	                if("更多" == $(this).html()){
	                	$("#gprsOtherPrice").html("&nbsp;");
	                }else{
						$("#gprsOtherPrice").html("￥<em class=\"gprs-month-price\">"+recharge+"</em>元/月");
	                	$("#gprsOtherPrice").show();
	                }
                }
            })
    	}
    	var $appItem = $(".gprs-other-app .app-item");
        $appItem.hover(
            function(){$(this).addClass("app-item-hover")},
            function(){$(this).removeClass("app-item-hover")}
        )
	},
	
	sendMsgByParam : function(bizName){
//		$.busiReq({
//            data : {
//            	"reqUrl" : "compObshFloorLL",
//                "busiNum" : "ZXRW_LYQG",
//                "methed" : "sendMsgByParam",
//                "bizName" : bizName
//            },
//            success : function(result){
//                data = eval("(" + result + ")");
//                if(data && data.resultCode == "0"){
//                	alert("短信发送成功！");
//                } else {
////                	alert("短信发送失败！");
//                }
//            }
//        });
	},
	
	sendMsg:function(){
		var phoneNum = $("#friendPhone").val();
		if ('' == phoneNum){
			alert("请输入好友手机号码！");
			return;
		}
		if (llyhFloorComponent2014New.loginMobile == phoneNum){
			alert("请不要给自己发求助短信！");
			return;
		}
		$.busiReq({
			data :
			{
				'reqUrl'      : 'compObshFloorLl',
				'busiNum'    : 'home',
				'mothed'      : "sendMsg",
				'phoneMobile' : phoneNum
			},
			success : function(ret){
				var result = eval("(" + ret + ")");

				if(result && result.resultCode == "0"){
					alert("求助短信发送成功！");
				}
				if (result && result.logicCode=="999999") {
					alert("求助短信发送失败！");
				}
			}
		});
	},
	
	showRightPrice : function(){
		var $gprsPriceItem = $(".amount-item"),
            $actualRechargeVal = $(".recharge-pay-amount");

    	gprsSelectFn($gprsPriceItem,$actualRechargeVal,"amount-selected");
    	var param = "GPRSDJB_5Y";// TODO
    	function gprsSelectFn(a,b,sClass){
            a.bind("click",function(){
                var index = a.index($(this));
                var recharge = "¥<strong>0</strong>";
                $(this).addClass(sClass).siblings().removeClass(sClass);
                var notHund = "开通立即生效，月底自动关闭";
                var isHund = "只支持4G用户办理";
//                param = $(this).text();
                if("30M" == $(this).text()){
                	recharge = "¥<strong>5</strong>";
                	///$(".recharge-tips").html(notHund);
                	$("p[name='recharge-tips']").html(notHund);
                	param = "GPRSDJB_5Y"; 
                }else if("70M" == $(this).text()){
                	recharge = "¥<strong>10</strong>";
                	$("p[name='recharge-tips']").html(notHund);//$("#isTipsOf4g").html(notHund);
                	param = "GPRSDJB_10Y"; 
                }else if("100M" == $(this).text()){
                	recharge = "¥<strong>10</strong>";
                	$("p[name='recharge-tips']").html(isHund);//$("#isTipsOf4g").html(isHund);
                	param = "GPRS4G_DJB_10Y"; 
                }else if("150M" == $(this).text()){
                	recharge = "¥<strong>20</strong>";
                	$("p[name='recharge-tips']").html(notHund);
                	param = "GPRSDJB_20Y";
                }else{}
                b.html(recharge);
                $("#addScore").attr("href","http://service.js.10086.cn/GPRSDJB.html?id="+param);
                $("#before").attr("href","http://service.js.10086.cn/GPRSDJB.html?id="+param);
            })
    	}
	},
	
	 getFormatData : function(num){
	 	var str = "0M";
	 	if(num != 0){
		 	str = (num/1024).toFixed(2) + "M";
	 	}
	 	return str;
	 },
	//将流量从M转换为G
	 getFormatDataToG :function(objVal){
	 	var Str="0M";
	 	var floatVal=objVal/1024;
	 	if(floatVal>=1024){
	 		if(floatVal%1024!=0){
	 			var GBStr=(floatVal/1024).toFixed(4);
	 			Str=GBStr.split(".")[0]+"."+GBStr.split(".")[1].substring(0,2)+"G";
	 		}else{
	 			Str=(floatVal/1024)+"G";
	 		}
	 	}
	 	else{
	 			Str=floatVal.toFixed(2);
	 			if(Str.split(".")[1]=="00"){
	 				Str=Str.split(".")[0]+"M";
	 			}else{
	 				Str=Str+"M";
	 			}
	 			
	 	}
	 	return Str;
	 },
	 
	 getFormatGdata : function(num){
//		alert(num);
			 var str = "0M";
	 	if(num != 0){
//	 		if(num > (1024*1024)){
//	 			str = (num/1024/1024).toFixed(2) + "G";
//	 			if("00G" == str.substr(str.indexOf(".")+1)){
//			 		str = str.substr(0,str.indexOf(".")) + "G";
//			 	}
//	 		}
//	 		else
//	 		{
			 	str = (num/1024).toFixed(2) + "M";
			 	if("00M" == str.substr(str.indexOf(".")+1)){
			 		str = str.substr(0,str.indexOf(".")) + "M";
			 	}
//	 		}
	 	}
//	 	alert(str);
	 	return str;
	 },

	 getFormatGIntdata : function(num){
		 	var str = "0M";
		 	if(num != 0){
			 	str = (num/1024) + "M";
		 	}
		 	return str;
		 },
	getGprsNumPieClass : function(percent){//以前的同过换图片来显示流量百分比
			
	},
	showStatusDate : function(){// 以前的日期刻度
		var today = new Date();
		//当前日
		var now = today.getDate();
		//年
		var year = today.getFullYear();
		//当月（1月：0）
		var month = today.getMonth();
		var monarr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
			monarr[1] = "29";
		}
		//当月第一天8.1
		var monthFirstDay = (month+1) + ".1";
		//当月最后一天8.31
		var monthLastDay = (month+1) + "." + (monarr[month]);
		llyhFloorComponent2014New.monthMaxDay = monarr[month];
		//当月剩余天数
		var monthremainDay = monarr[month] - now;
		llyhFloorComponent2014New.remainDay = monthremainDay;
		$("#nowDay").html(monthFirstDay);
		$("#maxDay").html(monthLastDay);
//		$(".gprs-date-past").css("height",(90-monthremainDay*3)+"px");
//		$(".gprs-date-icon").css("top",(90-monthremainDay*3)+"px");
	},
	showFlooriMidArrow : function(){//以前的显示。图片左右动的
	},
	index_llyhFloor : function(innerListId){//以前的显示。图片左右动的
	}
});

var compObshFloorYhComponent = BmonPage.createComponent('compObshFloorYh');

$.extend(compObshFloorYhComponent,{
	id : 'compObshFloorYh',
	name : '首页优惠楼层',
	urlStart:'http://img01.js.10086.cn/obsh2014/floor/',
	urlStartMarket : 'http://img01.js.10086.cn/obsh2014/market/',
	urlItTargetStart : 'http://img01.js.10086.cn/obsh/images/touch/',
	isLogin : "1",
	init : function(result)
	{
		if(result&&result.resultCode==0){
			if(result.resultObj){
				compObshFloorYhComponent.isLogin = result.resultObj.isLogin;
				
				if(compObshFloorYhComponent.isLogin=="0"){
					//已登录 
					var isNeedToAdd = result.resultObj.isNeedToAdd;
					if(isNeedToAdd=="toAdd"){
						//需要请求营销案数据
						var blockOneList = result.resultObj.blockOneList;
						var bakBlockOneList= result.resultObj.bakBlockOneList;
						//请求营销案数据
						compObshFloorYhComponent.getMarketData(blockOneList,bakBlockOneList);
					}else{
						//不需要请求营销案数据
						//展示区块1 信息
						var blockOneList = result.resultObj.blockOneList;
						compObshFloorYhComponent.showFloorYhBlockOne(blockOneList);
					}
					
				}else{
					//未登录
					//展示区块1 信息
					var blockOneList = result.resultObj.blockOneList;
					compObshFloorYhComponent.showFloorYhBlockOne(blockOneList);
				}
				
				//展示全省活动（区块2） 
				var blockTwoList = result.resultObj.blockTwoList;
				compObshFloorYhComponent.showFloorYhBlockTwo(blockTwoList);
				//展示订阅信息（区块3）
				var blockThreeList = result.resultObj.blockThreeList;
				//compObshFloorYhComponent.showFloorYhBlockThree(blockThreeList);
				//compObshFloorYhComponent.floorOnsale();
			}else{
				//调用失败
				compObshFloorYhComponent.reRequestData();
			}
		}else{
			//调用失败
				compObshFloorYhComponent.reRequestData();
		}
		lazyLoad("compObshFloorYh");
	},
	
	/**
	 * 初始化请求数据失败
	 * 调用请求获取数据
	 */
	reRequestData : function () {
		$.busiReq({
			data :
			{
				"reqUrl"	: "compObshFloorYh"
			},
			success : function(data){
				var result = eval("(" + data + ")");
				if(result.resultCode== 0){
					if(result.resultObj.isLogin==0){
						//展示区块1 信息
						var blockOneList = result.resultObj.bakBlockOneList;
						compObshFloorYhComponent.showFloorYhBlockOne(blockOneList);
					}else{
						//展示区块1 信息
						var blockOneList = result.resultObj.blockOneList;
						compObshFloorYhComponent.showFloorYhBlockOne(blockOneList);
					}
					
					//展示全省活动（区块2） 
					var blockTwoList = result.resultObj.blockTwoList;
					compObshFloorYhComponent.showFloorYhBlockTwo(blockTwoList);
					//展示订阅信息（区块3）
					var blockThreeList = result.resultObj.blockThreeList;
					compObshFloorYhComponent.showFloorYhBlockThree(blockThreeList);
				}else{
					//alert("请求失败！");
				}
			}
		});
	},
	
	
	/**
	 * 偶数位页面渲染
	 */
	setOSHtml : function (currentRecord,name,url,desc,srcUrl) {
//		console.log("奇数"+currentRecord+"||"+name+"||"+url+"||"+desc+"||"+srcUrl);
		var sortNo = parseInt(currentRecord)+ 1;
		
		var yhHtml = "<div class='onsale-business-info'>";
		yhHtml +="<h3 class='onsale-business-tit'  id='title_blockone_"+sortNo+"'>"+name+"</h3>";
		yhHtml +="<p class='onsale-business-img'>";
		yhHtml +="<a href='"+url+"' id='href_blockone_"+sortNo+"' target='_blank'>";
		yhHtml +="<img id='img_blockone_"+sortNo+"' title='"+desc+"' src='"+srcUrl+"'  width='200' height='150' alt='优惠活动' class='data-img'/>";
		yhHtml +="</a>";
		yhHtml +="</p>";
		yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
		yhHtml +="</div>";
		yhHtml +="<div class='onsale-business-extra' data-show='onsale-business-default'>";
		yhHtml +="<b class='icon'></b>";
		yhHtml +="<h4 id='tail_blockone_"+sortNo+"'>"+name+"</h4>";
		yhHtml +="</div>";
		
//		console.log("第"+sortNo+"条数据:"+yhHtml);
		$("#FIRST_YH_"+sortNo).html(yhHtml);
	},
	/**
	 * 奇数位页面渲染
	 */
	setJSHtml : function (currentRecord,name,url,desc,srcUrl) {
		var sortNo = parseInt(currentRecord)+ 1;
//		console.log("偶数"+currentRecord+"||"+name+"||"+url+"||"+desc+"||"+srcUrl);
		var yhHtml = "<div class='onsale-business-extra' data-show='onsale-business-other'>";
		yhHtml +="<b class='icon'></b>";
		yhHtml +="<h4  id='tail_blockone_"+sortNo+"'>"+name+"</h4>";
		yhHtml +="</div>";
		
		yhHtml += "<div class='onsale-business-info'>";
		yhHtml +="<h3 class='onsale-business-tit' id='title_blockone_"+sortNo+"'></h3>";
		yhHtml +="<p class='onsale-business-img'>";
		yhHtml +="<a href='"+url+"' id='href_blockone_"+sortNo+"' target='_blank'>";
		yhHtml +="<img  id='img_blockone_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='优惠活动' class='data-img'/>";
		yhHtml +="</a>";
		yhHtml +="</p>";
		yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
		yhHtml +="</div>";
		
//		console.log("第"+sortNo+"条数据:"+yhHtml);
		$("#FIRST_YH_"+sortNo).html(yhHtml);
	},
	/**
	 * 请求营销案数据
	 */
	getMarketData : function (blockOneList,bakBlockOneList){
		$.ajax({
			url	: "./market/queryEnableNotBroadbandMarketForCommon.do?isRecommend=1",
			type: "POST",
			success : function(data){
				if(data.success){
					//调用成功
					//原先的记录数
					var existRowCount = blockOneList.length;
					var existList	  = blockOneList;
					//获取的营销案记录数
					var addRowCount   = data.result.length;
					var addList		  = data.result;
					//备份的记录数
					var bakRowCount   = bakBlockOneList.length;
					var bakList		  = bakBlockOneList;
					/*渲染页面*/
					//当前记录数标志
					var currentRecord = 0;
					//第一条是否被设置标志位
					var isFirstItem = false ;
					
					if(existRowCount==0){
						//不存在IT精确营销 和 地市营销 直接获取营销案数据
						for(var i=1;i<=addRowCount;i++){
//							console.log(i+i+i+i+i+i+i+i+i);
							var styleType = currentRecord%2!=0?0:1;
							if(currentRecord==0){
//								console.log("firstItem");
								isFirstItem = true;
								var leftHtml = "<a href='"+addList[i-1].url+"' id='href_blockone_1' target='_blank'>";
								leftHtml +="<img id='img_blockone_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+addList[i-1].bigImgUrl+"'  width='250' height='350' title='优惠活动' alt='优惠活动' class='data-img'/>";
								$("#THZQ-Left").html(leftHtml);
								currentRecord++;
							}else{
//								console.log(currentRecord);
								if(currentRecord<5){
									var name	=	addList[i-1].firstName;
									var url		=	addList[i-1].url;
									var desc	=	addList[i-1].activityComment;
									var srcUrl	=	addList[i-1].imgUrl;
									var completeSrcUrl = "";
									if(srcUrl.indexOf("js.10086.cn")!=(-1)){
										completeSrcUrl = srcUrl;
									}else{
										completeSrcUrl = compObshFloorYhComponent.urlStartMarket+srcUrl;
									}
									
									if(styleType==0){//奇数
										compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,completeSrcUrl);
									}else if(styleType==1){//偶数
										compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,completeSrcUrl);
									}
									currentRecord++;
								}
							}
						}
						
						//备用数据候补
						//判断需要候补的记录数
						var needToAddRowCount = 5-parseInt(currentRecord);
//						console.log("needToAddRowCount:"+needToAddRowCount);
						if(needToAddRowCount>0){
							for(var j=0;j<needToAddRowCount;j++){
								var styleType = currentRecord%2!=0?0:1;
								//从第二条开始补充
								var name	=	bakList[j].contentTitle;
								var url		=	bakList[j].contentUrl;
								var desc	=	bakList[j].contentDesc;
								var srcUrl	=	bakList[j].contentImg;
								var srcUrls	=	bakList[j].contentImgS;
								
								var completeSrcUrl = "";
								if(srcUrl.indexOf("js.10086.cn")!=(-1)){
									completeSrcUrl = srcUrl;
								}else{
									completeSrcUrl = compObshFloorYhComponent.urlStart+srcUrl;
								}
								
								if(isFirstItem){
									if(currentRecord<5){
										if(j==0)
										{
											if(srcUrls.indexOf("js.10086.cn")!=(-1)){
												completeSrcUrl = srcUrls;
											}else{
												completeSrcUrl = compObshFloorYhComponent.urlStart+srcUrls;
											}
										}
										
										//非第一条数据
										if(styleType==0){//奇数
											compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,completeSrcUrl);
										}else if(styleType==1){//偶数
											compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,completeSrcUrl);
										}
									
										currentRecord++;
									}
								}else{
									//从第一条数据补充
									compObshFloorYhComponent.showFloorYhBlockOne(bakList);
								}
							}
						}
						
					}else{
						//存在IT精确营销 和 地市营销 先渲染获取的数据页面 再补足 营销案数据
						for(var i=1;i<=existRowCount;i++){
							var row = blockOneList[i-1];
							var srcUrl = "";
							var sortNo = row.sortNum;
							var imgUrl = row.contentImg;
							var title  = row.contentTitle;
							var desc   = row.contentDesc;
							var busiUrl= row.contentUrl;
							var dataFrom = row.dataFrom;
							var webCode=row.webTransId;
							var yxaId=row.userSeq;
							
							if(imgUrl.indexOf("js.10086.cn")!=(-1)){
								srcUrl = imgUrl;
							}else{
								if(dataFrom=="2"){
									srcUrl = compObshFloorYhComponent.urlItTargetStart+imgUrl;
								}else if(dataFrom=="1"){
									srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
								}else if(dataFrom=="3"){
									srcUrl = imgUrl;
								}else{
									srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
								}
							}
							
							if(i==1){
								isFirstItem = true;
								var leftHtml = "<a title='"+title+"' href='"+busiUrl+"' id='href_blockone_1' target='_blank'>";
								leftHtml +="<img id='img_blockone_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='250' height='350' title='优惠活动' alt='优惠活动' class='data-img'/>";
								$("#THZQ-Left").html(leftHtml);
								
								if(dataFrom=="2"){
									//针对精确营销单击事件插码
									$("#href_blockone_1").click(function(){
									//-------------------------精确营销数据插码----------------------------//
									if (typeof(_tag)!="undefined"){
									_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
									};
									//-------------------------精确营销数据插码----------------------------//
									});
								}else if(dataFrom=="3"){
									//针对地市营销单击事件插码
									$("#href_blockone_1").click(function(){
									//-------------------------精确营销数据插码----------------------------//
									if (typeof(_tag)!="undefined"){
									_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
									};
									//-------------------------精确营销数据插码----------------------------//
								});
								}
								currentRecord++;
							}else{
								var styleType = currentRecord%2!=0?0:1;
								if(currentRecord<5){
									if(styleType==0){//奇数
										compObshFloorYhComponent.setOSHtml(currentRecord,title,busiUrl,desc,imgUrl);
									}else if(styleType==1){//偶数
										compObshFloorYhComponent.setJSHtml(currentRecord,title,busiUrl,desc,imgUrl);
									}
									currentRecord++;
								}
							}
						}
						
						//补足 营销案数据
						var needToAddRowCount = 5-parseInt(currentRecord);
						
						if(needToAddRowCount>0){
							//查看营销案数据
							var needToAddRowRecord = addRowCount>=needToAddRowCount?needToAddRowCount : addRowCount;
							
							//是否需要用备份数据
							var isNeedToUseBakList = addRowCount>=needToAddRowCount?false : true;
							
							for(var i=0;i<needToAddRowRecord;i++){
								var styleType = currentRecord%2!=0?0:1;
								if(currentRecord<5){
									var name	=	addList[i].firstName;
									var url		=	addList[i].url;
									var desc	=	addList[i].activityComment;
									var srcUrl	=	addList[i].imgUrl;
									var completeSrcUrl = "";
									if(srcUrl.indexOf("js.10086.cn")!=(-1)){
										completeSrcUrl = srcUrl;
									}else{
										completeSrcUrl = compObshFloorYhComponent.urlStartMarket+srcUrl;
									}
									
									if(styleType==0){//奇数
										compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,completeSrcUrl);
									}else if(styleType==1){//偶数
										compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,completeSrcUrl);
									}
									currentRecord++;
								}
							}
							//需要增加备份数据信息
							if(isNeedToUseBakList){
								var needToAddBakRowCount = 5-parseInt(currentRecord);
								
								if(needToAddBakRowCount>0){
									for(var j=0;j<=needToAddBakRowCount;j++){
										var styleType = currentRecord%2!=0?0:1;
										//从第二条开始补充
										var name	=	bakList[j].contentTitle;
										var url		=	bakList[j].contentUrl;
										var desc	=	bakList[j].contentDesc;
										var srcUrl	=	bakList[j].contentImg;
										var srcUrls	=	bakList[j].contentImgS;
										
										var completeSrcUrl = "";
										if(srcUrl.indexOf("js.10086.cn")!=(-1)){
											completeSrcUrl = srcUrl;
										}else{
											completeSrcUrl = compObshFloorYhComponent.urlStart+srcUrl;
										}
										
//										if(styleType==0){//奇数
//											compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,completeSrcUrl);
//										}else if(styleType==1){//偶数
//											compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,completeSrcUrl);
//										}
										if(currentRecord>0){
											if(j==0)
											{
												if(srcUrls.indexOf("js.10086.cn")!=(-1)){
													completeSrcUrl = srcUrls;
												}else{
													completeSrcUrl = compObshFloorYhComponent.urlStart+srcUrls;
												}
											}
										}
										if(currentRecord<5){
											//非第一条数据
//											if(styleType==0){//奇数
//												compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,srcUrl);
//											}else if(styleType==1){//偶数
//												compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,srcUrl);
//											}
											if(styleType==0){//奇数
												compObshFloorYhComponent.setOSHtml(currentRecord,name,url,desc,completeSrcUrl);
											}else if(styleType==1){//偶数
												compObshFloorYhComponent.setJSHtml(currentRecord,name,url,desc,completeSrcUrl);
											}
											currentRecord++;
										}
									}
								}
							}
						}
					}
					
				}else{
					//调用失败 
					compObshFloorYhComponent.showFloorYhBlockOne(bakBlockOneList);
				}
			}
		});
	},
	
	/**
	 * 展示区块1信息
	 */
	showFloorYhBlockOne : function (blockOneList){
		//处理区块1页面
		if (blockOneList && blockOneList.length) 
		{
			for(var i=0;i<blockOneList.length;i++){
				var row = blockOneList[i];
				var srcUrl = "";
				var sortNo = row.sortNum;
				var imgUrl = row.contentImg;
				var title  = row.contentTitle;
				var desc   = row.contentDesc;
				var busiUrl= row.contentUrl;
				var dataFrom = row.dataFrom;
				var webCode=row.webTransId;
				var yxaId=row.userSeq;
				//判断获取的图片是不是全路径
				if(imgUrl.indexOf("js.10086.cn")!=(-1)){
					srcUrl = imgUrl;
				}else{
					if(dataFrom=="2"){
						srcUrl = compObshFloorYhComponent.urlItTargetStart+imgUrl;
						busiUrl=busiUrl+"?yxaId="+yxaId+"&webtransId="+webCode;
						//-------------------------精确营销数据插码----------------------------//
						if (typeof(_tag)!="undefined"){
							_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
						};
						//-------------------------精确营销数据插码----------------------------//
					}else if(dataFrom=="1"){
						srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
					}else if(dataFrom=="3"){
						srcUrl = imgUrl;
						busiUrl=busiUrl+"?webtransId="+webCode;
						//-------------------------精确营销数据插码----------------------------//
						if (typeof(_tag)!="undefined"){
							_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
						};
						//-------------------------精确营销数据插码----------------------------//
					}else{
						srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
					}
				}
				//第一条数据是大图
				if(sortNo==1){
					var leftHtml = "<a title='"+title+"' href='"+busiUrl+"' id='href_blockone_1' target='_blank'>";
					leftHtml +="<img id='img_blockone_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='250' height='350' alt='' class='data-img'/>";
					$("#THZQ-Left").html(leftHtml);
					
					if(dataFrom=="2"){
						//针对精确营销单击事件插码
						$("#href_blockone_1").click(function(){
						//-------------------------精确营销数据插码----------------------------//
						if (typeof(_tag)!="undefined"){
						_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
						};
						//-------------------------精确营销数据插码----------------------------//
						});
					}else if(dataFrom=="3"){
						//针对地市营销单击事件插码
						$("#href_blockone_1").click(function(){
						//-------------------------精确营销数据插码----------------------------//
						if (typeof(_tag)!="undefined"){
						_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
						};
						//-------------------------精确营销数据插码----------------------------//
					});
					}
				}else if(sortNo==2||sortNo==4){
					
					var yhHtml = "<div class='onsale-business-info'>";
					yhHtml +="<h3 class='onsale-business-tit'  id='title_blockone_"+sortNo+"'>"+title+"</h3>";
					yhHtml +="<p class='onsale-business-img'>";
					yhHtml +="<a href='"+busiUrl+"' id='href_blockone_"+sortNo+"' target='_blank'>";
					yhHtml +="<img id='img_blockone_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
					yhHtml +="</a>";
					yhHtml +="</p>";
					yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
					yhHtml +="</div>";
					yhHtml +="<div class='onsale-business-extra' data-show='onsale-business-default'>";
					yhHtml +="<b class='icon'></b>";
					yhHtml +="<h4 id='tail_blockone_"+sortNo+"'>"+title+"</h4>";
					yhHtml +="</div>";
					
					$("#FIRST_YH_"+sortNo).html(yhHtml);
					
				}else if(sortNo==3||sortNo==5){
					var yhHtml = "<div class='onsale-business-extra' data-show='onsale-business-other'>";
					yhHtml +="<b class='icon'></b>";
					yhHtml +="<h4  id='tail_blockone_"+sortNo+"'>"+title+"</h4>";
					yhHtml +="</div>";
					
					yhHtml += "<div class='onsale-business-info'>";
					yhHtml +="<h3 class='onsale-business-tit' id='title_blockone_"+sortNo+"'></h3>";
					yhHtml +="<p class='onsale-business-img'>";
					yhHtml +="<a href='"+busiUrl+"' id='href_blockone_"+sortNo+"' target='_blank'>";
					yhHtml +="<img  id='img_blockone_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
					yhHtml +="</a>";
					yhHtml +="</p>";
					yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
					yhHtml +="</div>";
					$("#FIRST_YH_"+sortNo).html(yhHtml);
				}
			}
		}
	
	},
	
	/**
	 * 展示全省活动（区块2） 
	 * @param blockTwoList
	 */
	showFloorYhBlockTwo :  function (blockTwoList){
		if (blockTwoList && blockTwoList.length) 
		{
			for(var i=0;i<blockTwoList.length;i++){
				var row = blockTwoList[i];
				var srcUrl = "";
				var sortNo = row.sortNum;
				var imgUrl = row.contentImg;
				var title  = row.contentTitle;
				var desc   = row.contentDesc;
				var busiUrl= row.contentUrl;
				var dataFrom = row.dataFrom;
				//判断获取的图片是不是全路径
				if(imgUrl.indexOf("js.10086.cn")!=(-1)){
					srcUrl = imgUrl;
				}else{
					if(dataFrom=="1"){
						srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
					}else{
						srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
					}
				}
				
				if(sortNo==1){
					var yhHtml = "<div class='onsale-business-info'>";
					yhHtml +="<h3 class='onsale-business-tit'  id='title_blocktwo_"+sortNo+"'>"+title+"</h3>";
					yhHtml +="<p class='onsale-business-img'>";
					yhHtml +="<a href='"+busiUrl+"' id='href_blocktwo_"+sortNo+"' target='_blank'>";
					yhHtml +="<img id='img_blocktwo_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
					yhHtml +="</a>";
					yhHtml +="</p>";
					yhHtml +="<p class='onsale-business-slogan' id='desc_blocktwo_"+sortNo+"'>"+desc+"</p>";
					yhHtml +="</div>";
					yhHtml +="<div class='onsale-business-extra' data-show='onsale-business-default'>";
					yhHtml +="<b class='icon'></b>";
					yhHtml +="<h4 id='tail_blocktwo_"+sortNo+"'>"+title+"</h4>";
					yhHtml +="</div>";
					
					$("#FIRST_YHQS_"+sortNo).html(yhHtml);
				}
				else if(sortNo==2){
					var yhHtml = "<div class='onsale-business-extra' data-show='onsale-business-other'>";
					yhHtml +="<b class='icon'></b>";
					yhHtml +="<h4  id='tail_blocktwo_"+sortNo+"'>"+title+"</h4>";
					yhHtml +="</div>";
					
					yhHtml += "<div class='onsale-business-info'>";
					yhHtml +="<h3 class='onsale-business-tit' id='title_blocktwo_"+sortNo+"'></h3>";
					yhHtml +="<p class='onsale-business-img'>";
					yhHtml +="<a href='"+busiUrl+"' id='href_blocktwo_"+sortNo+"' target='_blank'>";
					yhHtml +="<img  id='img_blocktwo_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
					yhHtml +="</a>";
					yhHtml +="</p>";
					yhHtml +="<p class='onsale-business-slogan' id='desc_blocktwo_"+sortNo+"'>"+desc+"</p>";
					yhHtml +="</div>";
					$("#FIRST_YHQS_"+sortNo).html(yhHtml);
				}
			}
		}
	},
	
	/**
	 * 展示订阅信息（区块3）
	 * @param result
	 */
	showFloorYhBlockThree : function (blockThreeList){

		if (blockThreeList && blockThreeList.length) 
		{
			for(var i=0;i<blockThreeList.length;i++){
				var row = blockThreeList[i];
				var srcUrl = "";
				var sortNo = row.sortNum;
				var imgUrl = row.contentImg;
				var title  = row.contentTitle;
				var _busiNum= row.busiNum;
				var dataFrom = row.dataFrom;
				var hasOrder = row.isHasOrder;
				//判断获取的图片是不是全路径
				if(imgUrl.indexOf("js.10086.cn")!=(-1)){
					srcUrl = imgUrl;
				}else{
					if(dataFrom=="1"){
						srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
					}else{
						srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
					}
				}
				
				var yhHtml = "";
				yhHtml +="<h4 class='onsale-order-name'>";
				yhHtml +="<span class='link-icon'>";
				yhHtml +="<span class='close'>-</span>";
				yhHtml +="<span class='open'>+</span>";
				yhHtml +="<b class='icon'></b>";
				yhHtml +="</span>";
				yhHtml +="<span class='link-name' id='title_blockthree_1'>"+title+"</span>";
				yhHtml +="</h4>";
				yhHtml +="<div class='onsale-order-info'>";
				yhHtml +="<p class='onsale-order-img'>";
				yhHtml +="<img id='img_blockthree_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='180' height='180' alt=''  class='data-img'/>";
				yhHtml +="</p>";
				
				if(compObshFloorYhComponent.isLogin=="0"){
					if(hasOrder==1){
						yhHtml +="<p class='onsale-order-action'>";
						yhHtml +="<a href='javascript:;' class='onsale-action-btn onsale-cancel-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
					}else{
						yhHtml +="<p class='onsale-order-action'>";
						yhHtml +="<a href='javascript:;' class='onsale-action-btn onsale-order-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
					}
					
				}else{
					redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
					
					yhHtml +="<p class='onsale-order-action'>";
					yhHtml +="<a href='./login.html?url="+redictUrl+"' class='onsale-action-btn  onsale-order-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
				}
				
				yhHtml +="</p>";
				yhHtml +="</div>";
				$("#FIRST_YHYC_"+sortNo).html(yhHtml);
				
			}
		}
	
	},
	
//	—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	//页面
	showFloorYh : function (result) {
		compObshFloorYhComponent.isLogin = result.resultObj.isLogin;
		//区块1数据
		if(result.resultObj.blockOneList&&result.resultObj.blockOneList.length>0){
			compObshFloorYhComponent.showPageContent(result.resultObj.blockOneList,"0201",compObshFloorYhComponent.isLogin);
		}
		//区块2数据
		if(result.resultObj.blockTwoList&&result.resultObj.blockTwoList.length>0){
			compObshFloorYhComponent.showPageContent(result.resultObj.blockTwoList,"0202",compObshFloorYhComponent.isLogin);
		}
		//区块3数据
		if(result.resultObj.blockThreeList&&result.resultObj.blockThreeList.length>0){
			compObshFloorYhComponent.showPageContent(result.resultObj.blockThreeList,"0203",compObshFloorYhComponent.isLogin);
		}
		//lazyLoad();
	},
	//展示页面
	showPageContent : function (listData,blockNum,isLogin){
		//区块1数据
		if(blockNum=="0201"){
			//处理区块1页面
			if (listData && listData.length) 
			{
				$.each(listData, function (i, item){
					var srcUrl = "";
					var sortNo = item.sortNum;
					var imgUrl = item.contentImg;
					var title  = item.contentTitle;
					var desc   = item.contentDesc;
					var busiUrl= item.contentUrl;
					var dataFrom = item.dataFrom;
					var webCode=item.webTransId;
					var yxaId=item.userSeq;
					//判断获取的图片是不是全路径
					if(imgUrl.indexOf("js.10086.cn")!=(-1)){
						srcUrl = imgUrl;
					}else{
						if(dataFrom=="2"){
							srcUrl = compObshFloorYhComponent.urlItTargetStart+imgUrl;
							busiUrl=busiUrl+"?yxaId="+yxaId+"&webtransId="+webCode;
							//-------------------------精确营销数据插码----------------------------//
							if (typeof(_tag)!="undefined"){
								_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
							};
							//-------------------------精确营销数据插码----------------------------//
						}else if(dataFrom=="1"){
							srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
						}else if(dataFrom=="3"){
							srcUrl = imgUrl;
							busiUrl=busiUrl+"?webtransId="+webCode;
							//-------------------------精确营销数据插码----------------------------//
							if (typeof(_tag)!="undefined"){
								_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
							};
							//-------------------------精确营销数据插码----------------------------//
						}else{
							srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
						}
					}
					//第一条数据是大图
					if(sortNo==1){
						//图片
//						$("#img_blockone_1").attr("src",srcUrl);
						//链接
//						$("#href_blockone_1").attr("href",busiUrl);
						var leftHtml = "<a title='"+title+"' href='"+busiUrl+"' id='href_blockone_1' target='_blank'>";
						leftHtml +="<img id='img_blockone_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='250' height='350' alt='' class='data-img'/>";
						$("#THZQ-Left").html(leftHtml);
						
						if(dataFrom=="2"){
							//针对精确营销单击事件插码
							$("#href_blockone_1").click(function(){
							//-------------------------精确营销数据插码----------------------------//
							if (typeof(_tag)!="undefined"){
							_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
							};
							//-------------------------精确营销数据插码----------------------------//
							});
						}else if(dataFrom=="3"){
							//针对地市营销单击事件插码
							$("#href_blockone_1").click(function(){
							//-------------------------精确营销数据插码----------------------------//
							if (typeof(_tag)!="undefined"){
							_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',CompObshHeaderComponent.loginUserInfo.userCity,'WT.mobile',CompObshHeaderComponent.loginUserInfo.userMobile);
							};
							//-------------------------精确营销数据插码----------------------------//
						});
						}
					}else if(sortNo==2||sortNo==4){
//						//标题
//						$("#title_blockone_"+sortNo).html(title);
//						//图片
//						$("#img_blockone_"+sortNo).attr("src",srcUrl);
//						//链接
//						$("#href_blockone_"+sortNo).attr("href",busiUrl);
//						//说明
//						$("#desc_blockone_"+sortNo).html(desc);
//						$("#desc_blockone_"+sortNo).attr("title",desc);
//						//尾部切换
//						$("#tail_blockone_"+sortNo).html(title);
						
						var yhHtml = "<div class='onsale-business-info'>";
						yhHtml +="<h3 class='onsale-business-tit'  id='title_blockone_"+sortNo+"'>"+title+"</h3>";
						yhHtml +="<p class='onsale-business-img'>";
						yhHtml +="<a href='"+busiUrl+"' id='href_blockone_"+sortNo+"' target='_blank'>";
						yhHtml +="<img id='img_blockone_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
						yhHtml +="</a>";
						yhHtml +="</p>";
						yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
						yhHtml +="</div>";
						yhHtml +="<div class='onsale-business-extra' data-show='onsale-business-default'>";
						yhHtml +="<b class='icon'></b>";
						yhHtml +="<h4 id='tail_blockone_"+sortNo+"'>"+title+"</h4>";
						yhHtml +="</div>";
						
						$("#FIRST_YH_"+sortNo).html(yhHtml);
						
					}else if(sortNo==3||sortNo==5){
						var yhHtml = "<div class='onsale-business-extra' data-show='onsale-business-other'>";
						yhHtml +="<b class='icon'></b>";
						yhHtml +="<h4  id='tail_blockone_"+sortNo+"'>"+title+"</h4>";
						yhHtml +="</div>";
						
						yhHtml += "<div class='onsale-business-info'>";
						yhHtml +="<h3 class='onsale-business-tit' id='title_blockone_"+sortNo+"'>"+title+"</h3>";
						yhHtml +="<p class='onsale-business-img'>";
						yhHtml +="<a href='"+busiUrl+"' id='href_blockone_"+sortNo+"' target='_blank'>";
						yhHtml +="<img  id='img_blockone_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
						yhHtml +="</a>";
						yhHtml +="</p>";
						yhHtml +="<p class='onsale-business-slogan' id='desc_blockone_"+sortNo+"'>"+desc+"</p>";
						yhHtml +="</div>";
						$("#FIRST_YH_"+sortNo).html(yhHtml);
					}
				});
			}
		}
		//区块2数据
		if(blockNum=="0202"){
			if (listData && listData.length) 
			{
				$.each(listData, function (i, item){
					var srcUrl = "";
					var sortNo = item.sortNum;
					var imgUrl = item.contentImg;
					var title  = item.contentTitle;
					var desc   = item.contentDesc;
					var busiUrl= item.contentUrl;
					var dataFrom = item.dataFrom;
					//判断获取的图片是不是全路径
					if(imgUrl.indexOf("js.10086.cn")!=(-1)){
						srcUrl = imgUrl;
					}else{
						if(dataFrom=="1"){
							srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
						}else{
							srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
						}
					}
					
					if(sortNo==1){
						var yhHtml = "<div class='onsale-business-info'>";
						yhHtml +="<h3 class='onsale-business-tit'  id='title_blocktwo_"+sortNo+"'>"+title+"</h3>";
						yhHtml +="<p class='onsale-business-img'>";
						yhHtml +="<a href='"+busiUrl+"' id='href_blocktwo_"+sortNo+"' target='_blank'>";
						yhHtml +="<img id='img_blocktwo_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
						yhHtml +="</a>";
						yhHtml +="</p>";
						yhHtml +="<p class='onsale-business-slogan' id='desc_blocktwo_"+sortNo+"'>"+desc+"</p>";
						yhHtml +="</div>";
						yhHtml +="<div class='onsale-business-extra' data-show='onsale-business-default'>";
						yhHtml +="<b class='icon'></b>";
						yhHtml +="<h4 id='tail_blocktwo_"+sortNo+"'>"+title+"</h4>";
						yhHtml +="</div>";
						
						$("#FIRST_YHQS_"+sortNo).html(yhHtml);
					}
					else if(sortNo==2){
						var yhHtml = "<div class='onsale-business-extra' data-show='onsale-business-other'>";
						yhHtml +="<b class='icon'></b>";
						yhHtml +="<h4  id='tail_blocktwo_"+sortNo+"'>"+title+"</h4>";
						yhHtml +="</div>";
						
						yhHtml += "<div class='onsale-business-info'>";
						yhHtml +="<h3 class='onsale-business-tit' id='title_blocktwo_"+sortNo+"'>"+title+"</h3>";
						yhHtml +="<p class='onsale-business-img'>";
						yhHtml +="<a href='"+busiUrl+"' id='href_blocktwo_"+sortNo+"' target='_blank'>";
						yhHtml +="<img  id='img_blocktwo_"+sortNo+"' title='"+desc+"' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='200' height='150' alt='' class='data-img'/>";
						yhHtml +="</a>";
						yhHtml +="</p>";
						yhHtml +="<p class='onsale-business-slogan' id='desc_blocktwo_"+sortNo+"'>"+desc+"</p>";
						yhHtml +="</div>";
						$("#FIRST_YHQS_"+sortNo).html(yhHtml);
					}
//					//标题
//					$("#title_blocktwo_"+sortNo).html(title);
//					//图片
//					$("#img_blocktwo_"+sortNo).attr("src",srcUrl);
//					//链接
//					$("#href_blocktwo_"+sortNo).attr("href",busiUrl);
//					//说明
//					$("#desc_blocktwo_"+sortNo).html(desc);
//					$("#desc_blocktwo_"+sortNo).attr("title",desc);
//					//尾部切换
//					$("#tail_blocktwo_"+sortNo).html(title);
				});
			}
		}
		//区块3数据
		if(blockNum=="0203"){
			if (listData && listData.length) 
			{
				$.each(listData, function (i, item){
					var srcUrl = "";
					var sortNo = item.sortNum;
					var imgUrl = item.contentImg;
					var title  = item.contentTitle;
					var _busiNum= item.busiNum;
					var dataFrom = item.dataFrom;
					var hasOrder = item.isHasOrder;
					//判断获取的图片是不是全路径
					if(imgUrl.indexOf("js.10086.cn")!=(-1)){
						srcUrl = imgUrl;
					}else{
						if(dataFrom=="1"){
							srcUrl = compObshFloorYhComponent.urlStartMarket+imgUrl;
						}else{
							srcUrl = compObshFloorYhComponent.urlStart+imgUrl;
						}
					}
					
					var yhHtml = "";
					yhHtml +="<h4 class='onsale-order-name'>";
					yhHtml +="<span class='link-icon'>";
					yhHtml +="<span class='close'>-</span>";
					yhHtml +="<span class='open'>+</span>";
					yhHtml +="<b class='icon'></b>";
					yhHtml +="</span>";
					yhHtml +="<span class='link-name' id='title_blockthree_1'>"+title+"</span>";
					yhHtml +="</h4>";
					yhHtml +="<div class='onsale-order-info'>";
					yhHtml +="<p class='onsale-order-img'>";
					yhHtml +="<img id='img_blockthree_1' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif' data-src='"+srcUrl+"'  width='180' height='180' alt=''  class='data-img'/>";
					yhHtml +="</p>";
					
//					yhHtml +="<p class='onsale-order-action'>";
//					yhHtml +="<a href='javascript:;' class='onsale-action-btn' id='btn_blockthree_1'  onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
					
					if(compObshFloorYhComponent.isLogin=="0"){
						if(hasOrder==1){
							yhHtml +="<p class='onsale-order-action'>";
							yhHtml +="<a href='javascript:;' class='onsale-action-btn onsale-cancel-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
						}else{
							yhHtml +="<p class='onsale-order-action'>";
							yhHtml +="<a href='javascript:;' class='onsale-action-btn onsale-order-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
						}
						
					}else{
						redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
						
						yhHtml +="<p class='onsale-order-action'>";
						yhHtml +="<a href='./login.html?url="+redictUrl+"' class='onsale-action-btn  onsale-order-btn' id='btn_blockthree_1' busiNum='"+_busiNum+"' onclick='compObshFloorYhComponent.dealOrderAction(this)'></a>";
					}
					yhHtml +="</p>";
					yhHtml +="</div>";
//					$("#FIRST_YHYC_"+sortNo).html(yhHtml);
					
//					//标题
//					$("#title_blockthree_"+sortNo).html(title);
//					//图片
//					$("#img_blockthree_"+sortNo).attr("src",srcUrl);
////					$("#img_blockthree_"+sortNo).attr("data-src",srcUrl);
//					
//					//设置按钮信息
//					if(compObshFloorYhComponent.isLogin=="0"){
////						$("#btn_blockthree_"+sortNo).attr("onclick","compObshFloorYhComponent.dealOrderAction(this);");
//						$("#btn_blockthree_"+sortNo).attr("busiNum",_busiNum);
//						if(hasOrder==1){
////							$("#btn_blockthree_"+sortNo).addClass("onsale-cancel-btn");
//							
//							$("#btn_blockthree_"+sortNo).attr("class","onsale-action-btn onsale-cancel-btn");
//						}else{
////							$("#btn_blockthree_"+sortNo).addClass("onsale-order-btn");
//							
//							$("#btn_blockthree_"+sortNo).attr("class","onsale-action-btn onsale-order-btn");
//						}
//					}else{
////						$("#btn_blockthree_"+sortNo).addClass("onsale-order-btn");
//						$("#btn_blockthree_"+sortNo).attr("class","onsale-action-btn onsale-order-btn");
//						
//						redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
//						$("#btn_blockthree_"+sortNo).attr("href","./login.html?url="+redictUrl);
//					}
				});
			}
		}
	},
	
	//处理订单信息
	dealOrderAction : function (obj){
		//判断是否登录
		if(compObshFloorYhComponent.isLogin=="1"){
			var redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
			window.open("./login.html?url="+redictUrl);
		}else{
			var _busiNum = $(obj).attr("busiNum");
			$.busiReq({
				data :
				{
					"reqUrl"	: "discountSubscribe",
					"orderBusi" 	:  _busiNum
				},
				success : function(data){
					var result = eval("(" + data + ")");
					if(result.resultCode== 0){
						if(result.resultObj.isOverTime=="1"){
							alert("您还未登录，请先登录！");
//							$("#orderDiv_yh").show();
						}else{
							if(result.resultObj.isExist=="1"){
								//更改样式
								$(obj).removeClass("onsale-cancel-btn");
								$(obj).addClass("onsale-order-btn");
								$("#orderDiv_yh").show();
								$("#orderDiv_yh_cg").hide();
								$("#orderDiv_yh_sb").hide();
								$("#orderDiv_yh_tdcg").show();
							}else{
								//更改样式
								$(obj).removeClass("onsale-order-btn");
								$(obj).addClass("onsale-cancel-btn");
								$("#orderDiv_yh").show();
								$("#orderDiv_yh_cg").show();
								$("#orderDiv_yh_sb").hide();
								$("#orderDiv_yh_tdcg").hide();
							}
						}
					}else{
						$("#orderDiv_yh").show();
						$("#fail_orderDiv_yh").show();
						$("#orderDiv_yh_cg").hide();
						$("#orderDiv_yh_sb").show();
						$("#orderDiv_yh_tdcg").hide();
					}
				}
			});
		}
	},
	
	closeDialog : function (){
		$("#orderDiv_yh").hide();
	},
	floorOnsale : function(){
		var $onsaleBusinssExtra = $(".onsale-business-col .onsale-business-extra");
		$onsaleBusinssExtra.click(function()
				{alert("nihao");
					 if($(this).attr("data-show") === "onsale-business-other" ){
		                 $(this).parents(".onsale-business-col").find(".onsale-business-other").animate({
		                     "top" : "-110px"
		                 });   
		             }
		             else{
		                 $(this).parents(".onsale-business-col").find(".onsale-business-other").animate({
		                     "top" : "240px"
		                 }); 
		             }
					
			
			
				});

	
//        var $onsaleOrderName = $(".onsale-order-item .onsale-order-name");
//        $onsaleOrderName.bind("click",function(){
//            if(!$(this).parent().hasClass("onsale-order-current")){
//            	var $dataImg = $(this).parent().find($(".onsale-order-img .data-img"));
//                $(this).parent().addClass("onsale-order-current").siblings().removeClass("onsale-order-current").find(".onsale-order-info").hide();
//                $(this).parent().find(".onsale-order-info").hide().slideDown();
//                lazyImgShow($dataImg);
//            }
//            else{
//                return;
//            }
//        })
        function lazyImgShow(ele){
			if(ele.attr("src") !== ele.attr("data-src")){
				ele.attr("src",ele.attr("data-src"));
				ele.animate({"opacity":1,"filter":"alpha(opacity=100)"},1000);
			}
		}
	}
});

var floorMobileSaleComponent = BmonPage.createComponent('compObshFloorGj');
$.extend(floorMobileSaleComponent,{
	id : 'compObshFloorGj',
	name : '首页终端楼层购机组件',
	hdjx : null,
	kjdh : null,
	xsqg : null,
	g3yhg : null,
	ztyxa : null,
	ztlj : null,
	tjhd : null,
	xjzx : null,
	gjsf : null,
	jxth : null,
	leftV: null,
	xjzxPageSize : 10,
	xjzxPageNum : 0,
	jxthPageSize : 8,
	jxthPageNum : 0,
	gjsfPageSize : 10,
	gjsfPageNum : 0,
	isAllXjzx : 0,
	init : function(result){
		//登录的情况
		if (result.resultObj.isLoginSign == 1) {
			//$("#mobileMall .mainLeft-promotion").show();
		}
		floorMobileSaleComponent.initData(result);
		floorMobileSaleComponent.showMobileSale();
	},

	showMobileSale : function () {
		// 左侧的显示
		floorMobileSaleComponent.showLeft();
		//中间的三个手机展示 TODO 先注调，等接口
		floorMobileSaleComponent.showZtlj();
		
//		//限时抢购
//		floorMobileSaleComponent.showXsqg();
//		//G3优惠
//		floorMobileSaleComponent.showG3yhg();
//		//没有值
//		floorMobileSaleComponent.showZtyxa();
//		//推荐活动(后边的三个图片)
		floorMobileSaleComponent.showTjhd();
		
//		//活动精选（上边的一栏  -- 手机大日历，天天有特价！）
		floorMobileSaleComponent.showHdjx(); // 有用
//		//显示右上角的手机分类（老人机   儿童机）
		floorMobileSaleComponent.showKjdh();// 有用
//		//没有值，没有用
//		floorMobileSaleComponent.showXjzx();
		//floorMobileSaleComponent.showJxth();
		//this.showGjsf();
		lazyLoad("compObshFloorGj");
	},
 
	/**
	 * 限制字符串长度(按半角计算)，超出的以“...”表示
	 * @param {Object} word
	 * @param {Object} len
	 */
	showTitle : function(word, len)
	{
	    if (word !== undefined && word !== null && (typeof word == "string")){
	        var toLong = '';
	        while (this.getStringLen(word) > len){
	            word = word.substr(0, word.length - 2);
	            toLong = '…';
	        }
	        word += toLong;
	    }else{
	        word = "";
	    }
	    return word;
	},

	//返回字符串长度 双字节的占两个单位长度
	getStringLen : function(content){
	    return content.replace(/[^\x00-\xff]/g, "**").length;
	},

	netxPageMobileSa : function (d) {
		var visableDiv = $("#shop_body").find("div[id^='shop_']");
		var thisDiv = "";
		for (var i = 0;i < visableDiv.length; i++) {
			if (visableDiv[i].style.display=="block") {
				thisDiv = visableDiv[i].id;
			}
		}
		if ("shop_saler" == thisDiv) {
			if ("right" == d) {
				if (1 == floorMobileSaleComponent.isAllXjzx) {
					$.busiReq({
						data : {
							"reqUrl" : "mobileSale",
	                		"busiNum" : "mobileSale",
							"methed" : "initAllXjzx"
						},
						success : function(data){
							var result = eval("(" + data + ")");
							if(result && result.resultCode == '0'){
								var objRet = result.resultObj;
								floorMobileSaleComponent.xjzx = objRet;
								floorMobileSaleComponent.xjzxPageNum = 1;
								floorMobileSaleComponent.isAllXjzx = 0;
								floorMobileSaleComponent.showXjzx();
							} else {
								$("#shop_saler").html("系统忙，请稍后再试");
							}
						}
					});
				} else {
					var pageSize = floorMobileSaleComponent.xjzxPageSize;
					var xjzxInfo = floorMobileSaleComponent.xjzx;
					var pageCount = xjzxInfo.length/pageSize;
					var pc = pageCount.toString();
					if (pc.indexOf(".") != -1) {
						var arr = pc.split(".");
						var temp = arr[0].toString();
						pageCount = parseInt(temp) + 1;
					}
					var pkgPageNum = floorMobileSaleComponent.xjzxPageNum+1;
					if (pkgPageNum < pageCount) {
						floorMobileSaleComponent.xjzxPageNum = pkgPageNum;
						floorMobileSaleComponent.showXjzx();
					}
				}
			} else {
				var pkgPageNum = floorMobileSaleComponent.xjzxPageNum-1;
				if (pkgPageNum >= 0) {
					floorMobileSaleComponent.xjzxPageNum = pkgPageNum;
					floorMobileSaleComponent.showXjzx();
				}
			}
		}
		if ("YHGJ-rmhd" == thisDiv) {
			if ("right" == d) {
				var pageSize = floorMobileSaleComponent.jxthPageSize;
				var jxthInfo = floorMobileSaleComponent.jxth;
				var pageCount = jxthInfo.length/pageSize;
				var pc = pageCount.toString();
				if (pc.indexOf(".") != -1) {
					var arr = pc.split(".");
					var temp = arr[0].toString();
					pageCount = parseInt(temp) + 1;

				}
				var pkgPageNum = floorMobileSaleComponent.jxthPageNum+1;
				if (pkgPageNum < pageCount) {
					floorMobileSaleComponent.jxthPageNum = pkgPageNum;
					floorMobileSaleComponent.showJxth();
				}
			} else {
				var pkgPageNum = floorMobileSaleComponent.jxthPageNum-1;
				if (pkgPageNum >= 0) {
					floorMobileSaleComponent.jxthPageNum = pkgPageNum;
					floorMobileSaleComponent.showJxth();
				}
			}
		}

		if ("shop_mobileMo" == thisDiv) {
			if ("right" == d) {
				var pageSize = floorMobileSaleComponent.gjsfPageSize;
				var gjsfInfo = floorMobileSaleComponent.gjsf;
				var pageCount = gjsfInfo.length/pageSize;
				var pc = pageCount.toString();
				if (pc.indexOf(".") != -1) {
					var arr = pc.split(".");
					var temp = arr[0].toString();
					pageCount = parseInt(temp) + 1;

				}
				var pkgPageNum = floorMobileSaleComponent.gjsfPageNum+1;
				if (pkgPageNum < pageCount) {
					floorMobileSaleComponent.gjsfPageNum = pkgPageNum;
					floorMobileSaleComponent.showGjsf();
				}
			} else {
				var pkgPageNum = floorMobileSaleComponent.gjsfPageNum-1;
				if (pkgPageNum >= 0) {
					floorMobileSaleComponent.gjsfPageNum = pkgPageNum;
					floorMobileSaleComponent.showGjsf();
				}
			}
		}
		lazyloadPageOption($("#mobileShop img"));
	},

	 rmjx_qh : function (d){
	 	lazyloadPageOption($("#ztlj img"));
	    var rmjxItem = $("#zbList .mainArea-body-list");
	    var rmjxItemNow = rmjxItem.index(rmjxItem.filter(":visible"));
	    var rmjxItemSize = rmjxItem.size();
        var rmjxItemNext = function(){
		  if(d=="right"){
			if(rmjxItemNow+1>=rmjxItemSize){return(0);}
			else{return(rmjxItemNow+1);}
		  } else {
			if(rmjxItemNow==0){return(rmjxItemSize-1);}
			else{return(rmjxItemNow-1);}
		  }
	    }
	    rmjxItem.hide().eq(rmjxItemNext()).show();
	},

	showGjsf : function () {
		var pageNum = floorMobileSaleComponent.gjsfPageNum;
		var pageSize = floorMobileSaleComponent.gjsfPageSize;
		var gjsf_html = "<ul class='clearfix'>";
		var gjsfInfo = floorMobileSaleComponent.gjsf;
		var begin =	pageNum*pageSize;
		var end = begin + pageSize;
		if (null != gjsfInfo) {
			if (gjsfInfo.length>0) {
				if (end > gjsfInfo.length) {
					end = gjsfInfo.length;
				}
				for (var i = begin; i < end; i++) {
					var desc = gjsfInfo[i].mobileDesc;
					var name = gjsfInfo[i].mobileName;
					gjsf_html += "<li><div class='hotCell-image' id=\"YHGJ-gjsf-image-"+(i+1)+"\"><a target='blank' href='"+gjsfInfo[i].linkUrl+"' onclick=\"BmonPage.homeClickLog('1F_9M','"+gjsfInfo[i].mobileId+"');return true;\"><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" page-lazy-src=\"" + gjsfInfo[i].imageUrl + "\"></a></div>"+
							"<div class='hotCell-info' id=\"YHGJ-gjsf-info-"+(i+1)+"\"><p><a style='color:#525252' target='blank' href='"+gjsfInfo[i].linkUrl+"' onclick=\"BmonPage.homeClickLog('1F_9M','"+gjsfInfo[i].mobileId+"');return true;\"><font style='font-weight:bold;'>"+name+"</font></p><p title=\""+desc+"\">"+this.showTitle(desc,22)+"</p></a><p class='font-red'><span>赠</span><strong style='font-size:14px;'>￥"+gjsfInfo[i].precallprice.substring(0,gjsfInfo[i].precallprice.indexOf('.'))+"</strong></p></div>"+
								"<div class='hotCell-price' id=\"YHGJ-gjsf-price-"+(i+1)+"\"><p class='font-red'><small>购机款</small><span>￥</span><b>"+gjsfInfo[i].mobilePrice.substring(0,gjsfInfo[i].mobilePrice.indexOf('.'))+"</b></p></div></li>";
				}
			} else {
				gjsf_html += "查询失败，请稍后再试！";
			}
		} else {
			gjsf_html += "查询失败，请稍后再试！";
		}
		if (gjsfInfo.length > 10) {
			$("#mobileLeft").show();
			$("#mobileRight").show();
		} else {
			$("#mobileLeft").hide();
			$("#mobileRight").hide();
		}
		gjsf_html += "</ul>";
		$("#shop_mobileMo").html(gjsf_html);
		lazyloadPageOption($("#mobileShop img"));
	},

	showJxth : function () {
		var pageNum = floorMobileSaleComponent.jxthPageNum;
		var pageSize = floorMobileSaleComponent.jxthPageSize;
		var jxth_html = "";
		var jxthInfo = floorMobileSaleComponent.jxth;
		var begin =	pageNum*pageSize;
		var end = begin + pageSize;
		if (null != jxthInfo) {
			if (jxthInfo.length > 0) {
				if (end > jxthInfo.length) {
					end = jxthInfo.length;
				}
				for (var i = begin; i < end; i++) {
					jxth_html += "<a target='blank' class='flArea-shelf-body-actList' onclick=\"BmonPage.homeClickLog('1F_8M','"+jxthInfo[i].mobileId+"');return true;\" href='"+jxthInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" page-lazy-src=\"" + jxthInfo[i].imageUrl + "\"></a>";
				}
			} else {
				jxth_html += "查询失败，请稍后再试！";
			}
		} else {
			jxth_html += "查询失败，请稍后再试！";
		}
		if (jxthInfo&&jxthInfo.length > 8) {
			$("#mobileLeft").show();
			$("#mobileRight").show();
		} else {
			$("#mobileLeft").hide();
			$("#mobileRight").hide();
		}
		$("#YHGJ-rmhd").html(jxth_html);
		lazyloadPageOption($("#mobileShop img"));
	},

	showXjzx : function () {
		var pageNum = floorMobileSaleComponent.xjzxPageNum;
		var pageSize = floorMobileSaleComponent.xjzxPageSize;
		var xjzx_html = "<ul class='clearfix'>";
		var xjzxInfo = floorMobileSaleComponent.xjzx;
		var begin =	pageNum*pageSize;
		var end = begin + pageSize;
		if (null != xjzxInfo) {
			if (xjzxInfo.length > 0) {
				if (end > xjzxInfo.length) {
					end = xjzxInfo.length;
				}
				for (var i = begin; i < end; i++) {
				var desc = this.showTitle(xjzxInfo[i].mobileDesc,22);
					xjzx_html += "<li><div class='hotCell-image' id=\"YHGJ-rmjx-img-"+(i+1)+"\"><a onclick=\"BmonPage.homeClickLog('1F_7M','"+xjzxInfo[i].mobileId+"');return true;\" target='blank' href='"+xjzxInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" page-lazy-src=\"" + xjzxInfo[i].imageUrl + "\"></a></div>"+
								"<div class='hotCell-info' id=\"YHGJ-rmjx-info-"+(i+1)+"\"><p><a style='color:#525252' onclick=\"BmonPage.homeClickLog('1F_7M','"+xjzxInfo[i].mobileId+"');return true;\" target='blank' href='"+xjzxInfo[i].linkUrl+"'><font style='font-weight:bold;'>"+xjzxInfo[i].mobileName+"</font></p><p title=\""+xjzxInfo[i].mobileDesc+"\">"+desc+"</p></a></div>"+
								"<div class='hotCell-price' id=\"YHGJ-rmjx-price-"+(i+1)+"\"><p class='font-red'><small>商城价&nbsp;</small><span>￥</span><b>"+xjzxInfo[i].mobilePrice.substring(0,xjzxInfo[i].mobilePrice.indexOf('.'))+"</b></p></div></li>";
				}
			} else {
				xjzx_html += "查询失败，请稍后再试！";
			}
		} else {
			xjzx_html += "查询失败，请稍后再试！";
		}
		if (floorMobileSaleComponent.isAllXjzx == 1) {
			$("#mobileLeft").show();
			$("#mobileRight").show();
		} else {
			$("#mobileLeft").hide();
			$("#mobileRight").hide();
		}
		xjzx_html += "</ul>";
		$("#shop_saler").html(xjzx_html);
	},

	showKjdh : function () {// 右上角手机类型，如老人机
		var kjdh_html = "";
		var kjdhInfo = floorMobileSaleComponent.kjdh;
//		if (null != kjdhInfo) {
//			for (var i = 0; i < kjdhInfo.length; i++) {
//				//kjdh_html += "<li><a target='blank' href='"+kjdhInfo[i].linkUrl+"'>" + kjdhInfo[i].point + "</a></li> ";
//				kjdh_html += "<a href='"+kjdhInfo[i].linkUrl+"' class='floor-link' target='blank'>" + kjdhInfo[i].point + "</a>";
//			}
//		}
//		kjdh_html += '<a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html?param=ASJTD;ZNSJ" target=blank>智能手机</a><a class=floor-link href="http://www.js.10086.cn/mall/web/cxhd.html" target=blank>缤纷活动</a><a class=floor-link href="http://www.js.10086.cn/mall/web/hygj.html" target=blank>合约购机</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html?param=ASJTD;LRSJ" target=blank>老人手机</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html" target=blank>更多机型</a>"';
		kjdh_html += '<a class=floor-link href="http://www.js.10086.cn/mall/web/cxhd.html" target=blank>缤纷活动</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html" target=blank>大屏手机</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html" target=blank>千元智能机</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html" target=blank>旗舰智能</a><a class=floor-link href="http://www.js.10086.cn/mall/web/goods_center.html" target=blank>更多机型</a>"';
		$("#YHGJ-quick").html(kjdh_html);
	},

	showHdjx : function () {// 左上角天天惠
		var hdjx_html = '<h2 class="floor-tit">购机</h2>';
		var hdjxInfo = floorMobileSaleComponent.hdjx;
		
//		if (null != hdjxInfo) {
//			for (var i = 0; i < hdjxInfo.length; i++) {
//				if(i < 2) {
//					//hdjx_html += "<a target='blank' onclick=\"BmonPage.homeClickLog('1F_2M','"+hdjxInfo[i].mobileId+"');return true;\" href='"+hdjxInfo[i].linkUrl+"'>"+hdjxInfo[i].point+"</a>";
//					hdjx_html += "<a href='"+hdjxInfo[i].linkUrl+"' class='floor-slogan' target='blank'><span>"+hdjxInfo[i].point+"</span></a>";
//				}
//			}
//		}
//		hdjx_html +="<a href='http://www.js.10086.cn/mall/web/mallmore.html' class='floor-slogan' target='blank'><span>天天惠——优惠回馈天天有！</span></a>"
		hdjx_html +="<a href='http://www.js.10086.cn/mall/index.jsp' class='floor-slogan' target='blank'><span>手机商城——优惠回馈天天有！</span></a>"
		$("#YHGJ-notice").html(hdjx_html);
	},

	showTjhd : function () {// 老代码右侧
		var tjhd_html = "";
		var tjhdInfo = floorMobileSaleComponent.tjhd;
		if (null != tjhdInfo) {
			for (var i = 0; i < tjhdInfo.length; i++) {
				var likrUrl = tjhdInfo[i].linkUrl;
				var imgUrl = tjhdInfo[i].picUrl;
				var des = tjhdInfo[i].point
				if (i < 2){
					tjhd_html += '<dl class="phone-ad-item">';
					tjhd_html += '<dt class="phone-ad-item-img"><a target="_blank" href="'+likrUrl+'">';
					tjhd_html += '<img title="'+des+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" '+
                                 'data-src="'+imgUrl+'" width="192" height="145" '+
                                 'alt="" class="data-img"/>';
					tjhd_html += '</a></dt>';
					tjhd_html += '<dd class="phone-ad-item-des">'+des+'</dd>';
					tjhd_html += '</dl>';
				}
			}
		}
//		<dl class="phone-ad-item">
//      <dt class="phone-ad-item-img"><a target="_blank" href="http://www.js.10086.cn/activity/act/znq2015.html">
//      <img src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" 
//      data-src="http://img02.js.10086.cn/obsh2014/common/upload/floor-znq.jpg" width="192" height="145" 
//      alt="" class="data-img"/></a></dt>
//      <dd class="phone-ad-item-des">购机攒福羊抽奖赢好礼！</dd>
//  </dl> 
		$("#tjhd").html(tjhd_html);
	},
	showLeft : function () {
		var left_html="";
		var monHtml="";
		var tuesHtml="";
		var wenHtml="";
		var thurHtml="";
		var fryHtml="";
		var satHtml="";
		var sunHtml="";
		var dayNum = new Date().getDay();//日一二三四五六==>0123456
		var leftInfo = floorMobileSaleComponent.leftV;
		if (null != leftInfo) {
			for (var i = 0; i < leftInfo.length; i++){
				var temp = leftInfo[i];
				var phoneName = "";
				//alert(temp.mobileName.length);
				//alert("魅族 魅蓝（移动".replace(/[^\x00-\xff]/g, "**"));
				//if (temp.mobileName && temp.mobileName.length > 8){
				//	phoneName = temp.mobileName.substring(0,8)+"...";
				if(temp.mobileName.replace(/[^\x00-\xff]/g, "**").length > 10) {
					phoneName = temp.mobileName.substring(0,6)+"...";
				} else {
					phoneName = temp.mobileName;
				}
				var desc = "";
				if (temp.mobileDesc && temp.mobileDesc.length > 18){
					desc = temp.mobileDesc.substring(0,18)+"...";
				} else {
					desc = temp.mobileDesc;
				}
				var jg = "0";
				if (temp.barePrice){
					jg = temp.barePrice;
				}
				var zheKou = '';
				if (temp.precallprice && "10" != temp.precallprice){
					zheKou = temp.precallprice+"折";
				}
				//alert(temp.dayOfWeek + "=="+phoneName+ "=="+desc+ "=="+jg+ "=="+zheKou);
				if ('MONDAY' == temp.dayOfWeek){
					monHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 1){//当天是周一
						monHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="phone-img">';
					} else {
						monHtml +='<a href="javascript:;" class="phone-img">';
					}
					monHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					monHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					monHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					monHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						monHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					monHtml +='</p></div>';
					
					monHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 1){//当天是周一
						monHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						monHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					monHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 1){//当天是周一
						monHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
//					} else if (dayNum > 1){
//						monHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					} else {//周一是第一天，其他都比周一大
						//monHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
						monHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					}
					monHtml +='</p></div>';
				}else if ('TUESDAY' == temp.dayOfWeek){
					tuesHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 2){//当天是周2
						tuesHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="phone-img">';
					} else {
						tuesHtml +='<a href="javascript:;" class="phone-img">';
					}
					tuesHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					tuesHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					tuesHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					tuesHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						tuesHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					tuesHtml +='</p></div>';
					
					tuesHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 2){//当天是周2
						tuesHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						tuesHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					tuesHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 2){//当天是周2
						tuesHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					} else if (dayNum > 2 || dayNum ==0){
						tuesHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';						
					} else {
						tuesHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					}
					tuesHtml +='</p></div>';
				}else if ('WEDNESDAY' == temp.dayOfWeek){
					wenHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 3){//当天是周3
						wenHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="phone-img">';
					} else {
						wenHtml +='<a href="javascript:;" class="phone-img">';
					}
					wenHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					wenHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					wenHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					wenHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						wenHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					wenHtml +='</p></div>';
					
					wenHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 3){//当天是周一
						wenHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						wenHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					wenHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 3){//当天是周一
						wenHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					} else if (dayNum > 3 || dayNum ==0){
						wenHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					} else {
						wenHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					}
					wenHtml +='</p></div>';
				}else if ('THURSDAY' == temp.dayOfWeek){
					thurHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 4){//当天是周4onclick="BmonPage.homeClickLog(\'1F_5M\',\''+temp.mobileId+'\');return true;"
						thurHtml +='<a href="'+temp.linkUrl+'" target="_blank"  class="phone-img">';
					} else {
						thurHtml +='<a href="javascript:;" class="phone-img">';
					}
					thurHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					thurHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					thurHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					thurHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						thurHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					thurHtml +='</p></div>';
					thurHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 4){//当天是周4
						thurHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						thurHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					thurHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 4){//当天是周4
						thurHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					} else if (dayNum > 4 || dayNum ==0){
						thurHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					} else {
						thurHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					}
					thurHtml +='</p></div>';
				}else if ('FRIDAY' == temp.dayOfWeek){
					fryHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 5){//当天是周5
						fryHtml +='<a href="'+temp.linkUrl+'" target="_blank"  class="phone-img">';
					} else {
						fryHtml +='<a href="javascript:;" class="phone-img">';
					}
					fryHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					fryHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					fryHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					fryHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						fryHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					fryHtml +='</p></div>';
					
					fryHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 5){//当天是周5
						fryHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						fryHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					fryHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 5){//当天是周5
						fryHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					} else if (dayNum > 5 || dayNum ==0){
						fryHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';						
					} else {
						fryHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					}
					fryHtml +='</p></div>';
				}else if ('SATURDAY' == temp.dayOfWeek){
					satHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 6){//当天是周6
						satHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="phone-img">';
					} else {
						satHtml +='<a href="javascript:;" class="phone-img">';
					}
					satHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					satHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					satHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					satHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						satHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					satHtml +='</p></div>';
					
					satHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 6){//当天是周6
						satHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						satHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					satHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 6){//当天是周6
						satHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					} else if (dayNum == 0){
						satHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					} else {
						satHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					}
					satHtml +='</p></div>';
				}else if ('SUNDAY' == temp.dayOfWeek){
					sunHtml +='<div class="phone-countdown-item"><div class="phone-countdown-info"><div class="clearfix phone-countdown-summary">';
					if (dayNum == 0){//当天是周日
						sunHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="phone-img">';
					} else {
						sunHtml +='<a href="javascript:;" class="phone-img">';
					}
					sunHtml +='<img title="'+temp.mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+temp.imageUrl+'" width="110" height="150" class="data-img"/></a>';
					
					sunHtml +='<div class="phone-countdown-des"><h4 class="phone-name" title="'+temp.mobileName+'">'+phoneName+'</h4>';
					sunHtml +='<p class="phone-slogan" title="'+temp.mobileDesc+'">'+desc+'</p>';
					sunHtml +='<p class="phone-price">￥<strong class="price-val">'+jg+'</strong>';
					if (zheKou != ""){
						sunHtml +='<span class="phone-onsale-sign">'+zheKou+'</span>';
					}
					sunHtml +='</p></div>';
					
					sunHtml +='</div><p class="phone-countdown-time">';
					if (dayNum == 0){//当天是周日
						sunHtml +='还剩<span class="hours" id="day">0</span>天<span class="hours" id="hour"></span>时<span class="minutes" id="minute"></span>分<span class="second" id="second"></span>秒';
					} else {
						sunHtml +='还剩<span class="hours">0</span>天<span class="hours">0</span>时<span class="minutes">0</span>分<span class="second">0</span>秒';
					}
					sunHtml +='</p></div><p class="phone-purchase-action">';
					if (dayNum == 0){//当天是周日
						sunHtml +='<a href="'+temp.linkUrl+'" target="_blank" class="green-btn purchase-now">立即抢购</a>';
					//} else if (dayNum == 1){
						//sunHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
						//sunHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
					} else {
						sunHtml +='<a href="javascript:;" class="blue-btn purchase-now">敬请期待</a>';
						//sunHtml +='<a href="javascript:;" class="gray-btn purchase-now">卖光了哦</a>';
					}
					sunHtml +='</p></div>';
				}
			}
		}
		$("#leftPhones").html(monHtml+tuesHtml+wenHtml+thurHtml+fryHtml+satHtml+sunHtml);
		//indexWeb.floorPhone();
		// 必须先画完左边才能计算时间
		var date235959 =  new Date();
		date235959.setHours("23", "59", "59", "0");
		var month = date235959.getMonth()+1;
		var d = date235959.getFullYear()+"/"+month+"/"+date235959.getDate()+" "+date235959.getHours()+":"+date235959.getMinutes()+":"+date235959.getSeconds();
		floorMobileSaleComponent.changeTime(d);
		
	},
	changeTime : function(time){
		//var day_elem = $(id).find('.day');
		var hour_elem = $("#hour");//$(id).find('.hour');
		var minute_elem = $("#minute");//$(id).find('.minute');
		var second_elem = $("#second");//$(id).find('.second');
		var end_time = new Date(time).getTime(),//月份是实际月份-1
		sys_second = (end_time-new Date().getTime())/1000;
		var timer = setInterval(function(){
			if (sys_second > 1) {
				sys_second -= 1;
				var day = Math.floor((sys_second / 3600) / 24);
				var hour = Math.floor((sys_second / 3600) % 24);
				var minute = Math.floor((sys_second / 60) % 60);
				var second = Math.floor(sys_second % 60);
				//day_elem && $(day_elem).text(day);//计算天
				$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
				$(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
				$(second_elem).text(second<10?"0"+second:second);//计算秒杀
			} else { 
				clearInterval(timer);
			}
		}, 1000);
	},
	selPhone : function(){
		var consume = $("#consume-val").val();
		var prestore = $("#prestore-val").val();
		var url = "http://www.js.10086.cn/mall/web/hygj.html?cycFlg=1&";
		// param=HYGJ_ZDXF;HYGJ_ZDXF_4|HYGJ_YCJE;HYGJ_YCJE_5
		if (consume == "99999" && prestore == '99999'){
			// do nothing
		} else {
			var zdxf = "";// 最低消费
			if (consume >=0 && consume <= 49){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_1";
			} else if (consume >=50 && consume <= 99){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_2";
			} else if (consume >=100 && consume <= 149){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_3";
			} else if (consume >=150 && consume <= 199){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_4";
			} else if (consume >=200 && consume <= 249){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_5";
			} else if (consume == 250){
				zdxf = "HYGJ_ZDXF;HYGJ_ZDXF_6";
			}
			var ycje = "";//预存金额
			if (prestore >= 0 && prestore < 500){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_1";
			}else if (prestore >= 500 && prestore < 1000){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_2";
			}else if (prestore >= 1000 && prestore < 2000){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_3";
			}else if (prestore >= 2000 && prestore < 3000){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_4";
			}else if (prestore >= 3000 && prestore < 4000){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_5";
			}else if (prestore == 4000){
				ycje = "HYGJ_YCJE;HYGJ_YCJE_6";
			}
			if (zdxf != ''){
				url +="param="+zdxf;
				if (ycje != ''){
					url +="|"+ycje;
				}
			} else {
				if (ycje != ''){
					url +="param="+ycje;
				}
			}
		}
		$("#realLink").attr("href",url);
	},
	setNoLimit : function(id){
		$("#"+id).val("99999");
		$("#"+id).parent().find("b[class='progress-now']").css("width","164px");
		$("#"+id).parent().find("b[class='progress-control']").css("left","164px");
	},
	showZtyxa : function () {
		var ztyxa_html = "";
		var ztyxaInfo = floorMobileSaleComponent.ztyxa;
		if (null != ztyxaInfo) {
			for (var i = 0; i < ztyxaInfo.length; i++) {
				if(ztyxaInfo[i].channel=='1'){
					if(null == ztyxaInfo[i].precallprice || '' == ztyxaInfo[i].precallprice || typeof(ztyxaInfo[i].precallprice) == "undefined" || 0==ztyxaInfo[i].precallprice){
						ztyxa_html += "<li><div class='mainArea-body-list-showCell' id=\"YHGJ-Mid_"+(i+1)+"\"><em class='mainArea-body-list-"+ztyxaInfo[i].icon+"'></em><a onclick=\"BmonPage.homeClickLog('1F_4M_G1','"+ztyxaInfo[i].mobileId+"');return true;\" target='blank' href='"+ztyxaInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" lazy-src=\"" + ztyxaInfo[i].imageUrl + "\" alt=''><p class='mainArea-body-list-showInfo' title=\""+ztyxaInfo[i].mobileDesc+"\"><strong>"+ztyxaInfo[i].mobileName+"</strong>&nbsp;&nbsp;"+ztyxaInfo[i].mobileDesc+"</p><p class='mainArea-body-list-showPrice'>集团价:<span>￥"+ztyxaInfo[i].mobilePrice.substring(0,ztyxaInfo[i].mobilePrice.indexOf('.'))+"</span></p></a></div></li>";
					}else{
						ztyxa_html += "<li><div class='mainArea-body-list-showCell' id=\"YHGJ-Mid_"+(i+1)+"\"><em class='mainArea-body-list-"+ztyxaInfo[i].icon+"'></em><a onclick=\"BmonPage.homeClickLog('1F_4M_G1','"+ztyxaInfo[i].mobileId+"');return true;\" target='blank' href='"+ztyxaInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" lazy-src=\"" + ztyxaInfo[i].imageUrl + "\" alt=''><p class='mainArea-body-list-showInfo' title=\""+ztyxaInfo[i].mobileDesc+"\"><strong>"+ztyxaInfo[i].mobileName+"</strong>&nbsp;&nbsp;"+ztyxaInfo[i].mobileDesc+"</p><p class='mainArea-body-list-showPrice'>集团价:<span>￥"+ztyxaInfo[i].mobilePrice.substring(0,ztyxaInfo[i].mobilePrice.indexOf('.'))+"</span>~<span>"+ztyxaInfo[i].precallprice.substring(0,ztyxaInfo[i].precallprice.indexOf('.'))+"</span></p></a></div></li>";
					}
					
				}else{
					if(null == ztyxaInfo[i].precallprice || '' == ztyxaInfo[i].precallprice || typeof(ztyxaInfo[i].precallprice) == "undefined" || 0==ztyxaInfo[i].precallprice){
						ztyxa_html += "<li><div class='mainArea-body-list-showCell' id=\"YHGJ-Mid_"+(i+1)+"\"><em class='mainArea-body-list-"+ztyxaInfo[i].icon+"'></em><a onclick=\"BmonPage.homeClickLog('1F_4M_G1','"+ztyxaInfo[i].mobileId+"');return true;\" target='blank' href='"+ztyxaInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" lazy-src=\"" + ztyxaInfo[i].imageUrl + "\" alt=''><p class='mainArea-body-list-showInfo' title=\""+ztyxaInfo[i].mobileDesc+"\"><strong>"+ztyxaInfo[i].mobileName+"</strong>&nbsp;&nbsp;"+ztyxaInfo[i].mobileDesc+"</p><p class='mainArea-body-list-showPrice'>活动价:<span>￥"+ztyxaInfo[i].mobilePrice.substring(0,ztyxaInfo[i].mobilePrice.indexOf('.'))+"</span></p></a></div></li>";
					}else{
						ztyxa_html += "<li><div class='mainArea-body-list-showCell' id=\"YHGJ-Mid_"+(i+1)+"\"><em class='mainArea-body-list-"+ztyxaInfo[i].icon+"'></em><a onclick=\"BmonPage.homeClickLog('1F_4M_G1','"+ztyxaInfo[i].mobileId+"');return true;\" target='blank' href='"+ztyxaInfo[i].linkUrl+"'><img src=\"" + GLOBAL_INFO.PLACE_HOLDER_IMG + "\" lazy-src=\"" + ztyxaInfo[i].imageUrl + "\" alt=''><p class='mainArea-body-list-showInfo' title=\""+ztyxaInfo[i].mobileDesc+"\"><strong>"+ztyxaInfo[i].mobileName+"</strong>&nbsp;&nbsp;"+ztyxaInfo[i].mobileDesc+"</p><p class='mainArea-body-list-showPrice'>活动价:<span>￥"+ztyxaInfo[i].mobilePrice.substring(0,ztyxaInfo[i].mobilePrice.indexOf('.'))+"</span>赠<span>"+ztyxaInfo[i].precallprice.substring(0,ztyxaInfo[i].precallprice.indexOf('.'))+"</span></p></a></div></li>";
					}
				}
				if (i == 2) {
					break;
				}
			}
		}
		$("#ztyxa").html(ztyxa_html);
	},

	showZtlj : function () {// 老代码中间
		var ztlj_html="";
		var ztljInfo = floorMobileSaleComponent.ztlj;
		if (null != ztljInfo) {
			for (var i = 0; i < ztljInfo.length; i++) {
				//手机上标html(比如:新品，热推，特价，直降)
				var ico_html = "";
				//手机描述
				var mobileDesc = ztljInfo[i].mobileDesc;
				if(mobileDesc.length > 25){
					mobileDesc = mobileDesc.substring(0,25) + "...";
				}
				var mobileName = floorMobileSaleComponent.showTitle(ztljInfo[i].mobileName,20);
				
				if(ztljInfo[i].icon && ztljInfo[i].icon != 'null' && ztljInfo[i].icon != "undefined" && ztljInfo[i].icon != '' ) {
					//ico_html += "<i class='ico " + ztljInfo[i].icon + "'></i>";
					if ('blue'== ztljInfo[i].icon){//特价
						ico_html += "<b class='icon bargain-sign'></b>";
					} else if ('red'== ztljInfo[i].icon){//新品
						ico_html += "<b class='icon new-sign'></b>";
					} else if ('yellow'== ztljInfo[i].icon){//热推
						ico_html += "<b class='icon hot-sign'></b>";
					}
				}
				var indexBare = ztljInfo[i].barePrice.indexOf('.');
				if (indexBare == -1){
					indexBare = ztljInfo[i].barePrice.length;
				}
				var indexPrice = ztljInfo[i].mobilePrice.indexOf('.');
				if (indexPrice == -1){
					indexPrice = ztljInfo[i].mobilePrice.length;
				}
				if(ztljInfo[i].channel==1){// 后台代码没有设channel值，所以永远不会是1,集团价：
					if(null == ztljInfo[i].precallprice || '' == ztljInfo[i].precallprice || typeof(ztljInfo[i].precallprice) == "undefined" || 0==ztljInfo[i].precallprice){
						ztlj_html += '<li><p class="phone-show-img"><a href="'+ztljInfo[i].linkUrl+'" onclick="BmonPage.homeClickLog(\'1F_4M_G2\','+ztljInfo[i].mobileId+');return true;" target="_blank">'
						           + '<img title="'+mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+ztljInfo[i].imageUrl+'" width="89" height="141" alt="" class="data-img"/></a></p>'
                                   + '<h4 class="phone-show-name">'+mobileName+'</h4>'
                                   + ' <p class="phone-show-des">'+mobileDesc+'</p>'
                                   + ' <p class="phone-show-price">集团价：'
                                   + '&nbsp;&nbsp;&nbsp;&nbsp;<del class="price-original"></del>'//ztljInfo[i].barePrice.substring(0,indexBare)+
                                   + '     <span class="price-now">￥<span>'+ztljInfo[i].mobilePrice.substring(0,indexPrice)+'</span></span>'
                                   + ' </p>' + ico_html+'</li>';
					}else{
						ztlj_html += '<li><p class="phone-show-img"><a href="'+ztljInfo[i].linkUrl+'" onclick="BmonPage.homeClickLog(\'1F_4M_G2\','+ztljInfo[i].mobileId+');return true;" target="_blank">'
						           + '<img title="'+mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+ztljInfo[i].imageUrl+'" width="89" height="141" alt="" class="data-img"/></a></p>'
			                       + '<h4 class="phone-show-name">'+mobileName+'</h4>'
			                       + ' <p class="phone-show-des">'+mobileDesc+'</p>'
			                       + ' <p class="phone-show-price">集团价：'
			                       + '&nbsp;&nbsp;&nbsp;&nbsp;<del class="price-original"></del>'//ztljInfo[i].mobilePrice.substring(0,indexPrice)+
			                       + '     <span class="price-now">￥<span>'+ztljInfo[i].precallprice.substring(0,ztljInfo[i].precallprice.indexOf('.'))+'</span></span>'
			                       + ' </p>' + ico_html+'</li>';
					}
				}else{// 抢购价：
					if(null == ztljInfo[i].precallprice || '' == ztljInfo[i].precallprice || typeof(ztljInfo[i].precallprice) == "undefined" || 0==ztljInfo[i].precallprice){
						ztlj_html += '<li><p class="phone-show-img"><a href="'+ztljInfo[i].linkUrl+'" onclick="BmonPage.homeClickLog(\'1F_4M_G2\','+ztljInfo[i].mobileId+');return true;" target="_blank">'
						           + '<img title="'+mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+ztljInfo[i].imageUrl+'" width="89" height="141" alt="" class="data-img"/></a></p>'
                                   + '<h4 class="phone-show-name">'+mobileName+'</h4>'
                                   + ' <p class="phone-show-des">'+mobileDesc+'</p>'
                                   + ' <p class="phone-show-price">抢购价：'
                                   + '&nbsp;&nbsp;&nbsp;&nbsp;<del class="price-original"></del>'//+ztljInfo[i].barePrice.substring(0,indexBare)+
                                   + '     <span class="price-now">￥<span>'+ztljInfo[i].mobilePrice.substring(0,indexPrice)+'</span></span>'
                                   + ' </p>' + ico_html+'</li>';
					}else{
						ztlj_html += '<li><p class="phone-show-img"><a href="'+ztljInfo[i].linkUrl+'" onclick="BmonPage.homeClickLog(\'1F_4M_G2\','+ztljInfo[i].mobileId+');return true;" target="_blank">'
						           + '<img title="'+mobileName+'" src="http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif" data-src="'+ztljInfo[i].imageUrl+'" width="89" height="141" alt="" class="data-img"/></a></p>'
			                       + '<h4 class="phone-show-name">'+mobileName+'</h4>'
			                       + ' <p class="phone-show-des">'+mobileDesc+'</p>'
			                       + ' <p class="phone-show-price">抢购价：'
			                       + '&nbsp;&nbsp;&nbsp;&nbsp;<del class="price-original"></del>'//+ztljInfo[i].mobilePrice.substring(0,indexPrice)+
			                       + '     赠<span class="price-now">￥<span>'+ztljInfo[i].precallprice.substring(0,ztljInfo[i].precallprice.indexOf('.'))+'</span></span>'
			                       + ' </p>' + ico_html+'</li>';
					}
				}
				if (i == 2) {
					break;
				}
			}
		}
		$("#ztlj").html(ztlj_html);
	},
	
	//限时抢购
	showXsqg : function () {// 老代码左侧上部

	},

	showG3yhg : function () {// 老代码左侧下部

	},

	initData : function (result) {
		var mobileSale = result.resultObj;
		floorMobileSaleComponent.hdjx = mobileSale.hdjxInfo;
		floorMobileSaleComponent.kjdh = mobileSale.kjdhInfo;
		floorMobileSaleComponent.xsqg = mobileSale.xsqgInfo;
		floorMobileSaleComponent.g3yhg = mobileSale.g3yhgInfo;
		floorMobileSaleComponent.ztyxa = mobileSale.ztyxaInfo;
		floorMobileSaleComponent.ztlj = mobileSale.ztljInfo;
		floorMobileSaleComponent.tjhd = mobileSale.tjhdInfo;
		floorMobileSaleComponent.xjzx = mobileSale.xjzxInfo;
		floorMobileSaleComponent.isAllXjzx = mobileSale.isAllXjzx;
		// sunwei
		floorMobileSaleComponent.leftV = mobileSale.leftList;
		//alert(mobileSale.tjhdInfo);
	},

	showActer : function (objThis) {
		$("#tableMobile").find("li").removeAttr("class");
		if (null == floorMobileSaleComponent.jxth) {
			$.busiReq({
				data : {
					"reqUrl" : "mobileSale",
	              	"busiNum" : "mobileSale",
					"methed" : "initAllJxth"
				},
				success : function(data){
					var result = eval("(" + data + ")");
					if(result && result.resultCode == '0'){
						var objRet = result.resultObj;
						floorMobileSaleComponent.jxth = objRet;
						floorMobileSaleComponent.showJxth();
					} else {
						$("#YHGJ-rmhd").html("系统忙，请稍后再试！");
					}
				}
			});
		} else {
			if (floorMobileSaleComponent.jxth.length>8) {
				$("#mobileLeft").show();
				$("#mobileRight").show();
			} else {
				$("#mobileLeft").hide();
				$("#mobileRight").hide();
			}
		}
		objThis.className = "current";
		document.getElementById("shop_saler").style.display="none";
		document.getElementById("YHGJ-rmhd").style.display="block";
		document.getElementById("shop_mobileMo").style.display="none";
		lazyloadPageOption($("#mobileShop img"));
	},

	showSaler : function (objThis) {
		$("#tableMobile").find("li").removeAttr("class");
		if (floorMobileSaleComponent.xjzx.length>10) {
				$("#mobileLeft").show();
				$("#mobileRight").show();
			} else {
				$("#mobileLeft").hide();
				$("#mobileRight").hide();
			}
		objThis.className = "current";
		document.getElementById("shop_saler").style.display="block";
		document.getElementById("YHGJ-rmhd").style.display="none";
		document.getElementById("shop_mobileMo").style.display="none";
		lazyloadPageOption($("#mobileShop img"));
	},

	showMobile : function (objThis) {
		$("#tableMobile").find("li").removeAttr("class");
		if (null == floorMobileSaleComponent.gjsf) {
			$.busiReq({
				data : {
					"reqUrl" : "mobileSale",
	              	"busiNum" : "mobileSale",
					"methed" : "initAllGjsf"
				},
				success : function(data){
					var result = eval("(" + data + ")");
					if(result && result.resultCode == '0'){
						var objRet = result.resultObj;
						floorMobileSaleComponent.gjsf = objRet;
						floorMobileSaleComponent.showGjsf();
					} else {
						$("#shop_mobileMo").html("系统忙，请稍后再试！");
					}
				}
			});
		} else {
			if (floorMobileSaleComponent.gjsf.length>10) {
				$("#mobileLeft").show();
				$("#mobileRight").show();
			} else {
				$("#mobileLeft").hide();
				$("#mobileRight").hide();
			}
		}
		objThis.className = "current";
		document.getElementById("shop_saler").style.display="none";
		document.getElementById("YHGJ-rmhd").style.display="none";
		document.getElementById("shop_mobileMo").style.display="block";
		lazyloadPageOption($("#mobileShop img"));
	},

	controShow : function (objThis) {
		lazyloadPageOption($("#mobileShop img"));
		var top = $("#mobileShop").offset().top;
		if (objThis.className == "flArea-shrink-retract"){
			$("#mobileShop").slideUp();
			objThis.className = "flArea-shrink-spread";
			$("#mobileShop").css("top", top);
			$("#shop_body").removeClass();
		} else if (objThis.className == "flArea-shrink-spread") {
			$("#mobileShop").slideDown(function(){

			$("#shop_body").addClass("flArea-shelf-body");
			});
			$("#mobileShop").css("top", top);
			objThis.className = "flArea-shrink-retract";
		}
	}
});

var compObshFloorTcComponent = BmonPage.createComponent('compObshFloorTc');

$.extend(compObshFloorTcComponent,{
	id : 'compObshFloorTc',
	name : '首页套餐楼层',
	init : function(result)
	{
		if(result&&result.resultCode==0){
			this.showFloorTc(result);
		}else{
			//调用失败
		}
	},
	//页面
	showFloorTc : function (result) {
		var isLogin = result.resultObj.isLogin;
		var cityNum=result.resultObj.city;
		//左侧数据
		/**20160111屏蔽*/
		//if(result.resultObj.recommendTc!=null){
		//	this.showFloorTc_01(result.resultObj.recommendTc,isLogin);
		//}
		
//		//省钱套餐数据
//		if(result.resultObj.saveList&&result.resultObj.saveList.length>0){
//			this.showFloorTc_02(result.resultObj.saveList,"0502",isLogin);
//		}
//		//娱乐套餐数据
//		if(result.resultObj.entertainmentList&&result.resultObj.entertainmentList.length>0){
//			this.showFloorTc_02(result.resultObj.entertainmentList,"0503",isLogin);
//		}
//		//精品套餐数据
//		if(result.resultObj.classicList&&result.resultObj.classicList.length>0){
//			this.showFloorTc_02(result.resultObj.classicList,"0504",isLogin);
//		}
//		//土豪套餐数据
//		if(result.resultObj.richList&&result.resultObj.richList.length>0){
//			this.showFloorTc_02(result.resultObj.richList,"0505",isLogin);
//		}
		lazyLoad("compObshFloorTc");
//		if(cityNum=="14" || cityNum=="13"){
//			$("#chooseTc").attr("href","http://service.js.10086.cn/experience.do?typeNum=2");
//			$("#chooseTcSrc").attr("data-src","http://img01.js.10086.cn/obsh2014/floor/llzq-1.jpg");
//		}else{
//			$("#chooseTc").attr("href","http://service.js.10086.cn/TCTH.html");
//			$("#chooseTcSrc").attr("data-src","http://img01.js.10086.cn/obsh2014/floor/llzq-1-new-1.png");
//		}
		
	},
	//左侧页面：推荐业务
	showFloorTc_01: function (areaOneData,isLogin) {
		//关键字
		$("#keyWordValue").append(areaOneData.keyWord);
		//价格
		$("#priceValue").prepend(areaOneData.monthFee);
		//办理人数
		$("#transValue").prepend(areaOneData.tranNum);
		//通话分钟数
		$("#callsValue").prepend(areaOneData.domesticCall);
		//流量
		$("#gprsValue").prepend(areaOneData.domesticGprs);
		//喜欢
//		$("#loveNum").empty();
//		$("#loveNum").append(areaOneData.loverNum);
		//链接
		$("#classicTc").attr("href",areaOneData.busiUrl);
		if(isLogin=="0"){
			$("#loveNum").attr("id","tcLover_"+areaOneData.contentId);
			$("#firstLover").attr("contentId",areaOneData.contentId);
			$("#firstLover").attr("currentLoveNum",areaOneData.loverNum);
			$("#firstLover").attr("isLogin",isLogin);
			$("#firstLover").attr("urlParam",areaOneData.productCode);
//			$("#firstLover").attr("onclick","javascript:compObshFloorTcComponent.diffientByIsLogin(this)");
			$("#firstLover").attr("href","javascript:void(0);");
		}else{
//			$("#firstLover").attr("onclick","javascript:compObshFloorTcComponent.diffientByIsLogin(this)");
			$("#firstLover").attr("href","javascript:void(0);");
			
//			var redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
//			$("#firstLover").attr("href","./login.html?url="+redictUrl);
		}
	},
	//套餐数据
	showFloorTc_02: function (areaData,areaNum,isLogin) {
		if (areaData && areaData.length) 
		{
			var rowCount = areaData.length;
			var saveHtml = "";
			$.each(areaData, function (i, item) {
				var contentId= item.contentId;
				var loverNum = item.loverNum;
				var monthFee = item.monthFee;
				var tranNum  = item.tranNum;
				var callNum  = item.domesticCall;
				var gprsNum  = item.domesticGprs;
				var busiUrl  = item.busiUrl;
				var productCode = item.productCode;
				var redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
				saveHtml += "<div class='package-business-item'>";
				saveHtml += "<div class='package-item-info'>";
				saveHtml += "<p class='package-business-like'>";
				saveHtml += "<a href='javascript:void(0)' onclick='javascript:compObshFloorTcComponent.diffientByIsLogin(this)' contentId='"+contentId+"' currentLoveNum='"+loverNum+"' isLogin='"+isLogin+"' urlParam='"+productCode+"' class='package-like-action'>";
				saveHtml += "<b class='icon'></b>喜欢<span class='link-number' id = 'tcLover_"+contentId+"'></span>";
				saveHtml += "</a>";
				saveHtml += "</p>";
				
				saveHtml += "<p class='package-price-people'>";
				saveHtml += "<a class='package-business-det' href='"+busiUrl+"' target='_blank'>";
				saveHtml += "<span class='business-price'><strong>"+monthFee+"</strong>元/月</span>";
				saveHtml += "<span class='business-people'>已有<strong>"+tranNum+"</strong>人办理</span>";
				saveHtml += "</a>";
				saveHtml += "</p>";
				saveHtml += "</div>";
				
				saveHtml += "<div class='package-item-include'>";
				saveHtml += "<p class='phone-time'>"+callNum+"<br/>国内通话</p>";
				saveHtml += "<p class='phone-gprs'>"+gprsNum+"<br/>流量</p>";
				saveHtml += "</div>";
				saveHtml += "</div>";
			});
			
			if(areaNum=="0502"){
				$("#saveItem").append(saveHtml);
				if(rowCount==1){
					$("#saveLeftArrow").attr("class","");
					$("#saveRightArrow").attr("class","");
				}
			}
			if(areaNum=="0503"){
				$("#entertainmentItem").append(saveHtml);
				if(rowCount==1){
					$("#entertainmentLeftArrow").attr("class","");
					$("#entertainmentRightArrow").attr("class","");
				}
			}
			if(areaNum=="0504"){
				$("#classicItem").append(saveHtml);
				if(rowCount==1){
					$("#classicLeftArrow").attr("class","");
					$("#classicRightArrow").attr("class","");
				}
			}
			if(areaNum=="0505"){
				$("#richItem").append(saveHtml);
				if(rowCount==1){
					$("#richLeftArrow").attr("class","");
					$("#richRightArrow").attr("class","");
				}
			}
		}
	},
	
	diffientByIsLogin : function (obj) {
		//切换样式
//		if($(obj).hasClass("package-liked-action")){
//			return;
////			$("#loveDiv_tc").show();
//		}else{
		$(obj).toggleClass("package-liked-action");
//		}
//		var urlParam = $(obj).attr("urlParam");
//		var loginFlag = $(obj).attr("isLogin");
//		var currentLoveNum = $(obj).attr("currentLoveNum");
//		
//		if(loginFlag=="0"){
//			var contentId = $(obj).attr("contentId");
//			compObshFloorTcComponent.loveBusi(urlParam,currentLoveNum,contentId);
//		}else{
//			//转向登录页面
//			var redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
//			
//			window.open("./login.html?url="+redictUrl);
//		}
	},
	
	loveBusi : function (_loveBusiNum,_currentLoveNum,contentId){
		if(_loveBusiNum==null||_loveBusiNum==""||_loveBusiNum=="null"){
			return;
		}
		$.busiReq({
			data :
			{
				"reqUrl"	: "busiLove",
				"op"		: '1',
				"busiNum" 	: _loveBusiNum
			},
			success : function(data){
				var busiResult = eval("(" + data + ")");
				if(busiResult.resultObj.isHasLove==1){
					alert("您已经喜欢过该业务了！");
				}else if(busiResult.resultObj.isHasLove==0){
					$("#tcLover_"+contentId).empty();
					$("#tcLover_"+contentId).append(parseInt(_currentLoveNum)+1);
				}else{
					alert("请尝试重新喜欢！");
				};
			}
		});
		return;
	}
});

/**
 * ====================================================
 * 首页7F娱乐楼层
 * 开发日期：2013-3-7
 * 修改日期：2014-10-28
 * 开发人：丁亮
 * ====================================================
 */
var compObshFloorYlComponent = BmonPage.createComponent("compObshFloorYl");
$.extend(compObshFloorYlComponent, {
    id : "compObshFloorYl",
    name : "娱乐楼层",
    loginState : "0",
    leftBusinessData : new Map(),
    rightBusinessData : new Map(),
    busiIconInfo : null,
    init : function(data){
        if(data && data.resultCode == "0" && data.resultObj){
            compObshFloorYlComponent.initData();
            
            compObshFloorYlComponent.initNewHotRing(data.resultObj);
            compObshFloorYlComponent.initGame(data.resultObj.ringGames);
            compObshFloorYlComponent.initApk(data.resultObj.ringApks);
            // 登录前左侧
            if(UserInfo.mobile){
                // 获取用户上个月的消费额度
                var leftType = "all";
                var rightType = "qqt-all";
                var userDetail = UserInfo.userDetail;
                if(parseInt(userDetail) <= 100){
                    leftType = "qqt-100";
                }
                else if(parseInt(userDetail) > 100 && parseInt(userDetail) <= 200){
                    leftType = "qqt-200";
                }
                else if(parseInt(userDetail) > 200 && parseInt(userDetail) <= 300){
                    leftType = "qqt-300";
                }
                else {
                    leftType = "qqt-400";
                }
                
                compObshFloorYlComponent.initLeftBusiness("all");
                compObshFloorYlComponent.initRightBusiness(rightType);
            }
            else{
                compObshFloorYlComponent.initLeftBusiness("all");
                compObshFloorYlComponent.initRightBusiness("all");
            }
            lazyLoad("compObshFloorYl");
        }
    },
    
    /**
	 * 娱乐阅读短信下发
	 * 
	 */
    sendSMSG : function(name,url){
    	
    	
    	$.busiReq({ 
    		data :{
    		"reqUrl"	: "myloginDiy",
    		"operType"  : "sendMsg",
    		"bookName"  : name,
    		"bookUrl"  : url
    	    },
    		success : function(data)
    		{
    	    	var obj = eval("(" + data + ")");
				if(obj.resultCode == '0') {
					var html ="";
					html += "<div><div id=\"popMask\" class=\"popMask\" style=\"display: block; height: 4534px;\"></div>";
					html +="<div id=\"popBox-business\" class=\"popBox popBox-business\" style=\"left: 441.5px; top: 2800px; display: block;\">";
					html +="<div class=\"popBox-head\"><h3>提示</h3><a id=\"popBox-close\" href=\"javascript:void(0);\" class=\"close\" onclick=\"javascript:jQuery(this).parents('.popBox').hide();jQuery('.popMask').hide();\"></a></div>";
					html +="<div class=\"popBox-body showBnsInfo\" id=\"Dialog_popBody\"><ul class=\"handling-Success\" id=\"Dialog_tip\"> <li class=\"tipText\">您好，《"+name+"》的阅读链接已发送至您的手机，请点击短信中的小说连接阅读，谢谢！<a href=\"http://www.cmread.com/u/index\">查看更多好书</a></li></ul></div>";
					
					var doc = $("body");
					doc.prepend(html);

				}else if(loginforSMS !=1){
					var html ="";
					html += "<div><div id=\"popMask\" class=\"popMask\" style=\"display: block; height: 4534px;\"></div>";
					html +="<div id=\"popBox-business\" class=\"popBox popBox-business\" style=\"left: 441.5px; top: 2800px; display: block;\">";
					html +="<div class=\"popBox-head\"><h3>提示</h3><a id=\"popBox-close\" href=\"javascript:void(0);\" class=\"close\" onclick=\"javascript:jQuery(this).parents('.popBox').hide();jQuery('.popMask').hide();\"></a></div>";
					html +="<div class=\"popBox-body showBnsInfo\" id=\"Dialog_popBody\"><ul class=\"handling-Success\" id=\"Dialog_tip\"> <li class=\"tipText\">您好请先<a href=\"http://service.js.10086.cn/login.html?url=index.html\">登录</a>，谢谢！</li></ul></div>";
					
					var doc = $("body");
					doc.prepend(html);
				}
    	    }
    	});
	},
	
    //手机组件发送多条短信
    sendMoreSMsg :function(type)
    {
         var bookName = "";
      
	  	  if(1==type)
		  {
			  bookName = "《万物生长》,《盗墓贼》";
		  }
		  else if(2==type)
		  {
			  bookName = "赵薇主演热剧原著《虎妈猫爸》 ,张小娴《清道夫》";
		  }
		  else if(3==type)
		  {
			  bookName = "《我心久安》 ,《初晨,是我故意忘记你》";
		  }
		  else if(4==type)
		  {
			  bookName = "《我欲封天》 ,《神医修龙》";
		  } 
		  else if(5==type)
		  {
			  bookName = "《怪诞心理学1》,《老梁论成败》";
		  }
    	$.busiReq({ 
    		data :{
    		"reqUrl"	: "myloginDiy",
    		"operType"  : "sendMoreMsg",
    		"type"  : type 
    	    },
    		success : function(data)
    		{ 
    	    	var obj = eval("(" + data + ")");
    	    	if(obj.resultCode == '0') {
    	    		var html ="";
					html += "<div><div id=\"popMask\" class=\"popMask\" style=\"display: block; height: 4534px;\"></div>";
					html +="<div id=\"popBox-business\" class=\"popBox popBox-business\" style=\"left: 441.5px; top: 2800px; display: block;\">";
					html +="<div class=\"popBox-head\"><h3>提示</h3><a id=\"popBox-close\" href=\"javascript:void(0);\" class=\"close\" onclick=\"javascript:jQuery(this).parents('.popBox').hide();jQuery('#popMask').hide();\"></a></div>";
					html +="<div class=\"popBox-body showBnsInfo\" id=\"Dialog_popBody\"><ul class=\"handling-Success\" id=\"Dialog_tip\"> <li class=\"tipText\">您好，《"+bookName+"》的阅读链接已发送至您的手机，请点击短信中的小说连接阅读，谢谢！<a href=\"http://www.cmread.com/u/index\">查看更多好书</a></li></ul></div>";
					
					var doc = $("body");
					doc.prepend(html);
    	    	}else if(loginforSMS !=1){
    	    		var html ="";
					html += "<div><div id=\"popMask\" class=\"popMask\" style=\"display: block; height: 4534px;\"></div>";
					html +="<div id=\"popBox-business\" class=\"popBox popBox-business\" style=\"left: 441.5px; top: 2800px; display: block;\">";
					html +="<div class=\"popBox-head\"><h3>提示</h3><a id=\"popBox-close\" href=\"javascript:void(0);\" class=\"close\" onclick=\"javascript:jQuery(this).parents('.popBox').hide();jQuery('#popMask').hide();\"></a></div>";
					html +="<div class=\"popBox-body showBnsInfo\" id=\"Dialog_popBody\"><ul class=\"handling-Success\" id=\"Dialog_tip\"> <li class=\"tipText\">您好请先<a href=\"http://service.js.10086.cn/login.html?url=index.html\">登录</a>，谢谢！</li></ul></div>";
					
					var doc = $("body");
					doc.prepend(html);
    	    	}
    	    }
    	});
    },
    
    initData : function(){
        var leftBusinessData = new Map();
        leftBusinessData.put("all",[//{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjsp.gif","busiNum":"HSP","busiName":"和视频","busiRemark":"随时随地尽情欣赏影视节目","busiHref" :"http://service.js.10086.cn/index.jsp#SJSP"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/20170104105047871.png","busiNum":"JCSPHY","busiName":"精彩视频会员","busiRemark":"三大主流视频会员任你选择 ","busiHref" : "http://service.js.10086.cn/JCSPHY.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjwjjlb.jpg","busiNum":"SJWJJLB","busiName":"优惠提醒","busiRemark":"享优惠资讯 ","busiHref" : "http://service.js.10086.cn/SJWJJLB.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/201704191111.png","busiNum":"HCY_JCB","busiName":"和彩印","busiRemark":"通话秀签名，来电显个性","busiHref" : "http://service.js.10086.cn/HCY_JCB.html" }]);
//                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/heyouxi%20.jpg","busiNum":"YXWJ","busiName":"游戏玩家","busiRemark":"手机就是游戏机，专享四大免费权益。","busiHref" : "http://service.js.10086.cn/YXWJ.html" }]);
        leftBusinessData.put("qqt-400",[{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/139yx.png","busiNum":"139YX","busiName":"139邮箱","busiRemark":"我的私人邮件快递","busiHref" :"http://service.js.10086.cn/139YX.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/htxl_logo.gif","busiNum":"HTXL","busiName":"和通讯录","busiRemark":"中国移动为您备份通讯录","busiHref" : "http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=3&fileID=55"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjzq.gif","busiNum":"SJZQ","busiName":"手机证券","busiRemark":"在线交易的移动增值业务","busiHref" : "http://www.js.10086.cn/support/businesshelp/mainlist/informations/2010/content75475.html" }]);
        leftBusinessData.put("qqt-300",[{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/mo-sh.jpg","busiNum":"12580LMHYJLB","busiName":"MO生活会员","busiRemark":"尽享吃喝玩乐特权","busiHref" :"./12580LMHYJLB.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/htxl_logo.gif","busiNum":"HTXL","busiName":"和通讯录","busiRemark":"中国移动为您备份通讯录","busiHref" : "http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=3&fileID=55"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/msfw.png","busiNum":"MSFF","busiName":"秘书服务","busiRemark":"您贴心的服务管家","busiHref" : "http://service.js.10086.cn/MSFF.html"}]);
        leftBusinessData.put("qqt-200",[{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjyd(1).gif","busiNum":"HYD","busiName":"和阅读","busiRemark":"畅享随身阅读","busiHref" :"http://service.js.10086.cn/SJYD.html"},
                                  {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/wlan.gif","busiNum":"SEX","busiName":"随E行","busiRemark":"随时随地无线上网","busiHref" :"http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=5&fileID=39"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/fx.png","busiNum":"FXYW","busiName":"飞信","busiRemark":"客户多样式沟通需求","busiHref" : "http://service.js.10086.cn/FXYW.html" }]);
        leftBusinessData.put("qqt-100",[{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/xcpjlb.jpg","busiNum":"CPJLB","busiName":"彩票俱乐部","busiRemark":"变身彩票达人","busiHref" : "http://service.js.10086.cn/CPJLB.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjyd(1).gif","busiNum":"HYD","busiName":"和阅读","busiRemark":"畅享随身阅读","busiHref" :"http://service.js.10086.cn/SJYD.html"},
                                    {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/fx.png","busiNum":"FXYW","busiName":"飞信","busiRemark":"客户多样式沟通需求","busiHref" : "http://service.js.10086.cn/FXYW.html" }]);
        
        compObshFloorYlComponent.leftBusinessData = leftBusinessData;
        
        // 右侧业务图片
        var rightBusinessData = new Map();
        rightBusinessData.put("all",[/*{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/20150910094400049.jpg","busiName":"国内漫游优惠","busiHref" : "http://service.js.10086.cn/GNMYYHTCGNB.html"},*/
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/20150109142426145.png","busiName":"和旅行","busiHref" :"http://service.js.10086.cn/HLX.html"},
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/cyzl.jpg","busiName":"车友助理","busiHref" : "http://service.js.10086.cn/CYZL.html"},
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjyd(1).gif","busiName":"和阅读","busiHref" : "http://service.js.10086.cn/SJYD.html"}]);
        
         rightBusinessData.put("qqt-all",[/*{"busiImg":"http://img01.js.10086.cn/obsh2014/busi/20150910094400049.jpg","busiName":"国内漫游优惠","busiHref" : "http://service.js.10086.cn/GNMYYHTCGNB.html"},*/
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/20150109142426145.png","busiName":"和旅行","busiHref" :"http://service.js.10086.cn/HLX.html"},
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/cyzl.jpg","busiName":"车友助理","busiHref" : "http://service.js.10086.cn/CYZL.html"},
                                     {"busiImg":"http://img01.js.10086.cn/obsh2014/busi/sjyd(1).gif","busiName":"和阅读","busiHref" : "http://service.js.10086.cn/SJYD.html"}]);
         compObshFloorYlComponent.rightBusinessData = rightBusinessData;
    },
    initRightBusiness : function(brand){
        var rightBusinessHtml = "";
        var rightBusiData = compObshFloorYlComponent.rightBusinessData;
        var rightBusiInfo = rightBusiData.get(brand);
        var u = 0;
        for(var i=0;i<2;i++){
            rightBusinessHtml += "<div class=\"entertainment-other-item\">";
            rightBusinessHtml += "    <h3 class=\"entertainment-other-tit\">"+ (i == 0 ? "出差旅游" : "休闲娱乐") +"</h3>";
            rightBusinessHtml += "    <ul class=\"clearfix entertainment-other-list\">";
            
            for(var k=0;k<2;k++){
                var _rightBusi = rightBusiInfo[u];
                var imgUrl = _rightBusi.busiImg;
                var busiName = _rightBusi.busiName;
                var busiHref = _rightBusi.busiHref;
            
                rightBusinessHtml += "        <li>";
                rightBusinessHtml += "            <p class=\"entertainment-img\"><a href=\""+ busiHref +"\" target=\"_blank\"><img title=\""+busiName+"\" class=\"data-img\" data-src=\""+ imgUrl +"\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" width=\"65\" height=\"65\"></a></p>";
                rightBusinessHtml += "            <p class=\"entertainment-name\"><a href=\""+ busiHref +"\" target=\"_blank\">"+ busiName +"</a></p>";
                rightBusinessHtml += "        </li>";
                u++;
            }
            
            rightBusinessHtml += "    </ul>";
//            rightBusinessHtml += "    <p class=\"entertainment-des\">"+ (i == 0 ? "漫游接打都3毛" : "尽享吃喝玩乐特权") +"</p>";
            rightBusinessHtml += "</div>";
        }
        
        $("#SJYW-Right").html(rightBusinessHtml);
    },
    initLeftBusiness : function(brand){
        var leftBusinessHtml = "<ul>";
        var leftBusiData = compObshFloorYlComponent.leftBusinessData;
        var leftBusiInfo = leftBusiData.get(brand);
        for(var i=0;i<leftBusiInfo.length;i++){
            var imgUrl = leftBusiInfo[i].busiImg;
            var busiName = leftBusiInfo[i].busiName;
            var busiRemark = leftBusiInfo[i].busiRemark;
            var busiHref = leftBusiInfo[i].busiHref;
            var busiNum = leftBusiInfo[i].busiNum;
            leftBusinessHtml += "<li class=\"entertainment-business-item\">";
            leftBusinessHtml += "    <div class=\"business-info\">";
            leftBusinessHtml += "        <div class=\"business-img\">";
            leftBusinessHtml += "            <a href=\""+ busiHref +"\" target=\"_blank\"><img title=\""+busiName+"\" class=\"data-img\" data-src=\""+ imgUrl +"\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" width=\"60\" height=\"60\" alt=\"\"></a>";
            leftBusinessHtml += "        </div>";
            leftBusinessHtml += "        <div class=\"business-des\">";
            leftBusinessHtml += "            <h3><a href=\""+ busiHref +"\" target=\"_blank\">"+ busiName +"</a></h3>";
            leftBusinessHtml += "            <p><a href=\""+ busiHref +"\" target=\"_blank\">"+ busiRemark +"</a></p>";
            leftBusinessHtml += "        </div>";
            leftBusinessHtml += "    </div>";
            //分享层 begin
            leftBusinessHtml += "    <div id='share"+busiNum+"' class=\"business-action\">";
        	leftBusinessHtml += "		<a href=\"javascript:;\" class=\"business-like\" onclick=\"compObshFloorYlComponent.showLove(this);\"></a>";
        	leftBusinessHtml += "		<a href=\"javascript:;\" class=\"business-share\"></a>";
        	leftBusinessHtml += "		<div class=\"share-layer\">";
    		leftBusinessHtml += "			<div class=\"share-layer-main\">";
			leftBusinessHtml += "				<span class=\"share-layer-text\">分享到</span>";
			leftBusinessHtml += "				<ul class=\"share-layer-list\">";
			leftBusinessHtml += "					<li class=\"share-item\">";
			leftBusinessHtml += "						<a href=\"javascript:;\" class=\"share-btn share-sina-wb\" id='market_son_sina2"+busiNum+"' title=\"新浪微博\"></a>";
			leftBusinessHtml += "					</li>";
			leftBusinessHtml += "					<li class=\"share-item\">";
			leftBusinessHtml += "						<a href=\"javascript:;\" class=\"share-btn share-tencent-wb\" id='market_son_txwb2"+busiNum+"' title=\"腾讯微博\"></a>";
			leftBusinessHtml += "					</li>";
			leftBusinessHtml += "					<li class=\"share-item\">";
			leftBusinessHtml += "						<a href=\"javascript:;\" class=\"share-btn share-mobile-wb\" id='market_son_139shuoke2"+busiNum+"' title=\"移动微博\"></a>";
			leftBusinessHtml += "					</li> ";
			leftBusinessHtml += "					<li class=\"share-item\">";
			leftBusinessHtml += "						<a href=\"javascript:;\" class=\"share-btn share-fetion\" id='market_son_feixin2"+busiNum+"' title=\"飞信\"></a>";
			leftBusinessHtml += "					</li>";
			leftBusinessHtml += "					<li class=\"share-item\">";
			leftBusinessHtml += "						<a href=\"javascript:;\" class=\"share-btn share-renren\" id='market_son_person2"+busiNum+"' title=\"人人\"></a>";
			leftBusinessHtml += "					</li>";
			leftBusinessHtml +="        			<li class='share-item'>";
			leftBusinessHtml +="           				<a href='javascript:;' class='share-btn share-qq'  id='market_son_qqkj2"+busiNum+"'  title='企鹅'></a>";
			leftBusinessHtml +="       				</li>";
			leftBusinessHtml += "				</ul>";
			leftBusinessHtml += "				<a href=\"javascript:;\" class=\"close-share-layer\" title=\"关闭\">X</a>";
			leftBusinessHtml += "			</div>";
			leftBusinessHtml += "		</div>";
			leftBusinessHtml += "	</div>";
			//分享层 end
            leftBusinessHtml += "</li>";
        }
        leftBusinessHtml += "</ul>";
        $("#dLeftBusiness").html(leftBusinessHtml);
        //渲染分享层内容
        for(var i=0;i<leftBusiInfo.length;i++){
        	var imgUrl = leftBusiInfo[i].busiImg;
            var busiName = leftBusiInfo[i].busiName;
            var busiRemark = leftBusiInfo[i].busiRemark;
            var busiHref = leftBusiInfo[i].busiHref;
            var busiNum = leftBusiInfo[i].busiNum;
            compObshFloorYlComponent.showPriviewInfo(busiName,busiNum,busiRemark);
        }
    },
    initNewHotRing : function(resultObj){
        var newHotRingHtml = "<div class=\"clearfix mg\">";
        for(var i=1;i<3;i++){
            newHotRingHtml += "     <div class=\"mg-tab mg-tab-cate0"+ i +"\">";
            newHotRingHtml += "         <div class=\"mg-tab-hd\">";
           
            // 未登录前左侧
            if(resultObj.myMusic=="undefined" || resultObj.myMusic==null || resultObj.myMusic.length<=0){
	            if(i==1){
	            	newHotRingHtml += "                 <h2 class=\"mg-title1\">咪 咕 推 荐</h2>";	     
	            	newHotRingHtml += "			<a href=\"./COLORRING_INDEX.html\" target=\"_blank\" class=\"more\">更多>></a>";
	            }
            }
            else
            {
            	  if(i==1){
  	            	newHotRingHtml += "                 <h2 class=\"mg-title1\">我 的 彩 铃</h2>";  	  
  	            	newHotRingHtml += "			<a href=\"./COLORRING_MYRING.html\" target=\"_blank\" class=\"more\">更多>></a>";
  	               }
            }
           if(i==2)
           {
        	   newHotRingHtml += "             <ul class=\"clearfix mg-new-title\">";
               newHotRingHtml += "                 <li class=\"current\">咪咕彩铃</li>";
               newHotRingHtml += "                 <li>咪咕音乐</li>";
               newHotRingHtml += "             </ul>";
               newHotRingHtml += "			<a href=\"./COLORRING_INDEX.html\" target=\"_blank\" class=\"more\">更多>></a>";
           }
            
            newHotRingHtml += "         </div>";
            newHotRingHtml += "         <div class=\"mg-tab-bd\">";
            //未登录  无我的彩铃
            if(resultObj.myMusic=="undefined" || resultObj.myMusic==null || resultObj.myMusic.length<=0){
            	if(i==1)
            	{
            		newHotRingHtml += compObshFloorYlComponent.initNewHotRingLeftHtml(resultObj.ringNewMusicsLeft,"0");
            	}            	
           // newHotRingHtml += compObshFloorYlComponent.initNewHotRingHtml((i == 1 ? resultObj.ringNewMusicsLeft : resultObj.ringNewMusicsRight),"1");
            }
            else
            {
            	if(i==1)
            	{
            		newHotRingHtml += compObshFloorYlComponent.initNewHotRingLeftLoginHtml(resultObj.myMusic,"0");
            	}   
            }
            if(i==2)
            {
            	 newHotRingHtml += compObshFloorYlComponent.initNewHotRingHtml(resultObj.ringNewMusicsRight,"0");
                 newHotRingHtml += compObshFloorYlComponent.initNewHotRingHtml(resultObj.ringNewMusicsRight,"1");
            }
            newHotRingHtml += "         </div>";
            newHotRingHtml += "     </div>";
        }
        newHotRingHtml += "</div>";
        $("#dNewHotRing").html(newHotRingHtml);
        
        //改成新版显示
//        var radomRingHtml = "<div class=\"migu-ring-item\">";
//        radomRingHtml += "<div class=\"migu-ring-pic\">";
//        radomRingHtml += "        <a href=\"./WXYYJLB.html\" target=\"_blank\"><img  class=\"data-img\" data-src=\"http://img01.js.10086.cn/obsh2014/busi/wxyyjlb.png\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" onerror=\"javascript:this.src='http://img01.js.10086.cn/obsh2014/busi/commonPic.jpg'\"></a>";
//        radomRingHtml += "    </div>";
//        radomRingHtml += "    <div class=\"migu-ring-info\">";
//        radomRingHtml += "        <h3 class=\"migu-ring-tit\"><a href=\"./WXYYJLB.html\" target=\"_blank\">咪咕会员</a></h3>";
//        radomRingHtml += "        <p class=\"migu-ring-des\">";
//        radomRingHtml += "            是中国移动向喜爱音乐的客户提供的一个社区交流平台，为客户提供一系列整合的音乐产品和服务，包括以彩铃、振.....";
//        radomRingHtml += "        </p>";
//        radomRingHtml += "    </div>";
//        radomRingHtml += "</div>";
//        radomRingHtml += "<div class=\"migu-ring-item\">";
//        radomRingHtml += "    <div class=\"migu-ring-pic\">";
//        radomRingHtml += "        <a href=\"./CL.html\" target=\"_blank\"><img  class=\"data-img\" data-src=\"http://img01.js.10086.cn/obsh2014/busi/cl.jpg\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" onerror=\"javascript:this.src='http://img01.js.10086.cn/obsh2014/busi/commonPic.jpg'\"></a>";
//        radomRingHtml += "    </div>";
//        radomRingHtml += "    <div class=\"migu-ring-info\">";
//        radomRingHtml += "        <h3 class=\"migu-ring-tit\"><a href=\"./CL.html\" target=\"_blank\">彩铃</a></h3>";
//        radomRingHtml += "        <p class=\"migu-ring-des\">";
//        radomRingHtml += "            彩铃是指客户可以自行选择所喜爱的被叫回铃音，当别人打您手机时，就不是听到普通的“嘟嘟”声，而可以听到您.....";
//        radomRingHtml += "        </p>";
//        radomRingHtml += "    </div>";
//        radomRingHtml += "</div>";
//        // 随机选3首彩铃
//        var radomRingHtml = "<ul class=\"clearfix\">";
//        radomRingHtml += "<li>";
//        radomRingHtml += "    <p class=\"song-img\">";
//        radomRingHtml += "        <a class=\"spe-link\" href=\"./WXYYJLB.html\" target=\"_blank\">";
//        radomRingHtml += "            <img src=\"http://img01.js.10086.cn/obsh2014/common/upload/entertainmen-mg.jpg\" width=\"60\" height=\"60\" alt=\"\">";
//        radomRingHtml += "        </a>";
//        radomRingHtml += "    </p>";
//        radomRingHtml += "    <p class=\"song-name\"><a target=\"_blank\" class=\"spe-link\" href=\"./WXYYJLB.html\"><span>咪咕会员</span></a></p>";
//        radomRingHtml += "</li>";
//        radomRingHtml += "<li>";
//        radomRingHtml += "    <p class=\"song-img\">";
//        radomRingHtml += "        <a class=\"spe-link\" href=\"./CL.html\" target=\"_blank\">";
//        radomRingHtml += "            <img src=\"http://img01.js.10086.cn/obsh2014/common/upload/entertainmen-ring.jpg\" width=\"60\" height=\"60\" alt=\"\">";
//        radomRingHtml += "        </a>";
//        radomRingHtml += "    </p>";
//        radomRingHtml += "    <p class=\"song-name\"><a target=\"_blank\" class=\"spe-link\" href=\"./CL.html\"><span>彩铃</span></a></p>";
//        radomRingHtml += "</li>";
//        
//        var musicLeftCount = parseInt(resultObj.ringNewMusicsLeft.length);
//        var ringNewMusics = resultObj.ringNewMusicsLeft;
//        for(var i=0;i<3;i++){
//            var m = Math.floor(Math.random()*musicLeftCount);
//            var musicId = ringNewMusics[i].id;
//            var musicPic = ringNewMusics[i].ringUrl;
//            var ringLongName = ringNewMusics[i].ringName;
//            var ringShortName = ringNewMusics[i].ringName;
//            var audition = "http://www.js.10086.cn/my/iportal/page/colorRingNew/colorRingListen.jsp?id="+musicId+ "&pic="+musicPic; 
//            
//            if(ringShortName.length > 4){
//                ringShortName = ringShortName.substr(0,4) + "...";
//            }
//            
//            radomRingHtml += "<li>";
//            radomRingHtml += "    <p class=\"song-img\">";
//            radomRingHtml += "        <a class=\"spe-link\" href=\""+ audition +"\" target=\"_blank\">";
//            radomRingHtml += "            <img src=\""+ musicPic +"\" onerror=\"javascript:this.src='http://img01.js.10086.cn/obsh2014/common/upload/entertainmen-ring.jpg'\" width=\"60\" height=\"60\">";
//            radomRingHtml += "        </a>";
//            radomRingHtml += "    </p>";
//            radomRingHtml += "    <p class=\"song-name\"><a target=\"_blank\" title=\""+ ringLongName +"\" class=\"spe-link\" href=\""+ audition +"\"><span>"+ ringShortName +"</span></a></p>";
//            radomRingHtml += "</li>";
//        }
//        radomRingHtml += "</ul>";
        //$("#dTopUrl").html(radomRingHtml);
    },
    /**
     * 初始新歌、热榜彩铃
     * @param {} newHotObject
     * @param {} colItem - 区域
     * @return {}
     */
    initNewHotRingHtml : function(newHotObject,ringType){
        var newHotRingHtml = "";
        var ringNewMusics = newHotObject;
        var rowItem = 1;
        if(ringNewMusics.length > 0){
            newHotRingHtml += "<div class=\"mg-tab-item\" style=\"display:"+ (ringType == "0" ? "block" : "none") +"\">";
            newHotRingHtml += "     <ul class=\"mg-tab-list\">";
            for(var i=0;i<ringNewMusics.length;i++){
                var tmpRingType = ringNewMusics[i].type;
                if(ringType == tmpRingType){
                    var musicId = ringNewMusics[i].id;
                    var musicPic = ringNewMusics[i].ringUrl;
                    var ringLongName = ringNewMusics[i].ringName;
                    var ringShortName = ringNewMusics[i].ringName;
                    var singLongEr = ringNewMusics[i].singEr;
                    var singShortEr = ringNewMusics[i].singEr;
                    //var audition = "http://www.js.10086.cn/my/iportal/page/colorRingNew/colorRingListen.jsp?id="+musicId+ "&pic="+musicPic; 
                    var audition = "./COLORRING_MUSIC.html?musicId=" +musicId+ "&musicPic=" +musicPic+ "";
                    if(ringShortName.length > 8){
                        ringShortName = ringShortName.substr(0,8) + "...";
                    }
                    
                    if(singShortEr.length > 3){
                        singShortEr = singShortEr.substr(0,3) + ".";
                    }
                    
                    newHotRingHtml += "<li>";
                    newHotRingHtml += "     <span class=\"song-number\">0"+ rowItem.toString() +"</span>";
                    newHotRingHtml += "     <span class=\"song-name\" title=\""+ ringLongName +"\"><a href=\""+ audition +"\" target=\"_blank\">"+ ringShortName +"</a></span>";
                    newHotRingHtml += "     <span class=\"song-songer\" title=\""+ singLongEr +"\">"+ singShortEr +"</span>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-play\" title=\"试听\"></a>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-ring\" title=\"订购\"></a>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-download\" title=\"下载\"></a>";
                    newHotRingHtml += "</li>";
                    rowItem++;
                }
            }
            
            newHotRingHtml += "         </ul>";           
            newHotRingHtml += "</div>";
        }
        
        return newHotRingHtml;
    },
    
    /**
     * 初始新歌、热榜彩铃 未登录左边
     * @param {} newHotObject
     * @param {} colItem - 区域
     * @return {}
     */
    initNewHotRingLeftHtml : function(newHotObject,ringType){
        var newHotRingHtml = "";
        var ringNewMusics = newHotObject;
        var rowItem = 1;
        if(ringNewMusics.length > 0){
            newHotRingHtml += "<div class=\"mg-tab-item\" style=\"display:"+ (ringType == "0" ? "block" : "none") +"\">";
            newHotRingHtml += "     <ul class=\"mg-tab-list\">";
            for(var i=0;i<ringNewMusics.length;i++){
                var tmpRingType = ringNewMusics[i].type;
                if(ringType == tmpRingType){
                    var musicId = ringNewMusics[i].id;
                    var musicPic = ringNewMusics[i].ringUrl;
                    var ringLongName = ringNewMusics[i].ringName;
                    var ringShortName = ringNewMusics[i].ringName;
                    var singLongEr = ringNewMusics[i].singEr;
                    var singShortEr = ringNewMusics[i].singEr;
                    //var audition = "http://www.js.10086.cn/my/iportal/page/colorRingNew/colorRingListen.jsp?id="+musicId+ "&pic="+musicPic; 
                    var audition = "./COLORRING_MUSIC.html?musicId=" +musicId+ "&musicPic=" +musicPic+ "";
                    if(ringShortName.length > 8){
                        ringShortName = ringShortName.substr(0,8) + "...";
                    }
                    
                    if(singShortEr.length > 3){
                        singShortEr = singShortEr.substr(0,3) + ".";
                    }
                    
                    newHotRingHtml += "<li>";
                    newHotRingHtml += "     <span class=\"song-number\">0"+ rowItem.toString() +"</span>";
                    newHotRingHtml += "     <span class=\"song-name\" title=\""+ ringLongName +"\"><a href=\""+ audition +"\" target=\"_blank\">"+ ringShortName +"</a></span>";
                    newHotRingHtml += "     <span class=\"song-songer\" title=\""+ singLongEr +"\">"+ singShortEr +"</span>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-play\" title=\"试听\"></a>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-ring\" title=\"订购\"></a>";
                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-download\" title=\"下载\"></a>";
                    newHotRingHtml += "</li>";
                    rowItem++;
                }
            }
            
            newHotRingHtml += "         </ul>";
            if(ringType ==0)
            {
            	 newHotRingHtml += "<div class=\"mg-tab-hd-music\">";
            	 newHotRingHtml += "<h2 class=\"mg-title2\">玩 转 音 乐</h2>";
            	 newHotRingHtml += "<div class=\"m-nav-icon\">";
            	 newHotRingHtml += " <a title='咪咕会员' href=\"WXYYJLB.html\"><i class=\"m-nav1\"></i>咪咕会员</a>";
            	 newHotRingHtml += " <a title='彩铃' href=\"CL.html\"><i class=\"m-nav2\"></i>彩铃</a>";
            	 newHotRingHtml += "<a title='和娱乐包' href=\"HYL.html\"><i class=\"m-nav3\"></i>和娱乐包</a>";
//            	 newHotRingHtml += "  <a href=\"CL.html\"><i class=\"m-nav4\"></i>彩铃</a>";
//            	 newHotRingHtml += " <a href=\"http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=6&fileID=440\"><i class=\"m-nav5\"></i>掌上咪咕</a>";
            	 newHotRingHtml += " </div>";             
                 newHotRingHtml += "</div>";
            }
            newHotRingHtml += "</div>";
        }
        
        return newHotRingHtml;
    },
    
    /**
     * 初始新歌、热榜彩铃 登录左边
     * @param {} newHotObject
     * @param {} colItem - 区域
     * @return {}
     */
    initNewHotRingLeftLoginHtml : function(newHotObject,ringType){
        var newHotRingHtml = "";
        var ringNewMusics = eval("("+ newHotObject + ")");;
        var rowItem = 1;
        if(ringNewMusics.length > 0){
            newHotRingHtml += "<div class=\"mg-tab-item\" style=\"display:"+ (ringType == "0" ? "block" : "none") +"\">";
            newHotRingHtml += "     <ul class=\"mg-tab-list\">";
            for(var i=0;i<ringNewMusics.length;i++){          
                    var musicId = ringNewMusics[i].CONTENTID;
                    var musicPic = "";
                    var ringLongName = ringNewMusics[i].TITLE;
                    var ringShortName = ringNewMusics[i].TITLE;
                    //var singLongEr = ringNewMusics[i].TITLE;
                   // var singShortEr = ringNewMusics[i].singEr;
                    //var audition = "http://www.js.10086.cn/my/iportal/page/colorRingNew/colorRingListen.jsp?id="+musicId+ "&pic="+musicPic; 
                    var audition = "./COLORRING_MUSIC.html?musicId=" +musicId+ "&musicPic=" +musicPic+ "";
                    if(ringShortName.length > 14){
                        ringShortName = ringShortName.substr(0,14) + "...";
                    }
                    
//                    if(singShortEr.length > 3){
//                        singShortEr = singShortEr.substr(0,3) + ".";
//                    }
                    
                    newHotRingHtml += "<li>";
                    newHotRingHtml += " <a href=\"COLORRING_MYRING.html\" target=\"_blank;\" class=\"songer-cancel\">删 除</a>";
                    newHotRingHtml += "     <span class=\"song-number\">0"+ rowItem.toString() +"</span>";
                    newHotRingHtml += "     <span class=\"song-name\" title=\""+ ringLongName +"\">"+ ringShortName +"</span>";
                    //newHotRingHtml += "     <span class=\"song-songer\" title=\""+ singLongEr +"\">"+ singShortEr +"</span>";
//                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-play\" title=\"试听\"></a>";
//                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-ring\" title=\"订购\"></a>";
//                    newHotRingHtml += "     <a href=\""+ audition +"\" target=\"_blank\" class=\"songer-download\" title=\"下载\"></a>";
                    newHotRingHtml += "</li>";
                    rowItem++;
                    if(rowItem>3)
                    {
                    	break;
                    }
              }
            
            
            newHotRingHtml += "         </ul>";
            if(ringType ==0)
            {
            	 newHotRingHtml += "<div class=\"mg-tab-hd-music\">";
            	 newHotRingHtml += "<h2 class=\"mg-title2\">玩 转 音 乐</h2>";
            	 newHotRingHtml += "<div class=\"m-nav-icon\">";
            	 newHotRingHtml += " <a title='咪咕会员' href=\"WXYYJLB.html\"><i class=\"m-nav1\"></i>咪咕会员</a>";
            	 newHotRingHtml += " <a title='彩铃' href=\"CL.html\"><i class=\"m-nav2\"></i>彩铃</a>";
            	 newHotRingHtml += "<a title='和娱乐包' href=\"HYL.html\"><i class=\"m-nav3\"></i>和娱乐包</a>";
            	// newHotRingHtml += "  <a href=\"CL.html\"><i class=\"m-nav4\"></i>彩铃</a>";
            	// newHotRingHtml += " <a href=\"http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=6&fileID=440\"><i class=\"m-nav5\"></i>掌上咪咕</a>";
            	 newHotRingHtml += " </div>";             
                 newHotRingHtml += "</div>";
            }
            newHotRingHtml += "</div>";
        }
        
        return newHotRingHtml;
    },
    
    // 初始化游戏
    initGame : function(resGameObj){
        var gameHtml = "";
        if(resGameObj.length > 0){
            gameHtml = "<ul class=\"clearfix game-tab-list\">";
            for(var i=0;i<resGameObj.length;i++){
                if(i < 9){
                    var gNameLong = resGameObj[i].GName;
                    var gNameShort = resGameObj[i].GName;
                    var gLogo = resGameObj[i].GLogo;
                    var gUrl = resGameObj[i].GUrl;
                    if(gNameShort && gNameShort.length > 7){
                        gNameShort = gNameShort.substr(0,7);
                    }
                    
                    if(i < 5){
                    	gameHtml += "<li class=\"game-tab-list-li\">";
                    }else{
                    	gameHtml += "<li class=\"game-tab-list-new\">";
                    }
                    gameHtml += "   <p class=\"game-img\">";
                    gameHtml += "       <a class=\"game-link\" href=\""+ gUrl +"\" target=\"_blank\" title=\""+ gNameLong +"\">";
                    gameHtml += "           <img  class=\"data-img\" data-src=\""+ gLogo +"\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" width=\"60\" height=\"60\" alt=\"\">";
                    gameHtml += "       </a>";
                    gameHtml += "   </p>";
                    gameHtml += "   <p class=\"game-name\">";
                    gameHtml += "       <a class=\"game-link\" href=\""+ gUrl +"\" target=\"_blank\"><span>"+ gNameShort +"</span></a>";
                    gameHtml += "   </p>";
                    gameHtml += "</li>";
                }
            }
            gameHtml += "<li class=\"game-tab-list-new\">";
            gameHtml += "   <p class=\"game-img\">";
            gameHtml += "       <a class=\"game-link\" href=\"http://g.10086.cn\" target=\"_blank\" title=\"更多游戏\">";
            gameHtml += "           <img  class=\"data-img\" data-src=\"http://img01.js.10086.cn/obsh2014/images/game/gameall.jpg\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" width=\"60\" height=\"60\" alt=\"\">";
            gameHtml += "       </a>";
            gameHtml += "   </p>";
            gameHtml += "   <p class=\"game-name\">";
            gameHtml += "       <a class=\"game-link\" href=\"http://g.10086.cn\" target=\"_blank\"><span>更多游戏</span></a>";
            gameHtml += "   </p>";
            gameHtml += "</li>";
            
            gameHtml += "</ul>";
        }
        
        $("#dGame").html(gameHtml);
    },
    // 初始化应用软件内容
    initApk : function(resApkObj){
    	var apkArrayNow = new Array();
        var apkHtml = "";
        if(resApkObj.length > 0){
            apkHtml = "<ul class=\"clearfix\">";
            for(var i=0;i<resApkObj.length;i++){
                if(i < 6){
                	apkArrayNow.push(resApkObj[i].AName);
                	
                	var aCareId = resApkObj[i].ACateId;
                	var aFileId = resApkObj[i].AFileId;
                    var aNameLong = resApkObj[i].AName;
                    var aNameShort = resApkObj[i].AName;
                    var aIcon = resApkObj[i].AIcon;
                    var aDownUrl = "http://www.js.10086.cn/clientInfoAction.do?method=clientFileInfo&cateID=" + aCareId + "&fileID="+aFileId;
    //                var aRemarks = resApkObj[i].ARemarks;
                    if("and-free免费WiFi" == aNameShort){
                    	aNameShort = "免费WiFi";
                    }
                    if(aNameShort && aNameShort.replace(/[^\x00-\xff]/g, "**").length > 8){
                        aNameShort = aNameShort.substr(0,4);
                    }
                    
                    apkHtml += "    <li>";
                    apkHtml += "        <p class=\"app-img\">";
                    apkHtml += "            <a href=\""+ aDownUrl +"\" target=\"_blank\" class=\"app-link\" title=\""+ aNameLong +"\">";
                    apkHtml += "                <img  class=\"data-img\" data-src=\""+ aIcon +"\" src=\"http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif\" width=\"60\" height=\"60\" alt=\"\">";
                    apkHtml += "            </a>";
                    apkHtml += "        </p>";
                    apkHtml += "        <p class=\"app-name\">";
                    apkHtml += "            <a href=\""+ aDownUrl +"\" target=\"_blank\" class=\"app-link\"><span>"+ aNameShort +"</span></a>";
                    apkHtml += "        </p>";
                    apkHtml += "</li>";
                }
            }
            
            apkHtml += "</ul>";
	        $("#dApk").html(apkHtml);
        }
    },
    //分享功能
	showPriviewInfo: function (busiName,busiNum,busiAdvl) {
		  $('#market_son_feixin2IPZTC').attr('href','aa');
			//分享
			var conent ="";
			var tilt = "我觉得【"+busiName+"】业务很实用，向你推荐哦！";
			if("流量套餐" == busiName){
				conent = "不仅有多个档次可以选择，开通后还能享受超低的上网资费，可以尽情的上网冲浪啦！你也快来点击看看吧！";
			}else if("3元包10M流量叠加包" == busiName){
				conent = "月末流量只能省省省……拿着手机我只能忍忍忍……童鞋，不用那么纠结啦！江苏移动推出【3元包10M流量叠加包】，开通立即生效，当月可以多次叠加开通，月末上网也能放心的爽到底！";
			}else if("手机阅读" == busiName){
				conent = "天下图书，尽在掌中。您的好友认为您也是个“书虫”，特别向您推荐江苏移动手机阅读业务：奇幻仙侠、都市言情、历史军事、美图写真、竞技游戏……总有一款是你的菜 ";
			}else if("冲浪助手" == busiName){
				conent = "你是驴友、宅男、还是宠物控？你爱下厨、游戏还是小清新？冲浪助手能满足您个性化的需求，根据您的兴趣，将当前互联网上最热门的资讯免费发送至您的手机上。绝对不能错过哦！";
			}else if("飞信" == busiName){
				conent = "QQ好友不在线，就只能对着灰色头像发呆？飞信让您随时随地找到他！好友不在线，也能将信息以短信形式发至他的手机上，在线聊天、短信群发、视频会话、文件传送。十八般武艺样样精通，赶快过来瞧瞧 ";
			}else if("两城一家" == busiName){
				conent = "假期回家不敢打电话？您out了！“两城一家”优惠到家，假期回家不换号，最低只要1毛9。猛戳http://service.js.10086.cn/#LCYJ 查看详情吧！";
			}else if("乡情网" == busiName){
				conent = "羡慕亲友之间的通话便捷实惠吗？您的好友推荐您开通【乡情网】业务，最低只要1元就可享受拨打乡镇内亲友200分钟免费电话，将省钱进行到底。";
			}else if("动感非常假期" == busiName){ 
				conent = "假期回家不敢打电话？您out了！开通【动感非常假期】，寒暑假回家不换号，最低只要1毛9。";
			}else if("定向话音包" == busiName){
				conent = "长话短说，担心话费高？您out了！您的好友推荐您开通【定向话音包】业务，每分钟只要1毛9，不用再掐分算秒，让您与家人“长话慢慢说”。";
			}else if("家庭网" == busiName){
				tilt = "";
				conent = "亲朋好友间通话低至10分钟只需1分2厘钱，家庭网（升级版）就是给你这样优惠，将省钱进行到底，详情点击http://service.js.10086.cn/JTDHYY.html便捷办理";
			}else if("同事网" == busiName){
				conent = "羡慕家人朋友集团短号的便捷实惠吗？您的好友推荐您开通【同事网】业务，最低只要1元就可以享受集团内200分钟本地主叫，将省钱进行到底。";
			}else if("亲情号码组合" == busiName){
				conent = "我发现了一个超省钱业务，开通【亲情号码组合】，每月可免费拨打组内其他成员500分钟。让您和亲友之前无限畅聊，同时帮您节省更多的话费。";
			}else if("来电提醒" == busiName){
				conent = "亲，您的好友推荐您办理【来电提醒】业务。这个业务很好用，有了它，您不会因为关机或不在服务区错过任何一通来电！";
			}else if("易查询系列" == busiName){
				conent = "亲，您想随时掌握自己的套餐使用情况吗？您的好友推荐您办理【易查询系列】业务，每周短信直接下发告诉您的套餐使用情况和进度，很好用哦。";
			}else if("短信呼" == busiName){
				conent = "亲，关机不会再错过来电了！您的好友推荐您办理【短信呼】业务。这个业务超级好用哦，有了它，您再也不会因关机或不在服务区而错过任何一通来电！";
			}else if("彩铃" == busiName){
				conent = "亲，您的好友推荐您办理【彩铃】业务，秀出自己的个性，当别人拨打您的电话时，等待您接听过程中会听到您设置的一段音乐或录音！";
			}else if("手机支付功能" == busiName){
				conent = "亲，您的好友刚刚办理了【手机支付】业务，他可以通过该账户进行网上购物和缴费啦，推荐您也来看看。";
			}else if("手机报" == busiName){
				conent = "闲来无聊？看看报刊杂志！您的好友推荐您办理【手机报】业务，您可以随时随地阅览报刊杂志，了解身边发生的各种事情。";
			}else if("号簿管家" == busiName){
				conent = "通讯录丢失？不用担心！您的好友推荐您办理【号簿管家】业务，可以随时更新备份或恢复手机通讯录，推荐您也了来使用！";
			}else if("健康百科" == busiName){
				conent = "优质生活，自己创造！您的好友推荐您办理【健康百科】业务。有了它，您每周将收到各类健康饮食资讯。";
			}
	        else if("家庭宽带" == busiName){
	            tilt = "";
	            conent = "宽带的选择有很多，但是太贵的吧，总觉得性价比不高，花那么多钱每天其实也用不了那么长的时间，不值得！马马虎虎选一个吧，又觉得太随意，这么纠结！今天给你推荐一款集多、快、好、省于一身的宽带!";
	        }
	        else{
		        //业务简介过长浏览器不兼容
		        if(busiAdvl != null && busiAdvl != "" && "<CLOB>" != busiAdvl){
		           if(busiAdvl.length > 90){
		               conent ="业务简介："+busiAdvl.substring(0,90)+"...";
		           }else{
		               conent ="业务简介："+busiAdvl;
		           }
		        }else{
		           conent ="详情请见:江苏移动网上营业厅";
		        }
			}
			
	        var href= "";
			href += "javascript:window.open('http://shuqian.qq.com/post?from=3&title='+encodeURIComponent('";
			href += tilt;
			href += "')+'&uri='+encodeURIComponent('"+document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html"+"')+'&jumpback=2&noui=1',";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.qq.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_qq2"+busiNum).attr("href",href);

			href = "javascript:window.open('http://cang.baidu.com/do/add?it='+encodeURIComponent('";
			href += tilt+"')+'&iu="+encodeURIComponent(document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html");
			href += "&fr=ien#nw=1','_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.baidu.com','"+busiNum+"','"+busiName+"'); void(0)";
			$("#market_son_baidu2"+busiNum).attr("href",href);

			//person 人人
			href = "javascript:window.open('http://share.renren.com/share/buttonshare.do?link=";
			href += encodeURIComponent(document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html");
			href += "&title='+encodeURIComponent('"+tilt;
			href += "'),'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('share.renren.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_person2"+busiNum).attr("href",href);

			href = "javascript:window.open('http://www.kaixin001.com/repaste/share.php?rtitle='+encodeURIComponent('"+tilt+"')+'";
			href += "&rcontent='+encodeURIComponent('"+conent+"。')+'&rurl="+encodeURIComponent(document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html");
			href += "','favit','');CompObshBusiPreviewComponent.recommWeb('www.kaixin001.com');void(0)";
			$("#market_son_happy2"+busiNum).attr("href",href);

			href = "javascript:window.open('http://v.t.sina.com.cn/share/share.php?appkey=&url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&title='+encodeURIComponent('"+tilt+conent+"'),";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('v.t.sina.com.cn','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_sina2"+busiNum).attr("href",href);

			href = "javascript:window.open('http://share.jianghu.taobao.com/share/addShare.htm?url='+encodeURIComponent('"+document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html"+"'),";
			href += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');CompObshBusiPreviewComponent.recommWeb('share.jianghu.taobao.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_jianghu2"+busiNum).attr("href",href);

			//shwb 搜狐微博
			href = "javascript:window.open('http://t.sohu.com/third/post.jsp?&url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&title='+encodeURIComponent('"+tilt+conent+"')+'&content=utf-8&pic=',";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('souhu.com.cn','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_shwb2"+busiNum).attr("href",href);

			//txwb 腾讯微博
			href = "javascript:window.open('http://v.t.qq.com/share/share.php?url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&title='+encodeURIComponent('"+tilt+conent+"'),";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.qq.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_txwb2"+busiNum).attr("href",href);

			//qqkj QQ空间
			href = "javascript:window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&title='+encodeURIComponent('"+tilt+conent+"'),";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.qq.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_qqkj2"+busiNum).attr("href",href);

			//feixin 飞信好友
			//http://i.feixin.10086.cn/apps/share/share?appkey=appkey&title=分享标题&content=分享内容摘要&comment=分享的理由&pageid=关联小窗id&url=页面地址&pic=分享图片地址
			href = "javascript:window.open('http://i.feixin.10086.cn/apps/share/share?appkey=appkey&title='+encodeURIComponent('";
			href += tilt;
			href += "')+'&content=&comment='+encodeURIComponent('";
			href += conent;
			href +="')+'&pageid=&pic='+encodeURIComponent('";
			href += compObshFloorYlComponent.busiIconInfo;
			href += "')+'&url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "'),"
			href += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');CompObshBusiPreviewComponent.recommWeb('feixin.10086.cn','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_feixin2"+busiNum).attr("href",href);

			//139shuoke 139说客
			href = "javascript:window.open('http://shequ.10086.cn/share/share.php?tl=&source=&title='+encodeURIComponent('";
			href += tilt+conent;
			href += "')+'&url='+encodeURIComponent('";
			href +=	document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "'),";
			href += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');CompObshBusiPreviewComponent.recommWeb('shequ.10086.cn','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_139shuoke2"+busiNum).attr("href",href);

			//bdkj 百度空间
			href = "javascript:window.open('http://apps.hi.baidu.com/share/?url='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&title='+encodeURIComponent('"+tilt+conent+"'),";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.baidu.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_bdkj2"+busiNum).attr("href",href);

			//gmail;
			href = "javascript:window.open('https://mail.google.com/mail/?ui=1&view=cm&fs=1&tf=1&su='+encodeURIComponent('";
			href += tilt+conent;
			href += "')+'&body='+encodeURIComponent('";
			href += document.location.href.substring(0,document.location.href.lastIndexOf("/"))+"/"+busiNum+".html";
			href += "')+'&shva=1&ov=0',";
			href += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');CompObshBusiPreviewComponent.recommWeb('www.google.com','"+busiNum+"','"+busiName+"');void(0)";
			$("#market_son_gmail2"+busiNum).attr("href",href);
	},
	/**
	 * 喜欢弹出框
	 * @param obj
	 */
	showLove : function(obj){
//		var mobile = CompObshHeaderComponent.loginUserInfo.userMobile;
//		if(mobile == null){
//			window.location.href = "./login.html?url=index.html";
//			return;
//		}
//		if($(obj).hasClass("business-liked")){
//			$("#loveDiv").show();
//		}else{
//			$(obj).css("business-liked");
//		}
	}
});

var CompObshFloorKdComponent = BmonPage.createComponent('compObshFloorKd')

$.extend(CompObshFloorKdComponent, {
	id : 'compObshFloorKd',
	name : '宽带业务首页',
	cityId : '',
	bandWidthArg : 'ALL',
	bandTypeArg : 'ALL',
	newHtml: '',
	renewHtml: '',
	marketInfo : [],
	bandWidthTSNext: '12',
	init : function(result)
	{
//		//业务插码结束
		if (result && result.resultCode == "0")
		{
			CompObshFloorKdComponent.showBisiInfo(result.resultObj);
		}
		else if(result.systemCode == "-200010")
		{
			CompObshFloorKdComponent.showBizInfoNull();
		}
		else if(result.resultCode=="dataerror"){
			CompObshFloorKdComponent.showTemp();
		}
		else
		{
			CompObshFloorKdComponent.showTemp();
		}
		lazyLoad("compObshFloorKd");
	},
	showBisiInfo : function(obj){
		var cityId = obj.loginCity; //用户地市编码
		CompObshFloorKdComponent.cityId = cityId;
		var address=obj.address;//用户宽带地址
		var type = "3"; //1续费 3新装
		if (address!=null&&address!="") {  //登陆后续费用户
			type = "1";
			CompObshFloorKdComponent.bandWidthTSNext = obj.bandWidthTSNext;
		}else{         //登陆后新装用户
			type = "3";
		}
		
		var markUrl = "./market/queryBroadbandMarketForCommon.do";
//    	var markUrl ="./market.json";
    	var _param = {cityCode:cityId};
    	var jqxhr = $.post(markUrl, _param, function(data) {
            // 执行页面渲染操作
            if (data.success) {
            	if(data.result.length == 0 || data.result == "") {
            		CompObshFloorKdComponent.showBizInfoNull();
            	} else {
            		var dataMarketObj = data.result;
                    var marketInfos = null;
                    marketInfos = dataMarketObj;
                    CompObshFloorKdComponent.marketInfo = marketInfos;
                    CompObshFloorKdComponent.initMarketInfoHtml(marketInfos,type);
            	}
            } 
    	});
		
	},
	showBizInfoNull : function(){
		$('#broadband-main').empty();
		var strText="<div class='kuandai-center'>";
		strText+="<div class='kuandai-center-01'>";
		strText+="<a title='299元包年' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xz' target='_blank'>";
		strText+="办宽带不排队，快！<br />";
		strText+="办宽带有优惠，省！<br />";
		strText+="宽带包年任性用，爽！<br />";
		strText+="</a>";
		strText+="</div>";
		strText+="<div class='kuandai-center-02'>";
		strText+="</div>";
		strText+="<div class='kuandai-center-03'>";
		strText+="<a title='续航服务，始终如一' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xf' target='_blank'>续航服务，始终如一</a>";
		strText+="<a title='说提速，就提速' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=ts' target='_blank'>说提速，就提速</a>";
		strText+="</div>";
		strText+="</div>";
	    $('#broadband-main').html(strText);
	},
	showTemp: function(){
		$('#broadband-main').empty();
		var strText="<div class='kuandai-center'>";
		strText+="<div class='kuandai-center-01'>";
		strText+="<a title='299元包年' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xz' target='_blank'>";
		strText+="办宽带不排队，快！<br />";
		strText+="办宽带有优惠，省！<br />";
		strText+="宽带包年任性用，爽！<br />";
		strText+="</a>";
		strText+="</div>";
		strText+="<div class='kuandai-center-02'>";
		strText+="</div>";
		strText+="<div class='kuandai-center-03'>";
		strText+="<a title='续航服务，始终如一' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xf' target='_blank'>续航服务，始终如一</a>";
		strText+="<a title='说提速，就提速' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=ts' target='_blank'>说提速，就提速</a>";
		strText+="</div>";
		strText+="</div>";
	    $('#broadband-main').html(strText);
    },
    initMarketInfoHtml : function(marketObj,type){
    	var xzmarketInfoArr = []; //新装营销案数组(排序用)
    	var xfmarketInfoArr = []; //续费营销案数组(排序用)
    	var marketInfoEle = {};
    	var bandWidthArg = CompObshFloorKdComponent.bandWidthArg;//带宽条件
    	var bandTypeArg =CompObshFloorKdComponent.bandTypeArg;//类型条件
    	$.each(marketObj,function(i,item){
    		if(item.type == 3 ){ //新装
    			var broadbandType = 3;
    			var firstId = item.firstId;
    			var secondList = item.secondList;
    			$.each(secondList,function(j,item){
    				var bizList = item.bizList;
					var secondId = item.secondId;
					var money = item.money;
					var secondName = (item.secondName.length >= 21 ?item.secondName.substr(0,18)+"..." : item.secondName);
					var fullName = item.secondName;
					var bandType = $.trim(item.broadbandType);
					var bandWidth2 = item.bandwidth;
					var agreementTime = item.agreementTime + (item.agreementUnit==null?"":item.agreementUnit);   //时间 
					var customIntroduce = item.customIntroduce==null?"":item.customIntroduce; //客户化介绍
					var giftInfo = item.giftInfo==null?"":item.giftInfo;
					var isRecommend = item.isRecommend; //0空 1热销 2特惠 3推荐
					var cornerStr = "";
					if(isRecommend == '3'){
						cornerStr = "<div class='kuandai-item-corner'></div>";
					}else if(isRecommend == '1'){
						cornerStr = "<div class='kuandai-item-corner kuandai-item-hot'></div>";
					}
					
					if(bandType==bandTypeArg || bandTypeArg =='ALL'){ //筛选条件-类型
						if(item.bizList.length>0){
	    					$.each(bizList,function(k,item){
    							var bizId = item.bizId;
    							var bizName = item.bizName;
    							var bandWidth = item.bandwidth;
    							if(bandWidth==bandWidthArg || bandWidthArg =='ALL'){ //筛选条件-带宽
    								if(bandType ==1 || bandType == 3 || bandType ==4){
    									var newHtmlTemp = "";
        								newHtmlTemp += "<li class='kuandai-login-item'>";
        								newHtmlTemp += "<div class='kuandai-login-single'>新装</div>";
        								newHtmlTemp += "<div class='kuandai-login-detail'>";
        								newHtmlTemp += "<em class='detail-sign'>"+bandWidth+"M</em>";
        								newHtmlTemp += "<img title='"+secondName+"' class='detail-image' src='http://files01.js.10086.cn/obsh2014/common/module/broadband1015/kuandai-"+bandWidth+".gif'>";
        								newHtmlTemp += "<span class='detail-mask' style='display: none;'></span>";
        								newHtmlTemp += "<div class='detail-des' style='display: none;'></div>";
        								newHtmlTemp += "</div>";
        								newHtmlTemp += "<div class='kuandai-item-info'>";
        								newHtmlTemp += "<p>"+secondName+"</p>";
        								newHtmlTemp += "</div>";
        								newHtmlTemp += "<div class='kuandai-item-cmd'>";
        								newHtmlTemp += "<p class='cmd-price'>充值<em>"+money+"</em>元/"+agreementTime+"</p>";
        								newHtmlTemp += "<a  target='_blank' href='./WLANHANDLENEW.html?broadbandType="+broadbandType+";firstId="+firstId+";secondId="+secondId+";bizId="+bizId+";bandType="+bandType+";cityCode="+CompObshFloorKdComponent.cityId+"'>立即抢购</a>";
        								newHtmlTemp += "</div>";
        								newHtmlTemp += cornerStr;
        								newHtmlTemp += "</li>";
        								//为了营销案排序 将排序参数和页面拼装的html加到数组中，html重新用临时字符收集防止营销案重复
        								marketInfoEle={'money':money,'bandwidth':bandWidth,"html":newHtmlTemp,"type":"3"};
        								xzmarketInfoArr.push(marketInfoEle);
    								}
    							}
	    					});
	    				}
					}
    			});
    		}else if(item.type == 1 ){//续费
    			var broadbandType = 1;
    			var firstId = item.firstId;
    			var secondList = item.secondList;
    			$.each(secondList,function(j,item){
    				var bizList = item.bizList;
					var secondId = item.secondId;
					var money = item.money;
					var secondName = (item.secondName.length >= 21 ?item.secondName.substr(0,18)+"..." : item.secondName);
					var fullName = item.secondName;
					var bandType = $.trim(item.broadbandType);
					var bandWidth2 = item.bandwidth;
					var agreementTime = item.agreementTime + (item.agreementUnit==null?"":item.agreementUnit);
					var customIntroduce = item.customIntroduce==null?"":item.customIntroduce;
					var giftInfo = item.giftInfo==null?"":item.giftInfo;
					var isRecommend = item.isRecommend; //0空 1热销 2特惠 3推荐
					var cornerStr = "";
					if(isRecommend == '3'){
						cornerStr = "<div class='kuandai-item-corner'></div>";
					}else if(isRecommend == '1'){
						cornerStr = "<div class='kuandai-item-corner kuandai-item-hot'></div>";
					}
					
					if(bandType==bandTypeArg || bandTypeArg =='ALL'){ //筛选条件-类型
						if(item.bizList.length>0){
	    					$.each(bizList,function(k,item){
	    						if(bandType != 2 && bandType != 3){
	    							var bizId = item.bizId;
	    							var bizName = item.bizName;
	    							var bandWidth = item.bandwidth;
	    							if(bandWidth==bandWidthArg || bandWidthArg =='ALL'){ //筛选条件-带宽
	    								var renewHtmlTemp = "";
	    								renewHtmlTemp += "<li class='kuandai-login-item'>";
	    								renewHtmlTemp += "<div class='kuandai-login-single'>续费</div>";
	    								renewHtmlTemp += "<div class='kuandai-login-detail'>";
	    								renewHtmlTemp += "<em class='detail-sign'>"+bandWidth2+"M</em>";
	    								renewHtmlTemp += "<img title='"+secondName+"' class='detail-image' src='http://files01.js.10086.cn/obsh2014/common/module/broadband1015/kuandai-"+bandWidth2+".gif'>";
	    								renewHtmlTemp += "<span class='detail-mask' style='display: none;'></span>";
	    								renewHtmlTemp += "<div class='detail-des' style='display: none;'></div>";
	    								renewHtmlTemp += "</div>";
	    								renewHtmlTemp += "<div class='kuandai-item-info'>";
	    								renewHtmlTemp += "<p>"+secondName+"</p>";
	    								renewHtmlTemp += "</div>";
	    								renewHtmlTemp += "<div class='kuandai-item-cmd'>";
	    								renewHtmlTemp += "<p class='cmd-price'>充值<em>"+money+"</em>元/"+agreementTime+"</p>";
	    								renewHtmlTemp += "<a target='_blank' href='./market/index.html?id="+firstId+"'>立即抢购</a>";
	    								renewHtmlTemp += "</div>";
	    								renewHtmlTemp += cornerStr;
	    								renewHtmlTemp += "</li>";
        								marketInfoEle={'money':money,'bandwidth':bandWidth,"html":renewHtmlTemp,"type":"1"};
        								xfmarketInfoArr.push(marketInfoEle);
	    							}
	    						}
	    					});
	    				}
					}
    			});
    		}
    	});
		var n = CompObshFloorKdComponent.bandWidthTSNext;
		
		var price={"10":"10元","12":"15元","20":"20元","50":"40元","100":"60元"};
     	var ywcode = {"10":"KDTSB_10Y","12":"KDTSB_15Y","20":"KDTSB_20Y","50":"KDTSB_40Y","100":"KDTSB_60Y"};
		var speedHtml  ="";
		speedHtml += "<li class='kuandai-login-item'>";
		speedHtml += "<div class='kuandai-login-single'>提速</div>";
		speedHtml += "<div class='kuandai-login-detail'>";
		speedHtml += "<em class='detail-sign'>"+n+"M</em>";
		speedHtml += "<img class='detail-image' src='http://files01.js.10086.cn/obsh2014/common/module/broadband1015/kuandai-"+n+".gif'>";
		speedHtml += "<span class='detail-mask' style='display: none;'></span>";
		speedHtml += "<div class='detail-des' style='display: none;'></div>";
		speedHtml += "</div>";
		speedHtml += "<div class='kuandai-item-info'>";
		speedHtml += "<p>提速至"+n+"M</p>";
		speedHtml += "</div>";
		speedHtml += "<div class='kuandai-item-cmd'>";
		speedHtml += "<p class='cmd-price'><em>"+price[n]+"</em>/月</p>";
		speedHtml += "<a target='_blank' href='./KDTS.html?YWCODE="+ywcode[n]+"'>立即抢购</a>";
		speedHtml += "</div>";
		speedHtml += "</li>";
		
    	
    	CompObshFloorKdComponent.newHtml = CompObshFloorKdComponent.marketInfoSort(xzmarketInfoArr,type); //新装营销案排序
    	CompObshFloorKdComponent.renewHtml = CompObshFloorKdComponent.marketInfoSort(xfmarketInfoArr,type); //续费营销案排序
		var finalHtml = "<div class='kuandai-login'><ul class='clearfix'>";
		if(type =="1"){
			finalHtml += CompObshFloorKdComponent.renewHtml;
			finalHtml += speedHtml;
		}else if(type =="3"){
			finalHtml += CompObshFloorKdComponent.newHtml;
		}
		finalHtml += "</ul></div>";
		$('#broadband-main').empty();
		$('#broadband-main').html(finalHtml);
		
		var len = $(".kuandai-login li").length;
		if(len == "0"){
			$('#broadband-main').empty();
			var strText="<div class='kuandai-center'>";
			strText+="<div class='kuandai-center-01'>";
			strText+="<a href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xz' target='_blank'>";
			strText+="办宽带不排队，快！<br />";
			strText+="办宽带有优惠，省！<br />";
			strText+="宽带包年任性用，爽！<br />";
			strText+="</a>";
			strText+="</div>";
			strText+="<div class='kuandai-center-02'>";
			strText+="</div>";
			strText+="<div class='kuandai-center-03'>";
			strText+="<a title='续航服务，始终如一' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=xf' target='_blank'>续航服务，始终如一</a>";
			strText+="<a title='说提速，就提速' href='./WLANHANDLENEW.html?clickMode=openNewYM;kindOfMarket=ts' target='_blank'>说提速，就提速</a>";
			strText+="</div>";
			strText+="</div>";
			$('#broadband-main').html(strText);
		}else if(len == "1"){
			$(".kuandai-login").css("height","0px");
			$('#broadband-main').append("<div><img src='http://files01.js.10086.cn/obsh2014/common/module/broadband1015/big_kdyh.jpg'/></div>");
		}else if(len == "2"){
			$(".kuandai-login").css("height","0px");
			$('#broadband-main').append("<div><img src='http://files01.js.10086.cn/obsh2014/common/module/broadband1015/small_kdyh.jpg'/></div>");
		}
		
    },
    marketInfoSort : function(marketInfoArr,type){ //营销案排序
    	var htmlTemp ="";
    	var i = 0;
    	var marketInfoEleTemp = {};
    	while( i < marketInfoArr.length -1){
    		var j = i+1;
    		if(marketInfoArr[i].bandwidth > marketInfoArr[j].bandwidth){ //按带宽升序
    			marketInfoEleTemp = marketInfoArr[i];
    			marketInfoArr[i] = marketInfoArr[j];
    			marketInfoArr[j] = marketInfoEleTemp;
    			i = 0;
    			continue;
    		}else if(marketInfoArr[i].bandwidth == marketInfoArr[j].bandwidth){//带宽相同按金额升序
    			if(marketInfoArr[i].money > marketInfoArr[j].money){
    				marketInfoEleTemp = marketInfoArr[i];
        			marketInfoArr[i] = marketInfoArr[j];
        			marketInfoArr[j] = marketInfoEleTemp;
        			i = 0;
        			continue;
    			}
    		}
    		i++;
    	}
//		var len = type =="1"?2:3;
    	var len = type == "1" ? (marketInfoArr.length > 2 ? 2 : marketInfoArr.length) : (marketInfoArr.length > 3 ? 3 : marketInfoArr.length);
		for(i = 0; i < len; i++){	
    		htmlTemp += marketInfoArr[i].html;
    	}
    	return htmlTemp;
    }
    /*showBisiInfo : function(obj)
	{
		var address=obj.address;
		$('#broadband-main').empty();
		if (address!=null&&address!="") {  //登陆后续费用户
			address = address.replace(/\d+/g, '***');
			var strText="";
			strText+="<div class='broadband-cate-link'>";
			strText+="<div class='broadband-install'>";
			strText+="<a id='xfaimg' class=''  href='./WLANHANDLENEW.html' target='_blank'><img  id='blockimg2' class='data-img' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif ' data-src='http://img01.js.10086.cn/obsh2014/common/upload/index-broadband-renewal.jpg'  width='375' height='175' alt=''/></a>";
			strText+="<a id='xfa' href='./WLANHANDLENEW.html' target='_blank'><div class='broadband-info broadband-info-s'>";
			strText+="<p class='broadband-category'><span id='xfspeed'>10M起</span></p>";
			strText+="<p class='broadband-price-time'>家庭最低消费<span id='xfmoney' style='color:red;'>98</span>元起</p>";
     		strText+="   </div></a>";
			strText+=" </div>";
			strText+="<div class='broadband-install'>";
			strText+="   <a href='http://service.js.10086.cn/KDTS.html' class='' target='_blank'><img  id='blockimg3' class='data-img' src='http://img02.js.10086.cn/obsh2014/common/upload/lazyload.gif ' data-src='http://img01.js.10086.cn/obsh2014/common/upload/index-broadband-speed-s.jpg'   width='375' height='175' alt=''/></a>";
			strText+="   <a href='http://service.js.10086.cn/KDTS.html' target='_blank'><div class='broadband-info broadband-info-s'>";
			//原接口调用
			strText+="<div id='tstextdiv'><p class='broadband-category'>提速至:<span style='color:red;' id='tsspeednext'>20M</span></p>";
			strText+="<p class='broadband-price-time' id='oldtsspeed'>原带宽:<span style='color:red;' id='tsspeed'>4M</span></p></div>";
//			strText+="<div id='tstextdiv'><p class='broadband-price-time'><span  class='price'>380</span>元<span  class='time'>13</span>个月</p>";
//			strText+="<p class='broadband-give'><span id='tsspeed'>5M</span></p></div>";
			strText+="  </div></a>";
			strText+="</div>";
			strText+="</div>";
			
			strText+="<div class='broadband-renewal-info'>";
			strText+="<div class='renewal-address'>";
			strText+="<span class='address-key' ><img src='http://img01.js.10086.cn/obsh2014/common/module/floor-broadband/renewal_03.jpg'  alt=''/></span>";
			strText+="<span class='address-val' >";
			strText+=" <p class='address-tit'>续费地址</p>";
			strText+=" <p class='address-info' id='address-val'>徐州地区徐州市区泉山区矿山东路合群新村二010栋1单元401室a</p>";
			strText+=" <a href='./WLANHANDLENEW.html' class='address-btn'>现在办理</a>";
			strText+="</span>";
			strText+="</div>";
			strText+="</div>";
			
			$('#broadband-main').html(strText);
            $('#address-val').text(address);
            
			//个人消费
			var viewnameXF=obj.viewnameXF;
			var broadbandTypeXF=obj.broadbandTypeXF;
			var firstIdXF=obj.firstIdXF;
			var secondIdXF=obj.secondIdXF;
			var bizIdXF=obj.bizIdXF;
			var bandTypeXF=obj.bandTypeXF;
			var xfspeed=obj.xfspeed;  //速度
			var xfmonth=obj.xfmonth;  //月份
			var xfmoney=obj.xfmoney;  //金钱
			var bandWidthTS=obj.bandWidthTS;//当前带宽
            //判断是否有提速
                if(bandWidthTS==undefined||bandWidthTS==0||bandWidthTS==""){
                	$('#oldtsspeed').text("");
                }else{
                	 $('#tsspeed').text(bandWidthTS+"M");
                }
               
			
		}else{         //登陆后新装用户
			var strText="<div class='broadband-cate-link'>";
			strText+="<div class='broadband-install'>";
			strText+="<a class='' href='./WLANHANDLENEW.html'>";
			strText+="<img class='data-img'  width='375' height='175' alt='' data-src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_left-529.jpg' src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_left-529.jpg' style='opacity: 1;'>";
			strText+="<div class='broadband-info broadband-info-s posrela'>";
			strText+="<p class='bord_unm posab-year'><em>包年</em></p>";
			strText+="<div class='bord_unm posab-4'><i>10M</i></div>";
			strText+="<div class='money-bord'>299</div>";
			strText+="<p class='bord-tips'>包一年宽带</p>";
			strText+="</a>";
			strText+="</div>";
			strText+="</div>";
			strText+="<div class='broadband-renewal'>";
			strText+="<a class='' href='./WLANHANDLENEW.html'>";
			strText+="<img class='data-img'  width='375' height='175' alt='' data-src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_right-529.jpg' src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_right-529.jpg' style='opacity: 1;'>";
			strText+="<div class='broadband-info broadband-info-s posrela'>";
			strText+="<p class='bord_unm posab-year' style='left:296px;'><em>包年</em></p>";
			strText+="<p class='bord_unm posab-4'><i>10M</i></p>";
			strText+="<p class='money-bord'>399</p>";
			strText+="<p class='bord-tips'>包两年宽带</p>";
			strText+="</a>";
			strText+="</div>";
			strText+="</div>";
			strText+="</div>";
			strText+="<div class='broadband-speed'>";
			strText+="<a class='' href='./WLANHANDLENEW.html'>";
			strText+="<img class='data-img'  width='750' alt='' data-src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_bottom-529.jpg' src='http://img01.js.10086.cn/obsh2014/common/upload/bord_modfi_bottom-529.jpg' style='opacity: 1;'>";
			strText+="<div class='broadband-info broadband-info-s posrela'>";
			strText+="<p class='bord_unm posab-year' style='left: 466px;top: -46px;'><em>包年</em></p>";
			strText+="<p class='bord_unm posab-4' style='left: 308px;'><i>8M</i></p>";
			strText+="<p class='money-bord'>免费</p>";
			strText+="<p class='bord-tips'>用宽带，家庭最低消费</p>";
			strText+="</a>";
			strText+="</div>";
			strText+="</div>";
			strText+="</div>";
		$('#broadband-main').html(strText);
		}
	}*/
});

// 权限控制组件
var privilegeComponent = BmonPage.createComponent('privilege');
$.extend(privilegeComponent,{
	id : 'privilege',
	name : '权限控制组件',
	init : function(result){
		var hash = window.location.hash;
		var pageType = "home";
		// 宽带类业务
		if(hash == "#lan_home"){
			pageType = "lan";
		// 固定电话业务
		} else if(hash == "#phone_home"){
			pageType = "phone";
		// 代理商业务
		} else if( hash == "#agent_home"){
			pageType = "agent";
		}

		if(result){
			if(result[pageType]){
				window.location.hash = "#" + result[pageType];
			}
		}
	}
});

//首页头部组件
var headerComponent = BmonPage.createComponent('headerNew');

$.extend(headerComponent,{
	id : 'header',
	name : '首页头部组件',
    searchType:'busi',
	init : function(result){
		$("*").bind("click", function()
        {
            navComponent.cancelSearch();
        });
		//地市选择
		this.headerCitySelector(result);
		//搜索tab切换
		this.headerSearchSelector();
		//IE9以下版本的搜索框提示信息，非IE下用HTML5新增的placeholder属性实现
		//this.headerSearchIETip();
		quickShowStart();
	},

	//头部城市切换
	headerCitySelector : function(result){
		$("#header .header-city-thisCity").show();
		$("#header .header-city-thisPro").show();
		if(result && result.resultCode == '0' && result.resultObj){
			var citySelector_thisCityName = $("#header-city-thisCityName");
			var citySelector_list = $("#header-city-cityList");
			if(result.resultObj.city){
				citySelector_thisCityName.html(getCityName(result.resultObj.city));
			}
			if(result.resultObj.isLogin == '0'){
				//菜单项点击
				citySelector_list.find("a").click(function(){
				    var cityName = $(this).html();
					citySelector_list.hide();
					setCookie("city",getCityNum(cityName),10 * 365 * 24 * 60 * 60 * 1000);
					// 解决IE6不能刷新页面
					window.location.reload(true);
				});
				$("#header").find(".header-city-thisCity").css("cursor","pointer");
				pub_showSubMenu(".header-city",".header-city-thisCity",".header-city-cityList","click","selected");
			} else if(result.resultObj.isLogin == '1'){
				$("#header").find(".header-city-thisCity").css("cursor","default").unbind('click');
				citySelector_list.find("a").unbind('click');
			}
		}
	},

	//头部搜索框
	//搜索tab切换
	headerSearchSelector : function(){
		var searchSelector = $(".header-search-main");
		var searchSelector_thisType = searchSelector.find(".header-search-type");
 		var searchSelector_list = searchSelector.find(".header-search-tab");
 		var searchSelector_list_li = searchSelector.find(".header-search-tab li");

 		//菜单项点击
		searchSelector_list_li.click(function(){
    		var searchType = $(this).html();
			searchSelector_thisType.html(searchType);
    		searchSelector_list_li.removeClass("selected");
    		$(this).addClass("selected");
			searchSelector_list.hide();
		});
		pub_showSubMenu(".header-search-main",".header-search-type",".header-search-tab","click","selected");
	}

});

//网点组件
	var spmComponent = BmonPage.createComponent('spmManage');
	$.extend(spmComponent,
	{
	id : 'spmManage',
	name : '网点用户信息',
  loadOnce: true,
	init : function(result)//初始化页面数据
	{
	//	spmComponent.refresh();
	//	refreshTimer = setInterval("spmComponent.refresh()", 3000);

		if(result.resultCode == 0 && result.resultObj != null)
		{
			spmComponent.refresh(result.resultObj);

		}else
		{
			if (result.systemCode=="-200010") {
				// $("#zxdxxfsClick").hide();
				BmonPage.showFailureDialog("尊敬的导购员！您的用户信息已经丢失，请重新登录网点。");
				location = "http://service.js.10086.cn/js_nspm_service/login.jsp";
			}
			else
			{
				BmonPage.showFailureDialog(result.resultMsg, null);
			}
		}
	},
	refresh : function(obj){
	//	$.post(GLOBAL_INFO.ACTION_URI,{jsonParam:'[{"dynamicURI":"/spmManage","dynamicParameter":{"method":"nRefreshSpmUserInfo"},"dynamicDataNodeName":"spmComponentNode"}]'},function(obj){
			if(obj)
			{
				$("#spmFrame").show();
				$("#spmUserId").text(obj.userId);

				var channelId = "zzty";
				var param_val = encodeURIComponent("operaterid=" + obj.userId + "&operaterid_cityid="+obj.cityid+"&service_name=&belong_unit=&channelId="+channelId);
				//$("#param").val(param_val);
				$("#spmPassword").val(obj.password);
				$("#spmUserCity").val(obj.cityid)
				$("#spmUserGroup").val(obj.userType)

				$("#wssc_click1").attr("href","http://www.js.10086.cn/oldsc/mall_channel/small.do?param="+param_val);

				//村组回到老板隐藏
				$("#goHis_href").hide();

				//村组跳集团
				$("#jtyh_href").attr("href","http://www.js.10086.cn/group/index/index.html?param="+param_val);

			}
       },

     //网点用户退出
   	logout : function(){
   		$.post('/js_nspm_service/businessDeal.do',{"reqHandle":"logoutHandle","busiNum":"LOGOUT"},function(obj){
   			if(obj)
   			{
   				var retObj = eval("(" + obj + ")");
   				//主流程是否成功
   				var isSuccess = retObj.s;
   				//主流程成功
   				if(isSuccess){
   					//业务逻辑返回结果
   					var logicResult = retObj.l;
   					if(logicResult){
   						//业务逻辑是否成功
   						var isLogicSuccess=logicResult.s;
   						if(isLogicSuccess){
   							document.location.href = "http://service.js.10086.cn/js_nspm_service/login.jsp";
   						}
   					}
   				}
   				//主流程失败
   				else{
   				}
   			}
            })
	   }

	});

	//话务员组件
	var hwyComponent = BmonPage.createComponent('hwyManage');
	$.extend(hwyComponent,
	{
		id : 'hwyManage',
		name : '话务员用户信息',
	    loadOnce: true,
		init : function(result)//初始化页面数据
		{
			if(result.resultCode == 0 && result.resultObj != null)
			{
				hwyComponent.refresh(result.resultObj);

			}else
			{
				if (result.systemCode=="-200010") {
					BmonPage.showFailureDialog("尊敬的话务员！您的用户信息已经丢失，请重新登录。");
					location = "/hwy/login.jsp";
				}
				else
				{
					BmonPage.showFailureDialog(result.resultMsg);
				}
			}
		},
		refresh : function(obj){
			if(obj)
			{
				$("#hwyFrame").show();
				$("#hwyUserId").text(obj.userId);

				$("#hwyPassword").val(obj.password);
				$("#hwyMobileNum").val(obj.mobileNum);

				//村组回到老板隐藏
				$("#goHis_href").hide();
			}
	    },

		//话务员用户退出
		logout : function(){
			$.commonReq({
				data : {
					"reqUrl"  : "getHwyManageInfo",
		            "operNum" : "1"
				},
				success:function(data){
					window.location.reload(true);
					var data = eval("(" + result + ")");
					if(data && data.resultCode == '0')
					{
						location = "/hwy/login.jsp";
					}
				}
			});
		 }
	});

//登录后用户信息
var UserInfo = {
	userMobile : null,
	userName : null,
	balance : null,
	score : null,
	mPoint : null,
	brandJbNum : null,
	brandJbName : null,
	brandBusiName : null,
	userCity : null,
    loginSource : null,
    isGroupMobile : null,
    surveyStauts : null,
	clear : function(){
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

// 首页登录组件
var loginComponent = BmonPage.createComponent('loginNew');

$.extend(loginComponent,{
	id : 'login',
	name : '首页登录组件',
	passwordType : 1, // 密码类型
	userInfo : UserInfo,
	isNeedVerifyCode : false, // 是否需要验证码
	lastGetVerifyCodeTime : null, // 最后一次获取短信验证码的时间
	//imageVerifyCodeShow : true,
	savePassword : false,
	counterId : null,
	count : null,
	divCityHtml : "",
	divCityListHtml : "",
//	hidetimer : null,
//	hidetimeSms : null,
	init : function(result){
		this.passwordType = 1;
		//this.topBarsiteNav();
		//this.topBarweibo();
		this.loadPageEvent();
		this.showLoginInfo(result);
		this.getLoginResult(result.user);
		this.isGroupMobile(result);
		//this.get139Mail(result);
		this.getClient(result);
		$("#currentD").val(result.currentD);
		//navComponent.headerSearchIETip(result.user.resultObj.brand_jbNum);
		// 登录提示框
		//this.showLoginTips();
		// 集团内嵌页面跳转使用
		this.getPhone(result.index1_phone);
	},

	/**
	 * 集团内嵌页面跳转使用
	 */	
	getPhone : function(phone)
	{
	    if (phone != undefined && phone != null)
	    {
	    	GlobalDialog.showLoginDialog();
			$("#userNumber").val(phone);
			$("#userPassword").focus();
	    }
	},
	
	getLoginResult : function(result) {
		// 登录失败手机号码
		var mobile = getCookie("login_error_number_https");
		// 如果Cookie缓存登录失败手机号码为空，则直接返回，不调用登录失败回调函数
       	if(mobile == null || mobile == ""){
       		return;
       	}
       	// 清除Cookie缓存登录失败手机号码
       	setCookie("login_error_number_https","",10 * 365 * 24 * 60 * 60 * 1000);
       	// 登录失败账户类型
		var loginType = getCookie("login_error_loginType_https");
       	setCookie("login_error_loginType_https","",10 * 365 * 24 * 60 * 60 * 1000);
       	// 密码类型  1:服务密码登录  2:短信密码
       	var passwordType = getCookie("login_error_passwordType_https");
       	setCookie("login_error_passwordType_https","",10 * 365 * 24 * 60 * 60 * 1000);

		var hash = BmonPage.parseURL();
	    var nIndex = hash.indexOf('@resultCode=');
	    if (nIndex > 0)
	    {
	        var resultCode = hash.substring(nIndex + 12);
			loginComponent.loginFailedCallBack(resultCode, mobile, loginType, passwordType);
	    }
	},

	// 校验是否手机号
	/**
	 *	keydown keyup
	 * 0-9	e.which的值为48-57（按住Shift键也是该值）
	 * a-b	e.which的值为65-90
	 * A-Z	e.which的值为65-90
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
	checkIsNumber : function(e){
		var result = true;
		if($("#loginType").val() != '2'){
			result = (e.which >= 48 && e.which <=57) || e.which == 0 || e.which == 8;
		}else{
			result = (e.which >= 48 && e.which <=57) || (e.which>=97 && e.which<=122) || (e.which>=65 && e.which<=90) || e.which == 0 || e.which == 8;
		}
		return result;
	},

	// 设置页面点击事件
	loadPageEvent : function(){

		$("#userNumber").keypress(function(e){
			return loginComponent.checkIsNumber(e);
		});

		$("#userNumber").blur(function(){
		    var loginType = $("#loginType").val();
		    var mobile = $(this).val();
		    //固定号码验证
		    if(loginType == '3' && mobile && !checkFixedPhoneNumber(mobile)){
		    	$("#number-error-message").html("请输入正确电话号码").show();
			}
		    // 手机号码和代理商号码验证
		    else if((loginType == '1' || loginType == '4') && mobile && !chkMobileNumber(mobile)){
				$("#number-error-message").html("请输入正确手机号码").show();
			}
		    // 宽带账号验证
		    else if(loginType == '2' && mobile && !checkNetNumber(mobile)){
				$("#number-error-message").html("请输入正确宽带帐号").show();
			}
		    // 异网账号验证
		    else if(loginType == '5' && mobile && !chkOtherNetMobileNumber(mobile)){
				$("#number-error-message").html("请输入正确手机号码").show();
			}  
		    else{
	        	$("#number-error-message").empty().hide();
	        }
		});

		$("#userNumber").focus(function(){
			$("#number-error-message").empty().hide();
//			$("#userLogin-error-result").empty().hide();
		});

		$("#userPassword").blur(function(e){
			var password = $(this).val();
			if(password && !chkUserPwd(password)){
				$("#password-error-message").html("请输入正确密码").show();
			} else {
				$("#password-error-message").empty().hide();
			}
		});

		$("#userPassword").keypress(function(e){
			return loginComponent.checkIsNumber(e);
		});

		$("#userPassword").keyup(function(e){
			if(e.which == 13){
				loginComponent.loginPrepare();
			}
		});
		
		$("#Search_txtSearch").keyup(function(e){
			if(e.which == 13){
				navComponent.doSearch();
			}
		});

		$("#userPassword").focus(function(){
			$("#password-error-message").empty().hide();
//			$("#userLogin-error-result").empty().hide();
			if(loginComponent.passwordType == '1'){
				loginComponent.getUsrSavePwd(0);
			}
		});

		$("#verifyCode").focus(function(){
			$("#verifyCodeDiv").show();
			$("#verifyCode-error-message").empty().hide();
//			$("#userLogin-error-result").empty().hide();
//			if(loginComponent.imageVerifyCodeShow){
//				$("#verifyCodeDiv").show();
//				loginComponent.getVerifyCode();
//			}
//			loginComponent.imageVerifyCodeShow = true;
			loginComponent.getVerifyCode();
		});

		$("#verifyCode").blur(function(){
			var verifyCode = $(this).val();
			if(loginComponent.isNeedVerifyCode && verifyCode && !chkVerifyCode(verifyCode)){
				$("#verifyCode-error-message").html("请输入正确验证码").show();
			} else if(loginComponent.isNeedVerifyCode && (new Date().getTime() - loginComponent.lastGetVerifyCodeTime) > 1000 * 60 * 5){
				$("#verifyCode-error-message").html("验证码已失效，请重新获取").show();
			} else {
				$("#verifyCode-error-message").empty().hide();
			}

//			setTimeout(function(){
//				if(loginComponent.imageVerifyCodeShow){
//					$("#verifyCodeDiv").hide();
//				} else {
//					$("#verifyCode").focus();
//				}
//			},500);
		});

		$("#verifyCode").keyup(function(e){
			if(e.which == 13){
				//$("#verifyCodeDiv").hide();
				loginComponent.loginPrepare();
			}
		});

		$("#vcimg").click(function(){
			loginComponent.changeVerifyCode();
		//	loginComponent.imageVerifyCodeShow = false;

		});

		$("#verifyCodeDesc").click(function(){
			loginComponent.changeVerifyCode();
			//loginComponent.imageVerifyCodeShow = false;

		});
	},

	//获取图片验证码,两次获取时间间隔未超过5分钟则不重新获取
	getVerifyCode : function(objName){
		var currentTime = new Date().getTime();
	    if (loginComponent.lastGetVerifyCodeTime == null || currentTime - loginComponent.lastGetVerifyCodeTime > 1000 * 60 * 5)
	    {
	        this.changeVerifyCode(objName);
	    }
	},

	//更换图片验证码
	changeVerifyCode :function(objName){
	    if(objName == null || objName == '')
	        objName = "vcimg";
	    // 验证码读取中图片暂缺
	    //$("#"+objName).attr("src", "http://www.js.10086.cn/livloadfile/obsh/obsh_image/verifyCode_loading1.gif?t=201009100000");
	    loginComponent.lastGetVerifyCodeTime = new Date().getTime();
	    vcimgUrl = GLOBAL_INFO.URL_PREFIX + "/imageVerifyCode?t=new&r=" + Math.random();
	    $("#"+objName).show();
	    $("#"+objName).attr("src", vcimgUrl);
	},

	showLoginInfo : function(data){
		if(data.user){
			// 已登录
			if(data.user.resultCode == '0' && data.user.resultObj){
				$(".main-leftBar").attr("class","main-leftBar");
				$("#llyhWntjImg").show();
				$("#jcywWntjImg").show();
//				if(data.isTarget == "-1"){
//			 		this.showHomeAct(data);
//			 	}
				var cityName = getCityName(data.user.resultObj.city_jbNum);
				setCookie("city",getCityNum(cityName),365 * 24 * 60 * 60 * 1000);
				//顶部地市显示
				this.showCityPro(cityName,"1");
				var user = data.user.resultObj;
				//this.userDetailInfo();
				//显示顶部用户号码
				this.showTopUserNum(user);
				//顶部目标库用户展示卷帘广告 start
				if(data.isRecommed == "1"){
					//$("#top-slide").show();
					this.showTopBanner(data);
				}
				//顶部目标库用户展示卷帘广告 end
				//世界杯通栏信息变更
				//this.fifaBallClick();
				//this.showFifaBall(user.city_jbNum);
				//一键查询
				//$("#iframePop").attr("src","http://www.js.10086.cn/my/iportal/page/experience/experience_index.jsp");
				$("#yjcx_onclick").attr("onclick","");
				$("#yjcx_onclick").bind("click", function(){
					loginComponent.showPopYjcx();
				});
				//顶部一键查询入口
				$("#top_yjcx").attr("onclick","");
				$("#top_yjcx").bind("click", function(){
					loginComponent.showPopYjcx();
				});
				$("#lift-search").show();
				//安全卫士新引导层
				this.showUserLastDate(data);
				//安全卫士引导层下线：影响卷帘
				//this.showSearchPop(user.mobile);
				//if(CmWebtokenid){
					/*以下方法 其他渠道登录后跳至网厅 头部号码会取不到*/
					//$("#topUserNum").html(user.mobile);
					//$("#topIsLogin").html("<a href='javascript:loginComponent.logout()' style='color:#f0870c;' class='orange' id='login'>[退出]</a>");
				//}
		
				if (user.userType == '2') {
					this.showOtherUserInfo(user);
				} else if (user.userType == '3') {
					this.showOtherUserInfo(user);
				} else if (user.userType == '4') {
					this.showOtherUserInfo(user);
				} else {
					this.showUserInfo(data.user);
					this.showBalanceScore(data.user);
					//this.showUserMessage(data.message);

					// 显示登录触点营销 (账单查询，套餐使用情况，已开通业务不展示)
					if(window.location.hash.indexOf("#TCSYQK")==-1 && window.location.hash.indexOf("#ZDCX")==-1 &&
							 window.location.hash.indexOf("#TCJYWCX_CPTC")==-1){
						setTimeout("loginComponent.showLoginTouch(" + user.userType + ")", 10000);
						
					}
					
				}
			}
			// 未登录
			else{
				//首页大弹
//				this.showHomeAct(getCityNum(cityName));
				//世界杯通栏
				//this.fifaBallClick();
				//this.showHomePop4g();
				//一键查询
				$("#yjcx_onclick").attr("onclick","");
				$("#yjcx_onclick").bind("click", function(){
					BmonPage.showLoginDialog();
					$("#homeDiv").hide();
					$("#popMaskAct").hide();
					$("#popMask").show();
					//loginComponent.showPopYjcx();
				});
				//顶部一键查询入口
				$("#top_yjcx").attr("onclick","");
				$("#top_yjcx").bind("click", function(){
					BmonPage.showLoginDialog();
				});
				$("#lift-search").hide();
				//未登录状态获取用户地市
				var cityName = "";
				if(getCookie("city") != null && getCookie("city") != ""){
					cityName = getCityName(getCookie("city"));
				}
				else if(data.userCity.resultObj.city){
					cityName = getCityName(data.userCity.resultObj.city);
				}else{
					cityName = "南京"
				}
				//顶部地市显示
				this.showCityPro(cityName,"0");
				
				$("#topUserNum").html("");
				$("#topIsLogin").html("<a href=\"javascript:BmonPage.showLoginDialog('topLogin');\" style=\"color:#e40077;\" class=\"carmine\" id=\"logout\">[登录]</a>");
				
				$(".main-leftBar").attr("class","main-leftBar main-leftBar-unlogin");
				this.initPage();
				this.isNeedVerifyCode = data.user.resultObj;
				if(this.isNeedVerifyCode){
					$("#popBox-verifyCode-idType").show();
				} else {
					$("#popBox-verifyCode-idType").hide();
				}

				if($("#quickMenu").length){
					$("#quickMenu-jfcx").show();
					//$("#quickMenu-jfdh").show();
					//$("#quickMenu-mzcx").show();
					//$("#quickMenu-mzdh").show();
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
	
	showUserLastDate : function(data){
		var lastQueryDate = data.lastQeuryDate.resultObj;
		//0:标记今天使用过 不展示 ； -1 ： 表示从未使用过 提示公测中 ； 其他：展示几天未检测
		var isShowDatePop = getCookie("popUserQueryDate");
		if(lastQueryDate > 0){
			if("1" != isShowDatePop){
				$("#popLayer").show();
				$("#popLayerDays").html("尊敬的用户，您已经有<strong>" + lastQueryDate + "</strong>天没来体检了");
			}
		}else if(0 == lastQueryDate){
			$("#popLayer").hide();
		}else if(-1 == lastQueryDate){
			if("1" != isShowDatePop){
				$("#popLayer").show();
				$("#popLayerDays").html("不知道消费情况？快来戳我吧！");
			}
		}else{
		
		}
	},
	
	fifaBallClick : function(){
		var fifaBallGo=$(".fifa-ball-go"),
		fifaBallUnlogged=$(".fifa-ball-unlogged"),
		fifaBallLogged=$(".fifa-ball-logged"),
		oClose=$(".close-fifa");
		fifaBallGo.bind("click",function(){
			$(this).hide();
			fifaBallUnlogged.add(fifaBallLogged).show();
			fifaBallUnlogged.add(fifaBallLogged).animate({bottom:"0"});
		});
		
		oClose.bind("click",function(){
			fifaBallUnlogged.add(fifaBallLogged).animate({bottom:"-180px"},function(){
				if(typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.nv','TLGG','WT.event','close');}
				fifaBallUnlogged.add(fifaBallLogged).hide();
				fifaBallGo.show();
			});	
		});
	},
	
	showFifaBall : function(cityNum){
		if(window.location.hash.indexOf("#home") != -1) {
			$("#fifa_ball_unlogin").hide();
			var userCityCode = cityNum;
			if("" != userCityCode && null != userCityCode && undefined != userCityCode){
		        if(userCityCode == "NJDQ"){urlId="5875"}
		        if(userCityCode == "WXDQ"){urlId="5879"}
		        if(userCityCode == "ZJDQ"){urlId="5872"}
		        if(userCityCode == "SZDQ"){urlId="5878"}
		        if(userCityCode == "NTDQ"){urlId="5881"}
		        if(userCityCode == "YZDQ"){urlId="4182"}
		        if(userCityCode == "YCDQ"){urlId="5876"}
		        if(userCityCode == "XZDQ"){urlId="5877"}
		        if(userCityCode == "LYGDQ"){urlId="5913"}
		        if(userCityCode == "CZDQ"){urlId="5894"}
		        if(userCityCode == "TZDQ"){urlId="5897"}
		        if(userCityCode == "SQDQ"){urlId="5880"}
		        if(userCityCode == "HADQ"){urlId="5883"}
		        var titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id="+urlId;
		        $("#fifa_ball_yhhd").attr("href",titleUrl);
		        $("#fifa_ball_yhhd").bind("click", function(){
					if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','TLGG','WT.event','sdshf','WT.city',userCityCode);}
				});
	        }
			$("#fifa_ball_login").show();
		}
	},
	
	showFavTips : function(){
		var isShowFav = getCookie("favTips");
		if("1" != isShowFav && window.location.hash.indexOf("#home") != -1) {
			$("#saveFavTips").show();
			setTimeout('loginComponent.closeFavTips()', 5000);
		}
	},
	
	closeFavTips : function(){
		$("#saveFavTips").hide();
		setCookie("favTips","1",15*24*60*60*1000);
	},
	
	showTopUserNum : function(user){
		var CmWebtokenid;
		var strCookie = document.cookie;
		var arrCookie = strCookie.split("; ");
		for (var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if ("CmWebtokenid" == arr[0]) {
				var value = arr[1].replace(/\"/g, "").split(",");
				if(value[1] == "js"){
					CmWebtokenid = value[0];
				}
				break;
			}
		}

		if(CmWebtokenid){
			$("#topUserNum").html(CmWebtokenid);
			$("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
		}else if(user){
			$("#topUserNum").html(user.mobile);
			$("#topIsLogin").html("<a href='javascript:loginComponent.logoutSure()' style='color:#e40077;' class='carmine' id='login'>[退出]</a>");
		}else{
			$("#topUserNum").html("");
			$("#topIsLogin").html("<a href=\"javascript:BmonPage.showLoginDialog('topLogin');\" style=\"color:#e40077;\" class=\"orange\" id=\"logout\">[登录]</a>");
		}
	},

	//重新组织省份与地市选择信息
	showCityPro : function (cityName,loginType){
 
		this.divCityHtml = $("#chinaCity").html() + "</div>";
		this.divCityListHtml = $("#proCity").html() + "</div>";
		//setCookie("city",getCityNum(cityName));
		
		var tmpContent = "<div class=\"topcity\" id=\"topChinaCity\" >江苏</div>";
		//tmpContent += "<div id=\"DivCity\" onmouseover=\"ShowDivCity()\" onmouseout=\"HiddenDivCity()\" style=\"display: none;\">"
		//tmpContent += "</div>";
		if(loginType == "0"){
			//未登录
			tmpContent += "<div class=\"topcity\" id=\"topProCity\"  >" + cityName + "</div>" ;
			//tmpContent += "<div id=\"header-city-cityList\" onmouseover=\"ShowDivCountry()\" onmouseout=\"HiddenDivCountry()\" style=\"display: none;\">"
			//tmpContent += "</div>" ;
		}else{
			tmpContent += "<div class=\"topcity\" id=\"topProCity\">" +cityName+ "</div>";
		}
		var divCityHtmlAppend = "<div class=\"DivCityList\" id=\"chinaCity\" style=\"display: none;\" >";
		var divCityListHtmlAppend = "<div class=\"DivCityList\" id=\"proCity\" style=\"display:none;\">";
		$("#pro1").empty().html(tmpContent + divCityHtmlAppend + this.divCityHtml + divCityListHtmlAppend +this.divCityListHtml);
		//重新绑定展示事件
		
		if(loginType == "0"){
			//未登录
			 loginComponent.headShowHideFn($("#topChinaCity"),$("#chinaCity"));
			 loginComponent.headShowHideFn($("#topProCity"),$("#proCity"));
		}else{
			 loginComponent.headShowHideFn($("#topChinaCity"),$("#chinaCity"));
			// loginComponent.headShowHideFn($("#topProCity"),$("#proCity"));
		}
		

		 
	},
	//设置展示
	headShowHideFn :function(obj01,obj02){
			obj01.hover(function(){
				obj02.show();
			},function(){
				obj02.hide();
			});

			obj02.mouseenter(function(){
				$(this).show();
			})
			obj02.mouseleave(function(){
				$(this).hide();
			});
		},
	//首页大弹，暂时关闭
	showHomeAct : function(data){
//		var city = cityNum ;
		if("1" != isShowAct && window.location.hash.indexOf("#home") != -1) {
			var isShowAct = getCookie("forwardActSmqllNew");
			var h = $(document).height();
			$("#popMaskAct").show().height(h);
			$("#homeDiv").find("img").attr("src",data.pic1);
			$("#homeAct").click(function(){
				var recommedWebCode = data.webCode;
				var recommedUrl = data.url;
				if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.mncj',recommedWebCode ,'WT.city',UserInfo.userCity,'WT.mobile',UserInfo.userMobile);};
				
				if ("" != recommedWebCode) {
					recommedUrl = recommedUrl+"@webtransId="+recommedWebCode;
				}
				window.open(recommedUrl);
				$("#popMaskAct").hide();
				$("#homeDiv").hide();
				setCookie("forwardActSmqllNew","1",1*24*60*60*1000);
			});
			$("#homeDiv").css("z-index", 99999);
			$("#homeDiv").show();
		}
		/*
		if ("1" != isShowAct && window.location.hash.indexOf("#home") != -1){
		//if(window.location.hash.indexOf("#home") != -1) {
			//if ('NJDQ' != city) {
				var h = $(document).height();
				$("#popMaskAct").show().height(h);
				$("#homeDiv").css("z-index", 99999);
				$("#homeDiv").show();
			//}
		}
		*/
	},
	
	//顶部卷帘广告
	showTopBanner : function(data){
		var user = data.user.resultObj;
		var recommendData = data.recommedList;
		if(recommendData.length > 0)
		{
			var recommendItem = recommendData[0];
			// 业务链接地址
			var showViewLink = recommendItem.activityUrl;
			// 业务小图片地址
			var busiSmallIconUrl = recommendItem.activitySmallIcon;
			// 业务大图片地址
			var busiBigIconUrl = recommendItem.activityIcon;
			
			var webCode = recommendItem.webCode;//recommendItem.webCode;
			if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',user.city_jbNum,'WT.mobile',user.mobile);};
			
			if ("" != webCode) {
				showViewLink = showViewLink +"@webtransId=" + webCode;
			}
			$("#topBannerBig").attr("src",busiBigIconUrl);//busiBigIconUrl
			$("#topBannerSmall").attr("src",busiSmallIconUrl);//busiSmallIconUrl
			$("#topBannerBigWbt").attr("href",showViewLink);//showViewLink
			$("#topBannerBigWbt").bind("click", function(){
				if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',user.city_jbNum,'WT.mobile',user.mobile);}
			});
			$("#topBannerSmallWbt").attr("href",showViewLink);//showViewLink
			$("#topBannerSmallWbt").bind("click", function(){
				if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',user.city_jbNum,'WT.mobile',user.mobile);}
			});
			
			var topSlideBanner=$(".top-slide-banner"),timer1,
				topSlideSimg=$(".topSlideBanner-s"),
				closeTopSlide=$(".close-top-slide");
			if(window.location.hash.indexOf("#home") != -1) {
					$("#top-slide").show();
					topSlideSimg.hide();
			
					timer2=setTimeout(function(){
						topSlideBanner.slideUp(2000,function(){
							//topSlideBanner.hide();
							topSlideSimg.show();
						});
					},5000);
					
				closeTopSlide.bind("click",function(){
					clearTimeout(timer1);
					topSlideBanner.slideUp(2000,function(){
						//topSlideBanner.hide();
						topSlideSimg.show();
					});		
				})
				
			}else{
				$("#top-slide").show();
				topSlideBanner.hide();
				topSlideSimg.show();
			}
		}
	},
	
	showHomePop4g : function(){
		var isShowPop4g = getCookie("forwardPop4g");
		if("1" != isShowPop4g && window.location.hash.indexOf("#home") != -1) {
			var h = $(document).height();
			$("#popMaskAct").show().height(h);
			$("#pop4G").show();
		}
	},
	
	showSearchPop : function(userMobile){
		var nowTime = new Date().getTime();
		var isSearchCookieValue = getCookie("forwardPopSearch_" + userMobile);
		if(window.location.hash.indexOf("#home") != -1){
			//有值 说明该用户之前存在cookie
			if(isSearchCookieValue){
				var sevenTime = isSearchCookieValue;
				if((nowTime - sevenTime) > 0){
					var h = $(document).height();
					$("#popMaskAct").show().height(h);					
					$("#popSearch2").show();
					
				}
			}else{
				var h = $(document).height();
				$("#popMaskAct").show().height(h);				
				$("#popSearch").show();
				
			}
		}
	},
	
	showPopYjcx : function(){
		var h = $(document).height();
		$("#popMaskAct").show().height(h);
		$("#popYjcx").show();
		$("#popSearch").hide();
		//一键查询引导层
		$("#popLayer").hide();
		if("1" != getCookie("popUserQueryDate")){
			setCookie("popUserQueryDate","1",24*60*60*1000);
		}
		//setCookie("forwardPopSearch","1",15*24*60*60*1000);
		//插码开始
		if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.nv','serv_bottom','WT.event','YDWS');}
		//插码结束
	},

	// 显示登录触点营销
	showLoginTouch: function (userType) {
		// 判断触点营销登录事件是否已经加载
		if(TOUCHAPP.GLOBAL_INFO.IS_LOGINTOUCH_ACTIVED == false)
		{
			// 用户类型为手机用户，且用户号码不为空时，显示登录触点营销
			if(userType == 1 && this.userInfo.userMobile != null)
			{
				TOUCHAPP.GETTOUCH.getTouchInfo(TOUCHAPP.EVENT_ID.JS_OBSH_USER_LOGIN);
			}
		}
    },

	// 显示用户积分余额
	showBalanceScore : function(data){
		if(data && data.resultObj){
			this.userInfo.balance = data.resultObj.balance;
			this.userInfo.score = data.resultObj.score;
		}
	},

	// 显示用户信息
	showUserInfo : function(data){
		// 用户号码
		var mobile = data.resultObj.mobile;
		// 用户姓名
		var userName = "用户";
        // 除了短信密码登录不显示用户姓名，其它都显示
		if(data.resultObj.loginSource != 3){
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

		if($("#quickMenu").length){
			if(brand_jbNum == 'QQT' || brand_jbNum == 'SZX'){
				$("#quickMenu-jfcx").show();
				//$("#quickMenu-jfdh").show();
				//$("#quickMenu-mzcx").hide();
				//$("#quickMenu-mzdh").hide();
				$("#quickMenu-jfcx-a").show();
				//$("#quickMenu-jfdh-a").show();
				//$("#quickMenu-mzcx-a").hide();
				//$("#quickMenu-mzdh-a").hide();
				$("#quickMenu_jfcx").show();
				$("#quickMenu_jfdh").show();
				$("#quickMenu_mzcx").hide();
				$("#quickMenu_mzdh").hide();
			} else if(brand_jbNum == 'DGDD'){
				//$("#quickMenu-mzcx").show();
				//$("#quickMenu-mzdh").show();
				$("#quickMenu-jfcx").hide();
				//$("#quickMenu-jfdh").hide();
				//$("#quickMenu-mzcx-a").show();
				//$("#quickMenu-mzdh-a").show();
				$("#quickMenu-jfcx-a").hide();
				//$("#quickMenu-jfdh-a").hide();
				$("#quickMenu_mzcx").show();
				$("#quickMenu_mzdh").show();
				$("#quickMenu_jfcx").hide();
				$("#quickMenu_jfdh").hide();
			}
			
			var titleUrl = "";
			var urlId = "";
			var userCityCode = userCity;
	        if(userCityCode == "NJDQ"){urlId="5875"}
	        if(userCityCode == "WXDQ"){urlId="5879"}
	        if(userCityCode == "ZJDQ"){urlId="5872"}
	        if(userCityCode == "SZDQ"){urlId="5878"}
	        if(userCityCode == "NTDQ"){urlId="5881"}
	        if(userCityCode == "YZDQ"){urlId="5918"}
	        if(userCityCode == "YCDQ"){urlId="5876"}
	        if(userCityCode == "XZDQ"){urlId="5877"}
	        if(userCityCode == "LYGDQ"){urlId="5913"}
	        if(userCityCode == "CZDQ"){urlId="5894"}
	        if(userCityCode == "TZDQ"){urlId="5897"}
	        if(userCityCode == "SQDQ"){urlId="5880"}
	        if(userCityCode == "HADQ"){urlId="5883"}
	        if("" != urlId){
	        	titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id="+urlId;
	        }else{
		        titleUrl = "http://service.js.10086.cn/bcma.jsp#DSYX_BL@id=5875";
	        }
	        $("#quickMenuYx").attr("href",titleUrl);
	        
		}

		$("#userBrandNameDisp").html(userName + "(<span class='userNum'>" + mobile + "</span>)");
		

		// 三楼特惠专区货架优惠精选数据加载 add by limeng begin
		setTimeout("loginComponent.getActivityGoodsShelfInfo()", 1000);
        // 三楼特惠专区货架优惠精选数据加载 add by limeng end

        // 登录后登录飞信|开发人：丁亮|开发日期：2012-8-20
        loginComponent.loginFetionComponent();
        
        $("#fetionToggle").attr("href","javascript:void(0);");
        $("#fetionToggle").attr("title","飞信");
        $("#fetionToggle").click(function () {
            loginComponent.loginFetion(loginComponent.userInfo.userMobile);
        }); 

		//登录后关闭登录提示框
		//loginComponent.closeLoginTips();
		// 登录后插码
		if (typeof(_tag)!="undefined"){
			_tag.dcsMultiTrack('WT.event','logon','WT.log_rt','suc','WT.mobile',mobile, 'WT.brand', brand_jbNum, 'WT.userCity',userCity);
		}
	},

	getActivityGoodsShelfInfo : function(){
        if(window.location.hash == '#home' && marketActComponent.clickCount == 0)
		{
        	marketActComponent.clickCount = 1;
			marketActComponent.getActivityGoodsShelfNotLoadImg("getWBLYHHD");
		}
	},

	isGroupMobile : function (data) {
		if(data.user.resultCode == '0' && data.user.resultObj){
			var result = data.group;
			if (result == "1") {
				loginComponent.userInfo.isGroupMobile = "1";
			}
		}
    },
    
    get139Mail : function(data){
    	if(data.user.resultCode == '0' && data.user.resultObj){
    	$.busiReq({
			"data" : {
				"reqUrl": "get139Mail"
			},
			"success":function(data){
				result = eval("(" + data + ")");
				loginComponent.showIndexMail(result);
			}
		});
    	}
    },
    
    showIndexClient : function(result) {
		// BUSINESS_REQ_URI
		
		var resultInfo = result.resultObj;

		if ("1" == resultInfo) { 
			$(".leftBar-app span").show();
			//$(".leftBar-app span").append(resultInfo);
			 setTimeout('loginComponent.closeClient(1)', 5000);
			$(".leftBar-app span").click(function() {
				window.open("http://www.js.10086.cn/clientDownload/index.html");
			});
			$(".leftBar-app").mouseover(function(){
				$(".leftBar-app span").show();
			}).mouseout(function(){
				$(".leftBar-app span").hide();
			})
		}
	},
	closeClient : function(num) {
		if(1==num){
		$(".leftBar-app span").hide();
		}
		if(2==num){
			$(".leftBar-139 span").hide();
		}
		/**
		loginComponent.clientNum++;
		if (loginComponent.clientNum == 10) {
			$(".leftBar-app span").hide();
			clearInterval(loginComponent.blinkClent);
			loginComponent.emailNum = 0;
		}*/

	},
	
	getClient : function(data) {
		
		if(data.user.resultCode == '0' && data.user.resultObj){
		$.busiReq({
					"data" : {
						"reqUrl" : "getClientIntroduce"
					},
					"success" : function(data) {
						result = eval("(" + data + ")");
						loginComponent.showIndexClient(result);
					}
				});
		}
	},

	showIndexMail : function(result) {
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
					
					$(".leftBar-139 span").click(function() {
						window.open("http://service.js.10086.cn/index.jsp#139YX");
					})
					
					$(".leftBar-139").mouseover(function(){
						$(".leftBar-139 span").show();
					}).mouseout(function(){
						$(".leftBar-139 span").hide();
					});
					
					setTimeout('loginComponent.closeClient(2)',5000);


				} else {
					
				}
			}
		}
	},
	
	listShowStart : function(){
		var t;
		var aIndexSpan = $(".main-leftBar-ico-mail"),
		    aList = $(".main-leftbar-139List");
		//标签鼠标事件
	    aIndexSpan.hover(
		  function(){
			  clearTimeout(t);
			  var a= aIndexSpan.offset();
			  aList.show();
		  },
		  function(){
			  listHide();
		  }
		);
		//列表鼠标事件
	    aList.hover(
		  function(){clearTimeout(t);},
		  function(){listHide();}
		);
	    //隐藏列表
	    function listHide(){
			t = setTimeout(function(){aList.hide();},100)
		}
	},

    /**
     * 加载飞信组件
     * 增加人：丁亮
     * 增加日期：2012-9-6
     */
    loginFetionComponent : function(itemUserMobile){
        var tmpScript = $("#fetion_1");
        if(tmpScript == null){
            $(body).append("<script id=\"fetion_1\" language=\"javascript\" type=\"text/javascript\" src=\"http://files01.js.10086.cn/obsh/js/fetionBar/fetionAjaxHelper.js\"></script>");
        }
    },

    /**
     * 登录飞信Bar
     * 增加人：丁亮
     * 增加日期：2012-8-20
     */
    loginFetion : function(mobile){
        var host = window.location.host;
        //$(".fxbar_tipbk_top").hide();
        var getC_Url = "http://"+ host + "/fetionBar?userMobile="+ mobile +"&t=" + Math.random();
        window.fxbar_settings = {
            gen_c_url: getC_Url,                    // 获取凭证的接口的url，不能为空。
            c_domain: "js.10086.cn",                // 凭证对应的域，不能为空。
            tag: "jiangsu",                         // 第三方对应的tag，不能为空。
            domain: "js.10086.cn",                  // 第三方网页对应的域。
            autoExpand: false,                       // true展开，false收缩
            width: 170,                             // 飞信BAR主面板的宽度，设置为200
            height: 240,                            // 飞信BAR主面板的高度，设置为350
            //pos: { left: "0", bottom: "10px" },     // 飞信BAR在左下角，距左边与底部10px显示
            //buoyPos: 0,                             // 浮标在下方显示
            skin: "skin_4",
            permission: 3,
            containerId: 'fetion_shell',            //新增，嵌入飞信bar的容器ID
            layout: 7                               // 飞信BAR的布局方式，1:左浮动，2:右浮动，3:固定，6:139邮箱，7:移动微博
        };

        tmpScript = document.getElementById("fetion_2");
        if(tmpScript == null || tmpScript == ""){
            var head = document.getElementsByTagName("head").item(0);
            var script = document.createElement("script");
            script.id = "fetion_2";
            script.type = "text/javascript";
            script.src = "http://files01.js.10086.cn/obsh/js/fetionBar/fetionPreInit.js?" + (+new Date);
            head.appendChild(script);
        }
        
        setTimeout(function(){
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

	initPage : function(){
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

	changeLoginType : function(){
		var loginType = $("#loginType").val();
		var numberLabel = "手机号码";
		var maxlength = 11;
		var showSavePassword = false;
		var cityShow = false;
		switch(loginType){
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
		$("#userNumber").attr("maxlength",maxlength).val("");
		$("#userPassword").val("");
		if(showSavePassword){
			$("#savePassword").show();
		}else{
			$("#savePassword").hide();
		}

		if(cityShow){
			$("#loginCity-tr").show();
			$("#loginCity-tr_td").show();
		} else {
			$("#loginCity-tr").hide();
			$("#loginCity-tr_td").hide();
		}
		if(loginType == '1'){
			$("#loginForm-link-word").hide();
            // 如果是短信密码登录后不显示小提示
            if(loginComponent.userInfo.loginSource == '3'){
                $("#userNumber").val(loginComponent.userInfo.userMobile);
                $("#userPassword").focus();
            }
            else{
            	// 话务员登录，只有动态密码登录
                var url = window.location.href;
                if(url.indexOf("index_hwy.jsp") != -1)
                {
                	$("#loginMobile-tr").hide();
                }
                else
                {
                	$("#popBox-userLogin-loginType_sel").show();
                	$("#loginMobile-tr").show();
                }
    			//$("#loginForm-link-switchPswType1").show();
    			$("#loginForm-link-password-1").show();
            }
		} 
		else if(loginType == '5'){
			loginComponent.popLogin_psdType_input(3);
			$("#popBox-userLogin-loginType_sel").hide();
        	$("#loginMobile-tr").hide();
		}
		else {
			loginComponent.popLogin_psdType_input(1);
			$("#popBox-userLogin-loginType_sel").hide();
			$("#loginMobile-tr").hide();
			//$("#loginForm-link-switchPswType1").hide();
			//$("#loginForm-tip-password-1").hide();
			//$("#loginForm-tip-password-2").hide();
		}
	},

	/**
	 * http协议登录
	 */
	login : function(){
		var mobile = $("#userNumber").val();
		var userCity = $("#loginCity").val();
		var password = $("#userPassword").val();
		var loginType = $("#loginType").val();
		var verifyCode = $("#verifyCode").val();
		// 登录页面与服务密码确认页面标志位
		var isSavePasswordVal_N = $("#isSavePasswordVal_N").val();
		var isSavePassword = '0';
		//var isKeepLogin = '0';
		if($("#isSavePassword").attr('checked') != undefined && ($("#isSavePassword").attr('checked'))){
			isSavePassword = '1';
			this.savePassword = true;
	    } else {
	    	isSavePassword = '0';
	    	this.savePassword = false;
	    }
	    
	    //if($("#isKeepLogin").attr('checked') != undefined && ($("#isKeepLogin").attr('checked'))){
		//	isKeepLogin = '1';
	    //} else {
	    //	isKeepLogin = '0';
	    //}

		//get cookie password
	    var cookieuserPwd = this.getUsrSavePwd(1);
	    if (cookieuserPwd != null && cookieuserPwd == '100866') {
	    	password = cookieuserPwd;
	    }

	    $("#userLogin-error-result").empty().hide();
	    $("#topBar-user-message .message-count").empty().hide();
		$.busiReq({
		"data" : {
			"reqUrl": "login",
			"busiNum" : "LOGIN",
			"operType" : "0",
			"mobile": mobile,
			"password": password,
			"city": userCity,
			"verifyCode" : verifyCode,
			"loginType": loginType,
			"isSavePasswordVal": isSavePassword,
			"loginFormTab" : '',
			"passwordType" : loginComponent.passwordType,
			"isSavePasswordVal_N" : isSavePasswordVal_N
		},
		"success":function(data){
			result = eval("(" + data + ")");
			// 如果是服务密码确认
			if(isSavePasswordVal_N == '2')
			{
				loginComponent.loginCallBackSecend(result);
			}
			else
			{
				loginComponent.loginCallBack(result);
			}
		}
		});
	},

	// http协议登录回调,登录页面
	loginCallBack : function(result){
		$("#popBox-login-button").attr("class","btn-login").attr("disabled",false).val("登录");
        $("#popBox-login-N-buttion").attr("class","btnBlue-s1").attr("disabled",false).val("登录");
		if(result.resultCode == '0' && result.resultObj){
			$("#loginType").val("1");
			loginComponent.changeLoginType();
			$("#userNumber").val("");
			$("#userPassword").val("");
			$("#verifyCode").val("");
			$("#isSavePassword").attr("checked",false);
			//$("#isKeepLogin").attr("checked",false);
			$("#number-error-message").empty();
			$("#password-error-message").empty();
			//loginComponent.userDetailInfo();
			if (result.resultObj.userType == '2') {
				loginComponent.showOtherUserInfo(result.resultObj);
				window.location.href = "#lan_home";
			} else if (result.resultObj.userType == '3') {
				loginComponent.showOtherUserInfo(result.resultObj);
				window.location.href = "#phone_home";
			} else if (result.resultObj.userType == '4') {
				loginComponent.showOtherUserInfo(result.resultObj);
				window.location.href = "#agent_home";
			} else {
				loginComponent.showUserInfo(result);
				//loginComponent.getBalanceScore();
				//loginComponent.getHeaderInfo();
				//loginComponent.getHotRankInfo();
				//loginComponent.getQuickServiceInfo();
				BmonPage.reload();
			}
		} else {
			//插码
			if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.event','logon','WT.log_rt','error','WT.mobile',$("#userNumber").val(),'WT.log_fail',result.resultMsg);}
			if(result.logicCode == '-4009'){
				$("#userLogin-error-result").html(result.resultObj);
			} else if(result.logicCode == '-3006'){
				// 显示图片验证码
				$("#popBox-verifyCode-idType").show();
				$("#userLogin-error-result").html(result.resultMsg);
			} else {
				$("#userLogin-error-result").html(result.resultMsg);
			}

			$("#userPassword").val("");
			$("#userLogin-error-result").show();
		}
	},

    /**
     * 新增加登录成功后回调事件，http协议服务密码确认
     * 修改人：丁亮
     * 修改日期：2012-7-4
     * @param {} result
     */
    loginCallBackSecend : function(result){
        $("#popBox-login-button").attr("class","btn-login").attr("disabled",false).val("登录");
        $("#popBox-login-N-buttion").attr("class","btnBlue-s1").attr("disabled",false).val("登录");
        if(result.resultCode == '0' && result.resultObj){
            loginComponent.showUserInfo(result);

            if(window.location.hash == '#GRZLGL_GRZL' || window.location.hash == '#ZDCX' || window.location.hash == '#XFGK' || window.location.hash == '#YXBD'){
            	BmonPage.reload();
            }

            if(GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN != null){
            	$.extend(GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN["data"], {"confirmFlg":"1"});
            	$.busiReq(GlobalDialog.REQ_OPTIONS_BEFORE_LOGIN);
            }
        } else {
            if(result.logicCode == '-4009'){
            //插码
            if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.event','logon','WT.log_rt','error','WT.mobile',$("#userNumber").val(),'WT.log_fail',result.resultMsg);}
                $("#userLogin-error-result").html(result.resultObj);
            } else if(result.logicCode == '-3006'){
                // 显示图片验证码
                $("#popBox-verifyCode-idType").show();
                $("#userLogin-error-result").html(result.resultMsg);
            } else {
                $("#userLogin-error-result").html(result.resultMsg);
            }

            $("#userLogin-error-result").show();
        }
    },

	/**
	 * https协议登录
	 */
	loginHttps : function(){
    	var loginFormTab=window.location.href.substring(window.location.href.indexOf('#'),window.location.href.indexOf('#')+5);
		// 手机号码
		var mobile = $("#userNumber").val();
		var password = $("#userPassword").val();
		var isSavePassword = '0';
		//var isKeepLogin = '0';
		if($("#isSavePassword").attr('checked') != undefined && ($("#isSavePassword").attr('checked'))){
			isSavePassword = '1';
			this.savePassword = true;
	    } else {
	    	isSavePassword = '0';
	    	this.savePassword = false;
	    }
	    
	    //if($("#isKeepLogin").attr('checked') != undefined && ($("#isKeepLogin").attr('checked'))){
		//	isKeepLogin = '1';
	   // } else {
	   // 	isKeepLogin = '0';
	   /// }

		//get cookie password
	    var cookieuserPwd = this.getUsrSavePwd(1);
	    if (cookieuserPwd != null && cookieuserPwd == '100866') {
	    	password = cookieuserPwd;
	    }

	    $("#userLogin-error-result").empty().hide();
	    $("#topBar-user-message .message-count").empty().hide();

	    // 登录协议设置为https
	    $("#userLoginTransferProtocol").val("https");
	    $("#userPassword").val(password);
	    $("#isSavePasswordVal").val(isSavePassword);
	    $("#loginFormTab").val(loginFormTab);
	    $("#passwordType").val(loginComponent.passwordType);
	    // 账号类型
		var loginType = $("#loginType").val();
		if(loginType == '5'){
			$("#redirectUrl").val("xxt.jsp");
		}else{
			$("#redirectUrl").val(window.location.href);
		}
	    
	    
	    // 设置form提交路径action
	    var host = window.location.host;
	    if(loginType == '5'){
	    	$("#userLogin").attr("action", GLOBAL_INFO.BUSINESS_REQ_URI);
	    }else{
		    if(host.indexOf("service.js.10086.cn") != -1)
		    {
		    	var action = "http://" + host + GLOBAL_INFO.BUSINESS_REQ_URI;
		    	$("#userLogin").attr("action", action);
		    }
		    else
		    {
	//	    	$("#userLogin").attr("action", "https://localhost:8443/" + GLOBAL_INFO.BUSINESS_REQ_URI);
		    	$("#userLogin").attr("action", GLOBAL_INFO.BUSINESS_REQ_URI);
		    }
	    }
	    // 缓存手机号码
	    setCookie("login_error_number_https",mobile,10 * 365 * 24 * 60 * 60 * 1000);
	    // 账户类型
	    setCookie("login_error_loginType_https",$("#loginType").val(),10 * 365 * 24 * 60 * 60 * 1000);
	    // 密码类型  1:服务密码登录  2:短信密码
       	setCookie("login_error_passwordType_https",loginComponent.passwordType,10 * 365 * 24 * 60 * 60 * 1000);

	    // 请求提交
	    $("#userLogin").submit();
	},

    loginFailedCallBack : function(resultCode, mobile, loginType, passwordType){

    	GlobalDialog.showLoginDialog();
		$("#popBox-login-button").attr("class","btn-login").attr("disabled",false).val("登录");
        $("#popBox-login-N-buttion").attr("class","btnBlue-s1").attr("disabled",false).val("登录");

		if(loginType == null || loginType == "")
		{
			loginType = "1";
		}
		$("#loginType").val(loginType);
		loginComponent.changeLoginType();
		// 先修改loginType，再修改手机号码
		$("#userNumber").val(mobile);

		// 短信密码登录
		if(passwordType == '2')
		{
	    	loginComponent.popLogin_psdType_input(2);
			//$("#loginForm-tip-password-2").hide();
		}
		//$("#loginForm-tip-password-1").hide();
		$("#userPassword").focus();

		var errorMsg = "";
		
		//密码输入框重置成原本样式
		$("#userPassword").css("border","1px solid #E0E0E0");
		
        if (resultCode == '-3001') {
        	errorMsg = "<font color='#CC6633'>对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！</font><br/>继续使用  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"1\");'>服务密码登录</a>  或  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
        	//errorMsg = "密码输入错误，可使用短信密码直接登录或点击“<a href=\"#MMFW_MMCZ\" target=\"blank\">密码重置</a>”找回密码。";
            //loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3002') {
        	errorMsg = "<font color='#CC6633'>对不起，服务密码输入错误！每个号码当天累计3次输入错误密码，服务密码将会被锁！</font><br/>继续使用  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"1\");'>服务密码登录</a>  或  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
        	//errorMsg = "密码错误！忘记服务密码？可使用短信密码直接登录或点击“<a href=\"#MMFW_MMCZ\" target=\"blank\">密码重置</a>”找回密码。";
            //loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3003') {
        	errorMsg = "<font color='#CC6633'>抱歉，服务密码已经错误3次，今天没机会了哦！</font><br/>您还可以使用  <a href='javascript:void(0);' onclick='loginComponent.popLogin_psdType_input2(\"2\");'>短信密码登录</a>";
        	//errorMsg = "对不起，您已连续输错3次密码，请于24小时后再次尝试或携带有效证件至营业厅办理。";
            //loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3004') {
        	errorMsg = "您输入的密码累计三次错误,帐户将被锁定二十四小时。欢迎您继续使用我们的服务";
            loginComponent.loginSwicth("1");
            $("#userLogin-error-result").html(errorMsg);
        } else if (resultCode == '-3005') {
        	errorMsg = "用户不存在";
            $("#userLogin-error-result").html(errorMsg);
        } else if(resultCode == '-3006'){
        	errorMsg = "对不起，登录失败，请稍后再试！";
			// 显示图片验证码
			loginComponent.loginSwicth("1");
			$("#popBox-verifyCode-idType").show();
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
//        	errorMsg = "用户登陆失败！用户手机号码在登录黑名单中，不允许登录！";
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
        } else if(resultCode == '-200008') // 需要短信验证码校验
		{
        	errorMsg = "登录用户较多，请稍候再试。";
        	$("#userLogin-error-result").html(errorMsg);
		} else if(resultCode == '700') {
        	errorMsg = "对不起，登录失败，请检查您的号码输入是否正确！";
        	$("#userLogin-error-result").html(errorMsg);
		}  else {
        	errorMsg = "对不起，登录失败，请稍后再试！";
            $("#userLogin-error-result").html(errorMsg);
        }
        $("#userLogin-error-result").show();

        // 插码
		if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.event','logon','WT.log_rt','error','WT.mobile',mobile,'WT.log_fail',errorMsg);}
	},

	loginSwicth : function(temp){
		if("1" == temp){
			loginComponent.popLogin_psdType_input(2);
		}
//        $("#login_switch2").attr("checked",true);
	},
	// 显示宽带，固定电话，代理商登录信息
	showOtherUserInfo : function(obj){
		$("#userNumber").val("");
		$("#userPassword").val("");
		$("#popBox-userLogin").hide();
		$("#popMask").hide();
		$(".topBar-nologin").hide();
		$(".topBar-user").show();
		$("#topBar-user-message").hide();
		$("#header .header-city-thisCity").hide();
		// 宽带账户
		if(obj.userType == '2'){
			$("#userBrandNameDisp").html(obj.userName + "(" + obj.mobile + ")");
			$("#userNameDisp").html("<strong>" + obj.userName + "</strong>(" + obj.mobile + ")");
			$("#userBrandDisp").html("地市：<span>" + obj.userAreaName.replace(/地区/g, "") + "</span>");
			$("#userInfo-detail-fun").hide();
			$("#userBalanceDisp").empty().hide();
			$("#userScoreDisp").empty().hide();
		}
		// 固定电话账户
		else if(obj.userType == '3'){
			$("#userBrandNameDisp").html(obj.userName + "(" + obj.mobile + ")");
			$("#userNameDisp").html("<strong>" + obj.userName + "</strong>(" + obj.mobile + ")");
			$("#userBrandDisp").html("地市：<span>" + obj.userAreaName.replace(/地区/g, "") + "</span>");
			$("#userInfo-detail-fun").hide();
			$("#userBalanceDisp").empty().hide();
			$("#userScoreDisp").empty().hide();
		}
		// 代理商账户
		else if(obj.userType == '4'){
			$("#userBrandNameDisp").html(obj.mobile);
			$("#userNameDisp").html(obj.mobile);
			$("#userBrandDisp").html("欢迎使用网上营业厅");
			$("#userInfo-detail-fun").hide();
			$("#userBalanceDisp").empty().hide();
			$("#userScoreDisp").empty().hide();
		}
	},

	// 获取用户保存的密码
	getUsrSavePwd : function(type){
		var userMobile = $("#userNumber").val();
	    var res_savepwd=getCookie(userMobile+"_savepwd");
	    if(res_savepwd && res_savepwd!=null)
	    {
	         if(type == 0){
	        		 $("#isSavePassword").attr("checked",true);
	        		 $("#userPassword").val("111119");
	         }
	         return res_savepwd;
	    }
	    return null;
	},

	// 密码类型切换
	popLogin_psdType_input : function(t){
		$("#userLogin-error-result").empty().hide();
		var ty = $("#popBox-userLogin-pswType");
		//var spt1 = $("#loginForm-link-switchPswType1");
		//var spt2 = $("#loginForm-link-switchPswType2");
		//var tip1 = $("#loginForm-tip-password-1");
		//var tip2 = $("#loginForm-tip-password-2");
		var l1 = $("#loginForm-link-password-1");
		var l2 = $("#loginForm-link-password-2");
		if(t==1){
			$("#login_switch").val('1');
			ty.html("服务密码");
			//spt2.hide();
			//spt1.show();
			//tip2.hide();
			//tip1.show();
			l2.hide();
			l1.show();
			$("#loginForm-link-word").hide();
//			$("#login_switch1").attr("checked",true);
			$("#savePassword").show();
			$("#loginType").show();
			$("#loginType-tr").show();
			this.passwordType = 1;
			//20131010 begin
			$("#loginPwd-tr").show();
			$("#smsVerifyCodeSendOver").hide();
			$("#popBox-nextStep-button").hide();
			$("#popBox-login-button").show();
			if(loginComponent.isNeedVerifyCode){
				$("#popBox-verifyCode-idType").show();
			}else{
				$("#popBox-verifyCode-idType").hide();
			}
			//20131010 end
			$("#smsSendMessage").hide();
		}
		if(t==2){
			$("#login_switch").val('2');
			ty.html("短信密码");
			//spt2.show();
			//spt1.hide();
			//tip2.show();
			//tip1.hide();
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
			
			$("#verifyCodeDiv").show();
			$("#verifyCode-error-message").empty().hide();
			loginComponent.getVerifyCode();
			/*if(this.count && this.count > 0){
				this.countTime(this.count);
				l2.hide();
			} else {
				l2.show();
			}*/
			//20131010 end
		}
		if(t==3){
			$("#login_switch").val('1');
			ty.html("服务密码");
			//spt2.hide();
			//spt1.show();
			//tip2.hide();
			//tip1.show();
			l2.hide();
			l1.hide();
			$("#loginForm-link-word").show();
//			$("#login_switch1").attr("checked",true);
			$("#savePassword").hide();
			$("#loginType").show();
			$("#loginType-tr").show();
			this.passwordType = 1;
			//20131010 begin
			$("#loginPwd-tr").show();
			$("#smsVerifyCodeSendOver").hide();
			$("#popBox-nextStep-button").hide();
			$("#popBox-login-button").show();
			if(loginComponent.isNeedVerifyCode){
				$("#popBox-verifyCode-idType").show();
			}else{
				$("#popBox-verifyCode-idType").hide();
			}
			//20131010 end
			$("#smsSendMessage").hide();
		}
		$("#userPassword").val("");
		$("#number-error-message").empty().hide();
		$("#password-error-message").empty().hide();
	},
	
	// 密码类型切换
	popLogin_psdType_input2 : function(t){
		$("#userLogin-error-result").empty().hide();
		var ty = $("#popBox-userLogin-pswType");
		//var spt1 = $("#loginForm-link-switchPswType1");
		//var spt2 = $("#loginForm-link-switchPswType2");
		//var tip1 = $("#loginForm-tip-password-1");
		//var tip2 = $("#loginForm-tip-password-2");
		var l1 = $("#loginForm-link-password-1");
		var l2 = $("#loginForm-link-password-2");
		if(t==1){
			$("#login_switch").val('1');
			ty.html("服务密码");
			//spt2.hide();
			//spt1.show();
			//tip2.hide();
			//tip1.show();
			l2.hide();
			l1.show();
			$("#loginForm-link-word").hide();
//			$("#login_switch1").attr("checked",true);
			$("#savePassword").show();
			$("#loginType").show();
			$("#loginType-tr").show();
			this.passwordType = 1;
			//20131010 begin
			$("#loginPwd-tr").show();
			$("#smsVerifyCodeSendOver").hide();
			$("#popBox-nextStep-button").hide();
			$("#popBox-login-button").show();
			if(loginComponent.isNeedVerifyCode){
				$("#popBox-verifyCode-idType").show();
			}else{
				$("#popBox-verifyCode-idType").hide();
			}
			//20131010 end
			$("#smsSendMessage").hide();
		}
		if(t==2){
			$("#login_switch").val('2');
			ty.html("短信密码");
			//spt2.show();
			//spt1.hide();
			//tip2.show();
			//tip1.hide();
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
			
			$("#verifyCodeDiv").show();
			$("#verifyCode-error-message").empty().hide();
			loginComponent.getVerifyCode();
			/*if(this.count && this.count > 0){
				this.countTime(this.count);
				l2.hide();
			} else {
				l2.show();
			}*/
			//20131010 end
		}
		$("#userPassword").val("");
		$("#userPassword").css("border","1px solid #FF0000");
		$("#userPassword")[0].focus();
		$("#number-error-message").empty().hide();
		$("#password-error-message").empty().hide();
	},

	// http协议登录前校验
	loginPrepare : function(){
		$("#userLogin-error-result").empty().hide();
		// 手机号码
		var mobile = $("#userNumber").val();
		// 服务密码
		var password = $("#userPassword").val();
		// 账号类型
		var loginType = $("#loginType").val();
		// 验证码
		var verifyCode = $("#verifyCode").val();

		var checkResult = false;
		
		if(!mobile){
			$("#number-error-message").html("请输入手机号码").show();
			return;
		}
		// 应对集团检查，在登录处增加未实名登记的校验--针对这两个测试号码 20131203
		
		
		if(!password){
			$("#password-error-message").html("请输入密码").show();
			return;
		}

		if(this.isNeedVerifyCode && !verifyCode){
			$("#verifyCode-error-message").html("请输入验证码").show();
			return;
		}

		if($("#number-error-message").html() || $("#password-error-message").html() || $("#verifyCode-error-message").html()){
			return;
		}

		if(loginType == '1' && this.passwordType == '1' && mobile && password && isSimplePwd(mobile, password)){
			$("#userLogin-error-result").html('您的密码过于简单，为保障您的信息安全，请点击这里进行"<a href="http://service.js.10086.cn/index.jsp#MMFW_MMCZ">密码重置</a>”后再登录！').show();
			return;
		} else if(loginType=='1' && this.passwordType == '1' && isSimplePwdCanLogin(mobile, password)){
		}



		$("#popBox-login-button").attr("class","btn-login").attr("disabled",true).val("登录中...");
        $("#popBox-login-N-buttion").attr("class","btnGray-s1").attr("disabled",true).val("登录中...");

		$("#password-error-message").empty().hide();

		// 登录页面与服务密码确认页面标志位
		var isSavePasswordVal_N = $("#isSavePasswordVal_N").val();
		// 2：https
		if(isSavePasswordVal_N == '1')
		{
			this.loginHttps();
		}
		else
		{
			this.login();
		}
	},

	// 短信密码登陆的验证码校验
	loginNextStep : function(){
		$("#userLogin-error-result").empty().hide();
		// 手机号码
		var mobile = $("#userNumber").val();
		
		if(!mobile){
			$("#number-error-message").html("请输入手机号码").show();
			return;
		}
		
		if(!chkMobileNumber(mobile)){
			$("#number-error-message").html("请输入正确手机号码").show();
			return;
		}
		// 验证码
		var verifyCode = $("#verifyCode").val();
		
		if(!verifyCode){
			$("#verifyCode-error-message").html("请输入验证码").show();
			return;
		}
		
		$.busiReq( {
				data : {
					"reqUrl"	: "SMSLoginVerifyCode",
					"busiNum" 	: "LOGIN",
					"mobile"    : mobile,
					"verifyCode"   : verifyCode
				},
				success : function(data) {
					var h = $(document).height();
					$("#popMask").show().height(h);
					var result = eval("(" + data + ")");
					if (result && result.resultCode == "0") {
						$("#loginPwd-tr").show();
						$("#popBox-verifyCode-idType").hide();
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
	sendSms : function(){
		// 手机号码
		var userNumber = $("#userNumber").val();
		if(userNumber && chkMobileNumber(userNumber)){
			$.busiReq( {
				data : {
					"reqUrl"	: "checkLimitValue",
					"busiNum" 	: "LOGIN",
					"mobile"    : userNumber,
					"smsType"   : "1"
				},
				success : function(data) {
					var result = eval("(" + data + ")");
					if (result && result.resultCode == "0") {
						loginComponent.sendSmsSubmit();
					} else {
						var errorMsg;
						if(result.systemCode == "-200086") {
							errorMsg = "当天短信密码已达上限!";
						} else if(result.systemCode == "-200087") {
							errorMsg = "动态密码已发送到您的手机，5分钟后再重新获取!";
						} else {
							errorMsg = result.resultMsg;
						}
						$("#userLogin-error-result").html(errorMsg).show();
					}
				}
			});
		} else {
			$("#password-error-message").html("请输入手机号码").show();
		}

	},
	
	sendSmsSubmit : function() {
		// 手机号码
		var userNumber = $("#userNumber").val();
		$.ajax({
			url : GLOBAL_INFO.SMS_REQ_URI,
			type : 'POST',
			data : {
				"busiNum" : "LOGIN",
				"mobile": userNumber,
				"smsType" : "1"
			},
			timeout : 10000,
			success : function(ret)
			{
				var result = eval("(" + ret + ")");
				loginComponent.showSmsSendResult(result);
			}
		});
	},

	// 发送结果处理
	showSmsSendResult : function(data){
		if(data && data.resultCode == '0'){
			//$("#userLogin-error-result").html("短信发送成功!").show();
			$("#password-error-message").empty().hide();
			$("#userLogin-error-result").empty().hide();
			$("#loginForm-link-password-2").hide();
			this.countTime(30);
		} else {
			var errorMessage = "短信密码发送失败，请稍后再试！";
			if(data.logicCode == '-3005'){
				errorMessage = "您的手机号码不存在，请确认后登录!";
			} else if(data.logicCode == '-4004'){
				errorMessage = "您的IP地址已被列入黑名单，无法登录!";
			} else if(data.logicCode == '-4005'){
				errorMessage = "您的手机号码已被列入黑名单，无法登录!";
			} else if(data.logicCode == '-4027'){
				errorMessage = "您的短信密码在有效期范围内输入错误超过3次，请稍后重新获取!";
			} else if(data.logicCode == '-4028'){
				errorMessage = "短信密码已发送到您的手机，请稍后重新获取!";
			} else if(data.logicCode == '-4029'){
				errorMessage = "您的手机号码已停机状态，请恢复后登录!";
			} else if(data.logicCode == '-4030'){
				errorMessage = "短信密码仅支持江苏移动用户!";
			} else if (data.logicCode == '-4050') {
				errorMessage = "动态密码已发送到您的手机，5分钟后再重新获取!";
			} else if (data.logicCode == '-4051') {
				errorMessage = "登陆用户过多，请稍后重试!";
			}
			$("#userLogin-error-result").html(errorMessage).show();
		}
	},
	countTime : function (count){
		$("#smsVerifyCodeSendOver").show();
		$("#smsSendMessage").show();
		$("#smsSendOverCounter").html(count).show();
		if(this.counterId){clearInterval(this.counterId);}
		this.count = count;
		this.counterId = window.setInterval(function()
		{
			loginComponent.count--;
			$("#smsSendOverCounter").html(loginComponent.count);
			if (loginComponent.count < 1)
			{
				if(this.counterId)
				{
					window.clearInterval(this.counterId);
					if(this.passwordType == '1'){
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

	logout : function(){
		//同一个页面，每天出现一次
		//var cookieName=loginComponent.analyzeUrl();
		 //var logOutCount = getCookie(cookieName)==null ? 0:getCookie(cookieName);
		var mobile=getCookie("last_success_login_mobile");
		var date = new Date();
		//每天总的次数
		 var logOutCountALL = getCookie(mobile+"userQuitCountDayALL"+date.getDate())==null ? 0 :getCookie(mobile+"userQuitCountDayALL"+date.getDate());
		//每月总的次数
		 var userOutCounMonthALL = getCookie(mobile+"userQuitCountMonthALL"+date.getMonth())==null ? 0 :getCookie(mobile+"userQuitCountMonthALL"+date.getMonth());
		 //用户点过残忍退出标记
		 var userQuitFlag=getCookie(mobile+"userQuitFlag"+date.getDate());
		 if(logOutCountALL>=2 || (userQuitFlag!=null && userQuitFlag==1) || userOutCounMonthALL>=5)
		 {
			 loginComponent.logoutSure();
		 }
		 else
		 {
			//  设置 每个页面的cookie
	       	//setCookie(cookieName,parseInt(logOutCount)+1,10 * 365 * 24 * 60 * 60 * 1000);
	       	// 设置每天总的次数cookie
	    	setCookie(mobile+"userQuitCountDayALL"+date.getDate(),parseInt(logOutCountALL)+1,24*60*60*1000);
	    	//设置每个月的总的显示次数
	    	setCookie(mobile+"userQuitCountMonthALL"+date.getMonth(),parseInt(userOutCounMonthALL)+1,31*24*60*60*1000);
	    	$("#stayDIV").show();
	    	$(".mask").show();
		 }
	},

	logoutSure : function(type,redictUrl){
		// 清除Cookie 保持登录
       	//setCookie("keepLogin","",90 * 24 * 60 * 60 * 1000);
		//清除TOP位置用户号码cookie
		setCookie("topUserMobile","",15 * 24 * 60 * 60 * 1000);
		$.busiReq({
			"data" : {
				"reqUrl": "logout",
                "mobile" : loginComponent.userInfo.userMobile
			},
			"success":function(result){
				var webtransId = BmonPage.getTransientParameter('webtransId');
                if (""!=webtransId&&"undefined"!=webtransId&&webtransId!=undefined) {
                	var busiNum = window.location.hash;
                	if(null != busiNum && '' != busiNum)
            		{
            			busiNum = window.location.hash.substr(0,window.location.hash.indexOf('@'));
            		}
            		window.location.href="http://service.js.10086.cn/index.jsp"+busiNum;
                }else if(type == 2){
					window.location.href = redictUrl;
				}else {
                	window.location.reload(true);
                }
			
				var data = eval("(" + result + ")");
				if(data && data.resultCode == '0'){
					if(data.resultObj){
						loginComponent.isNeedVerifyCode = data.resultObj.isNeedVerifyCode;
						if(loginComponent.isNeedVerifyCode){
							$("#popBox-verifyCode-idType").show();
						} else {
							$("#popBox-verifyCode-idType").hide();
						}
					}
					loginComponent.lastGetVerifyCodeTime = null;
					loginComponent.initPage();
					//loginComponent.getHeaderInfo();
					//loginComponent.getHotRankInfo();
					//loginComponent.getQuickServiceInfo();

                    // 飞信退出
                    $("#fetionPreInit_Component").remove();
                    $("#fetionAjax_Component").remove();
                    if ($(".fxbar_wrap") != null && $(".fxbar_wrap") != undefined) {
                        $(".fxbar_wrap").hide();
                    }



					//navComponent.headerSearchIETip();
				}
		}});
	},	
	stay : function(){
		$(".mask").hide();
		$("#stayDIV").hide();			
	},
	quit:function(){
		var date = new Date();
		var mobile=getCookie("last_success_login_mobile");
		//残忍退出cookie
		setCookie(mobile+"userQuitFlag"+date.getDate(),1,24*60*60*1000);
		var textArea=$.trim($('#quitVal').val());		
		var types="";		
		var pageUrl=loginComponent.analyzeUrl();
		
		//获取页面选择的是几颗星星
		var scoreItemRate = $(".ll-score-total").val();
		
		if("20"==scoreItemRate ){
			types=1;
		}else if("40"==scoreItemRate){
			types=2;
		}else if("60"==scoreItemRate){
			types=3;
		}else if("80"==scoreItemRate){
			types=4;
		}else if("100"==scoreItemRate || "" ==scoreItemRate){
			types=5;
		}

		if(types !="" || textArea !="")
		{
			$.busiReq({
				data:{
					"reqUrl"	: "userQuitInfo",				
					"types":types,					
					"content":textArea,
					"pageUrl":pageUrl
				},
				success:function(data){
					var result = eval("(" + data + ")");
					if (result && result.resultCode == "0"){
						
					}else if(result.systemCode == "-200010"){
						var redictUrl = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
						window.location.href="./login.html?url="+redictUrl;
					}	
				}
			});
		}
		$(".mask").hide();
		$("#stayDIV").hide();
		loginComponent.logoutSure();
	},
	analyzeUrl:function(){
		var currentUrl=window.location.href;
		var result=currentUrl;
		if(currentUrl.indexOf('?')!=-1){
			result=currentUrl.substring(0,currentUrl.indexOf("?"));
		}
		return result;
	}
});

/*我的移动登录前 liulj*/
//首页签到组件New RIGHT
var loginSignNewComponent = BmonPage.createComponent('loginSignRight');
$.extend(loginSignNewComponent,{
	id : 'loginSignRight',
	name : '首页签到组件',
	init : function(result){
		// 系统应急显示 begin	==========
		if(result && result.urgencyNotice && result.urgencyNotice.resultObj){
			var showFlag = result.urgencyNotice.resultObj;
			if(showFlag != null && showFlag != '' && typeof(showFlag) != "undefined"){
				$("#topdiv").hide();
				$(".topbar-alert").empty().html(result.urgencyNotice.resultObj).show();
			}
		}
		// 系统应急显示 end	==========
		this.showLoginSignNewInfo(result);
		loginSignNewComponent.index_rightLogin();
	},

	// 显示页面信息
	showLoginSignNewInfo : function(data){
		if(data){
			// 未登录
			if(data.isLogin == '0'){
				$("#showLoginTemplete").show();
				$("#loginUser-message-new").hide();
				$("#iccTest").hide();
				$("#unlogin-my").attr("href","javascript:BmonPage.showLoginDialog('my');");
				if(true){	//购物车查询成功
					if(data.ordersAndMalls.resultObj.mallNums != 0){
						var showContent = "<a href=\"http://www.js.10086.cn/deal/deal/cart.html\">购物车中有"+data.ordersAndMalls.resultObj.mallNums+"件商品 &nbsp; 查看</a>";
						$("#loginSign_mallNums").html(showContent);
					}
				}
			}
			// 已登录
			else if(data.isLogin == '1'){
				$("#showLoginTemplete").hide();
				if(data.ordersAndMalls.resultObj.orders != -1){	//订单查询成功
					$("#loginSign_spanOrders").empty();
					$("#loginSign_spanOrders").html(data.ordersAndMalls.resultObj.orders);
				}else{
					$("#loginSign_spanOrders").html("0");
				}
				if(data.ordersAndMalls.resultObj.mallNums != -1){	//购物车查询成功
					if(data.ordersAndMalls.resultObj.mallNums != 0){
						var showContent = "<a href=\"http://www.js.10086.cn/deal/deal/cart.html\">您的购物车中有"+data.ordersAndMalls.resultObj.mallNums+"件商品 &nbsp; 查看</a>";
						$("#loginSign_mallNums").html(showContent);
					}
				}
				$("#loginUser-message-new").show();
             // 获取问卷调查方法
		        // 增加人：丁亮
		        // 增加日期：2013-8-8
		        loginSignNewComponent.queryMsg();
			}
		}
	},
	
	index_rightLogin : function(){
		//初始定义
		var l = $(".panel-firstscreen .right-login"),
		      btn = l.find(".btnArea a"),
			  subMenu = l.find(".subMenu"),
		      btn_login = btn.filter(".btn-unlogin"),
		      btn_cart = btn.filter(".btn-cart"),
			  btn_order = btn.filter(".btn-order"),
			  btn_cart2 = btn.filter(".btn-cart2"),
			  btn_message = btn.filter(".btn-message");
		
		l.mouseleave(function(){submenu_hide();});
		btn_login.mouseover(function(){submenu_hide();});
		btn_cart.mouseover(function(){submenu_show($(this),".subMenu-cart")});
		btn_cart2.mouseover(function(){submenu_show($(this),".subMenu-cart")});
		btn_order.mouseover(function(){submenu_show($(this),".subMenu-order")});
		btn_message.mouseover(function(){submenu_show($(this),".subMenu-message")});
		
		function submenu_show(me,subM){
		  l.css("position","relative");
		  btn.removeClass("current");
		  me.addClass("current");
		  subMenu.hide().filter(subM).show();
		}
		function submenu_hide(){
		  l.css("position","");
		  btn.removeClass("current");
		  subMenu.hide();
}
	},
    /**
     * 登录后获取用户推送问卷调查
     * 开发人：丁亮
     * 开发时间：2013-8-8
     */
	queryMsg : function(){
		//取得cookie数据是不是仍就处在有效期内
		var key = TOUCHAPP.GETTOUCH.getCookie("KEY_IN_TIMES");
		
			//处于新一轮十五天周期内
			$.commonReq({
	            "data" : {
	                "reqUrl" : "msgCenter",
	                "methodNew" : "getUserFromLogin",
					"time":1,
	                "t" : Math.random()
	            },
	            "success" : function(data){
	                // 获取问卷调查状态,1:免打扰状态,0:非免打扰状态并显示提示消息
	                var result = eval("(" + data + ")");
	                if(result && result.resultCode == '0'){
	                    loginSignNewComponent.surveyHtml(result);
	                }
	            }
       		 });
			 var key = TOUCHAPP.GETTOUCH.setCookie("KEY_IN_TIMES",'0',15*24*60*60*1000);
    	$("#loginSurveyStuate").html("<a href='#XXZX' target='_blank'>[查看所有消息]</a>");
    },
	msgCenterHtml : function(data){
		var survery_html = "";
        if(data.resultObj && data.resultCode == '0'){
			var msg = data.resultObj.importMsg;
			if(msg.length >0 && 6 > msg.length){
				var html="";
				for(var i=0;i<msg.length;i++){
					var item = msg[i];
					var msgid = item.msg_id;
					if (msgid.indexOf("DCWQ")>-1) {
						html += "<li><a href='#XXZX' target='_blank' >点击即可评价移动服务，您的意见对我们很重要哦！</a>" +
						"</li>";
					}
					else {
						html += "<li><a href='#XXZX' target='_blank' >" + msg[i].msg_title + "</a>" +
						"</li>";
					}
					/**
					var item = msg[i];
					var msgid = item.msg_id;
					if("DCWQ20130905085553305966"==msgid){
						html+="<div class='title'> <a href='#XXZX' target='_blank' >"+"●&nbsp;&nbsp;&nbsp;"+msg[i].msg_title+"</a>"+
						"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>"+
						"</div>";
					}else{
						var title=item.msg_title;
						if ('null' != title && '' != title && null != title) {
							html += "<div class='title'> <a href='#XXZX' target='_blank' >" + "●&nbsp;&nbsp;&nbsp;为您推荐" + msg[i].msg_title + "业务</a>" +
							"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>" +
							"</div>";
						}
					}
					*/
					
				}
				$("#loginSurveyMessage").html(html);
			}
			if(msg.length > 5){
				var html="";
				for(var i=0;i<5;i++){
					var item = msg[i];
					html+="<li><a href='#XXZX' target='_blank' >点击即可评价移动服务，您的意见对我们很重要哦！</a>"+
					"</li>";

					/**
					var msgid = item.msg_id;
					if("DCWQ20130905085553305966"==msgid){
						html+="<div class='title'> <a href='#XXZX' target='_blank' >"+"●&nbsp;&nbsp;&nbsp;"+msg[i].msg_title+"</a>"+
						"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>"+
						"</div>";
					}else{
						var title=item.msg_title;
						if ('null' != title && '' != title && null != title) {
							html += "<div class='title'> <a href='#XXZX' target='_blank' >" + "●&nbsp;&nbsp;&nbsp;为您推荐" + msg[i].msg_title + "业务</a>" +
							"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>" +
							"</div>";
						}
					}
					*/
				}
				$("#loginSurveyMessage").empty().html(html);
			}
			
        }
        else{
            $("#loginSurveyMessage").html("<li>您目前没有新消息</li>");
        }
	},
	readMsg : function(id){
		$.commonReq({
	            "data" : {
	                "reqUrl" : "msgCenter",
	                "methodNew" : "updateMsg",
					"msgId":id,
	                "t" : Math.random()
	            },
	            "success" : function(data){
	                // 更新消息为已读
	                var result = eval("(" + data + ")");
	                
	            }
       		 });
	},
	
    /**
     * 关闭问卷调查
     * 增加人：丁亮
     * 增加日期：2013-8-8
     */
    noInterruptUser : function(){
        $.busiReq({
            "data" : {
                "reqUrl" : "getUserSurvey",
                "methodStr" : "noInterruptUser",
                "t" : Math.random()
            },
            "success" : function(data){
                var result = eval("(" + data + ")");
                if(result && result.resultCode == '0'){
                    if(result.resultObj == "1"){
                        return;
                    }
                    $("#loginSurveyMessage").html("<li>您目前没有新消息</li>");
                    $("#loginSurveyStuate").html("<a href=\"javascript:void(0);\" onclick=\"loginSignNewComponent.relieveNoInterruptUser();\">[继续接收问题调查]</a>");
                    loginComponent.userInfo.surveyStauts = 1;
                }
            }
        });
    },
    /**
     * 继续接收问卷调查
     * 增加人：丁亮
     * 增加时间：2013-8-12
     */
    relieveNoInterruptUser : function(){
        $.busiReq({
            "data" : {
                "reqUrl" : "getUserSurvey",
                "methodStr" : "relieveNoInterruptUser",
                "t" : Math.random()
            },
            "success" : function(data){
                var result = eval("(" + data + ")");
                if(result && result.resultCode == '0'){
                    if(result.resultObj == "1"){
                        return;
                    }
                    
                    loginSignNewComponent.surveyHtml(result);
                }
            }
        });
    },
    // 组装消息推送
    surveyHtml : function(data){
        var survery_html = "";
        if(data.resultObj && data.resultCode == '0'){
			var msg=data.resultObj.importMsg;
			//$('#surveyNewMsgDiv').show();
			//setTimeout("$('#surveyNewMsgDiv').hide();",60000);
			if(msg.length >0 && 6 > msg.length){
				var html ="";
				for(var i=0;i<msg.length;i++){
					var item = msg[i];
					var msgid = item.msg_id;
					if (msgid.indexOf("DCWQ")>-1) {
						html += "<li><a href='#XXZX' target='_blank' >点击即可评价移动服务，您的意见对我们很重要哦！</a>" +
						"</li>";
					}
					else {
						html += "<li><a href='#XXZX' target='_blank' >" + msg[i].msg_title + "</a>" +
						"</li>";
					}
					
					/**
					var msgid = item.msg_id;
					if("DCWQ20130905085553305966"==msgid){
						html+="<div class='title'> <a href='#XXZX' target='_blank' >"+"●&nbsp;&nbsp;&nbsp;"+msg[i].msg_title+"</a>"+
						"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>"+
						"</div>";
					}else{
						var title=msg[i].msg_title;
						if ('null' != title && '' != title && null != title) {
							html += "<div class='title'> <a href='#XXZX' target='_blank' >" + "●&nbsp;&nbsp;&nbsp;为您推荐" + msg[i].msg_title + "业务</a>" +
							"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>" +
							"</div>";
						}
					}
					*/
				}
				$("#loginSurveyMessage").html(html);
			}
			if(msg.length > 5){
				var html="";
				for(var i=0;i<5;i++){
					var item = msg[i];
					var msgid = item.msg_id;
					if (msgid.indexOf("DCWQ")>-1) {
						html += "<li><a href='#XXZX' target='_blank' >点击即可评价移动服务，您的意见对我们很重要哦！</a>" +
						"</li>";
					}
					else {
						html += "<li><a href='#XXZX' target='_blank' >" + msg[i].msg_title + "</a>" +
						"</li>";
					}
					
					/**
					var msgid = item.msg_id;
					if("DCWQ20130905085553305966"==msgid){
						html+="<div class='title'> <a href='#XXZX' target='_blank' >"+"●&nbsp;&nbsp;&nbsp;"+msg[i].msg_title+"</a>"+
						"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>"+
						"</div>";
					}else{
						var title=item.msg_title;
						if ('null' != title && '' != title && null != title) {
							html += "<div class='title'> <a href='#XXZX' target='_blank' >" + "●&nbsp;&nbsp;&nbsp;为您推荐" + msg[i].msg_title + "业务</a>" +
							"<a class='close' onclick='javascript:$(this).parent().hide();'  href='javascript:void(0);'><img src='http://files01.js.10086.cn/obsh/pics/closeblueBtn.gif'/></a>" +
							"</div>";
						}
					}
					*/
				}
				$("#loginSurveyMessage").empty().html(html);
			}
			/**
	        // 非免打扰展示内容
	        else{
                if(data.resultObj && data.resultObj.resList){
                	$('#surveyNewMsgDiv').show();
                	setTimeout("$('#surveyNewMsgDiv').hide();",5000);
                    var userSurveis = data.resultObj.resList;
	                if(userSurveis.length > 0){
	                    var taskCount = userSurveis.length;
	                    var taskScType = userSurveis[0].scriptType;
	                    var taskName = userSurveis[0].taskName;    // 问卷调查名称
	                    var taskId = userSurveis[0].taskId;        // 问卷调查编码
	                    var taskType = userSurveis[0].taskType;    // 问卷调查类型
	                    var taskScId = userSurveis[0].scriptId;    // 编码
                        var taskCtId = userSurveis[0].contactId;   // 接触编码
	                    var taskUrl = "";
	                    if(taskScType == "0"){
	                          taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_detail.jsp?tid="+taskId+"&ct="+ taskCtId +"&sc="+taskScId;
	                    }
	                    
	                    if(taskScType == "1"){
	                          taskUrl = "http://www.js.10086.cn/iquestionnaire/page/wjdc_single_detail.jsp?tid="+taskId+"&ct="+ taskCtId +"&sc="+taskScId;
	                    }
	                    
	                    $("#loginSign_userSurvey").html(taskCount).show();
	                    $("#loginSurveyMessage").html("江苏移动邀请您参加"+ taskName +"&nbsp;<a target=\"_blank\" href=\""+ taskUrl +"\">点击进入</a>");
	                    $("#loginSurveyStuate").html("<a href=\"javascript:void(0);\" onclick=\"loginSignNewComponent.noInterruptUser();\">不再接收问卷调查</a>");
	                    loginComponent.userInfo.surveyStauts = 0;
                        return;
	                }
                }
                
                $("#loginSign_userSurvey").html(0).hide();
	            $("#loginSurveyMessage").html("您目前没有消息");
	            $("#loginSurveyStuate").html("<a href=\"javascript:void(0);\" onclick=\"loginSignNewComponent.noInterruptUser();\">不再接收问卷调查</a>");
	            loginComponent.userInfo.surveyStauts = 0;
	        }
	        */
        }
        else{
            $("#loginSurveyMessage").html("<li>您目前没有新消息</li>");
        }
    }
});


//首页系统公告组件
var noticeComponent = BmonPage.createComponent('notice');

$.extend(noticeComponent,{
	id : 'notice',
	name : '首页系统公告组件',
	noticHtml : '',
	init : function(result){
		this.showNoticeInfo(result);
		//this.showUserGuide();
	},

	showNoticeInfo : function(data){
		if(data && data.resultCode == '0' && data.resultObj){
			// 系统公告个数
			var noticeCount = 0;
			// 我们在成长个数
			var growingCount = 0;
			for(var i=0;i<data.resultObj.length;i++){
				var noticeData = data.resultObj[i];
				// 公告类型
				var noticeType = noticeData.noticeType;
				// 公告编码
				var noticeNum = noticeData.noticeNum;
				// 公告名称
				var noticeName = noticeData.noticeName;
				// 公告内容
				var noticeInfo = noticeData.noticeInfo;
				// 生效时间
				var effectTime = noticeData.effectTime;
				// 系统公告
				if(noticeType == '0'){
					noticeCount ++;
					if(noticeCount > 4){
						continue;
					}
					$("#notice-notice").append("<li><a target='_blank' href=\"" + GLOBAL_INFO.URL_PREFIX + "/jsp/notice.jsp?noticeId=" + noticeNum + "\" >" + noticeName + "</a></li>");
				}
				if(i < 4){
					this.noticHtml += "<li><a target='_blank' href=\"" + GLOBAL_INFO.URL_PREFIX + "/jsp/notice.jsp?noticeId=" + noticeNum + "\" >" + noticeName + "</a></li>";
				}
			}
			//公告TAB切换
			public_tab(".index-mainR-notice",".tab-item",".main-box-body","selected","click");
			//loginSign 公告
			$("#loginSign_notic").html("<ul class=\"clearfix\">"+this.noticHtml+"</ul>");
		}
	},

	// 新手引导
	showUserGuide : function(){
		var visitedCookie = getCookie("visited");
    	var hash = window.location.hash;
    	if(visitedCookie && visitedCookie == '1'){}else{
    		this.userGuide();
    		setCookie("visited","1",10 * 365 * 24 * 60 * 60 * 1000);
    	}
	},

	//新手指引
	userGuide : function(){
		var mask = $("<div></div>").css({opacity:"0.5",filter:"alpha(opacity=50)",width:"100%",background:"#000",position:"absolute",left:"0",top:"0",zIndex:"990"}).height($(document).height());
		mask.insertBefore(".introPopArea");
		var p = $(".introPopArea").find(".introPop");
		p.eq(0).fadeIn();
		p.find(".btn3").click(function(){p.fadeOut(function(){mask.remove();});});
		p.not(":eq(5)").find(".btn1,.btn2").click(function(){$(this).parent(p).fadeOut().next(p).fadeIn();});
		p.eq(5).find(".btn1").click(function(){p.fadeOut(function(){mask.remove();});});
	}
});

//首页快捷菜单组件
var quickMenuComponent = BmonPage.createComponent('quickMenuNew');

$.extend(quickMenuComponent,{
	id : 'quickMenuNew',
	name : '首页快捷菜单组件',
	isMouseout : null,
	reloaded : false,
	quickMenuImgItem : new Array(),
	init : function(result){
		this.cacheData(result);
		this.reloaded = true;
		this.isShowTips();
		this.showData();
	},
	
	cacheData : function(result){
		var map = new Map();
		if(result && result.resultCode == '0' && result.resultObj){
			var data = result.resultObj;
			for(var i=0;i<data.length;i++){
				map.put(data[i].busiNum,data[i].jbNum);
			}
			// 宽带账号首页
			map.put('lan_home','0900');
			// 固定电话账号首页
			map.put('phone_home','0800');
			// 代理商账号首页
			map.put('agent_home','0400');
		}
		this.cache('data',map);
	},

	hideMenuTips : function(){
		$("#menu-tips").hide();
	},

	closeMenuTips : function(){
		$("#menu-tips").hide();
		setCookie("menuTips_visited","1",10 * 365 * 24 * 60 * 60 * 1000);
	},

	isShowTips : function(){
		var menuTipsVisitedCookie = getCookie("menuTips_visited");
    	if(menuTipsVisitedCookie && menuTipsVisitedCookie == '1'){
    		$("#menu-tips").hide();
    	}else{
    		$("#menu-tips").show();
    	}
	},
	showData : function(){
		if(window.location.hash.indexOf("#home") != -1){
			$("#menu-tips").hide();
		}
		var data = this.getCached('data');
		if(typeof(loginComponent) != 'undefined' && loginComponent && loginComponent.userInfo){
			// 大品牌
			var brandJbNum = loginComponent.userInfo.brandJbNum;
			if(brandJbNum == 'QQT' || brandJbNum == 'SZX'){
				$("#quickMenu-jfcx").show();
				//$("#quickMenu-jfdh").show();
				//$("#quickMenu-mzcx").hide();
				//$("#quickMenu-mzdh").hide();
				//$("#CDFL_010304").attr("href","#JFDHCX_JFCX").html("积分查询兑换");
			} else if(brandJbNum == 'DGDD'){
				//$("#quickMenu-mzcx").show();
				//$("#quickMenu-mzdh").show();
				$("#quickMenu-jfcx").hide();
				//$("#quickMenu-jfdh").hide();
				//$("#CDFL_010304").attr("href","#MZDHCX_MZCX").html("M值查询兑换");
			} else {
				//$("#quickMenu-mzcx").show();
				//$("#quickMenu-mzdh").show();
				$("#quickMenu-jfcx").show();
				//$("#quickMenu-jfdh").show();
				//$("#CDFL_010304").attr("href","#JFDHCX_JFCX").html("积分查询兑换");
			}
		}
		// 解决IE8情况下，业务不在层级下面，快捷菜单为空白的问题
		var hash = window.location.hash;
		if(hash == '' || hash.indexOf('#home') != -1 || hash.indexOf('#XFGK') != -1 || hash.substr(1).split('@')[0] == 'searchResult'){
			this.showQuickMenu();
			$("#hotRank").show();
		}
		// 手机营业厅 隐藏“网上营业厅导航”菜单内容
		else if(hash.indexOf('android') != -1 || hash.indexOf('iPhone') != -1 || hash.indexOf('wap') != -1){
			this.showServiceMenu();
		} else {
			this.showServiceMenu();
			//this.showMenuData(data);
		}
	},

	// 显示快速导航
	showQuickMenu : function(){
		$("#quickMenus").show();
		$("#quickMenus").removeAttr("class");
		$("#quickMenu").show();
		// IE下有z-index不能hide
		$(".mainLeft-quickMenu-detailMenu").removeAttr("style");
		$(".mainLeft-quickMenu-detailMenu").hide();
		$("#serviceMenu").hide();
		$("#nav-quickNav").removeAttr("style");
		$("#nav-quickNav").unbind();
		$("#quickMenu").unbind();
		this.mainLeftQuickMenu();
	},

	// 显示具体菜单
	showServiceMenu : function(){
		$("#quickMenus").show();
		//内部导航 变化  begin
		$("#quickMenu").show();
		//$("#serviceMenu").show();
		//end
		//$("#nav-quickNav").attr("style","cursor:pointer;");
		//$("#quickMenus").attr("class","main-topSpace-relative");
		//this.mainLeftQuickMenuShow();

	},

	// 显示菜单内容
	showMenuData : function(data){
		var hash = window.location.hash;
		$("#serviceMenu .main-box-body a").removeAttr("class");
		if(data){
			var jbNum = '';
			if(hash.substr(1).split('@')[0] == 'JF_JS'){
				jbNum = '010601';
			} else if(hash.substr(1).split('@')[0] == 'XXZX'){
				jbNum = '010503';
			}
			else{
				jbNum = data.get(hash.substr(1).split('@')[0]);
			}
			// 不正确的页面显示总的菜单
			if(jbNum && jbNum != '' && hash.indexOf('#home') == -1){
				$("#serviceMenu").children().hide();
				if(jbNum.substr(0,2) == '01'){
					$("#hotRank").show();
					//内页菜单全部展示
					$("#CDFL_0101").show();
					$("#CDFL_0102").show();
					$("#CDFL_0103").show();
					$("#CDFL_0104").show();
					$("#CDFL_0105").show();
					$("#CDFL_0106").show();
					$("#CDFL_0107").show();
					$("#CDFL_0108").show();
					//内页菜单样式全部还原
					$("#CDFL_0101 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0102 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0103 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0104 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0105 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0107 .serviceMenu-head").attr("class","serviceMenu-head");
					$("#CDFL_0108 .serviceMenu-head").attr("class","serviceMenu-head");
					//内页菜单中子业务隐藏
					$("#CDFL_0101 .main-box-body").hide();
					$("#CDFL_0102 .main-box-body").hide();
					$("#CDFL_0103 .main-box-body").hide();
					$("#CDFL_0104 .main-box-body").hide();
					$("#CDFL_0105 .main-box-body").hide();
					$("#CDFL_0106 .main-box-body").hide();
					$("#CDFL_0107 .main-box-body").hide();
					$("#CDFL_0108 .main-box-body").hide();
					//选中的内页增加样式
					if(hash.substr(1).split('@')[0] == 'JFDHCX_JFCX'){
						$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head current");
						//选中的内页子业务显示
						$("#CDFL_0106 .main-box-body").show();
						if(jbNum.length >=6){
							$("#CDFL_" + jbNum.substr(0,6)).attr("class","selected");
						}
					}else if(hash.substr(1).split('@')[0] == 'SNYKDH'){
						$("#CDFL_0104 .serviceMenu-head").attr("class","serviceMenu-head current");
						$("#CDFL_0104 .main-box-body").show();
						$("#CDFL_010401").attr("class","");$("#CDFL_010402").attr("class","");
						$("#CDFL_010403").attr("class","selected");
					}else if(hash.substr(1).split('@')[0] == 'EBCX'){
						$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head current");
						//选中的内页子业务显示
						$("#CDFL_0106 .main-box-body").show();
						if(jbNum.length >=6){
							$("#CDFL_" + jbNum).attr("class","selected");
						}
					}
					else{
						$("#CDFL_" + jbNum.substr(0,4) + " .serviceMenu-head").attr("class","serviceMenu-head current");
						//选中的内页子业务显示
						$("#CDFL_" + jbNum.substr(0,4) + " .main-box-body").show();
						if(jbNum.length >=6){
							$("#CDFL_" + jbNum.substr(0,6)).attr("class","selected");
						}
					}

				} else if(jbNum.substr(0,2) == '04' || jbNum.substr(0,2) == '08' || jbNum.substr(0,2) == '09'){
					$("#leftQuickService").hide();
					$("#historyService").hide();
					$("#hotRank").hide();
					$("#CDFL_" + jbNum.substr(0,2)).show();
					$("#CDFL_" + jbNum.substr(0,2) + " .main-box-body").show();
					if(jbNum.length >=4){
						$("#CDFL_" + jbNum.substr(0,4)).attr("class","selected");
					}
					$("#nav-quickNav").removeAttr("style");
					$("#nav-quickNav").unbind();
					$("#quickMenu").unbind();
				}

				$("#serviceMenu .main-box-body a").click(function(){
					$(this).attr("class","selected");
				});
			} else {
				$("#hotRank").show();
				this.showQuickMenu();
			}
		}
	},

	//快速导航
	mainLeftQuickMenu : function(){
		var quickMenu = $("#quickMenu");
		var quickMenu_row = quickMenu.find(".mainLeft-quickMenu-row");
		var quickMenu_detailMenu = quickMenu.find(".mainLeft-quickMenu-detailMenu");
		var quickMenu_detailMenuList = quickMenu_detailMenu.find(".mainLeft-quickMenu-detailMenu-l");
		var isMouseout;

		quickMenu_row.mouseover(function(){
			lazyloadPageOption($(".quickMenuImg"));
			quickMenu.css("z-index","999");
		    var i = quickMenu_row.index(this);
		    quickMenu_detailMenu.show().css("top","0px");
		    if(i == 0 || i == 2 || i == 3 || i ==4){
		    	quickMenu_detailMenu.css("min-height","232px");
		    	quickMenu_detailMenuList.css("min-height","222px");
		    	//IE6
		    	if($.browser.msie&&($.browser.version==6.0)&&!$.support.style){
		    		quickMenu_detailMenu.css("height","232px");
		    		quickMenu_detailMenuList.css("height","222px");
		    	}
		    }else{
		    	quickMenu_detailMenu.css("min-height","311px");
		    	quickMenu_detailMenuList.css("min-height","301px");
		    	//IE6
		    	if($.browser.msie&&($.browser.version==6.0)&&!$.support.style){
		    		quickMenu_detailMenu.css("height","311px");
		    		quickMenu_detailMenuList.css("height","301px");
		    	}
		    }
		    quickMenu_row.removeClass("selected").eq(i).addClass("selected");
		    quickMenu_detailMenuList.hide().eq(i).show();
		    $(".quickMenu-hd").hide().eq(i).show();

		    // 解决IE6快速充值的金额显示问题
		    $("#charge-money").hide();
		    $("#relationPkgSelect").hide();
		    $("#takeEffectSelect").hide();
		    $("#td_slt_package").hide();
		    $("#sel_effectMode").hide();
		});

		//菜单隐藏
		quickMenu.mouseover(function(){
			if(isMouseout) clearTimeout(isMouseout);
		});

		quickMenu.mouseout(function(){
			isMouseout = setTimeout(function(){
				quickMenu_detailMenu.hide();
				quickMenu_row.removeClass("selected");
				quickMenu.css("z-index","0");
				// 解决IE6快速充值的金额显示问题
			    $("#charge-money").show();
			    $("#relationPkgSelect").show();
			    $("#takeEffectSelect").show();
			    $("#td_slt_package").show();
		    	$("#sel_effectMode").show();
				},10);
		});
	},

	//内页快速导航-显示隐藏
	mainLeftQuickMenuShow : function(){
		var hash = window.location.hash;
		var m = $("#nav-quickNav");
		var quickMenu = $("#quickMenu");
		var isMouseout;

		this.mainLeftQuickMenu();

		m.bind('mouseenter',function(){
				quickMenu.show().parent(".main-topSpace-relative").css("z-index","2");
				// IE下有z-index不能hide
				$(".mainLeft-quickMenu-detailMenu").removeAttr("style");
				$(".mainLeft-quickMenu-detailMenu").hide();
				$("#menu-tips").hide();
				$("#nav-quickNav").css("background-position","0 -175px");
				qms();
			});
		m.bind('mouseleave',function(){
				$("#nav-quickNav").css("background-position","0 -80px");
				qmh();
			});

		quickMenu.bind('mouseenter',function(){
				$("#nav-quickNav").css("background-position","0 -175px");
				qms();
		});

		quickMenu.bind('mouseleave',function(){
				$("#nav-quickNav").css("background-position","0 -80px");
				qmh();
		});

		function qms(){
			if(isMouseout) clearTimeout(isMouseout);
		}

		function qmh(){
			isMouseout = setTimeout(function(){quickMenu.hide().parent(".main-topSpace-relative").removeAttr("style");},50);
		}
	}

});

//首页快捷菜单组件NEW
var quickMenuComponent = BmonPage.createComponent('quickMenuLeft');

$.extend(quickMenuComponent,{
	id : 'quickMenuLeft',
	name : '首页快捷菜单组件',
	isMouseout : null,
	reloaded : false,
	quickMenuImgItem : new Array(),
	init : function(result){
		this.cacheData(result);
		this.reloaded = true;
		this.showData();
	},
	
	cacheData : function(result){
		var map = new Map();
		if(result && result.resultCode == '0' && result.resultObj){
			var data = result.resultObj;
			for(var i=0;i<data.length;i++){
				map.put(data[i].busiNum,data[i].jbNum);
			}
			// 宽带账号首页
			map.put('lan_home','0900');
			// 固定电话账号首页
			map.put('phone_home','0800');
			// 代理商账号首页
			map.put('agent_home','0400');
		}
		this.cache('data',map);
	},

	showData : function(){
		var data = this.getCached('data');
		if(typeof(loginComponent) != 'undefined' && loginComponent && loginComponent.userInfo){
			// 大品牌
			var brandJbNum = loginComponent.userInfo.brandJbNum;
			if(brandJbNum == 'QQT' || brandJbNum == 'SZX'){
				$("#quickMenu-jfcx").show();
			} else if(brandJbNum == 'DGDD'){
				$("#quickMenu-jfcx").hide();
			} else {
				$("#quickMenu-jfcx").show();
			}
		}
		// 解决IE8情况下，业务不在层级下面，快捷菜单为空白的问题
		var hash = window.location.hash;
		if(hash == '' || hash.indexOf('#home') != -1 || hash.indexOf('#XFGK') != -1 || hash.substr(1).split('@')[0] == 'searchResult'){
			this.showQuickMenu();
			//$("#hotRank").show();
		}
		// 手机营业厅 隐藏“网上营业厅导航”菜单内容
		else if(hash.indexOf('android') != -1 || hash.indexOf('iPhone') != -1 || hash.indexOf('wap') != -1){
			this.showQuickMenu();
		} else {
			this.showQuickMenu();
			$("#menuMine").attr("style","margin-bottom:380px;");		
			this.showMenuData(data);
		}
	},

	// 显示快速导航
	showQuickMenu : function(){
		$("#quickMenus").show();
		$("#quickMenus").removeAttr("class");
		$("#quickMenu").show();
		// IE下有z-index不能hide
		//$(".nav-sub").removeAttr("style");
		//$(".nav-sub").hide();
		$("#serviceMenu").hide();
		$("#quickMenu").unbind();
		this.mainLeftQuickMenu();
	},

	// 显示具体菜单
	showServiceMenu : function(){
		$("#quickMenus").show();
		$("#quickMenu").show();
		//$("#serviceMenu").show();
		//$("#nav-quickNav").attr("style","cursor:pointer;");
		//$("#quickMenus").attr("class","main-topSpace-relative");
		//this.mainLeftQuickMenuShow();

	},

	// 显示菜单内容
	showMenuData : function(data){
		var hash = window.location.hash;
		$("#serviceMenu .main-box-body a").removeAttr("class");
		if(data){
			var jbNum = '';
			if(hash.substr(1).split('@')[0] == 'JF_JS'){
				jbNum = '010601';
			} else if(hash.substr(1).split('@')[0] == 'XXZX'){
				jbNum = '010503';
			}
			else{
				jbNum = data.get(hash.substr(1).split('@')[0]);
			}
			// 不正确的页面显示总的菜单
			if(jbNum && jbNum != '' && hash.indexOf('#home') == -1){
				$("#quickMenus").hide();
				$("#quickMenu").hide();
				$("#menuMine").remove("style","margin-bottom:380px;");	
				if(jbNum.substr(0,2) == '01'){
					$("#leftBusiHot").show();
					//内页菜单全部展示
					$("#quickMenus").show();
					$("#quickMenu").show();
//					$("#CDFL_0101").show();
//					$("#CDFL_0102").show();
//					$("#CDFL_0103").show();
//					$("#CDFL_0104").show();
//					$("#CDFL_0105").show();
//					$("#CDFL_0106").show();
//					$("#CDFL_0107").show();
//					$("#CDFL_0108").show();
//					//内页菜单样式全部还原
//					$("#CDFL_0101 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0102 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0103 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0104 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0105 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0107 .serviceMenu-head").attr("class","serviceMenu-head");
//					$("#CDFL_0108 .serviceMenu-head").attr("class","serviceMenu-head");
//					//内页菜单中子业务隐藏
//					$("#CDFL_0101 .main-box-body").hide();
//					$("#CDFL_0102 .main-box-body").hide();
//					$("#CDFL_0103 .main-box-body").hide();
//					$("#CDFL_0104 .main-box-body").hide();
//					$("#CDFL_0105 .main-box-body").hide();
//					$("#CDFL_0106 .main-box-body").hide();
//					$("#CDFL_0107 .main-box-body").hide();
//					$("#CDFL_0108 .main-box-body").hide();
//					//选中的内页增加样式
//					if(hash.substr(1).split('@')[0] == 'JFDHCX_JFCX'){
//						$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head current");
//						//选中的内页子业务显示
//						$("#CDFL_0106 .main-box-body").show();
//						if(jbNum.length >=6){
//							$("#CDFL_" + jbNum.substr(0,6)).attr("class","selected");
//						}
//					}else if(hash.substr(1).split('@')[0] == 'SNYKDH'){
//						$("#CDFL_0104 .serviceMenu-head").attr("class","serviceMenu-head current");
//						$("#CDFL_0104 .main-box-body").show();
//						$("#CDFL_010401").attr("class","");$("#CDFL_010402").attr("class","");
//						$("#CDFL_010403").attr("class","selected");
//					}else if(hash.substr(1).split('@')[0] == 'EBCX'){
//						$("#CDFL_0106 .serviceMenu-head").attr("class","serviceMenu-head current");
//						//选中的内页子业务显示
//						$("#CDFL_0106 .main-box-body").show();
//						if(jbNum.length >=6){
//							$("#CDFL_" + jbNum).attr("class","selected");
//						}
//					}
//					else{
//						$("#CDFL_" + jbNum.substr(0,4) + " .serviceMenu-head").attr("class","serviceMenu-head current");
//						//选中的内页子业务显示
//						$("#CDFL_" + jbNum.substr(0,4) + " .main-box-body").show();
//						if(jbNum.length >=6){
//							$("#CDFL_" + jbNum.substr(0,6)).attr("class","selected");
//						}
//					}

				} else if(jbNum.substr(0,2) == '04' || jbNum.substr(0,2) == '08' || jbNum.substr(0,2) == '09'){
					$("#serviceMenu").show();
					$("#leftQuickService").hide();
					$("#historyService").hide();
					$("#leftBusiHot").hide();
					$("#CDFL_" + jbNum.substr(0,2)).show();
					$("#CDFL_" + jbNum.substr(0,2) + " .main-box-body").show();
					if(jbNum.length >=4){
						$("#CDFL_" + jbNum.substr(0,4)).attr("class","selected");
					}
					$("#nav-quickNav").removeAttr("style");
					$("#nav-quickNav").unbind();
					$("#quickMenu").unbind();
				}

				$("#serviceMenu .main-box-body a").click(function(){
					$(this).attr("class","selected");
				});
			} else {
				$("#leftBusiHot").show();
				this.showQuickMenu();
			}
		}
	},

	//快速导航
	mainLeftQuickMenu : function(){
		var $menuCateItem = $(".wt-aside-menu .menu-cate-item"),
	      $menuCon = $(".wt-aside-menu .menu-con"),
	      $menuConItem = $menuCon.find(".item");
	    
	    function menuTab(obj1,obj2,obj3){
	      var index = 0,timer=null; 
	      obj1.hover(
	        function(){
	          lazyloadPageOption($(".quickMenuImg"));
	          clearTimeout(timer);
	          var index=obj1.index(this);
	          obj1.removeClass("cate-hover").eq(index).addClass("cate-hover");
	          obj2.show();
	          obj3.eq(index).show().siblings().hide();
	        },
	        function(){
	          timer=setTimeout(function(){
	            $menuCon.hide();
	            $menuCateItem.removeClass("cate-hover");
	          },300)
	        }
	      )
	
	      obj3.hover(
	        function(){
	          clearTimeout(timer);
	        },
	        function(){
	          timer=setTimeout(function(){
	            $menuCon.hide();
	            $menuCateItem.removeClass("cate-hover");
	          },300)
	        }
	      )
	      
	      var $wtAsideMenuItemP = $(".wt-aside-menu .menu-list-item p");
	      $wtAsideMenuItemP.find("a:last").css("borderRight","none");
	    }
	    
	    menuTab($menuCateItem,$menuCon,$menuConItem);
		
		/**
		var nav = $(".panel-firstscreen .left-nav"),
        navItem = nav.find(".nav-item"),
	    navMenu = nav.find(".nav-menu");
	    var quickMenu = $("#quickMenu");
	    
	    navItem.mouseover(function(){
	      lazyloadPageOption($(".quickMenuImg"));
	      quickMenu.css("z-index","999");
		  var i = navItem.index($(this));
		  navMenu.hide().eq(i).show();
		  navItem.removeClass("current");
		  $(this).addClass("current");
		});
		
		nav.mouseleave(function(){
		  quickMenu.css("z-index","0");
		  navMenu.hide();
		  navItem.removeClass("current");
		});
		**/

		/**
		var quickMenu = $("#quickMenu");
		var quickMenu_row = quickMenu.find(".mainLeft-quickMenu-row");
		var quickMenu_detailMenu = quickMenu.find(".mainLeft-quickMenu-detailMenu");
		var quickMenu_detailMenuList = quickMenu_detailMenu.find(".mainLeft-quickMenu-detailMenu-l");
		var isMouseout;
		
		quickMenu_row.mouseover(function(){
			lazyloadPageOption($(".quickMenuImg"));
			quickMenu.css("z-index","999");
		    var i = quickMenu_row.index(this);
		    quickMenu_detailMenu.show().css("top","0px");
		    if(i == 0 || i == 2 || i == 3 || i ==4){
		    	quickMenu_detailMenu.css("min-height","232px");
		    	quickMenu_detailMenuList.css("min-height","222px");
		    	//IE6
		    	if($.browser.msie&&($.browser.version==6.0)&&!$.support.style){
		    		quickMenu_detailMenu.css("height","232px");
		    		quickMenu_detailMenuList.css("height","222px");
		    	}
		    }else{
		    	quickMenu_detailMenu.css("min-height","311px");
		    	quickMenu_detailMenuList.css("min-height","301px");
		    	//IE6
		    	if($.browser.msie&&($.browser.version==6.0)&&!$.support.style){
		    		quickMenu_detailMenu.css("height","311px");
		    		quickMenu_detailMenuList.css("height","301px");
		    	}
		    }
		    quickMenu_row.removeClass("selected").eq(i).addClass("selected");
		    quickMenu_detailMenuList.hide().eq(i).show();
		    $(".quickMenu-hd").hide().eq(i).show();

		    // 解决IE6快速充值的金额显示问题
		    $("#charge-money").hide();
		    $("#relationPkgSelect").hide();
		    $("#takeEffectSelect").hide();
		    $("#td_slt_package").hide();
		    $("#sel_effectMode").hide();
		});

		//菜单隐藏
		quickMenu.mouseover(function(){
			if(isMouseout) clearTimeout(isMouseout);
		});

		quickMenu.mouseout(function(){
			isMouseout = setTimeout(function(){
				quickMenu_detailMenu.hide();
				quickMenu_row.removeClass("selected");
				quickMenu.css("z-index","0");
				// 解决IE6快速充值的金额显示问题
			    $("#charge-money").show();
			    $("#relationPkgSelect").show();
			    $("#takeEffectSelect").show();
			    $("#td_slt_package").show();
		    	$("#sel_effectMode").show();
				},10);
		});
		**/
	},

	//内页快速导航-显示隐藏
	mainLeftQuickMenuShow : function(){
		var hash = window.location.hash;
		var m = $("#nav-quickNav");
		var quickMenu = $("#quickMenu");
		var isMouseout;

		this.mainLeftQuickMenu();

		m.bind('mouseenter',function(){
				quickMenu.show().parent(".main-topSpace-relative").css("z-index","2");
				// IE下有z-index不能hide
				$(".mainLeft-quickMenu-detailMenu").removeAttr("style");
				$(".mainLeft-quickMenu-detailMenu").hide();
				$("#menu-tips").hide();
				$("#nav-quickNav").css("background-position","0 -175px");
				qms();
			});
		m.bind('mouseleave',function(){
				$("#nav-quickNav").css("background-position","0 -80px");
				qmh();
			});

		quickMenu.bind('mouseenter',function(){
				$("#nav-quickNav").css("background-position","0 -175px");
				qms();
		});

		quickMenu.bind('mouseleave',function(){
				$("#nav-quickNav").css("background-position","0 -80px");
				qmh();
		});

		function qms(){
			if(isMouseout) clearTimeout(isMouseout);
		}

		function qmh(){
			isMouseout = setTimeout(function(){quickMenu.hide().parent(".main-topSpace-relative").removeAttr("style");},50);
		}
	}

});

// 首页内页左侧快捷服务组件
var leftQuickServiceComponent = BmonPage.createComponent('leftQuickService');
$.extend(leftQuickServiceComponent,{
	id : 'leftQuickService',
	name : '首页内页左侧快捷服务组件',
	reloaded : false,
	type : null,
	preItem : new Array(),
	init : function(result){
		this.showQuickServiceInfo(result);
	},

	showQuickServiceInfo : function(result){
		this.cache('data',result);
		var hash = window.location.hash;
		if(hash == '' || hash.indexOf('#home') != -1){
			$("#leftQuickService").hide();
			$("#historyService").hide();
		} else {
			//$("#leftQuickService").show();
			//$("#historyService").show();
		}
		var showItem = new Array();
		var showList = new Array();
		if(result && result.resultCode == '0' && result.resultObj){
			// 快捷服务数据
			var obj = result.resultObj.data;
			// 是否登录
			var isLogin = result.resultObj.isLogin;
			if(isLogin){
				$("#left-quickService-title").html("<h3>快捷服务</h3><a href=\"javascript:void(0);\" style=\"color:#000000;\" onclick=\"leftQuickServiceComponent.showSetting();\" class=\"more\">设置</a>");
			} else {
				$("#left-quickService-title").html("<h3>快捷服务</h3>");
			}

			for(var i=0;i<obj.length;i++){
				var quickServiceData = obj[i];
				// 排序
				var order = quickServiceData.order;
				if(i == 0){
					if((order & 1 << 9) == 0){
						this.type = 1;
					} else if((order & 1 << 8) == 0){
						this.type = 2;
					} else {
						this.type = 3;
					}
				} else {
					if(this.type == 1 && (order & 1 << 9) != 0){
						continue;
					} else if(this.type == 2 && (order & 1 << 8) != 0){
						continue;
					}
				}

				// 快捷服务编码
				var serviceNum = quickServiceData.serviceNum;
				if($.inArray(serviceNum,showItem) != -1){
					continue;
				}
				showItem.push(serviceNum);
				showList.push(quickServiceData);
				// 只显示6个
				if(showItem && showItem.length >= 6){
					break;
				}
			}

			if(showList){
				showList.sort(function(item1,item2){
					return item1.priority - item2.priority;
				});
				var content = "";
				for(var i=0;i<showList.length;i++){
					var quickServiceData = showList[i];
					// 快捷服务名称
					var serviceName = quickServiceData.serviceName;
					// 快捷服务小图片地址
					var serviceImgSmallUrl = quickServiceData.serviceImgSmallUrl;
					// 备注
					var comment = quickServiceData.comment;
					// 业务编码
					var busiNum = quickServiceData.busiNum;
					content += "<li><a href=\"#" + busiNum + "\"><img src=\"";
					content += serviceImgSmallUrl;
					content += "\" width=\"23\" height=\"23\" alt=\"" + comment + "\"/>" + serviceName;
					content += "</a></li>";
				}
			}

			$("#quickService-list").html(content);
		}
	},

	// 设置个人快捷服务
	showSetting : function(){
		$("#left-quickService-error").empty().hide();
		var result = this.getCached('data');
		$("#quick-service-selection").empty();
		if(result && result.resultCode == '0' && result.resultObj){
			var content = "";
			var showItem = new Array();
			var showList = new Array();
			$.each(result.resultObj.data,function(i,item){
				// 快捷服务编码
				var serviceNum = item.serviceNum;
				if($.inArray(serviceNum,showItem) == -1){
					showItem.push(serviceNum);
					showList.push(item);
				}
			});

			if(showList){
				showList.sort(function(item1,item2){
					return ((item1.order & 1 << 9) + item1.priority << 8) - ((item2.order & 1 << 9) + item2.priority << 8);
				});
				$.each(showList,function(i,item){
					// 快捷服务名称
					var serviceName = item.serviceName;
					// 快捷服务编码
					var serviceNum = item.serviceNum;
					// 排序
					var order = item.order;
					content = "<li><label><input type=\"checkbox\" name=\"checkbox\" id=\"quickService-" + serviceNum + "\" value=\"" + serviceNum + "\"";
					// 排序属性低10位代表用户是否定制了该业务（0为已定制，1为未定制）
					if((order & 1 << 9) == 0){
						content +=  " checked=\"true\"";
					}
					content +=  " />&nbsp;" + serviceName + "</label></li>";
					$("#quick-service-selection").append(content);
				});
			}
//			$("#quick-service-selection").html(content);
		}
		$("#popMask").show().height($(document).height());
		BmonPage.centerElement("popBox-quickService");
		$("#popBox-quickService").show();
	},

	// 清除全部选择
	clearSelection : function(){
		$("#quick-service-selection input[id^='quickService-']").attr('checked',false);
	},
	// 定制快捷服务
	customize : function(){
		var quickServices = $("#quick-service-selection input[id^='quickService-']");
		var serviceNums = new Array();
		var customizedServiceNum = "";
		if(quickServices){
			$.each(quickServices,function(i,item){
				if(item.checked){
					serviceNums.push(item.value);
					customizedServiceNum += item.value;
					if(i != quickServices.length - 1){
						customizedServiceNum += "-";
					}
				}
			});
			if(serviceNums.length > 6){
				$("#left-quickService-error").html("最多可勾选6个常用服务").show();
				return;
			}
			window.location.reload();
		}

		var data = this.getCached('data');
		var result = data;
		if(data && data.resultCode == '0' && data.resultObj){
			$.each(result.resultObj.data,function(i,item){
				// 快捷服务编码
				var serviceNum = item.serviceNum;
				var order = item.order;
				if($.inArray(serviceNum,serviceNums) != -1){
					order = order & ((1 << 9) - 1);
				} else {
					order = order | 1 << 9;
				}
				item.order = order;
			});
		}

		this.confirmData(customizedServiceNum,result);

	},

	// 修改定制的记录
	confirmData : function(customizedServiceNum,customizedData){
		$.commonReq({
			"data" : {
				"reqUrl" : "customizeQuickService",
				"customizedServiceNum" : customizedServiceNum
			},
			"success" : function(data){
				$("#popBox-quickService").hide();
				$('#popMask').hide();
				var result = eval("(" + data + ")");
				if(result && result.resultCode == '0'){
					leftQuickServiceComponent.orderData(customizedData);
					leftQuickServiceComponent.showQuickServiceInfo(customizedData);
					centerQuickServiceComponent.showData(customizedData);
				}
			}
		});
	},

	// 对Map进行排序
	orderData : function(result){
		if(result && result.resultCode == '0' && result.resultObj){
			result.resultObj.data.sort(function(item1,item2){
				return item1.order - item2.order;
			});
		}
	}
});

// 首页内页左侧业务热榜信息
var leftBusiHotComponent = BmonPage.createComponent('leftBusiHot');
$.extend(leftBusiHotComponent,{
	id : 'leftBusiHot',
	name : '首页内页左侧业务热榜信息',
	reloaded : false,
	type : null,
	init : function(result){
		this.showLeftBusiHotInfo(result);
	},
	
	showLeftBusiHotInfo : function(result){
		this.cache('data',result);
		var hash = window.location.hash;
		if(hash == '' || hash.indexOf('#home') != -1){
			$("#leftBusiHot").hide();
		} else {
			$("#leftBusiHot").show();
		}
		
		if(result && result.resultCode == '0' && result.resultObj){
			var busiHotList = result.resultObj.busiProvinceBeanList;
			var busiHotHtml = "";
			for(var i = 0 ; i < busiHotList.length ; i++){
				var busiHotImg = busiHotList[i].imgUrl;
				var busiHotName = busiHotList[i].name;
				var busiHotNum = busiHotList[i].busiNum;
				var busiHotComment = busiHotList[i].comment;
				var busiHotCommentTemp = busiHotComment;
				
				if(i == 0){
					busiHotHtml += "<li class=\"item-list current\">";
				}else{
					busiHotHtml += "<li class=\"item-list\">";
				}
				
				if(i <= 2){
					busiHotHtml += "<span class=\"top3 sequence\">"+(i+1)+"</span>";
				}else{
					busiHotHtml += "<span class=\"sequence\">"+(i+1)+"</span>";
				}
				
				if( i == 0){
					if("ZXTC" == busiHotNum){
						busiHotHtml += "<div class=\"icon\"><a target='_blank' href=\"http://service.js.10086.cn/zxtc.jsp\"><img src=\""+busiHotImg+"\"></a></div>";
					}else{
						busiHotHtml += "<div class=\"icon\"><a target='_blank' href=\"#"+busiHotNum+"\"><img src=\""+busiHotImg+"\"></a></div>";
					}
				}else{
					if("ZXTC" == busiHotNum){
						busiHotHtml += "<div class=\"icon\"><a target='_blank' href=\"http://service.js.10086.cn/zxtc.jsp\"><img src=\""+GLOBAL_INFO.PLACE_HOLDER_IMG+"\" page-lazy-src=\""+busiHotImg+"\"></a></div>";
					}else{
						busiHotHtml += "<div class=\"icon\"><a target='_blank' href=\"#"+busiHotNum+"\"><img src=\""+GLOBAL_INFO.PLACE_HOLDER_IMG+"\" page-lazy-src=\""+busiHotImg+"\"></a></div>";
					}
				}
				
				if("ZXTC" == busiHotNum){
					busiHotHtml += "<h3 class=\"name\"><a target='_blank' href=\"http://service.js.10086.cn/zxtc.jsp\">"+busiHotName+"</a></h3>";
				}else{
					busiHotHtml += "<h3 class=\"name\"><a target='_blank' href=\"#"+busiHotNum+"\">"+busiHotName+"</a></h3>";
				}
				if(busiHotComment > 16){
					var busiHotCommentTemp = busiHotComment.substring(0,14) + "…";
				}
				busiHotHtml += "<div title=\""+busiHotComment+"\" class=\"description\">"+busiHotCommentTemp+"</div></li>"
			}
			$("#leftBusiHotInfo").html(busiHotHtml);
			this.leftHotBusiBind();
		}
	},
	
	// 业务热榜绑定事件
	leftHotBusiBind : function(){
		var leftBusiHotItem = $(".nRank-body");
		var leftBusiHotItemAll = leftBusiHotItem.find(".nRank-list li");
		leftBusiHotItemAll.bind("mouseenter",function(){
			lazyloadPageOption($(this).find("img"));
			leftBusiHotItemAll.removeClass("current");
			$(this).addClass("current");
		});
	}
	
});

/**
 * Created by Administrator on 2014/11/5 help used
 */
$.fn.tabSwitch=function(options){
	var defaults={ // 默认参数
		tabTit : ".tab-hd li",
		tabCon : ".tab-bd .tab-con-item",
		tabTitClass : "selected",
		eventType : "click"
	}
	var options = $.extend(defaults, options);
	this.each(function(){
		var t = $(this),
			tabTit = t.find(options.tabTit),
			tabCon = t.find(options.tabCon),
			tabTitClass = options.tabTitClass,
			eventType = options.eventType;

		tabTit.bind(eventType,function(){
			var tabTitIndex=tabTit.index($(this));
			if($(this).hasClass("disable")){
				return false;
			}
			$(this).addClass(tabTitClass).siblings().removeClass(tabTitClass);
			tabCon.eq(tabTitIndex).show().siblings().hide();
		})
	})
};

var compObshRightBarComponent = BmonPage.createComponent('compObshRightBar');
$.extend(compObshRightBarComponent, {
    id : 'compObshRightBar',
    name : '右侧边栏',
    init : function(result) {
		var isTopUserMobile = getCookie("topUserMobile");
		compObshRightBarComponent.getClose();
		compObshRightBarComponent.goTop();
		compObshRightBarComponent.phoneMove();
		compObshRightBarComponent.menuShow();
		compObshRightBarComponent.getBar();
		compObshRightBarComponent.leftBar();
		compObshRightBarComponent.slideMove();
		compObshRightBarComponent.initData(result);
		compObshRightBarComponent.getFootprint();
		compObshRightBarComponent.fpClose();
		var onedayonetime = getCookie("onedayonetime");
		if(isTopUserMobile != null && onedayonetime == null) {
			compObshRightBarComponent.tanToTan();
			setCookie("onedayonetime","1",1 *  24 * 60 * 60 * 1000);
		}
		$(window).resize(function(){compObshRightBarComponent.getBar()});
		$(window).resize(function(){compObshRightBarComponent.getFootprint()}); 
	},
	initData : function(result) {
		if(result && result.resultObj && result.resultObj.scanHistoryAllList && result.resultObj.scanHistoryAllList.length > 0) {
			var content = "";
			for(var i = 0; i < result.resultObj.scanHistoryAllList.length; i++) {
				if(result.resultObj.scanHistoryAllList[i].busiSuit == "WTZQ") {
					var reObj = this.getZqMessage(result.resultObj.scanHistoryAllList[i].busiNum);
					if(reObj){
						content += "<li><a href=\""+ reObj.zqUrlStr + "\" target=\"blank\" onclick=\"if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDZJ', 'WT.event','wdzj_f" + (i + 1) + "');}\">" + reObj.zqNameStr + "</a></li>"; 
					}
				} else if(result.resultObj.scanHistoryAllList[i].busiSuit == "WTCX") {
					content += "<li><a href=\"javascript:void(0)\" onclick=\"if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDZJ', 'WT.event','wdzj_f" + (i + 1) + "');};compObshRightBarComponent.dealBusiness('" + "my/" + result.resultObj.scanHistoryAllList[i].busiNum + "')\">" + result.resultObj.scanHistoryAllList[i].busiName + "</a></li>";
				} else {
					content += "<li><a href=\"javascript:void(0)\" onclick=\"if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.nv','WDZJ', 'WT.event','wdzj_f" + (i + 1) + "');};compObshRightBarComponent.dealBusiness('" + result.resultObj.scanHistoryAllList[i].busiNum + "')\">" + result.resultObj.scanHistoryAllList[i].busiName + "</a></li>";
				}
				if(i == 4) {
					break;
				}
			}
			$(".h_footprint .footprint_list ul").html(content);
			$(".h_footprint_new .footprint_list ul").html(content);
		}
	},
	getZqMessage:function(busiNum)
	{
		  var zqNameJson={'YYZQ':'1元专区',
				  'EBZQ':'e币专区',
				  'TCLC':'套餐理财',
				  'LLJSQ':'流量计算器',
				  'CLZQ':'彩铃专区',
				  'XZZQ':'下载专区',
				  'JHS':'巨划算',
				  'GLZQ':'攻略专区'
				};

		  var zqNameUrl={'YYZQ':'http://service.js.10086.cn/nact/resource/1005/html/index.html',
				  'EBZQ':'http://service.js.10086.cn/nact/1004',
				  'TCLC':'http://service.js.10086.cn/experience.do',
				  'LLJSQ':'http://service.js.10086.cn/newFlowZone.jsp',
				  'CLZQ':'http://service.js.10086.cn/COLORRING_INDEX.html',
				  'XZZQ':'http://www.js.10086.cn/clientInfoAction.do',
				  'JHS':'http://www.js.10086.cn/promotion/newIndex.jsp',
				  'GLZQ':'http://service.js.10086.cn/strategy.do'
				};
				
		
		if(busiNum=="YYZQ")
		{
			  return {zqNameStr:zqNameJson.YYZQ,zqUrlStr:zqNameUrl.YYZQ};
		}else if(busiNum=="EBZQ")
		{
			 return {zqNameStr:zqNameJson.EBZQ,zqUrlStr:zqNameUrl.EBZQ};
		}
		else if(busiNum=="TCLC")
		{
			 return {zqNameStr:zqNameJson.TCLC,zqUrlStr:zqNameUrl.TCLC};
		}
		else if(busiNum=="LLJSQ")
		{
			 return {zqNameStr:zqNameJson.LLJSQ,zqUrlStr:zqNameUrl.LLJSQ};
		}
		else if(busiNum=="CLZQ")
		{
			 return {zqNameStr:zqNameJson.CLZQ,zqUrlStr:zqNameUrl.CLZQ};
		}
		else if(busiNum=="XZZQ")
		{
			 return {zqNameStr:zqNameJson.XZZQ,zqUrlStr:zqNameUrl.XZZQ};
		}
		else if(busiNum=="JHS")
		{
			 return {zqNameStr:zqNameJson.JHS,zqUrlStr:zqNameUrl.JHS};
		}
		else if(busiNum=="GLZQ")
		{
			 return {zqNameStr:zqNameJson.GLZQ,zqUrlStr:zqNameUrl.GLZQ};
		}
		
	},
	dealBusiness:function(obj){
		obj=obj.replace(/(^\s+)|(\s+$)/g,'');
		var url="../"+obj+".html";
		window.open(url);
	},
	getBar : function() {
		$('.h_right_slidbar').css("height",$(window).height());
		if($(window).width() < 1220) {
	  		$('.h_right_slidbar').css("height","0px");
	  	}
    	$('.sidebar').hover(function (){
            if($(this).hasClass('h_middle_yh')){
    			$(this).find('div').show()
                $(this).find('div').stop(!1).animate({left:-208,opacity:1},'slow');
            }else{
    			$(this).find('div').show()
                $(this).find('div').stop(!1).animate({left:-101,opacity:1},'slow');
            }
            $(this).addClass('add_bg');
    	},function (){
            if($(this).hasClass('h_middle_yh')){
    			$(this).find('div').hide()
                $(this).find('div').stop(!1).animate({left:-230,opacity:0},'slow');
            }else{
    			$(this).find('div').hide()
                $(this).find('div').stop(!1).animate({left:-122,opacity:0},'slow');
            }
    		$(this).removeClass('add_bg');
    	});
	},
	leftBar : function() {
		var tarPic=['module/h_dl/dh.png','module/h_dl/dh_left.png'];
    	$('.h_left_hover').click(function (){
    		if(!$(this).hasClass('cked')){
    			$(this).addClass('cked');
    			$('.sidebar_box').stop(!1).animate({left:0},'slow',function (){
    				$('.h_left_hover img').attr('src',tarPic[1]);
    			});
    		}else{
    			if($('.sidebar_center').css('display')=='none'){
    				$(this).removeClass('cked');
    				$('.sidebar_box').stop(!1).animate({left:-250},'slow',function (){
    					$('.h_left_hover img').attr('src',tarPic[0]);
    				});
    			}else{
    				$(this).removeClass('cked');
    				$('.sidebar_box').stop(!1).animate({left:-802},'slow',function (){
    					$('.h_left_hover img').attr('src',tarPic[0]);
    					$('.sidebar_center').hide();
    					$('.sidebar_box').css({left:-250});
    				});
    			}
    		}
	    	$('.h_navLeft_list ul li').mouseover(function (){
    			if($('.sidebar_center').css('display')=='none'){
    				$('.sidebar_center').css({display:'block'});
    				$('.sidebar_center').css({width:0});
    				$('.sidebar_center').stop(!1).animate({width:552},'slow');
    			}else{
    				
    			}
    			$('.sidebar_con').hide();
	    	});
	    });
		$('.zheg').mouseout(function (){
     		if($('.sidebar_box').css('left') == '0px'){
     			$('.sidebar_box').stop(!1).animate({left:-802},'slow',function (){
     				$('.h_left_hover img').attr('src',tarPic[0]);
     			});
     		}
		});
	},
	menuShow : function() {
		var timer=null;
        var numIndex=0;
        $('.h_navLeft_list li,.h_nav_con').mouseover(function (){
            console.log($(this).index());
            numIndex=$(this).index();
            clearTimeout(timer);
            setTimeout(function (){
                $('.h_nav_con').hide();

                $('.h_nav_con').eq(numIndex).show();
            }, 300);
        });
        $('.h_navLeft_list li,.h_nav_con').mouseout(function (){
            clearInterval(timer);
            timer=setTimeout(function (){
                $('.h_nav_con').hide();
            }, 300);
        });
	},
	goTop : function() {
		var obj;
    	if(document.all){
    		obj=$(window);
    	}else{
    		obj=$(document);
    	}
    	obj.scroll(function (){
    		if(obj.scrollTop()>400){
    			$('.gotopnei').fadeIn('slow');
    		}else{
    			$('.gotopnei').fadeOut('slow');
    		};
    	});
	},
	onMouseOver : function(objOver, showObj) {
		objOver.onmouseover=function ()
    	{
    		showObj.style.display='block';
    	};
    	objOver.onmouseout=function ()
    	{
    		showObj.style.display='none';
    	};
	},
	useonMouseOver : function() {
		var alip=document.getElementById("search");
    	var ali=alip.getElementsByTagName("li");
    	var show1=document.getElementById("show1");
    	var show2=document.getElementById("show2");
    	var show3=document.getElementById("show3");
    	var show4=document.getElementById("show4");
    	var showarrr=[show1,show2,show3,show4];
    	onMouseOver(ali[0],show1);
    	onMouseOver(ali[1],show2);
    	onMouseOver(ali[2],show3);
    	onMouseOver(ali[3],show4);
	},
	phoneMove : function() {
		$(".phone-show-img").hover(function(){   
    		$(this).stop(!1).animate({marginLeft:15}, 'slow');
    	},function() {
    		$(this).stop(!1).animate({marginLeft:0}, 'slow');
    	});
	},
	getClose : function() {
		$(".close-btn").click(function() {
    		$(".onsale-order-layer").css({"display" : "none"});
    	});
	},
	closeActDiv : function() {
		if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif','WT.nv','TCbanner','WT.event','close');}
		obj.parentNode.style.display = 'none';
		$("#homeDiv").hide();
		$("#popMaskAct").hide();
		setCookie("forwardActSmqllNew", "1", 1*24*60*60*1000);
	},
	slideMove : function() {
		$('.h_right_new').css("height",$(window).height());

		var oKf=document.getElementById('div1');
		var oSbar=document.getElementById('sbar');
		var timer;
		
		oSbar.onmouseover=oKf.onmouseover=function ()
		{
			//clearInterval(timer);
			clearTimeout(timer);
			setTimeout(function (){
	 	$('.h_right_new').stop(!1).animate({right:0},'slow');
	 	$('.h_right_new').show();
			}, 100);
		};
		oSbar.onmouseout=oKf.onmouseout=function ()
		{
			clearInterval(timer);
			timer=setTimeout(function (){
			$('.h_right_new').stop(!1).animate({right:-39},'slow');
			$('.h_right_new').hide();
			}, 100);
		};
	},
	getFootprint : function()
	{
		$('.h_footprint_box').hover(function (){
			
				$(this).find('div').show()
	            $(this).find('div').stop(!1).animate({left:-173,bottom:0,opacity:1},'slow');

		},function (){
				
			$(this).find('div').hide()
	       $(this).find('div').stop(!1).animate({left:-200,bottom:0,opacity:0},'slow');
		});
		
	},
	//弹2下
	tanToTan : function(){
	    setTimeout(function (){
	        $('.h_footprint').show().css({'left':'-200px'});
	        $('.h_footprint').stop(!1).animate({top:-270},100,function (){
	            $('.h_footprint').stop(!1).animate({top:-250},100,function (){
	                $('.h_footprint').stop(!1).animate({top:-270},100,function (){
	                    $('.h_footprint').stop(!1).animate({top:-250},100,compObshRightBarComponent.myFootHide);
	                });
	            });
	        });
	    },500);
	},
	//回调浮动消失
	myFootHide : function(){
	    setTimeout(function (){
	        $('.h_footprint').hide();
	    },5000);
	},
	fpClose : function()
	{
		$('.h_footprint_close').click(function()
		{
			
			$('.h_footprint').hide();
		})
	},
	fpTime : function()
	{
		$('.h_footprint').fadeIn(3000);
	}
});
// help
/**
var compObshHelperComponent = BmonPage.createComponent('compObshHelper');
$.extend(compObshHelperComponent, {
    id: 'compObshHelper',
    name: '小助手',
    init: function (result) {

		//alert(getCookie("SALES_LOGIN_TOKEN"));
        var salesUser =result.salesUser;
        var normalUser=result.normalUser;
        var link="http://service.js.10086.cn/experience.do";
		
        if(salesUser!= ""){
			setTimeout(function(){
				$('.number-id').html(salesUser.workNumber);
				$("#indexHelper").show();
			},300);
        }
        var location=window.location.href;
		  if(location.indexOf("my/index.html")!=-1){		
		  var time=setInterval(function(){
		      if(compObshHelperComponent.judgeInfo()){
		           $("#packageTool").html("<a target=\"_blank\" href=\""+link+"\">套餐理财</a>");
		           compObshHelperComponent.carouselAccount();
		          compObshHelperComponent.backTop();
		          clearInterval(time);
		      }
		  },500);
		 
		 }else{
			 if(null!=normalUser){
					var time=setInterval(function(){
					      if(compObshHelperComponent.judgeInfo()){
					           $("#packageTool").html("<a target=\"_blank\" href=\""+link+"\">套餐理财</a>");
							  compObshHelperComponent.carouselAccount();
							  compObshHelperComponent.backTop();
					           clearInterval(time);
					      }
					  },500);
				}
		 }
    },
    yjcxShowInfo:function(){
  		$("#popMaskYjcx").show();
  		$("#popYjcx").show();
  	},
  	closePopYjcx:function () {
  		$("#popMaskYjcx").hide();
  		$("#popYjcx").hide();
  		
  	},
    carouselAccount: function(){
		$(".account-info-tab").tabSwitch(		
			{
				tabTit : ".account-info-tab-hd li",
				tabCon : ".account-info-tab-bd .account-info-tab-item",
				tabTitClass : "current"
			}
		);
		
		var carouselTimer = null;
		var iCarouselLoading = true;
//     carouselTimer = setInterval(carouselFn,100);
//        function carouselFn(){
//            if(iCarouselLoading){
//                clearInterval(carouselTimer);
//                $(".index-carousel").carouselFadePic({
//                    carouselPic : ".carousel-scroll",
//                    carouselLi  : ".carousel-banner",
//                    carouselLink : ".carousel-focus .carousel-link",
//                    colorArr : ["#c2e6fe","#f6fec2","#fde3c2","#fdc1db","#ffee75"]  // 开发后台传入的颜色数组
//                    //colorArr : colorArr
//                });
//
//            }
//        }
		
		var $numberAmountItem = $(".recharge-number .amount-item");
	    $numberAmountItem.bind("click",function(){
		   $(this).addClass("amount-selected").siblings().removeClass("amount-selected");
	    })
	   
	    var $floatMark = $(".float-mark"),
		   $floatMarkLi = $floatMark.find("li");
	    //commonFn.fixIe6($floatMark,"top");
	    $floatMarkLi.eq(-2).hover(
		   function(){
			   $(this).addClass("tool-show");	  
		   },
		   function(){
			   $(this).removeClass("tool-show");	  
		   }
	   )
	},
	judgeInfo:function(){
	   if(document.getElementById("myIndexToTopHelper").innerHTML){
	       return true;
	   }
	   return false;
	},
	backTop : function(){
		var $toTopPar = $(document.getElementById("myIndexToTopHelper"));
		$toTopPar.hide();
		$(window).bind("scroll",function(){
			var scrTop = $(document).scrollTop();
			if(scrTop>500){
				$toTopPar.show();
			}
			else{
				$toTopPar.hide();
			}
		})
		$toTopPar.bind("click",function(){
			$("html,body").animate({scrollTop: 0})
		})
	},
	//意见反馈
	feedBack:function(){
		var url=window.location.href;
		if(url.indexOf('my')!=-1){
			url="../FEEDBACK.html?name=my/index";
		}else{
			url="FEEDBACK.html?name=index";
		}
		window.open(url,'_blank');
	},

	yjcxShowNoLogin:function(){
		this.setCookie("yjcxFlag","0",15*24*60*60*1000);
		window.location.href="./login.html?url=index.html";
	},
	yjcxShowInfo:function(){
		$("#popMaskYjcx").show();
		$("#popYjcx").show();
	},
	closePopYjcx:function () {
		$("#popMaskYjcx").hide();
		$("#popYjcx").hide();
		
	}
});
**/
var busiListInfoComponentFavo = BmonPage.createComponent('SCJFAVO');
$.extend(busiListInfoComponentFavo, {
	id : 'SCJFAVO',
	name : '收藏夹',
	busiDetail : null,
	busiTypeNum : "",
	pageSize : 6,
	pageSizeW : 3,
	pageCount : 1,
	pageCountW : 1,
	items : 0,
	favoArr: [],
	busiWordDetail : null,
	init : function(result){
		if (result && result.resultCode == "0"){
			busiListInfoComponentFavo.pageInit(result.resultObj);
		}else{
			//BmonPage.showFailureDialog(result.resultMsg);
			alert("查询失败！");
		}
	},
	
	showListTolOnlyFavo : function (){
		var busiTypeNum = $("#leibieType").val();
		var pinyin = $("#pinyinType").val();
		$.busiReq(
		{
			data :
			{
				"reqUrl"	: 'SCJQry',
				"operType" : "1",
                "methed"   : "search",
                "onlyFavo"   : "yes",
				'busiTypeNum' 	: busiTypeNum,
				'pinyin'    : pinyin
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				if (result && result.resultCode == "0"){
					busiListInfoComponentFavo.pageInit(result.resultObj);
				} else {
					BmonPage.showFailureDialog(result.resultMsg);
				}
			}
		});
	},

	pageInit : function(obj) {
		if(obj !== null) {
			this.busiDetail = obj.busiList;
			this.items = this.busiDetail.length;
			this.busiWordDetail = obj.wordList;
			this.pageCount = this.items / this.pageSize;//页面数
			var pc = this.pageCount.toString();
			var favoItems = obj.favoList;
			busiListInfoComponentFavo.favoArr = [];
			if (pc.indexOf(".") != -1) {
				var arr = pc.split(".");
				var temp = arr[0].toString();
				this.pageCount = parseInt(temp) + 1;
			}
			
			$("#list_page").pkgPager({pagenumber:1, pagecount: busiListInfoComponentFavo.pageCount, buttonClickCallback: busiListInfoComponentFavo.PageClick});
			//$("#list_pageW").pkgPager({pagenumber:1, pagecount: busiListInfoComponentFavo.pageCount, buttonClickCallback: busiListInfoComponentFavo.PageClick});
			if (this.items < 1) {
				$("#list_page").empty();
				$('#firstPic').empty();
				$('#firstPic').append("<center>对不起，没有查到数据！</center>");
				$('#firstWord').empty();
				$('#firstWord').append("<center>对不起，没有查到数据！</center>");
			} else {
				this.pageCreae(1);
			}
//			addPopupEvn();
//			addMyEvent();
		}
	},
	
	/*********显示内容**********/
	showBisiInfo : function(obj,startIndex,endIndex) {
	    $('#firstPic').empty();
	    
		tabName = this.busiDetail[0].tabName;
		busiNum = this.busiTypeNum;
		
	    var innerHtml = "";
	    var head = "http://service.js.10086.cn/index.html";
	     
	    for(var i =startIndex;i<=endIndex;i++){
	         
           var item = this.busiDetail[i];
         
           if(typeof(item) != "undefined"){
	    	  var busiNum = item.infoNum;
              var busiName = item.infoName;
//              if (busiName.length > 12){
//            	 busiName = busiName.substring(0,12)+"...";
//              }
              var showName = ''
  	            if (busiName.length > 12){
  	            	showName = busiName.substring(0,12)+"...";
  	            } else {
  	            	showName = busiName;
  	            }
              var busiIcon = item.infoIcon;
              var busiAdvl = item.infoAdvl;
              //是否HOT 1:HOT 2:NEW
              var busiHot = item.infoHot;
              // 收藏夹，用来保存到db，显示时文字高亮用
              var pinyinId = item.pinyinId;
            
              if("GXZXTQ" == busiNum){
            	  innerHtml += "<li pid='"+busiName+"'><a href='http://service.js.10086.cn/act_js/activity_web/1113/index.html#home' target='_blank'><img src='http://files01.js.10086.cn/obsh2014/images/gxzxtq.gif' style='height:105px'/></a><p><a target='_blank' href='http://service.js.10086.cn/act_js/activity_web/1113/index.html' pid='"+busiName+"'>"+showName+"</a></p></li>";
              }else if("YDSJWS" == busiNum){
            	  innerHtml += "<li pid='"+busiName+"'><a href='http://www.js.10086.cn/support/clientAppDownload/tools/2012/content70474.html' target='_blank'><img src='http://files01.js.10086.cn/obsh2014/images/ydsjws.gif' style='height:105px'/></a><p><a target='_blank' href='http://www.js.10086.cn/support/clientAppDownload/tools/2012/content70474.html' pid='"+busiName+"'>"+showName+"</a></p></li>";
              }else if("PPTCBG" == busiNum){
            	 //修改新增的品牌套餐变更下的5个业务链接
            	 var flag = "";
            	 if(busiName == "全球通统一资费"){
            		flag = "?prodid=1000100216";
            	 }else if(busiName == "飞享套餐"){
            		flag = "?prodid=1000100301";
            	 }else if(busiName == "动感任我行上网卡"){
            		flag = "?prodid=1000100168";
            	 }
            	 innerHtml += "<li pid='"+busiName+"'><a href='./PPTCBG.html"+flag+"' target='_blank'><img src='http://img01.js.10086.cn/obsh2014/images/yewu/pptcbl.png' style='height:105px'/></a><p><a target='_blank' href='./PPTCBG.html"+flag+"' pid='"+busiName+"'>"+showName+"</a></p></li>";
             }else if("SJDS" == busiNum){
            	 innerHtml += "<li pid='"+busiName+"'><a href='http://www.js.10086.cn/support/businesshelp/mainlist/recreation/2010/content63535.html' target='_blank'><img src='http://files01.js.10086.cn/obsh2014/images/ydsjws.gif' style='height:105px'/></a><p><a target='_blank' href='http://www.js.10086.cn/support/businesshelp/mainlist/recreation/2010/content63535.html' pid='"+busiName+"'>"+showName+"</a></p></li>";
             } else if("TYZF_CPHZ" == busiNum) {
            	 //innerHtml += "<li pid='"+busiName+"'><a href='./zxtc.html' target='_blank'><img src='http://files01.js.10086.cn/obsh2014/images/zxtc-2.png' style='height:105px'/></a><p><a target='_blank' href='./zxtc.html' pid='"+busiName+"'>"+showName+"</a></p></li>";
            	 innerHtml += "<li pid='"+busiName+"'><a href='http://service.js.10086.cn/zxtc.jsp#home' target='_blank'><img src='http://files01.js.10086.cn/obsh2014/images/zxtc-2.png' style='height:105px'/></a><p><a target='_blank' href='http://service.js.10086.cn/zxtc.jsp#home' pid='"+busiName+"'>"+showName+"</a></p></li>";
             } else{
	            if("WSCZ" == busiNum){
	            	busiIcon = "http://files01.js.10086.cn/obsh2014/images/czyh.gif";
	            	busiAdvl = "选择网上营业厅，充值更优惠：充100元送5元;充200元送12元;充500元送35元。";
	            }
	            if("ZXRW_QPPZXRW" == busiNum){
	            	busiIcon = "http://files01.js.10086.cn/obsh2014/images/xhrw.gif";
	            	busiAdvl = "众多炫号在线预约，轻松成为M_ZONE人。";
	            }
	            if("" == busiIcon || "undefined" == busiIcon){
	            	busiIcon = "http://img01.js.10086.cn/obsh2014/images/defaultIcon.gif";
	            }
	            innerHtml += "<li pid='"+busiName+"'><a href='./"+busiNum+".html' target='_blank'><img src='"+busiIcon+"' style='height:105px'/></a><p><a target='_blank' href='./"+busiNum+".html' pid='"+busiName+"'>"+showName+"</a></p></li>";
             }
          }
	    }
	     $("#firstPic").html(innerHtml);
	     // 画文字列表，startIndex！= 0 ，则什么都不做
	     if (startIndex == 0){
	    	 var wordShowHtml="";
	    	 $("#firstWord").empty();
	    	 if (this.busiWordDetail.length > 0){
	    		 for (var i = 0; i < this.busiWordDetail.length;i++){
	    		 //for(var i =startIndex;i<=endIndex;i++){
	    			 var wordDetailList = this.busiWordDetail[i];
	    			 var tabNam = wordDetailList[0].tabName;
	    			 var oneGroup = '<div class="result-cate"><div class="result-cate-tit"><span>'+tabNam+'</span><b class="arrow"></b>';
	    			 oneGroup +='</div><div class="result-cate-con"><ul class="clearfix">';
	    			 for (var j=0; j<wordDetailList.length; j++){
	    				 var item2 = wordDetailList[j];
	    				 if (typeof(item2) != "undefined") {// TODO
	    					 var busiNum = item2.infoNum;
    			             var busiName = item2.infoName;
//    			             if (busiName.length > 7){
//    			            	 busiName = busiName.substring(0,7)+"...";
//    			             }
    			             var showName = '';
    			             if (busiName.length > 7){
    			            	 showName = busiName.substring(0,7)+"...";
    			             } else {
    			            	 showName = busiName;
    			             }
    			             var busiIcon = item2.infoIcon;
    			             var busiAdvl = item2.infoAdvl;
    			             //是否HOT 1:HOT 2:NEW
    			             var busiHot = item2.infoHot;
    			             // 收藏夹，用来保存到db，显示时文字高亮用
    			             var pinyinId = item2.pinyinId;
    			             if("GXZXTQ" == busiNum){//
    			            	 oneGroup +="<li pid='"+busiName+"'><a pid='"+busiName+"' href='http://service.js.10086.cn/act_js/activity_web/1113/index.html#home' target='_blank'>"+showName+"</a></li>";
    			             }else if("YDSJWS" == busiNum){
    			            	 oneGroup +="<li pid='"+busiName+"'><a pid='"+busiName+"' href='http://www.js.10086.cn/support/clientAppDownload/tools/2012/content70474.html' target='_blank'>"+showName+"</a></li>";
    			             }else if("PPTCBG" == busiNum){
    			            	var flag = "";
				            	if(busiName == "全球通统一资费"){
				            		flag = "?prodid=1000100216";
				            	}else if(busiName == "飞享套餐"){
				            		flag = "?prodid=1000100301";
				            	}else if(busiName == "动感任我行上网卡"){
				            		flag = "?prodid=1000100168";
				            	}
				            	oneGroup +="<li pid='"+busiName+"'><a pid='"+busiName+"' href='./PPTCBG.html"+flag+"' target='_blank'>"+showName+"</a></li>";
    			             } else if("SJDS" == busiNum){
    			            	 oneGroup +="<li pid='"+busiName+"'><a pid='"+busiName+"' href='http://www.js.10086.cn/support/businesshelp/mainlist/recreation/2010/content63535.html' target='_blank'>"+showName+"</a></li>";
    			             } else if("TYZF_CPHZ" == busiNum) {
    			            	 oneGroup +="<li pid='"+busiName+"'><a pid='"+busiName+"' href='./zxtc.html' target='_blank'>"+showName+"</a></li>";
    			             } else{
    			            	 oneGroup +="<li pid='"+busiName+"'><a href='./"+busiNum+".html' target='_blank' pid='"+busiName+"'>"+showName+"</a></li>";
    			             }
	    				 }
	    			 }
	    			 oneGroup +='</ul></div></div>';
	    			 //oneGroup += '<a href="javascript:;" class="add-business" onclick="busiListInfoComponentFavo.doFavorites(this)">+ 加入收藏夹</a></div>';
	    			 $("#firstWord").append(oneGroup);
	    			 
	    		 }
	    	 }
	     }
	     addPopupEvn();
		 addMyEvent();
	},
	
	//分页
	PageClick : function(pageclickednumber)	{
	   var items = busiListInfoComponentFavo.items;
	   var pageSize = busiListInfoComponentFavo.pageSize;
       $("#list_page").pkgPager({ pagenumber: pageclickednumber, pagecount: busiListInfoComponentFavo.pageCount, buttonClickCallback: busiListInfoComponentFavo.PageClick });
       //$("#list_pageW").pkgPager({ pagenumber: pageclickednumber, pagecount: busiListInfoComponentFavo.pageCount, buttonClickCallback: busiListInfoComponentFavo.PageClick });
       var startIndex=0;
       var endIndex=items;
       
       if(pageclickednumber==undefined && items <=pageSize){
           startIndex=0;
           endIndex=items-1;
       }else if(pageclickednumber==undefined && items >pageSize) {
           startIndex=0;
           endIndex=pageSize-1;
       }else{
          var cPageNum=pageclickednumber;
          if(cPageNum>1){
            startIndex=pageSize*(cPageNum-1);
            endIndex=startIndex+pageSize-1;
          } else {
             startIndex=0;
             endIndex=pageSize-1;
          }
       }
	    busiListInfoComponentFavo.showBisiInfo(null,startIndex,endIndex);
	},
        
	pageCreae : function(pageclickednumber) {
		var startIndex = 0;
		var endIndex = this.items;
		if (pageclickednumber == undefined && this.items <= this.pageSize) {
			startIndex = 0;
			endIndex = this.items - 1;
		} else {
			if (pageclickednumber == undefined && this.items > this.pageSize) {
				startIndex = 0;
				endIndex = this.pageSize - 1;
			} else {
				var cPageNum = pageclickednumber;
				if (cPageNum > 1) {
					startIndex = this.pageSize * (cPageNum - 1);
					endIndex = startIndex + this.pageSize - 1;
				} else {
					startIndex = 0;
					endIndex = this.pageSize - 1;
				}
			}
		}
		busiListInfoComponentFavo.showBisiInfo(null, startIndex, endIndex);
	},
	
	searchByFavo : function(obj,type){
		var searchCon = $(obj).attr("id");
		var enterSearch = "";
		if ('all' == searchCon){
			enterSearch = "";
		} else {
			enterSearch = searchCon;
		}
		if (type==1){
			$(".search-request-word a").removeClass("hasSearch");
			$(".search-request-cate a").removeClass("hasSearch");
			$("#pinyinType").val(enterSearch);
			$("#leibieType").val("");
			$(obj).addClass("hasSearch");
		} else {
			$(".search-request-cate a").removeClass("hasSearch");
			$(".search-request-word a").removeClass("hasSearch");
			$("#leibieType").val(enterSearch);
			$("#pinyinType").val("");
			$(obj).addClass("hasSearch");
		}
		busiListInfoComponentFavo.showListTolOnlyFavo();
	}
	
});

function addMyEvent(){
	 $(".recommend-list-result").tabSwitch({
        tabTit : ".recommend-list-result-hd li",
        tabCon : ".recommend-list-result-bd .recommend-list-result-item",
        tabTitClass : "current"
     });
}

function addPopupEvn(){
	var $popup = $(".mod-popup"),
    $closePopup = $(".mod-popup .close-popup");
    $closePopup.bind("click",function(){
        //$popup.fadeOut();//fadeOut() == hide() == display:none，这样画面没了，高和宽都是0
    	$popup.css("visibility","hidden");
        return false;
    });
//    $popup.css("visibility","visible");
    
    $("a[class='business-all']").attr("target","_blank");
    commonFn.showPopup("我的收藏夹",$("#myFavorite"));
}


/**
 * 业务办理区信息提示
 * 增加日期：2012-7-27
 * 增加人：丁亮
 * 该方法用于如简单业务的业务列表里显示详情时弹出提示框的图
 */
var BusiMsgB = {
    showMsgTip : function(itemName,obj){
        var tmpItemName = jQuery.trim(itemName);
        var tmpMsgTip = "";

        $.commonReq({
            data : {
                "reqUrl" : "BusinessBQry",
                "busiNum" : tmpItemName,        // 业务编码
                "operType" : "3",
                "isHighBusinessSms" : false,
                't' : Math.random()
            },
            success : function(result){
                data = eval("(" + result + ")");
                if(data.resultObj != null && data.resultObj != ""){
                    var offset = $(obj).offset();
                    $("#busiMsgB_content").html(data.resultObj);
                    $("#d_busiMsgB").css("z-index","99999");
                    $("#d_busiMsgB").css({"left": (offset.left + 50) + "px", "top": (offset.top - 10) + "px"}).show();
                }
                else{
                    $("#d_busiMsgB").hide();
                }
            }
        });
    }
}

//touch.js---------------------start
//触点营销命名空间
var TOUCHAPP = {}

TOUCHAPP.GLOBAL_INFO =
{
	// 触点营销登录事件是否已经加载
	IS_LOGINTOUCH_ACTIVED : false
};

//事件编码
TOUCHAPP.EVENT_ID =
{
	JS_OBSH_USER_LOGIN : 'JS_OBSH_USER_LOGIN'
};

TOUCHAPP.GETTOUCH =
{
	getTouchInfo : function(eventId)
	{

		//var retOld = TOUCHAPP.GETTOUCH.getCookie("TOUCHPROMOTIONS_RESULT_OLD_" + UserInfo.userMobile);
		//var ret = TOUCHAPP.GETTOUCH.getCookie("TOUCHPROMOTIONS_RESULT_" + UserInfo.userMobile);
		//if(retOld && retOld != '' && retOld != 'null')
		//{
		//	var result = eval("(" + retOld + ")");
		//	TOUCHAPP.GETTOUCH.showResultOld(result,eventId);
		//} else if (ret && ret != '' && ret != 'null'){
		//	var result = eval("(" + retOld + ")");
		//	TOUCHAPP.GETTOUCH.showResult(result,eventId);
		//}
		//else
		//{
			this.busiReq({
				data :
				{
					'reqUrl'	 : 'touchPromotion',
					'balance'    : UserInfo.balance,
					'eventId'	 : eventId,
					'busiNum'    : 'home'
				},

				success : function(ret)
				{
					var result = eval("(" + ret + ")");

					if(result && result.resultCode == "0")
					{
						// 把cookies的有效期设为默认的，关闭浏览器时cookies就失效
						if (result.logicCode=="999999") {
						TOUCHAPP.GETTOUCH.setCookie("TOUCHPROMOTIONS_RESULT_" + UserInfo.userMobile, ret, null);
						} else {
							//TOUCHAPP.GETTOUCH.setCookie("TOUCHPROMOTIONS_RESULT_OLD_" + UserInfo.userMobile, ret, null);
						}
					}
					if (result && result.logicCode=="999999") {
						TOUCHAPP.GETTOUCH.showResult(result,eventId);
					} else {
						TOUCHAPP.GETTOUCH.showResultOld(result,eventId);
					}
				}
			});
		//}
	},
	
	showResult : function(result,eventId)
	{
		$("#xwtec_title").empty();
		$("#xwtec_touchContainer").empty();
		$("#xwtec_view").empty();
		if(result && result.resultCode == "0" && result.resultObj != null && result.resultObj !="null")
		{
			var resultObj =   eval("(" +result.resultObj + ")");
			for(var i=0;i<resultObj.length;i++)
			{	
				var item = resultObj[i];
				
				//弹出方式(1:每次都弹出, 2:用户点击关闭后不再弹出, 3:只弹一次，4:每月仅弹一次,
				// 5：每次登陆都弹，且同一登录状态下，用户点击关闭后不再弹出，6:每月仅弹两次)
				var showType = 6;
				var date = new Date();
				var currentMonth = date.getFullYear() + "" + (date.getMonth() + 1);
				// 是否点击了关闭按钮，0:否 1:是
				var isClickClose = "0";
				var ruleCode = item.ID;

				var userNum = UserInfo.userMobile;
				//cookie中记录弹出情况，格式为  手机号码|事件ID|规则代码=弹出方式|用户是否点击了关闭按钮
				var cookieKey = userNum + "|" + eventId + "|" + ruleCode + "@touch.js.10086.cn";

				//根据事件上次的弹出情况判断是否需要去弹出
				var needShow = TOUCHAPP.GETTOUCH.isNeedShow(cookieKey, showType, currentMonth);
				
				if(needShow){
					var cookieValue = TOUCHAPP.GETTOUCH.getCookie(cookieKey);
					var showTime = 1;
					if(cookieValue){
						var valueArr = cookieValue.split("|");
						showTime = valueArr[2]+1;
					}
					var newCookieValue = currentMonth + "|" + isClickClose + "|" + showTime;
					TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*365*24*60*60*1000);
					var touchContent = item.PAGE_NAME;
					var touchViewLink = item.PAGE_URL;
					var headContent = item.BUSI_NAME;
					// 按钮文字
					var showViewText = "办理";
					
					//var newCookieValue = currentMonth + "|" + isClickClose + "|" + showTime;
					var activityOnlineTime = item.ACTIVITYONLINETIME;
					var activityOfflineTime = item.ACTIVITYOFFLINETIME;
					var activityImgUrl = item.PAGE_PIC1;
					//TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*365*24*60*60*1000);

					var touchArea = $("#xwtec_touchArea");
					$("#xwtec_title").html("<a href='javascript:void(0);' class='BoxClose' title='关闭' id='xwtec_touchClose'></a>尊敬的" + userNum + "用户");
					if(touchContent){
						$("#xwtec_touchContainer").html("<a href='" + touchViewLink + "' onclick=\"if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif', 'WT.touch_page','"+window.location.href+"','WT.touch_url','"+touchViewLink+"','WT.touch_city','"+UserInfo.userCity+"','WT.nv','1','WT.touch_event','view');}\" target='_blank'><p><strong>"+headContent+"</strong></p><p>" + touchContent + "</a></p>");
						//$("#homeTouchDiv").html("<a class=\"mainRight-popBox-body-close\" href='javascript:void(0);' id='closeHomeDiv'>关　闭</a><dl><dt><a onclick=\"TOUCHAPP.GETTOUCH.hideHomeTouchArea();\" href='" + touchViewLink + "' target='_blank'><img src='"+activityImgUrl+"' /></a></dt><dd><p class='mainRight-popBox-body-title'><strong>活动时间：</strong>"+activityOnlineTime+"-"+activityOfflineTime+"</p><p class='mainRight-popBox-body-info'><strong>活动内容：</strong>" + touchContent + "</p><p class='mainRight-popBox-body-button'><a onclick='TOUCHAPP.GETTOUCH.hideHomeTouchArea();' href='" + touchViewLink + "' target='_blank'>去看看</a></p></dd></dl>");
					}
					
					// 话费余额设置
					//$("#touchBalance").html(UserInfo.balance);

					// 有效期时间设置
					//$("#invalidationDate").html(touchInfo.invalidationDate);

					// 判断是否是余额不足提醒，如果不是，且有套餐外流量费等情况显示“查看套餐使用情况”链接，否则不显示。
				
				
					
					touchArea.show();
					// 设置弹出窗口的位置
					TOUCHAPP.GETTOUCH.setTouchAreaPosition();
					$(window).scroll(function(){
						// 设置弹出窗口的位置
						TOUCHAPP.GETTOUCH.setTouchAreaPosition();
					});
					// 插码：当用户点击推荐活动或业务链接时 begin
					touchArea.find("a").click(function(){
					    var marketURL = $(this).attr("href");
					    var id = $(this).attr("id");
					    if(id && id == "xwtec_touchClose")
					    {
					    	marketURL = "close";
					    }
					    TOUCHAPP.GETTOUCH.setPlugInfo(marketURL);
					});
			
					
					// 插码 end
					
					
					$("#closeHomeDiv").bind("click",function(){TOUCHAPP.GETTOUCH.hideHomeTouchArea();});
					
					$("#xwtec_touchClose").bind("click",function(){TOUCHAPP.GETTOUCH.closeHomeTouchArea(cookieKey);});

					//自动关闭(0:从不, 10秒, 20秒, 30秒)
					
				
					break;
				}
			}

			// 触点营销登录事件已经加载
			IS_LOGINTOUCH_ACTIVED = true;
		}
	},
	
	closeHomeTouchArea: function (cookieKey) {
		var cookieValue = TOUCHAPP.GETTOUCH.getCookie(cookieKey);
		var click = 1;
		if(cookieValue){
			var valueArr = cookieValue.split("|");
			var showTime = valueArr[2];
			var currenMon = valueArr[0];
			var cookieNewValue = currenMon + "|" + click + "|" + showTime;
			TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieNewValue, 10*365*24*60*60*1000);
			$("#xwtec_touchArea").hide();	
			
		}
	},

	showResultOld : function(result,eventId)
	{
		$("#xwtec_title").empty();
		$("#xwtec_touchContainer").empty();
		$("#xwtec_view").empty();
		if(result && result.resultCode == "0" && result.resultObj != null && result.resultObj.length>0)
		{
			var resultObj = result.resultObj;
			var wt_1 = false;
			var wt_2 = false;
			var wt_3 = false;
			for(var i = 0; i < resultObj.length; i++)
			{
				var touchInfo = resultObj[i];
				var ruleCode = touchInfo.ruleCode;
				//弹出方式(1:每次都弹出, 2:用户点击关闭后不再弹出, 3:只弹一次，4:每月仅弹一次,
				// 5：每次登陆都弹，且同一登录状态下，用户点击关闭后不再弹出，6:每月仅弹两次)
				var showType = touchInfo.showType;
				var date = new Date();
				var currentMonth = date.getFullYear() + "" + (date.getMonth() + 1);
				// 是否点击了关闭按钮，0:否 1:是
				var isClickClose = "0";

				var userNum = UserInfo.userMobile;
				
				if(showType=="8"){
					//cookie中记录弹出情况，格式为  手机号码|月份|用户是否点击了关闭按钮
					var cookieKey = userNum + "|" + (date.getMonth() + 1) + "|" + "markeFlow" + "@touch.js.10086.cn";
				}else{
					//cookie中记录弹出情况，格式为  手机号码|事件ID|规则代码=弹出方式|用户是否点击了关闭按钮
					var cookieKey = userNum + "|" + eventId + "|" + ruleCode + "@touch.js.10086.cn";
				}
				

				//根据事件上次的弹出情况判断是否需要去弹出
				var needShow = TOUCHAPP.GETTOUCH.isNeedShow(cookieKey, showType, currentMonth);
				
				var webCode = touchInfo.webCode;
				if(needShow)
				{
					var cookieValue = TOUCHAPP.GETTOUCH.getCookie(cookieKey);
					var showTime = 1;
					if(cookieValue){
						var valueArr = cookieValue.split("|");
						showTime = valueArr[2]+1;
					}
					var touchContent = touchInfo.showContent;
					var touchViewLink = touchInfo.showViewLink;
					var headContent = touchInfo.ruleName;
					// 按钮文字
					var showViewText = touchInfo.showViewText;
					
					var newCookieValue = currentMonth + "|" + isClickClose + "|" + showTime;
					var showScene = touchInfo.showScene;
					var activityOnlineTime = touchInfo.activityOnlineTime;
					var activityOfflineTime = touchInfo.activityOfflineTime;
					var activityImgUrl = touchInfo.busiIconUrl;
					var type = touchInfo.type;
					if ("" != webCode) {
						touchViewLink = touchViewLink +"@webtransId=" + webCode;
					}
					TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*365*24*60*60*1000);
					if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('WT.mncj',webCode ,'WT.city',UserInfo.userCity,'WT.mobile',UserInfo.userMobile);};
					
					var touchArea = $("#xwtec_touchArea");
					
					// 话费余额设置
					$("#touchBalance").html(UserInfo.balance);

					// 有效期时间设置
					$("#invalidationDate").html(touchInfo.invalidationDate);

					// 判断是否是余额不足提醒，如果不是，且有套餐外流量费等情况显示“查看套餐使用情况”链接，否则不显示。
					if(ruleCode != "PrePayUserBalanceShort")
					{
						if(ruleCode == "OpenGPRSAndHaveTCWGPRS" || ruleCode == "gprsUsedMoreThanHave15" || ruleCode == "GPRSUsedMoreThenTimeProcess15"){
							if(touchViewLink != undefined && touchViewLink != null && touchViewLink != "")
							{
								$("#xwtec_view").html("<a href=" + touchViewLink + " class='Boxbtn'>查看套餐使用情况>></a>");
							}
						}
						if(ruleCode == "UserHave10ForBalanceNotEnough" || ruleCode == "UserHave20ForBalanceNotEnough" || ruleCode == "UserHave10ForBalanceEnough" || ruleCode == "UserHave20ForBalanceEnough" ){
							if(touchViewLink != undefined && touchViewLink != null && touchViewLink != "")
							{
								$("#xwtec_view").html("<a href=" + touchViewLink + " class='Boxbtn'>立即充值>></a>");
							}
						}
						//目标库增加链接
						if(ruleCode == "TargetDatabaseUser"){
							if(touchViewLink != undefined && touchViewLink != null && showViewText != "" && showViewText != undefined && showViewText != null && showViewText != "")
							{
							$("#xwtec_view").html("<a onclick=\"if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddjdj','"+webCode+"' ,'WT.city','"+UserInfo.userCity+"','WT.mobile','"+UserInfo.userMobile+"');};\" target='_blank' href='" + touchViewLink + "' class='Boxbtn'>"+showViewText+">></a>");
							
								
							}	
						}
					}
					var startIndex = touchViewLink.indexOf("=") + 1;
					var schemeId = touchViewLink.substring(startIndex);
					if (showScene != "null") {
						if (showScene.indexOf("WT_2")!=-1&&wt_2!=true) {
							var isHomeDivNeed = TOUCHAPP.GETTOUCH.getCookie("TOUCHPROMOTIONS_ISNEED_"+userNum);
							if ( window.location.hash.indexOf("#home") != -1) {
								if (isHomeDivNeed == null || isHomeDivNeed != schemeId) {
									if(touchContent){
										$("#homeTouchDiv").html("<a class=\"mainRight-popBox-body-close\" href='javascript:void(0);' id='closeHomeDiv'>关　闭</a><dl><dt><a onclick='TOUCHAPP.GETTOUCH.hideHomeTouchArea();' href='" + touchViewLink + "' target='_blank'><img src='"+activityImgUrl+"' /></a></dt><dd><p class='mainRight-popBox-body-title'><strong>活动时间：</strong>"+activityOnlineTime+"-"+activityOfflineTime+"</p><p class='mainRight-popBox-body-info'><strong>活动内容：</strong>" + touchContent + "</p><p class='mainRight-popBox-body-button'><a onclick=\"TOUCHAPP.GETTOUCH.hideHomeTouchArea();if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj','"+webCode+"' ,'WT.city','"+UserInfo.userCity+"','WT.mobile','"+UserInfo.userMobile+"');};\" href='" + touchViewLink + "' target='_blank'>去看看</a></p></dd></dl>");
									}
									
									TOUCHAPP.GETTOUCH.setCookie("TOUCHPROMOTIONS_ISNEED_" + userNum, schemeId, null);
									$("#closeHomeDiv").bind("click",function(){
										if(showType == "2")
										{
											var cookieValueAfterClose = currentMonth + "|1|" + showTime;
											TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, 10*365*24*60*60*1000);
										}
										else if(showType == "5")
										{
											var cookieValueAfterClose = currentMonth + "|1|" + showTime;
											// 把cookies的有效期设为默认的，关闭浏览器时cookies就失效
											TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, null);
										}
									});
														
									$("#closeHomeDiv").bind("click",function(){TOUCHAPP.GETTOUCH.hideHomeTouchArea();});
									
									$("#homeTouchDivAll").show();
									var h = $(document).height();
									$("#popMask").show().height(h);
									var divId = $("#homeTouchPosi"); 
									_windowHeight = $(window).height(),//获取当前窗口高度
									_windowWidth = $(window).width(),//获取当前窗口宽度
									_popupHeight = divId.height(),//获取弹出层高度
									_popupWeight = divId.width();//获取弹出层宽度
									_posiTop = (_windowHeight - _popupHeight)/2;
									_posiLeft = (_windowWidth - _popupWeight)/2;
									divId.css({"left": _posiLeft + "px"});//设置position
									if (type == 1) {
										BmonPage.sendResultData(touchViewLink);
									}
									wt_2 = true;
								}
							}
						}
						else if (showScene.indexOf("WT_3")!=-1 ||showScene.indexOf("WT_7F")!=-1&&wt_3!=true) {
							var isHomeDivNeed = TOUCHAPP.GETTOUCH.getCookie("TOUCHPROMOTIONS_ISNEED_"+userNum);
							if ( window.location.hash.indexOf("#home") != -1) {
								if (isHomeDivNeed == null || isHomeDivNeed != schemeId) {
									//TOUCHAPP.GETTOUCH.setCookie("TOUCHPROMOTIONS_ISNEED_" + userNum, schemeId, null);
									var popDiv =$("#popOneCardDiv");
									$("#popWord").append(touchInfo.showContent);
									popDiv.find("img").attr("src",touchInfo.busiIconUrl);
									$("#popOneCardDiv .img a img").click(function(){
										$("#popOneCardDiv").hide();
										$("#homeDiv").css("z-index", 99999);
										$("#popMaskAct").hide();
										window.open(touchViewLink);
									});
									popDiv.show();
									$("#popMaskAct").show();
									$("#popOneCardDiv .close").click(function(){
										if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj',webCode ,'WT.city',UserInfo.userCity,'WT.mobile',UserInfo.userMobile);};
										$("#popOneCardDiv").hide();
										$("#popMaskAct").hide();
									})
									wt_3 = true;
//									_windowHeight = $(window).height(),//获取当前窗口高度
//									_windowWidth = $(window).width(),//获取当前窗口宽度
//									_popupHeight = divId.height(),//获取弹出层高度
//									_popupWeight = divId.width();//获取弹出层宽度
//									_posiTop = (_windowHeight - _popupHeight)/2;
//									_posiLeft = (_windowWidth - _popupWeight)/2;
//									divId.css({"left": _posiLeft + "px"});//设置position
								}
							}
						}
						else if (showScene.indexOf("WT_1")!=-1&&wt_1!=true) {
							$("#xwtec_title").html("<a href='javascript:void(0);' class='BoxClose' title='关闭' id='xwtec_touchClose'></a>尊敬的" + userNum + "用户");
							if(touchContent){
								$("#xwtec_touchContainer").html("<a href='" + touchViewLink + "' onclick=\"if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj','"+webCode+"' ,'WT.city','"+UserInfo.userCity+"','WT.mobile','"+UserInfo.userMobile+"');}\" target='_blank'><p><strong>"+headContent+"</strong></p><p>" + touchContent + "</a></p>");
							}
							
							$("#xwtec_touchClose").bind("click",function(){
								if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif', 'WT.touch_page',window.location.href,'WT.touch_url',touchViewLink,'WT.touch_city',UserInfo.userCity,'WT.touch_event','close');}
								
								if(showType == "2")
								{
									var cookieValueAfterClose = currentMonth + "|1|" + showTime;
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, 10*365*24*60*60*1000);
								}
								else if(showType == "5")
								{
									var cookieValueAfterClose = currentMonth + "|1|" + showTime;
									// 把cookies的有效期设为默认的，关闭浏览器时cookies就失效
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, null);
								}else if (showType == "8"){
									//是否关闭，弹出日期，弹出次数
									var newCookieValue = "1" + "|" +date.getDate()+"|"+ showTime;
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*30*24*60*60*100);
									$("#xwtec_touchArea").hide();
								}
							});
							$("#xwtec_touchClose").bind("click",function(){TOUCHAPP.GETTOUCH.hideTouchArea();});
							// 插码：当用户点击推荐活动或业务链接时 begin
							touchArea.find("a").click(function(){
							    var marketURL = $(this).attr("href");
							    var id = $(this).attr("id");
							    if(id && id == "xwtec_touchClose")
							    {
							    	marketURL = "close";
							    }
							    TOUCHAPP.GETTOUCH.setPlugInfo(marketURL);
							});
							
							// 插码 end
							touchArea.show();
							// 设置弹出窗口的位置
							TOUCHAPP.GETTOUCH.setTouchAreaPosition();
							$(window).scroll(function(){
								// 设置弹出窗口的位置
								TOUCHAPP.GETTOUCH.setTouchAreaPosition();
							});
							if (type == 1) {
								BmonPage.sendResultData(touchViewLink);
							}
							wt_1 = true;
						}
					}else {
						if("null" != touchContent && "null" != touchViewLink && "null"!= headContent && wt_1!=true){
							$("#xwtec_title").html("<a href='javascript:void(0);' class='BoxClose' title='关闭' id='xwtec_touchClose'></a>尊敬的" + userNum + "用户");
							if(touchContent){
								$("#xwtec_touchContainer").html("<a href='" + touchViewLink + "' onclick=\"if (typeof(_tag)!='undefined'){_tag.dcsMultiTrack('WT.yxhddj','"+webCode+"' ,'WT.city','"+UserInfo.userCity+"','WT.mobile','"+UserInfo.userMobile+"');}\" target='_blank'><p><strong>"+headContent+"</strong></p><p>" + touchContent + "</a></p>");
							}
							
							$("#xwtec_touchClose").bind("click",function(){
								if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif', 'WT.touch_page',window.location.href,'WT.touch_url',touchViewLink,'WT.touch_city',UserInfo.userCity,'WT.touch_event','close');}
								
								if(showType == "2")
								{
									var cookieValueAfterClose = currentMonth + "|1|" + showTime;
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, 10*365*24*60*60*1000);
								}
								else if(showType == "5")
								{
									var cookieValueAfterClose = currentMonth + "|1|" + showTime;
									// 把cookies的有效期设为默认的，关闭浏览器时cookies就失效
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, cookieValueAfterClose, null);
								}else if (showType == "8"){
									//是否关闭，弹出日期，弹出次数
									var newCookieValue = "1" + "|" +date.getDate()+"|"+ showTime;
									TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*30*24*60*60*100);
									$("#xwtec_touchArea").hide();
								}
							});
							// 插码：当用户点击推荐活动或业务链接时 begin
							touchArea.find("a").click(function(){
							    var marketURL = $(this).attr("href");
							    var id = $(this).attr("id");
							    if(id && id == "xwtec_touchClose")
							    {
							    	marketURL = "close";
							    }
							    TOUCHAPP.GETTOUCH.setPlugInfo(marketURL);
							});
							
							// 插码 end
							touchArea.show();
							// 设置弹出窗口的位置
							TOUCHAPP.GETTOUCH.setTouchAreaPosition();
							$(window).scroll(function(){
								// 设置弹出窗口的位置
								TOUCHAPP.GETTOUCH.setTouchAreaPosition();
							});
							if (type == 1) {
								BmonPage.sendResultData(touchViewLink);
							}
							wt_1 = true;
						}
					}

					//自动关闭(0:从不, 10秒, 20秒, 30秒)
					var closeAfterSec = parseInt(touchInfo.autoCloseTime);
					if(closeAfterSec)
					{
						setTimeout(function(){TOUCHAPP.GETTOUCH.hideTouchArea();},closeAfterSec * 1000);
					}
					if(showType == "8"){
						var newCookieValue = "0" + "|" +date.getDate()+"|"+ showTime;
						TOUCHAPP.GETTOUCH.setCookie(cookieKey, newCookieValue, 10*30*24*60*60*100);
					}
					
				}

				if(wt_1==true&&wt_2==true&&wt_3==true){
					break;
				}
			}

			// 触点营销登录事件已经加载
			IS_LOGINTOUCH_ACTIVED = true;
		}
	},
	
	

	isNeedShow : function(cookieKey, showType, currentMonth)
	{
		// 根据事件上次的弹出情况判断是否需要去弹出
		var needShow = true;
		var date = new Date();
		var cookieValue = TOUCHAPP.GETTOUCH.getCookie(cookieKey);
		if(cookieValue)
		{
			var valueArr = cookieValue.split("|");
			// 上次弹出日期
			var lastPopDate = valueArr[0];
			// 是否点击了关闭按钮，0:否 1:是
			isClickClose = valueArr[1];
			// 弹出次数
			var showTime = valueArr[2];
			// 弹出日期，day
			var day = valueArr[3];
			
			// 3:只弹一次 或 2:用户点击关闭后不再弹出且是否点击关闭按钮为1是，则不需要弹出
			if(showType == "3" || (showType == "2" && isClickClose == "1"))
			{
				needShow = false;
			}
			// 4:每月仅弹一次，且上次弹出日期为当月日期，则不需要弹出
			else if(showType == "4")
			{
				if(lastPopDate == currentMonth)
				{
					needShow = false;
				}
			}
			// 5：每次登陆都弹，且同一登录状态下，用户点击关闭后不再弹出，且是否点击关闭按钮为1是，则不需要弹出
			else if(showType == "5" && isClickClose == "1")
			{
				needShow = false;
			}
			// 6:每月仅弹两次，且上次弹出日期为当月日期 弹出次数大于2时，则不需要弹出
			else if("6" == showType )
			{
				if(lastPopDate == currentMonth){
					if(parseInt(showTime) > 2){
						needShow = false;
					}
				}
				if (isClickClose == "1") {
					needShow = false;
				}
			}
			//7.每天第一次登陆都弹出，
			else if("7" == showType)
			{
				if(currentMonth==day){
					needShow = false;
				}
				if (isClickClose == "1") {
					needShow = false;
				}
				if( date.getDate()==day){
					needShow = false;
				}
				
			}else if ("8"==showType){
				needShow = false;
				/*
				if(lastPopDate=="1"){
					needShow = false;
				}
				if(parseInt(isClickClose) +3 > date.getDate()){
					needShow = false;
				}
				if(showTime == "111"){
					needShow = false;
				}
				if(isClickClose == date.getDate()){
					needShow = false;
				}
				*/
			}
		}
		return needShow;
	},

	// 设置弹出窗口的位置
	setTouchAreaPosition : function()
	{
		
	},

	setCookie : function(cookieKey, cookieValue, expire)
	{
		var cookieStr = cookieKey + "=" + escape(cookieValue) + "; path=/;";
		if(expire != null)
		{
			var date = new Date();
			date.setTime(date.getTime() + expire);
			cookieStr += ";expires=" + date.toGMTString();
		}

		document.cookie = cookieStr;
	},

	getCookie : function(cookieKey)
	{
		var cookieArr = document.cookie.split("; ");
		if(cookieArr.length != 0)
		{
			for (var i = 0; i < cookieArr.length; i++)
			{
				var kv = cookieArr[i].split("=");
				if (kv[0].indexOf(cookieKey) == 0)
				{
					return unescape(kv[1]);
				}
			}
		}
		return null;
	},
	
	hideHomeTouchArea : function () {
	 	$("#homeTouchDivAll").hide();
	 	$("#popMask").hide();
	},

	hideTouchArea : function()
	{
		$("#xwtec_touchArea").hide();	
	
	},
	hideTouchAreaNew : function()
	{
		$("#tc-wzyh-ad").hide();	
			
	},

	clearBalanceShortCloseCookie : function(userNum)
	{
		// 用户号码不为空
		if(userNum != null)
		{
			var cookieKey = userNum + "|JS_OBSH_USER_LOGIN|PrePayUserBalanceShort@touch.js.10086.cn";
			// 清除触点营销预付费用户余额不足20元提醒，用户是否点击关闭按钮的cookie值
			TOUCHAPP.GETTOUCH.setCookie(cookieKey, "", 0);
		}
	},

	// 右下角弹窗插码
	setPlugInfo : function(marketURL)
	{
		// 当前页面的URL地址
		var pageUrl = document.location.href;

		if (typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif', 'WT.touch_page',pageUrl,'WT.touch_url',marketURL);}
	},

	// 这里busiReq请求，不需要显示/隐藏 LoadingDialog
	busiReq : (function(){
        var default_options = {
            "type"       :    "post",
            "timeout"    :    "120000",
			"url"        :    GLOBAL_INFO.BUSINESS_REQ_URI,
            "success"    :    function(data){
                alert("Ajax Success!");
            },
            "error"      :    function(request, textStatus, errorThrown){

            },
            "complete" : function()
            {

            }
        };
        return function(user_options){
            var options = {};
            var new_options = {};
            for(var key in user_options)
            {
            	if(key != 'success')
            	{
            		new_options[key] = user_options[key];
            	}
            }
            new_options['success'] = function(data)
            {
            	var result = eval("(" + data + ")");

            	user_options['success'](data);
            };
            $.extend(options, default_options, new_options);

            $.ajax(options);
        };
    })()
}
//touch.js---------------------end

//sdc_js.js---------------------start  2016/0202   插码基本码
function _wt(){this.u="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://221.178.251.33/dcsch95n910000oyikv5jax99_9t1n/dcs.gif?WT.branch=jiangsu";this.p="";this.t="";this.WT={};this.z=true;};_wt.prototype.D=function(){var gu="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://sdc.10086.cn/dcs4vqpi1gn99hjhj4ik4q8d7_4w9z/dcs.gif?WT.branch=jiangsu";var gn=['ZDCX','QDCX','ZHYEJYXQ','CZJF_CZJFJL','JFDHCX_JFCX','TCJYWCX','GRZLGL_PUKMCX','HMGSDCX','TCSYQK','LDTX','LDXS','TCJYWCX_FJGNBG_HJDD','TCJYWCX_FJGNBG_HJZY','MSFF','YYXX','JTZHKHJGL','IPZTC','GJTGACT','GJTGAMY','YHTFJ','PPTCBG','ZXRW_QPPZXRW','SJZF','YLKCZ','MMFW_MMXG','MMFW_MMCZ','CB_JFDH','CB_4GZXTC','CB_LLJYB','CB_4GFXTC','GPRS4G','CB_LLAXB','CB_HJZY','IQ_YKTTCCX','IQ_GRZLCX','IQ_DZFPCX','IQ_YKTYWCX','HJZYSZ','ZDJYB','GPRSDJB','MY_GRZLGL','MY_WDDD','MY_WDYW'];var $b=null;for(var i=0;i<gn.length;i++)if(this.p.indexOf(gn[i])>0){$b=this.u;break;};var gp=[encodeURIComponent('/'),encodeURIComponent('/index.html')];for(var j=0;j<gp.length;j++)if(this.p.indexOf('='+gp[j]+'&')>0){$b=this.u;break;};if($b){this.u=gu;this.G();this.u=$b;}};_wt.prototype.V=function(){this.p+="&dcssip="+window.location.hostname+"&WT.host="+window.location.hostname+"&dcsuri="+encodeURIComponent(window.location.pathname)+"&WT.es="+encodeURIComponent(window.location.href);if(window.location.search)this.p+="&dcsqry="+encodeURIComponent(window.location.search);if((window.document.referrer!="")&&(window.document.referrer!="-")&&(window.document.referrer.length>10))this.p+="&dcsref="+encodeURIComponent(window.document.referrer)+"&WT.referrer="+encodeURIComponent(window.document.referrer);if(typeof(screen)=="object"){this.p+="&WT.sr="+screen.width+"x"+screen.height;};this.p+="&WT.ti="+encodeURIComponent(window.document.title);};_wt.prototype.M=function(){var $c;if(document.all)$c=document.all.tags("meta");else if(document.documentElement)$c=document.getElementsByTagName("meta");if(typeof($c)!="undefined"){var length=$c.length;for(var i=0;i<length;i++){var name=$c.item(i).name;if(name.length>0){if(name.toUpperCase().indexOf("WT.")==0)this.p+="&"+name+"="+$c.item(i).content;}}};for(N in this.WT){this.p+="&WT."+N+"="+this.WT[N];}};_wt.prototype.G=function(){var $d=this.p+"&dcsdat="+(new Date()).getTime()+this.t;var pt={};var $e=$d.split("&");$d="";for(var i=0;i<$e.length;i++){if($e[i].length>0)pt[$e[i].split("=")[0]]=$e[i].split("=")[1];};for(N in pt){$d+="&"+N+"="+pt[N];};var $f=new Image();$f.onload=function(){try{document.body.appendChild($f);}catch(e){}};$f.src=this.u+$d;};_wt.prototype.S=function(){if(this.z){this.z=false;this.V();this.M();this.F();this.G();this.D();}};_wt.prototype.dcsMultiTrack=function(){var $g=this.dcsMultiTrack.arguments?this.dcsMultiTrack.arguments:arguments;if($g.length%2==0)for(var i=0;i<$g.length;i+=2)this.t+="&"+$g[i]+"="+encodeURIComponent($g[i+1]);this.G();this.D();this.t="";};_wt.prototype.E=function($h,$i){var e=$h.target||$h.srcElement;while(e.tagName&&(e.tagName.toLowerCase()!=$i.toLowerCase())){e=e.parentElement||e.parentNode;e=e||{};};return e;};_wt.prototype.P=function($h){var x=$h.clientX;var y=$h.clientY;$j=(document.documentElement!=undefined&&document.documentElement.clientHeight!=0)?document.documentElement:document.body;var $k=window.pageXOffset==undefined?$j.scrollLeft:window.pageXOffset;var $l=window.pageYOffset==undefined?$j.scrollTop:window.pageYOffset;return(x+$k)+"x"+(y+$l);};_wt.prototype.N=function($h){var id="";var $m="";var $c=["div","table"];var $n=$c.length;var i,e,$o;for(i=0;i<$n;i++){$o=$c[i];if($o.length){e=this.E($h,$o);id=(e.getAttribute&&e.getAttribute("id"))?e.getAttribute("id"):"";$m=e.className||"";if(id.length||$m.length)break;}};return id.length?id:$m;};Function.prototype.wtbind=function($p){var $q=this;var $r=function(){return $q.apply($p,arguments);};return $r;};_wt.prototype.K=function($h){$h=$h||(window.event||"");if($h&&((typeof($h.which)!="number")||($h.which==1))){var name="";var $s="";var e=this.E($h,"A");if(e.href){name=e.href;$s="Link";}else{e=this.E($h,"INPUT");$s=e.type||"";if($s&&(($s=="submit")||($s=="button")||($s=="reset")||($s=="text")||($s=="radio")||($s=="checkbox"))){name=e.name||e.id||"null";}}if(typeof(this.trackObj)=="undefined"||this.trackObj==""||this.trackObj==";;"||this.trackObj.indexOf(";"+name+";")>-1){if($s&&(($s=="radio")||($s=="checkbox"))){name=(e.name||e.id||"null")+"."+(e.value||"null");}if(e.form)name=(e.form.id||e.form.name||e.form.className||"frm")+"."+name;if(name&&$s)this.dcsMultiTrack("WT.type",$s,"WT.event",name,"WT.nv",this.N($h),"WT.pos",this.P($h));};}};_wt.prototype.trackEvent=function(){var e=(navigator.appVersion.indexOf("MSIE")!=-1)?"click":"mousedown";if(document.body.addEventListener)document.body.addEventListener(e,this.K.wtbind(this),true);else if(document.body.attachEvent)document.body.attachEvent("on"+e,this.K.wtbind(this));};_wt.prototype.getFormInfo=function(a,x){if(a){var $c=a.elements;var $d;if($c){for(var i=0;i<$c.length;i+=1){$d=$c[i];if($d.name!=undefined&&$d.name!=""&&(x.indexOf(";"+$d.name+";")>=0)){if($d.type!=undefined&&$d.type!=""){if($d.type=='checkbox'||$d.type=='radio'){if($d.checked==true){if(this.t.indexOf($d.name)>0)this.t+=";"+encodeURIComponent($d.value);else this.t+="&"+$d.name+"="+encodeURIComponent($d.value);}}else{if($d.type=='button'||$d.type=='submit'||$d.type=='reset'||$d.type=='image'){continue;}else{this.t+="&"+$d.name+"="+encodeURIComponent($d.value);}}}else{this.t+="&"+$d.name+"="+encodeURIComponent($d.value);}}}}}};_wt.prototype.F=function(){ if (!navigator.cookieEnabled){this.p+="&WT.vt_f=2"; return;}var $t="2";var $u=new Date();var $v=new Date($u.getTime()+315360000000);var $w=new Date($u.getTime());if(document.cookie.indexOf("WT_FPC=")!=-1){this.p+="&WT.vt_f=3";$t=document.cookie.substring(document.cookie.indexOf("WT_FPC=")+10);if($t.indexOf(";")!=-1)$t=$t.substring(0,$t.indexOf(";"));if($u.getTime()<((new Date(parseInt($t.substring($t.indexOf(":lv=")+4,$t.indexOf(":ss="))))).getTime()+1800000)){$w.setTime((new Date(parseInt($t.substring($t.indexOf(":ss=")+4)))).getTime());}else{this.p+="&WT.entry=2";};$t=$t.substring(0,$t.indexOf(":lv="));};if($t.length<10){ this.p+="&WT.vt_f=1&WT.entry=1";var $x=$u.getTime().toString();for(var i=2;i<=(32-$x.length);i++)$t+=Math.floor(Math.random()*16.0).toString(16);$t+=$x;};$t=encodeURIComponent($t);this.p+="&WT.co_f="+$t;document.cookie="WT_FPC=id="+$t+":lv="+$u.getTime().toString()+":ss="+$w.getTime().toString()+"; expires="+$v.toGMTString()+"; path=/; domain=.10086.cn";};var _tag=new _wt();if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){_tag.S();},false);}else{if(document.attachEvent){var $z=function(){try{document.documentElement.doScroll('left');}catch(e){setTimeout(arguments.callee,5);return;};_tag.S();};$z();}else{_tag.S();}};if(typeof(_grtag)=="undefined"){_grtag=_tag;};
///20170926 to add 11 more business to group
//sdc_js.js---------------------end

//AC_RunActiveContent.js---------------------start
//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");

			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful.

			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}

	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;

	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?');
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs)
{
  var str = '';
  if (isIE && isWin && !isOpera)
  {
    str += '<object ';
    for (var i in objAttrs)
    {
      str += i + '="' + objAttrs[i] + '" ';
    }
    str += '>';
    for (var i in params)
    {
      str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    }
    str += '</object>';
  }
  else
  {
    str += '<embed ';
    for (var i in embedAttrs)
    {
      str += i + '="' + embedAttrs[i] + '" ';
    }
    str += '> </embed>';
  }

  document.write(str);
}

function AC_FL_RunContent(){
  var ret =
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret =
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();

    switch (currArg){
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace":
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}
//AC_RunActiveContent.js---------------------end

// icc.js == 发布版本时修改时间戳
var ICC_GLOBAL_INFO = {
	TIME_STAMP : 201408010000 //时间戳
};

var IccResourceLoader = {
	asyncLoad : function(checkLoadedFun, callback1, callback2) {
	// 通过定时器检测资源是否加载成功
	var _load_timer1 = setInterval(function() {
		// 加载完成
		if (checkLoadedFun()) {
			// 清除定时器
			clearInterval(_load_timer1);
			clearTimeout(_load_timer2);
			callback1 && callback1();
		}
	}, 50);

	var _load_timer2 = setTimeout(function() {
		// 清除定时器
		clearInterval(_load_timer1);
		clearTimeout(_load_timer2);
		callback2 && callback2();
		}, 10000);
	},

	loadJS : function(jsURL, callback) {
		if (jsURL) {
			var scriptId = "dynamicJS_" + jsURL;
			//如果该JS文件已经加载过，直接调用回调函数后结束
			if (document.getElementById(scriptId) != null) {
				callback && callback();
				return;
			}
			var scriptTag = document.createElement("script");
			scriptTag.type = "text/javascript";
			scriptTag.id = scriptId;
			scriptTag.src = jsURL + "?t=" + ICC_GLOBAL_INFO.TIME_STAMP;
			var headTag = document.getElementsByTagName("head")[0];
			headTag.appendChild(scriptTag);
			if ($.browser.msie) { //IE
				scriptTag.onreadystatechange = function() {
					if (scriptTag.readyState == 'loaded' || scriptTag.readyState == 'complete') {
						callback && callback();
					}
				};
			} else { //OP/FF/Webkit(SF/CM)
				scriptTag.onload = function() {
					callback && callback();
				};
			}
		} else {
			callback && callback();
		}
	},

	loadCSS : function(cssURL, callback) {
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
			cssTag.href = cssURL + "?t=" + ICC_GLOBAL_INFO.TIME_STAMP;
			headTag.appendChild(cssTag);
			if (callback) { //IE
				if ($.browser.msie) {
					cssTag.onreadystatechange = function() {
						if (cssTag.readyState == 'loaded' || cssTag.readyState == 'complete') {
							callback && callback();
						}
					};
				} else if ($.browser.opera) { //opera
					cssTag.onload = function() {
						callback && callback();
					};
				} else { //火狐和其它浏览器
					// 通过定时器检测css是否加载成功
					this.asyncLoad(function() {
						var loadComplete = false;
						try {
							var sheets = document.styleSheets;
							for ( var i = 0, j = sheets.length; i < j; i++) {
								var sheet = sheets[i];
								if (sheet.ownerNode.id == cssId) {
									sheet.cssRules;
									loadComplete = true;
									break;
								}
							}
						} catch (e) {
							// FF看到的可能的报错：
							// 本地：nsresult: "0x8053000f (NS_ERROR_DOM_INVALID_ACCESS_ERR)" ，因为没加载完成还不能读取，加载完毕就不会报错了
							if (e.name && e.name == "NS_ERROR_DOM_SECURITY_ERR") {
								loadComplete = true;
							}
						}
						return loadComplete;
					}, callback);
				}
			}
		} else {
			callback && callback();
		}
	}
};

var Icc = function(data) {
	return {
		loadCss : function(callback) {
			if (data) {
				if (data.externalCSSURL) {
					IccResourceLoader.loadCSS(data.externalCSSURL);
					callback && callback();
				} else if (data.externalCSSURLs && data.externalCSSURLs.length > 0) {
					for ( var i = 0; i < data.externalCSSURLs.length; i++) {
						IccResourceLoader.loadCSS(data.externalCSSURLs[i]);
					}
					callback && callback();
				} else {
					callback && callback();
				}
			}
		},
		loadJS : function(callback) {
			if (data) {
				if (data.externalJSURL) {
					IccResourceLoader.loadJS(data.externalJSURL, callback);
				}else {
					callback && callback();
				}
				if (data.externalJSURLs) {
					for ( var i = 0; i < data.externalJSURLs.length; i++) {
						IccResourceLoader.loadJS(data.externalJSURLs[i], callback);
					}
				} else {
					callback && callback();
				}
			}
		},
		updateDOM : function(callback) {
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
					} else {
						IccResourceLoader.asyncLoad(function() {
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

Icc.getDefaultPageletData = function(){
	return {
		"id":"",
		"jsLoadOrder":"0",
		"resultCode":"0",
		"containerId":"",
		"htmlContent":"",
		"externalJSURL":"",
		"externalJSURLs":"",
		"externalCSSURL":"",
		"externalCSSURLs":""
	};
};

var IccPagelet = function() {
	var onPageletArrive = function(pageletData, processEndCallback) {
		if (typeof (processEndCallback) != 'function') {
			processEndCallback = function() {
			};
		}

		var pageletDataObj = {
			"resultCode" : "1"
		};
		
		$.extend(pageletDataObj, Icc.getDefaultPageletData, pageletData);
		if (pageletDataObj && pageletDataObj.resultCode == '1') {
			var icc = new Icc(pageletDataObj);
			icc.loadCss(function() {
				var jsLoadOrder = pageletDataObj.jsLoadOrder;
				if (jsLoadOrder && jsLoadOrder === "0") {
					icc.updateDOM(function() {
						icc.loadJS(function() {
							processEndCallback();
						});
					});
				} else {
					icc.loadJS(function() {
						icc.updateDOM(function() {
							processEndCallback();
						});
					});
				}
			});
		} else {
			alert("Paglet Error!");
		}
	};
	return {
		renderPagelet : onPageletArrive
	};
}();

var IccRender = function(){
	var renderRegisterPageletsTimer = null;
	var renderMainPageFrame = function(frameData,callback){
		IccPagelet.clearRegisterPagelets();
		if(renderRegisterPageletsTimer != null){
			clearInterval(renderRegisterPageletsTimer);
			renderRegisterPageletsTimer = null;
		}
		IccPagelet.renderPagelet($.extend({},Icc.getDefaultPageletData(),frameData),function(){
			if(renderRegisterPageletsTimer == null){
				renderRegisterPageletsTimer = setInterval(function(){
					IccPagelet.renderRegisterPagelets();
				},500);
			}
			callback && callback();
		});
	};
	var synchCallMethod = function(methodName, dynamicValue) {
		IccResourceLoader.asyncLoad(function() {
			var loadComplete = false;
			var is_method_loader = "typeof(" + methodName + ") == 'function'";
			if (eval(is_method_loader)) {
				loadComplete = true;
			}
			return loadComplete;
		}, function() {
			var _CallBack = eval(methodName);
			_CallBack.call(methodName, dynamicValue);
		});
	};
	return {
		synchCallMethod:synchCallMethod,
		renderPagelet:IccPagelet.renderPagelet,//立刻输出Pagelet
		registerPagelet:IccPagelet.registerPagelet,//把Pagelet加入队列中暂时不输出
		renderMainPageFrame:renderMainPageFrame//输出中间页面框架内容
	};
}();

function timeoutTip(data) {
	var jsonData = eval("(" + data + ")");
	var timeoutTip = "<div class='grid-946'><div class='flArea-CP-head'><h3>我的移动</h3></div>"
				   + "<div class='cp-loadBusy'><div class='cp-loadBusy1'></div><div class='cp-loadBusy2'></div><div class='cp-loadBusy-txt'>服务器较为繁忙，我们正在努力为您加载页面<br>如等待时间过长，请 <a href='javascript:document.location.reload();'>点击重新加载</a></div></div></div>"
				   + "<div class='flArea-shrink'><a href='http://www.js.10086.cn/my' target='_blank'></a></div>";
	$("#" + jsonData.timeoutId).html(timeoutTip);
}



var luckNum = null;
function getLuckyNumEnter () {
		//拍拍我 插码开始
		if(typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri', '/flash.gif','WT.nv','3F_MidArea','WT.event', 'PPW_event');}
		//拍拍我 插码结束
		var str = "";
		if (null == luckNum || luckNum.length<3) {
			$.commonReq({
				"data" : {
					"reqUrl" : "zxrwSale",
					"busiNum" : "ZXRW_BUYMOBILE",
					"zxrwMethed" : "getLuckyMobile"
				},
				"success" : function(data){
					var result = eval("(" + data + ")");
					luckNum = result.resultObj;
					str = retrunStr();
					return str;
				}
			});
		} else {
			str = retrunStr();
			return str;
		}
	}
	
	function getLuckyNum () {
		var str = "";
		if (null == luckNum || luckNum.length<3) {
			$.commonReq({
				"data" : {
					"reqUrl" : "zxrwSale",
					"busiNum" : "ZXRW_BUYMOBILE",
					"zxrwMethed" : "getLuckyMobile"
				},
				"success" : function(data){
					var result = eval("(" + data + ")");
					luckNum = result.resultObj;
					str = retrunStr();
					return str;
				}
			});
		} else {
			str = retrunStr();
			return str;
		}
	}
	
function rollMe(){//函数名请自行修改
	var l = $("#goodMobileUl");//号码的列表
	var ind = 0;
	var numb = new Array();//号码暂存的数组
	
	changeRollBg(true);
	delNode();
	 
	//按钮的背景转动
	function changeRollBg(a){
		if(a){
			//$("#WSXH-quick").css('background-image','url(http://files01.js.10086.cn/obsh/pics/rollBg-2.gif)');
			$("#rollNumA").attr("onclick","");
			$("#rollNumA").unbind("click");
			$("#rollNumA").attr("class","btn shake");
		} //这边修改背景图rollBg-2.gif的路径
		else{
			$("#WSXH-quick").css('background-image','');
			$("#rollNumA").bind("click", function(){
				zxrwSaleComponent.searchGoodMobile();
			});
			$("#rollNumA").attr("class","btn");
		}
	}
	
	//删除号码的节点
	function delNode(){
		if(l.children().size()>0){
			l.children(":last").fadeOut(150,function(){$(this).remove()});
			setTimeout(delNode,20);
		} else {
			getNum();
			addNode();
		}
	}
	
	//增加号码的节点
	function addNode(){
		if(l.children().size()<8){
			var li = $("<li></li>");
			li.hide().html(numb[ind]).appendTo(l).fadeIn();
			ind++;
			setTimeout(addNode,150);
		} else {
			ind = 0;
			changeRollBg(false);
		}
	}
	
	//AJAX获取号码，此处为DEMO的模拟效果，请自行修改
	function getNum(){
		var goodMobile = zxrwSaleComponent.goodMobile;
		var goodMobile_html = "";
		if (goodMobile != null && goodMobile.length > 0) {
			for (var i = 0;i < goodMobile.length;i ++) {
				numb[i] = "<li><a href='#ZXRW_BUYMOBILE_INFO@isOther=1@mobile="+goodMobile[i].mobile+"'>" + goodMobile[i].mobile.substring(0,7) + "<em>" + goodMobile[i].mobile.substring(7,11) + "</em></a></li>";
			}
		}
	}
}

	
function retrunStr () {
		var respCode = 0;
		var str = "";
		var strNum = "";
		var count = 0;
		if (null != luckNum) {
		    if (luckNum.length>=3) {
				for (var i = 0; count<3; i++) {
			        //判断如果数组还有可以取出的元素,以防下标越界
			            //在数组中产生一个随机索引
			            var arrIndex = Math.floor(Math.random()*luckNum.length);
			            //将此随机索引的对应的数组元素值复制出来
			            var num = luckNum[arrIndex].mobile;
			            if (strNum.indexOf(num) == -1) {
			            	if (count == 2) {
				            	strNum += luckNum[arrIndex].mobile+"";
				            	break;
				            }else {
				            	strNum += luckNum[arrIndex].mobile+",";
				            }
			            	count++;
			            }
			     } 
	    	} else {
	    		respCode = 2;
	    	}
	    } else {
	    	respCode = 2;
	    }
	    str = respCode+";"+strNum;
	    return str;
	}
		
function geturlto(mobile) {
	//选号码 插码开始
	if(typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri', '/flash.gif','WT.nv','3F_MidArea','WT.event', 'Mobile_event');}
	//选号码 插码开始
	window.open("#ZXRW_BUYMOBILE_INFO@isOther=1@mobile="+mobile);
}

function addCookie(name,value,expire){ 
	var exp = new Date();
    exp.setTime(exp.getTime() + expire);
    var cookieString=name+"="+escape(value);      
    cookieString=cookieString+"; ;expires=" + exp.toGMTString()+";path=/";
    document.cookie=cookieString; 
} 

function listShowStart3(spanId,listId){
	var t;
	var aIndexSpan = $("#"+spanId),
	    aList = $("#"+listId);
	//标签鼠标事件
    aIndexSpan.hover(
	  function(){
		  clearTimeout(t);
		  //收藏气泡隐藏
		  loginComponent.closeFavTips()
		  var a= aIndexSpan.offset();
		  aList.show();
	  },
	  function(){
		  listHide();
	  }
	);
	//列表鼠标事件
    aList.hover(
	  function(){clearTimeout(t);},
	  function(){listHide();}
	);
    //隐藏列表
    function listHide(){
		t = setTimeout(function(){aList.hide();},100)
	}
}

//icc.js

//电梯导航js
$(document).ready(function(){

	var guide = $(".guide");
	var pop_share = $(".pop-share");
	guide.mouseover(function(){
		$(this).stop();
		$(this).animate({
			right:"0px"
		},500)
	});
	guide.mouseleave(function(){
		$(this).stop();
		$(this).animate({
			right:"-70px"
		},500);
		pop_share.hide();
	});
	
	var flAreaLiftFloor = $(".lift-floor a");
	flAreaLiftFloor.bind("click",function(){
	var flAreaLiftFloorId = $(this).attr("floorId")
	$('html, body').animate({ scrollTop: $('#'+flAreaLiftFloorId).offset().top}, 520);
	});
	
	//分享
	var tilt = "江苏移动网上营业厅";
	var conent = "不想跑营业厅，天气太热！！！敢不敢登录江苏移动网上营业厅，轻松在家充话费办业务！现在话费充值91折起，流量消费更是一目了然，还有网上专售靓号、18元动感地带上网卡套餐和0元购机哦，赶紧登录 www.js.10086.cn点击网上营业厅或上网搜索江苏移动吧！"; 
	//feixin 飞信好友
	var href_fxhy = "javascript:window.open('http://space.feixin.10086.cn/api/cshare?source='+encodeURIComponent('江苏移动网上营业厅')+'&title='+encodeURIComponent('";
	href_fxhy += conent;
	href_fxhy +="')+'&url='+encodeURIComponent('";
	href_fxhy += "'),"
	href_fxhy += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');void(0)";
	$("#home_market_fxhy").attr("href",href_fxhy);
	$("#home_market_fxhy2").attr("href",href_fxhy);
	//QQ空间
	var href_qqkj = "javascript:window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent('";
	href_qqkj += document.location.href;
	href_qqkj += "')+'&title='+encodeURIComponent('"+conent+"')+'&desc=&summary=&site=',";
	href_qqkj += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_qqkj").attr("href",href_qqkj);
	$("#home_market_qqkj2").attr("href",href_qqkj);
	//人人网
	var href_rrw = "javascript:window.open('http://widget.renren.com/dialog/share?resourceUrl='+encodeURIComponent('";
	href_rrw += document.location.href;
	href_rrw += "')+'&title='+encodeURIComponent('"+conent;
	href_rrw += "'),'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_rrw").attr("href",href_rrw);
	$("#home_market_rrw2").attr("href",href_rrw);
	//手机冲浪
	var href_sjcl = "javascript:window.open('http://go.10086.cn/ishare.do?m=wt&u='+encodeURIComponent('";
	href_sjcl += document.location.href;
	href_sjcl += "')+'&t='+encodeURIComponent('"+conent+"')+'&sid=0000000000000000',";
	href_sjcl += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');void(0)";
	$("#home_market_sjcl").attr("href",href_sjcl);
	$("#home_market_sjcl2").attr("href",href_sjcl);
	//新浪微博
	var href_xlwb = "javascript:window.open('http://v.t.sina.com.cn/share/share.php?appkey=&url='+encodeURIComponent('";
	href_xlwb += "')+'&title='+encodeURIComponent('"+conent+"'),";
	href_xlwb += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_xlwb").attr("href",href_xlwb);
	$("#home_market_xlwb2").attr("href",href_xlwb);
	//开心网
	var href_kxw = "javascript:window.open('http://www.kaixin001.com/repaste/share.php?rtitle='+encodeURIComponent()+'";
	href_kxw += "&rcontent='+encodeURIComponent('"+conent+"。')+'&rurl=";
	href_kxw += "','favit','');void(0)";
	$("#home_market_kxw").attr("href",href_kxw);
	$("#home_market_kxw2").attr("href",href_kxw);
	//139说客
	var href_shuok = "javascript:window.open('http://shequ.10086.cn/share/share.php?tl=&source=&title='+encodeURIComponent('";
	href_shuok += conent;
	href_shuok += "')+'&url='+encodeURIComponent('";
	href_shuok += document.location.href;
	href_shuok += "'),";
	href_shuok += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');void(0)";
	$("#home_market_139shuok").attr("href",href_shuok);
	$("#home_market_139shuok2").attr("href",href_shuok);
	//搜狐微博
	var href_shwb = "javascript:window.open('http://t.sohu.com/third/post.jsp?&url='+encodeURIComponent('";
	href_shwb += "')+'&title='+encodeURIComponent('"+conent+"')+'&content=utf-8&pic=',";
	href_shwb += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_shwb2").attr("href",href_shwb);
	//淘江湖
	var href_tjh = "javascript:window.open('http://share.jianghu.taobao.com/share/addShare.htm?url='+encodeURIComponent(document.location.href),";
	href_tjh += "'_blank','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes');void(0)";
	$("#home_market_tjh2").attr("href",href_tjh);
	//百度收藏
	var href = "javascript:window.open('http://cang.baidu.com/do/add?it='+encodeURIComponent('";
	href += tilt+"')+'&iu="+encodeURIComponent(document.location.href);
	href += "&fr=ien#nw=1','_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');void(0)";
	$("#home_market_bdsc2").attr("href",href);
	//gmail;
	var href_gmail = "javascript:window.open('https://mail.google.com/mail/?ui=1&view=cm&fs=1&tf=1&su='+encodeURIComponent('";
	href_gmail += tilt+conent;
	href_gmail += "')+'&body='+encodeURIComponent('";
	href_gmail += document.location.href;
	href_gmail += "')+'&shva=1&ov=0',";
	href_gmail += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_gmail2").attr("href",href_gmail);
	//bdkj 百度空间
	var href_bdkj = "javascript:window.open('http://apps.hi.baidu.com/share/?url='+encodeURIComponent('";
	href_bdkj += document.location.href;
	href_bdkj += "')+'&title='+encodeURIComponent('"+conent+"'),";
	href_bdkj += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_bdkj2").attr("href",href_bdkj);
	//腾讯微博
	var href_txwb = "javascript:window.open('http://v.t.qq.com/share/share.php?url='+encodeURIComponent('";
	href_txwb += "')+'&title='+encodeURIComponent('"+conent+"'),";
	href_txwb += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_txwb2").attr("href",href_txwb);
	//QQ书签
	var href_qqsq = "javascript:window.open('http://shuqian.qq.com/post?from=3&title='+encodeURIComponent('";
	href_qqsq += tilt;
	href_qqsq += "')+'&uri='+encodeURIComponent(document.location.href)+'&jumpback=2&noui=1',";
	href_qqsq += "'favit','width=930,height=470,left=50,top=50,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes');void(0)";
	$("#home_market_qqsq2").attr("href",href_qqsq);
	
	listShowStart3("shareShow","popShare");
	
})