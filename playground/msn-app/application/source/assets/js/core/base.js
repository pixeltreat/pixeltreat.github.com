'use strict';

// load library Files
require('./external-libs.js')();

// load the main app file
var appModule = require('../app-scripts');

// replaces ng-app="appName"
angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});
