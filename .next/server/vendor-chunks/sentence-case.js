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

/***/ "(ssr)/./node_modules/sentence-case/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/sentence-case/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sentenceCase = exports.sentenceCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nvar upper_case_first_1 = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist/index.js\");\nfunction sentenceCaseTransform(input, index) {\n    var result = input.toLowerCase();\n    if (index === 0)\n        return upper_case_first_1.upperCaseFirst(result);\n    return result;\n}\nexports.sentenceCaseTransform = sentenceCaseTransform;\nfunction sentenceCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \" \", transform: sentenceCaseTransform }, options));\n}\nexports.sentenceCase = sentenceCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLDZCQUE2QjtBQUNwRCxjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0IsZ0JBQWdCLG1CQUFPLENBQUMsMkRBQVM7QUFDakMseUJBQXlCLG1CQUFPLENBQUMsNkVBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDhCQUE4QjtBQUM5QixzREFBc0Qsa0RBQWtEO0FBQ3hHO0FBQ0Esb0JBQW9CO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0Y2gtbWFrZXIvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0L2luZGV4LmpzP2Y2YzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlbnRlbmNlQ2FzZSA9IGV4cG9ydHMuc2VudGVuY2VDYXNlVHJhbnNmb3JtID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgbm9fY2FzZV8xID0gcmVxdWlyZShcIm5vLWNhc2VcIik7XG52YXIgdXBwZXJfY2FzZV9maXJzdF8xID0gcmVxdWlyZShcInVwcGVyLWNhc2UtZmlyc3RcIik7XG5mdW5jdGlvbiBzZW50ZW5jZUNhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gdXBwZXJfY2FzZV9maXJzdF8xLnVwcGVyQ2FzZUZpcnN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuc2VudGVuY2VDYXNlVHJhbnNmb3JtID0gc2VudGVuY2VDYXNlVHJhbnNmb3JtO1xuZnVuY3Rpb24gc2VudGVuY2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9fY2FzZV8xLm5vQ2FzZShpbnB1dCwgdHNsaWJfMS5fX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogc2VudGVuY2VDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMuc2VudGVuY2VDYXNlID0gc2VudGVuY2VDYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sentence-case/dist/index.js\n");

/***/ })

};
;