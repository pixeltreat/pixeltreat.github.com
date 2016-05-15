"use strict";

var moduleName = 'calendar',
    controllerName = 'CalendarCtrl';

angular.module(moduleName, [
    require('./projects'),
    require('./practitioners')
])

.controller(controllerName, [
    "$scope",
    "$firebaseArray",
    "FireBaseURL",
    require('./calendar-controller')
]);

module.exports = moduleName;
