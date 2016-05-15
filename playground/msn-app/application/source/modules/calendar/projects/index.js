"use strict";

var moduleName = 'projects';

angular.module(moduleName, [
    require('../common/directives/project-row')
])

.directive(moduleName, [
    require('./projects-directive')
]);

module.exports = moduleName;
