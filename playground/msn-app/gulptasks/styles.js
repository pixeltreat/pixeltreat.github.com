'use strict';
/*jshint -W024 */
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var cleanCSS    = require('gulp-clean-css');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

// base object from config.js
var base        = config.base;

// filePath object from config.js
var filePath    = config.filePath;

// browsers list for css3 vernder prefixing
var afx_browsers = [
    'last 2 chrome versions',
    'last 2 Firefox versions',
    'safari >= 7',
    'ios >= 7',
    'android >= 4.2',
    'ie_mob >= 10',
    'ie <= 9'
];

module.exports = function (watch) { //publish
    return gulp
        .src( filePath.stylesEntry )
        .pipe( plugins.sourcemaps.init({ loadMaps: true }) )
        .pipe( plugins.sass({ errLogToConsole: true }) )
        .pipe( plugins.autoprefixer(afx_browsers) )
        .pipe( cleanCSS() )
        .pipe( plugins.sourcemaps.write('.') )
        .pipe( gulp.dest(base.distAssets + '/css') )
        .pipe( plugins.if( watch, reload({ stream: true }) ) )
        .pipe( plugins.size({ title: 'Styles' }) );
};
