/*
 *  Project builds
 *  Author: Durga Prasad Sadhanala
 */

 'use strict';
 /*jshint -W024 */

 // Include gulp and webpack
 var gulp          = require('gulp');

 // Include Plugins
 /* all the plugins starts with 'gulp' will loaded using load-plugins */
 var plugins        = require('gulp-load-plugins')();
 var del            = require('del');
 var psi            = require('psi');
 var runSequence    = require('run-sequence');
 var config         = require('./config');
 var watch          = false;
 var publish        = false;
 var base           = config.base; // refer config.js for directories
 var filePath       = config.filePath; // refer config.js file for paths to source files

 // gulp build taks import
 var stylesCompile  = require('./gulptasks/styles');
 var scriptsCompile = require('./gulptasks/scripts');
 var copyFiles      = require('./gulptasks/copyfiles');

 // Clean Output Directory
 gulp.task('clean', del.bind(null, ['.tmp', base.dist]));

 // Lint JavaScript
 gulp.task('jshint', require('./gulptasks/jshint'));

 // compile styles
 gulp.task('styles', function() {
   return stylesCompile(watch, publish);
 });

 // compile scripts
 gulp.task('scripts', function(){
     return scriptsCompile(watch, publish);
 });

 // compile scripts
 gulp.task('copyFiles', function(){
     return copyFiles(watch);
 });

// browser-sync task for starting the server.
gulp.task('browser-sync', require('./gulptasks/browser-reload'));

// Run PageSpeed Insights for publish build
gulp.task('psInsights', function() {
    return psi.output('pixeltreat.com', { strategy: 'desktop' });
});

// zip build folder for download
gulp.task('zip', function() {
    return gulp
       .src(base.dist + '/**/*')
       .pipe(plugins.zip('build.zip'))
       .pipe(gulp.dest(base.dist + '/nightly'));
});

// watch task
gulp.task('watch', function() {
    watch = true;
    gulp.watch(filePath.styles, ['styles']);
    gulp.watch([filePath.scripts, filePath.html], ['scripts']);
    gulp.watch(filePath.copyfiles, ['copyFiles']);
});

// Default task runs dev build, watches for file changes and browser reloads
gulp.task('default', ['build'], function(cb) {
    runSequence(['browser-sync', 'watch'], cb);
});

// Build for dev environment
gulp.task('build', ['clean'], function(cb) {
    runSequence(['copyFiles'],  'styles', 'scripts', cb);
});

// Publish task build production ready files to deploy
// run publish tasks then pagespeed and zip
gulp.task('publish', function(cb) {
    publish = true;
    runSequence('build', 'zip', 'psInsights', cb);
});

// Build and serve the output from the build
gulp.task('serv:dist', ['publish'], function(cb) {
    runSequence(['browser-sync'], cb);
});
