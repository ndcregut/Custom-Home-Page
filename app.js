$(document).ready(function() {
	$('#wrapper').fadeIn(1000);

	// Slowly show sub-menu when hovering over main menu options
	$('ul#dropdown > li').on('mouseenter', function() {
		$(this).find('ul.sub-menu').slideDown().show();
		$(this).find('ul.sub-menu').css('display', 'inline-block');
	});

	// Slowly hide sub-menu when no longer hovering over the
	// main menu option or its sub-menu
	$('ul#dropdown > li').on('mouseleave', function() {
		$(this).find('ul.sub-menu').slideUp();
	});
});