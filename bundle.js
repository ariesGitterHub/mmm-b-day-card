/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Questrial&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* @import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap'); */\n\n:root {\n\n    --bkgd: #f4f1ee;\n    --contrast: #000000; \n    --accent1: #96a0ca; \n    --accent2: #e5ce84; \n\n    --font-fun: 'Luckiest Guy', cursive;\n    --font-fancy: \"Cabin Sketch\", sans-serif;\n    --font-hand: \"Indie Flower\", cursive;\n    --font-plain:  \"Questrial\", sans-serif;\n\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    width: 100vw;\n    background-color: var(--bkgd); \n\n    }\n\n#header-content {\n    background-color: var(--accent2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#title-img {\n    height: 6rem;\n    margin-top: .5rem;\n}\n\n#title {\n    font-family: var(--font-hand);\n    font-size: 2rem;\n\n}\n\n#timer {\n    height: 3rem;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--font-plain);\n    font-size: 1.35rem;\n\n}\n\n#nav-bar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: .25rem; */\n        margin-top:.5rem;\n\n}\n\n.nav-btn {\n    height: 3rem;\n    width: fit-content;\n    background-color: var(--contrast);\n    border: .25rem solid var(--contrast);\n    border-radius: .75rem;\n    color: var(--bkgd);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--font-plain);\n    font-size: 1.25rem;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.nav-btn:hover {\n    background-color: var(--accent1);\n    border: .25rem solid var(--contrast);\n    color: var(--contrast);\n    transform: scale(1.05);\n}\n\n.nav-btn:active {\n    transform: scale(.95);\n}\n\n#slideshow-container {\nposition: relative;\nwidth: 100vw;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-wrap: wrap;\nmargin: 0;\noverflow: hidden;\n\n}\n\n.slide {\n\n}\n\n.slide-img {\nwidth: 100%;\nheight: auto;\n/* margin: 1rem; */\n}\n\n.fade {\nanimation: fade 2s ease-in-out;\n}\n\n@keyframes fade {\nfrom { opacity: 0.4; }\nto { opacity: 1; }\n}\n\n#slide-btn-dot-row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: .25rem;\n}\n\n#btn-prev, #btn-next {\n    height: 3rem;\n    width: 3rem;\n    background-color: var(--bkgd);\n    border: .25rem solid var(--contrast);\n    border-radius: .75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#btn-prev:hover, #btn-next:hover {\n    background-color: var(--accent1);\n    border: .25rem solid var(--contrast);\n    color: var(--contrast);\n    transform: scale(1.05);\n}\n\n#btn-prev:active, #btn-next:active {\n    transform: scale(.95);\n}\n\n#btn-prev-img, #btn-next-img {\n    height: 2rem;\n    width: auto;\n}\n\n.dot {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: .25rem solid var(--contrast);\n    border-radius: 50%;\n}\n\n#home-content {\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: center;\n    align-items: center;\n}\n\n#day-content {\n\n}\n\n#year-content {\n\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/MBC01.png":
/*!******************************!*\
  !*** ./src/assets/MBC01.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5c6609041e2d536c16bb46fc974fbf8f.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC01.png?");

/***/ }),

/***/ "./src/assets/MBC02.png":
/*!******************************!*\
  !*** ./src/assets/MBC02.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/400d45aedf82365234c008a2443c60cb.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC02.png?");

/***/ }),

/***/ "./src/assets/MBC03.png":
/*!******************************!*\
  !*** ./src/assets/MBC03.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/514e3953e14c90e99879d1037144160d.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC03.png?");

/***/ }),

/***/ "./src/assets/MBC04.png":
/*!******************************!*\
  !*** ./src/assets/MBC04.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/710f8c999cbe7da697317577c4e1dbd0.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC04.png?");

/***/ }),

/***/ "./src/assets/MBC05.png":
/*!******************************!*\
  !*** ./src/assets/MBC05.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/7a1685b481558e7cbc8bbe85fc7cda57.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC05.png?");

/***/ }),

