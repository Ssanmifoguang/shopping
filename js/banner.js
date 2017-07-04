$(function() {
	$(".content-banner").hover(function() {
			$(this).find(".prev,.next").fadeIn();
			/*fadeTo() 方法将被选元素的不透明度逐渐地改变为指定的值。*/
			/*find()函数用于选取每个匹配元素的符合指定表达式的后代元素，并以jQuery对象的形式返回。*/
		}, function() {
			$(this).find(".prev,.next").hide();
		})
		//	$(".prev,.next").hover(function() {
		//		$(this).fadeIn();
		//	});
		//	}, function() {
		//		$(this).fadeTo("slow", 0.1);
		//	});
	$(".content-banner").slide({
		mainCell: ".content-banner-ul",
		/*切换元素的包裹层对象*/
		effect: "fold",
		/*图片的效果*/
		autoPlay: true,
		delayTime: 300,
		/*自动运行*/
		autoPage: true /*自动分页*/
	});
});