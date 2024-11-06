IEVersion();
// ie浏览器版本查询
function IEVersion() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 9) {
			// console.log("=9")
			console.log(fIEVersion)
			return 9;
		} else if (fIEVersion > 9) {
			console.log(fIEVersion)
			return 10; //IE版本10
		} else {
			console.log(fIEVersion)
			// $("html").html(" ");
			var sof=$(".software").attr("class");
			console.log(sof)
			if (sof==undefined) {
				alert("您的浏览器版本过低！但为您跳到下载页面。");
				window.location.href="http://127.0.0.1:8848/%E5%A4%A7%E7%99%BD%E8%8F%9C%E5%AE%98%E7%BD%91%E8%BF%AD%E4%BB%A3/software.html"
			} else{
			}
			return 6; //IE版本小于9
		}
	}
}
// 判断ie浏览器
var u = window.navigator.userAgent.toLocaleLowerCase(),
	ie11 = /(trident)\/([\d.]+)/,
	b = u.match(ie11);
if (b) {
	// 使用手册滚动条
	$(".manual-main-aside-div2").css({
		"position": "relative",
		"overflow": "hidden",
		"max-height": "364px"
	});

	$(".manual-main-aside-div2 ul .scroll-div1").css({
		"height": "40px"
	});
	$(".manual-main-aside-div2 ul .scroll-div2").css({
		"height": "30px"
	});
	$(".scroll-div").css({
		"height": "30px",
		"position": "absolute",
		"right": "5px",
		"top": "56px",
		"width": "4px",
		"height": "100%",
		"border": "0px #fff solid",
		"border-right": "15px #fff solid"
	});
	$(".manual-main-aside-div2 ul").css({
		"top": "-40px",
		"height": "326px"
	});

	$(".hotkey-div").css({
		"height": "30px",
		"position": "absolute",
		"right": "5px",
		"top": "0px",
		"width": "4px",
		"height": "100%",
		"border": "0px #fff solid",
		"border-right": "15px #fff solid"
	});
	// 快捷键
	$(".select-list2").css({
		"overflow": "hidden",
		"max-height": "220px"
	});
	$(".select-list2 ul").css({
		"position": "relative",
		"top": "-40px",
	});
	$(".select-list2 ul span").css({
		"position": "relative",
		"margin-left": "15px"
	});
	$(".hotkey-div1").css({
		"height": "40px"
	});
	$(".hotkey-div2").css({
		"height": "30px"
	});


}

// 超出文本用省略号
function wordlimit(cname, wordlength) {
	var cname = document.getElementsByClassName(cname);
	for (var i = 0; i < cname.length; i++) {
		var nowhtml = cname[i].innerHTML.replace(/\s/g,"");
		var nowlength = nowhtml.length;
		if (nowlength > wordlength) {
			cname[i].innerHTML = nowhtml.substr(0, wordlength) + '…';
		}
	}
}

// 首页
wordlimit("index-tutorial-sldiv", 65);
wordlimit("index-help-sldiv", 50);
wordlimit("index-help-sldiv1", 70);
wordlimit("index-problem-sldiv", 38);
// 软件下载
wordlimit("software-sldiv", 84);
// 帮助中心
wordlimit("help-sldiv", 60);
// 侧边栏
wordlimit("aside-sldiv", 30);
wordlimit("aside-sldiv1", 35);


// 侧边栏-推荐问题动画
$(".aside-recommended li").hover(function() {
	$(".aside-recommended-div").hide();
	$(this).children(".aside-recommended-div").show();
	$(".aside-recommended-a").css({
		"color": "#333"
	});
	$(this).children(".aside-recommended-a").css({
		"color": "#1ec456"
	});
}, function() {
})

$(document).ready(function () {
	var script = document.createElement('script');
	script.src = '/js/config-down.js';
	document.body.appendChild(script);
});

function downloadtext(url) {
	// 统计下载
	$.get('/downs.php');
	// 统计关键词
	var _eqid = getCookie('eqid');
	if (_eqid) {
		var tag = 2; // 默认为百度
		var list = ["baidu","home","sogou","so"];
		var keyword = '';
		if (list.indexOf(_eqid)>-1) { // eqid取值为list数组范围
			tag = (list.indexOf(_eqid)) + 1; // 下标+1
		}else if(list.indexOf(_eqid) == -1 && _eqid){
			tag = 1;//百度来源
			keyword = getCookie('keyword');
		}
		$.get("keywords.php", {tag:tag,keyword:keyword});
	}
	accessLog(getCookie('eqid'));
	_hmt.push(['_trackEvent', 'downloads', 'click', $(this).data('tag'), 1]);
}
function addCookie(name,value){
	var cookieString = name+"="+value;
	document.cookie=cookieString;
}
function getCookie(name){
	var strCookie=document.cookie;

	var arrCookie=strCookie.split("; ");
	for(var i=0;i < arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		if(arr[0]==name)return arr[1];
	}
	return "";
}