/***/ "./src/assets/MBC06.png":
/*!******************************!*\
  !*** ./src/assets/MBC06.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/273a84202790bf72041b4131000f1ce9.png\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/MBC06.png?");

/***/ }),

/***/ "./src/assets/cake.svg":
/*!*****************************!*\
  !*** ./src/assets/cake.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/342e2232475a94057dce2f646610efdd.svg\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/cake.svg?");

/***/ }),

/***/ "./src/assets/next.svg":
/*!*****************************!*\
  !*** ./src/assets/next.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/9c033c23065a87de536d7660006b6f43.svg\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/next.svg?");

/***/ }),

/***/ "./src/assets/prev.svg":
/*!*****************************!*\
  !*** ./src/assets/prev.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/405d3717048d70ea578ded028b7e8bf1.svg\");\n\n//# sourceURL=webpack://mmm-b-day-card/./src/assets/prev.svg?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _javascript_headerContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/headerContent */ \"./src/javascript/headerContent.js\");\n/* harmony import */ var _javascript_homeContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/homeContent */ \"./src/javascript/homeContent.js\");\n/* harmony import */ var _javascript_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/functions.js */ \"./src/javascript/functions.js\");\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n(0,_javascript_headerContent__WEBPACK_IMPORTED_MODULE_1__.createHeader)();\n(0,_javascript_homeContent__WEBPACK_IMPORTED_MODULE_2__.createHome)();\n(0,_javascript_functions_js__WEBPACK_IMPORTED_MODULE_3__.slideShow)();\n\n});\n\n//# sourceURL=webpack://mmm-b-day-card/./src/index.js?");

/***/ }),

