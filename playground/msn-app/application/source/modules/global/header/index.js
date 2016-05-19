'use strict';

var moduleName = 'header';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
    require('./app-logo'),
    require('./navigation')
])

.directive(moduleName, [
    require('./header-directive')
]);

module.exports = moduleName;
