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

var devOptions = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
];

// configurations
var webpackConfig = {
    context: PATHS.root,
    entry: {
        'app-scripts': './source/assets/js/core/base.js',
        'vendor'     : ['jquery', 'angular', 'angular-ui-router']
    },

    resolve: {
        root: [
            PATHS.srcAssetsJS,
            PATHS.srcModules,
            PATHS.nodeModules
        ],
        extensions: ['', '.js'],
        alias: {
            jQuery: 'jquery'
        }
    },

    resolveLoader: {
        root: PATHS.nodeModules
    },

    target: 'web',

    /* source map for dev server */
    devtool: 'source-map',

    output: {
        path              : PATHS.dist,
        filename          : '[name].js',
        sourceMapFilename : '[name].map'
    },

    plugins: devOptions,

    /**
     * globals variables
     */
    externals: {
        'Modernizr' : 'Modernizr',
        'kendo'     : 'kendo',
        'window'    : 'window'
    },

    /* loaders */
    module: {
        loaders: [
            { test: /\.html$/,     loader: 'raw', exclude: /node_modules/ },
            { test: /jquery\.js$/, loader: 'expose?$' },
            { test: /jquery\.js$/, loader: 'expose?jQuery' }
        ]
    }
};

module.exports = webpackConfig;
