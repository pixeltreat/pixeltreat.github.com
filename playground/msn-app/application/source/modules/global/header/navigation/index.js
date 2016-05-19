'use strict';

var moduleName = 'navigation';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive(moduleName, [
    'getNavigationLinksFactory',
    require('./navigation-directive')
])

.factory('getNavigationLinksFactory', [
    '$http',
    require('./get-navigation-links-factory')
]);

module.exports = moduleName;
