"use strict";

var moduleName = 'practitioners';

angular.module(moduleName, [
    require('../common/directives/project-row')
])

.directive(moduleName, [
    require('./practitioners-directive')
]);

module.exports = moduleName;