/***/ "./src/javascript/functions.js":
/*!*************************************!*\
  !*** ./src/javascript/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   age: () => (/* binding */ age),\n/* harmony export */   calculateExactAge: () => (/* binding */ calculateExactAge),\n/* harmony export */   formatAgeWithSuffix: () => (/* binding */ formatAgeWithSuffix),\n/* harmony export */   slideShow: () => (/* binding */ slideShow),\n/* harmony export */   updateCountdown: () => (/* binding */ updateCountdown)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/differenceInYears.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/startOfDay.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/addMonths.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/differenceInMonths.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/differenceInDays.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/addYears.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/differenceInSeconds.mjs\");\n\n\nconst birthday = new Date(\"1951-09-14\");\nconst today = new Date();\nconst age = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInYears)(today, birthday);\n\nconsole.log(`Age: ${age}`);\n\nfunction calculateExactAge(birthday, currentDate = new Date()) {\n  // Ensure both dates are at the start of the day to avoid time issues\n  const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(birthday);\n  const endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(currentDate);\n\n  // Calculate the total years\n  const years = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInYears)(endDate, startDate);\n\n  // Calculate the total months\n  const birthdayThisYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMonths)(startDate, years * 12);\n  const months = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInMonths)(endDate, birthdayThisYear);\n\n  // Calculate the remaining days\n  const birthdayThisMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMonths)(birthdayThisYear, months);\n  const days = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(endDate, birthdayThisMonth);\n\n  return { years, months, days };\n}\n\nconst currentDate = new Date(); // or any other date\nconst exactAge = calculateExactAge(birthday, currentDate);\n\nconsole.log(\n  `Age: ${exactAge.years} years, ${exactAge.months} months, and ${exactAge.days} days`\n);\n\n// export function exactAge() {\n\n//   const exactCurrentAge = document.createElement(\"p\");\n//   exactCurrentAge.id = \"exact-current-age\";\n//   exactCurrentAge.textContent = `You are exactly: ${age.years} years, ${age.months} months, and ${age.days} days young. `;\n\n// }\n\nfunction getOrdinalSuffix(number) {\n  const lastDigit = number % 10;\n  const lastTwoDigits = number % 100;\n\n  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {\n    return 'th';\n  }\n\n  switch (lastDigit) {\n    case 1:\n      return 'st';\n    case 2:\n      return 'nd';\n    case 3:\n      return 'rd';\n    default:\n      return 'th';\n  }\n}\n\nfunction formatAgeWithSuffix(age) {\n  const suffix = getOrdinalSuffix(age);\n  return `${age}${suffix}`;\n}\n\n// Example usage\n\nconsole.log(`Age: ${formatAgeWithSuffix(age)}`); // Output: Age: 72nd\n\n\n\n\n\n\n// Function to get the next occurrence of September 14\nfunction getNextTargetDate(currentDate) {\n  const currentYear = currentDate.getFullYear();\n  let targetDate = new Date(currentYear, 8, 14); // September is month 8 (0-indexed)\n\n  if (currentDate > targetDate) {\n    // If the target date has already passed this year, set the target date to next year\n    targetDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addYears)(targetDate, 1);\n  }\n\n  return targetDate;\n}\n\n// Function to get the countdown to the target date\nfunction getCountdownToTargetDate(targetDate, currentDate = new Date()) {\n  const diffInSeconds = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInSeconds)(targetDate, currentDate);\n  const days = Math.floor(diffInSeconds / (24 * 60 * 60));\n  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));\n  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);\n  const seconds = diffInSeconds % 60;\n\n  return { days, hours, minutes, seconds };\n}\n\n// Function to update the countdown display\nfunction updateCountdown() {\n  const now = new Date();\n  const nextTargetDate = getNextTargetDate(now);\n  const countdown = getCountdownToTargetDate(nextTargetDate);\n\n//   console.log(\n//     `Countdown to September 14: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, and ${countdown.seconds} seconds`\n//   );\n\n  return countdown\n}\n\n// Initial call to display the countdown immediately\nupdateCountdown();\n\n// Set up an interval to update the countdown every second\n// setInterval(updateCountdown, 1000);\n\n\n\n// export function slideShow() {\n//   // Initial slide index\n//   let slideIndex = 0;\n//   // let dotIndex = 0;\n\n//   // Function to show slides\n//   function showSlides() {\n//     const slides = document.getElementsByClassName(\"slide\");\n//     const dots = document.getElementsByClassName(\"dot\");\n\n//     // Hide all slides\n//     for (let i = 0; i < slides.length; i++) {\n//       slides[i].style.display = \"none\";\n//       dots[i].style.backgroundColor = \"transparent\";\n//     }\n\n//     // Increment slide index\n//     slideIndex++;\n//     if (slideIndex > slides.length) {\n//       slideIndex = 1; // Loop back to the first slide\n//       // dotIndex = 1;\n//     }\n\n//     // Display the current slide\n//     slides[slideIndex - 1].style.display = \"block\";\n//     dots[slideIndex -1].style.backgroundColor = \"var(--accent1)\";\n    \n\n//     // Change slide every 5 seconds\n//     setTimeout(showSlides, 5000);\n//   }\n\n//   // Start the slideshow\n//   showSlides();\n// }\n\nfunction slideShow() {\n  // Initial slide index\n  let slideIndex = 1;\n\n  // Function to show slides\n  function showSlides() {\n    const slides = document.getElementsByClassName(\"slide\");\n    const dots = document.getElementsByClassName(\"dot\");\n\n    // Hide all slides and reset all dots\n    for (let i = 0; i < slides.length; i++) {\n      slides[i].style.display = \"none\";\n      dots[i].style.backgroundColor = \"transparent\";\n    }\n\n    // Display the current slide and highlight the corresponding dot\n    slides[slideIndex - 1].style.display = \"block\";\n    dots[slideIndex - 1].style.backgroundColor = \"var(--accent1)\";\n  }\n\n  // Function to show the next slide\n  function nextSlide() {\n    slideIndex++;\n    if (slideIndex > document.getElementsByClassName(\"slide\").length) {\n      slideIndex = 1; // Loop back to the first slide\n    }\n    showSlides();\n  }\n\n  // Function to show the previous slide\n  function prevSlide() {\n    slideIndex--;\n    if (slideIndex < 1) {\n      slideIndex = document.getElementsByClassName(\"slide\").length; // Loop to the last slide\n    }\n    showSlides();\n  }\n\n  // Attach event listeners to buttons\n  document.getElementById(\"btn-next\").addEventListener(\"click\", nextSlide);\n  document.getElementById(\"btn-prev\").addEventListener(\"click\", prevSlide);\n\n  // Start the slideshow and automatic slide change\n  showSlides();\n  setInterval(nextSlide, 5000); // Change slide every 5 seconds\n}\n\n\n//# sourceURL=webpack://mmm-b-day-card/./src/javascript/functions.js?");

