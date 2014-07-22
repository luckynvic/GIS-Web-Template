jQuery(window).resize(function() {
	var h = jQuery('#sidemenu').height(), offsetTop = 120;
	// Calculate the top offset
	jQuery('.point-list-view').css('height', (h - offsetTop));
}).resize();


jQuery(document).ready(function(){
	jQuery('.point-list-view').resize();


});

