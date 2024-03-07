"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pascal-case";
exports.ids = ["vendor-chunks/pascal-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/pascal-case/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/pascal-case/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar no_case_1 = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist/index.js\");\nfunction pascalCaseTransform(input, index) {\n    var firstChar = input.charAt(0);\n    var lowerChars = input.substr(1).toLowerCase();\n    if (index > 0 && firstChar >= \"0\" && firstChar <= \"9\") {\n        return \"_\" + firstChar + lowerChars;\n    }\n    return \"\" + firstChar.toUpperCase() + lowerChars;\n}\nexports.pascalCaseTransform = pascalCaseTransform;\nfunction pascalCaseTransformMerge(input) {\n    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();\n}\nexports.pascalCaseTransformMerge = pascalCaseTransformMerge;\nfunction pascalCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: \"\", transform: pascalCaseTransform }, options));\n}\nexports.pascalCase = pascalCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFzY2FsLWNhc2UvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsR0FBRyxnQ0FBZ0MsR0FBRywyQkFBMkI7QUFDbkYsY0FBYyxtQkFBTyxDQUFDLHVEQUFPO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLDJEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsOEJBQThCO0FBQzlCLHNEQUFzRCwrQ0FBK0M7QUFDckc7QUFDQSxrQkFBa0I7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRjaC1tYWtlci8uL25vZGVfbW9kdWxlcy9wYXNjYWwtY2FzZS9kaXN0L2luZGV4LmpzPzk2MTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhc2NhbENhc2UgPSBleHBvcnRzLnBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSA9IGV4cG9ydHMucGFzY2FsQ2FzZVRyYW5zZm9ybSA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIG5vX2Nhc2VfMSA9IHJlcXVpcmUoXCJuby1jYXNlXCIpO1xuZnVuY3Rpb24gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgZmlyc3RDaGFyID0gaW5wdXQuY2hhckF0KDApO1xuICAgIHZhciBsb3dlckNoYXJzID0gaW5wdXQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID4gMCAmJiBmaXJzdENoYXIgPj0gXCIwXCIgJiYgZmlyc3RDaGFyIDw9IFwiOVwiKSB7XG4gICAgICAgIHJldHVybiBcIl9cIiArIGZpcnN0Q2hhciArIGxvd2VyQ2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCkgKyBsb3dlckNoYXJzO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlVHJhbnNmb3JtID0gcGFzY2FsQ2FzZVRyYW5zZm9ybTtcbmZ1bmN0aW9uIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLnBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSA9IHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZTtcbmZ1bmN0aW9uIHBhc2NhbENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub19jYXNlXzEubm9DYXNlKGlucHV0LCB0c2xpYl8xLl9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIlwiLCB0cmFuc2Zvcm06IHBhc2NhbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlID0gcGFzY2FsQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pascal-case/dist/index.js\n");

/***/ })

};
;