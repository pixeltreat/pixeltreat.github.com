'use strict';

var moduleName = 'employee';

angular.module(moduleName, [
    require('./add-employee')
])

.controller('EmployeeCtrl', [
    '$http',
    require('./employee-controller')
]);

module.exports = moduleName;
