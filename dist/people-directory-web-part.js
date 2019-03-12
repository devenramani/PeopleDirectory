define("267283a5-b9e9-4997-940c-9020aa1a3f38_0.0.1", ["react","@microsoft/sp-core-library","PeopleDirectoryWebPartStrings","react-dom","@microsoft/sp-webpart-base","@microsoft/sp-http","ControlStrings"], function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_192__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(133), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(85);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(90);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var concatStyleSets_1 = __webpack_require__(38);
exports.concatStyleSets = concatStyleSets_1.concatStyleSets;
var fontFace_1 = __webpack_require__(91);
exports.fontFace = fontFace_1.fontFace;
var keyframes_1 = __webpack_require__(92);
exports.keyframes = keyframes_1.keyframes;
var Stylesheet_1 = __webpack_require__(7);
exports.InjectionMode = Stylesheet_1.InjectionMode;
exports.Stylesheet = Stylesheet_1.Stylesheet;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent
 * @param allowVirtualChildren
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
exports.getChildren = getChildren;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element element to start searching at
 * @param matchFunction the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
exports.findElementRecursive = findElementRecursive;
/**
 * Determines if an element, or any of its ancestors, contian the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
exports.elementContainsAttribute = elementContainsAttribute;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/**
 * Injection mode for the stylesheet.
 *
 * @public
 */
var InjectionMode;
(function (InjectionMode) {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    InjectionMode[InjectionMode["none"] = 0] = "none";
    /**
     * Inserts rules using the insertRule api.
     */
    InjectionMode[InjectionMode["insertNode"] = 1] = "insertNode";
    /**
     * Appends rules using appendChild.
     */
    InjectionMode[InjectionMode["appendChild"] = 2] = "appendChild";
})(InjectionMode = exports.InjectionMode || (exports.InjectionMode = {}));
var STYLESHEET_SETTING = '__stylesheet__';
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = tslib_1.__assign({ injectionMode: 1 /* insertNode */, defaultPrefix: 'css' }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var win = typeof window !== 'undefined' ? window : {};
        _stylesheet = win[STYLESHEET_SETTING];
        if (!_stylesheet) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (win && win['FabricConfig']) || {};
            _stylesheet = win[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var prefix = displayName || this._config.defaultPrefix;
        return prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.args);
    };
    /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.rules);
    };
    /**
     * Inserts a css rule into the stylesheet.
     */
    Stylesheet.prototype.insertRule = function (rule) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== 0 /* none */ ? this._getStyleElement() : undefined;
        if (element) {
            switch (this._config.injectionMode) {
                case 1 /* insertNode */:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case 2 /* appendChild */:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function () {
        return (this._rules.join('') || '') + (this._rulesToInsert.join('') || '');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(11);
var ContextualMenu_1 = __webpack_require__(150);
var BaseButton_classNames_1 = __webpack_require__(177);
var SplitButton_classNames_1 = __webpack_require__(178);
var BaseButton = /** @class */ (function (_super) {
    tslib_1.__extends(BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined
        });
        _this._labelId = Utilities_1.getId();
        _this._descriptionId = Utilities_1.getId();
        _this._ariaDescriptionId = Utilities_1.getId();
        _this.state = {
            menuProps: null
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return (!!this.props.menuProps && !!this.props.onClick) && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            return !!this.state.menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, description = _a.description, disabled = _a.disabled, primaryDisabled = _a.primaryDisabled, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, text = _a.text, checked = _a.checked, variantClassName = _a.variantClassName;
        var menuProps = this.state.menuProps;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = (disabled || primaryDisabled);
        this._classNames = BaseButton_classNames_1.getClassNames(styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!this.state.menuProps, this.props.split);
        var _b = this, _ariaDescriptionId = _b._ariaDescriptionId, _labelId = _b._labelId, _descriptionId = _b._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Utilities_1.getNativeProps(Utilities_1.assign(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities_1.anchorProperties : Utilities_1.buttonProperties, [
            'disabled' // Let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to null.
        var ariaDescribedBy;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (description) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        else {
            ariaDescribedBy = null;
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = null;
        if (!ariaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = text ? _labelId : null;
            }
        }
        var buttonProps = Utilities_1.assign(nativeProps, {
            className: this._classNames.root,
            ref: this._resolveRef('_buttonElement'),
            'disabled': isPrimaryButtonDisabled,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'data-is-focusable': (this.props['data-is-focusable'] === false || disabled) ? false : true,
            'aria-pressed': checked
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return (this._onRenderSplitButtonContent(tag, buttonProps));
        }
        else if (this.props.menuProps) {
            Utilities_1.assign(buttonProps, {
                'onKeyDown': this._onMenuKeyDown,
                'onClick': this._onMenuClick,
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.focus = function () {
        if (this._buttonElement) {
            this._buttonElement.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this.setState({ menuProps: null });
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var props = this.props;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e;
        return React.createElement(tag, buttonProps, React.createElement('div', { className: this._classNames.flexContainer }, onRenderIcon(props, this._onRenderIcon), this._onRenderTextContents(), onRenderAriaDescription(props, this._onRenderAriaDescription), onRenderChildren(props, this._onRenderChildren), !this._isSplitButton && (menuProps || menuIconProps || this.props.onRenderMenuIcon) && onRenderMenuIcon(this.props, this._onRenderMenuIcon), this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
    };
    BaseButton.prototype._onRenderIcon = function (buttonProps, defaultRender) {
        var iconProps = this.props.iconProps;
        if (iconProps) {
            return Icon_1.Icon(tslib_1.__assign({}, iconProps, { className: this._classNames.icon }));
        }
        return null;
    };
    BaseButton.prototype._onRenderTextContents = function () {
        var _a = this.props, text = _a.text, children = _a.children, description = _a.description, _b = _a.onRenderText, onRenderText = _b === void 0 ? this._onRenderText : _b, _c = _a.onRenderDescription, onRenderDescription = _c === void 0 ? this._onRenderDescription : _c;
        if (text || typeof (children) === 'string' || description) {
            return (React.createElement("div", { className: this._classNames.textContainer },
                onRenderText(this.props, this._onRenderText),
                onRenderDescription(this.props, this._onRenderDescription)));
        }
        return ([
            onRenderText(this.props, this._onRenderText),
            onRenderDescription(this.props, this._onRenderDescription)
        ]);
    };
    BaseButton.prototype._onRenderText = function () {
        var _a = this.props, children = _a.children, text = _a.text;
        // For backwards compat, we should continue to take in the text content from children.
        if (text === undefined && typeof (children) === 'string') {
            text = children;
        }
        if (text) {
            return (React.createElement("div", { key: this._labelId, className: this._classNames.label, id: this._labelId }, text));
        }
        return null;
    };
    BaseButton.prototype._onRenderChildren = function () {
        var children = this.props.children;
        // If children is just a string, either it or the text will be rendered via onRenderLabel
        // If children is another component, it will be rendered after text
        if (typeof (children) === 'string') {
            return null;
        }
        return children;
    };
    BaseButton.prototype._onRenderDescription = function (props) {
        var description = this.props.description;
        // ms-Button-description is only shown when the button type is compound.
        // In other cases it will not be displayed.
        return description ? (React.createElement("div", { key: this._descriptionId, className: this._classNames.description, id: this._descriptionId }, description)) : (null);
    };
    BaseButton.prototype._onRenderAriaDescription = function () {
        var ariaDescription = this.props.ariaDescription;
        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
        // otherwise it will be assigned to descriptionSpan.
        return ariaDescription ? (React.createElement("span", { className: this._classNames.screenReaderText, id: this._ariaDescriptionId }, ariaDescription)) : (null);
    };
    BaseButton.prototype._onRenderMenuIcon = function (props) {
        var menuIconProps = this.props.menuIconProps;
        return (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: 'ChevronDown' }, menuIconProps, { className: this._classNames.menuIcon })));
    };
    BaseButton.prototype._onRenderMenu = function (menuProps) {
        var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? this._onToggleMenu : _a;
        return (React.createElement(ContextualMenu_1.ContextualMenu, tslib_1.__assign({ id: this._labelId + '-menu', directionalHint: 4 /* bottomLeftEdge */ }, menuProps, { className: 'ms-BaseButton-menuhost ' + menuProps.className, target: this._isSplitButton ? this._splitButtonContainer : this._buttonElement, labelElementId: this._labelId, onDismiss: onDismiss })));
    };
    BaseButton.prototype._onToggleMenu = function () {
        var menuProps = this.props.menuProps;
        var currentMenuProps = this.state.menuProps;
        this.setState({ menuProps: currentMenuProps ? null : menuProps });
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, checked = _a.checked;
        var classNames = styles && SplitButton_classNames_1.getClassNames(styles, !!disabled, !!this.state.menuProps, !!checked);
        return (React.createElement("div", { "aria-labelledby": buttonProps.ariaLabel, "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": this._isExpanded, "aria-pressed": this.props.checked, "aria-describedby": buttonProps.ariaDescription, className: classNames && classNames.splitButtonContainer, onKeyDown: this._onMenuKeyDown, ref: this._resolveRef('_splitButtonContainer') },
            React.createElement("span", { "aria-hidden": true, 
                // TODO: THIS SHOULD BE REMOVED!
                style: { 'display': 'flex' } },
                this._onRenderContent(tag, buttonProps),
                this._onRenderSplitButtonMenuButton(classNames),
                this._onRenderSplitButtonDivider(classNames))));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return React.createElement("span", { className: classNames.divider });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames) {
        var menuIconProps = this.props.menuIconProps;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            'styles': classNames,
            'checked': this.props.checked,
            'disabled': this.props.disabled,
            'onClick': this._onMenuClick,
            'menuProps': undefined,
            'iconProps': menuIconProps
        };
        return React.createElement(BaseButton, tslib_1.__assign({}, splitButtonProps));
    };
    BaseButton.prototype._onMenuKeyDown = function (ev) {
        if (ev.which === 40 /* down */) {
            var onMenuClick = this.props.onMenuClick;
            onMenuClick && onMenuClick(ev, this);
            !ev.defaultPrevented && this._onToggleMenu();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    BaseButton.prototype._onMenuClick = function (ev) {
        var onMenuClick = this.props.onMenuClick;
        onMenuClick && onMenuClick(ev, this);
        !ev.defaultPrevented && this._onToggleMenu();
        ev.preventDefault();
        ev.stopPropagation();
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        classNames: {},
        styles: {},
        split: false
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderTextContents", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderText", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderChildren", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderAriaDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenuIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onToggleMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuClick", null);
    return BaseButton;
}(Utilities_1.BaseComponent));
exports.BaseButton = BaseButton;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: Styling_1.FontSizes.icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    return {
        root: [
            Styling_1.getFocusStyle(theme, -1),
            theme.fonts.medium,
            {
                boxSizing: 'border-box',
                border: '1px solid ' + border,
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px',
                borderRadius: 0
            }
        ],
        rootDisabled: {
            backgroundColor: disabledBackground,
            color: disabledText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: {
                ':hover': noOutline,
                ':focus': noOutline
            }
        },
        iconDisabled: {
            color: disabledText
        },
        menuIconDisabled: {
            color: disabledText
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textContainer: {
            flexGrow: 1
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: Styling_1.FontSizes.small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: Styling_1.hiddenContentStyle
    };
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(129), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-string-literal */
var object_1 = __webpack_require__(19);
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                object_1.assign(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) { // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else { // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener ||
            (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) { // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) { // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(7);
var kebabRules_1 = __webpack_require__(86);
var prefixRules_1 = __webpack_require__(87);
var provideUnits_1 = __webpack_require__(89);
var rtlifyRules_1 = __webpack_require__(36);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf(':global(') === 0) {
                                newSelector = newSelector.replace(/:global\(|\)$/g, '');
                            }
                            else if (newSelector.indexOf('@media') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                            }
                            else if (newSelector.indexOf(':') === 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            else if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + ' ' + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = (typeof value === 'string') ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
exports.styleToRegistration = styleToRegistration;
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + ((selector.indexOf('@media') === 0) ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
exports.applyRegistration = applyRegistration;
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}
exports.styleToClassName = styleToClassName;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(128), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AnimationStyles_1 = __webpack_require__(138);
exports.AnimationStyles = AnimationStyles_1.AnimationStyles;
exports.AnimationVariables = AnimationStyles_1.AnimationVariables;
var DefaultPalette_1 = __webpack_require__(25);
exports.DefaultPalette = DefaultPalette_1.DefaultPalette;
var DefaultFontStyles_1 = __webpack_require__(50);
exports.DefaultFontStyles = DefaultFontStyles_1.DefaultFontStyles;
exports.registerDefaultFontFaces = DefaultFontStyles_1.registerDefaultFontFaces;
var fonts_1 = __webpack_require__(51);
exports.FontSizes = fonts_1.FontSizes;
exports.FontWeights = fonts_1.FontWeights;
exports.IconFontSizes = fonts_1.IconFontSizes;
exports.createFontStyles = fonts_1.createFontStyles;
var getFocusStyle_1 = __webpack_require__(139);
exports.getFocusStyle = getFocusStyle_1.getFocusStyle;
exports.focusClear = getFocusStyle_1.focusClear;
var hiddenContentStyle_1 = __webpack_require__(140);
exports.hiddenContentStyle = hiddenContentStyle_1.hiddenContentStyle;
var PulsingBeaconAnimationStyles_1 = __webpack_require__(141);
exports.PulsingBeaconAnimationStyles = PulsingBeaconAnimationStyles_1.PulsingBeaconAnimationStyles;
var getGlobalClassNames_1 = __webpack_require__(142);
exports.getGlobalClassNames = getGlobalClassNames_1.getGlobalClassNames;
var theme_1 = __webpack_require__(143);
exports.ThemeSettingName = theme_1.ThemeSettingName;
exports.getTheme = theme_1.getTheme;
exports.loadTheme = theme_1.loadTheme;
exports.createTheme = theme_1.createTheme;
exports.registerOnThemeChangeCallback = theme_1.registerOnThemeChangeCallback;
exports.removeOnThemeChangeCallback = theme_1.removeOnThemeChangeCallback;
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(145), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_styles_1 = __webpack_require__(180);
var DefaultButton = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: DefaultButton_styles_1.getStyles(theme, styles, primary), onRenderDescription: Utilities_1.nullRender })));
    };
    DefaultButton = tslib_1.__decorate([
        Utilities_1.customizable('DefaultButton', ['theme'])
    ], DefaultButton);
    return DefaultButton;
}(Utilities_1.BaseComponent));
exports.DefaultButton = DefaultButton;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var splitButtonStyles = {
        splitButtonContainer: {
            position: 'relative',
            display: 'inline-block',
            border: '1px solid transparent',
            selectors: {
                ':focus': {
                    outline: 'none!important',
                    border: '1px solid'
                }
            }
        },
        splitButtonMenuButton: [
            Styling_1.getFocusStyle(theme, -1),
            {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                border: '1px solid transparent',
                borderRadius: 0,
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1
            }
        ],
        splitButtonDivider: {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        },
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: {
                ':hover': {
                    cursor: 'default'
                }
            }
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };
    return Styling_1.concatStyleSets(splitButtonStyles, customStyles);
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
exports.getId = getId;
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum).map(function (p) {
        if (String(Number(p)) !== p) { // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    }).filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
exports.values = values;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
*/
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
exports.setWarningCallback = setWarningCallback;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
var keyboard_1 = __webpack_require__(40);
exports.IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'is-focusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window
 */
function initializeFocusRects(window) {
    var win = (window || dom_1.getWindow());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
exports.initializeFocusRects = initializeFocusRects;
function _onMouseDown(ev) {
    var win = dom_1.getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(exports.IsFocusVisibleClassName)) {
            classList.remove(exports.IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = dom_1.getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (keyboard_1.isDirectionalKeyCode(ev.which) && !classList.contains(exports.IsFocusVisibleClassName)) {
            classList.add(exports.IsFocusVisibleClassName);
        }
    }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var GlobalSettings_1 = __webpack_require__(23);
var EventGroup_1 = __webpack_require__(12);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new EventGroup_1.EventGroup(_allSettings);
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] = (localScopedSettings[property] ||
                localSettings.settings[property] ||
                globalScopedSettings[property] ||
                _allSettings.settings[property]);
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());
exports.Customizations = Customizations;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _globalSettings = {};
var _counter = 0;
if (typeof window !== 'undefined') {
    // tslint:disable-next-line:no-any
    var win = window;
    _globalSettings = win[GLOBAL_SETTINGS_PROP_NAME] = win[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
        _a[CALLBACK_STATE_PROP_NAME] = {},
        _a);
}
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
var _a;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buildClassMap_1 = __webpack_require__(136);
exports.buildClassMap = buildClassMap_1.buildClassMap;
var icons_1 = __webpack_require__(49);
exports.getIcon = icons_1.getIcon;
exports.registerIcons = icons_1.registerIcons;
exports.registerIconAlias = icons_1.registerIconAlias;
exports.setIconOptions = icons_1.setIconOptions;
var getIconClassName_1 = __webpack_require__(137);
exports.getIconClassName = getIconClassName_1.getIconClassName;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint;
(function (DirectionalHint) {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
})(DirectionalHint = exports.DirectionalHint || (exports.DirectionalHint = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(32);
/* tslint:enable:no-unused-variable */
var Fabric_1 = __webpack_require__(168);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(172);
var styles = stylesImport;
var _layersByHostId = {};
var _defaultHostSelector;
var Layer = /** @class */ (function (_super) {
    tslib_1.__extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    Layer.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    Layer.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    Layer.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    Layer.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    Layer.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Utilities_1.getDocument(this._rootElement);
                this._layerElement = doc.createElement('div');
                this._layerElement.className = Utilities_1.css('ms-Layer', (_a = {},
                    _a['ms-Layer--fixed ' + styles.rootIsFixed] = !this.props.hostId,
                    _a));
                host.appendChild(this._layerElement);
                Utilities_1.setVirtualParent(this._layerElement, this._rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            ReactDOM.unstable_renderSubtreeIntoContainer(this, (React.createElement(Fabric_1.Fabric, { className: Utilities_1.css('ms-Layer-content', styles.content) }, this.props.children)), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
        var _a;
    };
    Layer.prototype.render = function () {
        return (React.createElement("span", { className: 'ms-Layer', ref: this._resolveRef('_rootElement') }));
    };
    Layer.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            ReactDOM.unmountComponentAtNode(this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    Layer.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Utilities_1.getDocument(this._rootElement);
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    Layer.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    return Layer;
}(Utilities_1.BaseComponent));
exports.Layer = Layer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var ActionButton_styles_1 = __webpack_require__(181);
var ActionButton = /** @class */ (function (_super) {
    tslib_1.__extends(ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--action ms-Button--command', styles: ActionButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    ActionButton = tslib_1.__decorate([
        Utilities_1.customizable('ActionButton', ['theme'])
    ], ActionButton);
    return ActionButton;
}(Utilities_1.BaseComponent));
exports.ActionButton = ActionButton;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PivotLinkFormat;
(function (PivotLinkFormat) {
    /**
     * Display Pivot Links as links
     */
    PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
    /**
     * Display Pivot Links as Tabs
     */
    PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
})(PivotLinkFormat = exports.PivotLinkFormat || (exports.PivotLinkFormat = {}));
var PivotLinkSize;
(function (PivotLinkSize) {
    /**
     * Display Link using normal font size
     */
    PivotLinkSize[PivotLinkSize["normal"] = 0] = "normal";
    /**
     * Display links using large font size
     */
    PivotLinkSize[PivotLinkSize["large"] = 1] = "large";
})(PivotLinkSize = exports.PivotLinkSize || (exports.PivotLinkSize = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandingCardMode;
(function (ExpandingCardMode) {
    /**
     * To have top compact card only
     */
    ExpandingCardMode[ExpandingCardMode["compact"] = 0] = "compact";
    /**
     * To have both top compact and bottom expanded card
     */
    ExpandingCardMode[ExpandingCardMode["expanded"] = 1] = "expanded";
})(ExpandingCardMode = exports.ExpandingCardMode || (exports.ExpandingCardMode = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () { return; };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
var index_1 = __webpack_require__(5);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = index_1.mergeStyles({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(7);
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        Stylesheet_1.Stylesheet.getInstance().resetKeys();
        _rtl = isRTL;
    }
}
exports.setRTL = setRTL;
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = (typeof document !== 'undefined' &&
            !!document.documentElement &&
            document.documentElement.getAttribute('dir') === 'rtl');
    }
    return _rtl;
}
exports.getRTL = getRTL;
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var _a;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(7);
/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}
exports.extractStyleParts = extractStyleParts;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Async_1 = __webpack_require__(34);
var EventGroup_1 = __webpack_require__(12);
var warn_1 = __webpack_require__(20);
var initializeFocusRects_1 = __webpack_require__(21);
var initializeDir_1 = __webpack_require__(93);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        initializeFocusRects_1.initializeFocusRects();
        initializeDir_1.initializeDir();
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from `@uifabric/utilities`
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warn_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() { return null; }
exports.nullRender = nullRender;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalKeyCodes = (_a = {},
    _a[38 /* up */] = 1,
    _a[40 /* down */] = 1,
    _a[37 /* left */] = 1,
    _a[39 /* right */] = 1,
    _a[36 /* home */] = 1,
    _a[35 /* end */] = 1,
    _a[9 /* tab */] = 1,
    _a[33 /* pageUp */] = 1,
    _a[34 /* pageDown */] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
exports.isDirectionalKeyCode = isDirectionalKeyCode;
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
exports.addDirectionalKeyCode = addDirectionalKeyCode;
var _a;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(42);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(97)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__(96);
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
exports.hoistStatics = hoistStatics;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
var localStorage_1 = __webpack_require__(114);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var savedLanguage = localStorage_1.getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        localStorage_1.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize = exports.SpinnerSize || (exports.SpinnerSize = {}));
/**
 * Deprecated at v2.0.0, use 'SpinnerSize' instead.
 * @deprecated
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.medium instead.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.large instead.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType = exports.SpinnerType || (exports.SpinnerType = {}));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
exports.InjectionMode = index_1.InjectionMode;
exports.Stylesheet = index_1.Stylesheet;
exports.concatStyleSets = index_1.concatStyleSets;
exports.fontFace = index_1.fontFace;
exports.keyframes = index_1.keyframes;
exports.mergeStyleSets = index_1.mergeStyleSets;
exports.mergeStyles = index_1.mergeStyles;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var warn_1 = __webpack_require__(20);
var GlobalSettings_1 = __webpack_require__(23);
var index_1 = __webpack_require__(5);
var ICON_SETTING_NAME = 'icons';
var _iconSettings = GlobalSettings_1.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib_1.__assign({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib_1.__assign({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = iconName.toLowerCase();
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
exports.registerIcons = registerIcons;
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[iconName.toLowerCase()] = mappedToName.toLowerCase();
}
exports.registerIconAlias = registerIconAlias;
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? name.toLowerCase() : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset.fontFace && !subset.isRegistered) {
                // Register font face for given icons.
                index_1.fontFace(subset.fontFace);
                // Generate a base class name for the given font.
                subset.className = index_1.mergeStyles(subset.style, {
                    fontFamily: subset.fontFace.fontFamily,
                    fontWeight: subset.fontFace.fontWeight || 'normal',
                    fontStyle: subset.fontFace.fontStyle || 'normal'
                }).toString();
                subset.isRegistered = true;
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                warn_1.warn("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
exports.getIcon = getIcon;
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib_1.__assign({}, _iconSettings.__options, options);
}
exports.setIconOptions = setIconOptions;
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                warn_1.warn("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
var fonts_1 = __webpack_require__(51);
var language_1 = __webpack_require__(45);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
exports.DefaultFontStyles = fonts_1.createFontStyles(language_1.getLanguage());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    index_1.fontFace({
        fontFamily: fontFamily,
        src: localFontSrc +
            ("url('" + url + ".woff2') format('woff2'),") +
            ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', fonts_1.FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', fonts_1.FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', fonts_1.FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', fonts_1.FontWeights.semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", fonts_1.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", fonts_1.FontWeights.semibold);
    }
}
exports.registerDefaultFontFaces = registerDefaultFontFaces;
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return (fabricConfig && fabricConfig.fontBaseUrl !== undefined) ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames = exports.LocalizedFontNames || (exports.LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies = exports.LocalizedFontFamilies || (exports.LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    'ar': LocalizedFontFamilies.Arabic,
    'bg': LocalizedFontFamilies.Cyrillic,
    'cs': LocalizedFontFamilies.EastEuropean,
    'el': LocalizedFontFamilies.Greek,
    'et': LocalizedFontFamilies.EastEuropean,
    'he': LocalizedFontFamilies.Hebrew,
    'hi': LocalizedFontFamilies.Hindi,
    'hr': LocalizedFontFamilies.EastEuropean,
    'hu': LocalizedFontFamilies.EastEuropean,
    'ja': LocalizedFontFamilies.Japanese,
    'kk': LocalizedFontFamilies.EastEuropean,
    'ko': LocalizedFontFamilies.Korean,
    'lt': LocalizedFontFamilies.EastEuropean,
    'lv': LocalizedFontFamilies.EastEuropean,
    'pl': LocalizedFontFamilies.EastEuropean,
    'ru': LocalizedFontFamilies.Cyrillic,
    'sk': LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    'th': LocalizedFontFamilies.Thai,
    'tr': LocalizedFontFamilies.EastEuropean,
    'uk': LocalizedFontFamilies.Cyrillic,
    'vi': LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional,
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes = exports.IconFontSizes || (exports.IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
exports.createFontStyles = createFontStyles;
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
exports.ScreenWidthMinSmall = 320;
exports.ScreenWidthMinMedium = 480;
exports.ScreenWidthMinLarge = 640;
exports.ScreenWidthMinXLarge = 1024;
exports.ScreenWidthMinXXLarge = 1366;
exports.ScreenWidthMinXXXLarge = 1920;
exports.ScreenWidthMaxSmall = exports.ScreenWidthMinMedium - 1;
exports.ScreenWidthMaxMedium = exports.ScreenWidthMinLarge - 1;
exports.ScreenWidthMaxLarge = exports.ScreenWidthMinXLarge - 1;
exports.ScreenWidthMaxXLarge = exports.ScreenWidthMinXXLarge - 1;
exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMinXXXLarge - 1;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}
exports.getScreenSelector = getScreenSelector;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes = exports.ZIndexes || (exports.ZIndexes = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint_1 = __webpack_require__(26);
exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType = exports.ContextualMenuItemType || (exports.ContextualMenuItemType = {}));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(153), exports);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection = exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getDividerClassNames = Utilities_1.memoizeFunction(function (theme) {
    return Styling_1.mergeStyleSets({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center'
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt
        }
    });
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(159), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(163), exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function standardStyles(theme) {
    var s = theme.semanticColors;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundChecked = s.buttonBackgroundChecked;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonBackgroundCheckedHovered = s.buttonBackgroundCheckedHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered
        },
        rootPressed: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootChecked: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: buttonTextCheckedHovered
        },
        // Split button styles
        splitButtonContainer: {},
        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight
                }
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter,
                }
            }
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary,
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight,
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
    };
}
exports.standardStyles = standardStyles;
function primaryStyles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootPressed: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootExpanded: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        // Split button styles
        splitButtonContainer: {},
        splitButtonDivider: {
            backgroundColor: theme.palette.themeLighter
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.themeDark
                }
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter,
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark,
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark,
        },
        splitButtonMenuIcon: {
            color: theme.palette.white
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
    };
}
exports.primaryStyles = primaryStyles;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var CompoundButton_styles_1 = __webpack_require__(182);
var CompoundButton = /** @class */ (function (_super) {
    tslib_1.__extends(CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: CompoundButton_styles_1.getStyles(theme, styles, primary) })));
    };
    CompoundButton = tslib_1.__decorate([
        Utilities_1.customizable('CompoundButton', ['theme'])
    ], CompoundButton);
    return CompoundButton;
}(Utilities_1.BaseComponent));
exports.CompoundButton = CompoundButton;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var IconButton_styles_1 = __webpack_require__(183);
var IconButton = /** @class */ (function (_super) {
    tslib_1.__extends(IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--icon', styles: IconButton_styles_1.getStyles(theme, styles), onRenderText: Utilities_1.nullRender, onRenderDescription: Utilities_1.nullRender })));
    };
    IconButton = tslib_1.__decorate([
        Utilities_1.customizable('IconButton', ['theme'])
    ], IconButton);
    return IconButton;
}(Utilities_1.BaseComponent));
exports.IconButton = IconButton;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_1 = __webpack_require__(16);
var PrimaryButton = /** @class */ (function (_super) {
    tslib_1.__extends(PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return (React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { primary: true, onRenderDescription: Utilities_1.nullRender })));
    };
    PrimaryButton = tslib_1.__decorate([
        Utilities_1.customizable('PrimaryButton', ['theme'])
    ], PrimaryButton);
    return PrimaryButton;
}(Utilities_1.BaseComponent));
exports.PrimaryButton = PrimaryButton;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionButton_1 = __webpack_require__(28);
exports.CommandButton = ActionButton_1.ActionButton;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageBarType;
(function (MessageBarType) {
    /** Info styled MessageBar */
    MessageBarType[MessageBarType["info"] = 0] = "info";
    /** Error styled MessageBar */
    MessageBarType[MessageBarType["error"] = 1] = "error";
    /** Blocked styled MessageBar */
    MessageBarType[MessageBarType["blocked"] = 2] = "blocked";
    /** SevereWarning styled MessageBar */
    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
    /** Success styled MessageBar */
    MessageBarType[MessageBarType["success"] = 4] = "success";
    /** Warning styled MessageBar */
    MessageBarType[MessageBarType["warning"] = 5] = "warning";
    /**
     * Deprecated at v0.48.0, to be removed at >= v1.0.0. Use 'blocked' instead.
     * @deprecated
     */
    MessageBarType[MessageBarType["remove"] = 90000] = "remove";
})(MessageBarType = exports.MessageBarType || (exports.MessageBarType = {}));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var PivotItem = /** @class */ (function (_super) {
    tslib_1.__extends(PivotItem, _super);
    function PivotItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PivotItem.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties)), this.props.children));
    };
    return PivotItem;
}(Utilities_1.BaseComponent));
exports.PivotItem = PivotItem;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var ExpandingCard_Props_1 = __webpack_require__(31);
var Callout_1 = __webpack_require__(58);
var Styling_1 = __webpack_require__(3);
var FocusTrapZone_1 = __webpack_require__(225);
var ExpandingCard_styles_1 = __webpack_require__(227);
var ExpandingCard = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandingCard, _super);
    function ExpandingCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            firstFrameRendered: false,
            needsScroll: false
        };
        return _this;
    }
    ExpandingCard.prototype.componentDidMount = function () {
        if (this._expandedElem && this._expandedElem.scrollHeight >= this.props.expandedCardHeight) {
            this.setState({
                needsScroll: true
            });
        }
        if (this.props.trapFocus) {
            this._expandingCard.focus();
            this._events.on(this._expandingCard, 'keydown', this._onDismiss);
        }
    };
    ExpandingCard.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    ExpandingCard.prototype.render = function () {
        var _a = this.props, targetElement = _a.targetElement, theme = _a.theme, customStyles = _a.styles, compactCardHeight = _a.compactCardHeight, directionalHintFixed = _a.directionalHintFixed, expandedCardHeight = _a.expandedCardHeight;
        this._styles = ExpandingCard_styles_1.getStyles(theme, customStyles);
        var content = (React.createElement("div", { ref: this._resolveRef('_expandingCard'), onFocusCapture: this.props.onEnter, onBlurCapture: this.props.onLeave, onMouseEnter: this.props.onEnter, onMouseLeave: this.props.onLeave },
            this._onRenderCompactCard(),
            this._onRenderExpandedCard()));
        return (React.createElement(Callout_1.Callout, tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { componentRef: this._resolveRef('_callout'), className: Styling_1.mergeStyles(Styling_1.AnimationStyles.scaleUpIn100, this._styles.root), target: targetElement, isBeakVisible: false, directionalHint: this.props.directionalHint, directionalHintFixed: directionalHintFixed, finalHeight: compactCardHeight + expandedCardHeight, minPagePadding: 24, gapSpace: this.props.gapSpace }), this.props.trapFocus ?
            React.createElement(FocusTrapZone_1.FocusTrapZone, null, content) :
            content));
    };
    ExpandingCard.prototype._onDismiss = function (ev) {
        if (ev.type === 'keydown') {
            this.props.onLeave && this.props.onLeave(ev);
        }
    };
    ExpandingCard.prototype._onRenderCompactCard = function () {
        return (React.createElement("div", { className: Styling_1.mergeStyles(this._styles.compactCard, { height: this.props.compactCardHeight + 'px' }) }, this.props.onRenderCompactCard(this.props.renderData)));
    };
    ExpandingCard.prototype._onRenderExpandedCard = function () {
        var _this = this;
        // firstFrameRendered helps in initially setting height of expanded card to 1px, even if
        // mode prop is set to ExpandingCardMode.expanded on first render. This is to make sure transition animation takes place.
        !this.state.firstFrameRendered && this._async.requestAnimationFrame(function () {
            _this.setState({
                firstFrameRendered: true
            });
        });
        return (React.createElement("div", { className: Styling_1.mergeStyles(this._styles.expandedCard, this.props.mode === ExpandingCard_Props_1.ExpandingCardMode.expanded && this.state.firstFrameRendered && { height: this.props.expandedCardHeight + 'px' }, this.state.needsScroll && { overflowY: 'auto' }), ref: this._resolveRef('_expandedElem') },
            React.createElement("div", { className: this._styles.expandedCardScroll }, this.props.onRenderExpandedCard && this.props.onRenderExpandedCard(this.props.renderData))));
    };
    ExpandingCard.prototype._checkNeedsScroll = function () {
        var _this = this;
        if (this._expandedElem) {
            this._async.requestAnimationFrame(function () {
                if (_this._expandedElem.scrollHeight >= _this.props.expandedCardHeight) {
                    _this.setState({
                        needsScroll: true
                    });
                }
            });
        }
    };
    ExpandingCard.defaultProps = {
        compactCardHeight: 156,
        expandedCardHeight: 384,
        directionalHint: 4 /* bottomLeftEdge */,
        directionalHintFixed: true,
        gapSpace: 0
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ExpandingCard.prototype, "_onDismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ExpandingCard.prototype, "_onRenderCompactCard", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ExpandingCard.prototype, "_onRenderExpandedCard", null);
    tslib_1.__decorate([
        Utilities_1.autobind
        // tslint:disable-next-line:no-unused-variable
    ], ExpandingCard.prototype, "_checkNeedsScroll", null);
    ExpandingCard = tslib_1.__decorate([
        Utilities_1.customizable('ExpandingCard', ['theme'])
    ], ExpandingCard);
    return ExpandingCard;
}(Utilities_1.BaseComponent));
exports.ExpandingCard = ExpandingCard;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(226), exports);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PanelType;
(function (PanelType) {
    /**
     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fluid width.
     * Only used on Small screen breakpoints.
     * Small: 320-479px width (full screen), 16px Left/Right padding
     * Medium: <unused>
     * Large: <unused>
     * XLarge: <unused>
     * XXLarge: <unused>
     */
    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
    /**
     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fixed width.
     * Small: 272px width, 16px Left/Right padding
     * Medium: 340px width, 16px Left/Right padding
     * Large: 340px width, 32px Left/Right padding
     * XLarge: 340px width, 32px Left/Right padding
     * XXLarge: 340px width, 40px Left/Right padding
     */
    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
    /**
     * Renders the panel in 'small' mode, anchored to the near side (left in LTR mode), and has a fixed width.
     * Small: 272px width, 16px Left/Right padding
     * Medium: 272px width, 16px Left/Right padding
     * Large: 272px width, 32px Left/Right padding
     * XLarge: 272px width, 32px Left/Right padding
     * XXLarge: 272px width, 32px Left/Right padding
     */
    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
    /**
     * Renders the panel in 'medium' mode, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: 48px fixed left margin, 32px Left/Right padding
     * XLarge: 644px width, 32px Left/Right padding
     * XXLarge: 643px width, 40px Left/Right padding
     */
    PanelType[PanelType["medium"] = 3] = "medium";
    /**
     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fluid at XXX-Large breakpoint.
     * Small: <adapts to smallFluid>
     * Medium:  <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: 48px fixed left margin, 32px Left/Right padding
     * XXLarge: 48px fixed left margin, 32px Left/Right padding
     * XXXLarge: 48px fixed left margin, (no redlines for padding, assuming previous breakpoint)
     */
    PanelType[PanelType["large"] = 4] = "large";
    /**
     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fixed at XXX-Large breakpoint.
     * Small: <adapts to smallFluid>
     * Medium:  <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: 48px fixed left margin, 32px Left/Right padding
     * XXLarge: 48px fixed left margin, 32px Left/Right padding
     * XXXLarge: 940px width, (no redlines for padding, assuming previous breakpoint)
     */
    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
    /**
     * Renders the panel in 'extra large' mode, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: <adapts to large>
     * XXLarge: 176px fixed left margin, 40px Left/Right padding
     * XXXLarge: 176px fixed left margin, 40px Left/Right padding
     */
    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
    /**
     * Renders the panel in 'custom' mode using customWidth, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: 48px fixed left margin, 32px Left/Right padding
     * XLarge: 644px width, 32px Left/Right padding
     * XXLarge: 643px width, 40px Left/Right padding
     */
    PanelType[PanelType["custom"] = 7] = "custom";
})(PanelType = exports.PanelType || (exports.PanelType = {}));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDom = __webpack_require__(32);
var sp_core_library_1 = __webpack_require__(18);
var sp_webpart_base_1 = __webpack_require__(72);
var _1 = __webpack_require__(73);
var PeopleDirectoryWebPart = (function (_super) {
    __extends(PeopleDirectoryWebPart, _super);
    function PeopleDirectoryWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeopleDirectoryWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(_1.PeopleDirectory, {
            webUrl: this.context.pageContext.web.absoluteUrl,
            spHttpClient: this.context.spHttpClient,
            title: this.properties.title,
            displayMode: this.displayMode,
            locale: this.getLocaleId(),
            onTitleUpdate: function (newTitle) {
                // after updating the web part title in the component
                // persist it in web part properties
                _this.properties.title = newTitle;
            }
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(PeopleDirectoryWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PeopleDirectoryWebPart.prototype.getLocaleId = function () {
        return this.context.pageContext.cultureInfo.currentUICultureName;
    };
    PeopleDirectoryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: []
        };
    };
    return PeopleDirectoryWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = PeopleDirectoryWebPart;



/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(74));



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var sp_http_1 = __webpack_require__(75);
var PeopleDirectory_module_scss_1 = __webpack_require__(76);
var Spinner_1 = __webpack_require__(79);
var MessageBar_1 = __webpack_require__(125);
var WebPartTitle_1 = __webpack_require__(189);
var IndexNavigation_1 = __webpack_require__(200);
var PeopleList_1 = __webpack_require__(218);
var strings = __webpack_require__(29);
var PeopleDirectory = (function (_super) {
    __extends(PeopleDirectory, _super);
    function PeopleDirectory(props) {
        var _this = _super.call(this, props) || this;
        _this._handleIndexSelect = function (index) {
            // switch the current tab to the tab selected in the navigation
            // and reset the search query
            _this.setState({
                selectedIndex: index,
                searchQuery: ''
            }, function () {
                // load information about people matching the selected tab
                this._loadPeopleInfo(index, null);
            });
        };
        _this._handleSearch = function (searchQuery) {
            // activate the Search tab in the navigation and set the
            // specified text as the current search query
            _this.setState({
                selectedIndex: 'Search',
                searchQuery: searchQuery
            }, function () {
                // load information about people matching the specified search query
                this._loadPeopleInfo(null, searchQuery);
            });
        };
        _this._handleSearchClear = function () {
            // activate the A tab in the navigation and clear the previous search query
            _this.setState({
                selectedIndex: 'A',
                searchQuery: ''
            }, function () {
                // load information about people whose last name begins with A
                this._loadPeopleInfo('A', null);
            });
        };
        _this.state = {
            loading: false,
            errorMessage: null,
            selectedIndex: 'A',
            searchQuery: '',
            people: []
        };
        return _this;
    }
    /**
     * Loads information about people using SharePoint Search
     * @param index Selected tab in the index navigation or 'Search', if the user is searching
     * @param searchQuery Current search query or empty string if not searching
     */
    PeopleDirectory.prototype._loadPeopleInfo = function (index, searchQuery) {
        var _this = this;
        // update the UI notifying the user that the component will now load its data
        // clear any previously set error message and retrieved list of people
        this.setState({
            loading: true,
            errorMessage: null,
            people: []
        });
        var headers = new Headers();
        // suppress metadata to minimize the amount of data loaded from SharePoint
        headers.append("accept", "application/json;odata.metadata=none");
        // if no search query has been specified, retrieve people whose last name begins with the
        // specified letter. if a search query has been specified, escape any ' (single quotes)
        // by replacing them with two '' (single quotes). Without this, the search query would fail
        var query = searchQuery === null ? "LastName:" + index + "*" : searchQuery.replace(/'/g, "''");
        // retrieve information about people using SharePoint People Search
        // sort results ascending by the last name
        this.props.spHttpClient
            .get(this.props.webUrl + "/_api/search/query?querytext='" + query + "'&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,WorkPhone,MobilePhone,JobTitle,Department,Skills,PastProjects'&sortlist='LastName:ascending'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500", sp_http_1.SPHttpClient.configurations.v1, {
            headers: headers
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (res) {
            if (res.error) {
                // There was an error loading information about people.
                // Notify the user that loading data is finished and return the
                // error message that occurred
                _this.setState({
                    loading: false,
                    errorMessage: res.error.message
                });
                return;
            }
            if (res.PrimaryQueryResult.RelevantResults.TotalRows == 0) {
                // No results were found. Notify the user that loading data is finished
                _this.setState({
                    loading: false
                });
                return;
            }
            // convert the SharePoint People Search results to an array of people
            var people = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(function (r) {
                return {
                    name: _this._getValueFromSearchResult('PreferredName', r.Cells),
                    firstName: _this._getValueFromSearchResult('FirstName', r.Cells),
                    lastName: _this._getValueFromSearchResult('LastName', r.Cells),
                    phone: _this._getValueFromSearchResult('WorkPhone', r.Cells),
                    mobile: _this._getValueFromSearchResult('MobilePhone', r.Cells),
                    email: _this._getValueFromSearchResult('WorkEmail', r.Cells),
                    //photoUrl: this._getValueFromSearchResult('PictureURL', r.Cells),
                    photoUrl: "" + ("/_layouts/15/userphoto.aspx?size=L&accountname=" + _this._getValueFromSearchResult('WorkEmail', r.Cells)),
                    function: _this._getValueFromSearchResult('JobTitle', r.Cells),
                    department: _this._getValueFromSearchResult('Department', r.Cells),
                    skills: _this._getValueFromSearchResult('Skills', r.Cells),
                    projects: _this._getValueFromSearchResult('PastProjects', r.Cells)
                };
            });
            var selectedIndex = _this.state.selectedIndex;
            if (_this.state.searchQuery === '') {
                // An Index is used to search people.
                //Reduce the people collection if the first letter of the lastName of the person is not equal to the selected index
                people = people.reduce(function (result, person) {
                    if (person.lastName && person.lastName.indexOf(selectedIndex) === 0) {
                        result.push(person);
                    }
                    return result;
                }, []);
            }
            if (people.length > 0) {
                // notify the user that loading the data is finished and return the loaded information
                _this.setState({
                    loading: false,
                    people: people
                });
            }
            else {
                // People collection could be reduced to zero, so no results
                _this.setState({
                    loading: false
                });
                return;
            }
        }, function (error) {
            // An error has occurred while loading the data. Notify the user
            // that loading data is finished and return the error message.
            _this.setState({
                loading: false,
                errorMessage: error
            });
        })
            .catch(function (error) {
            // An exception has occurred while loading the data. Notify the user
            // that loading data is finished and return the exception.
            _this.setState({
                loading: false,
                errorMessage: error
            });
        });
    };
    /**
     * Retrieves the value of the particular managed property for the current search result.
     * If the property is not found, returns an empty string.
     * @param key Name of the managed property to retrieve from the search result
     * @param cells The array of cells for the current search result
     */
    PeopleDirectory.prototype._getValueFromSearchResult = function (key, cells) {
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].Key === key) {
                return cells[i].Value;
            }
        }
        return '';
    };
    PeopleDirectory.prototype.componentDidMount = function () {
        // load information about people after the component has been
        // initiated on the page
        this._loadPeopleInfo(this.state.selectedIndex, null);
    };
    PeopleDirectory.prototype.render = function () {
        var _a = this.state, loading = _a.loading, errorMessage = _a.errorMessage, selectedIndex = _a.selectedIndex, searchQuery = _a.searchQuery, people = _a.people;
        return (React.createElement("div", { className: PeopleDirectory_module_scss_1.default.peopleDirectory },
            !loading &&
                errorMessage &&
                // if the component is not loading data anymore and an error message
                // has been returned, display the error message to the user
                React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error, isMultiline: false },
                    strings.ErrorLabel,
                    ": ",
                    errorMessage),
            React.createElement(WebPartTitle_1.WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.onTitleUpdate }),
            React.createElement(IndexNavigation_1.IndexNavigation, { selectedIndex: selectedIndex, searchQuery: searchQuery, onIndexSelect: this._handleIndexSelect, onSearch: this._handleSearch, onSearchClear: this._handleSearchClear, locale: this.props.locale }),
            loading &&
                // if the component is loading its data, show the spinner
                React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: strings.LoadingSpinnerLabel }),
            !loading &&
                !errorMessage &&
                // if the component is not loading data anymore and no errors have occurred
                // render the list of retrieved people
                React.createElement(PeopleList_1.PeopleList, { selectedIndex: selectedIndex, hasSearchQuery: searchQuery !== '', people: people })));
    };
    return PeopleDirectory;
}(React.Component));
exports.PeopleDirectory = PeopleDirectory;



