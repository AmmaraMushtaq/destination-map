"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/categories.js":
/*!**************************************!*\
  !*** ./src/components/categories.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.module.css */ \"(app-pages-browser)/./src/components/categories.module.css\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categories_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst categories = [\n    {\n        title: \"Adventure\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMountain,\n        subcategories: [\n            \"Adrenaline\",\n            \"Camping\",\n            \"Golfing\",\n            \"Hiking\",\n            \"Skiing\",\n            \"Water Sports\",\n            \"Cycling & Mountain Biking\"\n        ]\n    },\n    {\n        title: \"Art & Culture\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPalette,\n        subcategories: [\n            \"Comedy\",\n            \"Concerts\",\n            \"Galleries & Museums\",\n            \"Indigenous Tourism\",\n            \"Performing Arts\"\n        ]\n    },\n    {\n        title: \"Attractions\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLandmark,\n        subcategories: [\n            \"Landmarks\",\n            \"Monuments\",\n            \"Parks\"\n        ]\n    }\n];\nconst Categories = ()=>{\n    _s();\n    const [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleDropdown = (index)=>{\n        // This ensures only one dropdown is active at a time\n        setActiveCategory((prevIndex)=>prevIndex === index ? null : index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoriesContainer),\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem), \" \").concat(activeCategory === index ? (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                onClick: ()=>toggleDropdown(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryHeader),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: category.icon,\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: category.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined),\n                    activeCategory === index && category.subcategories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategories),\n                        children: category.subcategories.map((subcategory, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoryItem),\n                                children: subcategory\n                            }, subIndex, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"xMflSddbJbX5Q1M57e/P7XmYV4s=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNnQztBQVd0QjtBQUNFO0FBRTdDLE1BQU1ZLGFBQWE7SUFDakI7UUFDRUMsT0FBTztRQUNQQyxNQUFNWix5RUFBVUE7UUFDaEJhLGVBQWU7WUFDYjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1YLHdFQUFTQTtRQUNmWSxlQUFlO1lBQ2I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1WLHlFQUFVQTtRQUNoQlcsZUFBZTtZQUFDO1lBQWE7WUFBYTtTQUFRO0lBQ3BEO0NBRUQ7QUFFRCxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNbUIsaUJBQWlCLENBQUNDO1FBQ3RCLHFEQUFxRDtRQUNyREYsa0JBQWtCLENBQUNHLFlBQWVBLGNBQWNELFFBQVEsT0FBT0E7SUFDakU7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV1osbUZBQTBCO2tCQUN2Q0MsV0FBV2EsR0FBRyxDQUFDLENBQUNDLFVBQVVOLHNCQUN6Qiw4REFBQ0U7Z0JBRUNDLFdBQVcsR0FDVE4sT0FEWU4sNEVBQW1CLEVBQUMsS0FFakMsT0FEQ00sbUJBQW1CRyxRQUFRVCxzRUFBYSxHQUFHO2dCQUU3Q2tCLFNBQVMsSUFBTVYsZUFBZUM7O2tDQUU5Qiw4REFBQ0U7d0JBQUlDLFdBQVdaLDhFQUFxQjs7MENBQ25DLDhEQUFDViwyRUFBZUE7Z0NBQUNhLE1BQU1ZLFNBQVNaLElBQUk7Z0NBQUVTLFdBQVdaLG9FQUFXOzs7Ozs7MENBQzVELDhEQUFDb0I7Z0NBQUtSLFdBQVdaLHFFQUFZOzBDQUFHZSxTQUFTYixLQUFLOzs7Ozs7Ozs7Ozs7b0JBRy9DSSxtQkFBbUJHLFNBQVNNLFNBQVNYLGFBQWEsa0JBQ2pELDhEQUFDTzt3QkFBSUMsV0FBV1osNkVBQW9CO2tDQUNqQ2UsU0FBU1gsYUFBYSxDQUFDVSxHQUFHLENBQUMsQ0FBQ08sYUFBYUMseUJBQ3hDLDhEQUFDWDtnQ0FBbUJDLFdBQVdaLCtFQUFzQjswQ0FDbERxQjsrQkFET0M7Ozs7Ozs7Ozs7O2VBZFhiOzs7Ozs7Ozs7O0FBd0JmO0dBcENNSjtLQUFBQTtBQXNDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzLmpzP2M3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFNb3VudGFpbixcclxuICBmYVBhbGV0dGUsXHJcbiAgZmFMYW5kbWFyayxcclxuICBmYUNoaWxkLFxyXG4gIGZhVHJlZSxcclxuICBmYUhpa2luZyxcclxuICBmYVNob3BwaW5nQ2FydCxcclxuICBmYVNwYSxcclxuICBmYVNlYXJjaCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2F0ZWdvcmllcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFkdmVudHVyZVwiLFxyXG4gICAgaWNvbjogZmFNb3VudGFpbixcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcclxuICAgICAgXCJBZHJlbmFsaW5lXCIsXHJcbiAgICAgIFwiQ2FtcGluZ1wiLFxyXG4gICAgICBcIkdvbGZpbmdcIixcclxuICAgICAgXCJIaWtpbmdcIixcclxuICAgICAgXCJTa2lpbmdcIixcclxuICAgICAgXCJXYXRlciBTcG9ydHNcIixcclxuICAgICAgXCJDeWNsaW5nICYgTW91bnRhaW4gQmlraW5nXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXJ0ICYgQ3VsdHVyZVwiLFxyXG4gICAgaWNvbjogZmFQYWxldHRlLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1xyXG4gICAgICBcIkNvbWVkeVwiLFxyXG4gICAgICBcIkNvbmNlcnRzXCIsXHJcbiAgICAgIFwiR2FsbGVyaWVzICYgTXVzZXVtc1wiLFxyXG4gICAgICBcIkluZGlnZW5vdXMgVG91cmlzbVwiLFxyXG4gICAgICBcIlBlcmZvcm1pbmcgQXJ0c1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkF0dHJhY3Rpb25zXCIsXHJcbiAgICBpY29uOiBmYUxhbmRtYXJrLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiTGFuZG1hcmtzXCIsIFwiTW9udW1lbnRzXCIsIFwiUGFya3NcIl0sXHJcbiAgfSxcclxuICAvLyBBZGQgb3RoZXIgY2F0ZWdvcmllcyBhcyBuZWVkZWRcclxuXTtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUNhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoaW5kZXgpID0+IHtcclxuICAgIC8vIFRoaXMgZW5zdXJlcyBvbmx5IG9uZSBkcm9wZG93biBpcyBhY3RpdmUgYXQgYSB0aW1lXHJcbiAgICBzZXRBY3RpdmVDYXRlZ29yeSgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNDb250YWluZXJ9PlxyXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXRlZ29yeUl0ZW19ICR7XHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID09PSBpbmRleCA/IHN0eWxlcy5hY3RpdmUgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyb3Bkb3duKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SGVhZGVyfT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjYXRlZ29yeS5pY29ufSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NhdGVnb3J5LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFN1YmNhdGVnb3JpZXMgRHJvcGRvd24gKi99XHJcbiAgICAgICAgICB7YWN0aXZlQ2F0ZWdvcnkgPT09IGluZGV4ICYmIGNhdGVnb3J5LnN1YmNhdGVnb3JpZXMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnksIHN1YkluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3ViSW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnN1YmNhdGVnb3J5SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTW91bnRhaW4iLCJmYVBhbGV0dGUiLCJmYUxhbmRtYXJrIiwiZmFDaGlsZCIsImZhVHJlZSIsImZhSGlraW5nIiwiZmFTaG9wcGluZ0NhcnQiLCJmYVNwYSIsImZhU2VhcmNoIiwic3R5bGVzIiwiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsInN1YmNhdGVnb3JpZXMiLCJDYXRlZ29yaWVzIiwiYWN0aXZlQ2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsInRvZ2dsZURyb3Bkb3duIiwiaW5kZXgiLCJwcmV2SW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRlZ29yaWVzQ29udGFpbmVyIiwibWFwIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUl0ZW0iLCJhY3RpdmUiLCJvbkNsaWNrIiwiY2F0ZWdvcnlIZWFkZXIiLCJzcGFuIiwic3ViY2F0ZWdvcnkiLCJzdWJJbmRleCIsInN1YmNhdGVnb3J5SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories.js\n"));

/***/ })

});