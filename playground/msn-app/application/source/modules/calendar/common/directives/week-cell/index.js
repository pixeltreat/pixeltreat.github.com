"use strict";

var moduleName = 'weekCell';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
    require('../practitioner')
])

.directive(moduleName, [
    require('./week-cell-directive')
]);

module.exports = moduleName;