/***/ }),

/***/ "./src/javascript/headerContent.js":
/*!*****************************************!*\
  !*** ./src/javascript/headerContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/javascript/functions.js\");\n/* harmony import */ var _assets_cake_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cake.svg */ \"./src/assets/cake.svg\");\n\n\n\nfunction createHeader() {\n    const headerContent = document.querySelector(\"#header-content\");\n\n    const title = document.createElement(\"h1\");\n    title.id = \"title\";\n    title.textContent = `Happy ${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.formatAgeWithSuffix)(_functions_js__WEBPACK_IMPORTED_MODULE_0__.age)} Birthday Mom!`\n\n    const titleImg = document.createElement(\"img\");\n    titleImg.id = \"title-img\";\n    titleImg.src = _assets_cake_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    titleImg.alt = \"\";\n\n    const timer = document.createElement(\"p\");\n    timer.id = \"timer\";\n    timer.textContent = `(Your next birthday is in \n    ${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateCountdown)().days} days.)`\n    // , ${updateCountdown().hours} hours, \n    // ${updateCountdown().minutes} minutes, and \n    // ${updateCountdown().seconds} seconds`;\n\n    const navBar = document.createElement(\"div\");\n    navBar.id = \"nav-bar\";\n\n    const btnHome = document.createElement(\"button\");\n    btnHome.id = \"btn-home\";\n    btnHome.classList.add(\"nav-btn\");\n    btnHome.textContent = \"Home\";\n\n    const btnDays = document.createElement(\"button\");\n    btnDays.id = \"btn-days\";\n    btnDays.classList.add(\"nav-btn\");\n    btnDays.textContent = \"This Year\";\n\n    const btnYear = document.createElement(\"button\");\n    btnYear.id = \"btn-year\";\n    btnYear.classList.add(\"nav-btn\");\n    btnYear.textContent = \"Prior Years\";\n\n    headerContent.append(titleImg, title, timer, navBar);\n\n    navBar.append(btnHome, btnDays, btnYear);\n}\n\n\n\n//# sourceURL=webpack://mmm-b-day-card/./src/javascript/headerContent.js?");

/***/ }),

