"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/btc-addresses";
exports.ids = ["pages/api/btc-addresses"];
exports.modules = {

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("csvtojson");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/btc-addresses.ts":
/*!************************************!*\
  !*** ./pages/api/btc-addresses.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csvtojson */ \"csvtojson\");\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { start , end  } = req.query;\n    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\");\n    const data = await csvtojson__WEBPACK_IMPORTED_MODULE_1___default()().fromFile(filePath + \"/data.csv\");\n    if (start && end) {\n        const filteredData = data.filter((item)=>item.time >= start && item.time <= end);\n        res.status(200).json(filteredData);\n    } else {\n        res.status(200).json(data);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnRjLWFkZHJlc3Nlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUVJO0FBRTNCLGlFQUFlLE9BQU9FLEtBQXFCQyxNQUF5QjtJQUNsRSxNQUFNLEVBQUVDLE1BQUssRUFBRUMsSUFBRyxFQUFFLEdBQUdILElBQUlJLEtBQUs7SUFDaEMsTUFBTUMsV0FBV1AsZ0RBQVMsQ0FBQ1MsUUFBUUMsR0FBRyxJQUFJO0lBQzFDLE1BQU1DLE9BQU8sTUFBTVYsZ0RBQUdBLEdBQUdXLFFBQVEsQ0FBQ0wsV0FBVztJQUU3QyxJQUFJSCxTQUFTQyxLQUFLO1FBQ2hCLE1BQU1RLGVBQWVGLEtBQUtHLE1BQU0sQ0FDOUIsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxJQUFJWixTQUFTVyxLQUFLQyxJQUFJLElBQUlYO1FBRS9DRixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtJQUN2QixPQUFPO1FBQ0xWLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNQO0lBQ3ZCLENBQUM7QUFDSCxHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2J0Yy1hZGRyZXNzZXMudHM/MjA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgY3N2IGZyb20gJ2NzdnRvanNvbidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcmVxLnF1ZXJ5XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNzdigpLmZyb21GaWxlKGZpbGVQYXRoICsgJy9kYXRhLmNzdicpXG5cbiAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+IGl0ZW0udGltZSA+PSBzdGFydCAmJiBpdGVtLnRpbWUgPD0gZW5kXG4gICAgKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbHRlcmVkRGF0YSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxuICB9XG59XG4iXSwibmFtZXMiOlsicGF0aCIsImNzdiIsInJlcSIsInJlcyIsInN0YXJ0IiwiZW5kIiwicXVlcnkiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZGF0YSIsImZyb21GaWxlIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiaXRlbSIsInRpbWUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/btc-addresses.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/btc-addresses.ts"));
module.exports = __webpack_exports__;

})();