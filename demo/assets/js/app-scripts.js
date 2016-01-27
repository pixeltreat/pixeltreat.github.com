// application namespace to avoid global scope polution, re-use functionality and keep modularity for the code
var ciscoUI = ciscoUI || {};

/**
 * since this is limited for demo my skills I'm adding everything
 * in this file, but assume this as a nav module independent of
 * others modules.
 */
(function ($, ns) {
    'use strict';

    // module level variables
    var rootEle = document.documentElement;
    var moduleEle;
    var loginBtn;

    /**
     * module initialization
     */
    var initialize = function () {
        moduleEle = $('[data-uimodule="sitenav"]');
        loginBtn = moduleEle.find('.site-nav__ol__li__login-btn');

        /*
        * this will remove the no-js class from HTML element to have fallbacks in CSS.
        * generally this will be handled from global module not here
        */
        $(rootEle).removeClass('no-js').addClass('js');

        // add events
        _addEvents();
    };

    /**
     * all modalue related events handled here
     */
    var _addEvents = function () {
        loginBtn.on('click', _toggleLoginModal);
    };

    /**
     * Show/hide login modal on click of login button
     * @param  {event object} e
     */
    var _toggleLoginModal = function (e) {
        var clickedEle = $(e.target);

        $(rootEle).toggleClass('has-login-modal-open');
        clickedEle.toggleClass('is-active');
    };

    /**
     * This will clear all module specific variables and events from page
     */
    var dispose = function () {
        moduleEle.parentNode.removeChild(moduleEle);
        delete ns.sitenav;
        moduleEle = null;
        loginBtn = null;

        // remove events
        loginBtn.off('click');
    };

    /**
     * using revealing module pattern so public methods exposed here
     * @type {Object}
     */
    ns.sitenav = {
        initialize: initialize,
        dispose: dispose
    };

    return ns.sitenav;

})(jQuery, ciscoUI || {});

// initialize module, I prefer to do this in a deferent way, but for the demo code, adding here to keep it simple.
jQuery(document).ready(ciscoUI.sitenav.initialize);
