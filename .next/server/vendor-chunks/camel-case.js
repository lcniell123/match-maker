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

/***/ "(ssr)/./node_modules/camel-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/camel-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar pascal_case_1 = __webpack_require__(/*! pascal-case */ \"(ssr)/./node_modules/pascal-case/dist/index.js\");\nfunction camelCaseTransform(input, index) {\n    if (index === 0)\n        return input.toLowerCase();\n    return pascal_case_1.pascalCaseTransform(input, index);\n}\nexports.camelCaseTransform = camelCaseTransform;\nfunction camelCaseTransformMerge(input, index) {\n    if (index === 0)\n        return input.toLowerCase();\n    return pascal_case_1.pascalCaseTransformMerge(input);\n}\nexports.camelCaseTransformMerge = camelCaseTransformMerge;\nfunction camelCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));\n}\nexports.camelCase = camelCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLCtCQUErQixHQUFHLDBCQUEwQjtBQUNoRixjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0Isb0JBQW9CLG1CQUFPLENBQUMsbUVBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsOEJBQThCO0FBQzlCLDhEQUE4RCwrQkFBK0I7QUFDN0Y7QUFDQSxpQkFBaUI7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRjaC1tYWtlci8uL25vZGVfbW9kdWxlcy9jYW1lbC1jYXNlL2Rpc3QvaW5kZXguanM/ZWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gZXhwb3J0cy5jYW1lbENhc2VUcmFuc2Zvcm1NZXJnZSA9IGV4cG9ydHMuY2FtZWxDYXNlVHJhbnNmb3JtID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgcGFzY2FsX2Nhc2VfMSA9IHJlcXVpcmUoXCJwYXNjYWwtY2FzZVwiKTtcbmZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBwYXNjYWxfY2FzZV8xLnBhc2NhbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlVHJhbnNmb3JtID0gY2FtZWxDYXNlVHJhbnNmb3JtO1xuZnVuY3Rpb24gY2FtZWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsX2Nhc2VfMS5wYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQpO1xufVxuZXhwb3J0cy5jYW1lbENhc2VUcmFuc2Zvcm1NZXJnZSA9IGNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlO1xuZnVuY3Rpb24gY2FtZWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gcGFzY2FsX2Nhc2VfMS5wYXNjYWxDYXNlKGlucHV0LCB0c2xpYl8xLl9fYXNzaWduKHsgdHJhbnNmb3JtOiBjYW1lbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuZXhwb3J0cy5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/camel-case/dist/index.js\n");

/***/ })

};
;