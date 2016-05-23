'use strict';
/*jshint -W024 */

var gulp             = require('gulp');
var plugins          = require('gulp-load-plugins')();
var browserSync      = require('browser-sync');
var reload           = browserSync.reload;
var config           = require('../config');

var webpack          = require('webpack');
var webpackStream    = require('webpack-stream');
var webpackConfig    = require('../webpack.config');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// base object from config.js
var base = config.base;

// webpack configurations
var entryFile = config.filePath.scriptsEntry;

// update webpack config for publish build
function configUpdateForPublishBuild() {
    webpackConfig.plugins = webpackConfig.plugins.concat(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),

        // annotate to avoid angular dependency injection issues.
        new ngAnnotatePlugin({add: true}),

        // minify js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

    return webpackConfig;
}

module.exports = function (watch, publish) {
    // set production environment for minified builds
    if(publish){
        configUpdateForPublishBuild();
    }

    return gulp
        .src( entryFile)
        .pipe(plugins.plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe( webpackStream(webpackConfig) )
        .pipe( gulp.dest(base.distAssets + '/js') )
        .pipe( plugins.if( watch, reload({stream: true}) ) )
        .pipe( plugins.size( {title: 'webpack bundle'} ) );
};
