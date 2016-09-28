jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('tap', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
		$("#video1").get(0).play();
	});
	
	//close popup
	$('.cd-popup').on('tap', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$("#video1").get(0).pause();  //退出时暂停
		}
	});
	$("#video1").on('tap', function(){
		if($("#video1").get(0).paused){
			
			$("#video1").get(0).play();
		}else{
			
			$("#video1").get(0).pause();
		}
	})
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
    		$("#video1").get(0).pause();  //安esc时暂停
	    }
    });
});