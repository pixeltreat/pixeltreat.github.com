'use strict';

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
        restrict        : 'A',
        replace         : true,
        template        : require('./app-logo.html'),
        scope           : {},
        controllerAs    : 'vm',
        bindToController: true,
        controller      : controllerFn
    };

    return directive;
}

/**
* Create a link to the view.
*
* @param {Object} scope
*/
function controllerFn() {
}
