'use strict';
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

// array of file paths from config.js
var copy = config.filePath.copyfiles;

module.exports = function(watch) {
	return gulp.src(copy, {'base': config.base.src})
	  .pipe(gulp.dest(config.base.dist))
	  .pipe(plugins.if(watch, reload({
		  stream: true
	  })))
	  .pipe(plugins.size({
		  title: 'Copied index.html, fonts and img'
	  }));
};
