$( document ).ready(function() {

	$('.index_panel').hide();
	$('.index_panel').slideDown({
		'duration':800,
		'easing':'easeOutCubic'
	});

	$(backgrounds).preload();

	$('#loading').hide();

	var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

	$('.img-background').css('background-image', 'url(' + backgrounds[randomIndex] + ')');

});