'use strict';

// dependencies

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
*/
function controllerFn() {
    //var vm = this;
}
