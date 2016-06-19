$(function(){

	var scrolling=false;

	// jQuery Function to make the actual scrolling
	function animateScroll(elementClass){
		$('html,body').animate({scrollTop: $("."+elementClass).offset().top},
			1000, function(){
				setTimeout(function(){
					scrolling=false;
				}, 50);
			});
	}

	// Scroll Buttons assigned function
	$(".scroller").click(function() {
		if (!scrolling) {
			scrolling = true;
			animateScroll($(this).attr("data-number"));
		}
	});

});