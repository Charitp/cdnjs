(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./foundation.core"), require("./foundation.core.plugin"), require("./foundation.core.utils"), require("./foundation.smoothScroll"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["./foundation.core", "./foundation.core.plugin", "./foundation.core.utils", "./foundation.smoothScroll", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["foundation.magellan"] = factory(require("./foundation.core"), require("./foundation.core.plugin"), require("./foundation.core.utils"), require("./foundation.smoothScroll"), require("jquery"));
	else
		root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.magellan"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.smoothScroll"], root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__, __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__, __WEBPACK_EXTERNAL_MODULE__foundation_smoothScroll__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./foundation.core":
/*!****************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core","commonjs":"./foundation.core","commonjs2":"./foundation.core"} ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core__;

/***/ }),

/***/ "./foundation.core.plugin":
/*!*************************************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.plugin","commonjs":"./foundation.core.plugin","commonjs2":"./foundation.core.plugin"} ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__;

/***/ }),

/***/ "./foundation.core.utils":
/*!**********************************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.utils","commonjs":"./foundation.core.utils","commonjs2":"./foundation.core.utils"} ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__;

/***/ }),

/***/ "./foundation.smoothScroll":
/*!************************************************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.smoothScroll"],"amd":"./foundation.smoothScroll","commonjs":"./foundation.smoothScroll","commonjs2":"./foundation.smoothScroll"} ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_smoothScroll__;

/***/ }),

/***/ "./js/entries/plugins/foundation.magellan.js":
/*!***************************************************!*\
  !*** ./js/entries/plugins/foundation.magellan.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Foundation", {
  enumerable: true,
  get: function get() {
    return _foundation.Foundation;
  }
});
Object.defineProperty(exports, "Magellan", {
  enumerable: true,
  get: function get() {
    return _foundation2.Magellan;
  }
});

var _foundation = __webpack_require__(/*! ./foundation.core */ "./foundation.core");

var _foundation2 = __webpack_require__(/*! ../../foundation.magellan */ "./js/foundation.magellan.js");

_foundation.Foundation.plugin(_foundation2.Magellan, 'Magellan');

/***/ }),

/***/ "./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Magellan = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var _foundationCore = __webpack_require__(/*! ./foundation.core.utils */ "./foundation.core.utils");

var _foundationCore2 = __webpack_require__(/*! ./foundation.core.plugin */ "./foundation.core.plugin");

