"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/capital-case";
exports.ids = ["vendor-chunks/capital-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/capital-case/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/capital-case/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.capitalCase = exports.capitalCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nvar upper_case_first_1 = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist/index.js\");\nfunction capitalCaseTransform(input) {\n    return upper_case_first_1.upperCaseFirst(input.toLowerCase());\n}\nexports.capitalCaseTransform = capitalCaseTransform;\nfunction capitalCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \" \", transform: capitalCaseTransform }, options));\n}\nexports.capitalCase = capitalCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FwaXRhbC1jYXNlL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsNEJBQTRCO0FBQ2xELGNBQWMsbUJBQU8sQ0FBQyx1REFBTztBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQywyREFBUztBQUNqQyx5QkFBeUIsbUJBQU8sQ0FBQyw2RUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsOEJBQThCO0FBQzlCLHNEQUFzRCxpREFBaUQ7QUFDdkc7QUFDQSxtQkFBbUI7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRjaC1tYWtlci8uL25vZGVfbW9kdWxlcy9jYXBpdGFsLWNhc2UvZGlzdC9pbmRleC5qcz82ZjRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYXBpdGFsQ2FzZSA9IGV4cG9ydHMuY2FwaXRhbENhc2VUcmFuc2Zvcm0gPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBub19jYXNlXzEgPSByZXF1aXJlKFwibm8tY2FzZVwiKTtcbnZhciB1cHBlcl9jYXNlX2ZpcnN0XzEgPSByZXF1aXJlKFwidXBwZXItY2FzZS1maXJzdFwiKTtcbmZ1bmN0aW9uIGNhcGl0YWxDYXNlVHJhbnNmb3JtKGlucHV0KSB7XG4gICAgcmV0dXJuIHVwcGVyX2Nhc2VfZmlyc3RfMS51cHBlckNhc2VGaXJzdChpbnB1dC50b0xvd2VyQ2FzZSgpKTtcbn1cbmV4cG9ydHMuY2FwaXRhbENhc2VUcmFuc2Zvcm0gPSBjYXBpdGFsQ2FzZVRyYW5zZm9ybTtcbmZ1bmN0aW9uIGNhcGl0YWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9fY2FzZV8xLm5vQ2FzZShpbnB1dCwgdHNsaWJfMS5fX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogY2FwaXRhbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuZXhwb3J0cy5jYXBpdGFsQ2FzZSA9IGNhcGl0YWxDYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/capital-case/dist/index.js\n");

/***/ })

};
;