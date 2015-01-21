(function (jQuery, window, undefined) {
    //"use strict";
    var matched, browser;

    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(yabrowser)[ \/]([\w.]+)/.exec(ua) ||
			/(opr)[ \/]([\w.]+)/.exec(ua) ||
            /(chrome)[ \/]([\w.]+)/.exec(ua) ||			
            /(webkit)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||            
            /(msie) ([\w.]+)/.exec(ua) ||
			/(trident)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(ua) || [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
		
    };

    // Don't clobber any existing jQuery.browser in case it's different
    if (!jQuery.browse) {
        matched = jQuery.uaMatch(window.navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.yabrowser) {
            browser.webkit = true;
        }else if (browser.opr) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        jQuery.browse = browser;
    }

})(jQuery, window);

/*----------------------------------- browser check and applying class name to body element -----------------------------------------*/
// global variables to utilize every where
var uA, bN, bV, bvClass, OS, dE;
var bvClass = bM = dT = wk = "";
(function (jQuery, window, undefined) {
	dE = document.documentElement;
    uA = window.navigator.userAgent.toLowerCase();
    var matchSt = /(trident)[ \/]([\w.]+)/.exec(uA) || [],
        trident = matchSt[1] || "",
        tV = matchSt[2] || "0",
		dM = document.documentMode;

    //for all IE
    if ($.browse.msie || $.browse.trident) {
        bN = "ie";
        bV = $.browse.version;
    }

    //for all IE compatible view	
    if (trident == "trident") {
		var cvReg;
        if (bV === "7.0" && tV === "4.0") {
            bM = " ie8_cv";
			cvReg = /(^|\s)ie7(\s|$)/;
        }
        if (bV === "7.0" && tV === "5.0" || bV === "8.0" && tV === "5.0") {
            bM = " ie9_cv";
			cvReg = (/(^|\s)ie7(\s|$)/)? /(^|\s)ie7(\s|$)/ : /(^|\s)ie8(\s|$)/;
        }
		cvReg = (/(^|\s)ie7(\s|$)/)? /(^|\s)ie7(\s|$)/ : /(^|\s)ie8(\s|$)/;
		dE.className = dE.className.replace(cvReg, '$1$2');
		
		if (parseFloat(bV) !== parseFloat(dM)){			
			bV = dM;
		}		
    }
	
    //for opera
    if ($.browse.opr) {
        bN = "opera";
        bV = $.browse.version;
    }
    //for mozilla
    if ($.browse.firefox) {
        bN = "ff";
        bV = $.browse.version;
    }
    //for chrome
    if ($.browse.chrome) {
        bN = "chrome";
        bV = $.browse.version;
    }
    //for yandex
    if ($.browse.yabrowser) {
        bN = "yandex";
        bV = $.browse.version;
    }
    //for safari
    if ($.browse.safari) {
        bN = "safari";
        bV = $.browse.version;
    }

    //for safari
    if ($.browse.webkit) {
        wk = " webkit";
    }

    /* mobile devices detection */
    if (uA.indexOf("mobile") !== -1) {
        dT = " mobile";
    }
    if (uA.indexOf("iphone") !== -1) {
        bN = "m_safari";
        OS = " iphone";
    }
    if (uA.indexOf("ipad") !== -1) {
        bN = "m_safari";
        OS = " ipad";
    }
    if (uA.indexOf("android") !== -1) {
        OS = " android";
    }
    if (uA.indexOf("blackberry") !== -1) {
        OS = " blackBerry";
    }
    if (uA.indexOf("windows") !== -1) {
        OS = " win";
    }
    if (uA.indexOf("macintosh") !== -1) {
        OS = " mac";
    }

    // convert the version from "." to "_"
    bvClass = parseFloat(bV).toString().replace(/[.\s]+/g, "_");

    // set the browser details as a class name to the root element that is hrml
    dE.className += OS + " " + bN + " " + bN + bvClass + bM + dT + wk;

})(jQuery, window);
/*----------------------------------- end of browser check and applying class name to body element -----------------------------------------*/