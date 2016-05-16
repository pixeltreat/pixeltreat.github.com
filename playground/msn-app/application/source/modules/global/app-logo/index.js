'use strict';

var moduleName = 'appLogo';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive('appLogo', [
    require('./app-logo-directive')
]);

module.exports = moduleName;