var _foundation = __webpack_require__(/*! ./foundation.smoothScroll */ "./foundation.smoothScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */
var Magellan =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Magellan, _Plugin);

  function Magellan() {
    _classCallCheck(this, Magellan);

    return _possibleConstructorReturn(this, (Magellan.__proto__ || Object.getPrototypeOf(Magellan)).apply(this, arguments));
  }

  _createClass(Magellan, [{
    key: "_setup",

    /**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = _jquery.default.extend({}, Magellan.defaults, this.$element.data(), options);
      this.className = 'Magellan'; // ie9 back compat

      this._init();

      this.calcPoints();
    }
    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || (0, _foundationCore.GetYoDigits)(6, 'magellan');

      var _this = this;

      this.$targets = (0, _jquery.default)('[data-magellan-target]');
      this.$links = this.$element.find('a');
      this.$element.attr({
        'data-resize': id,
        'data-scroll': id,
        'id': id
      });
      this.$active = (0, _jquery.default)();
      this.scrollPos = parseInt(window.pageYOffset, 10);

      this._events();
    }
    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */

  }, {
    key: "calcPoints",
    value: function calcPoints() {
      var _this = this,
          body = document.body,
          html = document.documentElement;

      this.points = [];
      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
      this.$targets.each(function () {
        var $tar = (0, _jquery.default)(this),
            pt = Math.round($tar.offset().top - _this.options.threshold);
        $tar.targetPoint = pt;

        _this.points.push(pt);
      });
    }
    /**
     * Initializes events for Magellan.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          $body = (0, _jquery.default)('html, body'),
          opts = {
        duration: _this.options.animationDuration,
        easing: _this.options.animationEasing
      };

      (0, _jquery.default)(window).one('load', function () {
        if (_this.options.deepLinking) {
          if (location.hash) {
            _this.scrollToLoc(location.hash);
          }
        }

        _this.calcPoints();

        _this._updateActive();
      });
      _this.onLoadListener = (0, _foundationCore.onLoad)((0, _jquery.default)(window), function () {
        _this.$element.on({
          'resizeme.zf.trigger': _this.reflow.bind(_this),
          'scrollme.zf.trigger': _this._updateActive.bind(_this)
        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
          e.preventDefault();

          var arrival = _this.getAttribute('href');

          _this.scrollToLoc(arrival);
        });
      });

      this._deepLinkScroll = function (e) {
        if (_this.options.deepLinking) {
          _this.scrollToLoc(window.location.hash);
        }
      };

      (0, _jquery.default)(window).on('hashchange', this._deepLinkScroll);
    }
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */

  }, {
    key: "scrollToLoc",
    value: function scrollToLoc(loc) {
      this._inTransition = true;

      var _this = this;

      var options = {
        animationEasing: this.options.animationEasing,
        animationDuration: this.options.animationDuration,
        threshold: this.options.threshold,
        offset: this.options.offset
      };

      _foundation.SmoothScroll.scrollToLoc(loc, options, function () {
        _this._inTransition = false;
      });
    }
    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */

  }, {
    key: "reflow",
    value: function reflow() {
      this.calcPoints();

      this._updateActive();
    }
    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */

  }, {
    key: "_updateActive",
    value: function _updateActive()
    /*evt, elem, scrollPos*/
    {
      var _this2 = this;

      if (this._inTransition) return;
      var newScrollPos = parseInt(window.pageYOffset, 10);
      var isScrollingUp = this.scrollPos > newScrollPos;
      this.scrollPos = newScrollPos;
      var activeIdx; // Before the first point: no link

      if (newScrollPos < this.points[0]) {}
      /* do nothing */
      // At the bottom of the page: last link
      else if (newScrollPos + this.winHeight === this.docHeight) {
          activeIdx = this.points.length - 1;
        } // Otherwhise, use the last visible link
        else {
            var visibleLinks = this.points.filter(function (p, i) {
              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
            });
            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
          } // Get the new active link


      var $oldActive = this.$active;
      var activeHash = '';

      if (activeIdx !== undefined) {
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
      } else {
        this.$active = (0, _jquery.default)();
      }

      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
      var isNewHash = activeHash !== window.location.hash; // Update the active link element

      if (isNewActive) {
        $oldActive.removeClass(this.options.activeClass);
        this.$active.addClass(this.options.activeClass);
      } // Update the hash (it may have changed with the same active link)


      if (this.options.deepLinking && isNewHash) {
        if (window.history.pushState) {
          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
          window.history.pushState(null, null, url);
        } else {
          window.location.hash = activeHash;
        }
      }

      if (isNewActive) {
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }
    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

      if (this.options.deepLinking) {
        var hash = this.$active[0].getAttribute('href');
        window.location.hash.replace(hash, '');
      }

      (0, _jquery.default)(window).off('hashchange', this._deepLinkScroll).off(this.onLoadListener);
    }
  }]);

  return Magellan;
}(_foundationCore2.Plugin);
/**
 * Default settings for plugin
 */


exports.Magellan = Magellan;
Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  activeClass: 'is-active',

  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};

/***/ }),

/***/ 8:
/*!*********************************************************!*\
  !*** multi ./js/entries/plugins/foundation.magellan.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.magellan.js */"./js/entries/plugins/foundation.magellan.js");


/***/ }),

/***/ "jquery":
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=foundation.magellan.js.map