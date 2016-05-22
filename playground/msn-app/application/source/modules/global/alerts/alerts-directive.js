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
        template: require('./alerts.html'),
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
function controllerFn($element) {
    var vm = this;

    vm.toggleAlertsView = function(){
        $element.toggleClass('is-alerts-visible');
    };
}
