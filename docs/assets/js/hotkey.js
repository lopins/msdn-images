var hotkey = {
	type: '',
	brand: '',

	keys: {
		pc: {
			name: '品牌电脑',
			data: [{
					brand: "联想台式电脑",
					key: "F12"
				},
				{
					brand: "惠普台式电脑",
					key: "F12"
				},
				{
					brand: "宏基台式电脑",
					key: "F12"
				},
				{
					brand: "戴尔台式电脑",
					key: "ESC"
				},
				{
					brand: "神舟台式电脑",
					key: "F12"
				},
				{
					brand: "华硕台式电脑",
					key: "F8"
				},
				{
					brand: "方正台式电脑",
					key: "F12"
				},
				{
					brand: "清华同方台式电脑",
					key: "F12"
				},
				{
					brand: "海尔台式电脑",
					key: "F12"
				},
				{
					brand: "明基台式电脑",
					key: "F8"
				}
			]
		},
		laptop: {
			name: '品牌笔记本',
			data: [{
					brand: "联想笔记本",
					key: "F12"
				},
				{
					brand: "宏基笔记本",
					key: "F12"
				},
				{
					brand: "外星人笔记本",
					key: "F12"
				},
				{
					brand: "小米笔记本",
					key: "F12"
				},
				{
					brand: "华硕笔记本",
					key: "ESC"
				},
				{
					brand: "惠普笔记本",
					key: "F9"
				},
				{
					brand: "联想Thinkpad",
					key: "F12"
				},
				{
					brand: "戴尔笔记本",
					key: "F12"
				},
				{
					brand: "神舟笔记本",
					key: "F12"
				},
				{
					brand: "东芝笔记本",
					key: "F12"
				},
				{
					brand: "三星笔记本",
					key: "F12"
				},
				{
					brand: "IBM笔记本",
					key: "F12"
				},
				{
					brand: "富士通笔记本",
					key: "F12"
				},
				{
					brand: "海尔笔记本",
					key: "F12"
				},
				{
					brand: "方正笔记本",
					key: "F12"
				},
				{
					brand: "清华同方笔记本",
					key: "F12"
				},
				{
					brand: "微星笔记本",
					key: "F11"
				},
				{
					brand: "明基笔记本",
					key: "F9"
				},
				{
					brand: "技嘉笔记本",
					key: "F12"
				},
				{
					brand: "Gateway笔记本",
					key: "F12"
				},
				{
					brand: "eMachines笔记本",
					key: "F12"
				},
				{
					brand: "索尼笔记本",
					key: "ESC"
				},
				{
					brand: "苹果笔记本",
					key: "option键"
				}
			]
		},
		board: {
			name: '主板',
			data: [{
					brand: "华硕主板",
					key: "F8"
				},
				{
					brand: "技嘉主板",
					key: "F12"
				},
				{
					brand: "微星主板",
					key: "F11"
				},
				{
					brand: "映泰主板",
					key: "F9"
				},
				{
					brand: "梅捷主板",
					key: "ESC或F12"
				},
				{
					brand: "七彩虹主板",
					key: "ESC或F11"
				},
				{
					brand: "华擎主板",
					key: "F11"
				},
				{
					brand: "斯巴达卡主板",
					key: "ESC"
				},
				{
					brand: "昂达主板",
					key: "F11"
				},
				{
					brand: "双敏主板",
					key: "ESC"
				},
				{
					brand: "翔升主板",
					key: "F10"
				},
				{
					brand: "精英主板",
					key: "ESC或F11"
				},
				{
					brand: "冠盟主板",
					key: "F11或F12"
				},
				{
					brand: "富士康主板",
					key: "ESC或F12"
				},
				{
					brand: "顶星主板",
					key: "F11或F12"
				},
				{
					brand: "铭瑄主板",
					key: "ESC"
				},
				{
					brand: "盈通主板",
					key: "F8"
				},
				{
					brand: "捷波主板",
					key: "ESC"
				},
				{
					brand: "Intel主板",
					key: "F12"
				},
				{
					brand: "杰微主板",
					key: "ESC或F8"
				},
				{
					brand: "致铭主板",
					key: "F12"
				},
				{
					brand: "磐英主板",
					key: "ESC"
				},
				{
					brand: "磐正主板",
					key: "ESC"
				},
				{
					brand: "冠铭主板",
					key: "F9"
				}
			]
		}
	},

	//选择框
	select: function() {
		var _this = this;

		//选择项下拉-收起
		$('.select').on('click', '.select-value', function(e) {
			var $this = $(this);
			var $list = $this.nextAll('.select-list');
			var $icon = $this.nextAll('.icon');
			e.stopPropagation();
			if ($this.parents('.select').attr('data-name') === 'brand' && _this.type === '') return
			$list.is(":visible") ?
				$list.stop().slideUp('fast') && $icon.removeClass('up').addClass('down') :
				$list.stop().slideDown('fast') && $icon.removeClass('down').addClass('up');

		});

		//选择项点击
		$('.select').on('click', 'li:not(.disabled)', function() {
			var $this = $(this);
			var $list = $this.parents('.select-list');
			var $icon = $this.parents('.select').find('.icon');
			var name = $this.parents('.select').attr('data-name');
			var value = $this.attr('data-value');

			_this[name] = value;

			$this.parents('.select').find('.select-value>span').text($this.text());
			$list.stop().slideUp('fast');
			$icon.removeClass('up').addClass('down');

			switch (name) {
				//电脑类型
				case 'type':
					_this.loadBrand(value);
					$('[data-name="brand"] .select-value>span').text('请选择品牌');
					break;

					//电脑品牌
				case 'brand':
					var str = value;
					var str1 = str.split("或").length - 1;
					var str2 = str.split("键").length - 1;
					// $(".index-shortcuts-div1>img").show();
					if (str1==1) {
						$('.shortcuts-div1-span').html('<span class="shortcuts-div1-span1"><font>' + value + '</font></span>');
						$(".shortcuts-div1-span").css({"background":"none"});
					} else if(str2==1){
						$('.shortcuts-div1-span').html('<span class="shortcuts-div1-span2"><font>' + value + '</font></span>');
							$(".shortcuts-div1-span").css({"background":"none"});
					}else{
						$('.shortcuts-div1-span').html('<span class="shortcuts-div1-span3"><font>' + value + '</font></span>');
							$(".shortcuts-div1-span").css({"background":"none"});
					}
					break;
			}
		});
	},

	//根据电脑类型[笔记本、品牌台式、组装台式（主板）]加载品牌
	loadBrand: function(type) {
		var html = '<li class="disabled"><span>选择电脑品牌</span></li>';
		var data = this.keys[type].data;

		for (var i = 0, len = data.length; i < len; i++) {
			html += '<li data-value="' + data[i].key + '"><span>' + data[i].brand + '</span></li>';
		}
		var div1="<div class='hotkey-div1'></div>";
		var div2="<div class='hotkey-div2'></div>";
		$('[data-name="brand"] .select-list ul').html(div1+html+div2);
		// 判断ie浏览器
		var u = window.navigator.userAgent.toLocaleLowerCase(),
			ie11 = /(trident)\/([\d.]+)/,
			b = u.match(ie11);
		if (b) {

			
			
			
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
	},

	init: function() {
		this.select();

		$('.hotkey-list-side li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
		});

		$(document).click(function() {
			$('.select-list').stop().slideUp();
			$('.select .icon').removeClass('up').addClass('down');
		});
	}
}

hotkey.init();
