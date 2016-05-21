'use strict';

// moved the routes config to 'view' object to keep it more readable
var view = {
    dashboard: {
        url        : '/dashboard',
        template   : require('dashboard/dashboard.html'),
        controller : 'DashboardCtrl as vm',
        title      : 'Dashboard'
    },
    employee: {
        url        : '/employee',
        template   : require('employee/employee.html'),
        controller : 'EmployeeCtrl as vm',
        title      : 'Employee'
    },
    addEmployee: {
        url        : '/add-employee',
        template   : require('employee/add-employee/add-employee.html'),
        controller : 'AddEmployeeCtrl as vm',
        title      : 'Add New Employee'
    }
};

// set the views to router state form the above defined object
var Routes = function (stateProvider, urlRouterProvider) {
    stateProvider
    .state('dashboard', view.dashboard)
    .state('employee', view.employee)
    .state('employee.add', view.addEmployee);

    // redirect to root if undefined route used
    urlRouterProvider.otherwise('/dashboard');
};

module.exports = Routes;
