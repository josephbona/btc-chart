"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _tremor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tremor/react */ \"./node_modules/@tremor/react/dist/esm/index.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst tabs = [\n    {\n        href: \"/\",\n        name: \"1M\",\n        active: true\n    },\n    {\n        href: \"/?start=2023-01-01&end=2023-02-01\",\n        name: \"3M\",\n        active: false\n    },\n    {\n        href: \"/?start=2023-01-01&end=2023-02-01\",\n        name: \"12M\",\n        active: false\n    },\n    {\n        href: \"/?start=2023-01-01&end=2023-02-01\",\n        name: \"YTD\",\n        active: false\n    },\n    {\n        href: \"/?start=2010-07-18&end=2023-02-01\",\n        name: \"All\",\n        active: false\n    }\n];\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    const [selectedPeriod, setSelectedPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"1M\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"BTC Address Balances over Time\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl mx-auto p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tremor_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tremor_react__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                    children: \"BTC Address Balances over Time\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-b border-gray-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                        className: \"-mb-px flex space-x-8\",\n                                        \"aria-label\": \"Tabs\",\n                                        children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: tab.href,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(tab.active ? \"border-indigo-500 text-indigo-600\" : \"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700\", \"whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium\"),\n                                                \"aria-current\": tab.active ? \"page\" : undefined,\n                                                children: tab.name\n                                            }, tab.name, false, {\n                                                fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tremor_react__WEBPACK_IMPORTED_MODULE_3__.LineChart, {\n                                    className: \"mt-6 h-96\",\n                                    data: props.data,\n                                    index: \"time\",\n                                    categories: [\n                                        \"over $1K\",\n                                        \"over $10K\",\n                                        \"over $100K\",\n                                        \"over $1M\",\n                                        \"over $10M\"\n                                    ],\n                                    colors: [\n                                        \"blue\",\n                                        \"slate\",\n                                        \"cyan\",\n                                        \"red\",\n                                        \"green\"\n                                    ],\n                                    valueFormatter: (value)=>(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.abbreviateNumberByMagnitude)(value, {\n                                            fixed: 2\n                                        }),\n                                    showLegend: false\n                                }, void 0, false, {\n                                    fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-1.5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-2.5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephbona/Sites/btc-chart/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"tmCwOo/j64MyfrJFUz2nYhF6vDY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBRTZCO0FBQ0E7QUFFcEM7QUFLaEMsTUFBTVEsT0FBTztJQUNYO1FBQUVDLE1BQU07UUFBS0MsTUFBTTtRQUFNQyxRQUFRLElBQUk7SUFBQztJQUN0QztRQUFFRixNQUFNO1FBQXFDQyxNQUFNO1FBQU1DLFFBQVEsS0FBSztJQUFDO0lBQ3ZFO1FBQUVGLE1BQU07UUFBcUNDLE1BQU07UUFBT0MsUUFBUSxLQUFLO0lBQUM7SUFDeEU7UUFBRUYsTUFBTTtRQUFxQ0MsTUFBTTtRQUFPQyxRQUFRLEtBQUs7SUFBQztJQUN4RTtRQUFFRixNQUFNO1FBQXFDQyxNQUFNO1FBQU9DLFFBQVEsS0FBSztJQUFDO0NBQ3pFOztBQUVjLFNBQVNDLEtBQUtDLEtBQWdCLEVBQUU7O0lBQzdDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDckQscUJBQ0UsOERBQUNOLDBEQUFNQTtRQUFDZSxJQUFJOzswQkFDViw4REFBQ2hCLGtEQUFJQTswQkFDSCw0RUFBQ2lCOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7MEJBQ0MsNEVBQUNDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2xCLCtDQUFJQTs7OENBQ0gsOERBQUNDLGdEQUFLQTs4Q0FBQzs7Ozs7OzhDQUNQLDhEQUFDZ0I7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNDO3dDQUFJRCxXQUFVO3dDQUF3QkUsY0FBVztrREFDL0NkLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ0M7Z0RBRUNoQixNQUFNZSxJQUFJZixJQUFJO2dEQUNkVyxXQUFXZCxzREFBVUEsQ0FDbkJrQixJQUFJYixNQUFNLEdBQ04sc0NBQ0EsNEVBQTRFLEVBQ2hGO2dEQUVGZSxnQkFBY0YsSUFBSWIsTUFBTSxHQUFHLFNBQVNnQixTQUFTOzBEQUU1Q0gsSUFBSWQsSUFBSTsrQ0FWSmMsSUFBSWQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzhDQWVyQiw4REFBQ04sb0RBQVNBO29DQUNSZ0IsV0FBVTtvQ0FDVlEsTUFBTWYsTUFBTWUsSUFBSTtvQ0FDaEJDLE9BQU07b0NBQ05DLFlBQVk7d0NBQ1Y7d0NBQ0E7d0NBQ0E7d0NBQ0E7d0NBQ0E7cUNBQ0Q7b0NBQ0RDLFFBQVE7d0NBQUM7d0NBQVE7d0NBQVM7d0NBQVE7d0NBQU87cUNBQVE7b0NBQ2pEQyxnQkFBZ0IsQ0FBQ0MsUUFDZjVCLHVFQUEyQkEsQ0FBQzRCLE9BQU87NENBQUVDLE9BQU87d0NBQUU7b0NBRWhEQyxZQUFZLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FRckIsOERBQUNoQjs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekIsQ0FBQztHQTNEdUJSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBDYXJkLCBUaXRsZSwgTGluZUNoYXJ0LCBUYWJMaXN0LCBUYWIgfSBmcm9tICdAdHJlbW9yL3JlYWN0J1xuaW1wb3J0IHsgYWJicmV2aWF0ZU51bWJlckJ5TWFnbml0dWRlLCBjbGFzc05hbWVzIH0gZnJvbSAnQGxpYi91dGlscydcbmltcG9ydCB7IFN0YXQgfSBmcm9tICdAbGliL3R5cGVzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGRhdGE6IFN0YXRbXVxufVxuY29uc3QgdGFicyA9IFtcbiAgeyBocmVmOiAnLycsIG5hbWU6ICcxTScsIGFjdGl2ZTogdHJ1ZSB9LFxuICB7IGhyZWY6ICcvP3N0YXJ0PTIwMjMtMDEtMDEmZW5kPTIwMjMtMDItMDEnLCBuYW1lOiAnM00nLCBhY3RpdmU6IGZhbHNlIH0sXG4gIHsgaHJlZjogJy8/c3RhcnQ9MjAyMy0wMS0wMSZlbmQ9MjAyMy0wMi0wMScsIG5hbWU6ICcxMk0nLCBhY3RpdmU6IGZhbHNlIH0sXG4gIHsgaHJlZjogJy8/c3RhcnQ9MjAyMy0wMS0wMSZlbmQ9MjAyMy0wMi0wMScsIG5hbWU6ICdZVEQnLCBhY3RpdmU6IGZhbHNlIH0sXG4gIHsgaHJlZjogJy8/c3RhcnQ9MjAxMC0wNy0xOCZlbmQ9MjAyMy0wMi0wMScsIG5hbWU6ICdBbGwnLCBhY3RpdmU6IGZhbHNlIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFBlcmlvZCwgc2V0U2VsZWN0ZWRQZXJpb2RdID0gdXNlU3RhdGUoJzFNJylcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJUQyBBZGRyZXNzIEJhbGFuY2VzIG92ZXIgVGltZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBwLThcIj5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxUaXRsZT5CVEMgQWRkcmVzcyBCYWxhbmNlcyBvdmVyIFRpbWU8L1RpdGxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCItbWItcHggZmxleCBzcGFjZS14LThcIiBhcmlhLWxhYmVsPVwiVGFic1wiPlxuICAgICAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXt0YWIuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgIHRhYi5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1pbmRpZ28tNTAwIHRleHQtaW5kaWdvLTYwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAnd2hpdGVzcGFjZS1ub3dyYXAgYm9yZGVyLWItMiBweS00IHB4LTEgdGV4dC1zbSBmb250LW1lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXt0YWIuYWN0aXZlID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGFiLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluZUNoYXJ0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgaC05NlwiXG4gICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgICAgIGluZGV4PVwidGltZVwiXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM9e1tcbiAgICAgICAgICAgICAgICAnb3ZlciAkMUsnLFxuICAgICAgICAgICAgICAgICdvdmVyICQxMEsnLFxuICAgICAgICAgICAgICAgICdvdmVyICQxMDBLJyxcbiAgICAgICAgICAgICAgICAnb3ZlciAkMU0nLFxuICAgICAgICAgICAgICAgICdvdmVyICQxME0nLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBjb2xvcnM9e1snYmx1ZScsICdzbGF0ZScsICdjeWFuJywgJ3JlZCcsICdncmVlbiddfVxuICAgICAgICAgICAgICB2YWx1ZUZvcm1hdHRlcj17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgIGFiYnJldmlhdGVOdW1iZXJCeU1hZ25pdHVkZSh2YWx1ZSwgeyBmaXhlZDogMiB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dMZWdlbmQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8TGVnZW5kXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtMyBzcGFjZS14LTIgdGV4dC1zbSdcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Wyc+JDFrJywgJz4kMTBrJywgJz4kMTAwaycsICc+JDFNJywgJz4kMTBNJ119XG4gICAgICAgICAgICAgIGNvbG9ycz17WydibHVlJywgJ3NsYXRlJywgJ2N5YW4nLCAncmVkJywgJ2dyZWVuJ119XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xLjVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMi41XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcbiAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2J0Yy1hZGRyZXNzZXMnXG4gIC8vIFxuICBsZXQgdXJsID0gYCR7YmFzZVVybH0/c3RhcnQ9MjAyMy0wMS0wMiZlbmQ9MjAyMy0wMi0wMWBcbiAgaWYgKGNvbnRleHQucXVlcnk/LnN0YXJ0ICYmIGNvbnRleHQucXVlcnk/LmVuZCkge1xuICAgIHVybCA9IGAke2Jhc2VVcmx9P3N0YXJ0PSR7Y29udGV4dC5xdWVyeS5zdGFydH0mZW5kPSR7Y29udGV4dC5xdWVyeS5lbmR9YFxuICB9XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsIkNhcmQiLCJUaXRsZSIsIkxpbmVDaGFydCIsImFiYnJldmlhdGVOdW1iZXJCeU1hZ25pdHVkZSIsImNsYXNzTmFtZXMiLCJ1c2VTdGF0ZSIsInRhYnMiLCJocmVmIiwibmFtZSIsImFjdGl2ZSIsIkhvbWUiLCJwcm9wcyIsInNlbGVjdGVkUGVyaW9kIiwic2V0U2VsZWN0ZWRQZXJpb2QiLCJob21lIiwidGl0bGUiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiYXJpYS1sYWJlbCIsIm1hcCIsInRhYiIsImEiLCJhcmlhLWN1cnJlbnQiLCJ1bmRlZmluZWQiLCJkYXRhIiwiaW5kZXgiLCJjYXRlZ29yaWVzIiwiY29sb3JzIiwidmFsdWVGb3JtYXR0ZXIiLCJ2YWx1ZSIsImZpeGVkIiwic2hvd0xlZ2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});