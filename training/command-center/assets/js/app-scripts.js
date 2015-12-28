/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* =============================================================================
	   app-scripts.js
	   ========================================================================== */
	/*** custom name space for jQuery and application level components ***/
	var baseJQ = $.noConflict();
	var baseUI = baseUI || {};
	
	// setting global vars to share with other modules
	global.baseJQ = baseJQ;
	global.baseUI = baseUI;
	
	// all components
	__webpack_require__(1);
	__webpack_require__(3);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// global components
	__webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* =============================================================================
	   components/global/header
	   ========================================================================== */
	
	'use strict';
	
	var ns     = baseUI;
	ns.header  = ns.header || {};
	var header = ns.header;
	var element;
	
	header.attach = function (instance) {
	    element = instance;
	    initialize();
	};
	
	header.detach = function () {
	    dispose();
	};
	
	function initialize() {
	    console.log("header attached");
	
	    addEvents();
	}
	
	function addEvents() {
	    //element.on('click', callback);
	}
	
	function dispose() {
	    element.parentNode.removeChild(element);
	    delete ns.header;
	    element = null;
	
	    // remove event listeners below, example commented
	    //element.off('click', callback);
	    console.log("header detached");
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* =============================================================================
	   assets/js/global/initialize-modules.js
	   ========================================================================== */
	var domUtils   = __webpack_require__(4);
	var ns         = baseUI;
	
	function initializeModules() {
	    var allModules = domUtils.findAll('[data-uimodule]');
	
	    // find all the JS modules on page and initiate
	    domUtils.forEach(allModules, attachModules);
	
	    /**
	     * attach components on the page
	     * @param  {[type]} item [description]
	     */
	    function attachModules(item) {
	        var modulElement = item.attributes['data-uimodule'].value;
	
	        // find and call this module
	        var action = (action === undefined) ? 'attach' : action;
	        if (modulElement !== '' && ns[modulElement] && typeof ns[modulElement][action] === 'function') {
	            ns[modulElement][action](item);
	        }
	    }
	}
	
	// initialize on 'DOMContentLoaded'
	domUtils.ready(initializeModules);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * DOM utilities to use native browser capabilities and avoid dependencies.
	 *
	 * @module dom-util
	 * @version 1.0.0
	 */
	
	"use strict";
	
	/**
	 * Native DOM ready function.
	 *
	 * @param  {Function} callback
	 */
	exports.ready = function(callback) {
	    document.addEventListener("DOMContentLoaded", callback, false);
	};
	
	/**
	 * Native querySelectorAll to find all the dom element with given selector.
	 *
	 * @param  {String | Object} selector Target selector element.
	 * @param  {String | Object} context  Context/parent element, if it not provided
	 * fallback to document.
	 * @return {nodeList | Array} Returns the target as a DOM node.
	 */
	exports.findAll = function(selector, context) {
	    return (context || document).querySelectorAll(selector);
	};
	
	/**
	 * Native querySelector to find first element in the dom with given selector
	 *
	 * @param  {String | Object} selector Target selector element.
	 * @param  {String | Object} context  Context/parent element, if it not provided
	 * fallback to document.
	 * @return {Object} returns the target as a DOM node
	 */
	exports.findFirst = function(selector, context) {
	    return (context || document).querySelector(selector);
	};
	
	/**
	 * Checks for classList native support.
	 *
	 * @return {Boolean} Returns true/false.
	 */
	function checkClassListSupport() {
	    return ('classList' in document.documentElement) ? true : false;
	}
	
	/**
	 * Checks if the queried classname existance on the element.
	 *
	 * @param {Object} el This is HTML element.
	 * @param {String} className This will be used a new style class added to the
	 * element.
	 * @return {Boolean} Returns true/false
	 */
	exports.hasClass = function(el, className) {
	    var classListSupport = checkClassListSupport();
	
	    // check if the element is not null and classList is supported
	    if (el && classListSupport) {
	        return el.classList.contains(className);
	    }
	
	    // fallback for non-classlist supported browsers
	    if (el && !classListSupport) {
	        return new RegExp('\\b' + className + '\\b').test(el.className);
	    }
	};
	
	/**
	 * Adds style class to the supplied element.
	 *
	 * @param {Object} el This is HTML element.
	 * @param {String} className This will be used as a style class to be added to
	 * the element.
	 */
	exports.addClass = function(el, className) {
	    var classListSupport = checkClassListSupport();
	
	    // check if the element is not null and classList is supported
	    if (el && classListSupport) {
	        el.classList.add(className);
	    }
	
	    // fallback for non-classlist supported browsers
	    if (el && !classListSupport && !exports.hasClass(el, className)) {
	        el.className += ' ' + className;
	    }
	};
	
	/**
	 * Removes style class from the supplied element.
	 *
	 * @param {Object} el This is HTML element.
	 * @param {String} className This will be used as a style class to be removed
	 * from the element.
	 */
	exports.removeClass = function(el, className) {
	    var classListSupport = checkClassListSupport();
	
	    // check if the element is not null and classList is supported
	    if (el && classListSupport) {
	        el.classList.remove(className);
	    }
	
	    // fallback for non-classlist supported browsers
	    if (el && !classListSupport) {
	        el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
	    }
	};
	
	/**
	 * Based on the browser test stats form below URL, for loop is much faster than
	 * any other implementation, if we catch the variables, so this below utility
	 * method will help avoiding lodash dependency
	 * https://jsperf.com/angular-foreach-vs-native-for-loop/29
	 *
	 * @param  {Array}   array
	 * @param  {Function} callback
	 */
	exports.forEach = function(array, callback) {
	    var i;
	    var length = array.length;
	
	    for (i = 0; i < length; i++) {
	        var ele = array[i];
	
	        // callback with element as a parameter
	        callback(ele);
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=app-scripts.map