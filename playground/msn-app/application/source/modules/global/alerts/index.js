'use strict';

var moduleName = 'alerts';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive(moduleName, [
    'getAlertsFactory',
    require('./alerts-directive')
])

.factory('getAlertsFactory', [
    '$http',
    require('./get-alerts-factory')
]);

module.exports = moduleName;
