/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/content-wrapper/content-wrapper.tsx":
/*!********************************************************!*\
  !*** ./components/content-wrapper/content-wrapper.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var ContentWrapper = function () {
    var theme = useTheme();
    return (react_1.default.createElement("div", { className: "content-wrapper" },
        react_1.default.createElement(__1.Text, { color: theme.color }, "Content Wrappers"),
        react_1.default.createElement("style", { jsx: true }, "\n                .content-wrapper {\n                    \n                }\n            ")));
};
exports.default = ContentWrapper;


/***/ }),

/***/ "./components/dash-header/dash-header.tsx":
/*!************************************************!*\
  !*** ./components/dash-header/dash-header.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var DashHeader = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "dash-header" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "DashHeader"),
        react_1.default.createElement("style", { jsx: true }, "\n                .dash-header {\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    position: fixed;\n                    height: 60px;\n                    background-color: " + theme.background + ";\n                }\n            ")));
};
exports.default = DashHeader;


/***/ }),

/***/ "./components/footer/footer.tsx":
/*!**************************************!*\
  !*** ./components/footer/footer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var Footer = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "footer" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "Footer"),
        react_1.default.createElement("style", { jsx: true }, "\n                .footer {\n                    \n                }\n            ")));
};
exports.default = Footer;


/***/ }),

/***/ "./components/grid-element/grid-element.tsx":
/*!**************************************************!*\
  !*** ./components/grid-element/grid-element.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var GridElement = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "grid-element" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "GridElement"),
        react_1.default.createElement("style", { jsx: true }, "\n                .grid-element {\n                    \n                }\n            ")));
};
exports.default = GridElement;


/***/ }),

/***/ "./components/header/header.tsx":
/*!**************************************!*\
  !*** ./components/header/header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var Header = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "header" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "Header"),
        react_1.default.createElement("style", { jsx: true }, "\n                .header {\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    position: fixed;\n                    height: 67px;\n                    background-color: " + theme.background + ";\n                }\n            ")));
};
exports.default = Header;


/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashHeader = exports.Sidebar = exports.Text = exports.Search = exports.Header = exports.GridElement = exports.Footer = exports.ContentWrapper = void 0;
var content_wrapper_1 = __webpack_require__(/*! ./content-wrapper/content-wrapper */ "./components/content-wrapper/content-wrapper.tsx");
Object.defineProperty(exports, "ContentWrapper", ({ enumerable: true, get: function () { return __importDefault(content_wrapper_1).default; } }));
var footer_1 = __webpack_require__(/*! ./footer/footer */ "./components/footer/footer.tsx");
Object.defineProperty(exports, "Footer", ({ enumerable: true, get: function () { return __importDefault(footer_1).default; } }));
var grid_element_1 = __webpack_require__(/*! ./grid-element/grid-element */ "./components/grid-element/grid-element.tsx");
Object.defineProperty(exports, "GridElement", ({ enumerable: true, get: function () { return __importDefault(grid_element_1).default; } }));
var header_1 = __webpack_require__(/*! ./header/header */ "./components/header/header.tsx");
Object.defineProperty(exports, "Header", ({ enumerable: true, get: function () { return __importDefault(header_1).default; } }));
var search_1 = __webpack_require__(/*! ./search/search */ "./components/search/search.tsx");
Object.defineProperty(exports, "Search", ({ enumerable: true, get: function () { return __importDefault(search_1).default; } }));
var text_1 = __webpack_require__(/*! ./text/text */ "./components/text/text.tsx");
Object.defineProperty(exports, "Text", ({ enumerable: true, get: function () { return __importDefault(text_1).default; } }));
var sidebar_1 = __webpack_require__(/*! ./sidebar/sidebar */ "./components/sidebar/sidebar.tsx");
Object.defineProperty(exports, "Sidebar", ({ enumerable: true, get: function () { return __importDefault(sidebar_1).default; } }));
var dash_header_1 = __webpack_require__(/*! ./dash-header/dash-header */ "./components/dash-header/dash-header.tsx");
Object.defineProperty(exports, "DashHeader", ({ enumerable: true, get: function () { return __importDefault(dash_header_1).default; } }));


/***/ }),

/***/ "./components/search/search.tsx":
/*!**************************************!*\
  !*** ./components/search/search.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var Sidebar = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "search" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "Search"),
        react_1.default.createElement("style", { jsx: true }, "\n                .search {\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    background-color: " + theme.background + ";\n                    border: 1px solid " + theme.outline + ";\n                    height: 800px;\n                }\n\n                @media (max-width: 1000px) {\n                    .search {\n                        height: 600px;\n                    }\n                }\n            ")));
};
exports.default = Sidebar;


/***/ }),

