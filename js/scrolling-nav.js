//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});*/

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
		var calH = $('header .bottomHeader').outerHeight();
		if(!$('header .bottomHeader').hasClass('sticky'))
			calH = $('header .bottomHeader').outerHeight() + 70;
		var elemtop = $($anchor.attr('href')).offset().top;
		console.log(calH);
        $('html, body').stop().animate({
            scrollTop: (elemtop - calH)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
	
$(document).ready(function(){
	var hash = window.location.hash.substr(1);
	var calH = $('header .bottomHeader').outerHeight();
	if(!$('header .bottomHeader').hasClass('sticky'))
		calH = $('header .bottomHeader').outerHeight() + 70;
	var elemtop = $('#'+hash).offset().top;
	console.log(calH);
	$('html, body').stop().animate({
		scrollTop: (elemtop - calH)
	}, 1500, 'easeInOutExpo');
});
	
	
	
	
	
	
});
