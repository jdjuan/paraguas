$(function(){
	if($("body").size()>0){
		//IE Support
		if (document.createStyleSheet){
			document.createStyleSheet('style.css');
		}
		else {   
			 $("head").append($("<link rel='stylesheet' href='build/stylesheets/style.css' type='text/css' media='screen' />"));
		}
	}
});