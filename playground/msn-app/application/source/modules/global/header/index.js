'use strict';

var moduleName = 'header';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive('header', [
    'getNavigationLinksFactory',
    require('./header-directive')
])

.factory('getNavigationLinksFactory', [
    '$http',
    require('./get-navigation-links-factory')
]);

module.exports = moduleName;