/***/ "./src/javascript/homeContent.js":
/*!***************************************!*\
  !*** ./src/javascript/homeContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_MBC01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/MBC01.png */ \"./src/assets/MBC01.png\");\n/* harmony import */ var _assets_MBC02_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/MBC02.png */ \"./src/assets/MBC02.png\");\n/* harmony import */ var _assets_MBC03_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/MBC03.png */ \"./src/assets/MBC03.png\");\n/* harmony import */ var _assets_MBC04_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/MBC04.png */ \"./src/assets/MBC04.png\");\n/* harmony import */ var _assets_MBC05_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/MBC05.png */ \"./src/assets/MBC05.png\");\n/* harmony import */ var _assets_MBC06_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/MBC06.png */ \"./src/assets/MBC06.png\");\n/* harmony import */ var _assets_prev_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/prev.svg */ \"./src/assets/prev.svg\");\n/* harmony import */ var _assets_next_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/next.svg */ \"./src/assets/next.svg\");\n\n\n\n\n\n\n\n\n\nfunction createHome() {\n  const homeContent = document.querySelector(\"#home-content\");\n\n  const slideshowContainer = document.createElement(\"div\");\n  slideshowContainer.id = \"slideshow-container\";\n\n  const slide1 = document.createElement(\"div\");\n  slide1.classList.add(\"slide\", \"fade\");\n\n  const slideImg1 = document.createElement(\"img\");\n  slideImg1.classList.add(\"slide-img\");\n  slideImg1.src = _assets_MBC01_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  const slide2 = document.createElement(\"div\");\n  slide2.classList.add(\"slide\", \"fade\");\n\n  const slideImg2 = document.createElement(\"img\");\n  slideImg2.classList.add(\"slide-img\");\n  slideImg2.src = _assets_MBC02_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  const slide3 = document.createElement(\"div\");\n  slide3.classList.add(\"slide\", \"fade\");\n\n  const slideImg3 = document.createElement(\"img\");\n  slideImg3.classList.add(\"slide-img\");\n  slideImg3.src = _assets_MBC03_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  const slide4 = document.createElement(\"div\");\n  slide4.classList.add(\"slide\", \"fade\");\n\n  const slideImg4 = document.createElement(\"img\");\n  slideImg4.classList.add(\"slide-img\");\n  slideImg4.src = _assets_MBC04_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n  const slide5 = document.createElement(\"div\");\n  slide5.classList.add(\"slide\", \"fade\");\n\n  const slideImg5 = document.createElement(\"img\");\n  slideImg5.classList.add(\"slide-img\");\n  slideImg5.src = _assets_MBC05_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n  const slide6 = document.createElement(\"div\");\n  slide6.classList.add(\"slide\", \"fade\");\n\n  const slideImg6 = document.createElement(\"img\");\n  slideImg6.classList.add(\"slide-img\");\n  slideImg6.src = _assets_MBC06_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n  const slideBtnDotRow = document.createElement(\"div\");\n  slideBtnDotRow.id = \"slide-btn-dot-row\";\n\n  const btnPrev = document.createElement(\"button\");\n  btnPrev.id = \"btn-prev\";\n \n  const btnPrevImg = document.createElement(\"img\");\n  btnPrevImg.id = \"btn-prev-img\";\n  btnPrevImg.src = _assets_prev_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n\n  const dot1 = document.createElement(\"span\");\n  dot1.classList.add(\"dot\");\n  const dot2 = document.createElement(\"span\");\n  dot2.classList.add(\"dot\");\n  const dot3 = document.createElement(\"span\");\n  dot3.classList.add(\"dot\");\n  const dot4 = document.createElement(\"span\");\n  dot4.classList.add(\"dot\");\n  const dot5 = document.createElement(\"span\");\n  dot5.classList.add(\"dot\");\n  const dot6 = document.createElement(\"span\");\n  dot6.classList.add(\"dot\");\n\n  const btnNext = document.createElement(\"button\");\n  btnNext.id = \"btn-next\";\n  \n  const btnNextImg = document.createElement(\"img\");\n  btnNextImg.id = \"btn-next-img\";\n  btnNextImg.src = _assets_next_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n\n  homeContent.append(slideshowContainer);\n\n  slideshowContainer.append(\n    slide1,\n    slide2,\n    slide3,\n    slide4,\n    slide5,\n    slide6,\n    slideBtnDotRow,\n  );\n\n  slideBtnDotRow.append(btnPrev, dot1, dot2, dot3, dot4, dot5, dot6, btnNext);\n\n  slide1.append(slideImg1);\n  slide2.append(slideImg2);\n  slide3.append(slideImg3);\n  slide4.append(slideImg4);\n  slide5.append(slideImg5);\n  slide6.append(slideImg6);\n\n  btnPrev.append(btnPrevImg);\n  btnNext.append(btnNextImg);\n}\n\n\n//# sourceURL=webpack://mmm-b-day-card/./src/javascript/homeContent.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nfunction getRoundingMethod(method) {\n  return (number) => {\n    const round = method ? Math[method] : Math.trunc;\n    const result = round(number);\n    // Prevent negative zero\n    return result === 0 ? 0 : result;\n  };\n}\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/_lib/getRoundingMethod.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const utcDate = new Date(\n    Date.UTC(\n      _date.getFullYear(),\n      _date.getMonth(),\n      _date.getDate(),\n      _date.getHours(),\n      _date.getMinutes(),\n      _date.getSeconds(),\n      _date.getMilliseconds(),\n    ),\n  );\n  utcDate.setUTCFullYear(_date.getFullYear());\n  return +date - +utcDate;\n}\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMonths: () => (/* binding */ addMonths),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n\n\n\n/**\n * @name addMonths\n * @category Month Helpers\n * @summary Add the specified number of months to the given date.\n *\n * @description\n * Add the specified number of months to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of months to be added.\n *\n * @returns The new date with the months added\n *\n * @example\n * // Add 5 months to 1 September 2014:\n * const result = addMonths(new Date(2014, 8, 1), 5)\n * //=> Sun Feb 01 2015 00:00:00\n *\n * // Add one month to 30 January 2023:\n * const result = addMonths(new Date(2023, 0, 30), 1)\n * //=> Tue Feb 28 2023 00:00:00\n */\nfunction addMonths(date, amount) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);\n  if (!amount) {\n    // If 0 months, no-op to avoid changing times in the hour before end of DST\n    return _date;\n  }\n  const dayOfMonth = _date.getDate();\n\n  // The JS Date object supports date math by accepting out-of-bounds values for\n  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and\n  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we\n  // want except that dates will wrap around the end of a month, meaning that\n  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So\n  // we'll default to the end of the desired month by adding 1 to the desired\n  // month and using a date of 0 to back up one day to the end of the desired\n  // month.\n  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());\n  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);\n  const daysInMonth = endOfDesiredMonth.getDate();\n  if (dayOfMonth >= daysInMonth) {\n    // If we're already at the end of the month, then this is the correct date\n    // and we're done.\n    return endOfDesiredMonth;\n  } else {\n    // Otherwise, we now know that setting the original day-of-month value won't\n    // cause an overflow, so set the desired day-of-month. Note that we can't\n    // just set the date of `endOfDesiredMonth` because that object may have had\n    // its time changed in the unusual case where where a DST transition was on\n    // the last day of the month and its local time was in the hour skipped or\n    // repeated next to a DST transition.  So we use `date` instead which is\n    // guaranteed to still have the original time.\n    _date.setFullYear(\n      endOfDesiredMonth.getFullYear(),\n      endOfDesiredMonth.getMonth(),\n      dayOfMonth,\n    );\n    return _date;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/addMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/addYears.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/addYears.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addYears: () => (/* binding */ addYears),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ \"./node_modules/date-fns/addMonths.mjs\");\n\n\n/**\n * @name addYears\n * @category Year Helpers\n * @summary Add the specified number of years to the given date.\n *\n * @description\n * Add the specified number of years to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of years to be added.\n *\n * @returns The new date with the years added\n *\n * @example\n * // Add 5 years to 1 September 2014:\n * const result = addYears(new Date(2014, 8, 1), 5)\n * //=> Sun Sep 01 2019 00:00:00\n */\nfunction addYears(date, amount) {\n  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, amount * 12);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addYears);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/addYears.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareAsc: () => (/* binding */ compareAsc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to compare\n * @param dateRight - The second date to compare\n *\n * @returns The result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const diff = _dateLeft.getTime() - _dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/compareAsc.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from \"./constants/date-fns/constants\";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/constants.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from 'date-fns'\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use contrustor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   )\n * }\n */\nfunction constructFrom(date, value) {\n  if (date instanceof Date) {\n    return new date.constructor(value);\n  } else {\n    return new Date(value);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/constructFrom.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)\n/* harmony export */ });\n/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ \"./node_modules/date-fns/constants.mjs\");\n/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ \"./node_modules/date-fns/startOfDay.mjs\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ \"./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs\");\n\n\n\n\n/**\n * @name differenceInCalendarDays\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates. This means that the times are removed\n * from the dates and then the difference in days is calculated.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of calendar days\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n * // How many calendar days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInCalendarDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 1\n */\nfunction differenceInCalendarDays(dateLeft, dateRight) {\n  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);\n  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);\n\n  const timestampLeft =\n    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);\n  const timestampRight =\n    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);\n\n  // Round the number of days to the nearest integer because the number of\n  // milliseconds in a day is not constant (e.g. it's different in the week of\n  // the daylight saving time clock shift).\n  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInCalendarDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarMonths: () => (/* binding */ differenceInCalendarMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name differenceInCalendarMonths\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of calendar months\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\nfunction differenceInCalendarMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();\n  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();\n\n  return yearDiff * 12 + monthDiff;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarMonths);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInCalendarMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarYears.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarYears.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarYears: () => (/* binding */ differenceInCalendarYears)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name differenceInCalendarYears\n * @category Year Helpers\n * @summary Get the number of calendar years between the given dates.\n *\n * @description\n * Get the number of calendar years between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n\n * @returns The number of calendar years\n *\n * @example\n * // How many calendar years are between 31 December 2013 and 11 February 2015?\n * const result = differenceInCalendarYears(\n *   new Date(2015, 1, 11),\n *   new Date(2013, 11, 31)\n * )\n * //=> 2\n */\nfunction differenceInCalendarYears(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  return _dateLeft.getFullYear() - _dateRight.getFullYear();\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarYears);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInCalendarYears.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)\n/* harmony export */ });\n/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ \"./node_modules/date-fns/differenceInCalendarDays.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n/**\n * @name differenceInDays\n * @category Day Helpers\n * @summary Get the number of full days between the given dates.\n *\n * @description\n * Get the number of full day periods between two dates. Fractional days are\n * truncated towards zero.\n *\n * One \"full day\" is the distance between a local time in one day to the same\n * local time on the next or previous day. A full day can sometimes be less than\n * or more than 24 hours if a daylight savings change happens between two dates.\n *\n * To ignore DST and only measure exact 24-hour periods, use this instead:\n * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of full days according to the local timezone\n *\n * @example\n * // How many full days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 365\n *\n * @example\n * // How many full days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 0\n *\n * @example\n * // How many full days are between\n * // 1 March 2020 0:00 and 1 June 2020 0:00 ?\n * // Note: because local time is used, the\n * // result will always be 92 days, even in\n * // time zones where DST starts and the\n * // period has only 92*24-1 hours.\n * const result = differenceInDays(\n *   new Date(2020, 5, 1),\n *   new Date(2020, 2, 1)\n * )\n * //=> 92\n */\nfunction differenceInDays(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const sign = compareLocalAsc(_dateLeft, _dateRight);\n  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));\n\n  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);\n\n  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full\n  // If so, result must be decreased by 1 in absolute value\n  const isLastDayNotFull = Number(\n    compareLocalAsc(_dateLeft, _dateRight) === -sign,\n  );\n  const result = sign * (difference - isLastDayNotFull);\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n// Like `compareAsc` but uses local time not UTC, which is needed\n// for accurate equality comparisons of UTC timestamps that end up\n// having the same representation in local time, e.g. one hour before\n// DST ends vs. the instant that DST ends.\nfunction compareLocalAsc(dateLeft, dateRight) {\n  const diff =\n    dateLeft.getFullYear() - dateRight.getFullYear() ||\n    dateLeft.getMonth() - dateRight.getMonth() ||\n    dateLeft.getDate() - dateRight.getDate() ||\n    dateLeft.getHours() - dateRight.getHours() ||\n    dateLeft.getMinutes() - dateRight.getMinutes() ||\n    dateLeft.getSeconds() - dateRight.getSeconds() ||\n    dateLeft.getMilliseconds() - dateRight.getMilliseconds();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of milliseconds\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInMilliseconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInMonths.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMonths: () => (/* binding */ differenceInMonths)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.mjs */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var _differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarMonths.mjs */ \"./node_modules/date-fns/differenceInCalendarMonths.mjs\");\n/* harmony import */ var _isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLastDayOfMonth.mjs */ \"./node_modules/date-fns/isLastDayOfMonth.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n\n/**\n * @name differenceInMonths\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates using trunc as a default rounding method.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of full months\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))\n * //=> 7\n */\nfunction differenceInMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const sign = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight);\n  const difference = Math.abs(\n    (0,_differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarMonths)(_dateLeft, _dateRight),\n  );\n  let result;\n\n  // Check for the difference of less than month\n  if (difference < 1) {\n    result = 0;\n  } else {\n    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {\n      // This will check if the date is end of Feb and assign a higher end of month date\n      // to compare it with Jan\n      _dateLeft.setDate(30);\n    }\n\n    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);\n\n    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n    // If so, result must be decreased by 1 in absolute value\n    let isLastMonthNotFull = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight) === -sign;\n\n    // Check for cases of one full calendar month\n    if (\n      (0,_isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__.isLastDayOfMonth)((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft)) &&\n      difference === 1 &&\n      (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(dateLeft, _dateRight) === 1\n    ) {\n      isLastMonthNotFull = false;\n    }\n\n    result = sign * (difference - Number(isLastMonthNotFull));\n  }\n\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMonths);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInSeconds: () => (/* binding */ differenceInSeconds)\n/* harmony export */ });\n/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ \"./node_modules/date-fns/_lib/getRoundingMethod.mjs\");\n/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ \"./node_modules/date-fns/differenceInMilliseconds.mjs\");\n\n\n\n/**\n * The {@link differenceInSeconds} function options.\n */\n\n/**\n * @name differenceInSeconds\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n * @param options - An object with options.\n *\n * @returns The number of seconds\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * const result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\nfunction differenceInSeconds(dateLeft, dateRight, options) {\n  const diff = (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / 1000;\n  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInSeconds);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInSeconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInYears.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/differenceInYears.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInYears: () => (/* binding */ differenceInYears)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.mjs */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var _differenceInCalendarYears_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarYears.mjs */ \"./node_modules/date-fns/differenceInCalendarYears.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n/**\n * @name differenceInYears\n * @category Year Helpers\n * @summary Get the number of full years between the given dates.\n *\n * @description\n * Get the number of full years between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of full years\n *\n * @example\n * // How many full years are between 31 December 2013 and 11 February 2015?\n * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))\n * //=> 1\n */\nfunction differenceInYears(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const sign = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight);\n  const difference = Math.abs((0,_differenceInCalendarYears_mjs__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarYears)(_dateLeft, _dateRight));\n\n  // Set both dates to a valid leap year for accurate comparison when dealing\n  // with leap days\n  _dateLeft.setFullYear(1584);\n  _dateRight.setFullYear(1584);\n\n  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full\n  // If so, result must be decreased by 1 in absolute value\n  const isLastYearNotFull = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight) === -sign;\n  const result = sign * (difference - +isLastYearNotFull);\n\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInYears);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/differenceInYears.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfDay.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfDay.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfDay: () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a day\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/endOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfMonth.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name endOfMonth\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a month\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const month = _date.getMonth();\n  _date.setFullYear(_date.getFullYear(), month + 1, 0);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfMonth);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/endOfMonth.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isLastDayOfMonth.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isLastDayOfMonth: () => (/* binding */ isLastDayOfMonth)\n/* harmony export */ });\n/* harmony import */ var _endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfDay.mjs */ \"./node_modules/date-fns/endOfDay.mjs\");\n/* harmony import */ var _endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfMonth.mjs */ \"./node_modules/date-fns/endOfMonth.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n/**\n * @name isLastDayOfMonth\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n\n * @returns The date is the last day of a month\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * const result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\nfunction isLastDayOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  return +(0,_endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__.endOfDay)(_date) === +(0,_endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(_date);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLastDayOfMonth);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/isLastDayOfMonth.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfDay: () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/startOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://mmm-b-day-card/./node_modules/date-fns/toDate.mjs?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;