'use strict';
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var config        = require('../config');

// JS files path from config.js
var scriptFiles = config.filePath.scripts;

function jshint() {
	return gulp.src(scriptFiles)
	.pipe(reload({
		stream: true,
		once: true
	}))
	.pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter('jshint-stylish'))
	.pipe(plugins.if(!browserSync.active, plugins.jshint.reporter('fail')));
}

module.exports = jshint;
