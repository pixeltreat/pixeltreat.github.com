'use strict';
var root       = 'application';
var src        = root + '/source';
var dist       = root + '/build';
var srcAssets  = src + '/assets';
var distAssets = dist + '/assets';

exports.base = {
    root      : root,
    src       : src,
    dist      : dist,
    srcAssets : srcAssets,
    distAssets: distAssets
};

exports.filePath = {
    html     : src + '/**/*.html',
    styles   : src + '/**/*.scss',
    scripts  : src + '/**/*.js',
    copyfiles: [
        src + '/index.html',
        srcAssets + '/fonts/**/*',
        srcAssets + '/img/**/*'
    ],
    stylesEntry  : srcAssets + '/scss/app-styles.scss',
    scriptsEntry : srcAssets + '/js/core/base.js'
};
