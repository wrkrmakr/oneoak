$( document ).ready(function() {

	var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

	$('.img-background').css('background-image', 'url(' + backgrounds[randomIndex] + ')');

	$('.index_panel').hide();
	$('.index_panel').delay(1200).slideDown({
		'duration':800,
		'easing':'easeOutCubic'
	});

	$(siteContentBackgrounds).preload(function(){$('#loading').hide();});	
});