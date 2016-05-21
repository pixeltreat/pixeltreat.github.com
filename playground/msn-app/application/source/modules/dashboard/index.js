'use strict';

var moduleName = 'dashboard';

angular.module(moduleName, [])

.controller('DashboardCtrl', [
    require('./dashboard-controller')
]);

module.exports = moduleName;
