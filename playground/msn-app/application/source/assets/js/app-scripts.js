/* =============================================================================
   app-scripts.js
========================================================================== */
'use strict';

// app setup
module.exports = angular.module('msnsApp', [
    'ui.router',
    'kendo.directives',
    require('global/alerts'),
    require('global/header'),
    require('global/footer'),
    require('dashboard'),
    require('employee')
])

// config
.config([
    '$stateProvider',
    '$urlRouterProvider',
    require('./core/routes')
])

// app controller
.controller('AppCtrl', function () {})

// config to trigger disabling debug info
.config(['$compileProvider', removeDebugInfo])

// set state and sate params to root scope
.run(setStateAndParams);


/**
 * This will remove the debug information from compiled DOM
 * @param  {Object} $compileProvider
 */
function removeDebugInfo($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}

/**
 * set state and sate params to root scope
 * @param {object} $rootScope
 * @param {object} $state
 * @param {object} $stateParams
 */
function setStateAndParams($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}
