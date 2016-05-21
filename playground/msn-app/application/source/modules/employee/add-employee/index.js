'use strict';

var moduleName = 'addEmployee';

angular.module(moduleName, [/*Dependencies*/])

.controller('AddEmployeeCtrl', [
    require('./add-employee-controller')
]);

module.exports = moduleName;
