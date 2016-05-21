'use strict';

// dependencies
var domUtils = require('core/dom-utils');

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
        template        : require('./header.html'),
        scope           : {},
        controllerAs    : 'vm',
        bindToController: true,
        controller      : controllerFn
    };

    return directive;
}

/**
* Create a link to the view.
*/
function controllerFn() {
    var vm = this;

    /**
     * show navigation in expanded view
     */
    vm.showNav = showNavView;
    vm.hideNav = hideNavView;
}

/**
 * show nav view and expand
 */
function showNavView() {
    domUtils.addClass(document.documentElement, 'has-nav-expanded');
}

/**
 * hide nav view and collapse
 */
function hideNavView() {
    domUtils.removeClass(document.documentElement, 'has-nav-expanded');
}
