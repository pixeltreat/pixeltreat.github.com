'use strict';
/*jshint -W024 */

var gulp   = require('gulp');
var zip    = require('gulp-zip');
var config = require('../config');

// base object from config.js
var base = config.base;

module.exports = function () {
    return gulp
     .src( base.dist + '/**/*' )
     .pipe( zip('build.zip') )
     .pipe( gulp.dest(base.dist + '/nightly') );
};
