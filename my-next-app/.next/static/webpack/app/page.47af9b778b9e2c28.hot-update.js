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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.module.css */ \"(app-pages-browser)/./src/components/categories.module.css\");\n/* harmony import */ var _categories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categories_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// // src/components/Categories.js\n// \"use client\";\n// import { FontAwesomeIcon } from \"@fortawesome/react-fontawesome\";\n// import { faMountain, faPalette, faLandmark, faChild, faTree, faHiking, faShoppingCart, faSpa, faSearch } from \"@fortawesome/free-solid-svg-icons\";\n// import styles from \"./categories.module.css\";\n// const categories = [\n//   { title: \"Adventure\", icon: faMountain },\n//   { title: \"Art & Culture\", icon: faPalette },\n//   { title: \"Attractions\", icon: faLandmark },\n//   { title: \"Family & Kids\", icon: faChild },\n//   { title: \"Nature & Sightseeing\", icon: faTree },\n//   { title: \"Outdoor Tours\", icon: faHiking },\n//   { title: \"Shopping & Entertainment\", icon: faShoppingCart },\n//   { title: \"Wellbeing\", icon: faSpa },\n//   { title: \"\", icon: faSearch },\n// ];\n// const Categories = () => {\n//   return (\n//     <div className={styles.categoriesContainer}>\n//       {categories.map((category, index) => (\n//         <div key={index} className={styles.categoryItem}>\n//           <FontAwesomeIcon icon={category.icon} className={styles.icon} />\n//           <span>{category.title}</span>\n//         </div>\n//       ))}\n//     </div>\n//   );\n// };\n// export default Categories;\n// src/components/Categories.js\n// src/components/Categories.js\n// src/components/Categories.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst categories = [\n    {\n        title: \"Adventure\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMountain,\n        subcategories: [\n            \"Adrenaline\",\n            \"Camping\",\n            \"Golfing\",\n            \"Hiking\",\n            \"Skiing\",\n            \"Water Sports\",\n            \"Cycling & Mountain Biking\"\n        ]\n    },\n    {\n        title: \"Art & Culture\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPalette,\n        subcategories: [\n            \"Comedy\",\n            \"Concerts\",\n            \"Galleries & Museums\",\n            \"Indigenous Tourism\",\n            \"Performing Arts\"\n        ]\n    },\n    {\n        title: \"Attractions\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLandmark,\n        subcategories: [\n            \"Landmarks\",\n            \"Monuments\",\n            \"Parks\"\n        ]\n    },\n    {\n        title: \"Family & Kids\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChild,\n        subcategories: [\n            \"Amusement Parks\",\n            \"Zoos\",\n            \"Playgrounds\"\n        ]\n    },\n    {\n        title: \"Nature & Sightseeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTree,\n        subcategories: [\n            \"National Parks\",\n            \"Scenic Drives\",\n            \"Wildlife Watching\"\n        ]\n    },\n    {\n        title: \"Outdoor Tours\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHiking,\n        subcategories: [\n            \"Guided Hikes\",\n            \"Boat Tours\",\n            \"Safari Tours\"\n        ]\n    },\n    {\n        title: \"Shopping & Entertainment\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShoppingCart,\n        subcategories: [\n            \"Malls\",\n            \"Cinemas\",\n            \"Theaters\"\n        ]\n    },\n    {\n        title: \"Wellbeing\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSpa,\n        subcategories: [\n            \"Spas\",\n            \"Yoga Retreats\",\n            \"Meditation Centers\"\n        ]\n    },\n    {\n        title: \"Search\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch,\n        subcategories: [\n            \"Advanced Search\",\n            \"Filters\"\n        ]\n    }\n];\nconst Categories = ()=>{\n    _s();\n    const [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleDropdown = (index)=>{\n        setActiveCategory((prevIndex)=>prevIndex === index ? null : index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem), \" \").concat(activeCategory === index ? (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                onClick: ()=>toggleDropdown(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryHeader),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: category.icon,\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: category.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined),\n                    activeCategory === index && category.subcategories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategories),\n                        children: category.subcategories.map((subcategory, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().subcategoryItem),\n                                children: subcategory\n                            }, subIndex, false, {\n                                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                                lineNumber: 130,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                        lineNumber: 128,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Latitude\\\\Desktop\\\\Destination\\\\my-next-app\\\\src\\\\components\\\\categories.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"xMflSddbJbX5Q1M57e/P7XmYV4s=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDbEMsZ0JBQWdCO0FBRWhCLG9FQUFvRTtBQUNwRSxxSkFBcUo7QUFDckosZ0RBQWdEO0FBRWhELHVCQUF1QjtBQUN2Qiw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUNoRCwrQ0FBK0M7QUFDL0MscURBQXFEO0FBQ3JELGdEQUFnRDtBQUNoRCxpRUFBaUU7QUFDakUseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUNuQyxLQUFLO0FBRUwsNkJBQTZCO0FBQzdCLGFBQWE7QUFDYixtREFBbUQ7QUFDbkQsK0NBQStDO0FBQy9DLDREQUE0RDtBQUM1RCw2RUFBNkU7QUFDN0UsMENBQTBDO0FBQzFDLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCOzs7QUFHRTtBQUNnQztBQUNpRjtBQUNyRztBQUU3QyxNQUFNWSxhQUFhO0lBQ2pCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTVoseUVBQVVBO1FBQ2hCYSxlQUFlO1lBQ2I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNWCx3RUFBU0E7UUFDZlksZUFBZTtZQUNiO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNVix5RUFBVUE7UUFDaEJXLGVBQWU7WUFBQztZQUFhO1lBQWE7U0FBUTtJQUNwRDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVQsc0VBQU9BO1FBQ2JVLGVBQWU7WUFBQztZQUFtQjtZQUFRO1NBQWM7SUFDM0Q7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1SLHFFQUFNQTtRQUNaUyxlQUFlO1lBQUM7WUFBa0I7WUFBaUI7U0FBb0I7SUFDekU7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1QLHVFQUFRQTtRQUNkUSxlQUFlO1lBQUM7WUFBZ0I7WUFBYztTQUFlO0lBQy9EO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNTiw2RUFBY0E7UUFDcEJPLGVBQWU7WUFBQztZQUFTO1lBQVc7U0FBVztJQUNqRDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTUwsb0VBQUtBO1FBQ1hNLGVBQWU7WUFBQztZQUFRO1lBQWlCO1NBQXFCO0lBQ2hFO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNSix1RUFBUUE7UUFDZEssZUFBZTtZQUFDO1lBQW1CO1NBQVU7SUFDL0M7Q0FDRDtBQUVELE1BQU1DLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1tQixpQkFBaUIsQ0FBQ0M7UUFDdEJGLGtCQUFrQixDQUFDRyxZQUFlQSxjQUFjRCxRQUFRLE9BQU9BO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNFO2tCQUNFVixXQUFXVyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUosc0JBQ3pCLDhEQUFDRTtnQkFFQ0csV0FBVyxHQUEwQlIsT0FBdkJOLDRFQUFtQixFQUFDLEtBQWlELE9BQTlDTSxtQkFBbUJHLFFBQVFULHNFQUFhLEdBQUc7Z0JBQ2hGaUIsU0FBUyxJQUFNVCxlQUFlQzs7a0NBRTlCLDhEQUFDRTt3QkFBSUcsV0FBV2QsOEVBQXFCOzswQ0FDbkMsOERBQUNWLDJFQUFlQTtnQ0FBQ2EsTUFBTVUsU0FBU1YsSUFBSTtnQ0FBRVcsV0FBV2Qsb0VBQVc7Ozs7OzswQ0FDNUQsOERBQUNtQjtnQ0FBS0wsV0FBV2QscUVBQVk7MENBQUdhLFNBQVNYLEtBQUs7Ozs7Ozs7Ozs7OztvQkFHL0NJLG1CQUFtQkcsU0FBU0ksU0FBU1QsYUFBYSxrQkFDakQsOERBQUNPO3dCQUFJRyxXQUFXZCw2RUFBb0I7a0NBQ2pDYSxTQUFTVCxhQUFhLENBQUNRLEdBQUcsQ0FBQyxDQUFDUSxhQUFhQyx5QkFDeEMsOERBQUNWO2dDQUFtQkcsV0FBV2QsK0VBQXNCOzBDQUNsRG9COytCQURPQzs7Ozs7Ozs7Ozs7ZUFaWFo7Ozs7Ozs7Ozs7QUFzQmY7R0FqQ01KO0tBQUFBO0FBbUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanM/YzdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLy8gc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy5qc1xyXG4vLyBcInVzZSBjbGllbnRcIjtcclxuXHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IHsgZmFNb3VudGFpbiwgZmFQYWxldHRlLCBmYUxhbmRtYXJrLCBmYUNoaWxkLCBmYVRyZWUsIGZhSGlraW5nLCBmYVNob3BwaW5nQ2FydCwgZmFTcGEsIGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhdGVnb3JpZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuLy8gICB7IHRpdGxlOiBcIkFkdmVudHVyZVwiLCBpY29uOiBmYU1vdW50YWluIH0sXHJcbi8vICAgeyB0aXRsZTogXCJBcnQgJiBDdWx0dXJlXCIsIGljb246IGZhUGFsZXR0ZSB9LFxyXG4vLyAgIHsgdGl0bGU6IFwiQXR0cmFjdGlvbnNcIiwgaWNvbjogZmFMYW5kbWFyayB9LFxyXG4vLyAgIHsgdGl0bGU6IFwiRmFtaWx5ICYgS2lkc1wiLCBpY29uOiBmYUNoaWxkIH0sXHJcbi8vICAgeyB0aXRsZTogXCJOYXR1cmUgJiBTaWdodHNlZWluZ1wiLCBpY29uOiBmYVRyZWUgfSxcclxuLy8gICB7IHRpdGxlOiBcIk91dGRvb3IgVG91cnNcIiwgaWNvbjogZmFIaWtpbmcgfSxcclxuLy8gICB7IHRpdGxlOiBcIlNob3BwaW5nICYgRW50ZXJ0YWlubWVudFwiLCBpY29uOiBmYVNob3BwaW5nQ2FydCB9LFxyXG4vLyAgIHsgdGl0bGU6IFwiV2VsbGJlaW5nXCIsIGljb246IGZhU3BhIH0sXHJcbi8vICAgeyB0aXRsZTogXCJcIiwgaWNvbjogZmFTZWFyY2ggfSxcclxuLy8gXTtcclxuXHJcbi8vIGNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0NvbnRhaW5lcn0+XHJcbi8vICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbi8vICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW19PlxyXG4vLyAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjYXRlZ29yeS5pY29ufSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4vLyAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5LnRpdGxlfTwvc3Bhbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuLy8gc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy5qc1xyXG4vLyBzcmMvY29tcG9uZW50cy9DYXRlZ29yaWVzLmpzXHJcbi8vIHNyYy9jb21wb25lbnRzL0NhdGVnb3JpZXMuanNcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhTW91bnRhaW4sIGZhUGFsZXR0ZSwgZmFMYW5kbWFyaywgZmFDaGlsZCwgZmFUcmVlLCBmYUhpa2luZywgZmFTaG9wcGluZ0NhcnQsIGZhU3BhLCBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jYXRlZ29yaWVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWR2ZW50dXJlXCIsXHJcbiAgICBpY29uOiBmYU1vdW50YWluLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1xyXG4gICAgICBcIkFkcmVuYWxpbmVcIixcclxuICAgICAgXCJDYW1waW5nXCIsXHJcbiAgICAgIFwiR29sZmluZ1wiLFxyXG4gICAgICBcIkhpa2luZ1wiLFxyXG4gICAgICBcIlNraWluZ1wiLFxyXG4gICAgICBcIldhdGVyIFNwb3J0c1wiLFxyXG4gICAgICBcIkN5Y2xpbmcgJiBNb3VudGFpbiBCaWtpbmdcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcnQgJiBDdWx0dXJlXCIsXHJcbiAgICBpY29uOiBmYVBhbGV0dGUsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXHJcbiAgICAgIFwiQ29tZWR5XCIsXHJcbiAgICAgIFwiQ29uY2VydHNcIixcclxuICAgICAgXCJHYWxsZXJpZXMgJiBNdXNldW1zXCIsXHJcbiAgICAgIFwiSW5kaWdlbm91cyBUb3VyaXNtXCIsXHJcbiAgICAgIFwiUGVyZm9ybWluZyBBcnRzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXR0cmFjdGlvbnNcIixcclxuICAgIGljb246IGZhTGFuZG1hcmssXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJMYW5kbWFya3NcIiwgXCJNb251bWVudHNcIiwgXCJQYXJrc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZhbWlseSAmIEtpZHNcIixcclxuICAgIGljb246IGZhQ2hpbGQsXHJcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJBbXVzZW1lbnQgUGFya3NcIiwgXCJab29zXCIsIFwiUGxheWdyb3VuZHNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOYXR1cmUgJiBTaWdodHNlZWluZ1wiLFxyXG4gICAgaWNvbjogZmFUcmVlLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiTmF0aW9uYWwgUGFya3NcIiwgXCJTY2VuaWMgRHJpdmVzXCIsIFwiV2lsZGxpZmUgV2F0Y2hpbmdcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPdXRkb29yIFRvdXJzXCIsXHJcbiAgICBpY29uOiBmYUhpa2luZyxcclxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkd1aWRlZCBIaWtlc1wiLCBcIkJvYXQgVG91cnNcIiwgXCJTYWZhcmkgVG91cnNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTaG9wcGluZyAmIEVudGVydGFpbm1lbnRcIixcclxuICAgIGljb246IGZhU2hvcHBpbmdDYXJ0LFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiTWFsbHNcIiwgXCJDaW5lbWFzXCIsIFwiVGhlYXRlcnNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXZWxsYmVpbmdcIixcclxuICAgIGljb246IGZhU3BhLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiU3Bhc1wiLCBcIllvZ2EgUmV0cmVhdHNcIiwgXCJNZWRpdGF0aW9uIENlbnRlcnNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTZWFyY2hcIixcclxuICAgIGljb246IGZhU2VhcmNoLFxyXG4gICAgc3ViY2F0ZWdvcmllczogW1wiQWR2YW5jZWQgU2VhcmNoXCIsIFwiRmlsdGVyc1wiXSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ2F0ZWdvcnkoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhdGVnb3J5SXRlbX0gJHthY3RpdmVDYXRlZ29yeSA9PT0gaW5kZXggPyBzdHlsZXMuYWN0aXZlIDogXCJcIn1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRHJvcGRvd24oaW5kZXgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2NhdGVnb3J5Lmljb259IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y2F0ZWdvcnkudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU3ViY2F0ZWdvcmllcyBEcm9wZG93biAqL31cclxuICAgICAgICAgIHthY3RpdmVDYXRlZ29yeSA9PT0gaW5kZXggJiYgY2F0ZWdvcnkuc3ViY2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICAgICAge2NhdGVnb3J5LnN1YmNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeSwgc3ViSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWJJbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuc3ViY2F0ZWdvcnlJdGVtfT5cclxuICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNb3VudGFpbiIsImZhUGFsZXR0ZSIsImZhTGFuZG1hcmsiLCJmYUNoaWxkIiwiZmFUcmVlIiwiZmFIaWtpbmciLCJmYVNob3BwaW5nQ2FydCIsImZhU3BhIiwiZmFTZWFyY2giLCJzdHlsZXMiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJpY29uIiwic3ViY2F0ZWdvcmllcyIsIkNhdGVnb3JpZXMiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwidG9nZ2xlRHJvcGRvd24iLCJpbmRleCIsInByZXZJbmRleCIsImRpdiIsIm1hcCIsImNhdGVnb3J5IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnlJdGVtIiwiYWN0aXZlIiwib25DbGljayIsImNhdGVnb3J5SGVhZGVyIiwic3BhbiIsInN1YmNhdGVnb3J5Iiwic3ViSW5kZXgiLCJzdWJjYXRlZ29yeUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories.js\n"));

/***/ })

});