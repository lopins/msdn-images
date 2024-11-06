$(".udisk-aside a").click(function() {
			$(".udisk-aside a").removeClass("udisk-aside1")
			$(this).addClass("udisk-aside1");
		});

		// 滚动条滑动到该位置变成固定定位
		$(window).scroll(function() {
			//这儿这个200是你的导航栏以上 的元素高度
			if ($(window).scrollTop() > 383) {
				$(".udisk-aside").css("position", "fixed");
				$(".udisk-aside").css("top", "0");
			} else {
				$(".udisk-aside").css("position", "static")
			}
		});

		// 点击滚动跳缓慢走到标记位置
		$('.udisk-aside-a1').click(function() {
			$('html,body').animate({
				scrollTop: $('.udisk-top-div1').offset().top
			}, 800);
		});
		$('.udisk-aside-a2').click(function() {
			$('html,body').animate({
				scrollTop: $('.udisk-top-div2').offset().top
			}, 800);
		});
		$('.udisk-aside-a3').click(function() {
			$('html,body').animate({
				scrollTop: $('.udisk-top-div3').offset().top
			}, 800);
		});
		
		udisk();
		function udisk() {
			var ses = sessionStorage.udisk;
			if (ses == "1") {
				$('html,body').animate({
					scrollTop: $('.udisk-top-div1').offset().top
				}, 0);
			} else if (ses == "2") {
				$('html,body').animate({
					scrollTop: $('.udisk-top-div2').offset().top
				}, 0);
			} else if (ses == "3") {
				$('html,body').animate({
					scrollTop: $('.udisk-top-div3').offset().top
				}, 0);
			}
		}

		// 当混动条到该位置，执行动画
		$(document).ready(function() {
			var a, b, c;
			a = $(window).height();
			$(window).scroll(function() {
				var b = $(this).scrollTop();
				$(".udisk-top-div1").each(function() {
					c = $(this).offset().top;
					if (a + b > c) {
						$(".udisk-aside a").removeClass("udisk-aside1");
						$(".udisk-aside-a1").addClass("udisk-aside1");
					} else {}
				});
				$(".udisk-top-div2").each(function() {
					c = $(this).offset().top;
					if (a + b > c) {
						$(".udisk-aside a").removeClass("udisk-aside1");
						$(".udisk-aside-a2").addClass("udisk-aside1");
					} else {}
				});
				$(".udisk-top-div3").each(function() {
					c = $(this).offset().top;
					if (a + b > c) {
						$(".udisk-aside a").removeClass("udisk-aside1");
						$(".udisk-aside-a3").addClass("udisk-aside1");
					} else {}
				});
			});
		});