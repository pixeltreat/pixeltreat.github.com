"use strict";

var moduleName = 'practitioner';

/* istanbul ignore next */
angular.module(moduleName, [
    /*Dependencies*/
])

.directive('practitioner', [
    require('./practitionerDirective')
]);

module.exports = moduleName;
