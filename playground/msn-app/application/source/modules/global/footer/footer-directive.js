"use strict";

exports = module.exports = createDirective;

/**
 * Factory method.
 */
function createDirective() {
    /**
     * Returned object.
     * @var {Object}
     */
    var directive = {
        restrict: 'A',
        replace: true,
        template: require('./footer.html'),
        scope: {},
        controllerAs: 'vm',
        bindToController: true,
        controller: controllerFn
    };

    return directive;
}


/**
* Create a link to the view.
*
* @param {Object} scope
*/
function controllerFn() {
    /**
     * ...
     * @var {String}
     */
    var vm = this;
}