/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(77);
var styles = {
    peopleDirectory: 'peopleDirectory_18da212d',
    container: 'container_18da212d',
    row: 'row_18da212d',
    column: 'column_18da212d',
    'ms-Grid': 'ms-Grid_18da212d',
    title: 'title_18da212d',
    subTitle: 'subTitle_18da212d',
    description: 'description_18da212d',
    button: 'button_18da212d',
    label: 'label_18da212d',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(78);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".peopleDirectory_18da212d .container_18da212d{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.peopleDirectory_18da212d .row_18da212d{margin:0 -8px;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:\"[theme:themeDark, default: #005a9e]\";padding:20px}.peopleDirectory_18da212d .row_18da212d:after,.peopleDirectory_18da212d .row_18da212d:before{display:table;content:\"\";line-height:0}.peopleDirectory_18da212d .row_18da212d:after{clear:both}.peopleDirectory_18da212d .column_18da212d{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .peopleDirectory_18da212d .column_18da212d{float:left}[dir=rtl] .peopleDirectory_18da212d .column_18da212d{float:right}.peopleDirectory_18da212d .column_18da212d .ms-Grid_18da212d{padding:0}@media (min-width:640px){.peopleDirectory_18da212d .column_18da212d{width:83.33333333333334%}}@media (min-width:1024px){.peopleDirectory_18da212d .column_18da212d{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .peopleDirectory_18da212d .column_18da212d{left:16.66667%}[dir=rtl] .peopleDirectory_18da212d .column_18da212d{right:16.66667%}}@media (min-width:640px){[dir=ltr] .peopleDirectory_18da212d .column_18da212d{left:8.33333%}[dir=rtl] .peopleDirectory_18da212d .column_18da212d{right:8.33333%}}.peopleDirectory_18da212d .title_18da212d{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\"}.peopleDirectory_18da212d .description_18da212d,.peopleDirectory_18da212d .subTitle_18da212d{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.peopleDirectory_18da212d .button_18da212d{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d7]\";border-color:\"[theme:themePrimary, default: #0078d7]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.peopleDirectory_18da212d .button_18da212d .label_18da212d{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Spinner_Props_1 = __webpack_require__(46);
var stylesImport = __webpack_require__(124);
var styles = stylesImport;
var Spinner = /** @class */ (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, type = _a.type, size = _a.size, label = _a.label, className = _a.className, ariaLive = _a.ariaLive, ariaLabel = _a.ariaLabel; // TODO remove deprecated type property at >= 2.0.0
        var statusMessage = ariaLabel || label;
        return (React.createElement("div", { className: Utilities_1.css('ms-Spinner', styles.root, className) },
            React.createElement("div", { className: Utilities_1.css('ms-Spinner-circle', styles.circle, (_b = {},
                    _b['ms-Spinner--xSmall ' + styles.circleIsXSmall] = size === Spinner_Props_1.SpinnerSize.xSmall,
                    _b['ms-Spinner--small ' + styles.circleIsSmall] = size === Spinner_Props_1.SpinnerSize.small,
                    _b['ms-Spinner--medium ' + styles.circleIsMedium] = size === Spinner_Props_1.SpinnerSize.medium,
                    _b['ms-Spinner--large ' + styles.circleIsLarge] = size === Spinner_Props_1.SpinnerSize.large,
                    _b['ms-Spinner--normal ' + styles.circleIsTypeMedium] = type === Spinner_Props_1.SpinnerType.normal,
                    _b['ms-Spinner--large ' + styles.circleIsTypeLarge] = type === Spinner_Props_1.SpinnerType.large // TODO remove deprecated value at >= 2.0.0
                ,
                    _b)) }),
            label && React.createElement("div", { className: Utilities_1.css('ms-Spinner-label', styles.label) }, label),
            statusMessage &&
                React.createElement("div", { role: 'status', "aria-live": ariaLive },
                    React.createElement(Utilities_1.DelayedRender, null,
                        React.createElement("div", { className: styles.screenReaderOnly }, statusMessage)))));
        var _b;
    };
    Spinner.defaultProps = {
        size: Spinner_Props_1.SpinnerSize.medium,
        ariaLive: 'polite'
    };
    return Spinner;
}(Utilities_1.BaseComponent));
exports.Spinner = Spinner;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(105), exports);
tslib_1.__exportStar(__webpack_require__(106), exports);
tslib_1.__exportStar(__webpack_require__(107), exports);
tslib_1.__exportStar(__webpack_require__(108), exports);
tslib_1.__exportStar(__webpack_require__(109), exports);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(111), exports);
tslib_1.__exportStar(__webpack_require__(112), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(113), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(115), exports);
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(117), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);
tslib_1.__exportStar(__webpack_require__(120), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(122), exports);
tslib_1.__exportStar(__webpack_require__(123), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(12);
var scroll_1 = __webpack_require__(35);
var dom_1 = __webpack_require__(6);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styleToClassName_1 = __webpack_require__(13);
var extractStyleParts_1 = __webpack_require__(37);
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(objects));
    }
    return classes.join(' ');
}
exports.mergeStyles = mergeStyles;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabRules = kebabRules;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getVendorSettings_1 = __webpack_require__(88);
var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = (NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1) ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}
exports.provideUnits = provideUnits;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extractStyleParts_1 = __webpack_require__(37);
var concatStyleSets_1 = __webpack_require__(38);
var styleToClassName_1 = __webpack_require__(13);
/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = {};
    var classMap = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = concatStyleSets_1.concatStyleSets.apply(void 0, cssSets);
        }
        var registrations = [];
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                var args = cssSet[prop];
                // tslint:disable-next-line:no-any
                var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
                var registration = styleToClassName_1.styleToRegistration({ displayName: prop }, objects);
                registrations.push(registration);
                if (registration) {
                    classMap[prop] = registration.className;
                    classNameSet[prop] = classes.concat([registration.className]).join(' ');
                }
            }
        }
        for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
            var registration = registrations_1[_b];
            if (registration) {
                styleToClassName_1.applyRegistration(registration, classMap);
            }
        }
    }
    return classNameSet;
}
exports.mergeStyleSets = mergeStyleSets;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(7);
var styleToClassName_1 = __webpack_require__(13);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(font) + "}");
}
exports.fontFace = fontFace;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(7);
var styleToClassName_1 = __webpack_require__(13);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}");
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
exports.keyframes = keyframes;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
function initializeDir(window) {
    var win = (window || dom_1.getWindow());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}
