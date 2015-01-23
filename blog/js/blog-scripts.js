$(document).ready(function(){
	//IE6 specific elements
	if ($.browser.msie && $.browser.version.substr(0,1)<7) { DD_belatedPNG.fix('#outer-wrapper'); }	
	else{
		//animation for navigation
		$('div.main-nav span').css("opacity","0");
			$('div.main-nav span').hover(function () {				
				$(this).stop().animate({
					opacity: 1
				}, "slow");
				},function () {
				$(this).stop().animate({
					opacity: 0
				}, "slow");
			});
			$('div.main-nav span').mousedown(function () {
				$(this).stop().animate({
					opacity: 0
				}, "slow");
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
