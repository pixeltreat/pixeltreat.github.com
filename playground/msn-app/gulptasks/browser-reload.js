'use strict';
var browserSync = require('browser-sync');
var config      = require('../config');

// base build folder path from config.js
var buildFolder = config.base.dist;

module.exports = function() {
	browserSync({
	   notify: false,
	   server: {
		   baseDir: buildFolder
	   }
   });
};