exports.initializeDir = initializeDir;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib_1.__extends(Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return React.Children.only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(React.Component));
    return Provider;
}
exports.provideContext = provideContext;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(41);
var BaseComponent_1 = __webpack_require__(39);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib_1.__extends(Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = context.customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
        return {
            customizations: {
                settings: mergeSettings(customizations.settings, props.settings),
                scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            }
        };
    };
    Customizer.contextTypes = {
        customizations: PropTypes.object
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(BaseComponent_1.BaseComponent));
exports.Customizer = Customizer;
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function settingsMergeWith(newSettings) {
    return function (settings) { return newSettings ? tslib_1.__assign({}, newSettings, settings) : settings; };
}
function scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib_1.__assign({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib_1.__assign({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.3
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(42);
var assign = __webpack_require__(98);

var ReactPropTypesSecret = __webpack_require__(43);
var checkPropTypes = __webpack_require__(99);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("dev" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(43);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Const enum for keycodes.
 *
 * @public
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["pauseBreak"] = 19] = "pauseBreak";
    KeyCodes[KeyCodes["capslock"] = 20] = "capslock";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["up"] = 38] = "up";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["zero"] = 48] = "zero";
    KeyCodes[KeyCodes["one"] = 49] = "one";
    KeyCodes[KeyCodes["two"] = 50] = "two";
    KeyCodes[KeyCodes["three"] = 51] = "three";
    KeyCodes[KeyCodes["four"] = 52] = "four";
    KeyCodes[KeyCodes["five"] = 53] = "five";
    KeyCodes[KeyCodes["six"] = 54] = "six";
    KeyCodes[KeyCodes["seven"] = 55] = "seven";
    KeyCodes[KeyCodes["eight"] = 56] = "eight";
    KeyCodes[KeyCodes["nine"] = 57] = "nine";
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["b"] = 66] = "b";
    KeyCodes[KeyCodes["c"] = 67] = "c";
    KeyCodes[KeyCodes["d"] = 68] = "d";
    KeyCodes[KeyCodes["e"] = 69] = "e";
    KeyCodes[KeyCodes["f"] = 70] = "f";
    KeyCodes[KeyCodes["g"] = 71] = "g";
    KeyCodes[KeyCodes["h"] = 72] = "h";
    KeyCodes[KeyCodes["i"] = 73] = "i";
    KeyCodes[KeyCodes["j"] = 74] = "j";
    KeyCodes[KeyCodes["k"] = 75] = "k";
    KeyCodes[KeyCodes["l"] = 76] = "l";
    KeyCodes[KeyCodes["m"] = 77] = "m";
    KeyCodes[KeyCodes["n"] = 78] = "n";
    KeyCodes[KeyCodes["o"] = 79] = "o";
    KeyCodes[KeyCodes["p"] = 80] = "p";
    KeyCodes[KeyCodes["q"] = 81] = "q";
    KeyCodes[KeyCodes["r"] = 82] = "r";
    KeyCodes[KeyCodes["s"] = 83] = "s";
    KeyCodes[KeyCodes["t"] = 84] = "t";
    KeyCodes[KeyCodes["u"] = 85] = "u";
    KeyCodes[KeyCodes["v"] = 86] = "v";
    KeyCodes[KeyCodes["w"] = 87] = "w";
    KeyCodes[KeyCodes["x"] = 88] = "x";
    KeyCodes[KeyCodes["y"] = 89] = "y";
    KeyCodes[KeyCodes["z"] = 90] = "z";
    KeyCodes[KeyCodes["leftWindow"] = 91] = "leftWindow";
    KeyCodes[KeyCodes["rightWindow"] = 92] = "rightWindow";
    KeyCodes[KeyCodes["select"] = 93] = "select";
    KeyCodes[KeyCodes["zero_numpad"] = 96] = "zero_numpad";
    KeyCodes[KeyCodes["one_numpad"] = 97] = "one_numpad";
    KeyCodes[KeyCodes["two_numpad"] = 98] = "two_numpad";
    KeyCodes[KeyCodes["three_numpad"] = 99] = "three_numpad";
    KeyCodes[KeyCodes["four_numpad"] = 100] = "four_numpad";
    KeyCodes[KeyCodes["five_numpad"] = 101] = "five_numpad";
    KeyCodes[KeyCodes["six_numpad"] = 102] = "six_numpad";
    KeyCodes[KeyCodes["seven_numpad"] = 103] = "seven_numpad";
    KeyCodes[KeyCodes["eight_numpad"] = 104] = "eight_numpad";
    KeyCodes[KeyCodes["nine_numpad"] = 105] = "nine_numpad";
    KeyCodes[KeyCodes["multiply"] = 106] = "multiply";
    KeyCodes[KeyCodes["add"] = 107] = "add";
    KeyCodes[KeyCodes["subtract"] = 109] = "subtract";
    KeyCodes[KeyCodes["decimalPoint"] = 110] = "decimalPoint";
    KeyCodes[KeyCodes["divide"] = 111] = "divide";
    KeyCodes[KeyCodes["f1"] = 112] = "f1";
    KeyCodes[KeyCodes["f2"] = 113] = "f2";
    KeyCodes[KeyCodes["f3"] = 114] = "f3";
    KeyCodes[KeyCodes["f4"] = 115] = "f4";
    KeyCodes[KeyCodes["f5"] = 116] = "f5";
    KeyCodes[KeyCodes["f6"] = 117] = "f6";
    KeyCodes[KeyCodes["f7"] = 118] = "f7";
    KeyCodes[KeyCodes["f8"] = 119] = "f8";
    KeyCodes[KeyCodes["f9"] = 120] = "f9";
    KeyCodes[KeyCodes["f10"] = 121] = "f10";
    KeyCodes[KeyCodes["f11"] = 122] = "f11";
    KeyCodes[KeyCodes["f12"] = 123] = "f12";
    KeyCodes[KeyCodes["numlock"] = 144] = "numlock";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["equalSign"] = 187] = "equalSign";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["dash"] = 189] = "dash";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["graveAccent"] = 192] = "graveAccent";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["singleQuote"] = 222] = "singleQuote";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns {boolean} True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
exports.arraysEqual = arraysEqual;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
// tslint:disable-next-line:no-any
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    return function (getStyles, styleProps) { return index_1.mergeStyleSets(getStyles && getStyles(styleProps)); };
}
exports.classNamesFunction = classNamesFunction;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a polyfill for the React.createRef() api.
 * For more info on React.createRef() see the official React documentation
 * on creating and accessing refs.
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 * @see https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}
exports.createRef = createRef;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(41);
var Customizations_1 = __webpack_require__(22);
var hoistStatics_1 = __webpack_require__(44);
function customizable(scope, fields
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = {
                customizations: PropTypes.object
            },
            _a);
        return hoistStatics_1.hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}
