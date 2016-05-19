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
     * Toggle navigation to show/hide on the page
     */
    vm.toggleNav = toggleNavView;
}

/**
 * toogle nav view on mouseover/mouseout
 * @param  {Object} event
 */
function toggleNavView(event) {
    var rootEle = document.documentElement;
    var eType   = event.type;

    // check for event type to add/remove class on root element
    if(eType === 'mouseover') {
        domUtils.addClass(rootEle, 'has-nav-expanded');
    } else {
        domUtils.removeClass(rootEle, 'has-nav-expanded');
    }
}
