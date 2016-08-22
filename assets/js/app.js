$(document).scroll(function(event) {
	var scrollTop = $(document).scrollTop();

	if(scrollTop > $(".logos").height()){
		if(!$(".srt-icon").is(":visible")){
			var a = 1;
			 function showOne(){
			 	if(a > 5){
			 		clearInterval(showInterval);
			 	}else{
			 		$(".srt-icon:eq("+a+")").show("fast");
			 		a++
			 	}
			 	
			 }
			 var showInterval = setInterval(showOne, 100);
		}
	}

	if(scrollTop > $(".logos").height() + ($("#about").height()/4)){
		$("nav img").attr("src", "assets/img/logo-inverted.png");
		$("nav").css({backgroundColor: "white"});
		$("nav").addClass("navbar-fixed-top");
		$(".toTopScroll").fadeIn("slow");
		showLevel(0);
	}
	if(scrollTop < $(".logos").height() + ($("#about").height()/4)){
		$("nav img").attr("src", "assets/img/logo.png");
		$("nav").css({backgroundColor: "transparent"});
		$(".navbar-fixed-top").removeClass("navbar-fixed-top");
		$(".toTopScroll").fadeOut("slow");
	}
	if(scrollTop > $(".logos").height() + ($("#about").height()/2)){
		showLevel(1);
	}
	if(scrollTop > $(".logos").height() + ($("#about").height()/1.2)){
		showLevel(2);
	}
	if(scrollTop > $("#home").height() + ($("#about").height()/1.3)){
		if($(".rotateUpper").css("transform") == "matrix3d(1, 0, 0, 0, 0, 6.12323e-17, 1, 0, 0, -1, 6.12323e-17, 0, 0, 0, 0, 1)"){
			var deg = 90;
			function rotateUpper(){
				if(deg > 0){
					$(".rotateUpper").css({'transform' : 'rotate3d(1,0,0, '+deg+'deg)'});
					deg = deg - 5;
				}else{
					clearInterval(rotateinterval);
				}
			}

			var rotateinterval = setInterval(rotateUpper, 17);
		}
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height()/4){
		showLevel(3);
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height()/2){
		showLevel(4);
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height()/1.5){
		if($(".fromBottom").css("margin-top") == "350px"){
			$(".fromBottom").animate({
				marginTop: "-20px"
			}, function(){
				$(".fromBottom").animate({marginTop: "0px"})
			})
		}
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height() + ($("#prices").height()/2.5)){
		if($(".fromTop:eq(0)").css("top") == "-350px"){
			$(".fromTop:eq(0)").animate({top: "20px"}, function(){
				$(".fromTop:eq(0)").animate({top: "0px"});
			})
		}
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height() + $("#prices").height()){
		if($(".fromTop:eq(1)").css("top") == "-350px"){
			$(".fromTop:eq(1)").animate({top: "20px"}, function(){
				$(".fromTop:eq(1)").animate({top: "0px"});
			})
		}
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height() + $("#prices").height()){
		showLevel(5)
	}
	if(scrollTop > $("#home").height() + $("#about").height() + $("#features").height() + $("#prices").height() + $("#team").height()){
		showLevel(6)
	}
});
function showLevel(j){
		if($(".fromLeft:eq("+j+")").css("left") == "-1800px"){
					$(".fromLeft:eq("+j+")").animate({
			left : '35px'
		}, function(){
			$(".fromLeft:eq("+j+")").animate({left: '0px'});
		});
		$(".fromRight:eq("+j+")").animate({
			right : '35px'
		}, function(){
			$(".fromRight:eq("+j+")").animate({right: '0px'});
		});
		}
}
$(".navbar-nav li").click(function(){
	$(".active").removeClass("active");
	$(this).addClass("active");
	var to = $(this).children("a").attr('href');
	console.log(to)
	$('html,body').animate({
   		scrollTop: $(to).offset().top - 100
	});
})
$(".toTopScroll").click(function(){
	$('html,body').animate({
   		scrollTop: "0px"
	});
})