exports.customizable = customizable;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Gets the last tabbable element.
 *
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones, false, true);
}
exports.getLastTabbable = getLastTabbable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement ||
        (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && (isElementTabbable(childMatch, true))) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element can receive focus.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            element.getAttribute && element.getAttribute('role') === 'button');
    return checkTabIndex ? (tabIndex !== -1) && result : result;
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = dom_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return dom_1.elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
exports.shouldWrapFocus = shouldWrapFocus;
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = dom_1.getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
exports.focusAsync = focusAsync;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
// tslint:disable-next-line:no-any
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) ||
        (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
exports.fitContentToBounds = fitContentToBounds;
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
exports.calculatePrecision = calculatePrecision;
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value The value that is being rounded.
 * @param precision The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
exports.precisionRound = precisionRound;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = (typeof WeakMap === 'undefined') ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(19);
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = exports.buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = exports.buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(6);
var sessionStorage_1 = __webpack_require__(121);
var rtlifyRules_1 = __webpack_require__(36);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = dom_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            rtlifyRules_1.setRTL(_isRTL);
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    rtlifyRules_1.setRTL(_isRTL);
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var index_1 = __webpack_require__(5);
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets. Example:
 *
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   {
 *     getStyles: props => ({ root: { background: 'red' }})
 *   }
 * );
 * ```
 *
 */
function styled(Component, getBaseStyles, getProps) {
    var Wrapped = (function (componentProps) {
        var styles = componentProps.styles;
        var originalGetStyles = styles && (typeof styles === 'function' ? styles : function () { return styles; }) ||
            componentProps.getStyles;
        var getStyles = function (styleProps) { return index_1.concatStyleSets(getBaseStyles && getBaseStyles(styleProps), componentProps && originalGetStyles && originalGetStyles(styleProps)); };
        var additionalProps = getProps ? getProps(componentProps) : {};
        return (React.createElement(Component, tslib_1.__assign({}, additionalProps, componentProps, { getStyles: getStyles })));
    });
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    return Wrapped;
}
exports.styled = styled;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": "@-webkit-keyframes spinAnimation_15d06488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinAnimation_15d06488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.root_15d06488>.circle_15d06488{margin:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;width:100%;height:100%;border:1.5px solid " }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";border-top-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";-webkit-animation:spinAnimation_15d06488 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67);animation:spinAnimation_15d06488 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67)}.root_15d06488>.circle_15d06488.circleIsXSmall_15d06488{width:12px;height:12px}.root_15d06488>.circle_15d06488.circleIsSmall_15d06488{width:16px;height:16px}.root_15d06488>.circle_15d06488.circleIsTypeMedium_15d06488,.root_15d06488>.circle_15d06488.circleIsMedium_15d06488{width:20px;height:20px}.root_15d06488>.circle_15d06488.circleIsTypeLarge_15d06488,.root_15d06488>.circle_15d06488.circleIsLarge_15d06488{width:28px;height:28px}.root_15d06488 .label_15d06488{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";margin-top:10px;text-align:center}.root_15d06488 .screenReaderOnly_15d06488{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}@media screen and (-ms-high-contrast: active){.root_15d06488>.circle_15d06488{border-top-style:none}}\n" }]);
exports.root = "root_15d06488";
exports.circle = "circle_15d06488";
exports.spinAnimation = "spinAnimation_15d06488";
exports.circleIsXSmall = "circleIsXSmall_15d06488";
exports.circleIsSmall = "circleIsSmall_15d06488";
exports.circleIsTypeMedium = "circleIsTypeMedium_15d06488";
exports.circleIsMedium = "circleIsMedium_15d06488";
exports.circleIsTypeLarge = "circleIsTypeLarge_15d06488";
exports.circleIsLarge = "circleIsLarge_15d06488";
exports.label = "label_15d06488";
exports.screenReaderOnly = "screenReaderOnly_15d06488";


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(126), exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(127), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Button_1 = __webpack_require__(14);
var Icon_1 = __webpack_require__(11);
var MessageBar_Props_1 = __webpack_require__(66);
var stylesImport = __webpack_require__(188);
var styles = stylesImport;
var MessageBar = /** @class */ (function (_super) {
    tslib_1.__extends(MessageBar, _super);
    function MessageBar(props) {
        var _this = _super.call(this, props) || this;
        _this.ICON_MAP = (_a = {},
            _a[MessageBar_Props_1.MessageBarType.info] = 'Info',
            _a[MessageBar_Props_1.MessageBarType.warning] = 'Info',
            _a[MessageBar_Props_1.MessageBarType.error] = 'ErrorBadge',
            _a[MessageBar_Props_1.MessageBarType.blocked] = 'Blocked',
            _a[MessageBar_Props_1.MessageBarType.remove] = 'Blocked',
            _a[MessageBar_Props_1.MessageBarType.severeWarning] = 'Warning',
            _a[MessageBar_Props_1.MessageBarType.success] = 'Completed',
            _a);
        _this.state = {
            labelId: Utilities_1.getId('MessageBar'),
            showContent: false
        };
        return _this;
        var _a;
    }
    MessageBar.prototype.render = function () {
        var isMultiline = this.props.isMultiline;
        return isMultiline ? this._renderMultiLine() : this._renderSingleLine();
    };
    MessageBar.prototype._getActionsDiv = function () {
        if (this.props.actions) {
            return (React.createElement("div", { className: this.props.isMultiline ?
                    ('ms-MessageBar-actions ' + styles.actions) :
                    ('ms-MessageBar-actionsOneline ' + styles.actionsOneline) }, this.props.actions));
        }
        return null;
    };
    MessageBar.prototype._getClassName = function () {
        return Utilities_1.css(this.props.className, 'ms-MessageBar', styles.root, (_a = {},
            _a['ms-MessageBar ' + styles.root] = this.props.messageBarType === MessageBar_Props_1.MessageBarType.info,
            _a['ms-MessageBar--error ' + styles.rootIsError] = this.props.messageBarType === MessageBar_Props_1.MessageBarType.error,
            _a['ms-MessageBar--blocked ' + styles.rootIsBlocked] = (this.props.messageBarType === MessageBar_Props_1.MessageBarType.blocked) ||
                (this.props.messageBarType === MessageBar_Props_1.MessageBarType.remove),
            _a['ms-MessageBar--severeWarning ' + styles.rootIsSevereWarning] = this.props.messageBarType === MessageBar_Props_1.MessageBarType.severeWarning,
            _a['ms-MessageBar--success ' + styles.rootIsSuccess] = this.props.messageBarType === MessageBar_Props_1.MessageBarType.success,
            _a['ms-MessageBar--warning ' + styles.rootIsWarning] = this.props.messageBarType === MessageBar_Props_1.MessageBarType.warning,
            _a));
        var _a;
    };
    MessageBar.prototype._getDismissDiv = function () {
        if (this.props.onDismiss) {
            return (React.createElement(Button_1.IconButton, { disabled: false, className: Utilities_1.css('ms-MessageBar-dismissal', styles.dismissal), onClick: this.props.onDismiss, iconProps: { iconName: 'Cancel' }, ariaLabel: this.props.dismissButtonAriaLabel }));
        }
        return null;
    };
    MessageBar.prototype._getDismissOneLine = function () {
        if (this.props.onDismiss) {
            return (React.createElement("div", { className: Utilities_1.css('ms-MessageBar-dismissOneline', styles.dismissOneline) }, this._getDismissDiv()));
        }
        return null;
    };
    MessageBar.prototype._getIconSpan = function () {
        return (React.createElement("div", { className: Utilities_1.css('ms-MessageBar-icon', styles.icon) },
            React.createElement(Icon_1.Icon, { iconName: this.ICON_MAP[this.props.messageBarType] })));
    };
    MessageBar.prototype._getInnerTextClassName = function () {
        return this.props.onDismiss || this.props.actions ?
            'ms-MessageBar-innerTextPadding ' + styles.innerTextPadding : 'ms-MessageBar-innerText ' + styles.innerText;
    };
    MessageBar.prototype._renderMultiLine = function () {
        return (React.createElement("div", { className: Utilities_1.css(this._getClassName(), 'ms-MessageBar-multiline', styles.multiline, this.props.onDismiss && styles.dismissalMultiline, this.props.actions && styles.actionableMultiline), role: 'status', "aria-live": this._getAnnouncementPriority() },
            React.createElement("div", { className: Utilities_1.css(styles.content, 'ms-MessageBar-content') },
                this._getIconSpan(),
                this._renderInnerText(),
                this._getDismissDiv()),
            this._getActionsDiv()));
    };
    MessageBar.prototype._renderSingleLine = function () {
        return (React.createElement("div", { className: Utilities_1.css(this._getClassName(), 'ms-MessageBar-singleline', styles.singleline, this.props.onDismiss && 'ms-MessageBar-dismissalOneline ' + styles.rootIsOneline, this.props.actions && styles.actionableOneline) },
            React.createElement("div", { className: Utilities_1.css(styles.content, 'ms-MessageBar-content') },
                this._getIconSpan(),
                this._renderInnerText(),
                this._getDismissOneLine()),
            this._getActionsDiv()));
    };
    MessageBar.prototype._renderInnerText = function () {
        return (React.createElement("div", { className: Utilities_1.css('ms-MessageBar-text', styles.text), id: this.state.labelId },
            React.createElement("span", { className: this._getInnerTextClassName(), role: 'status', "aria-live": this._getAnnouncementPriority() },
                React.createElement(Utilities_1.DelayedRender, null,
                    React.createElement("span", null, this.props.children)))));
    };
    MessageBar.prototype._getAnnouncementPriority = function () {
        switch (this.props.messageBarType) {
            case MessageBar_Props_1.MessageBarType.blocked:
            case MessageBar_Props_1.MessageBarType.error:
            case MessageBar_Props_1.MessageBarType.severeWarning:
                return 'assertive';
        }
        return 'polite';
    };
    MessageBar.defaultProps = {
        messageBarType: MessageBar_Props_1.MessageBarType.info,
        onDismiss: undefined,
        isMultiline: true,
    };
    return MessageBar;
}(Utilities_1.BaseComponent));
exports.MessageBar = MessageBar;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(179), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(184), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(186), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(130), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable */
var React = __webpack_require__(2);
/* tslint:enable */
var Icon_Props_1 = __webpack_require__(47);
var Image_1 = __webpack_require__(131);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var Icon_classNames_1 = __webpack_require__(149);
exports.Icon = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, styles = props.styles, iconName = props.iconName;
    var classNames = Icon_classNames_1.getClassNames(styles);
    if (props.iconType === Icon_Props_1.IconType.image || props.iconType === Icon_Props_1.IconType.Image) {
        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', classNames.root, classNames.imageContainer, className);
        return (React.createElement("div", { className: Utilities_1.css(containerClassName, classNames.root) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props.imageProps))));
    }
    else if (typeof iconName === 'string' && iconName.length === 0) {
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon ms-Icon-placeHolder', classNames.rootHasPlaceHolder, props.className) })));
    }
    else {
        var iconDefinition = Styling_1.getIcon(iconName) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true,
            'data-icon-name': iconName,
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon', // dangerous?
            iconDefinition.subset.className, classNames.root, props.className) }), iconDefinition.code));
    }
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Image_Props_1 = __webpack_require__(132);
var Styling_1 = __webpack_require__(3);
var stylesImport = __webpack_require__(148);
var styles = stylesImport;
exports.CoverStyleMap = (_a = {},
    _a[Image_Props_1.ImageCoverStyle.landscape] = 'ms-Image-image--landscape ' + styles.imageIsLandscape,
    _a[Image_Props_1.ImageCoverStyle.portrait] = 'ms-Image-image--portrait ' + styles.imageIsPortrait,
    _a);
exports.ImageFitMap = (_b = {},
    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center ' + styles.imageIsCenter,
    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain ' + styles.imageIsContain,
    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover ' + styles.imageIsCover,
    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none ' + styles.imageIsNone,
    _b);
var KEY_PREFIX = 'fabricImage';
var Image = /** @class */ (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
        _this.state = {
            loadState: Image_Props_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_Props_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    Image.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    Image.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var loaded = loadState === Image_Props_1.ImageLoadState.loaded || (loadState === Image_Props_1.ImageLoadState.notLoaded && this.props.shouldStartVisible);
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: Utilities_1.css('ms-Image', styles.root, className, (_b = {},
                _b['ms-Image--maximizeFrame ' + styles.rootIsMaximizeFrame] = maximizeFrame,
                _b)), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
            React.createElement("img", tslib_1.__assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: Utilities_1.css('ms-Image-image', styles.image, exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], !loaded && 'is-notLoaded', loaded && 'is-loaded ' + styles.imageIsLoaded, shouldFadeIn && 'is-fadeIn', loadState === Image_Props_1.ImageLoadState.error && 'is-error', loaded && shouldFadeIn && !shouldStartVisible && Styling_1.AnimationClassNames.fadeIn400, (_c = {},
                    _c['ms-Image-image--scaleWidth ' + styles.imageIsScaleWidth] = (imageFit === undefined && !!width && !height),
                    _c['ms-Image-image--scaleHeight ' + styles.imageIsScaleHeight] = (imageFit === undefined && !width && !!height),
                    _c['ms-Image-image--scaleWidthHeight ' + styles.imageIsScaleWidthHeight] = (imageFit === undefined && !!width && !!height),
                    _c)), ref: this._resolveRef('_imageElement'), src: src, alt: alt, role: role }))));
        var _b, _c;
    };
    Image.prototype._onImageLoaded = function (ev) {
        var _a = this.props, src = _a.src, onLoad = _a.onLoad;
        if (onLoad) {
            onLoad(ev);
        }
        this._computeCoverStyle(this.props);
        if (src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.loaded
            });
        }
    };
    Image.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_Props_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = src && this._imageElement && (this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0) ||
                (this._imageElement.complete && Image._svgRegex.test(src));
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_Props_1.ImageLoadState.loaded
                });
            }
        }
    };
    Image.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = Image_Props_1.ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
            }
        }
    };
    Image.prototype._onImageError = function (ev) {
        if (this.props.onError) {
            this.props.onError(ev);
        }
        this.setState({
            loadState: Image_Props_1.ImageLoadState.error
        });
    };
    Image.defaultProps = {
        shouldFadeIn: true
    };
    Image._svgRegex = /\.svg$/i;
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageLoaded", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageError", null);
    return Image;
}(Utilities_1.BaseComponent));
exports.Image = Image;
var _a, _b;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle = exports.ImageCoverStyle || (exports.ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(134), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationClassNames_1 = __webpack_require__(135);
exports.AnimationClassNames = AnimationClassNames_1.AnimationClassNames;
var FontClassNames_1 = __webpack_require__(146);
exports.FontClassNames = FontClassNames_1.FontClassNames;
var ColorClassNames_1 = __webpack_require__(147);
exports.ColorClassNames = ColorClassNames_1.ColorClassNames;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(24);
var index_2 = __webpack_require__(15);
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MergeStyles_1 = __webpack_require__(48);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = MergeStyles_1.mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
exports.buildClassMap = buildClassMap;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
var icons_1 = __webpack_require__(49);
var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = icons_1.getIcon(name);
    if (icon) {
        className = index_1.mergeStyles(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}
exports.getIconClassName = getIconClassName;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = index_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = index_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = index_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = index_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
exports.AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return index_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommonStyles_1 = __webpack_require__(52);
var initializeFocusRects_1 = __webpack_require__(21);
var zIndexes_1 = __webpack_require__(53);
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param color - The color for the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position, highContrastStyle) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    if (highContrastStyle === void 0) { highContrastStyle = undefined; }
    return {
        outline: 'transparent',
        position: position,
        selectors: (_a = {
                '::-moz-focus-inner': {
                    border: '0'
                }
            },
            _a["." + initializeFocusRects_1.IsFocusVisibleClassName + " &:focus:after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + theme.palette.white,
                outline: '1px solid ' + theme.palette.neutralSecondary,
                zIndex: zIndexes_1.ZIndexes.FocusStyle,
                selectors: (_b = {},
                    _b[CommonStyles_1.HighContrastSelector] = highContrastStyle,
                    _b)
            },
            _a)
    };
    var _a, _b;
}
exports.getFocusStyle = getFocusStyle;
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}
exports.focusClear = focusClear;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var index_1 = __webpack_require__(5);
var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return tslib_1.__assign({}, _continuousPulseStepOne(beaconColorOne, innerDimension), {
        opacity: 0
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return index_1.keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return index_1.keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _createDefaultAnimation(animationName) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: DEFAULT_DELAY
    };
}
exports.PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation,
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 *
 * @param theme The theme to check the flag on
 * @param classNames The global class names that apply when the flag is false
 */
function getGlobalClassNames(classNames, theme) {
    if (theme.disableGlobalClassNames) {
        return {};
    }
    return classNames;
}
exports.getGlobalClassNames = getGlobalClassNames;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Customizations_1 = __webpack_require__(22);
var DefaultFontStyles_1 = __webpack_require__(50);
var DefaultPalette_1 = __webpack_require__(25);
var load_themed_styles_1 = __webpack_require__(144);
var _theme = {
    palette: DefaultPalette_1.DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette_1.DefaultPalette, false, false),
    fonts: DefaultFontStyles_1.DefaultFontStyles,
    isInverted: false,
    disableGlobalClassNames: false
};
var _onThemeChangeCallbacks = [];
exports.ThemeSettingName = 'theme';
if (!Customizations_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (win &&
        win['FabricConfig'] &&
        win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
exports.registerOnThemeChangeCallback = registerOnThemeChangeCallback;
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
exports.removeOnThemeChangeCallback = removeOnThemeChangeCallback;
/**
 * Applies the theme, while filling in missing slots.
 * @param {object} theme - Partial theme object.
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign({}, _theme.palette, _theme.semanticColors));
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
exports.loadTheme = loadTheme;
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param {object} theme - Partial theme object.
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    var newPalette = tslib_1.__assign({}, DefaultPalette_1.DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = tslib_1.__assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments), theme.semanticColors);
    return {
        palette: newPalette,
        fonts: tslib_1.__assign({}, DefaultFontStyles_1.DefaultFontStyles, theme.fonts),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted,
        disableGlobalClassNames: !!theme.disableGlobalClassNames
    };
}
exports.createTheme = createTheme;
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
    var toReturn = {
        bodyBackground: p.white,
        bodyStandoutBackground: p.neutralLighterAlt,
        bodyFrameBackground: p.white,
        bodyFrameDivider: p.neutralLight,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledSubtext: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLighterAlt,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBackgroundPressed: p.neutralLight,
        buttonBackgroundDisabled: p.neutralLighter,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: p.neutralTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBackgroundDisabled: p.neutralLighter,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        primaryButtonTextDisabled: p.neutralQuaternary,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: p.neutralDark,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        listHeaderBackgroundHovered: p.neutralLighter,
        listHeaderBackgroundPressed: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
        listTextColor: '',
        menuItemBackgroundChecked: p.neutralLight
    };
    return _fixDeprecatedSlots(toReturn, depComments);
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    return s;
}
var _a;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file mimics styles and mixins from _General.Mixins.scss
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};
exports.noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(24);
var index_2 = __webpack_require__(15);
exports.FontClassNames = index_1.buildClassMap(index_2.DefaultFontStyles);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
var DefaultPalette_1 = __webpack_require__(25);
var index_2 = __webpack_require__(15);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = index_2.getTheme().palette[colorName], _a);
            return index_1.mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_b5bfe99c{overflow:hidden}.rootIsMaximizeFrame_b5bfe99c{height:100%;width:100%}.image_b5bfe99c{display:block;opacity:0}.image_b5bfe99c.imageIsLoaded_b5bfe99c{opacity:1}.imageIsCenter_b5bfe99c,.imageIsContain_b5bfe99c,.imageIsCover_b5bfe99c{position:relative;top:50%}[dir='ltr'] .imageIsCenter_b5bfe99c,[dir='ltr'] .imageIsContain_b5bfe99c,[dir='ltr'] .imageIsCover_b5bfe99c{left:50%}[dir='rtl'] .imageIsCenter_b5bfe99c,[dir='rtl'] .imageIsContain_b5bfe99c,[dir='rtl'] .imageIsCover_b5bfe99c{right:50%}html[dir='ltr'] .imageIsCenter_b5bfe99c,html[dir='ltr'] .imageIsContain_b5bfe99c,html[dir='ltr'] .imageIsCover_b5bfe99c{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}html[dir='rtl'] .imageIsCenter_b5bfe99c,html[dir='rtl'] .imageIsContain_b5bfe99c,html[dir='rtl'] .imageIsCover_b5bfe99c{-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}.imageIsContain_b5bfe99c.imageIsLandscape_b5bfe99c{width:100%;height:auto}.imageIsContain_b5bfe99c.imageIsPortrait_b5bfe99c{height:100%;width:auto}.imageIsCover_b5bfe99c.imageIsLandscape_b5bfe99c{height:100%;width:auto}.imageIsCover_b5bfe99c.imageIsPortrait_b5bfe99c{width:100%;height:auto}.imageIsNone_b5bfe99c{height:auto;width:auto}.imageIsScaleWidthHeight_b5bfe99c{height:100%;width:100%}.imageIsScaleWidth_b5bfe99c{height:auto;width:100%}.imageIsScaleHeight_b5bfe99c{height:100%;width:auto}\n" }]);
exports.root = "root_b5bfe99c";
exports.rootIsMaximizeFrame = "rootIsMaximizeFrame_b5bfe99c";
exports.image = "image_b5bfe99c";
exports.imageIsLoaded = "imageIsLoaded_b5bfe99c";
exports.imageIsCenter = "imageIsCenter_b5bfe99c";
exports.imageIsContain = "imageIsContain_b5bfe99c";
exports.imageIsCover = "imageIsCover_b5bfe99c";
exports.imageIsLandscape = "imageIsLandscape_b5bfe99c";
exports.imageIsPortrait = "imageIsPortrait_b5bfe99c";
exports.imageIsNone = "imageIsNone_b5bfe99c";
exports.imageIsScaleWidthHeight = "imageIsScaleWidthHeight_b5bfe99c";
exports.imageIsScaleWidth = "imageIsScaleWidth_b5bfe99c";
exports.imageIsScaleHeight = "imageIsScaleHeight_b5bfe99c";


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
exports.getClassNames = Utilities_1.memoizeFunction(function (customStyles) {
    return Styling_1.mergeStyleSets({
        root: {
            display: 'inline-block'
        },
        rootHasPlaceHolder: {
            width: '1em'
        },
        imageContainer: {
            overflow: 'hidden'
        }
    }, customStyles);
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(152), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var ContextualMenu_Props_1 = __webpack_require__(54);
var FocusZone_1 = __webpack_require__(55);
var ContextualMenu_classNames_1 = __webpack_require__(155);
var Utilities_1 = __webpack_require__(1);
var withResponsiveMode_1 = __webpack_require__(157);
var Callout_1 = __webpack_require__(58);
var Icon_1 = __webpack_require__(11);
var Divider_1 = __webpack_require__(174);
function hasSubmenuItems(item) {
    var submenuItems = getSubmenuItems(item);
    return !!(submenuItems && submenuItems.length);
}
exports.hasSubmenuItems = hasSubmenuItems;
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
exports.getSubmenuItems = getSubmenuItems;
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
exports.canAnyMenuItemsCheck = canAnyMenuItemsCheck;
var ContextualMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenu, _super);
    function ContextualMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Utilities_1.getId('ContextualMenu')
        };
        _this._warnDeprecations({
            'targetPoint': 'target',
            'useTargetPoint': 'target',
        });
        _this._isFocusingPreviousElement = false;
        _this._enterTimerId = 0;
        return _this;
    }
    ContextualMenu_1 = ContextualMenu;
    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev, dismissAll);
        }
    };
    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenu.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenu.prototype.componentDidMount = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        if (this.props.onMenuOpened) {
            this.props.onMenuOpened(this.props);
        }
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenu.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
        }
        this._events.dispose();
        this._async.dispose();
    };
    ContextualMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, arrowDirection = _a.arrowDirection, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, title = _a.title, customStyles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b;
        var menuClassNames = this.props.getMenuClassNames || ContextualMenu_classNames_1.getContextualMenuClassNames;
        this._classNames = menuClassNames(theme, className);
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (!!item.icon || !!item.iconProps) {
                    return true;
                }
                if (item.itemType === ContextualMenu_Props_1.ContextualMenuItemType.Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = this.state.expandedMenuItemKey ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= withResponsiveMode_1.ResponsiveMode.medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if (useTargetWidth && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var contextMenuWidth = targetAsHtmlElement.offsetWidth;
            contextMenuStyle = {
                width: contextMenuWidth
            };
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var indexCorrection_1 = 0;
            var totalItemCount_1 = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== ContextualMenu_Props_1.ContextualMenuItemType.Divider &&
                    item.itemType !== ContextualMenu_Props_1.ContextualMenuItemType.Header) {
                    totalItemCount_1++;
                }
            }
            return (React.createElement(Callout_1.Callout, tslib_1.__assign({}, calloutProps, { target: useTargetPoint ? targetPoint : target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'ms-ContextualMenu-Callout', setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, bounds: bounds, directionalHintFixed: directionalHintFixed }),
                React.createElement("div", { role: 'menu', style: contextMenuStyle, ref: function (host) { return _this._host = host; }, id: id, className: this._classNames.container, tabIndex: 0, onKeyDown: this._onMenuKeyDown },
                    title && React.createElement("div", { className: this._classNames.title, role: 'heading', "aria-level": 1 },
                        " ",
                        title,
                        " "),
                    (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, { className: this._classNames.root, direction: arrowDirection, isCircularNavigation: true },
                        React.createElement("ul", { "aria-label": ariaLabel, "aria-labelledby": labelElementId, className: this._classNames.list, onKeyDown: this._onKeyDown }, items.map(function (item, index) {
                            if (item.itemType === ContextualMenu_Props_1.ContextualMenuItemType.Divider ||
                                item.itemType === ContextualMenu_Props_1.ContextualMenuItemType.Header) {
                                indexCorrection_1++;
                            }
                            return _this._renderMenuItem(item, index, index - indexCorrection_1, totalItemCount_1, hasCheckmarks, hasIcons);
                        })))) : (null),
                    submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu))));
        }
        else {
            return null;
        }
    };
    ContextualMenu.prototype._onRenderSubMenu = function (subMenuProps) {
        return React.createElement(ContextualMenu_1, tslib_1.__assign({}, subMenuProps));
    };
    ContextualMenu.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        var iconProps = this._getIconProps(item);
        // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === ContextualMenu_Props_1.ContextualMenuItemType.Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        var getClassNames = item.getItemClassNames || ContextualMenu_classNames_1.getItemClassNames;
        var itemClassNames = getClassNames(this.props.theme, !!item.disabled, (this.state.expandedMenuItemKey === item.key), !!getIsChecked(item), !!item.href, (iconProps.iconName !== 'None'), item.className, dividerClassName, iconProps.className, subMenuIconClassName);
        if (item.name === '-') {
            item.itemType = ContextualMenu_Props_1.ContextualMenuItemType.Divider;
        }
        switch (item.itemType) {
            case ContextualMenu_Props_1.ContextualMenuItemType.Divider:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                break;
            case ContextualMenu_Props_1.ContextualMenuItemType.Header:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case ContextualMenu_Props_1.ContextualMenuItemType.Section:
                renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenu.prototype._renderSectionItem = function (item, menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var section = item.sectionProps;
        if (!section) {
            return;
        }
        var headerItem;
        if (section.title) {
            var headerContextualMenuItem = {
                key: "section-" + section.title + "-title",
                itemType: ContextualMenu_Props_1.ContextualMenuItemType.Header,
                name: section.title,
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (section.items && section.items.length > 0) {
            return (React.createElement("li", { role: 'presentation', key: section.key },
                React.createElement("div", { role: 'group' },
                    React.createElement("ul", { className: this._classNames.list },
                        section.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem && this._renderListItem(headerItem, item.key || index, menuClassNames, item.title),
                        section.items.map(function (contextualMenuItem, itemsIndex) { return (_this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, section.items.length, hasCheckmarks, hasIcons)); }),
                        section.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenu.prototype._renderListItem = function (content, key, classNames, title) {
        return (React.createElement("li", { role: 'presentation', title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenu.prototype._renderSeparator = function (index, classNames, top, fromSection) {
        if (fromSection || index > 0) {
            return (React.createElement("li", { role: 'separator', key: 'separator-' + index + (top === undefined ? '' : (top ? '-top' : '-bottom')), className: classNames.divider }));
        }
        return null;
    };
    ContextualMenu.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return [item.onRender(item, this.dismiss)];
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && hasSubmenuItems(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenu.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
        return (React.createElement("div", { className: this._classNames.header, style: item.style, role: 'heading', "aria-level": this.props.title ? 2 : 1 }, this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons)));
    };
    ContextualMenu.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        return (React.createElement("div", null,
            React.createElement("a", tslib_1.__assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), { href: item.href, target: item.target, className: classNames.root, role: 'menuitem', "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": item.isDisabled, style: item.style, onClick: this._onAnchorClick.bind(this, item) }), this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons))));
    };
    ContextualMenu.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var _this = this;
        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
        var ariaLabel = '';
        if (item.ariaLabel) {
            ariaLabel = item.ariaLabel;
        }
        else if (item.name) {
            ariaLabel = item.name;
        }
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick.bind(this, item),
            onKeyDown: hasSubmenuItems(item) ? this._onItemKeyDown.bind(this, item) : null,
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseItemLeave.bind(this, item),
            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
            onMouseMove: this._onItemMouseMove.bind(this, item),
            disabled: item.isDisabled || item.disabled,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': hasSubmenuItems(item) || null,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null,
            'aria-expanded': hasSubmenuItems(item) ? item.key === expandedMenuItemKey : null,
            'aria-checked': isChecked,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': item.isDisabled,
            role: item.role || defaultRole,
            style: item.style
        };
        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), itemButtonProperties), this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons));
    };
    ContextualMenu.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        return (React.createElement("div", { "aria-labelledby": item.ariaLabel, "aria-disabled": item.isDisabled || item.disabled, "aria-haspopup": true, "aria-describedby": item.ariaDescription, "aria-checked": item.isChecked || item.checked },
            React.createElement("span", { "aria-hidden": true, className: classNames.splitContainer },
                this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
                this._renderSplitDivider(item),
                this._renderSplitIconButton(item, classNames, index))));
    };
    ContextualMenu.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemProps = {
            onClick: this._executeItemClick.bind(this, item),
            disabled: item.disabled || item.primaryDisabled,
            name: item.name,
            className: classNames.splitPrimary,
            role: item.role || defaultRole,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            icon: item.icon,
            iconProps: item.iconProps
        };
        return React.createElement('button', Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties), this._renderMenuItemChildren(itemProps, classNames, index, hasCheckmarks, hasIcons));
    };
    ContextualMenu.prototype._renderSplitIconButton = function (item, classNames, index) {
        var itemProps = {
            onClick: this._onItemClick.bind(this, item),
            disabled: item.disabled,
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
        };
        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties), {
            onKeyDown: this._onItemKeyDown.bind(this, item)
        }), this._renderMenuItemChildren(itemProps, classNames, index, false, false));
    };
    ContextualMenu.prototype._renderSplitDivider = function (item) {
        var getDividerClassnames = item.getSplitButtonVerticalDividerClassNames || ContextualMenu_classNames_1.getSplitButtonVerticalDividerClassNames;
        return React.createElement(Divider_1.VerticalDivider, { getClassNames: getDividerClassnames });
    };
    ContextualMenu.prototype._renderMenuItemChildren = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var isItemChecked = getIsChecked(item);
        return (React.createElement("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent },
            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, { iconName: isItemChecked === true ? 'CheckMark' : '', className: classNames.checkmarkIcon, onClick: this._onItemClick.bind(this, item) })) : (null),
            (hasIcons) ? (this._renderIcon(item, classNames)) : (null),
            item.name ? (React.createElement("span", { className: classNames.label }, item.name)) : null,
            hasSubmenuItems(item) ? (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: Utilities_1.getRTL() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon }))) : (null)));
    };
    ContextualMenu.prototype._getIconProps = function (item) {
        var iconProps = item.iconProps ? item.iconProps : {
            iconName: item.icon
        };
        return iconProps;
    };
    ContextualMenu.prototype._renderIcon = function (item, classNames) {
        // Only present to allow continued use of item.icon which is deprecated.
        var iconProps = this._getIconProps(item);
        return React.createElement(Icon_1.Icon, tslib_1.__assign({}, iconProps, { className: classNames.icon }));
    };
    ContextualMenu.prototype._onKeyDown = function (ev) {
        var submenuCloseKey = Utilities_1.getRTL() ? 39 /* right */ : 37 /* left */;
        if (ev.which === 27 /* escape */
            || ev.which === 9 /* tab */
            || (ev.which === submenuCloseKey && this.props.isSubMenu && this.props.arrowDirection === FocusZone_1.FocusZoneDirection.vertical)) {
            // When a user presses escape, we will try to refocus the previous focused element.
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
        }
    };
    ContextualMenu.prototype._onMenuKeyDown = function (ev) {
        if (ev.which === 27 /* escape */) {
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
            return;
        }
        if (!this._host) {
            return;
        }
        var elementToFocus = ev.which === 38 /* up */ ?
            Utilities_1.getLastFocusable(this._host, this._host.lastChild, true) :
            ev.which === 40 /* down */ ?
                Utilities_1.getFirstFocusable(this._host, this._host.firstChild, true) :
                null;
        if (elementToFocus) {
            elementToFocus.focus();
        }
    };
    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
        var _this = this;
        var targetElement = ev.currentTarget;
        if (item.key !== this.state.expandedMenuItemKey) {
            if (hasSubmenuItems(item)) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
        targetElement.focus();
    };
    ContextualMenu.prototype._onItemMouseMove = function (item, ev) {
        var _this = this;
        var targetElement = ev.currentTarget;
        if (targetElement === this._targetWindow.document.activeElement) {
            return;
        }
        if (item.key !== this.state.expandedMenuItemKey) {
            if (hasSubmenuItems(item)) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
        targetElement.focus();
    };
    ContextualMenu.prototype._onMouseItemLeave = function (item, ev) {
        this._async.clearTimeout(this._enterTimerId);
        if (item.key === this.state.expandedMenuItemKey && hasSubmenuItems(item)) {
            return;
        }
        this._host.focus();
    };
    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
        if (item.onMouseDown) {
            item.onMouseDown(item, ev);
        }
    };
    ContextualMenu.prototype._onItemClick = function (item, ev) {
        var items = getSubmenuItems(item);
        if (!items || !items.length) {
            this._executeItemClick(item, ev);
        }
        else {
            if (item.key === this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss(ev);
            }
            else {
                this._onItemSubMenuExpand(item, ev.currentTarget);
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
        this._executeItemClick(item, ev);
        ev.stopPropagation();
    };
    ContextualMenu.prototype._executeItemClick = function (item, ev) {
        if (item.onClick) {
            item.onClick(ev, item);
        }
        else if (this.props.onItemClick) {
            this.props.onItemClick(ev, item);
        }
        !ev.defaultPrevented && this.dismiss(ev, true);
    };
    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
        var openKey = Utilities_1.getRTL() ? 37 /* left */ : 39 /* right */;
        if (ev.which === openKey) {
            this._onItemSubMenuExpand(item, ev.currentTarget);
            ev.preventDefault();
        }
    };
    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
        if (this.state.expandedMenuItemKey !== item.key) {
            if (this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss();
            }
            this.setState({
                expandedMenuItemKey: item.key,
                submenuTarget: target
            });
        }
    };
    ContextualMenu.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                directionalHint: Utilities_1.getRTL() ? 8 /* leftTopEdge */ : 11 /* rightTopEdge */,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false
            };
            if (item.subMenuProps) {
                Utilities_1.assign(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenu.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that mathes a given key if any.
     * @param key The key of the item to match
     * @param items The items to look for the key
     */
    ContextualMenu.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === ContextualMenu_Props_1.ContextualMenuItemType.Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
        if (dismissAll) {
            this.dismiss(ev, dismissAll);
        }
        else {
            this.setState({
                dismissedMenuItemKey: this.state.expandedMenuItemKey,
                expandedMenuItemKey: undefined,
                submenuTarget: undefined
            });
        }
    };
    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Utilities_1.getWindow(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Utilities_1.getWindow();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
    ContextualMenu.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        gapSpace: 0,
        directionalHint: 7 /* bottomAutoEdge */,
        beakWidth: 16,
        arrowDirection: FocusZone_1.FocusZoneDirection.vertical,
        getMenuClassNames: ContextualMenu_classNames_1.getContextualMenuClassNames,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onMenuKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onMouseItemLeave", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onSubMenuDismiss", null);
    ContextualMenu = ContextualMenu_1 = tslib_1.__decorate([
        Utilities_1.customizable('ContextualMenu', ['theme']),
        withResponsiveMode_1.withResponsiveMode
    ], ContextualMenu);
    return ContextualMenu;
    var ContextualMenu_1;
}(Utilities_1.BaseComponent));
exports.ContextualMenu = ContextualMenu;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(154), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var FocusZone_Props_1 = __webpack_require__(56);
var Utilities_1 = __webpack_require__(1);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    tslib_1.__extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ rootProps: undefined });
        _this._id = Utilities_1.getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        _allInstances[this._id] = this;
        if (this._root) {
            var windowElement = this._root.ownerDocument.defaultView;
            var parentElement = Utilities_1.getParent(this._root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement &&
                parentElement !== document.body &&
                parentElement.nodeType === 1) {
                if (Utilities_1.isElementFocusZone(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var Tag = this.props.elementType || 'div';
        return (React.createElement(Tag, tslib_1.__assign({ role: 'presentation' }, divProps, rootProps, { className: Utilities_1.css('ms-FocusZone', className), ref: this._resolveRef('_root'), "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root) {
            if (!forceIntoFirstElement && this._root.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root);
                if (ownerZoneElement !== this._root) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root);
                }
                return false;
            }
            else if (this._activeElement && Utilities_1.elementContains(this._root, this._activeElement)
                && Utilities_1.isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.firstChild;
                return this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            return true;
        }
        return false;
    };
    FocusZone.prototype._onFocus = function (ev) {
        var onActiveElementChanged = this.props.onActiveElementChanged;
        if (this._isImmediateDescendantOfZone(ev.target)) {
            this._activeElement = ev.target;
            this._setFocusAlignment(this._activeElement);
        }
        else {
            var parentElement = ev.target;
            while (parentElement && parentElement !== this._root) {
                if (Utilities_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
                    this._activeElement = parentElement;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
        }
        if (onActiveElementChanged) {
            onActiveElementChanged(this._activeElement, ev);
        }
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === 9 /* tab */) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._onMouseDown = function (ev) {
        var disabled = this.props.disabled;
        if (disabled) {
            return;
        }
        var target = ev.target;
        var path = [];
        while (target && target !== this._root) {
            path.push(target);
            target = Utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        }
        while (path.length) {
            target = path.pop();
            if (target && Utilities_1.isElementTabbable(target)) {
                this._setActiveElement(target);
            }
            if (Utilities_1.isElementFocusZone(target)) {
                // Stop here since the focus zone will take care of its own children.
                break;
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Utilities_1.isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
            this._activeElement.focus();
        }
    };
    /**
     * Handle the keystrokes.
     */
    FocusZone.prototype._onKeyDown = function (ev) {
        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
        if (disabled) {
            return;
        }
        if (document.activeElement === this._root && this._isInnerZone) {
            // If this element has focus, it is being controlled by a parent.
            // Ignore the keystroke.
            return;
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(ev);
            if (ev.isDefaultPrevented()) {
                return;
            }
        }
        if (isInnerZoneKeystroke &&
            isInnerZoneKeystroke(ev) &&
            this._isImmediateDescendantOfZone(ev.target)) {
            // Try to focus
            var innerZone = this._getFirstInnerZone();
            if (innerZone) {
                if (!innerZone.focus(true)) {
                    return;
                }
            }
            else if (Utilities_1.isElementFocusSubZone(ev.target)) {
                if (!this.focusElement(Utilities_1.getNextElement(ev.target, ev.target.firstChild, true))) {
                    return;
                }
            }
            else {
                return;
            }
        }
        else if (ev.altKey) {
            return;
        }
        else {
            switch (ev.which) {
                case 32 /* space */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                case 37 /* left */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
                        break;
                    }
                    return;
                case 39 /* right */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
                        break;
                    }
                    return;
                case 38 /* up */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
                        break;
                    }
                    return;
                case 40 /* down */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
                        break;
                    }
                    return;
                case 36 /* home */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, false)) {
                        return false;
                    }
                    var firstChild = this._root.firstChild;
                    if (this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true))) {
                        break;
                    }
                    return;
                case 35 /* end */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, true)) {
                        return false;
                    }
                    var lastChild = this._root.lastChild;
                    if (this.focusElement(Utilities_1.getPreviousElement(this._root, lastChild, true, true, true))) {
                        break;
                    }
                    return;
                case 13 /* enter */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                default:
                    return;
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Utilities_1.EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = Utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root;
        if (Utilities_1.isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Utilities_1.isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
        if (!element) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ?
                Utilities_1.getNextElement(this._root, element) :
                Utilities_1.getPreviousElement(this._root, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation) {
            if (isForward) {
                return this.focusElement(Utilities_1.getNextElement(this._root, this._root.firstElementChild, true));
            }
            else {
                return this.focusElement(Utilities_1.getPreviousElement(this._root, this._root.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.bottom > activeRect.top &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== FocusZone_Props_1.FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.top < activeRect.bottom &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== FocusZone_Props_1.FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + (rect.width / 2);
            var top_1 = rect.top + (rect.height / 2);
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Utilities_1.getParent(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root && parentElement !== document.body) {
            if (Utilities_1.isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element) {
            element = this._root;
            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Utilities_1.isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Utilities_1.isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Utilities_1.isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                        this._activeElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                    this._activeElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        if (element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of lenght and it is forward.
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward)) {
                return false;
            }
        }
        return true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onKeyDown", null);
    return FocusZone;
}(Utilities_1.BaseComponent));
exports.FocusZone = FocusZone;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var ContextualMenu_styles_1 = __webpack_require__(156);
var VerticalDivider_classNames_1 = __webpack_require__(57);
exports.getSplitButtonVerticalDividerClassNames = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors;
    var ContextualMenuDividerColor = semanticColors.bodyDivider;
    return Styling_1.mergeStyleSets(VerticalDivider_classNames_1.getDividerClassNames(theme), {
        divider: {
            height: 16,
            width: 1,
        }
    });
});
exports.getContextualMenuClassNames = Utilities_1.memoizeFunction(function (theme, className) {
    var styles = ContextualMenu_styles_1.getStyles(theme);
    return Styling_1.mergeStyleSets({
        container: [
            'ms-ContextualMenu-container',
            styles.container,
            className,
            [{
                    selectors: {
                        ':focus': { outline: 0 }
                    }
                }]
        ],
        root: [
            'ms-ContextualMenu is-open',
            styles.root
        ],
        list: [
            'ms-ContextualMenu-list is-open',
            styles.list
        ],
        header: [
            'ms-ContextualMenu-header',
            styles.header
        ],
        title: styles.title
    });
});
exports.getItemClassNames = Utilities_1.memoizeFunction(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName) {
    var semanticColors = theme.semanticColors;
    var ContextualMenuIconColor = semanticColors.menuIcon;
    var styles = ContextualMenu_styles_1.getMenuItemStyles(theme);
    return Styling_1.mergeStyleSets({
        item: [
            'ms-ContextualMenu-item',
            styles.item,
            itemClassName,
        ],
        divider: [
            'ms-ContextualMenu-divider',
            styles.divider,
            dividerClassName,
        ],
        root: [
            'ms-ContextualMenu-link',
            styles.root,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            isAnchorLink && styles.anchorLink,
            expanded && [
                'is-expanded',
                styles.rootExpanded
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !expanded && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }],
        ],
        splitPrimary: [
            styles.root,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !checked && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }]
        ],
        splitMenu: [
            styles.root,
            {
                width: 32
            },
            expanded && [
                'is-expanded',
                styles.rootExpanded
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !expanded && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }]
        ],
        linkContent: [
            'ms-ContextualMenu-linkContent',
            styles.linkContent
        ],
        linkContentMenu: [
            'ms-ContextualMenu-linkContent',
            styles.linkContent,
            {
                justifyContent: 'center',
            }
        ],
        icon: [
            'ms-ContextualMenu-icon',
            knownIcon && 'ms-ContextualMenu-iconColor ' && styles.iconColor,
            styles.icon,
            iconClassName,
        ],
        checkmarkIcon: [
            'ms-ContextualMenu-checkmarkIcon',
            knownIcon && 'ms-ContextualMenu-checkmarkIcon ' && styles.checkmarkIcon,
            styles.icon,
            iconClassName,
        ],
        subMenuIcon: [
            'ms-ContextualMenu-submenuIcon',
            styles.subMenuIcon,
            subMenuClassName,
        ],
        label: [
            'ms-ContextualMenu-itemText',
            styles.label
        ],
        splitContainer: styles.splitButtonFlexContainer,
    });
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var MS_HIGHCONTRAST_ACTIVE = '@media screen and (-ms-high-contrast: active)';
var ContextualMenuItemHeight = '32px';
var getItemHighContrastStyles = Utilities_1.memoizeFunction(function () {
    return {
        selectors: (_a = {},
            _a[MS_HIGHCONTRAST_ACTIVE] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none'
            },
            _a),
    };
    var _a;
});
exports.getMenuItemStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box',
            }
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: semanticColors.bodyDivider,
            position: 'relative'
        },
        root: [
            Styling_1.getFocusStyle(theme),
            {
                font: 'inherit',
                color: 'inherit',
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 6px',
                textAlign: 'left',
            },
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
        },
        rootHovered: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootFocused: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootChecked: tslib_1.__assign({}, getItemHighContrastStyles()),
        rootPressed: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundSelectedColor }, getItemHighContrastStyles()),
        rootExpanded: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked, fontWeight: Styling_1.FontWeights.semibold }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%'
        },
        anchorLink: {
            padding: '0px 6px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box'
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: ContextualMenuItemHeight,
            width: '14px',
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0',
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_a = {},
                _a[MS_HIGHCONTRAST_ACTIVE] = {
                    color: 'HighlightText',
                },
                _a)
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_b = {},
                _b[MS_HIGHCONTRAST_ACTIVE] = {
                    color: 'HighlightText',
                },
                _b)
        },
        subMenuIcon: {
            height: ContextualMenuItemHeight,
            lineHeight: ContextualMenuItemHeight,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: Styling_1.FontSizes.mini
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: ContextualMenuItemHeight,
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        splitButtonSeparator: {}
    };
    return Styling_1.concatStyleSets(menuItemStyles);
    var _a, _b;
});
exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuBackground = semanticColors.bodyBackground;
    var ContextualMenuHeaderColor = semanticColors.menuHeader;
    var styles = {
        root: {
            backgroundColor: ContextualMenuBackground,
            minWidth: '180px',
        },
        container: {},
        list: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            lineHeight: '0',
        },
        title: {
            fontSize: '16px',
            paddingRight: '14px',
            paddingLeft: '14px',
            paddingBottom: '5px',
            paddingTop: '5px',
            backgroundColor: theme.palette.neutralLight
        },
        header: [
            fonts.small,
            {
                fontWeight: Styling_1.FontWeights.semibold,
                color: ContextualMenuHeaderColor,
                background: 'none',
                border: 'none',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left',
            }
        ],
    };
    return Styling_1.concatStyleSets(styles);
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseDecorator_1 = __webpack_require__(158);
var Utilities_1 = __webpack_require__(1);
var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
})(ResponsiveMode = exports.ResponsiveMode || (exports.ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [
    479,
    639,
    1023,
    1365,
    1919,
    99999999
];
var _defaultMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
exports.setResponsiveMode = setResponsiveMode;
function withResponsiveMode(ComposedComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithResponsiveMode, _super);
        function WithResponsiveMode() {
            var _this = _super.call(this) || this;
            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
            _this.state = {
                responsiveMode: _this._getResponsiveMode()
            };
            return _this;
        }
        WithResponsiveMode.prototype.componentDidMount = function () {
            var _this = this;
            this._events.on(window, 'resize', function () {
                var responsiveMode = _this._getResponsiveMode();
                if (responsiveMode !== _this.state.responsiveMode) {
                    _this.setState({
                        responsiveMode: responsiveMode
                    });
                }
            });
        };
        WithResponsiveMode.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithResponsiveMode.prototype.render = function () {
            var responsiveMode = this.state.responsiveMode;
            return (React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
        };
        WithResponsiveMode.prototype._getResponsiveMode = function () {
            var responsiveMode = ResponsiveMode.small;
            var win = Utilities_1.getWindow();
            if (typeof win !== 'undefined') {
                try {
                    while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                        responsiveMode++;
                    }
                }
                catch (e) {
                    // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
                    responsiveMode = ResponsiveMode.large;
                }
            }
            else {
                if (_defaultMode !== undefined) {
                    responsiveMode = _defaultMode;
                }
                else {
                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                        'Call setResponsiveMode to define what the responsive mode is.');
                }
            }
            return responsiveMode;
        };
        return WithResponsiveMode;
    }(BaseDecorator_1.BaseDecorator));
}
exports.withResponsiveMode = withResponsiveMode;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var BaseDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDecorator, _super);
    function BaseDecorator() {
        var _this = _super.call(this) || this;
        _this._shouldUpdateComponentRef = false;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Utilities_1.hoistMethods(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Utilities_1.unhoistMethods(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(Utilities_1.BaseComponent));
exports.BaseDecorator = BaseDecorator;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(160), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var CalloutContent_1 = __webpack_require__(161);
var Layer_1 = __webpack_require__(166);
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            'targetPoint': 'target',
            'useTargetPoint': 'target',
        });
        return _this;
    }
    Callout.prototype.render = function () {
        var content = (React.createElement(CalloutContent_1.CalloutContent, tslib_1.__assign({}, this.props)));
        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, null, content));
    };
    return Callout;
}(Utilities_1.BaseComponent));
exports.Callout = Callout;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var positioning_1 = __webpack_require__(162);
var Popup_1 = __webpack_require__(59);
var stylesImport = __webpack_require__(165);
var Styling_1 = __webpack_require__(3);
var styles = stylesImport;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
var OFF_SCREEN_STYLE = { opacity: 0 };
var BORDER_WIDTH = 1;
var CalloutContent = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutContent, _super);
    function CalloutContent(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ 'beakStyle': 'beakWidth' });
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContent.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updateAsyncPosition();
    };
    CalloutContent.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContent.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof (newTarget) === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
    };
    CalloutContent.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    CalloutContent.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, target = _a.target, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, finalHeight = _a.finalHeight, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight;
        target = this._getTarget();
        var positions = this.state.positions;
        var beakStyleWidth = beakWidth;
        // This is here to support the old way of setting the beak size until version 1.0.0.
        // beakStyle is now deprecated and will be be removed at version 1.0.0
        if (beakStyle === 'ms-Callout-smallbeak') {
            beakStyleWidth = 16;
        }
        var beakReactStyle = tslib_1.__assign({}, (positions && positions.beakPosition ? positions.beakPosition.position : null));
        beakReactStyle.height = beakStyleWidth;
        beakReactStyle.width = beakStyleWidth;
        beakReactStyle.backgroundColor = backgroundColor;
        if (!beakReactStyle.top && !beakReactStyle.bottom && !beakReactStyle.left && !beakReactStyle.right) {
            beakReactStyle.left = BEAK_ORIGIN_POSITION.left;
            beakReactStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        var directionalClassName = (positions && positions.directionalClassName)
            ? Styling_1.AnimationClassNames[positions.directionalClassName]
            : '';
        var getContentMaxHeight = this._getMaxHeight() + this.state.heightOffset;
        var contentMaxHeight = calloutMaxHeight && (calloutMaxHeight < getContentMaxHeight) ? calloutMaxHeight : getContentMaxHeight;
        var beakVisible = isBeakVisible && (!!target);
        var content = (React.createElement("div", { ref: this._resolveRef('_hostElement'), className: Utilities_1.css('ms-Callout-container', styles.container) },
            React.createElement("div", { className: Styling_1.mergeStyles('ms-Callout', styles.root, className, directionalClassName, !!calloutWidth && { width: calloutWidth }), style: positions ? positions.calloutPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._resolveRef('_calloutElement') },
                beakVisible && (React.createElement("div", { className: Utilities_1.css('ms-Callout-beak', styles.beak), style: beakReactStyle })),
                beakVisible &&
                    (React.createElement("div", { className: Utilities_1.css('ms-Callout-beakCurtain', styles.beakCurtain) })),
                React.createElement(Popup_1.Popup, { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: Utilities_1.css('ms-Callout-main', styles.main, (_b = {},
                        _b[styles.overFlowYHidden] = !!finalHeight,
                        _b)), onDismiss: this.dismiss, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight, backgroundColor: backgroundColor } }, children))));
        return content;
        var _b;
    };
    CalloutContent.prototype.dismiss = function (ev) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev);
        }
    };
    CalloutContent.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement && !Utilities_1.elementContains(this._hostElement, target);
        if ((!this._target && clickedOutsideCallout) ||
            ev.target !== this._targetWindow &&
                clickedOutsideCallout &&
                (this._target.stopPropagation ||
                    (!this._target || (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
            this.dismiss(ev);
        }
    };
    CalloutContent.prototype._setInitialFocus = function () {
        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
            this._didSetInitialFocus = true;
            Utilities_1.focusFirstChild(this._calloutElement);
        }
    };
    CalloutContent.prototype._onComponentDidMount = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
            _this._events.on(_this._targetWindow.document.body, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow.document.body, 'click', _this._dismissOnLostFocus, true);
        }, 0);
        if (this.props.onLayerMounted) {
            this.props.onLayerMounted();
        }
        this._updateAsyncPosition();
        this._setHeightOffsetEveryFrame();
    };
    CalloutContent.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    CalloutContent.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement;
        var calloutElement = this._calloutElement;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = Utilities_1.assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            var newPositions = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions)
                    && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else {
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned();
                }
            }
        }
    };
    CalloutContent.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    CalloutContent.prototype._getMaxHeight = function () {
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                this._maxHeight = positioning_1.getMaxHeight(this._target, this.props.directionalHint, beakWidth + gapSpace, this._getBounds());
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContent.prototype._arePositionsEqual = function (positions, newPosition) {
        return this._comparePositions(positions.calloutPosition, newPosition.calloutPosition) &&
            this._comparePositions(positions.beakPosition.position, newPosition.beakPosition.position);
    };
    CalloutContent.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Utilities_1.getWindow(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Utilities_1.getWindow();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    CalloutContent.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.lastChild;
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    CalloutContent.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var useTargetPoint = props.useTargetPoint, targetPoint = props.targetPoint, target = props.target;
        return useTargetPoint ? targetPoint : target;
    };
    CalloutContent.defaultProps = {
        preventDismissOnScroll: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: 7 /* bottomAutoEdge */
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "_setInitialFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "_onComponentDidMount", null);
    return CalloutContent;
}(Utilities_1.BaseComponent));
exports.CalloutContent = CalloutContent;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge = exports.RectangleEdge || (exports.RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position = exports.Position || (exports.Position = {}));
var SLIDE_ANIMATIONS = (_a = {},
    _a[RectangleEdge.top] = 'slideUpIn20',
    _a[RectangleEdge.bottom] = 'slideDownIn20',
    _a[RectangleEdge.left] = 'slideLeftIn20',
    _a[RectangleEdge.right] = 'slideRightIn20',
    _a);
var Rectangle = /** @class */ (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Utilities_1.Rectangle));
exports.Rectangle = Rectangle;
function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_b = {},
    _b[0 /* topLeftEdge */] = _createPositionData(RectangleEdge.top, RectangleEdge.left),
    _b[1 /* topCenter */] = _createPositionData(RectangleEdge.top),
    _b[2 /* topRightEdge */] = _createPositionData(RectangleEdge.top, RectangleEdge.right),
    _b[3 /* topAutoEdge */] = _createPositionData(RectangleEdge.top, undefined, true),
    _b[4 /* bottomLeftEdge */] = _createPositionData(RectangleEdge.bottom, RectangleEdge.left),
    _b[5 /* bottomCenter */] = _createPositionData(RectangleEdge.bottom),
    _b[6 /* bottomRightEdge */] = _createPositionData(RectangleEdge.bottom, RectangleEdge.right),
    _b[7 /* bottomAutoEdge */] = _createPositionData(RectangleEdge.bottom, undefined, true),
    _b[8 /* leftTopEdge */] = _createPositionData(RectangleEdge.left, RectangleEdge.top),
    _b[9 /* leftCenter */] = _createPositionData(RectangleEdge.left),
    _b[10 /* leftBottomEdge */] = _createPositionData(RectangleEdge.left, RectangleEdge.bottom),
    _b[11 /* rightTopEdge */] = _createPositionData(RectangleEdge.right, RectangleEdge.top),
    _b[12 /* rightCenter */] = _createPositionData(RectangleEdge.right),
    _b[13 /* rightBottomEdge */] = _createPositionData(RectangleEdge.right, RectangleEdge.bottom),
    _b);
var positioningFunctions;
(function (positioningFunctions) {
    function _isRectangleWithinBounds(rect, boundingRect) {
        if (rect.top < boundingRect.top) {
            return false;
        }
        if (rect.bottom > boundingRect.bottom) {
            return false;
        }
        if (rect.left < boundingRect.left) {
            return false;
        }
        if (rect.right > boundingRect.right) {
            return false;
        }
        return true;
    }
    /**
     * Gets all of the edges of a rectangle that are outside of the given bounds.
     * If there are no out of bounds edges it returns an empty array.
     */
    function _getOutOfBoundsEdges(rect, boundingRect) {
        var outOfBounds = new Array();
        if (rect.top < boundingRect.top) {
            outOfBounds.push(RectangleEdge.top);
        }
        if (rect.bottom > boundingRect.bottom) {
            outOfBounds.push(RectangleEdge.bottom);
        }
        if (rect.left < boundingRect.left) {
            outOfBounds.push(RectangleEdge.left);
        }
        if (rect.right > boundingRect.right) {
            outOfBounds.push(RectangleEdge.right);
        }
        return outOfBounds;
    }
    function _getEdgeValue(rect, edge) {
        return rect[RectangleEdge[edge]];
    }
    function _setEdgeValue(rect, edge, value) {
        rect[RectangleEdge[edge]] = value;
        return rect;
    }
    /**
     * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
     * the itself already contains the other coordinate.
     * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @returns {number}
     */
    function _getCenterValue(rect, edge) {
        var edges = _getFlankingEdges(edge);
        return (_getEdgeValue(rect, edges.firstEdge) + _getEdgeValue(rect, edges.secondEdge)) / 2;
    }
    /**
     * Flips the value depending on the edge.
     * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
     * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
     * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
     * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
     * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
     * If top edge 1 is less than edge 2 then it is out of bounds.
     *
     *
     * @param {RectangleEdge} edge
     * @param {number} value
     * @returns {number}
     */
    function _getRelativeEdgeValue(edge, value) {
        if (edge > 0) {
            return value;
        }
        else {
            return value * -1;
        }
    }
    function _getRelativeRectEdgeValue(edge, rect) {
        return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
    }
    function _getRelativeEdgeDifference(rect, hostRect, edge) {
        var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
        return _getRelativeEdgeValue(edge, edgeDifference);
    }
    /**
     * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
     * For example, if it's a bottom edge it will only change y coordinates.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @param {number} newValue
     * @returns {Rectangle}
     */
    function _moveEdge(rect, edge, newValue) {
        var difference = _getEdgeValue(rect, edge) - newValue;
        rect = _setEdgeValue(rect, edge, newValue);
        rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
        return rect;
    }
    /**
     * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {RectangleEdge} edge
     * @param {number} [gap=0]
     * @returns {Rectangle}
     */
    function _alignEdges(rect, target, edge, gap) {
        if (gap === void 0) { gap = 0; }
        return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
    }
    /**
     * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
     * For instance if targetEdge is bottom, then the rects top will be moved to match it.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {RectangleEdge} targetEdge
     * @param {number} [gap=0]
     * @returns {Rectangle}
     */
    function _alignOppositeEdges(rect, target, targetEdge, gap) {
        if (gap === void 0) { gap = 0; }
        var oppositeEdge = targetEdge * -1;
        var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
        return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
    }
    /**
     * Tests to see if the given edge is within the bounds of the given rectangle.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} bounds
     * @param {RectangleEdge} edge
     * @returns {boolean}
     */
    function _isEdgeInBounds(rect, bounds, edge) {
        var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
        // The adjusted value must be reversed to determine if it is within the bounds.
        // Take these two examples:
        // Top is out of bounds with -4 as value. Top is not reversed in _getRelativeRectEdgeValue. -4 * -1 = 4
        // 4 is not less than the bounds of 0, so it must be out of bounds.
        // Bottom is out of bounds with 5 as value, bounds bottom is 4. Bottom is reversed in _getRelaitveRectEdgeValue.
        // Bottom is now -5. Bottom * -1 is now 5. 5 is greater than bounds bottom of 4, so it must be out of bounds.
        return adjustedRectValue * -1 < _getEdgeValue(bounds, edge);
    }
    /**
     * Attempts to move the rectangle through various sides of the target to find a place to fit.
     * If no fit is found, the original position should be returned.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {Rectangle} bounding
     * @param {IPositionData} positionData
     * @param {number} [gap=0]
     * @returns {ICallout}
     */
    function _flipToFit(rect, target, bounding, positionData, gap) {
        if (gap === void 0) { gap = 0; }
        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.bottom, RectangleEdge.top];
        var currentEstimate = rect;
        var currentEdge = positionData.targetEdge;
        var currentAlignment = positionData.alignmentEdge;
        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified callout.
        for (var i = 0; i < 4; i++) {
            if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
                directions.splice(directions.indexOf(currentEdge), 1);
                if (directions.indexOf(currentEdge * -1) > -1) {
                    currentEdge = currentEdge * -1;
                }
                else {
                    currentAlignment = currentEdge;
                    currentEdge = directions.slice(-1)[0];
                }
                currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
            }
            else {
                return {
                    calloutRectangle: currentEstimate,
                    targetEdge: currentEdge,
                    alignmentEdge: currentAlignment
                };
            }
        }
        return {
            calloutRectangle: rect,
            targetEdge: positionData.targetEdge,
            alignmentEdge: currentAlignment
        };
    }
    /**
     * Adjusts a callout rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
     * then the callout will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
     *
     * @param {Rectangle} callout
     * @param {Rectangle} target
     * @param {Rectangle} bounding
     * @param {IPositionData} positionData
     * @param {number} [gap=0]
     * @param {boolean} [directionalHintFixed]
     * @param {boolean} [coverTarget]
     * @returns {ICallout}
     */
    function _adjustFitWithinBounds(callout, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var alignmentEdge = positionData.alignmentEdge;
        var calloutEstimate = {
            calloutRectangle: callout,
            targetEdge: positionData.targetEdge,
            alignmentEdge: alignmentEdge
        };
        if (!directionalHintFixed && !coverTarget) {
            calloutEstimate = _flipToFit(callout, target, bounding, positionData, gap);
        }
        var outOfBounds = _getOutOfBoundsEdges(callout, bounding);
        for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
            var direction = outOfBounds_1[_i];
            calloutEstimate.calloutRectangle = _alignEdges(calloutEstimate.calloutRectangle, bounding, direction);
        }
        return calloutEstimate;
    }
    /**
     * Moves the middle point on an edge to the point given.
     * Only moves in one direction. For instance if a bottom edge is passed in, then
     * the bottom edge will be moved in the x axis to match the point.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @param {number} point
     * @returns
     */
    function centerEdgeToPoint(rect, edge, point) {
        var firstEdge = _getFlankingEdges(edge).firstEdge;
        var calloutMiddle = _getCenterValue(rect, edge);
        var distanceToMiddle = calloutMiddle - _getEdgeValue(rect, firstEdge);
        return _moveEdge(rect, firstEdge, point - distanceToMiddle);
    }
    /**
     * Moves the callout rectangle to be appropriately positioned relative to a given target.
     * Does not flip or adjust the callout.
     *
     * @param {Rectangle} callout
     * @param {Rectangle} target
     * @param {IPositionData} positionData
     * @param {number} [gap=0]
     * @param {boolean} [coverTarget]
     * @returns {Rectangle}
     */
    function _estimatePosition(callout, target, positionData, gap, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var estimatedCalloutPosition;
        var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
        var calloutEdge = coverTarget ? targetEdge : targetEdge * -1;
        estimatedCalloutPosition = coverTarget ? _alignEdges(callout, target, targetEdge, gap) :
            _alignOppositeEdges(callout, target, targetEdge, gap);
        // if no alignment edge is provided it's supposed to be centered.
        if (!alignmentEdge) {
            var targetMiddlePoint = _getCenterValue(target, targetEdge);
            estimatedCalloutPosition = centerEdgeToPoint(estimatedCalloutPosition, calloutEdge, targetMiddlePoint);
        }
        else {
            estimatedCalloutPosition = _alignEdges(estimatedCalloutPosition, target, alignmentEdge);
        }
        return estimatedCalloutPosition;
    }
    /**
     * Returns the non-opposite edges of the target edge.
     * For instance if bottom is passed in then left and right will be returned.
     *
     * @param {RectangleEdge} edge
     * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
     */
    function _getFlankingEdges(edge) {
        if (edge === RectangleEdge.top || edge === RectangleEdge.bottom) {
            return {
                firstEdge: RectangleEdge.left,
                secondEdge: RectangleEdge.right
            };
        }
        else {
            return {
                firstEdge: RectangleEdge.top,
                secondEdge: RectangleEdge.bottom
            };
        }
    }
    /**
     * Finalizes the callout positon based on the hostElement. Only returns the
     * rectangle values to position such that they are anchored to the target.
     * This helps prevent resizing from looking very strange.
     * For instance, if the target edge is top and aligned with the left side then
     * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
     *
     * @param {Rectangle} calloutRectangle
     * @param {HTMLElement} hostElement
     * @param {RectangleEdge} targetEdge
     * @param {RectangleEdge} [alignmentEdge]
     * @returns {IPartialIRectangle}
     */
    function _finalizeCalloutPosition(calloutRectangle, hostElement, targetEdge, alignmentEdge) {
        var returnValue = {};
        var hostRect = _getRectangleFromHTMLElement(hostElement);
        var calloutEdge = targetEdge * -1;
        var calloutEdgeString = RectangleEdge[calloutEdge];
        var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).firstEdge;
        returnValue[calloutEdgeString] = _getRelativeEdgeDifference(calloutRectangle, hostRect, calloutEdge);
        returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(calloutRectangle, hostRect, returnEdge);
        return returnValue;
    }
    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
    // We still want to position the beak based on it's midpoint which does not change. It will
    // be at (beakwidth / 2, beakwidth / 2)
    function _calculateActualBeakWidthInPixels(beakWidth) {
        return Math.sqrt(beakWidth * beakWidth * 2);
    }
    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
    /**
     * Returns the appropriate IPositionData based on the props altered for RTL.
     * If directionalHintForRTL is passed in that is used if the page is RTL.
     * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
     * For instance bottomLeftEdge would become bottomRightEdge.
     * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
     *
     * @param {IPositionProps} props
     * @returns {IPositionData}
     */
    function _getPositionData(directionalHint, directionalHintForRTL) {
        if (directionalHint === void 0) { directionalHint = 7 /* bottomAutoEdge */; }
        var positionInformation = tslib_1.__assign({}, DirectionalDictionary[directionalHint]);
        if (Utilities_1.getRTL()) {
            // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
            positionInformation.alignmentEdge = positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0
                ? positionInformation.alignmentEdge * -1 : undefined;
            return directionalHintForRTL !== undefined ?
                DirectionalDictionary[directionalHintForRTL] :
                positionInformation;
        }
        return positionInformation;
    }
    positioningFunctions._getPositionData = _getPositionData;
    /**
     * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
     * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
     * the center of the page.
     *
     * @param {IPositionData} positionData
     * @param {Rectangle} target
     * @param {Rectangle} boundingRect
     * @param {boolean} [coverTarget]
     * @returns {IPositionData}
     */
    function _getAlignmentData(positionData, target, boundingRect, coverTarget) {
        if (positionData.isAuto) {
            var center = _getCenterValue(target, positionData.targetEdge);
            if (center <= boundingRect.width / 2) {
                positionData.alignmentEdge = RectangleEdge.left;
            }
            else {
                positionData.alignmentEdge = RectangleEdge.right;
            }
        }
        return positionData;
    }
    function _positionCalloutWithinBounds(callout, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        var estimatedCalloutPosition = _estimatePosition(callout, target, positionData, gap, coverTarget);
        if (_isRectangleWithinBounds(estimatedCalloutPosition, bounding)) {
            return {
                calloutRectangle: estimatedCalloutPosition,
                targetEdge: positionData.targetEdge,
                alignmentEdge: positionData.alignmentEdge
            };
        }
        else {
            return _adjustFitWithinBounds(callout, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
        }
    }
    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
    function _positionBeak(beakWidth, callout, target, alignmentEdge) {
        /** Note about beak positioning: The actual beak width only matters for getting the gap between the callout and target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8, then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.*/
        var _a = _getFlankingEdges(callout.targetEdge), firstEdge = _a.firstEdge, secondEdge = _a.secondEdge;
        var beakTargetPoint = _getCenterValue(target, callout.targetEdge);
        // The "host" callout that we will use to help position the beak.
        var actualCallout = new Rectangle(0, callout.calloutRectangle.width, 0, callout.calloutRectangle.height);
        var calloutBounds = new Rectangle(beakWidth / 2, callout.calloutRectangle.width - beakWidth / 2, beakWidth / 2, callout.calloutRectangle.height - beakWidth / 2);
        var beakPositon = new Rectangle(0, beakWidth, 0, beakWidth);
        beakPositon = _moveEdge(beakPositon, (callout.targetEdge * -1), -beakWidth / 2);
        beakPositon = centerEdgeToPoint(beakPositon, callout.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(firstEdge, callout.calloutRectangle));
        if (!_isEdgeInBounds(beakPositon, calloutBounds, firstEdge)) {
            beakPositon = _alignEdges(beakPositon, calloutBounds, firstEdge);
        }
        else if (!_isEdgeInBounds(beakPositon, calloutBounds, secondEdge)) {
            beakPositon = _alignEdges(beakPositon, calloutBounds, secondEdge);
        }
        var targetEdge = callout.targetEdge * -1;
        var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).firstEdge;
        var returnValue = {};
        returnValue[RectangleEdge[targetEdge]] = _getEdgeValue(beakPositon, targetEdge);
        returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(beakPositon, actualCallout, returnEdge);
        return returnValue;
    }
    positioningFunctions._positionBeak = _positionBeak;
    function _getRectangleFromHTMLElement(element) {
        var clientRect = element.getBoundingClientRect();
        return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
    }
    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
    function _getRectangleFromIRect(rect) {
        return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
    }
    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
    function _getTargetRect(bounds, target) {
        var targetRectangle;
        if (target) {
            if (target.preventDefault) {
                var ev = target;
                targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            }
            else if (target.x !== undefined) {
                var point = target;
                targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
            }
            else {
                targetRectangle = _getRectangleFromHTMLElement(target);
            }
            if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
                var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
                for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                    var direction = outOfBounds_2[_i];
                    targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
                }
            }
        }
        else {
            targetRectangle = new Rectangle(0, 0, 0, 0);
        }
        return targetRectangle;
    }
    positioningFunctions._getTargetRect = _getTargetRect;
    /**
     * If max height is less than zero it returns the bounds height instead.
     */
    function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds) {
        var maxHeight = 0;
        switch (targetEdge) {
            case 7 /* bottomAutoEdge */:
            case 5 /* bottomCenter */:
            case 4 /* bottomLeftEdge */:
            case 6 /* bottomRightEdge */:
                maxHeight = bounds.bottom - targetRectangle.bottom - gapSpace;
                break;
            case 3 /* topAutoEdge */:
            case 1 /* topCenter */:
            case 0 /* topLeftEdge */:
            case 2 /* topRightEdge */:
                maxHeight = targetRectangle.top - bounds.top - gapSpace;
                break;
            default:
                maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
                break;
        }
        return maxHeight > 0 ? maxHeight : bounds.height;
    }
    positioningFunctions._getMaxHeightFromTargetRectangle = _getMaxHeightFromTargetRectangle;
    function _getRelativePositions(props, hostElement, calloutElement) {
        var beakWidth = !props.isBeakVisible ? 0 : (props.beakWidth || 0);
        var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
        var boundingRect = props.bounds ?
            _getRectangleFromIRect(props.bounds) :
            new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
        var targetRect = _getTargetRect(boundingRect, props.target);
        var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL), targetRect, boundingRect, props.coverTarget);
        var positionedCallout = _positionCalloutWithinBounds(_getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
        var beakPositioned = _positionBeak(beakWidth, positionedCallout, targetRect, positionedCallout.alignmentEdge);
        var finalizedCallout = _finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement, positionedCallout.targetEdge, positionedCallout.alignmentEdge);
        return {
            calloutPosition: finalizedCallout,
            beakPosition: { position: tslib_1.__assign({}, beakPositioned), display: 'block' },
            directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
            submenuDirection: (positionedCallout.targetEdge * -1) === RectangleEdge.right ? 10 /* leftBottomEdge */ : 13 /* rightBottomEdge */
        };
    }
    positioningFunctions._getRelativePositions = _getRelativePositions;
})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
function getRelativePositions(props, hostElement, calloutElement) {
    return positioningFunctions._getRelativePositions(props, hostElement, calloutElement);
}
exports.getRelativePositions = getRelativePositions;
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds ?
        positioningFunctions._getRectangleFromIRect(bounds) :
        new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = positioningFunctions._getRectangleFromHTMLElement(elementTarget);
    }
    return positioningFunctions._getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle);
}
exports.getMaxHeight = getMaxHeight;
var _a, _b;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(164), exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = /** @class */ (function (_super) {
    tslib_1.__extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Utilities_1.getDocument().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        this._events.on(this.refs.root, 'focus', this._onFocus, true);
        this._events.on(this.refs.root, 'blur', this._onBlur, true);
        if (Utilities_1.doesElementContainFocus(this.refs.root)) {
            this._containsFocus = true;
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
        return (React.createElement("div", tslib_1.__assign({ ref: 'root' }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown }), this.props.children));
    };
    Popup.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case 27 /* escape */:
                if (this.props.onDismiss) {
                    this.props.onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function () {
        this._containsFocus = false;
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Popup.prototype, "_onKeyDown", null);
    return Popup;
}(Utilities_1.BaseComponent));
exports.Popup = Popup;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_169d0784{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}[dir='ltr'] .root_169d0784{-webkit-box-shadow:0 0 5px 0px rgba(0,0,0,0.4);box-shadow:0 0 5px 0px rgba(0,0,0,0.4)}[dir='rtl'] .root_169d0784{-webkit-box-shadow:0 0 5px 0px rgba(0,0,0,0.4);box-shadow:0 0 5px 0px rgba(0,0,0,0.4)}.root_169d0784::-moz-focus-inner{border:0}.root_169d0784{outline:transparent}@media screen and (-ms-high-contrast: active){.root_169d0784{border:1px solid WindowText}}.container_169d0784{position:relative}.main_169d0784{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";overflow-x:hidden;overflow-y:auto;position:relative}.overFlowYHidden_169d0784{overflow-y:hidden}.beak_169d0784{position:absolute;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";-webkit-box-shadow:inherit;box-shadow:inherit;border:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.beakCurtain_169d0784{position:absolute;top:0;right:0;bottom:0;left:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}\n" }]);
exports.root = "root_169d0784";
exports.container = "container_169d0784";
exports.main = "main_169d0784";
exports.overFlowYHidden = "overFlowYHidden_169d0784";
exports.beak = "beak_169d0784";
exports.beakCurtain = "beakCurtain_169d0784";


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(167), exports);


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(173), exports);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(169), exports);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(170), exports);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Fabric_classNames_1 = __webpack_require__(171);
var DIRECTIONAL_KEY_CODES = [
    38 /* up */,
    40 /* down */,
    37 /* left */,
    39 /* right */,
    36 /* home */,
    35 /* end */,
    9 /* tab */,
    33 /* pageUp */,
    34 /* pageDown */
];
// We will track the last focus visibility state so that if we tear down and recreate
// the Fabric component, we will use the last known value as the default.
var _lastIsFocusVisible = false;
// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'ltr');
}
var Fabric = /** @class */ (function (_super) {
    tslib_1.__extends(Fabric, _super);
    function Fabric() {
        var _this = _super.call(this) || this;
        _this.state = {
            isFocusVisible: _lastIsFocusVisible
        };
        return _this;
    }
    Fabric.prototype.componentDidMount = function () {
        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
        this._events.on(document.body, 'keydown', this._onKeyDown, true);
    };
    Fabric.prototype.render = function () {
        var isFocusVisible = this.state.isFocusVisible;
        var className = this.props.className;
        var classNames = Fabric_classNames_1.getClassNames(this.props.theme, className, isFocusVisible);
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: classNames.root, ref: this._resolveRef('_root') })));
    };
    Fabric.prototype._onMouseDown = function () {
        if (this.state.isFocusVisible) {
            this.setState({
                isFocusVisible: false
            });
            _lastIsFocusVisible = false;
        }
    };
    Fabric.prototype._onKeyDown = function (ev) {
        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
            this.setState({
                isFocusVisible: true
            });
            _lastIsFocusVisible = true;
        }
    };
    Fabric = tslib_1.__decorate([
        Utilities_1.customizable('Fabric', ['theme'])
    ], Fabric);
    return Fabric;
}(Utilities_1.BaseComponent));
exports.Fabric = Fabric;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var inheritFont = { fontFamily: 'inherit' };
exports.getClassNames = Utilities_1.memoizeFunction(function (theme, className, isFocusVisible) {
    return {
        root: Styling_1.mergeStyles([
            'ms-Fabric',
            isFocusVisible && 'is-focusVisible',
            className,
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont
                }
            }
        ])
    };
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".rootIsFixed_16bd5f79{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.content_16bd5f79{visibility:visible}\n" }]);
exports.rootIsFixed = "rootIsFixed_16bd5f79";
exports.content = "content_16bd5f79";


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Layer_1 = __webpack_require__(27);
var LayerHost = /** @class */ (function (_super) {
    tslib_1.__extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(Utilities_1.BaseComponent));
exports.LayerHost = LayerHost;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(175), exports);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var VerticalDivider_classNames_1 = __webpack_require__(57);
var Styling_1 = __webpack_require__(3);
exports.VerticalDivider = function (props) {
    var theme = Styling_1.getTheme();
    var classNames = props.getClassNames ? props.getClassNames(theme) : VerticalDivider_classNames_1.getDividerClassNames(theme);
    return (React.createElement("span", { className: classNames.wrapper },
        React.createElement("span", { className: classNames.divider })));
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getClassNames = Utilities_1.memoizeFunction(function (styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var isExpanded = expanded && !isSplit;
    return {
        root: Styling_1.mergeStyles(className, 'ms-Button', variantClassName, styles.root, checked && [
            'is-checked',
            styles.rootChecked
        ], isExpanded && [
            'is-expanded',
            styles.rootExpanded,
            {
                selectors: {
                    ':hover .ms-Button-icon': styles.iconExpandedHovered,
                    ':hover .ms-Button-menuIcon': styles.rootExpandedHovered,
                    ':hover': styles.rootExpandedHovered
                }
            }
        ], disabled && [
            'is-disabled',
            styles.rootDisabled
        ], !disabled && !isExpanded && !checked && {
            selectors: {
                ':hover': styles.rootHovered,
                ':hover .ms-Button-icon': styles.iconHovered,
                ':hover .ms-Button-description': styles.descriptionHovered,
                ':hover .ms-Button-menuIcon': styles.menuIconHovered,
                ':focus': styles.rootFocused,
                ':active': styles.rootPressed,
                ':active .ms-Button-icon': styles.iconPressed,
                ':active .ms-Button-description': styles.descriptionPressed,
                ':active .ms-Button-menuIcon': styles.menuIconPressed
            }
        }, disabled && checked && [
            styles.rootCheckedDisabled
        ], !disabled && checked && {
            selectors: {
                ':hover': styles.rootCheckedHovered,
                ':active': styles.rootCheckedPressed
            }
        }),
        flexContainer: Styling_1.mergeStyles('ms-Button-flexContainer', styles.flexContainer),
        textContainer: Styling_1.mergeStyles('ms-Button-textContainer', styles.textContainer),
        icon: Styling_1.mergeStyles('ms-Button-icon', iconClassName, styles.icon, isExpanded && styles.iconExpanded, checked && styles.iconChecked, disabled && styles.iconDisabled),
        label: Styling_1.mergeStyles('ms-Button-label', styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled),
        menuIcon: Styling_1.mergeStyles('ms-Button-menuIcon', menuIconClassName, styles.menuIcon, checked && styles.menuIconChecked, disabled && styles.menuIconDisabled, !disabled &&
            !isExpanded &&
            !checked && {
            selectors: {
                ':hover': styles.menuIconHovered,
                ':active': styles.menuIconPressed,
            },
        }, isExpanded && [
            'is-expanded',
            styles.menuIconExpanded,
            {
                selectors: {
                    ':hover': styles.menuIconExpandedHovered,
                },
            },
        ]),
        description: Styling_1.mergeStyles('ms-Button-description', styles.description, checked && styles.descriptionChecked, disabled && styles.descriptionDisabled),
        screenReaderText: Styling_1.mergeStyles('ms-Button-screenReaderText', styles.screenReaderText)
    };
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getClassNames = Utilities_1.memoizeFunction(function (styles, disabled, expanded, checked) {
    return {
        root: Styling_1.mergeStyles(styles.splitButtonMenuButton, expanded && [
            styles.splitButtonMenuButtonExpanded
        ], disabled && [
            styles.splitButtonMenuButtonDisabled
        ], checked && !disabled && [
            styles.splitButtonMenuButtonChecked
        ]),
        splitButtonContainer: Styling_1.mergeStyles(styles.splitButtonContainer, disabled && styles.splitButtonContainerDisabled),
        icon: Styling_1.mergeStyles(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled),
        flexContainer: Styling_1.mergeStyles(styles.splitButtonFlexContainer),
        divider: Styling_1.mergeStyles(styles.splitButtonDivider)
    };
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Button_Props_1 = __webpack_require__(60);
var DefaultButton_1 = __webpack_require__(16);
var ActionButton_1 = __webpack_require__(28);
var CompoundButton_1 = __webpack_require__(62);
var IconButton_1 = __webpack_require__(63);
var PrimaryButton_1 = __webpack_require__(64);
/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        Utilities_1.warn("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case Button_Props_1.ButtonType.command:
                return React.createElement(ActionButton_1.ActionButton, tslib_1.__assign({}, props));
            case Button_Props_1.ButtonType.compound:
                return React.createElement(CompoundButton_1.CompoundButton, tslib_1.__assign({}, props));
            case Button_Props_1.ButtonType.icon:
                return React.createElement(IconButton_1.IconButton, tslib_1.__assign({}, props));
            case Button_Props_1.ButtonType.primary:
                return React.createElement(PrimaryButton_1.PrimaryButton, tslib_1.__assign({}, props));
            default:
                return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, props));
        }
    };
    return Button;
}(Utilities_1.BaseComponent));
exports.Button = Button;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
var SplitButton_styles_1 = __webpack_require__(17);
var ButtonThemes_1 = __webpack_require__(61);
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
        },
        label: {
            fontWeight: Styling_1.FontWeights.semibold
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, defaultButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), splitButtonStyles, customStyles);
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themePrimary,
        },
        iconHovered: {
            color: theme.palette.themePrimary
        },
        rootPressed: {
            color: theme.palette.black,
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        iconPressed: {
            color: theme.palette.themeDarker
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            color: theme.palette.black,
        },
        iconChecked: {
            color: theme.palette.themeDarker
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        },
        textContainer: {
            flexGrow: 0
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, actionButtonStyles, customStyles);
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
var SplitButton_styles_1 = __webpack_require__(17);
var ButtonThemes_1 = __webpack_require__(61);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: Styling_1.FontWeights.semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ],
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary,
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
        },
        descriptionHovered: {
            color: theme.palette.white
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, compoundButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
var SplitButton_styles_1 = __webpack_require__(17);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themeDarker
        },
        rootPressed: {
            color: theme.palette.themePrimary
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var CommandBarButton_styles_1 = __webpack_require__(185);
var CommandBarButton = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--commandBar', styles: CommandBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    CommandBarButton = tslib_1.__decorate([
        Utilities_1.customizable('CommandBarButton', ['theme'])
    ], CommandBarButton);
    return CommandBarButton;
}(Utilities_1.BaseComponent));
exports.CommandBarButton = CommandBarButton;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
var SplitButton_styles_1 = __webpack_require__(17);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var baseSplitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var commandButtonStyles = {
        root: {
            minWidth: '40px',
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            padding: '0 4px'
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black,
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var DefaultButton_1 = __webpack_require__(16);
var Utilities_1 = __webpack_require__(1);
var MessageBarButton_styles_1 = __webpack_require__(187);
var MessageBarButton = /** @class */ (function (_super) {
    tslib_1.__extends(MessageBarButton, _super);
    function MessageBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { styles: MessageBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    MessageBarButton = tslib_1.__decorate([
        Utilities_1.customizable('MessageBarButton', ['theme'])
    ], MessageBarButton);
    return MessageBarButton;
}(Utilities_1.BaseComponent));
exports.MessageBarButton = MessageBarButton;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(9);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var messageBarButtonStyles = {
        root: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.neutralPrimary
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralTertiary,
            color: theme.palette.neutralDark
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, messageBarButtonStyles, customStyles);
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_1ace16f5{background-color:" }, { "theme": "infoBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";min-height:32px;color:" }, { "theme": "infoText", "defaultValue": "#333333" }, { "rawString": ";width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;word-break:break-word}.root_1ace16f5 .icon_1ace16f5{color:" }, { "theme": "info", "defaultValue": "#767676" }, { "rawString": ";-ms-flex-negative:0;flex-shrink:0}html[dir='ltr'] .root_1ace16f5 .icon_1ace16f5{padding-right:8px}html[dir='rtl'] .root_1ace16f5 .icon_1ace16f5{padding-left:8px}.root_1ace16f5 .ms-Link{font-size:12px;color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}html[dir='ltr'] .root_1ace16f5 .ms-Button{margin-left:6px}html[dir='rtl'] .root_1ace16f5 .ms-Button{margin-right:6px}.icon_1ace16f5,.text_1ace16f5{display:table-cell;vertical-align:top}.icon_1ace16f5{font-size:16px;min-width:16px;min-height:16px;display:-webkit-box;display:-ms-flexbox;display:flex}.text_1ace16f5{font-size:12px;font-weight:400;min-width:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.root_1ace16f5.rootIsWarning_1ace16f5{background-color:" }, { "theme": "warningBackground", "defaultValue": "#fff4ce" }, { "rawString": ";color:" }, { "theme": "warningText", "defaultValue": "#333333" }, { "rawString": "}.root_1ace16f5.rootIsSevereWarning_1ace16f5{background-color:" }, { "theme": "severeWarningBackground", "defaultValue": "#fed9cc" }, { "rawString": ";color:" }, { "theme": "severeWarningText", "defaultValue": "#333333" }, { "rawString": "}.root_1ace16f5.rootIsSevereWarning_1ace16f5 .icon_1ace16f5{color:" }, { "theme": "severeWarning", "defaultValue": "#d83b01" }, { "rawString": "}.root_1ace16f5.rootIsError_1ace16f5{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.root_1ace16f5.rootIsError_1ace16f5 .icon_1ace16f5{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.root_1ace16f5.rootIsBlocked_1ace16f5{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.root_1ace16f5.rootIsBlocked_1ace16f5 .icon_1ace16f5{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.root_1ace16f5.rootIsSuccess_1ace16f5{background-color:" }, { "theme": "successBackground", "defaultValue": "#dff6dd" }, { "rawString": ";color:" }, { "theme": "successText", "defaultValue": "#333333" }, { "rawString": "}.root_1ace16f5.rootIsSuccess_1ace16f5 .icon_1ace16f5{color:" }, { "theme": "green", "defaultValue": "#107c10" }, { "rawString": "}.content_1ace16f5{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:normal;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.content_1ace16f5:before{pointer-events:none;position:absolute;right:0;bottom:0;left:0;top:0;margin:0}@media screen and (-ms-high-contrast: active){.content_1ace16f5:before{border:1px solid WindowText;content:' '}}.actions_1ace16f5{padding-top:12px}html[dir='ltr'] .innerTextPadding_1ace16f5 span,html[dir='ltr'] .innerTextPadding_1ace16f5 .innerText_1ace16f5>span{padding-right:4px}html[dir='rtl'] .innerTextPadding_1ace16f5 span,html[dir='rtl'] .innerTextPadding_1ace16f5 .innerText_1ace16f5>span{padding-left:4px}.singleline_1ace16f5{height:32px}.singleline_1ace16f5 .content_1ace16f5{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 0px}.singleline_1ace16f5 .content_1ace16f5 .icon_1ace16f5{font-family:'FabricMDL2Icons';padding:0px 8px}.singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerText_1ace16f5,.singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerTextPadding_1ace16f5{max-height:1.3em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}html[dir='ltr'] .singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerText_1ace16f5,html[dir='ltr'] .singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerTextPadding_1ace16f5{padding-right:8px}html[dir='rtl'] .singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerText_1ace16f5,html[dir='rtl'] .singleline_1ace16f5 .content_1ace16f5 .text_1ace16f5 .innerTextPadding_1ace16f5{padding-left:8px}.actions_1ace16f5,.actionsOneline_1ace16f5{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dismissal_1ace16f5{max-height:16px;-ms-flex-negative:0;flex-shrink:0}.dismissal_1ace16f5::-moz-focus-inner{border:0}.dismissal_1ace16f5{outline:transparent}.dismissal_1ace16f5{position:relative}.ms-Fabric.is-focusVisible .dismissal_1ace16f5:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#000000" }, { "rawString": "}html[dir='ltr'] .dismissal_1ace16f5{right:0}html[dir='rtl'] .dismissal_1ace16f5{left:0}.dismissOneline_1ace16f5{display:-webkit-box;display:-ms-flexbox;display:flex}.rootIsOneline_1ace16f5{min-width:16px;min-height:16px;padding:8px 12px 8px 12px}html[dir='rtl'] .rootIsOneline_1ace16f5{padding:8px 12px 8px 12px}.actionsOneline_1ace16f5{position:relative;padding:0px 8px}.actionableOneline_1ace16f5{height:48px}.actionableOneline_1ace16f5 .content_1ace16f5 .icon_1ace16f5{padding:0px 16px}html[dir='ltr'] .actionableOneline_1ace16f5 .content_1ace16f5 .innerText_1ace16f5{padding-right:0px}html[dir='rtl'] .actionableOneline_1ace16f5 .content_1ace16f5 .innerText_1ace16f5{padding-left:0px}.multiline_1ace16f5{padding:16px 12px 12px 16px}html[dir='rtl'] .multiline_1ace16f5{padding:16px 16px 12px 12px}.multiline_1ace16f5 .content_1ace16f5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.multiline_1ace16f5 .content_1ace16f5 .icon_1ace16f5{font-family:'FabricMDL2Icons'}html[dir='ltr'] .multiline_1ace16f5 .content_1ace16f5 .icon_1ace16f5{padding-right:8px}html[dir='rtl'] .multiline_1ace16f5 .content_1ace16f5 .icon_1ace16f5{padding-left:8px}.multiline_1ace16f5 .content_1ace16f5 .innerText_1ace16f5{line-height:16px}.multiline_1ace16f5 .dismissal_1ace16f5{margin:0}.multiline_1ace16f5{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}html[dir='ltr'] .actionableMultiline_1ace16f5.dismissalMultiline_1ace16f5 .innerTextPadding_1ace16f5{padding-right:48px}html[dir='rtl'] .actionableMultiline_1ace16f5.dismissalMultiline_1ace16f5 .innerTextPadding_1ace16f5{padding-left:48px}\n" }]);
exports.root = "root_1ace16f5";
exports.icon = "icon_1ace16f5";
exports.text = "text_1ace16f5";
exports.rootIsWarning = "rootIsWarning_1ace16f5";
exports.rootIsSevereWarning = "rootIsSevereWarning_1ace16f5";
exports.rootIsError = "rootIsError_1ace16f5";
exports.rootIsBlocked = "rootIsBlocked_1ace16f5";
exports.rootIsSuccess = "rootIsSuccess_1ace16f5";
exports.content = "content_1ace16f5";
exports.actions = "actions_1ace16f5";
exports.innerTextPadding = "innerTextPadding_1ace16f5";
exports.innerText = "innerText_1ace16f5";
exports.singleline = "singleline_1ace16f5";
exports.actionsOneline = "actionsOneline_1ace16f5";
exports.dismissal = "dismissal_1ace16f5";
exports.dismissOneline = "dismissOneline_1ace16f5";
exports.rootIsOneline = "rootIsOneline_1ace16f5";
exports.actionableOneline = "actionableOneline_1ace16f5";
exports.multiline = "multiline_1ace16f5";
exports.actionableMultiline = "actionableMultiline_1ace16f5";
exports.dismissalMultiline = "dismissalMultiline_1ace16f5";


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(190));



/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(191));



/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var strings = __webpack_require__(192);
var sp_core_library_1 = __webpack_require__(18);
var WebPartTitle_module_scss_1 = __webpack_require__(193);
var telemetry = __webpack_require__(196);
/**
 * Web Part Title component
 */
var WebPartTitle = (function (_super) {
    __extends(WebPartTitle, _super);
    /**
     * Constructor
     */
    function WebPartTitle(props) {
        var _this = _super.call(this, props) || this;
        telemetry.track('ReactWebPartTitle', {
            title: !!props.title,
            updateProperty: !!props.updateProperty,
            className: !!props.className
        });
        _this._onChange = _this._onChange.bind(_this);
        return _this;
    }
    /**
     * Process the text area change
     */
    WebPartTitle.prototype._onChange = function (event) {
        this.props.updateProperty(event.target.value);
    };
    /**
     * Default React component render method
     */
    WebPartTitle.prototype.render = function () {
        if (this.props.title || this.props.displayMode === sp_core_library_1.DisplayMode.Edit) {
            return (React.createElement("div", { className: WebPartTitle_module_scss_1.default.webPartTitle + " " + (this.props.className ? this.props.className : '') },
                this.props.displayMode === sp_core_library_1.DisplayMode.Edit && React.createElement("textarea", { placeholder: strings.WebPartTitlePlaceholder, "aria-label": strings.WebPartTitleLabel, onChange: this._onChange, defaultValue: this.props.title }),
                this.props.displayMode !== sp_core_library_1.DisplayMode.Edit && this.props.title && React.createElement("span", { role: "heading", "aria-level": "2" }, this.props.title)));
        }
        return null;
    };
    return WebPartTitle;
}(React.Component));
exports.WebPartTitle = WebPartTitle;



/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_192__;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(194);
var styles = {
    webPartTitle: 'webPartTitle_33f8c64a',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(195);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".webPartTitle_33f8c64a{font-size:14px;font-weight:100;margin-bottom:11px;color:\"[theme:neutralPrimary, default: #333333]\"}@media (min-width:320px){.webPartTitle_33f8c64a{font-size:21px}}@media (min-width:480px){.webPartTitle_33f8c64a{font-size:24px}}.webPartTitle_33f8c64a textarea{background-color:transparent;border:none;box-sizing:border-box;color:inherit;display:block;font-family:inherit;font-size:inherit;font-weight:inherit;height:40px;line-height:inherit;margin:0;outline:0;overflow:hidden;resize:none;text-align:inherit;white-space:pre;width:100%}", ""]);

// exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var telemetry_js_1 = __webpack_require__(197);
var version_1 = __webpack_require__(199);
var sp_core_library_1 = __webpack_require__(18);
var CONTROL_TYPE = "react";
/**
 * Track control information
 *
 * @param componentName
 * @param properties
 */
function track(componentName, properties) {
    if (properties === void 0) { properties = {}; }
    var telemetry = telemetry_js_1.default.getInstance();
    telemetry.trackEvent(componentName, __assign({ version: version_1.version, controlType: CONTROL_TYPE, debug:  true ? "true" : "false", environment: sp_core_library_1.EnvironmentType[sp_core_library_1.Environment.type] }, properties));
}
exports.track = track;



/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(198);
var PNP_TELEMETRY_URL = "https://pnptelemetryproxy.azurewebsites.net/track";
/**
 * PnP Telemetry class
 *
 * This can be used to track PnP client-side events
 */
var PnPTelemetry = /** @class */ (function () {
    function PnPTelemetry() {
        this.events = [];
        this.timeout = null;
    }
    /**
     * Initialize the telemetry class and return the instance
     */
    PnPTelemetry.getInstance = function () {
        if (typeof window.pnpTelemetry === "undefined") {
            window.pnpTelemetry = new PnPTelemetry();
        }
        return window.pnpTelemetry;
    };
    /**
     * Track the event information
     *
     * @param name
     * @param props
     */
    PnPTelemetry.prototype.trackEvent = function (name, properties) {
        this.events.push({ name: name, properties: properties });
        this.debounceTracking();
    };
    /**
     * Delay event tracking
     */
    PnPTelemetry.prototype.debounceTracking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Check if timeout was defined
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                // Set a new timeout
                this.timeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch(PNP_TELEMETRY_URL, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(this.events)
                                })];
                            case 1:
                                _a.sent();
                                // Reset the events
                                this.events = [];
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/];
            });
        });
    };
    return PnPTelemetry;
}());
exports.default = PnPTelemetry;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = "1.12.0";



/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(201));



/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var IndexNavigation_module_scss_1 = __webpack_require__(202);
var Search_1 = __webpack_require__(205);
var Pivot_1 = __webpack_require__(214);
var IndexNavigation = (function (_super) {
    __extends(IndexNavigation, _super);
    function IndexNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event handler for selecting a tab in the navigation
         */
        _this._handleIndexSelect = function (item, ev) {
            _this.props.onIndexSelect(item.props.linkText);
        };
        return _this;
    }
    IndexNavigation.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        // Component should update only if the selected tab has changed.
        // This check helps to avoid unnecessary renders
        return this.props.selectedIndex !== nextProps.selectedIndex;
    };
    IndexNavigation.prototype.render = function () {
        // build the list of alphabet letters A..Z
        var az = Array.apply(null, { length: 26 }).map(function (x, i) { return String.fromCharCode(65 + i); });
        if (this.props.locale === "sv-SE") {
            az.push('Å', 'Ä', 'Ö');
        }
        // for each letter, create a PivotItem component
        var indexes = az.map(function (index) { return React.createElement(Pivot_1.PivotItem, { linkText: index, itemKey: index, key: index }); });
        // as the last tab in the navigation, add the Search option
        // indexes.push(<PivotItem linkText={strings.SearchButtonText} itemKey='Search'>
        //   <Search
        //     searchQuery={this.props.searchQuery}
        //     onSearch={this.props.onSearch}
        //     onClear={this.props.onSearchClear} />
        // </PivotItem>);
        return (React.createElement("div", { className: IndexNavigation_module_scss_1.default.indexNavigation },
            React.createElement("div", null,
                React.createElement(Search_1.Search, { searchQuery: this.props.searchQuery, onSearch: this.props.onSearch, onClear: this.props.onSearchClear })),
            React.createElement(Pivot_1.Pivot, { onLinkClick: this._handleIndexSelect, selectedKey: this.props.selectedIndex }, indexes)));
    };
    return IndexNavigation;
}(React.Component));
exports.IndexNavigation = IndexNavigation;



/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(203);
var styles = {
    indexNavigation: 'indexNavigation_1ce7f6b5',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(204);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".indexNavigation_1ce7f6b5{margin-bottom:1em}.indexNavigation_1ce7f6b5 ul{white-space:normal!important}.indexNavigation_1ce7f6b5 ul button:last-child{font-weight:600}", ""]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(206));



/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var Search_module_scss_1 = __webpack_require__(207);
var SearchBox_1 = __webpack_require__(210);
var strings = __webpack_require__(29);
var Search = (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleSearch = function (searchQuery) {
            _this.props.onSearch(searchQuery);
        };
        _this._handleClear = function () {
            _this.props.onClear();
        };
        return _this;
    }
    Search.prototype.render = function () {
        return (React.createElement("div", { className: Search_module_scss_1.default.search },
            React.createElement(SearchBox_1.SearchBox, { placeholder: strings.SearchBoxPlaceholder, onSearch: this._handleSearch, onClear: this._handleClear, value: this.props.searchQuery, className: Search_module_scss_1.default.searchBox })));
    };
    return Search;
}(React.Component));
exports.Search = Search;



/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(208);
var styles = {
    search: 'search_e01aa005',
    searchBox: 'searchBox_e01aa005',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(209);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".search_e01aa005 .searchBox_e01aa005{width:100%;margin:1em auto}", ""]);

// exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(211), exports);


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(212), exports);


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(11);
var stylesImport = __webpack_require__(213);
var styles = stylesImport;
var SearchBox = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: props.value || '',
            hasFocus: false,
            id: Utilities_1.getId('SearchBox')
        };
        return _this;
    }
    SearchBox.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value
            });
        }
    };
    SearchBox.prototype.render = function () {
        var _a = this.props, labelText = _a.labelText, className = _a.className, disabled = _a.disabled, underlined = _a.underlined;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        return (React.createElement("div", tslib_1.__assign({ ref: this._resolveRef('_rootElement'), className: Utilities_1.css('ms-SearchBox', className, styles.root, (_c = {},
                _c['is-active ' + styles.rootIsActive] = hasFocus,
                _c['is-disabled ' + styles.rootIsDisabled] = disabled,
                _c['can-clear ' + styles.rootCanClear] = value.length > 0,
                _c['is-underlined ' + styles.rootIsUnderlined] = underlined,
                _c)) }, { onFocusCapture: this._onFocusCapture }),
            React.createElement("div", { className: Utilities_1.css('ms-SearchBox-iconContainer', styles.iconContainer) },
                React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-SearchBox-icon', styles.icon), iconName: 'Search' })),
            React.createElement("input", { id: id, className: Utilities_1.css('ms-SearchBox-field', styles.field), placeholder: labelText, onChange: this._onInputChange, onInput: this._onInputChange, onKeyDown: this._onKeyDown, value: value, disabled: this.props.disabled, "aria-label": this.props.ariaLabel ? this.props.ariaLabel : this.props.labelText, ref: this._resolveRef('_inputElement') }),
            React.createElement("div", { className: Utilities_1.css('ms-SearchBox-clearButton', styles.clearButton), onClick: this._onClear },
                React.createElement(Icon_1.Icon, { iconName: 'Clear' }))));
        var _c;
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBox.prototype.focus = function () {
        if (this._inputElement) {
            this._inputElement.focus();
        }
    };
    SearchBox.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: ''
            });
            this._callOnChange('');
            ev.stopPropagation();
            ev.preventDefault();
            this._inputElement.focus();
        }
    };
    SearchBox.prototype._onFocusCapture = function (ev) {
        this.setState({
            hasFocus: true
        });
        this._events.on(this._rootElement, 'blur', this._onBlur, true);
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
    };
    SearchBox.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case 27 /* escape */:
                this.props.onEscape && this.props.onEscape(ev);
                if (!ev.defaultPrevented) {
                    this._onClear(ev);
                }
                break;
            case 13 /* enter */:
                if (this.props.onSearch && this.state.value.length > 0) {
                    this.props.onSearch(this.state.value);
                }
                break;
            default:
                this.props.onKeyDown && this.props.onKeyDown(ev);
                if (!ev.defaultPrevented) {
                    return;
                }
        }
        // We only get here if the keypress has been handled,
        // or preventDefault was called in case of default keyDown handler
        ev.preventDefault();
        ev.stopPropagation();
    };
    SearchBox.prototype._onBlur = function (ev) {
        this._events.off(this._rootElement, 'blur');
        this.setState({
            hasFocus: false
        });
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
    };
    SearchBox.prototype._onInputChange = function (ev) {
        var value = this._inputElement.value;
        if (value === this._latestValue) {
            return;
        }
        this._latestValue = value;
        this.setState({ value: value });
        this._callOnChange(value);
    };
    SearchBox.prototype._callOnChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    SearchBox.defaultProps = {
        labelText: 'Search',
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onClear", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onFocusCapture", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onInputChange", null);
    return SearchBox;
}(Utilities_1.BaseComponent));
exports.SearchBox = SearchBox;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_9229a156{font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0 0 0 8px;border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";height:32px}html[dir='rtl'] .root_9229a156{padding:0 8px 0 0}@media screen and (-ms-high-contrast: active){.root_9229a156{border:1px solid WindowText}}.iconContainer_9229a156{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;font-size:16px;width:32px;text-align:center;-webkit-transition:width .167s;transition:width .167s;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.icon_9229a156{opacity:1;-webkit-transition:opacity .167s 0s;transition:opacity .167s 0s}.field_9229a156{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:none;outline:none;font-weight:inherit;font-family:inherit;font-size:inherit;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:transparent;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;overflow:hidden;text-overflow:ellipsis;padding-bottom:.5px}.field_9229a156::-ms-clear{display:none}.clearButton_9229a156{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:none;cursor:pointer;text-align:center;font-size:12px;-ms-flex-preferred-size:32px;flex-basis:32px;-ms-flex-negative:0;flex-shrink:0;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.root_9229a156.rootIsUnderlined_9229a156{border-width:0px 0px 1px 0px}.root_9229a156.rootIsUnderlined_9229a156.rootIsDisabled_9229a156{background-color:transparent}.root_9229a156.rootIsActive_9229a156{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.root_9229a156.rootIsActive_9229a156:hover{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_9229a156.rootIsActive_9229a156{border-color:Highlight}}.root_9229a156.rootIsActive_9229a156 .iconContainer_9229a156{width:4px;-webkit-transition:width .167s;transition:width .167s}.root_9229a156.rootIsActive_9229a156 .icon_9229a156{opacity:0;opacity:0 0s .167s}.rootIsDisabled_9229a156{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.rootIsDisabled_9229a156 .iconContainer_9229a156{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.rootIsDisabled_9229a156 .field_9229a156{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.rootCanClear_9229a156 .clearButton_9229a156{display:-webkit-box;display:-ms-flexbox;display:flex}.root_9229a156:hover{border-color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.root_9229a156:hover .label_9229a156{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.root_9229a156:hover .label_9229a156 .iconContainer_9229a156{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}\n" }]);
exports.root = "root_9229a156";
exports.iconContainer = "iconContainer_9229a156";
exports.icon = "icon_9229a156";
exports.field = "field_9229a156";
exports.clearButton = "clearButton_9229a156";
exports.rootIsUnderlined = "rootIsUnderlined_9229a156";
exports.rootIsDisabled = "rootIsDisabled_9229a156";
exports.rootIsActive = "rootIsActive_9229a156";
exports.rootCanClear = "rootCanClear_9229a156";
exports.label = "label_9229a156";


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(215), exports);


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(216), exports);
var PivotItem_1 = __webpack_require__(67);
exports.PivotItem = PivotItem_1.PivotItem;
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Button_1 = __webpack_require__(14);
var FocusZone_1 = __webpack_require__(55);
var PivotItem_1 = __webpack_require__(67);
var Pivot_Props_1 = __webpack_require__(30);
var Pivot_Props_2 = __webpack_require__(30);
var Icon_1 = __webpack_require__(11);
var stylesImport = __webpack_require__(217);
var styles = stylesImport;
var Pivot = /** @class */ (function (_super) {
    tslib_1.__extends(Pivot, _super);
    function Pivot(props) {
        var _this = _super.call(this, props) || this;
        _this._pivotId = Utilities_1.getId('Pivot');
        var links = _this._getPivotLinks(_this.props);
        var selectedKey;
        if (props.initialSelectedKey) {
            selectedKey = props.initialSelectedKey;
        }
        else if (props.initialSelectedIndex) {
            selectedKey = links[props.initialSelectedIndex].itemKey;
        }
        else if (props.selectedKey) {
            selectedKey = props.selectedKey;
        }
        else if (links.length) {
            selectedKey = links[0].itemKey;
        }
        _this.state = {
            links: links,
            selectedKey: selectedKey,
            selectedTabId: _this._keyToTabIds[selectedKey],
        };
        _this._renderLink = _this._renderLink.bind(_this);
        return _this;
    }
    Pivot.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var links = this._getPivotLinks(nextProps);
        this.setState(function (prevState, props) {
            var selectedKey;
            if (_this._isKeyValid(nextProps.selectedKey)) {
                selectedKey = nextProps.selectedKey;
            }
            else if (_this._isKeyValid(prevState.selectedKey)) {
                selectedKey = prevState.selectedKey;
            }
            else if (links.length) {
                selectedKey = links[0].itemKey;
            }
            return {
                links: links,
                selectedKey: selectedKey,
                selectedTabId: _this._keyToTabIds[selectedKey],
            };
        });
    };
    Pivot.prototype.render = function () {
        return (React.createElement("div", null,
            this._renderPivotLinks(),
            this._renderPivotItem()));
    };
    /**
     * Renders the set of links to route between pivots
     */
    Pivot.prototype._renderPivotLinks = function () {
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal },
            React.createElement("ul", { className: Utilities_1.css('ms-Pivot', styles.root, (_a = {}, _a['ms-Pivot--large ' + styles.rootIsLarge] = this.props.linkSize === Pivot_Props_2.PivotLinkSize.large, _a), (_b = {}, _b['ms-Pivot--tabs ' + styles.rootIsTabs] = this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs, _b)), role: 'tablist' }, this.state.links.map(this._renderLink))));
        var _a, _b;
    };
    /**
     * Renders a pivot link
     */
    Pivot.prototype._renderLink = function (link) {
        var itemKey = link.itemKey;
        var tabId = this._keyToTabIds[itemKey];
        var onRenderItemLink = link.onRenderItemLink;
        var linkContent;
        if (onRenderItemLink) {
            linkContent = onRenderItemLink(link, this._renderLinkContent);
        }
        else {
            linkContent = this._renderLinkContent(link);
        }
        return (React.createElement(Button_1.CommandButton, { id: tabId, key: itemKey, className: Utilities_1.css('ms-Pivot-link', styles.link, (_a = {},
                _a['is-selected ' + styles.linkIsSelected] = this.state.selectedKey === itemKey,
                _a)), onClick: this._onLinkClick.bind(this, itemKey), onKeyPress: this._onKeyPress.bind(this, itemKey), ariaLabel: link.ariaLabel, role: 'tab', "aria-selected": this.state.selectedKey === itemKey }, linkContent));
        var _a;
    };
    Pivot.prototype._renderLinkContent = function (link) {
        var itemCount = link.itemCount, itemIcon = link.itemIcon, linkText = link.linkText;
        return (React.createElement("span", { className: Utilities_1.css('ms-Pivot-link-content') },
            itemIcon !== undefined && (React.createElement("span", { className: Utilities_1.css('ms-Pivot-icon', styles.icon) },
                React.createElement(Icon_1.Icon, { iconName: itemIcon }))),
            linkText !== undefined && React.createElement("span", { className: Utilities_1.css('ms-Pivot-text', styles.text) },
                " ",
                link.linkText),
            itemCount !== undefined && React.createElement("span", { className: Utilities_1.css('ms-Pivot-count', styles.count) },
                " (",
                itemCount,
                ")")));
    };
    /**
     * Renders the current Pivot Item
     */
    Pivot.prototype._renderPivotItem = function () {
        if (this.props.headersOnly) {
            return null;
        }
        var itemKey = this.state.selectedKey;
        var index = this._keyToIndexMapping[itemKey];
        var selectedTabId = this.state.selectedTabId;
        return (React.createElement("div", { role: 'tabpanel', "aria-labelledby": selectedTabId }, React.Children.toArray(this.props.children)[index]));
    };
    /**
     * Gets the set of PivotLinks as arrary of IPivotItemProps
     * The set of Links is determined by child components of type PivotItem
     */
    Pivot.prototype._getPivotLinks = function (props) {
        var _this = this;
        var links = [];
        this._keyToIndexMapping = {};
        this._keyToTabIds = {};
        React.Children.map(props.children, function (child, index) {
            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
                var pivotItem = child;
                var itemKey = pivotItem.props.itemKey || index.toString();
                links.push({
                    linkText: pivotItem.props.linkText,
                    ariaLabel: pivotItem.props.ariaLabel,
                    itemKey: itemKey,
                    itemCount: pivotItem.props.itemCount,
                    itemIcon: pivotItem.props.itemIcon,
                    onRenderItemLink: pivotItem.props.onRenderItemLink
                });
                _this._keyToIndexMapping[itemKey] = index;
                _this._keyToTabIds[itemKey] = _this._getTabId(itemKey, index);
            }
        });
        return links;
    };
    /**
     * Generates the Id for the tab button.
     */
    Pivot.prototype._getTabId = function (itemKey, index) {
        if (this.props.getTabId) {
            return this.props.getTabId(itemKey, index);
        }
        return this._pivotId + ("-Tab" + index);
    };
    /**
     * whether the key exists in the pivot items.
     */
    Pivot.prototype._isKeyValid = function (itemKey) {
        return itemKey !== undefined && this._keyToIndexMapping[itemKey] !== undefined;
    };
    /**
     * Handles the onClick event on PivotLinks
     */
    Pivot.prototype._onLinkClick = function (itemKey, ev) {
        ev.preventDefault();
        this._updateSelectedItem(itemKey, ev);
    };
    /**
     * Handle the onKeyPress eventon the PivotLinks
     */
    Pivot.prototype._onKeyPress = function (itemKey, ev) {
        ev.preventDefault();
        if (ev.which === 13 /* enter */) {
            this._updateSelectedItem(itemKey);
        }
    };
    /**
     * Updates the state with the new selected index
     */
    Pivot.prototype._updateSelectedItem = function (itemKey, ev) {
        this.setState({
            selectedKey: itemKey,
            selectedTabId: this._keyToTabIds[itemKey]
        });
        if (this.props.onLinkClick && this._keyToIndexMapping[itemKey] >= 0) {
            var index = this._keyToIndexMapping[itemKey];
            // React.Element<any> cannot directly convert to PivotItem.
            var item = React.Children.toArray(this.props.children)[index];
            if (typeof item === 'object' && item.type === PivotItem_1.PivotItem) {
                this.props.onLinkClick(item, ev);
            }
        }
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Pivot.prototype, "_renderLink", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Pivot.prototype, "_renderLinkContent", null);
    return Pivot;
}(Utilities_1.BaseComponent));
exports.Pivot = Pivot;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_e04c4eaf{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:14px;font-weight:400;position:relative;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";white-space:nowrap}.links_e04c4eaf{font-size:0;height:40px;list-style-type:none;padding:0;white-space:nowrap}.root_e04c4eaf .link_e04c4eaf{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:inline-block;font-size:14px;font-weight:400;line-height:40px;padding:0 8px;text-align:center;position:relative;background-color:transparent;border:0}[dir='ltr'] .root_e04c4eaf .link_e04c4eaf{margin-right:8px}[dir='rtl'] .root_e04c4eaf .link_e04c4eaf{margin-left:8px}.root_e04c4eaf .link_e04c4eaf:hover{cursor:pointer}.root_e04c4eaf .link_e04c4eaf:focus{outline:none}.root_e04c4eaf .link_e04c4eaf::before{background-color:transparent;bottom:0;content:'';height:2px;left:8px;position:absolute;right:8px;-webkit-transition:background-color .267s cubic-bezier(0.1, 0.25, 0.75, 0.9);transition:background-color .267s cubic-bezier(0.1, 0.25, 0.75, 0.9)}.root_e04c4eaf .link_e04c4eaf::after{color:transparent;content:attr(title);display:block;font-weight:bold;height:1px;overflow:hidden;visibility:hidden}.root_e04c4eaf .link_e04c4eaf .text_e04c4eaf,.root_e04c4eaf .link_e04c4eaf .count_e04c4eaf{display:inline-block;vertical-align:top}html[dir='ltr'] .root_e04c4eaf .link_e04c4eaf .icon_e04c4eaf+.text_e04c4eaf{margin-left:4px}html[dir='rtl'] .root_e04c4eaf .link_e04c4eaf .icon_e04c4eaf+.text_e04c4eaf{margin-right:4px}html[dir='ltr'] .root_e04c4eaf .link_e04c4eaf .count_e04c4eaf{margin-left:4px}html[dir='rtl'] .root_e04c4eaf .link_e04c4eaf .count_e04c4eaf{margin-right:4px}.root_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf{font-weight:600}.root_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf::before{-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf::before{border-bottom-color:WindowText}}.root_e04c4eaf .link_e04c4eaf.linkIsDisabled_e04c4eaf{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .link_e04c4eaf:focus{outline:1px solid " }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.link_e04c4eaf.linkIsOverflow_e04c4eaf{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.link_e04c4eaf.linkIsOverflow_e04c4eaf.linkIsSelected_e04c4eaf{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.link_e04c4eaf.linkIsOverflow_e04c4eaf:hover:not(.linkIsSelected_e04c4eaf),.link_e04c4eaf.linkIsOverflow_e04c4eaf:focus:not(.linkIsSelected_e04c4eaf){color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.link_e04c4eaf.linkIsOverflow_e04c4eaf:active{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ellipsis_e04c4eaf{font-size:15px;position:relative;top:0}.root_e04c4eaf.rootIsLarge_e04c4eaf .link_e04c4eaf{font-size:17px}.root_e04c4eaf.rootIsLarge_e04c4eaf .link_e04c4eaf.linkIsOverflow_e04c4eaf::after{font-size:17px}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf{height:40px;line-height:40px;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";padding:0 10px;vertical-align:top}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf::-moz-focus-inner{border:0}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf{outline:transparent}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf{position:relative}.ms-Fabric.is-focusVisible .root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#000000" }, { "rawString": "}[dir='ltr'] .root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf{margin-right:0px}[dir='rtl'] .root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf{margin-left:0px}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf:hover:not(.linkIsSelected_e04c4eaf):not(.linkIsOverflow_e04c4eaf),.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf:focus:not(.linkIsSelected_e04c4eaf):not(.linkIsOverflow_e04c4eaf){color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";z-index:1}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf:active{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:300}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf::before{background-color:transparent;-webkit-transition:none;transition:none;position:absolute;top:0;left:0;right:0;bottom:0;content:'';height:auto}@media screen and (-ms-high-contrast: active){.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf{color:HighlightText;background:Highlight;-ms-high-contrast-adjust:none}}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsOverflow_e04c4eaf:hover:not(.linkIsSelected_e04c4eaf),.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsOverflow_e04c4eaf:focus:not(.linkIsSelected_e04c4eaf){background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsOverflow_e04c4eaf:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Fabric.is-focusVisible .root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf:focus:before{height:auto;background:transparent;-webkit-transition:none;transition:none}@media screen and (-ms-high-contrast: active){.root_e04c4eaf.rootIsTabs_e04c4eaf .link_e04c4eaf.linkIsSelected_e04c4eaf{font-weight:600}}\n" }]);
exports.root = "root_e04c4eaf";
exports.links = "links_e04c4eaf";
exports.link = "link_e04c4eaf";
exports.text = "text_e04c4eaf";
exports.count = "count_e04c4eaf";
exports.icon = "icon_e04c4eaf";
exports.linkIsSelected = "linkIsSelected_e04c4eaf";
exports.linkIsDisabled = "linkIsDisabled_e04c4eaf";
exports.linkIsOverflow = "linkIsOverflow_e04c4eaf";
exports.ellipsis = "ellipsis_e04c4eaf";
exports.rootIsLarge = "rootIsLarge_e04c4eaf";
exports.rootIsTabs = "rootIsTabs_e04c4eaf";


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(219));



/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var strings = __webpack_require__(29);
var PeopleList_module_scss_1 = __webpack_require__(220);
var HoverCard_1 = __webpack_require__(223);
var Panel_1 = __webpack_require__(230);
var Button_1 = __webpack_require__(14);
var PeopleList = (function (_super) {
    __extends(PeopleList, _super);
    function PeopleList(props) {
        var _this = _super.call(this, props) || this;
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this._onRenderCompactCard = function (p) {
            return (React.createElement("div", { className: PeopleList_module_scss_1.default.compactCard },
                React.createElement("h2", null, p.name)));
        };
        _this._onRenderExpandedCard = function (p) {
            return (React.createElement("div", { className: PeopleList_module_scss_1.default.expandedCard },
                p.department,
                p.function,
                p.skills,
                p.projects,
                React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: _this._showPanel })));
        };
        _this._onPersonaClicked = function (index, person) { return function (event) {
            _this.setState({
                showCallOut: !_this.state.showCallOut,
                calloutElement: index,
                person: person
            });
        }; };
        _this._onCalloutDismiss = function (event) {
            _this.setState({
                showCallOut: false,
            });
        };
        _this.state = {
            showCallOut: false,
            calloutElement: null,
            person: null,
            showPanel: false
        };
        //this._onPersonaClicked = this._onPersonaClicked.bind(this);
        _this._onCalloutDismiss = _this._onCalloutDismiss.bind(_this);
        return _this;
    }
    PeopleList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid ms-Grid-row" },
            this.props.people.length === 0 &&
                (this.props.selectedIndex !== 'Search' ||
                    (this.props.selectedIndex === 'Search' &&
                        this.props.hasSearchQuery)) &&
                // Show the 'No people found' message if no people have been retrieved
                // and the user either selected a letter in the navigation or issued
                // a search query (but not when navigated to the Search tab without
                // providing a query yet)
                React.createElement("div", { className: 'ms-textAlignCenter' }, strings.NoPeopleFoundLabel),
            this.props.people.length > 0 &&
                // for each retrieved person, create a persona card with the retrieved
                // information
                //this.props.people.map(p => <Persona primaryText={p.name} secondaryText={p.email} tertiaryText={p.phone} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />)
                this.props.people.map(function (p, i) {
                    var phone = p.phone && p.mobile ? p.phone + "/" + p.mobile : p.phone ? p.phone : p.mobile;
                    // const toggleClassName: string = this.state.toggleClass ? `ms-Icon--ChromeClose ${styles.isClose}` : "ms-Icon--ContactInfo";
                    if (!p.photoUrl) {
                        p.photoUrl = "/_layouts/15/userphoto.aspx?size=L&accountname";
                    }
                    var expandingCardProps = {
                        onRenderCompactCard: _this._onRenderCompactCard,
                        onRenderExpandedCard: _this._onRenderExpandedCard,
                        renderData: p
                    };
                    return (React.createElement("div", { className: "ms-Grid-col  " + PeopleList_module_scss_1.default.persona_card },
                        React.createElement(HoverCard_1.HoverCard, { expandingCardProps: expandingCardProps, instantOpenOnClick: true },
                            React.createElement("div", { className: PeopleList_module_scss_1.default.card },
                                React.createElement("img", { src: p.photoUrl, className: PeopleList_module_scss_1.default.profile_image }),
                                React.createElement("div", { className: PeopleList_module_scss_1.default.container },
                                    React.createElement("h4", null,
                                        React.createElement("b", null, p.name))))),
                        React.createElement(Panel_1.Panel, { isOpen: _this.state.showPanel, type: Panel_1.PanelType.medium, headerText: "Panel", onDismiss: _this._hidePanel },
                            React.createElement("span", null, "Test"))));
                })));
    };
    return PeopleList;
}(React.Component));
exports.PeopleList = PeopleList;



/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(221);
var styles = {
    persona_card: 'persona_card_bf9a53b2',
    persona: 'persona_bf9a53b2',
    callout: 'callout_bf9a53b2',
    calloutShow: 'calloutShow_bf9a53b2',
    card: 'card_bf9a53b2',
    container: 'container_bf9a53b2',
    profile_image: 'profile_image_bf9a53b2',
    profile_image_hover: 'profile_image_hover_bf9a53b2',
    compactCard: 'compactCard_bf9a53b2',
    expandedCard: 'expandedCard_bf9a53b2',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(222);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".persona_card_bf9a53b2{-ms-flex-align:center;align-items:center;border:1px solid;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;padding:1rem;position:relative;border:none}@media (min-width:640px){.persona_card_bf9a53b2{max-width:45%;margin:1%}}.persona_card_bf9a53b2 .persona_bf9a53b2{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;height:1.4rem;-ms-flex-pack:center;justify-content:center;position:absolute;right:1rem;width:1.4rem}.persona_card_bf9a53b2 .persona_bf9a53b2 i{color:\"[theme:themeSecondary, default: #2b88d8]\";cursor:pointer;font-size:1.4rem;margin-bottom:75px;margin-right:20px}.persona_card_bf9a53b2 .callout_bf9a53b2{display:hidden}.persona_card_bf9a53b2 .calloutShow_bf9a53b2{display:block}.persona_card_bf9a53b2 .card_bf9a53b2{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;height:280px;width:210px}.persona_card_bf9a53b2 .card_bf9a53b2:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.persona_card_bf9a53b2 .container_bf9a53b2{padding:2px 16px}.persona_card_bf9a53b2 .profile_image_bf9a53b2{width:100%;height:80%}.persona_card_bf9a53b2 .profile_image_hover_bf9a53b2{width:50%;height:30%}.persona_card_bf9a53b2 .compactCard_bf9a53b2{padding:10%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.persona_card_bf9a53b2 .expandedCard_bf9a53b2{padding:16px 24px}", ""]);

// exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(224), exports);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(228), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var FocusTrapZone = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZone, _super);
    function FocusTrapZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInFocusStack = false;
        _this._isInClickStack = false;
        return _this;
    }
    FocusTrapZone.prototype.componentWillMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
        if (forceFocusInsideTrap) {
            this._isInFocusStack = true;
            FocusTrapZone._focusStack.push(this);
        }
        if (!isClickableOutsideFocusTrap) {
            this._isInClickStack = true;
            FocusTrapZone._clickStack.push(this);
        }
    };
    FocusTrapZone.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c, elementToFocusOnDismiss = _a.elementToFocusOnDismiss;
        this._previouslyFocusedElement = elementToFocusOnDismiss ? elementToFocusOnDismiss : document.activeElement;
        if (!Utilities_1.elementContains(this.refs.root, this._previouslyFocusedElement)) {
            this.focus();
        }
        if (forceFocusInsideTrap) {
            this._events.on(window, 'focus', this._forceFocusInTrap, true);
        }
        if (!isClickableOutsideFocusTrap) {
            this._events.on(window, 'click', this._forceClickInTrap, true);
        }
    };
    FocusTrapZone.prototype.componentWillReceiveProps = function (nextProps) {
        var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;
        if (elementToFocusOnDismiss && this._previouslyFocusedElement !== elementToFocusOnDismiss) {
            this._previouslyFocusedElement = elementToFocusOnDismiss;
        }
    };
    FocusTrapZone.prototype.componentWillUnmount = function () {
        var _this = this;
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        this._events.dispose();
        if (this._isInFocusStack || this._isInClickStack) {
            var filter = function (value) {
                return _this !== value;
            };
            if (this._isInFocusStack) {
                FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(filter);
            }
            if (this._isInClickStack) {
                FocusTrapZone._clickStack = FocusTrapZone._clickStack.filter(filter);
            }
        }
        if (!ignoreExternalFocusing && this._previouslyFocusedElement && typeof this._previouslyFocusedElement.focus === 'function') {
            this._previouslyFocusedElement.focus();
        }
    };
    FocusTrapZone.prototype.render = function () {
        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: className, ref: 'root', "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler }), this.props.children));
    };
    /**
     * Need to expose this method in case of popups since focus needs to be set when popup is opened
     */
    FocusTrapZone.prototype.focus = function () {
        var firstFocusableSelector = this.props.firstFocusableSelector;
        var focusSelector = typeof firstFocusableSelector === 'string'
            ? firstFocusableSelector
            : firstFocusableSelector && firstFocusableSelector();
        var _firstFocusableChild;
        var root = this.refs.root;
        if (focusSelector) {
            _firstFocusableChild = root.querySelector('.' + focusSelector);
        }
        else {
            _firstFocusableChild = Utilities_1.getNextElement(root, root.firstChild, true, false, false, true);
        }
        if (_firstFocusableChild) {
            _firstFocusableChild.focus();
        }
    };
    FocusTrapZone.prototype._onKeyboardHandler = function (ev) {
        if (ev.which !== 9 /* tab */) {
            return;
        }
        var root = this.refs.root;
        var _firstFocusableChild = Utilities_1.getFirstFocusable(root, root.firstChild, true);
        var _lastFocusableChild = Utilities_1.getLastTabbable(root, root.lastChild, true);
        if (ev.shiftKey && _firstFocusableChild === ev.target) {
            _lastFocusableChild.focus();
            ev.preventDefault();
            ev.stopPropagation();
        }
        else if (!ev.shiftKey && _lastFocusableChild === ev.target) {
            _firstFocusableChild.focus();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
        if (FocusTrapZone._focusStack.length && this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
            var focusedElement = document.activeElement;
            if (!Utilities_1.elementContains(this.refs.root, focusedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
        if (FocusTrapZone._clickStack.length && this === FocusTrapZone._clickStack[FocusTrapZone._clickStack.length - 1]) {
            var clickedElement = ev.target;
            if (clickedElement && !Utilities_1.elementContains(this.refs.root, clickedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone._focusStack = [];
    FocusTrapZone._clickStack = [];
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusTrapZone.prototype, "_onKeyboardHandler", null);
    return FocusTrapZone;
}(Utilities_1.BaseComponent));
exports.FocusTrapZone = FocusTrapZone;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var MS_HIGHCONTRAST_ACTIVE = '@media screen and (-ms-high-contrast: active)';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var styles = {
        root: {
            width: '340px',
            pointerEvents: 'none',
            selectors: {
                '.ms-Callout': {
                    boxShadow: '0 0 20px rgba(0, 0, 0, .2)',
                    border: 'none',
                    selectors: (_a = {},
                        _a[MS_HIGHCONTRAST_ACTIVE] = {
                            border: '1px solid WindowText',
                        },
                        _a)
                }
            }
        },
        compactCard: {
            pointerEvents: 'auto',
            position: 'relative'
        },
        expandedCard: [
            {
                height: '1px',
                overflowY: 'hidden',
                pointerEvents: 'auto',
                transition: 'height 0.467s cubic-bezier(0.5, 0, 0, 1)',
                selectors: {
                    ':before': {
                        content: '""',
                        position: 'relative',
                        display: 'block',
                        top: '0',
                        left: '24px',
                        width: '292px',
                        height: '1px',
                        backgroundColor: theme.palette.neutralLighter
                    }
                }
            }
        ],
        expandedCardScroll: {
            height: '100%',
            boxSizing: 'border-box',
            overflowY: 'auto'
        }
    };
    return Styling_1.concatStyleSets(styles, customStyles);
    var _a;
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var ExpandingCard_1 = __webpack_require__(68);
var ExpandingCard_Props_1 = __webpack_require__(31);
var HoverCard_styles_1 = __webpack_require__(229);
var HoverCard = /** @class */ (function (_super) {
    tslib_1.__extends(HoverCard, _super);
    // Constructor
    function HoverCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isHoverCardVisible: false,
            mode: ExpandingCard_Props_1.ExpandingCardMode.compact
        };
        return _this;
    }
    HoverCard.prototype.componentDidMount = function () {
        var target = this._getTargetElement();
        this._events.on(target, 'mouseenter', this._cardOpen);
        this._events.on(target, 'mouseleave', this._cardDismiss);
        if (this.props.trapFocus) {
            this._events.on(target, 'keydown', this._cardOpen);
        }
        else {
            this._events.on(target, 'focus', this._cardOpen);
            this._events.on(target, 'blur', this._cardDismiss);
        }
        if (this.props.instantOpenOnClick) {
            this._events.on(target, 'click', this._instantOpenExpanded);
        }
        else {
            this._events.on(target, 'mousedown', this._cardDismiss);
            this._events.on(target, 'keydown', this._cardDismiss);
        }
    };
    HoverCard.prototype.componentWillUpdate = function (newProps, newState) {
        var _this = this;
        if (newState.isHoverCardVisible !== this.state.isHoverCardVisible) {
            if (newState.isHoverCardVisible) {
                this._async.setTimeout(function () {
                    _this.setState({
                        mode: ExpandingCard_Props_1.ExpandingCardMode.expanded
                    });
                }, this.props.expandedCardOpenDelay);
                this.props.onCardVisible && this.props.onCardVisible();
            }
            else {
                this.setState({
                    mode: ExpandingCard_Props_1.ExpandingCardMode.compact
                });
                this.props.onCardHide && this.props.onCardHide();
            }
        }
    };
    // Render
    HoverCard.prototype.render = function () {
        var _a = this.props, expandingCardProps = _a.expandingCardProps, children = _a.children, id = _a.id, _b = _a.setAriaDescribedBy, setAriaDescribedBy = _b === void 0 ? true : _b, customStyles = _a.styles;
        var _c = this.state, isHoverCardVisible = _c.isHoverCardVisible, mode = _c.mode;
        var hoverCardId = id || Utilities_1.getId('hoverCard');
        this._styles = HoverCard_styles_1.getStyles(customStyles);
        return (React.createElement("div", { className: Styling_1.mergeStyles(this._styles.host), ref: this._resolveRef('_hoverCard'), "aria-describedby": setAriaDescribedBy && isHoverCardVisible ? hoverCardId : undefined },
            children,
            isHoverCardVisible &&
                React.createElement(ExpandingCard_1.ExpandingCard, tslib_1.__assign({ componentRef: this._resolveRef('_expandingCard') }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { id: hoverCardId, trapFocus: !!this.props.trapFocus, targetElement: this._getTargetElement(), onEnter: this._cardOpen, onLeave: this._cardDismiss, mode: mode }, expandingCardProps))));
    };
    HoverCard.prototype._getTargetElement = function () {
        var target = this.props.target;
        switch (typeof target) {
            case 'string':
                return Utilities_1.getDocument().querySelector(target);
            case 'object':
                return target;
            default:
                return this._hoverCard;
        }
    };
    // Show HoverCard
    HoverCard.prototype._cardOpen = function (ev) {
        var _this = this;
        if (ev.type === 'keydown' && !(ev.shiftKey && ev.which === 32 /* space */)) {
            return;
        }
        this._async.clearTimeout(this._dismissTimerId);
        if (ev.type === 'mouseenter') {
            this._currentMouseTarget = ev.currentTarget;
        }
        this._openTimerId = this._async.setTimeout(function () {
            if (!_this.state.isHoverCardVisible) {
                _this.setState({
                    isHoverCardVisible: true,
                    mode: ExpandingCard_Props_1.ExpandingCardMode.compact
                });
            }
        }, this.props.cardOpenDelay);
    };
    // Hide HoverCard
    HoverCard.prototype._cardDismiss = function (ev) {
        var _this = this;
        if (ev.type === 'keydown' && (ev.which !== 27 /* escape */)) {
            return;
        }
        this._async.clearTimeout(this._openTimerId);
        // Dismiss if not sticky and currentTarget is the same element that mouse last entered
        if (!this.props.sticky && (this._currentMouseTarget === ev.currentTarget || (ev.which === 27 /* escape */))) {
            this._dismissTimerId = this._async.setTimeout(function () {
                _this.setState({
                    isHoverCardVisible: false,
                    mode: ExpandingCard_Props_1.ExpandingCardMode.compact
                });
            }, this.props.cardDismissDelay);
        }
    };
    // Instant Open the card in Expanded mode
    HoverCard.prototype._instantOpenExpanded = function (ev) {
        this.setState({
            isHoverCardVisible: true,
            mode: ExpandingCard_Props_1.ExpandingCardMode.expanded
        });
    };
    HoverCard.defaultProps = {
        cardOpenDelay: 500,
        cardDismissDelay: 100,
        expandedCardOpenDelay: 1500,
        instantOpenOnClick: false
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], HoverCard.prototype, "_cardOpen", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], HoverCard.prototype, "_cardDismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], HoverCard.prototype, "_instantOpenExpanded", null);
    return HoverCard;
}(Utilities_1.BaseComponent));
exports.HoverCard = HoverCard;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getStyles = Utilities_1.memoizeFunction(function (customStyles) {
    var styles = {
        host: {}
    };
    return Styling_1.mergeStyleSets(styles, customStyles);
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(231), exports);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(232), exports);
tslib_1.__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var index_1 = __webpack_require__(69);
var Panel_Props_1 = __webpack_require__(70);
var Layer_1 = __webpack_require__(27);
var Overlay_1 = __webpack_require__(233);
var Popup_1 = __webpack_require__(59);
var Button_1 = __webpack_require__(14);
var Styling_1 = __webpack_require__(3);
var stylesImport = __webpack_require__(237);
var styles = stylesImport;
var theme = Styling_1.getTheme();
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isFooterSticky: false,
            isOpen: false,
            isAnimating: false,
            id: Utilities_1.getId('Panel')
        };
        return _this;
    }
    Panel.prototype.componentDidMount = function () {
        this._events.on(window, 'resize', this._updateFooterPosition);
        if (this.props.isOpen) {
            this.open();
        }
    };
    Panel.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.isOpen !== this.state.isOpen) {
            if (newProps.isOpen) {
                this.open();
            }
            else {
                this.dismiss();
            }
        }
    };
    Panel.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isLightDismiss = _a.isLightDismiss, layerProps = _a.layerProps, type = _a.type, customWidth = _a.customWidth, _c = _a.onLightDismissClick, onLightDismissClick = _c === void 0 ? this._onPanelClick : _c, _d = _a.onRenderNavigation, onRenderNavigation = _d === void 0 ? this._onRenderNavigation : _d, _e = _a.onRenderHeader, onRenderHeader = _e === void 0 ? this._onRenderHeader : _e, _f = _a.onRenderBody, onRenderBody = _f === void 0 ? this._onRenderBody : _f, _g = _a.onRenderFooter, onRenderFooter = _g === void 0 ? this._onRenderFooter : _g;
        var _h = this.state, isOpen = _h.isOpen, isAnimating = _h.isAnimating, id = _h.id;
        var isLeft = type === Panel_Props_1.PanelType.smallFixedNear ? true : false;
        var isRTL = Utilities_1.getRTL();
        var isOnRightSide = isRTL ? isLeft : !isLeft;
        var headerTextId = id + '-headerText';
        var customWidthStyles = (type === Panel_Props_1.PanelType.custom) ? { width: customWidth } : {};
        var renderProps = tslib_1.__assign({}, this.props, { componentId: id });
        if (!isOpen && !isAnimating) {
            return null;
        }
        var overlay;
        if (isBlocking) {
            overlay = (React.createElement(Overlay_1.Overlay, { className: Utilities_1.css(styles.overlay, isOpen && isAnimating && Styling_1.AnimationClassNames.fadeIn200, !isOpen && isAnimating && Styling_1.AnimationClassNames.fadeOut200), isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined }));
        }
        return (React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps),
            React.createElement(Popup_1.Popup, { role: 'dialog', ariaLabelledBy: headerText && headerTextId, onDismiss: this.dismiss },
                React.createElement("div", { className: Utilities_1.css('ms-Panel', styles.root, className, 
                    // because the RTL animations are not being used, we need to set a class
                    isOpen && ('is-open ' + styles.rootIsOpen), type === Panel_Props_1.PanelType.smallFluid && ('ms-Panel--smFluid ' + styles.rootIsSmallFluid), type === Panel_Props_1.PanelType.smallFixedNear && ('ms-Panel--smLeft ' + styles.rootIsSmallLeft), type === Panel_Props_1.PanelType.smallFixedFar && ('ms-Panel--sm ' + styles.rootIsSmall), type === Panel_Props_1.PanelType.medium && ('ms-Panel--md ' + styles.rootIsMedium), (type === Panel_Props_1.PanelType.large || type === Panel_Props_1.PanelType.largeFixed) && ('ms-Panel--lg ' + styles.rootIsLarge), type === Panel_Props_1.PanelType.largeFixed && ('ms-Panel--fixed ' + styles.rootIsFixed), type === Panel_Props_1.PanelType.extraLarge && ('ms-Panel--xl ' + styles.rootIsXLarge), type === Panel_Props_1.PanelType.custom && ('ms-Panel--custom ' + styles.rootIsCustom), hasCloseButton && ('ms-Panel--hasCloseButton ' + styles.rootHasCloseButton)) },
                    overlay,
                    React.createElement(index_1.FocusTrapZone, { className: Utilities_1.css('ms-Panel-main', styles.main, isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideRightIn40, isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideLeftIn40, !isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideLeftOut40, !isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideRightOut40), style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isLightDismiss, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector },
                        React.createElement("div", { className: Utilities_1.css('ms-Panel-commands'), "data-is-visible": true }, onRenderNavigation(renderProps, this._onRenderNavigation)),
                        React.createElement("div", { className: Utilities_1.css('ms-Panel-contentInner', styles.contentInner) },
                            onRenderHeader(renderProps, this._onRenderHeader),
                            onRenderBody(renderProps, this._onRenderBody),
                            onRenderFooter(renderProps, this._onRenderFooter)))))));
    };
    Panel.prototype.open = function () {
        var _this = this;
        if (!this.state.isOpen) {
            this.setState({
                isOpen: true,
                isAnimating: true
            }, function () {
                _this._async.setTimeout(_this._onTransitionComplete, 200);
            });
        }
    };
    Panel.prototype.dismiss = function () {
        var _this = this;
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                isAnimating: true
            }, function () {
                _this._async.setTimeout(_this._onTransitionComplete, 200);
            });
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    Panel.prototype._onRenderNavigation = function (props) {
        var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton;
        if (hasCloseButton) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-navigation', styles.navigation) },
                React.createElement(Button_1.IconButton, { styles: {
                        root: {
                            height: 'auto',
                            width: '44px',
                            color: theme.palette.neutralSecondary,
                            fontSize: Styling_1.IconFontSizes.large,
                        },
                        rootHovered: {
                            color: theme.palette.neutralPrimary
                        }
                    }, className: Utilities_1.css('ms-Panel-closeButton ms-PanelAction-close'), onClick: this._onPanelClick, ariaLabel: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } })));
        }
        return null;
    };
    Panel.prototype._onRenderHeader = function (props) {
        var headerText = props.headerText, componentId = props.componentId, _a = props.headerClassName, headerClassName = _a === void 0 ? '' : _a;
        if (headerText) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-header', styles.header) },
                React.createElement("p", { className: Utilities_1.css('ms-Panel-headerText', styles.headerText, headerClassName), id: componentId + '-headerText', role: 'heading' }, headerText)));
        }
        return null;
    };
    Panel.prototype._onRenderBody = function (props) {
        var contentClass = Utilities_1.css('ms-Panel-content', styles.content, props.isFooterAtBottom && styles.contentGrow);
        return (React.createElement("div", { ref: this._resolveRef('_content'), className: contentClass }, props.children));
    };
    Panel.prototype._onRenderFooter = function (props) {
        var isFooterSticky = this.state.isFooterSticky;
        var _a = this.props.onRenderFooterContent, onRenderFooterContent = _a === void 0 ? null : _a;
        if (onRenderFooterContent) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-footer', styles.footer, isFooterSticky && styles.footerIsSticky) },
                React.createElement("div", { className: Utilities_1.css('ms-Panel-footerInner', styles.footerInner) }, onRenderFooterContent())));
        }
        return null;
    };
    Panel.prototype._updateFooterPosition = function () {
        var _content = this._content;
        if (_content) {
            var height = _content.clientHeight;
            var innerHeight_1 = _content.scrollHeight;
            this.setState({
                isFooterSticky: height < innerHeight_1 ? true : false
            });
        }
    };
    Panel.prototype._onPanelClick = function () {
        this.dismiss();
    };
    Panel.prototype._onTransitionComplete = function () {
        this.setState({
            isAnimating: false
        });
        if (!this.state.isOpen && this.props.onDismissed) {
            this.props.onDismissed();
        }
    };
    Panel.defaultProps = {
        isOpen: false,
        isBlocking: true,
        hasCloseButton: true,
        type: Panel_Props_1.PanelType.smallFixedFar,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderNavigation", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderHeader", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderBody", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderFooter", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onPanelClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onTransitionComplete", null);
    return Panel;
}(Utilities_1.BaseComponent));
exports.Panel = Panel;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(234), exports);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(235), exports);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(236);
var styles = stylesImport;
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.componentDidMount = function () {
        Utilities_1.disableBodyScroll();
    };
    Overlay.prototype.componentWillUnmount = function () {
        Utilities_1.enableBodyScroll();
    };
    Overlay.prototype.render = function () {
        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var modifiedClassName = Utilities_1.css('ms-Overlay', styles.root, className, (_b = {},
            _b['ms-Overlay--dark ' + styles.rootIsDark] = isDarkThemed,
            _b));
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: modifiedClassName })));
        var _b;
    };
    return Overlay;
}(Utilities_1.BaseComponent));
exports.Overlay = Overlay;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_35fc8879{background-color:" }, { "theme": "whiteTranslucent40", "defaultValue": "rgba(255,255,255,.4)" }, { "rawString": ";position:absolute;bottom:0;left:0;right:0;top:0}.root_35fc8879.rootIsNone_35fc8879{visibility:hidden}.root_35fc8879.rootIsDark_35fc8879{background-color:" }, { "theme": "blackTranslucent40", "defaultValue": "rgba(0,0,0,.4)" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_35fc8879{border:1px solid WindowText}}\n" }]);
exports.root = "root_35fc8879";
exports.rootIsNone = "rootIsNone_35fc8879";
exports.rootIsDark = "rootIsDark_35fc8879";


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_fe607b69{pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0}.root_fe607b69 .overlay_fe607b69{pointer-events:none;opacity:1;cursor:pointer;-webkit-transition:opacity .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:opacity .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.main_fe607b69{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;width:100%;bottom:0;top:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}[dir='ltr'] .main_fe607b69{right:0}[dir='rtl'] .main_fe607b69{left:0}@media (min-width: 480px){.main_fe607b69{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";pointer-events:auto;width:340px}[dir='ltr'] .main_fe607b69{-webkit-box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='rtl'] .main_fe607b69{-webkit-box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='ltr'] .main_fe607b69{left:auto}[dir='rtl'] .main_fe607b69{right:auto}}.root_fe607b69.rootIsSmall_fe607b69 .main_fe607b69{width:272px}@media (min-width: 480px){.root_fe607b69.rootIsSmall_fe607b69 .main_fe607b69{width:340px}}.root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{width:272px}[dir='ltr'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{right:auto}[dir='rtl'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{left:auto}[dir='ltr'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{left:0}[dir='rtl'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{right:0}[dir='ltr'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{-webkit-box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='rtl'] .root_fe607b69.rootIsSmallLeft_fe607b69 .main_fe607b69{-webkit-box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2)}.root_fe607b69.rootIsSmallFluid_fe607b69 .main_fe607b69{width:100%}@media (min-width: 768px){.root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69,.root_fe607b69.rootIsLarge_fe607b69 .main_fe607b69,.root_fe607b69.rootIsXLarge_fe607b69 .main_fe607b69,.root_fe607b69.rootIsCustom_fe607b69 .main_fe607b69{width:auto}[dir='ltr'] .root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69,[dir='ltr'] .root_fe607b69.rootIsLarge_fe607b69 .main_fe607b69,[dir='ltr'] .root_fe607b69.rootIsXLarge_fe607b69 .main_fe607b69,[dir='ltr'] .root_fe607b69.rootIsCustom_fe607b69 .main_fe607b69{left:48px}[dir='rtl'] .root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69,[dir='rtl'] .root_fe607b69.rootIsLarge_fe607b69 .main_fe607b69,[dir='rtl'] .root_fe607b69.rootIsXLarge_fe607b69 .main_fe607b69,[dir='rtl'] .root_fe607b69.rootIsCustom_fe607b69 .main_fe607b69{right:48px}}@media (min-width: 1024px){.root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69{width:643px}[dir='ltr'] .root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69{left:auto}[dir='rtl'] .root_fe607b69.rootIsMedium_fe607b69 .main_fe607b69{right:auto}}@media (min-width: 1366px){[dir='ltr'] .root_fe607b69.rootIsLarge_fe607b69 .main_fe607b69{left:428px}[dir='rtl'] .root_fe607b69.rootIsLarge_fe607b69 .main_fe607b69{right:428px}}@media (min-width: 1366px){.root_fe607b69.rootIsLarge_fe607b69.rootIsFixed_fe607b69 .main_fe607b69{width:940px}[dir='ltr'] .root_fe607b69.rootIsLarge_fe607b69.rootIsFixed_fe607b69 .main_fe607b69{left:auto}[dir='rtl'] .root_fe607b69.rootIsLarge_fe607b69.rootIsFixed_fe607b69 .main_fe607b69{right:auto}}@media (min-width: 1366px){[dir='ltr'] .root_fe607b69.rootIsXLarge_fe607b69 .main_fe607b69{left:176px}[dir='rtl'] .root_fe607b69.rootIsXLarge_fe607b69 .main_fe607b69{right:176px}}@media (min-width: 1024px){[dir='ltr'] .root_fe607b69.rootIsCustom_fe607b69 .main_fe607b69{left:auto}[dir='rtl'] .root_fe607b69.rootIsCustom_fe607b69 .main_fe607b69{right:auto}}.root_fe607b69.rootIsOpen_fe607b69 .main_fe607b69{pointer-events:auto}.root_fe607b69.rootIsOpen_fe607b69 .overlay_fe607b69{cursor:pointer;pointer-events:auto}@media screen and (-ms-high-contrast: active){.root_fe607b69.rootIsOpen_fe607b69 .overlay_fe607b69{opacity:0}}.navigation_fe607b69{padding:0 5px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contentInner_fe607b69{position:absolute;top:0;bottom:0;left:0;right:0;overflow-y:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}.rootHasCloseButton_fe607b69 .contentInner_fe607b69{top:44px}.header_fe607b69,.content_fe607b69,.footerInner_fe607b69{padding-left:16px;padding-right:16px}@media (min-width: 768px){.header_fe607b69,.content_fe607b69,.footerInner_fe607b69{padding-left:32px;padding-right:32px}}@media (min-width: 1366px){.header_fe607b69,.content_fe607b69,.footerInner_fe607b69{padding-left:40px;padding-right:40px}}.header_fe607b69{margin:14px 0;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}@media (min-width: 1024px){.header_fe607b69{margin-top:30px}}.content_fe607b69{margin-bottom:0;padding-bottom:20px;overflow-y:auto}.contentGrow_fe607b69{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.footer_fe607b69{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;border-top:1px solid transparent;-webkit-transition:border .367s cubic-bezier(0.1, 0.25, 0.75, 0.9);transition:border .367s cubic-bezier(0.1, 0.25, 0.75, 0.9)}.footerInner_fe607b69{padding-bottom:20px;padding-top:20px}.footerIsSticky_fe607b69{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-top-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.headerText_fe607b69{font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:32px;margin:0}\n" }]);
exports.root = "root_fe607b69";
exports.overlay = "overlay_fe607b69";
exports.main = "main_fe607b69";
exports.rootIsSmall = "rootIsSmall_fe607b69";
exports.rootIsSmallLeft = "rootIsSmallLeft_fe607b69";
exports.rootIsSmallFluid = "rootIsSmallFluid_fe607b69";
exports.rootIsMedium = "rootIsMedium_fe607b69";
exports.rootIsLarge = "rootIsLarge_fe607b69";
exports.rootIsXLarge = "rootIsXLarge_fe607b69";
exports.rootIsCustom = "rootIsCustom_fe607b69";
exports.rootIsFixed = "rootIsFixed_fe607b69";
exports.rootIsOpen = "rootIsOpen_fe607b69";
exports.navigation = "navigation_fe607b69";
exports.contentInner = "contentInner_fe607b69";
exports.rootHasCloseButton = "rootHasCloseButton_fe607b69";
exports.header = "header_fe607b69";
exports.content = "content_fe607b69";
exports.footerInner = "footerInner_fe607b69";
exports.contentGrow = "contentGrow_fe607b69";
exports.footer = "footer_fe607b69";
exports.footerIsSticky = "footerIsSticky_fe607b69";
exports.headerText = "headerText_fe607b69";


/***/ })
/******/ ])});;
//# sourceMappingURL=people-directory-web-part.js.map