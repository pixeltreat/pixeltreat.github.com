$(document).ready(function(){
	//IE6 specific elements
	if ($.browser.msie && $.browser.version.substr(0,1)<7) { DD_belatedPNG.fix('.imgholder-bg, .slider .arrow, .col a, #top_up .te_dashboard .ui-resizable-se, .te_dashboard .te_close_link'); }	
	else{
		//animation for navigation
		$('nav.main-nav span').css("opacity","0");
			$('nav.main-nav span').hover(function () {				
				$(this).stop().animate({
					opacity: 1
				}, "slow");
				},function () {
				$(this).stop().animate({
					opacity: 0
				}, "slow");
			});
			$('nav.main-nav span').mousedown(function () {
				$(this).stop().animate({
					opacity: 0
				}, "slow");
		});
	}
	// for banners slider home page
	if($('#banners').length != 0){		
		$('#banners').anythingSlider({
			easing: "easeInOutExpo",
			autoPlay: true,
			delay: 3000,
			startStopped: false,
			animationTime: 600,
			hashTags: true,
			pauseOnHover: true,
			buildNavigation: true
		});
	}
	// scroll top script intialization
	$('body').prepend('<span id="bm-top"></span>');
    $('body').append('<a href="#bm-top" id="scroll-top">Back To Top</a>');
    $('#scroll-top').bm_topLink({
        min: 200,
        fadeSpeed: 500
    });
    $('#scroll-top').click(function (e) {
        e.preventDefault();
    });
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });
	
});

// scroll top plugin script
$.fn.bm_topLink = function (settings) {
    settings = $.extend({
        min: 1,
        fadeSpeed: 200
    }, settings);
    return this.each(function () {
        var el = $(this);
        el.hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() >= settings.min) {
                el.fadeIn(settings.fadeSpeed);
            } else {
                el.fadeOut(settings.fadeSpeed);
            }
        });
    });
};
