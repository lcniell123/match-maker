"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sentence-case";
exports.ids = ["vendor-chunks/sentence-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/sentence-case/dist.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sentence-case/dist.es2015/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sentenceCase: () => (/* binding */ sentenceCase),\n/* harmony export */   sentenceCaseTransform: () => (/* binding */ sentenceCaseTransform)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist.es2015/index.js\");\n/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist.es2015/index.js\");\n\n\n\nfunction sentenceCaseTransform(input, index) {\n    var result = input.toLowerCase();\n    if (index === 0) return (0,upper_case_first__WEBPACK_IMPORTED_MODULE_0__.upperCaseFirst)(result);\n    return result;\n}\nfunction sentenceCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    return (0,no_case__WEBPACK_IMPORTED_MODULE_1__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({\n        delimiter: \" \",\n        transform: sentenceCaseTransform\n    }, options));\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNBO0FBQ2lCO0FBQzNDLFNBQVNHLHNCQUFzQkMsS0FBSyxFQUFFQyxLQUFLO0lBQzlDLElBQUlDLFNBQVNGLE1BQU1HLFdBQVc7SUFDOUIsSUFBSUYsVUFBVSxHQUNWLE9BQU9ILGdFQUFjQSxDQUFDSTtJQUMxQixPQUFPQTtBQUNYO0FBQ08sU0FBU0UsYUFBYUosS0FBSyxFQUFFSyxPQUFPO0lBQ3ZDLElBQUlBLFlBQVksS0FBSyxHQUFHO1FBQUVBLFVBQVUsQ0FBQztJQUFHO0lBQ3hDLE9BQU9SLCtDQUFNQSxDQUFDRyxPQUFPSiwrQ0FBUUEsQ0FBQztRQUFFVSxXQUFXO1FBQUtDLFdBQVdSO0lBQXNCLEdBQUdNO0FBQ3hGLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0Y2gtbWFrZXIvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcz80Zjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlRmlyc3QgfSBmcm9tIFwidXBwZXItY2FzZS1maXJzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VudGVuY2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogc2VudGVuY2VDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIm5vQ2FzZSIsInVwcGVyQ2FzZUZpcnN0Iiwic2VudGVuY2VDYXNlVHJhbnNmb3JtIiwiaW5wdXQiLCJpbmRleCIsInJlc3VsdCIsInRvTG93ZXJDYXNlIiwic2VudGVuY2VDYXNlIiwib3B0aW9ucyIsImRlbGltaXRlciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sentence-case/dist.es2015/index.js\n");

/***/ })

};
;