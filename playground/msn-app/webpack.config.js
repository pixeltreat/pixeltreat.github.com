/*
*  Webpack build manager
*  Author      : Durga Prasad Sadhanala
*/
'use strict';

var webpack = require('webpack'),
    path    = require('path'),
    config  = require('./config');

// paths
var PATHS = {
    root            : __dirname + '/' + config.base.root,
    srcAssetsJS     : __dirname + '/' + config.webpackResolvePaths.srcAssetsJS,
    srcModules      : __dirname + '/' + config.webpackResolvePaths.srcModules,
    dist            : __dirname + '/' + config.base.dist,
    nodeModulesRoot : path.resolve('./node_modules')
};

// configurations
module.exports = {
    context        : PATHS.root,
    entry          : {
        'app-scripts': './source/assets/js/core/base.js'
    },

    resolve: {
        root: [
            PATHS.srcAssetsJS,
            PATHS.srcModules,
            PATHS.nodeModules
        ],
        extensions: ['', '.js']
    },

    resolveLoader: {
        root: PATHS.nodeModules
    },

    target: 'web',
    //watch: true,
    //debug: true,

    /* source map for dev server */
    devtool: 'source-map',

    output: {
        path              : PATHS.dist,
        filename          : '[name].js',
        sourceMapFilename : '[name].map'
    },

    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('common-scripts.js')
    // ],

    /**
     * globals variables
     */
    externals: {
        'Modernizr' : 'Modernizr',
        'window'    : 'window'
    },

    /* loaders */
    module: {
        loaders: [{
           test    : /\.html$/,
           loader  : 'raw',
           exclude : /node_modules/
        }]
    }
};
