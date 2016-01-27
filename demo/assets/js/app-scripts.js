'use strict';

// application namespace to avoid global scope polution, re-use functionality and keep modularity for the code
var ciscoUI = ciscoUI || {};


/**
* since this is limited for demo my skills I'm adding everything 
* in this file, but assume this as a nav module independent of 
* others modules.
*/
(function ($, ns) {
    
    var moduleEle;
    
    var loginBtn;
    
    var initialize = function () {
        moduleEle = $('[data-uimodule="sitenav"]');
        loginBtn = moduleEle.find('.site-nav__ol__li__login-btn');
        
        // add events
        _addEvents();
    };
    
    var _addEvents = function () {
        loginBtn.on('click', toggleLoginModal);
    };
    
    var toggleLoginModal = function (e) {
        var clickedEle = $(e.target);
        
        $('html').toggleClass('has-login-modal-open');
        clickedEle.toggleClass('is-active');
    }
    
    var dispose = function () {
        moduleEle.parentNode.removeChild(moduleEle);
        delete ns.sitenav;
        moduleEle = null;
        loginBtn = null;
        
        loginBtn.off('click');

        console.log("module removed from page");
    };
    
    return ns.sitenav = {
        initialize: initialize,
        dispose: dispose
    };
    
})(jQuery, ciscoUI || {});

// initialize module, I prefer to do this in a deferent way, but for the demo code using this to keep it simple.
jQuery(document).ready(ciscoUI.sitenav.initialize);
