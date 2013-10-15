$( document ).ready(function() {

	$('.index_panel').hide();
	$('.index_panel').slideDown({
		'duration':800,
		'easing':'easeOutCubic'
	});

	var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

	$('.img-background').css('background-image', 'url(' + imlocation + backgrounds[randomIndex] + ')');
});