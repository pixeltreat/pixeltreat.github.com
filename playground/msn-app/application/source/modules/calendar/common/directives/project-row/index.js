"use strict";

var moduleName = 'projectRow';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
    require('../week-cell')
])

.directive(moduleName, [
    require('./project-row-directive')
]);

module.exports = moduleName;