/***/ "./components/sidebar/sidebar.tsx":
/*!****************************************!*\
  !*** ./components/sidebar/sidebar.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var __1 = __webpack_require__(/*! ../ */ "./components/index.ts");
var use_theme_1 = __importDefault(__webpack_require__(/*! ../use-theme */ "./components/use-theme/index.ts"));
var Sidebar = function () {
    var theme = use_theme_1.default();
    return (react_1.default.createElement("div", { className: "sidebar" },
        react_1.default.createElement(__1.Text, { color: theme.text }, "Sidebar"),
        react_1.default.createElement("style", { jsx: true }, "\n                .sidebar {\n                    \n                }\n            ")));
};
exports.default = Sidebar;


/***/ }),

/***/ "./components/text/text.tsx":
/*!**********************************!*\
  !*** ./components/text/text.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var Text = function (_a) {
    var color = _a.color, children = _a.children;
    return (react_1.default.createElement("p", null,
        children,
        react_1.default.createElement("style", { jsx: true }, "\n                p {\n                    color: " + color + "\n                }\n            ")));
};
exports.default = Text;


/***/ }),

/***/ "./components/use-theme/index.ts":
/*!***************************************!*\
  !*** ./components/use-theme/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var use_theme_1 = __webpack_require__(/*! ./use-theme */ "./components/use-theme/use-theme.tsx");
exports.default = use_theme_1.useTheme;


/***/ }),

/***/ "./components/use-theme/theme.tsx":
/*!****************************************!*\
  !*** ./components/use-theme/theme.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var light_1 = __importDefault(__webpack_require__(/*! ./themes/light */ "./components/use-theme/themes/light.ts"));
var getPresetStaticTheme = function () {
    return light_1.default;
};
var Themes = {
    getPresetStaticTheme: getPresetStaticTheme,
};
exports.default = Themes;


/***/ }),

/***/ "./components/use-theme/themes/light.ts":
/*!**********************************************!*\
  !*** ./components/use-theme/themes/light.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Palette = {
    background: "#fff",
    text: "#000",
    outline: "#888"
};
exports.default = Palette;


/***/ }),

/***/ "./components/use-theme/use-theme.tsx":
/*!********************************************!*\
  !*** ./components/use-theme/use-theme.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTheme = exports.ThemeContext = void 0;
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var theme_1 = __importDefault(__webpack_require__(/*! ./theme */ "./components/use-theme/theme.tsx"));
var defaultTheme = theme_1.default.getPresetStaticTheme();
exports.ThemeContext = react_1.default.createContext(defaultTheme);
var useTheme = function () { return react_1.default.useContext(exports.ThemeContext); };
exports.useTheme = useTheme;


/***/ }),

/***/ "./exec/index.tsx":
/*!************************!*\
  !*** ./exec/index.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var react_dom_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var layouts_1 = __webpack_require__(/*! ../layouts */ "./layouts/index.ts");
react_dom_1.default.render(react_1.default.createElement(layouts_1.Dash, null), document.getElementById("root"));


/***/ }),

/***/ "./layouts/dash/dash.tsx":
/*!*******************************!*\
  !*** ./layouts/dash/dash.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var components_1 = __webpack_require__(/*! ../../components */ "./components/index.ts");
var Dash = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.DashHeader, null),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(components_1.Sidebar, null),
            react_1.default.createElement(components_1.ContentWrapper, null))));
};
exports.default = Dash;


/***/ }),

/***/ "./layouts/element-search/element-search.tsx":
/*!***************************************************!*\
  !*** ./layouts/element-search/element-search.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var components_1 = __webpack_require__(/*! ../../components */ "./components/index.ts");
var ElementSearch = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Header, null),
        react_1.default.createElement(components_1.Search, null),
        react_1.default.createElement(components_1.ContentWrapper, null),
        react_1.default.createElement(components_1.Footer, null)));
};
exports.default = ElementSearch;


/***/ }),

/***/ "./layouts/index.ts":
/*!**************************!*\
  !*** ./layouts/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementSearch = exports.Dash = void 0;
var dash_1 = __importDefault(__webpack_require__(/*! ./dash/dash */ "./layouts/dash/dash.tsx"));
exports.Dash = dash_1.default;
var element_search_1 = __importDefault(__webpack_require__(/*! ./element-search/element-search */ "./layouts/element-search/element-search.tsx"));
exports.ElementSearch = element_search_1.default;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./exec/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map