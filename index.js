$(document).ready(function(){
	$("p").hover(function(){
	$("p").animate({fontSize: "20px"}, 3000);
},
	function(){
		$("p").stop().animate({fontSize:"12px"});
	});
});