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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// const DUMMY_MEETUPS = [\n//     {\n//         id: \"m1\",\n//         title: \"Afirst title\",\n//         image: \"two.png\",\n//         address: \"some address 5, 12354 some city\",\n//         description: \"This is a first meetup!\",\n//     },\n//     {\n//         id: \"m2\",\n//         title: \"A second title\",\n//         image: \"three.png\",\n//         address: \"some address 10, 42851 some city\",\n//         description: \"This is a second meetup!\",\n//     },\n// ];\nfunction HomePage(props) {\n    //first method which has the flaw of pre-rendering an HTML page without data because the state is initially set as an []\n    // const [loadedMeetups, setLoadedMeetups] = useState([]);\n    // useEffect(() => {\n    //     //fetch data\n    //     setLoadedMeetups(DUMMY_MEETUPS);\n    // }, []);\n    // console.log(props.meetups);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"React Meetups\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React-Course-Demos\\\\NextJs\\\\Meetups-App\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {}, void 0, false, {\n                        fileName: \"D:\\\\React-Course-Demos\\\\NextJs\\\\Meetups-App\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React-Course-Demos\\\\NextJs\\\\Meetups-App\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"D:\\\\React-Course-Demos\\\\NextJs\\\\Meetups-App\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React-Course-Demos\\\\NextJs\\\\Meetups-App\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n//second function for pre-generating the page on the server for every incoming request\n// export async function getServerSideProps(context) { //won't run during the build process but instead on the server after deployment\n//     const req = context.req;\n//     const res = context.res;//these two are used for authentication for e.g\n//     //fetch data from an API or ..\n//     return {\n//         props: {\n//             meetups: DUMMY_MEETUPS,\n//         },\n//         //no need for revalidate because getServerSideProps runs for every incoming request anyways\n//     }\n// }\n//which one is better?\n//The getStaticProps is faster (because it will be cached and reused) instead pre-generating and fetching the data for every incoming request\n//but if we have data that changes multiple times every second (even revalidate won't help us) or if we need access to the concret request object the second one will be the right choice \n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUVvQjtBQUNTO0FBQ3pCO0FBRWpDLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1Isb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIsc0RBQXNEO0FBQ3RELGtEQUFrRDtBQUNsRCxTQUFTO0FBQ1QsUUFBUTtBQUNSLG9CQUFvQjtBQUNwQixtQ0FBbUM7QUFDbkMsOEJBQThCO0FBQzlCLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsU0FBUztBQUNULEtBQUs7QUFFTCxTQUFTSSxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUVyQix3SEFBd0g7SUFDeEgsMERBQTBEO0lBQzFELG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIscUJBQ0ksOERBQUNGLDJDQUFROzswQkFDTCw4REFBQ0gsa0RBQUk7O2tDQUNELDhEQUFDTSxPQUFLO2tDQUFDLGVBQWE7Ozs7OzRCQUFRO2tDQUM1Qiw4REFBQ0MsTUFBSTs7Ozs0QkFBSTs7Ozs7O29CQUNOOzBCQUNQLDhEQUFDTCxzRUFBVTtnQkFBQ00sT0FBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU87Ozs7O29CQUFJOzs7Ozs7WUFDL0IsQ0FDYjtBQUNOLENBQUM7QUFsQlFKLEtBQUFBLFFBQVE7O0FBMERqQixzRkFBc0Y7QUFDdEYsc0lBQXNJO0FBQ3RJLCtCQUErQjtBQUMvQiw4RUFBOEU7QUFFOUUscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYixzR0FBc0c7QUFDdEcsUUFBUTtBQUNSLElBQUk7QUFHSixzQkFBc0I7QUFDdEIsNklBQTZJO0FBQzdJLDBMQUEwTDtBQUUxTCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7IC8vTmV4dCB3aWxsIGRldGVjdCB0aGF0IGl0J3Mgb25seSB1c2VkIGluIHRoZSBzZXJ2ZXIgc2lkZSBjb2RlIHNvIGl0IHdvbid0IHNob3cgaXQgdG8gdGhlIHVzZXJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogXCJtMVwiLFxyXG4vLyAgICAgICAgIHRpdGxlOiBcIkFmaXJzdCB0aXRsZVwiLFxyXG4vLyAgICAgICAgIGltYWdlOiBcInR3by5wbmdcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcInNvbWUgYWRkcmVzcyA1LCAxMjM1NCBzb21lIGNpdHlcIixcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwiLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogXCJtMlwiLFxyXG4vLyAgICAgICAgIHRpdGxlOiBcIkEgc2Vjb25kIHRpdGxlXCIsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwidGhyZWUucG5nXCIsXHJcbi8vICAgICAgICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3MgMTAsIDQyODUxIHNvbWUgY2l0eVwiLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4vLyAgICAgfSxcclxuLy8gXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcblxyXG4gICAgLy9maXJzdCBtZXRob2Qgd2hpY2ggaGFzIHRoZSBmbGF3IG9mIHByZS1yZW5kZXJpbmcgYW4gSFRNTCBwYWdlIHdpdGhvdXQgZGF0YSBiZWNhdXNlIHRoZSBzdGF0ZSBpcyBpbml0aWFsbHkgc2V0IGFzIGFuIFtdXHJcbiAgICAvLyBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vZmV0Y2ggZGF0YVxyXG4gICAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgICAvLyB9LCBbXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5tZWV0dXBzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhICAvPiBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8xLWl0IGhhcyB0byBiZSBuYW1lZCBnZXRTdGF0aWNQcm9wc1xyXG4gICAgLy8yLWl0IG9ubHkgd29ya3MgaW4gdGhlIHBhZ2VzIGZvbGRlclxyXG4gICAgLy8zLWl0J2xsIGJlIGV4Y3V0ZWQgZHVyaW5nIHRoZSBwcmUtcmVuZGVyaW5nIHByb2Nlc3MgKGJlZm9yZSB0aGUgY29tcG9uZW50IGFuZCBpdHMgSlNYKVxyXG4gICAgLy80LWl0cyBqb2IgaXMgdG8gcHJlcGFyZSBwcm9wcyBmb3IgdGhpcyBwYWdlXHJcbiAgICAvLzUtYWxsIHRoZSBjb2RlIGluc2lkZSBvZiB3aWxsIG5ldmVyIGVuZCB1cCBvbiB0aGUgY2xpZW50IHNpZGUod2UgY2FuIGRvIHNlY3VyZWx5IGNvbm5lY3QgdG8gYSBEQilcclxuICAgIC8vNi1hbHdheXMgcmV0dXJucyBhbiBvYmoge3Byb3BzOiB9XHJcblxyXG4gICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgICAvLyBmZXRjaCgnL2FwaS9tZWV0dXBzJyk7IC8vIHdlIGNhbiB1c2UgdGhpcyBidXQgaXQncyBhIGJpdCBjdW1iZXJzb21lIHNvIHdlIGNhbiB3cml0ZSB0aGUgY29kZSBkaXJlY3RseSBpbiB0aGUgZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb25cclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2ZhdG1hc2xpdGk6QVpMZ0cwZDRMMTk3VmRGZkBjbHVzdGVyMC53aW9mNTF1Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTsvL2dldCBiYWNrIGFuIGFycmF5IG9mIGRvY3NcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IC8vaXQgaGFzIHRvIGJlIG5hbWVkIHByb3BzIGFuZCBpdHMgY29udGVudCBpcyBwYXNzZWQgdmlhIHByb3BzIHRvIHRoZSBjb21wb25lbnRcclxuICAgICAgICAgICAgLy8gbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAgICAgICAgICAgLy8gbWVldHVwczogbWVldHVwcywgLy9wcm9ibGVtIHdpdGggdGhlIHN0cmFuZ2UgaWQgZ2VuZXJhdGVkIGJ5IG1vbmdvIHNvIHdlIG5lZWQgdG8gc3dlYWsgdGhlIGNvZGUgPT5cclxuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKS8vY29udmVydCB0aGUgb2JqZWN0IElEIHRvIGEgdXNhYmxlIHN0cmluZ1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEgLy9ldmVyeSAxIHNlY29uZCBmb3IgZS5nIC8vaXQgdW5sb2NrcyBhIGZlYXR1cmUgY2FsbGVkIGluY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uIHNvIG5vIG5lZWQgdG8gcmVidWlsZCBhbmQgcmVkZXBsb3kgYWxsIHRoZSB0aW1lIGp1c3QgYmVjYXVzZSBzb21lIGRhdGEgY2hhbmdlZCBcclxuICAgICAgICAvL2Vuc3VyZXMgdGhhdCB0aGUgZGF0YSB1cGRhdGVzIHJlZ3VsYXJseVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zZWNvbmQgZnVuY3Rpb24gZm9yIHByZS1nZW5lcmF0aW5nIHRoZSBwYWdlIG9uIHRoZSBzZXJ2ZXIgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3RcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7IC8vd29uJ3QgcnVuIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyBidXQgaW5zdGVhZCBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7Ly90aGVzZSB0d28gYXJlIHVzZWQgZm9yIGF1dGhlbnRpY2F0aW9uIGZvciBlLmdcclxuXHJcbi8vICAgICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBBUEkgb3IgLi5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIC8vbm8gbmVlZCBmb3IgcmV2YWxpZGF0ZSBiZWNhdXNlIGdldFNlcnZlclNpZGVQcm9wcyBydW5zIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0IGFueXdheXNcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vd2hpY2ggb25lIGlzIGJldHRlcj9cclxuLy9UaGUgZ2V0U3RhdGljUHJvcHMgaXMgZmFzdGVyIChiZWNhdXNlIGl0IHdpbGwgYmUgY2FjaGVkIGFuZCByZXVzZWQpIGluc3RlYWQgcHJlLWdlbmVyYXRpbmcgYW5kIGZldGNoaW5nIHRoZSBkYXRhIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcbi8vYnV0IGlmIHdlIGhhdmUgZGF0YSB0aGF0IGNoYW5nZXMgbXVsdGlwbGUgdGltZXMgZXZlcnkgc2Vjb25kIChldmVuIHJldmFsaWRhdGUgd29uJ3QgaGVscCB1cykgb3IgaWYgd2UgbmVlZCBhY2Nlc3MgdG8gdGhlIGNvbmNyZXQgcmVxdWVzdCBvYmplY3QgdGhlIHNlY29uZCBvbmUgd2lsbCBiZSB0aGUgcmlnaHQgY2hvaWNlIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiTWVldHVwTGlzdCIsIkZyYWdtZW50IiwiSG9tZVBhZ2UiLCJwcm9wcyIsInRpdGxlIiwibWV0YSIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});