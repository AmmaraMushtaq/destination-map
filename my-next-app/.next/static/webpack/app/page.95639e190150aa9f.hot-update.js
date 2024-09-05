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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.module.css */ \"(app-pages-browser)/./src/components/categories.module.css\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categories_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst categories = [\n    {\n        title: \"Adventure\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMountain,\n        subcategories: [\n            \"Adrenaline\",\n            \"Camping\",\n            \"Golfing\",\n            \"Hiking\",\n            \"Skiing\",\n            \"Water Sports\",\n            \"Cycling & Mountain Biking\"\n        ]\n    },\n    {\n        title: \"Art & Culture\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPalette,\n        subcategories: [\n            \"Comedy\",\n            \"Concerts\",\n            \"Galleries & Museums\",\n            \"Indigenous Tourism\",\n            \"Performing Arts\"\n        ]\n    },\n    {\n        title: \"Attractions\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLandmark,\n        subcategories: [\n            \"Landmarks\",\n            \"Monuments\",\n            \"Parks\"\n        ]\n    },\n    {\n        title: \"Family & Kids\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChild,\n        subcategories: [\n            \"Amusement Parks\",\n            \"Playgrounds\",\n            \"Zoos\"\n        ]\n    },\n    {\n        title: \"Nature & Sightseeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTree,\n        subcategories: [\n            \"Beaches\",\n            \"Birdwatching\",\n            \"Sightseeing\",\n            \"Stanley Park\"\n        ]\n    },\n    {\n        title: \"Outdoor Tours\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHiking,\n        subcategories: [\n            \"Boating,Fishing, & yacht\",\n            \"Dinner cruises & charters\",\n            \"walking tours\",\n            \"Food & drink tours\",\n            \"Whale watching\"\n        ]\n    },\n    {\n        title: \"Shopping & Entertainment\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShoppingCart,\n        subcategories: [\n            \"comedy\",\n            \"Music\",\n            \"Nightlife\",\n            \"Shopping\",\n            \"Sporting events\"\n        ]\n    },\n    {\n        title: \"Wellbeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSpa,\n        subcategories: [\n            \"Spas\",\n            \"Beaches\",\n            \"cycling & mountain biking\",\n            \"Hiking\",\n            \"Walking tours\",\n            \"Water sports\"\n        ]\n    }\n];\nconst Categories = ()=>{\n    _s();\n    const [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const toggleDropdown = (index)=>{\n        setActiveCategory((prevIndex)=>prevIndex === index ? null : index);\n    };\n    const scrollLeft = ()=>{\n        if (scrollContainerRef.current) {\n            scrollContainerRef.current.scrollLeft -= 200;\n        }\n    };\n    const scrollRight = ()=>{\n        if (scrollContainerRef.current) {\n            scrollContainerRef.current.scrollLeft += 200;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().scrollContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrow), \" \").concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowLeft)),\n                onClick: scrollLeft,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronLeft\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                    lineNumber: 106,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 105,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().scrollableCategories),\n                ref: scrollContainerRef,\n                children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem),\n                        onClick: ()=>toggleDropdown(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryHeader),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: category.icon,\n                                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                        children: category.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined),\n                            activeCategory === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoriesPopup),\n                                children: category.subcategories.map((subcategory, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoryItem),\n                                        children: subcategory\n                                    }, subIndex, false, {\n                                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 109,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrow), \" \").concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowRight)),\n                onClick: scrollRight,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronRight\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                    lineNumber: 131,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 130,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"LJC1uj4QBhtAdiaY0g7k33dp4xY=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV5QztBQUN3QjtBQWN0QjtBQUNFO0FBRTdDLE1BQU1lLGFBQWE7SUFDakI7UUFDRUMsT0FBTztRQUNQQyxNQUFNZCx5RUFBVUE7UUFDaEJlLGVBQWU7WUFDYjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1iLHdFQUFTQTtRQUNmYyxlQUFlO1lBQ2I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1aLHlFQUFVQTtRQUNoQmEsZUFBZTtZQUFDO1lBQWE7WUFBYTtTQUFRO0lBQ3BEO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNWCxzRUFBT0E7UUFDYlksZUFBZTtZQUFDO1lBQW1CO1lBQWU7U0FBTztJQUMzRDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVYscUVBQU1BO1FBQ1pXLGVBQWU7WUFBQztZQUFXO1lBQWdCO1lBQWM7U0FBZTtJQUMxRTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVQsdUVBQVFBO1FBQ2RVLGVBQWU7WUFBQztZQUEyQjtZQUE2QjtZQUFnQjtZQUFzQjtTQUFpQjtJQUNqSTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVIsNkVBQWNBO1FBQ3BCUyxlQUFlO1lBQUM7WUFBVTtZQUFTO1lBQVk7WUFBVztTQUFrQjtJQUM5RTtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVAsb0VBQUtBO1FBQ1hRLGVBQWU7WUFBQztZQUFRO1lBQVc7WUFBNEI7WUFBUztZQUFnQjtTQUFlO0lBQ3pHO0NBTUQ7QUFFRCxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNc0IscUJBQXFCckIsNkNBQU1BLENBQUM7SUFFbEMsTUFBTXNCLGlCQUFpQixDQUFDQztRQUN0Qkgsa0JBQWtCLENBQUNJLFlBQWVBLGNBQWNELFFBQVEsT0FBT0E7SUFDakU7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCLElBQUlKLG1CQUFtQkssT0FBTyxFQUFFO1lBQzlCTCxtQkFBbUJLLE9BQU8sQ0FBQ0QsVUFBVSxJQUFJO1FBQzNDO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCLElBQUlOLG1CQUFtQkssT0FBTyxFQUFFO1lBQzlCTCxtQkFBbUJLLE9BQU8sQ0FBQ0QsVUFBVSxJQUFJO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2hCLCtFQUFzQjs7MEJBQ3RDLDhEQUFDa0I7Z0JBQU9GLFdBQVcsR0FBbUJoQixPQUFoQkEscUVBQVksRUFBQyxLQUFvQixPQUFqQkEseUVBQWdCO2dCQUFJcUIsU0FBU1Q7MEJBQ2pFLDRFQUFDeEIsMkVBQWVBO29CQUFDZSxNQUFNTiw0RUFBYUE7Ozs7Ozs7Ozs7OzBCQUd0Qyw4REFBQ2tCO2dCQUFJQyxXQUFXaEIsb0ZBQTJCO2dCQUFFdUIsS0FBS2Y7MEJBQy9DUCxXQUFXdUIsR0FBRyxDQUFDLENBQUNDLFVBQVVmLHNCQUN6Qiw4REFBQ0s7d0JBQWdCQyxXQUFXaEIsNEVBQW1CO3dCQUFFcUIsU0FBUyxJQUFNWixlQUFlQzs7MENBQzdFLDhEQUFDSztnQ0FBSUMsV0FBV2hCLDhFQUFxQjs7a0RBQ25DLDhEQUFDWiwyRUFBZUE7d0NBQUNlLE1BQU1zQixTQUFTdEIsSUFBSTt3Q0FBRWEsV0FBV2hCLG9FQUFXOzs7Ozs7a0RBQzVELDhEQUFDNEI7d0NBQUtaLFdBQVdoQixxRUFBWTtrREFBR3lCLFNBQVN2QixLQUFLOzs7Ozs7Ozs7Ozs7NEJBRy9DSSxtQkFBbUJJLHVCQUNsQiw4REFBQ0s7Z0NBQUlDLFdBQVdoQixrRkFBeUI7MENBQ3RDeUIsU0FBU3JCLGFBQWEsQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDTSxhQUFhQyx5QkFDeEMsOERBQUNoQjt3Q0FBbUJDLFdBQVdoQiwrRUFBc0I7a0RBQ2xEOEI7dUNBRE9DOzs7Ozs7Ozs7Ozt1QkFUUnJCOzs7Ozs7Ozs7OzBCQW1CZCw4REFBQ1E7Z0JBQU9GLFdBQVcsR0FBbUJoQixPQUFoQkEscUVBQVksRUFBQyxLQUFxQixPQUFsQkEsMEVBQWlCO2dCQUFJcUIsU0FBU1A7MEJBQ2xFLDRFQUFDMUIsMkVBQWVBO29CQUFDZSxNQUFNTCw2RUFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDO0dBckRNTztLQUFBQTtBQXVETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzLmpzP2M3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZmFNb3VudGFpbixcclxuICBmYVBhbGV0dGUsXHJcbiAgZmFMYW5kbWFyayxcclxuICBmYUNoaWxkLFxyXG4gIGZhVHJlZSxcclxuICBmYUhpa2luZyxcclxuICBmYVNob3BwaW5nQ2FydCxcclxuICBmYVNwYSxcclxuICBmYUNoZXZyb25MZWZ0LFxyXG4gIGZhQ2hldnJvblJpZ2h0LFxyXG4gIGZhU2VhcmNoLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jYXRlZ29yaWVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWR2ZW50dXJlXCIsXHJcbiAgICBpY29uOiBmYU1vdW50YWluLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1xyXG4gICAgICBcIkFkcmVuYWxpbmVcIixcclxuICAgICAgXCJDYW1waW5nXCIsXHJcbiAgICAgIFwiR29sZmluZ1wiLFxyXG4gICAgICBcIkhpa2luZ1wiLFxyXG4gICAgICBcIlNraWluZ1wiLFxyXG4gICAgICBcIldhdGVyIFNwb3J0c1wiLFxyXG4gICAgICBcIkN5Y2xpbmcgJiBNb3VudGFpbiBCaWtpbmdcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcnQgJiBDdWx0dXJlXCIsXHJcbiAgICBpY29uOiBmYVBhbGV0dGUsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXHJcbiAgICAgIFwiQ29tZWR5XCIsXHJcbiAgICAgIFwiQ29uY2VydHNcIixcclxuICAgICAgXCJHYWxsZXJpZXMgJiBNdXNldW1zXCIsXHJcbiAgICAgIFwiSW5kaWdlbm91cyBUb3VyaXNtXCIsXHJcbiAgICAgIFwiUGVyZm9ybWluZyBBcnRzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXR0cmFjdGlvbnNcIixcclxuICAgIGljb246IGZhTGFuZG1hcmssXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJMYW5kbWFya3NcIiwgXCJNb251bWVudHNcIiwgXCJQYXJrc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZhbWlseSAmIEtpZHNcIixcclxuICAgIGljb246IGZhQ2hpbGQsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJBbXVzZW1lbnQgUGFya3NcIiwgXCJQbGF5Z3JvdW5kc1wiLCBcIlpvb3NcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOYXR1cmUgJiBTaWdodHNlZWluZ1wiLFxyXG4gICAgaWNvbjogZmFUcmVlLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiQmVhY2hlc1wiLCBcIkJpcmR3YXRjaGluZ1wiLCBcIlNpZ2h0c2VlaW5nXCIsXCJTdGFubGV5IFBhcmtcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPdXRkb29yIFRvdXJzXCIsXHJcbiAgICBpY29uOiBmYUhpa2luZyxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkJvYXRpbmcsRmlzaGluZywgJiB5YWNodFwiLFwiRGlubmVyIGNydWlzZXMgJiBjaGFydGVyc1wiLCBcIndhbGtpbmcgdG91cnNcIixcIkZvb2QgJiBkcmluayB0b3Vyc1wiLCBcIldoYWxlIHdhdGNoaW5nXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2hvcHBpbmcgJiBFbnRlcnRhaW5tZW50XCIsXHJcbiAgICBpY29uOiBmYVNob3BwaW5nQ2FydCxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcImNvbWVkeVwiLCBcIk11c2ljXCIsIFwiTmlnaHRsaWZlXCIsXCJTaG9wcGluZ1wiLFwiU3BvcnRpbmcgZXZlbnRzXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2VsbGJlaW5nXCIsXHJcbiAgICBpY29uOiBmYVNwYSxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIlNwYXNcIiwgXCJCZWFjaGVzXCIsIFwiY3ljbGluZyAmIG1vdW50YWluIGJpa2luZ1wiLFwiSGlraW5nXCIsXCJXYWxraW5nIHRvdXJzXCIsXCJXYXRlciBzcG9ydHNcIl0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJTZWFyY2hcIixcclxuICAvLyAgIGljb246IGZhU2VhcmNoLFxyXG4gIC8vICAgc3ViY2F0ZWdvcmllczogW10sXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUNhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRBY3RpdmVDYXRlZ29yeSgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbExlZnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPSAyMDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSAyMDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsQ29udGFpbmVyfT5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJyb3d9ICR7c3R5bGVzLmFycm93TGVmdH1gfSBvbkNsaWNrPXtzY3JvbGxMZWZ0fT5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25MZWZ0fSAvPlxyXG4gICAgPC9idXR0b24+XHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjcm9sbGFibGVDYXRlZ29yaWVzfSByZWY9e3Njcm9sbENvbnRhaW5lclJlZn0+XHJcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW19IG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyb3Bkb3duKGluZGV4KX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SGVhZGVyfT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjYXRlZ29yeS5pY29ufSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NhdGVnb3J5LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIERpc3BsYXkgc3ViY2F0ZWdvcmllcyBpZiB0aGUgY3VycmVudCBjYXRlZ29yeSBpcyBhY3RpdmUgKi99XHJcbiAgICAgICAgICB7YWN0aXZlQ2F0ZWdvcnkgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJjYXRlZ29yaWVzUG9wdXB9PlxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnksIHN1YkluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3ViSW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnN1YmNhdGVnb3J5SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFycm93fSAke3N0eWxlcy5hcnJvd1JpZ2h0fWB9IG9uQ2xpY2s9e3Njcm9sbFJpZ2h0fT5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTW91bnRhaW4iLCJmYVBhbGV0dGUiLCJmYUxhbmRtYXJrIiwiZmFDaGlsZCIsImZhVHJlZSIsImZhSGlraW5nIiwiZmFTaG9wcGluZ0NhcnQiLCJmYVNwYSIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCIsImZhU2VhcmNoIiwic3R5bGVzIiwiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsInN1YmNhdGVnb3JpZXMiLCJDYXRlZ29yaWVzIiwiYWN0aXZlQ2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsInNjcm9sbENvbnRhaW5lclJlZiIsInRvZ2dsZURyb3Bkb3duIiwiaW5kZXgiLCJwcmV2SW5kZXgiLCJzY3JvbGxMZWZ0IiwiY3VycmVudCIsInNjcm9sbFJpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2Nyb2xsQ29udGFpbmVyIiwiYnV0dG9uIiwiYXJyb3ciLCJhcnJvd0xlZnQiLCJvbkNsaWNrIiwic2Nyb2xsYWJsZUNhdGVnb3JpZXMiLCJyZWYiLCJtYXAiLCJjYXRlZ29yeSIsImNhdGVnb3J5SXRlbSIsImNhdGVnb3J5SGVhZGVyIiwic3BhbiIsInN1YmNhdGVnb3JpZXNQb3B1cCIsInN1YmNhdGVnb3J5Iiwic3ViSW5kZXgiLCJzdWJjYXRlZ29yeUl0ZW0iLCJhcnJvd1JpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories.js\n"));

/***/ })

});