'use strict';

var moduleName = 'alerts';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive(moduleName, [
    'getDataFactory',
    require('./alerts-directive')
])

.factory('getDataFactory', [
    '$http',
    require('core/get-data-factory')
]);

module.exports = moduleName;
