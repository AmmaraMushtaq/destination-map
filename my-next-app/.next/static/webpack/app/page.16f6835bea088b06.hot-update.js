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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.module.css */ \"(app-pages-browser)/./src/components/categories.module.css\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categories_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst categories = [\n    {\n        title: \"Adventure\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMountain,\n        subcategories: [\n            \"Adrenaline\",\n            \"Camping\",\n            \"Golfing\",\n            \"Hiking\",\n            \"Skiing\",\n            \"Water Sports\",\n            \"Cycling & Mountain Biking\"\n        ]\n    },\n    {\n        title: \"Art & Culture\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPalette,\n        subcategories: [\n            \"Comedy\",\n            \"Concerts\",\n            \"Galleries & Museums\",\n            \"Indigenous Tourism\",\n            \"Performing Arts\"\n        ]\n    },\n    {\n        title: \"Attractions\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLandmark,\n        subcategories: [\n            \"Landmarks\",\n            \"Monuments\",\n            \"Parks\"\n        ]\n    },\n    {\n        title: \"Family & Kids\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChild,\n        subcategories: [\n            \"Amusement Parks\",\n            \"Playgrounds\",\n            \"Zoos\"\n        ]\n    },\n    {\n        title: \"Nature & Sightseeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTree,\n        subcategories: [\n            \"Beaches\",\n            \"Birdwatching\",\n            \"Sightseeing\",\n            \"Stanley Park\"\n        ]\n    },\n    {\n        title: \"Outdoor Tours\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHiking,\n        subcategories: [\n            \"Boating,Fishing, & yacht\",\n            \"Dinner cruises & charters\",\n            \"walking tours\",\n            \"Food & drink tours\",\n            \"Whale watching\"\n        ]\n    },\n    {\n        title: \"Shopping & Entertainment\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShoppingCart,\n        subcategories: [\n            \"comedy\",\n            \"Music\",\n            \"Nightlife\",\n            \"Shopping\",\n            \"Sporting events\"\n        ]\n    },\n    {\n        title: \"Wellbeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSpa,\n        subcategories: [\n            \"Spas\",\n            \"Beaches\",\n            \"cycling & mountain biking\",\n            \"Hiking\",\n            \"Walking tours\",\n            \"Water sports\"\n        ]\n    }\n];\nconst Categories = ()=>{\n    _s();\n    const [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleDropdown = (index)=>{\n        setActiveCategory((prevIndex)=>prevIndex === index ? null : index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoriesContainer),\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem),\n                onClick: ()=>toggleDropdown(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryHeader),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: category.icon,\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: category.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined),\n                    activeCategory === index && category.subcategories.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoriesPopup),\n                        children: category.subcategories.map((subcategory, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoryItem),\n                                children: subcategory\n                            }, subIndex, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"xMflSddbJbX5Q1M57e/P7XmYV4s=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNnQztBQVd0QjtBQUNFO0FBRTdDLE1BQU1ZLGFBQWE7SUFDakI7UUFDRUMsT0FBTztRQUNQQyxNQUFNWix5RUFBVUE7UUFDaEJhLGVBQWU7WUFDYjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1YLHdFQUFTQTtRQUNmWSxlQUFlO1lBQ2I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1WLHlFQUFVQTtRQUNoQlcsZUFBZTtZQUFDO1lBQWE7WUFBYTtTQUFRO0lBQ3BEO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNVCxzRUFBT0E7UUFDYlUsZUFBZTtZQUFDO1lBQW1CO1lBQWU7U0FBTztJQUMzRDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVIscUVBQU1BO1FBQ1pTLGVBQWU7WUFBQztZQUFXO1lBQWdCO1lBQWM7U0FBZTtJQUMxRTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVAsdUVBQVFBO1FBQ2RRLGVBQWU7WUFBQztZQUEyQjtZQUE2QjtZQUFnQjtZQUFzQjtTQUFpQjtJQUNqSTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTU4sNkVBQWNBO1FBQ3BCTyxlQUFlO1lBQUM7WUFBVTtZQUFTO1lBQVk7WUFBVztTQUFrQjtJQUM5RTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTUwsb0VBQUtBO1FBQ1hNLGVBQWU7WUFBQztZQUFRO1lBQVc7WUFBNEI7WUFBUztZQUFnQjtTQUFlO0lBQ3pHO0NBTUQ7QUFFRCxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNbUIsaUJBQWlCLENBQUNDO1FBQ3RCRixrQkFBa0IsQ0FBQ0csWUFBZUEsY0FBY0QsUUFBUSxPQUFPQTtJQUNqRTtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXWixtRkFBMEI7a0JBQ3ZDQyxXQUFXYSxHQUFHLENBQUMsQ0FBQ0MsVUFBVU4sc0JBQ3pCLDhEQUFDRTtnQkFFQ0MsV0FBV1osNEVBQW1CO2dCQUM5QmlCLFNBQVMsSUFBTVQsZUFBZUM7O2tDQUU5Qiw4REFBQ0U7d0JBQUlDLFdBQVdaLDhFQUFxQjs7MENBQ25DLDhEQUFDViwyRUFBZUE7Z0NBQUNhLE1BQU1ZLFNBQVNaLElBQUk7Z0NBQUVTLFdBQVdaLG9FQUFXOzs7Ozs7MENBQzVELDhEQUFDbUI7Z0NBQUtQLFdBQVdaLHFFQUFZOzBDQUFHZSxTQUFTYixLQUFLOzs7Ozs7Ozs7Ozs7b0JBRy9DSSxtQkFBbUJHLFNBQVNNLFNBQVNYLGFBQWEsQ0FBQ2dCLE1BQU0sR0FBRyxtQkFDM0QsOERBQUNUO3dCQUFJQyxXQUFXWixrRkFBeUI7a0NBQ3RDZSxTQUFTWCxhQUFhLENBQUNVLEdBQUcsQ0FBQyxDQUFDUSxhQUFhQyx5QkFDeEMsOERBQUNaO2dDQUFtQkMsV0FBV1osK0VBQXNCOzBDQUNsRHNCOytCQURPQzs7Ozs7Ozs7Ozs7ZUFaWGQ7Ozs7Ozs7Ozs7QUFzQmY7R0FqQ01KO0tBQUFBO0FBbUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanM/YzdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYU1vdW50YWluLFxyXG4gIGZhUGFsZXR0ZSxcclxuICBmYUxhbmRtYXJrLFxyXG4gIGZhQ2hpbGQsXHJcbiAgZmFUcmVlLFxyXG4gIGZhSGlraW5nLFxyXG4gIGZhU2hvcHBpbmdDYXJ0LFxyXG4gIGZhU3BhLFxyXG4gIGZhU2VhcmNoLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jYXRlZ29yaWVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWR2ZW50dXJlXCIsXHJcbiAgICBpY29uOiBmYU1vdW50YWluLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1xyXG4gICAgICBcIkFkcmVuYWxpbmVcIixcclxuICAgICAgXCJDYW1waW5nXCIsXHJcbiAgICAgIFwiR29sZmluZ1wiLFxyXG4gICAgICBcIkhpa2luZ1wiLFxyXG4gICAgICBcIlNraWluZ1wiLFxyXG4gICAgICBcIldhdGVyIFNwb3J0c1wiLFxyXG4gICAgICBcIkN5Y2xpbmcgJiBNb3VudGFpbiBCaWtpbmdcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcnQgJiBDdWx0dXJlXCIsXHJcbiAgICBpY29uOiBmYVBhbGV0dGUsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXHJcbiAgICAgIFwiQ29tZWR5XCIsXHJcbiAgICAgIFwiQ29uY2VydHNcIixcclxuICAgICAgXCJHYWxsZXJpZXMgJiBNdXNldW1zXCIsXHJcbiAgICAgIFwiSW5kaWdlbm91cyBUb3VyaXNtXCIsXHJcbiAgICAgIFwiUGVyZm9ybWluZyBBcnRzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXR0cmFjdGlvbnNcIixcclxuICAgIGljb246IGZhTGFuZG1hcmssXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJMYW5kbWFya3NcIiwgXCJNb251bWVudHNcIiwgXCJQYXJrc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZhbWlseSAmIEtpZHNcIixcclxuICAgIGljb246IGZhQ2hpbGQsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJBbXVzZW1lbnQgUGFya3NcIiwgXCJQbGF5Z3JvdW5kc1wiLCBcIlpvb3NcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOYXR1cmUgJiBTaWdodHNlZWluZ1wiLFxyXG4gICAgaWNvbjogZmFUcmVlLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiQmVhY2hlc1wiLCBcIkJpcmR3YXRjaGluZ1wiLCBcIlNpZ2h0c2VlaW5nXCIsXCJTdGFubGV5IFBhcmtcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPdXRkb29yIFRvdXJzXCIsXHJcbiAgICBpY29uOiBmYUhpa2luZyxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkJvYXRpbmcsRmlzaGluZywgJiB5YWNodFwiLFwiRGlubmVyIGNydWlzZXMgJiBjaGFydGVyc1wiLCBcIndhbGtpbmcgdG91cnNcIixcIkZvb2QgJiBkcmluayB0b3Vyc1wiLCBcIldoYWxlIHdhdGNoaW5nXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2hvcHBpbmcgJiBFbnRlcnRhaW5tZW50XCIsXHJcbiAgICBpY29uOiBmYVNob3BwaW5nQ2FydCxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcImNvbWVkeVwiLCBcIk11c2ljXCIsIFwiTmlnaHRsaWZlXCIsXCJTaG9wcGluZ1wiLFwiU3BvcnRpbmcgZXZlbnRzXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2VsbGJlaW5nXCIsXHJcbiAgICBpY29uOiBmYVNwYSxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIlNwYXNcIiwgXCJCZWFjaGVzXCIsIFwiY3ljbGluZyAmIG1vdW50YWluIGJpa2luZ1wiLFwiSGlraW5nXCIsXCJXYWxraW5nIHRvdXJzXCIsXCJXYXRlciBzcG9ydHNcIl0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJTZWFyY2hcIixcclxuICAvLyAgIGljb246IGZhU2VhcmNoLFxyXG4gIC8vICAgc3ViY2F0ZWdvcmllczogW10sXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUNhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZUNhdGVnb3J5KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0NvbnRhaW5lcn0+XHJcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyb3Bkb3duKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SGVhZGVyfT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjYXRlZ29yeS5pY29ufSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NhdGVnb3J5LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFN1YmNhdGVnb3JpZXMgUG9wdXAgKi99XHJcbiAgICAgICAgICB7YWN0aXZlQ2F0ZWdvcnkgPT09IGluZGV4ICYmIGNhdGVnb3J5LnN1YmNhdGVnb3JpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViY2F0ZWdvcmllc1BvcHVwfT5cclxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViY2F0ZWdvcmllcy5tYXAoKHN1YmNhdGVnb3J5LCBzdWJJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YkluZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zdWJjYXRlZ29yeUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYU1vdW50YWluIiwiZmFQYWxldHRlIiwiZmFMYW5kbWFyayIsImZhQ2hpbGQiLCJmYVRyZWUiLCJmYUhpa2luZyIsImZhU2hvcHBpbmdDYXJ0IiwiZmFTcGEiLCJmYVNlYXJjaCIsInN0eWxlcyIsImNhdGVnb3JpZXMiLCJ0aXRsZSIsImljb24iLCJzdWJjYXRlZ29yaWVzIiwiQ2F0ZWdvcmllcyIsImFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJ0b2dnbGVEcm9wZG93biIsImluZGV4IiwicHJldkluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcmllc0NvbnRhaW5lciIsIm1hcCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlJdGVtIiwib25DbGljayIsImNhdGVnb3J5SGVhZGVyIiwic3BhbiIsImxlbmd0aCIsInN1YmNhdGVnb3JpZXNQb3B1cCIsInN1YmNhdGVnb3J5Iiwic3ViSW5kZXgiLCJzdWJjYXRlZ29yeUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories.js\n"));

/***/ })

});