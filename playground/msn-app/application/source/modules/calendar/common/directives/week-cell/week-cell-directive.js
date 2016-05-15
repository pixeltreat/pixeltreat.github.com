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
        restrict: 'EA',
        replace: true,
        template: require('./week-cell.html'),
        scope: {
            weekDetails: '=',
            mode: '@'
        },
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
