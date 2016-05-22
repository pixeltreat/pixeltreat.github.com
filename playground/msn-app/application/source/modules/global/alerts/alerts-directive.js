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
 * @param  {object} $element
 * @param  {object} getAlertsFactory
 */
function controllerFn($element, getAlertsFactory) {
    var vm = this;

    // get the navigation data and set it to `vm`.
    getAlertsFactory.then(function(alertsData){
        vm.alerts = alertsData;
    });

    // show/hide alerts
    vm.toggleAlertsView = function(){
        $element.toggleClass('is-alerts-visible');
    };
}
