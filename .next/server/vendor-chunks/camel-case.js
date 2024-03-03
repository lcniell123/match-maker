"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/camel-case";
exports.ids = ["vendor-chunks/camel-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/camel-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/camel-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   camelCase: () => (/* binding */ camelCase),\n/* harmony export */   camelCaseTransform: () => (/* binding */ camelCaseTransform),\n/* harmony export */   camelCaseTransformMerge: () => (/* binding */ camelCaseTransformMerge)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pascal-case */ \"(ssr)/./node_modules/pascal-case/dist.es2015/index.js\");\n\n\nfunction camelCaseTransform(input, index) {\n    if (index === 0) return input.toLowerCase();\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransform)(input, index);\n}\nfunction camelCaseTransformMerge(input, index) {\n    if (index === 0) return input.toLowerCase();\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransformMerge)(input);\n}\nfunction camelCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({\n        transform: camelCaseTransform\n    }, options));\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUN3RDtBQUNsRixTQUFTSSxtQkFBbUJDLEtBQUssRUFBRUMsS0FBSztJQUMzQyxJQUFJQSxVQUFVLEdBQ1YsT0FBT0QsTUFBTUUsV0FBVztJQUM1QixPQUFPTCxnRUFBbUJBLENBQUNHLE9BQU9DO0FBQ3RDO0FBQ08sU0FBU0Usd0JBQXdCSCxLQUFLLEVBQUVDLEtBQUs7SUFDaEQsSUFBSUEsVUFBVSxHQUNWLE9BQU9ELE1BQU1FLFdBQVc7SUFDNUIsT0FBT0oscUVBQXdCQSxDQUFDRTtBQUNwQztBQUNPLFNBQVNJLFVBQVVKLEtBQUssRUFBRUssT0FBTztJQUNwQyxJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxPQUFPVCx1REFBVUEsQ0FBQ0ksT0FBT0wsK0NBQVFBLENBQUM7UUFBRVcsV0FBV1A7SUFBbUIsR0FBR007QUFDekUsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRjaC1tYWtlci8uL25vZGVfbW9kdWxlcy9jYW1lbC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzPzc4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhc2NhbENhc2UsIHBhc2NhbENhc2VUcmFuc2Zvcm0sIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSwgfSBmcm9tIFwicGFzY2FsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gcGFzY2FsQ2FzZShpbnB1dCwgX19hc3NpZ24oeyB0cmFuc2Zvcm06IGNhbWVsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiX19hc3NpZ24iLCJwYXNjYWxDYXNlIiwicGFzY2FsQ2FzZVRyYW5zZm9ybSIsInBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSIsImNhbWVsQ2FzZVRyYW5zZm9ybSIsImlucHV0IiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlIiwiY2FtZWxDYXNlIiwib3B0aW9ucyIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/camel-case/dist.es2015/index.js\n");

/***/ })

};
;