/* =============================================================================
   components/global/navigation
   ========================================================================== */

'use strict';

var ns         = baseUI;
var $          = baseJQ;
ns.navigation  = ns.navigation || {};
var navigation = ns.navigation;
var element;

var elementStyleReference = "page-navigation";
var $mobileMenuBtn;

navigation.attach = function (instance) {
    //console.log('navigation is attached');
    element = instance;
    initialize();
};

navigation.detach = function () {
    dispose();
};

function initialize() {
    $mobileMenuBtn = $(element).find('.'+ elementStyleReference +'__mobile-menu');

    // add events
    addEvents();
}

function addEvents() {
    $mobileMenuBtn.on('click', mobileMenuToggle);
}

function mobileMenuToggle (e) {
    var rootElement = document.documentElement;

    $(rootElement).toggleClass('has-menu-visible');
}

function dispose() {
    element.parentNode.removeChild(element);
    delete ns.navigation;
    element = null;

    // remove event listeners below, example commented
    $mobileMenuBtn.off('click', mobileMenuToggle);
    //console.log("navigation detached");
}
