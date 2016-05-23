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
        restrict        : 'A',
        replace         : true,
        template        : require('./alerts.html'),
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
    var alerts = getDataFactory('data/alerts.json');

    // get the alerts data and set it to `vm`.
    alerts.then(function (alertsData) {
        vm.alerts = alertsData;
    });

    // show/hide alerts
    vm.toggleAlertsView = function () {
        vm.toggleAlert = !vm.toggleAlert;
    };
}
