/* =============================================================================
   app-scripts.js
========================================================================== */
'use strict';

// app setup
module.exports = angular.module('msnsApp', [
    'ui.router',
    require('../../modules/global/header'),
    require('../../modules/global/footer')
])

// config
.config([
    '$stateProvider',
    '$urlRouterProvider',
    require('./core/routes')
])

// config to trigger disabling debug info
.config(['$compileProvider', removeDebugInfo])

.controller('AppCtrl', function(){ });

/**
 * This will remove the debug information from compiled DOM
 * @param  {Object} $compileProvider
 */
function removeDebugInfo($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}
