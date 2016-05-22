'use strict';

var moduleName = 'alerts';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive(moduleName, [
    require('./alerts-directive')
]);

module.exports = moduleName;
