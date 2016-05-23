'use strict';

var moduleName = 'navigation';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive(moduleName, [
    'getDataFactory',
    require('./navigation-directive')
])

.factory('getDataFactory', [
    '$http',
    require('core/get-data-factory')
]);

module.exports = moduleName;
