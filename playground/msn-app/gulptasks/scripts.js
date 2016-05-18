'use strict';
/*jshint -W024 */

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var webpack       = require('webpack-stream');
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var config        = require('../config');
var webpackConfig = require('../webpack.config');

// base object from config.js
var base = config.base;

// webpack configurations
var entryFile = config.filePath.scriptsEntry;

module.exports = function (watch) { //publish
    return gulp
        .src( entryFile)
        .pipe( webpack(webpackConfig) )
        .pipe( gulp.dest(base.distAssets + '/js') )
        .pipe( plugins.if( watch, reload({stream: true}) ) )
        .pipe( plugins.size( {title: 'webpack bundle'} ) );
};
