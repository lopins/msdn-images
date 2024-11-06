function setCookie(name,value) {
//	var exp = new Date();
//	exp.setTime(exp.getTime() + 60 * 30000); // 过期时间 30分钟
//	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	document.cookie = name + "="+ encodeURIComponent (value);
}

function getCookie(name) { 
    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
    	return decodeURIComponent(arr[2]);
    } 
    return null; 
}

function removeCookie(key){
    setCookie(key,"",-1); // 把cookie设置为过期
};

function getEqid() { 
	var _eqid = getCookie('eqid');
	//_eqid 存在说明不是第一次访问，不需要设置cookie
	if(_eqid){
		return true;
	}
	//_eqid 不存在说明第一次访问,判断referrer
	var referrer = window.document.referrer;
	if (referrer.indexOf('baidu.com') != -1) { // 百度
		var params = parseUrl(referrer);
		if (params.eqid) {
			setCookie('eqid',params.eqid);
        }else{
			//百度来源，但不带eqid。检查有没有带 oq,wd，word
			grep = /wo?r?d\=.*\&/i;
			str = referrer.match(grep);
			keyword = str.toString().split('&')[0].split('=')[1];
			if(!keyword){
				grep = /oq\=.*\&/i;
				str = referrer.match(grep);
				keyword = str.toString().split('&')[0].split('=')[1];
			}
			if(keyword){
				//这样写默认，百度关键词不会是通过搜索 so,sogou,home进入网站
				setCookie('keyword',keyword);
				setCookie('eqid','baidu');
			}
		}
	} else if (referrer.indexOf('so.com') != -1) { // 360
		setCookie('eqid','so');
	} else if (referrer.indexOf('sogou.com') != -1) { // 搜狗
		setCookie('eqid','sogou');
	}
	// 其他搜索引擎视为直接访问
	else {
		setCookie('eqid','home');
	}
}

function parseUrl(url)  {
	var obj = {};
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    queryArr.forEach(function(item){
        var value = item.split("=")[1];
        var key = item.split("=")[0];
        obj[key] = value;
    });
    return obj;
}

// 记录访问log
function accessLog(eqid) {
	var eqid = eqid || '';
	if (eqid == '') { // 没有eqid就相当于没有来源不进行下面操作
		return false;
	}
	var tag = 2; // 默认为直接访问
	var isSend = false; // 是否需要发送请求
	var list = ["baidu","home","sogou","so"];
	// 存入到storage中,关闭浏览器失效
	var directSource = sessionStorage.getItem("direct-source");
	// 非百度来源，且打开浏览器后第一次打开网站
	if (list.indexOf(eqid)>0 && directSource == null) {
		isSend = true;
		sessionStorage.setItem('direct-source',eqid);
	} else if(list.indexOf(eqid) == -1 && eqid) { //eqid存在，并且不再列表中，说明是百度来源 百度来源统计多次
		isSend = true;
	}
	if (isSend) {
		var keyword = ''
		if (list.indexOf(eqid)>-1) { // eqid取值为list数组范围
			tag = (list.indexOf(eqid)) + 1; // 下标+1
		}else if(list.indexOf(eqid) == -1 && eqid){
			tag = 1;//百度来源
		}
		//百度来源，但不带eqid，有关键词的
		if(list.indexOf(eqid) == 0){
			tag = 1;//百度来源
			keyword = getCookie('keyword');
		}
		
		$.get("access.php", {eqid:eqid,tag:tag,keyword:keyword}, function(data){
			if (data.keyword) {
				setCookie('keyword',data.keyword);
			}
		},'json');
	}
}

$(function(){
	getEqid(); // 初始化百度关键词搜索
	$('.custom-down').on('click',function(){
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
	})
	$('.custom-down').click(function(){
	    var index = $(this).data('local');
	    switch(index){
	        case 0:
	            _hmt.push(['_trackEvent', 'downloads', 'click', 'East China', 1]);
	            break;
	        case 1:
	            _hmt.push(['_trackEvent', 'downloads', 'click', 'South China', 1]);
	            break;
	        case 2:
	            _hmt.push(['_trackEvent', 'downloads', 'click', 'Central China', 1]);
	            break;
	        default :
	            break;
	    }
	})
	accessLog(getCookie('eqid'));
});

$('.custom-down.banner').attr('href','https://down.dabaicai.com:99/DaBaiCai_ud_v6.0_2311.zip')

// 自动推送 
// 推送代码默认获取页面上所有的本站有效链接，然后去重后进行推送到百度、头条、360
// byte:bb8b81d0260f1b023f148b9e7f0462bf16137bd6bb0b43a7648de149c63beb6b41c9d97bc9c86ff841af3c0f7466bb17a06fd7b99da8c5821872ea98bf8a2f40|360:d182b3f28525f2db83acfaaf6e696dba
var site_jsts = "MzYwOmQxODJiM2YyODUyNWYyZGI4M2FjZmFhZjZlNjk2ZGJh"
(function() {
    // 字符串切割后形成数组
    var jsts = (window.atob(site_jsts) || '').split('|').reduce((acc, pair) => (([key, value] = pair.split(':')), (acc[key] = value, acc)), {});
    var list = document.getElementsByTagName("a");
    var url = [];
    var curProtocol = window.location.protocol.split(':')[0];
    for (var i = 0; i < list.length; ++i) {
        if (typeof list[i].href !== "undefined" && list[i].href.includes(window.location.hostname)) {
            var absoluteLink = new URL(list[i].href, window.location.href).href;
            // 百度推送
            if (curProtocol === 'https') {
                url.push('https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif?l=' + encodeURIComponent(absoluteLink));
            } else {
                url.push('http://api.share.baidu.com/s.gif?r=' + encodeURIComponent(window.location.href) + '&l=' + encodeURIComponent(absoluteLink));
            }
            // 头条推送
            if (jsts.hasOwnProperty("byte") && jsts["byte"]) {
                url.push('https://zhanzhang.toutiao.com/s.gif?url=' + encodeURIComponent(absoluteLink)) + '&token=' + jsts["byte"];
            }
            // 360推送
            if (jsts.hasOwnProperty("360") && jsts["360"]) {
                url.push(curProtocol + '://s.360.cn/so/zz.gif?url=' + encodeURIComponent(absoluteLink)) + '&sid=' + jsts["byte"] + '&token=' + Array.from(url, (_, i) => i.toString() + (i ? url[i] : '')).join('') + Array.from(jsts["byte"].substring(0, 16)).reverse().join('');
            }
        }
    }
    // 去除重复的URL链接后进行推送
    url = url.filter((value, index, self) => self.indexOf(value) === index);
    for (var i = 0; i < url.length; ++i) {
        var t = new Image();
        t.src = url[i];
    }
})(window);

// // 百度统计
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?45e668a2c18cd24bf0375d1733caa3df";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();

// // 谷歌统计
// // 教程：https://www.cifnews.com/article/137971
// document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163256488-3"></script>');
// window.dataLayer = window.dataLayer || [];
// function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());
// gtag('config', 'UA-163256488-3', { 'optimize_id': 'GTM-W52N2TS' });
// document.write('<script src="https://www.googleoptimize.com/optimize.js?id=OPT-M7M3GFD"></script>');
