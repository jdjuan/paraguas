$(function(){
	// Scroll Buttons assigned function
	$(".scrollButton").click(function(event) {
		animateScroll($(this).attr("role"));
	});

	// jQuery Function to make the actual scrolling
	function animateScroll(elementClass){
		$('html,body').animate({scrollTop: $("#"+elementClass).offset().top},
			1000, function(){
				setTimeout(function(){
					scrolling=false;
				}, 50);
			});
	}
});
