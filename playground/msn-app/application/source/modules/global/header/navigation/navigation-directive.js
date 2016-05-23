'use strict';

// dependencies
//var domUtils = require('core/dom-utils');

// directive export
exports = module.exports = createDirective;

/**
 * Factory method.
 */
function createDirective() {
    /**
     * Returned object.
     */
    var directive = {
        restrict        : 'A',
        replace         : true,
        template        : require('./navigation.html'),
        scope           : {},
        controllerAs    : 'vm',
        bindToController: true,
        controller      : ['$http', 'getDataFactory', controllerFn]
    };

    return directive;
}

/**
 * Create a link to the view.
 * @param  {object} getAlertsFactory
 */
function controllerFn($http, getDataFactory) {
    var vm = this;

    // pass the URL to factory and get the data as promise
    var navigation = getDataFactory('data/navigation.json', 'get', 'check');

    // get the alerts data and set it to `vm`.
    navigation.then(function(navLinksData){
        vm.navLinks = navLinksData;
    });

    /**
     * Toggle active class for both main/subnav li elements
     */
    //vm.toggleSubnav = toggleSubnavView;
}

/**
 * toogle subnav on click
 * @param  {Object} event
 */
// function toggleSubnavView(event) {
//     var ele         = event.currentTarget || event.srcElement;
//     var parent      = ele.parentNode;
//     var activeClass = getActiveClass(ele);
//     var hasClass    = domUtils.hasClass(ele, activeClass);
//
//     // prevent event propogation
//     event.stopPropagation();
//
//     // check if class exisit, if yes, just remove
//     if(hasClass) {
//         removeActiveClass(ele, activeClass);
//     } else {
//         // remove active class from siblings
//         domUtils.forEach(parent.children, function(item){
//             removeActiveClass(item, activeClass);
//         });
//
//         // set active class
//         domUtils.addClass(ele, activeClass);
//     }
// }
//
// /**
//  * removes active class from the element
//  * @param  {object} ele
//  * @param  {string} activeClass
//  */
// function removeActiveClass(ele, activeClass) {
//     domUtils.removeClass(ele, activeClass);
// }
//
// /**
//  * return which class to add/remove based on the nav depth
//  * @param  {object} ele
//  * @return {string} class name
//  */
// function getActiveClass(ele) {
//     var mainNav = domUtils.hasClass(ele, 'app-nav__main__li');
//     var subNav  = domUtils.hasClass(ele, 'app-nav__sub__li');
//
//     // check if it is main nav element or subnav
//     if(mainNav){
//         return 'is-mainnav-active';
//     } else if(subNav) {
//         return 'is-subnav-active';
//     }
// }
