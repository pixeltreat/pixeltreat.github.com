'use strict';

var moduleName = 'employee';

angular.module(moduleName, [
    'kendo.directives',
    require('./add-employee')
])

.controller('EmployeeCtrl', [
    require('./employee-controller')
]);

module.exports = moduleName;
