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

/***/ "(app-pages-browser)/./src/app/components/todos/todos.tsx":
/*!********************************************!*\
  !*** ./src/app/components/todos/todos.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/cache */ \"(app-pages-browser)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.ts\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n// 1. Add the queries as an import\n\n\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.generateClient)();\n// const cookiesClient = generateServerClientUsingCookies({\n//   config,\n//   cookies\n// });\nasync function createTodo(formData) {\n    var _formData_get;\n    var _formData_get_toString;\n    // 'use server';\n    const { data } = await client.graphql({\n        query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.createTodo,\n        variables: {\n            input: {\n                name: (_formData_get_toString = (_formData_get = formData.get(\"name\")) === null || _formData_get === void 0 ? void 0 : _formData_get.toString()) !== null && _formData_get_toString !== void 0 ? _formData_get_toString : \"\"\n            }\n        }\n    });\n    console.log(\"Created Todo: \", data === null || data === void 0 ? void 0 : data.createTodo);\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(\"/\");\n}\nfunction Todos() {\n    // 2. Fetch additional todos\n    // const { data, errors } = await client.graphql({\n    //   query: queries.listTodos\n    // });\n    const data = client.graphql({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.listTodos\n    });\n    console.log(\"data\", data);\n    // const todos = data.listTodos.items;\n    return(// <div\n    //   style={{\n    //     maxWidth: '500px',\n    //     margin: '0 auto',\n    //     textAlign: 'center',\n    //     marginTop: '100px'\n    //   }}\n    // >\n    //   <form action={createTodo}>\n    //     <input name=\"name\" placeholder=\"Add a todo\" />\n    //     <button type=\"submit\">Add</button>\n    //   </form>\n    //   {/* 3. Handle edge cases & zero state & error states*/}\n    //   {(!todos || todos.length === 0 || errors) && (\n    //     <div>\n    //       <p>No todos, please add one.</p>\n    //     </div>\n    //   )}\n    //   {/* 4. Display todos*/}\n    //   <ul>\n    //     {todos.map((todo:any) => {\n    //       return <li style={{ listStyle: 'none' }}>{todo.name}</li>;\n    //     })}\n    //   </ul>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n} // import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';\n // import { cookies } from 'next/headers';\n // import { revalidatePath } from 'next/cache';\n // import * as mutations from '@/graphql/mutations';\n // // 1. Add the queries as an import\n // import * as queries from '@/graphql/queries';\n // import config from '@/amplifyconfiguration.json';\n // const cookiesClient = generateServerClientUsingCookies({\n //   config,\n //   cookies\n // });\n // async function createTodo(formData: FormData) {\n //   'use server';\n //   const { data } = await cookiesClient.graphql({\n //     query: mutations.createTodo,\n //     variables: {\n //       input: {\n //         name: formData.get('name')?.toString() ?? ''\n //       }\n //     }\n //   });\n //   console.log('Created Todo: ', data?.createTodo);\n //   revalidatePath('/');\n // }\n // export default async function s() {\n //   // 2. Fetch additional todos\n //   const { data, errors } = await cookiesClient.graphql({\n //     query: queries.listTodos\n //   });\n //   const todos = data.listTodos.items;\n //   return (\n //     <div\n //       style={{\n //         maxWidth: '500px',\n //         margin: '0 auto',\n //         textAlign: 'center',\n //         marginTop: '100px'\n //       }}\n //     >\n //       <form action={createTodo}>\n //         <input name=\"name\" placeholder=\"Add a todo\" />\n //         <button type=\"submit\">Add</button>\n //       </form>\n //       {/* 3. Handle edge cases & zero state & error states*/}\n //       {(!todos || todos.length === 0 || errors) && (\n //         <div>\n //           <p>No todos, please add one.</p>\n //         </div>\n //       )}\n //       {/* 4. Display todos*/}\n //       <ul>\n //         {todos.map((todo) => {\n //           return <li style={{ listStyle: 'none' }}>{todo.name}</li>;\n //         })}\n //       </ul>\n //     </div>\n //   );\n // }\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJNEM7QUFDSztBQUNqRCxrQ0FBa0M7QUFDVztBQUdJO0FBQ2pELE1BQU1JLFNBQVNELCtEQUFjQTtBQUM3QiwyREFBMkQ7QUFDM0QsWUFBWTtBQUNaLFlBQVk7QUFDWixNQUFNO0FBRU4sZUFBZUUsV0FBV0MsUUFBa0I7UUFROUJBO1FBQUFBO0lBTlosZ0JBQWdCO0lBRWhCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUgsT0FBT0ksT0FBTyxDQUFDO1FBQ3BDQyxPQUFPUiwwREFBb0I7UUFDM0JTLFdBQVc7WUFDVEMsT0FBTztnQkFDTEMsTUFBTU4sQ0FBQUEsMEJBQUFBLGdCQUFBQSxTQUFTTyxHQUFHLENBQUMscUJBQWJQLG9DQUFBQSxjQUFzQlEsUUFBUSxnQkFBOUJSLG9DQUFBQSx5QkFBb0M7WUFDNUM7UUFDRjtJQUNGO0lBRUFTLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JULGlCQUFBQSwyQkFBQUEsS0FBTUYsVUFBVTtJQUU5Q0wsMERBQWNBLENBQUM7QUFDakI7QUFFZ0IsU0FBU2lCO0lBRXZCLDRCQUE0QjtJQUM1QixrREFBa0Q7SUFDbEQsNkJBQTZCO0lBQzdCLE1BQU07SUFFTCxNQUFPVixPQUFPSCxPQUFPSSxPQUFPLENBQUM7UUFDNUJDLE9BQU9QLHVEQUFpQjtJQUMxQjtJQUNBYSxRQUFRQyxHQUFHLENBQUMsUUFBT1Q7SUFFbkIsc0NBQXNDO0lBRXRDLE9BQ0UsT0FBTztJQUNQLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsT0FBTztJQUNQLElBQUk7SUFDSiwrQkFBK0I7SUFDL0IscURBQXFEO0lBQ3JELHlDQUF5QztJQUN6QyxZQUFZO0lBRVosNERBQTREO0lBQzVELG1EQUFtRDtJQUNuRCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixPQUFPO0lBRVAsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsbUVBQW1FO0lBQ25FLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUztrQkFDVDtBQUVKLEVBRUEsc0ZBQXNGO0NBQ3RGLDBDQUEwQztDQUMxQywrQ0FBK0M7Q0FDL0Msb0RBQW9EO0NBQ3BELHFDQUFxQztDQUNyQyxnREFBZ0Q7Q0FFaEQsb0RBQW9EO0NBRXBELDJEQUEyRDtDQUMzRCxZQUFZO0NBQ1osWUFBWTtDQUNaLE1BQU07Q0FFTixrREFBa0Q7Q0FDbEQsa0JBQWtCO0NBQ2xCLG1EQUFtRDtDQUNuRCxtQ0FBbUM7Q0FDbkMsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQix1REFBdUQ7Q0FDdkQsVUFBVTtDQUNWLFFBQVE7Q0FDUixRQUFRO0NBRVIscURBQXFEO0NBRXJELHlCQUF5QjtDQUN6QixJQUFJO0NBRUosc0NBQXNDO0NBQ3RDLGlDQUFpQztDQUNqQywyREFBMkQ7Q0FDM0QsK0JBQStCO0NBQy9CLFFBQVE7Q0FFUix3Q0FBd0M7Q0FFeEMsYUFBYTtDQUNiLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCLDRCQUE0QjtDQUM1QiwrQkFBK0I7Q0FDL0IsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxRQUFRO0NBQ1IsbUNBQW1DO0NBQ25DLHlEQUF5RDtDQUN6RCw2Q0FBNkM7Q0FDN0MsZ0JBQWdCO0NBRWhCLGdFQUFnRTtDQUNoRSx1REFBdUQ7Q0FDdkQsZ0JBQWdCO0NBQ2hCLDZDQUE2QztDQUM3QyxpQkFBaUI7Q0FDakIsV0FBVztDQUVYLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2IsaUNBQWlDO0NBQ2pDLHVFQUF1RTtDQUN2RSxjQUFjO0NBQ2QsY0FBYztDQUNkLGFBQWE7Q0FDYixPQUFPO0NBQ1AsSUFBSTtLQWpIcUJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy50c3g/NTY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IGdlbmVyYXRlU2VydmVyQ2xpZW50VXNpbmdDb29raWVzIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2FkYXB0ZXItbmV4dGpzL2FwaSc7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSAnQC9ncmFwaHFsL211dGF0aW9ucyc7XG4vLyAxLiBBZGQgdGhlIHF1ZXJpZXMgYXMgYW4gaW1wb3J0XG5pbXBvcnQgKiBhcyBxdWVyaWVzIGZyb20gJ0AvZ3JhcGhxbC9xdWVyaWVzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdAL2FtcGxpZnljb25maWd1cmF0aW9uLmpzb24nO1xuaW1wb3J0IHsgZ2VuZXJhdGVDbGllbnQgfSBmcm9tICdhd3MtYW1wbGlmeS9hcGknO1xuY29uc3QgY2xpZW50ID0gZ2VuZXJhdGVDbGllbnQoKTtcbi8vIGNvbnN0IGNvb2tpZXNDbGllbnQgPSBnZW5lcmF0ZVNlcnZlckNsaWVudFVzaW5nQ29va2llcyh7XG4vLyAgIGNvbmZpZyxcbi8vICAgY29va2llc1xuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG5cbiAgLy8gJ3VzZSBzZXJ2ZXInO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdyYXBocWwoe1xuICAgIHF1ZXJ5OiBtdXRhdGlvbnMuY3JlYXRlVG9kbyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpPy50b1N0cmluZygpID8/ICcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZygnQ3JlYXRlZCBUb2RvOiAnLCBkYXRhPy5jcmVhdGVUb2RvKTtcblxuICByZXZhbGlkYXRlUGF0aCgnLycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gVG9kb3MoKSB7XG5cbiAgLy8gMi4gRmV0Y2ggYWRkaXRpb25hbCB0b2Rvc1xuICAvLyBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgY2xpZW50LmdyYXBocWwoe1xuICAvLyAgIHF1ZXJ5OiBxdWVyaWVzLmxpc3RUb2Rvc1xuICAvLyB9KTtcblxuICAgY29uc3QgIGRhdGEgPSBjbGllbnQuZ3JhcGhxbCh7XG4gICAgcXVlcnk6IHF1ZXJpZXMubGlzdFRvZG9zXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxuXG4gIC8vIGNvbnN0IHRvZG9zID0gZGF0YS5saXN0VG9kb3MuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2XG4gICAgLy8gICBzdHlsZT17e1xuICAgIC8vICAgICBtYXhXaWR0aDogJzUwMHB4JyxcbiAgICAvLyAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAvLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAvLyAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4gICAgLy8gICB9fVxuICAgIC8vID5cbiAgICAvLyAgIDxmb3JtIGFjdGlvbj17Y3JlYXRlVG9kb30+XG4gICAgLy8gICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgdG9kb1wiIC8+XG4gICAgLy8gICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgIC8vICAgPC9mb3JtPlxuXG4gICAgLy8gICB7LyogMy4gSGFuZGxlIGVkZ2UgY2FzZXMgJiB6ZXJvIHN0YXRlICYgZXJyb3Igc3RhdGVzKi99XG4gICAgLy8gICB7KCF0b2RvcyB8fCB0b2Rvcy5sZW5ndGggPT09IDAgfHwgZXJyb3JzKSAmJiAoXG4gICAgLy8gICAgIDxkaXY+XG4gICAgLy8gICAgICAgPHA+Tm8gdG9kb3MsIHBsZWFzZSBhZGQgb25lLjwvcD5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICApfVxuXG4gICAgLy8gICB7LyogNC4gRGlzcGxheSB0b2RvcyovfVxuICAgIC8vICAgPHVsPlxuICAgIC8vICAgICB7dG9kb3MubWFwKCh0b2RvOmFueSkgPT4ge1xuICAgIC8vICAgICAgIHJldHVybiA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+e3RvZG8ubmFtZX08L2xpPjtcbiAgICAvLyAgICAgfSl9XG4gICAgLy8gICA8L3VsPlxuICAgIC8vIDwvZGl2PlxuICAgIDw+PC8+XG4gICk7XG59XG5cbi8vIGltcG9ydCB7IGdlbmVyYXRlU2VydmVyQ2xpZW50VXNpbmdDb29raWVzIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2FkYXB0ZXItbmV4dGpzL2FwaSc7XG4vLyBpbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcbi8vIGltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG4vLyBpbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSAnQC9ncmFwaHFsL211dGF0aW9ucyc7XG4vLyAvLyAxLiBBZGQgdGhlIHF1ZXJpZXMgYXMgYW4gaW1wb3J0XG4vLyBpbXBvcnQgKiBhcyBxdWVyaWVzIGZyb20gJ0AvZ3JhcGhxbC9xdWVyaWVzJztcblxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICdAL2FtcGxpZnljb25maWd1cmF0aW9uLmpzb24nO1xuXG4vLyBjb25zdCBjb29raWVzQ2xpZW50ID0gZ2VuZXJhdGVTZXJ2ZXJDbGllbnRVc2luZ0Nvb2tpZXMoe1xuLy8gICBjb25maWcsXG4vLyAgIGNvb2tpZXNcbi8vIH0pO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2RvKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuLy8gICAndXNlIHNlcnZlcic7XG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY29va2llc0NsaWVudC5ncmFwaHFsKHtcbi8vICAgICBxdWVyeTogbXV0YXRpb25zLmNyZWF0ZVRvZG8sXG4vLyAgICAgdmFyaWFibGVzOiB7XG4vLyAgICAgICBpbnB1dDoge1xuLy8gICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKT8udG9TdHJpbmcoKSA/PyAnJ1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgVG9kbzogJywgZGF0YT8uY3JlYXRlVG9kbyk7XG5cbi8vICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcygpIHtcbi8vICAgLy8gMi4gRmV0Y2ggYWRkaXRpb25hbCB0b2Rvc1xuLy8gICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgY29va2llc0NsaWVudC5ncmFwaHFsKHtcbi8vICAgICBxdWVyeTogcXVlcmllcy5saXN0VG9kb3Ncbi8vICAgfSk7XG5cbi8vICAgY29uc3QgdG9kb3MgPSBkYXRhLmxpc3RUb2Rvcy5pdGVtcztcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXZcbi8vICAgICAgIHN0eWxlPXt7XG4vLyAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnLFxuLy8gICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuLy8gICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuLy8gICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcbi8vICAgICAgIH19XG4vLyAgICAgPlxuLy8gICAgICAgPGZvcm0gYWN0aW9uPXtjcmVhdGVUb2RvfT5cbi8vICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSB0b2RvXCIgLz5cbi8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4vLyAgICAgICA8L2Zvcm0+XG5cbi8vICAgICAgIHsvKiAzLiBIYW5kbGUgZWRnZSBjYXNlcyAmIHplcm8gc3RhdGUgJiBlcnJvciBzdGF0ZXMqL31cbi8vICAgICAgIHsoIXRvZG9zIHx8IHRvZG9zLmxlbmd0aCA9PT0gMCB8fCBlcnJvcnMpICYmIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICA8cD5ObyB0b2RvcywgcGxlYXNlIGFkZCBvbmUuPC9wPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICl9XG5cbi8vICAgICAgIHsvKiA0LiBEaXNwbGF5IHRvZG9zKi99XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbi8vICAgICAgICAgICByZXR1cm4gPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19Pnt0b2RvLm5hbWV9PC9saT47XG4vLyAgICAgICAgIH0pfVxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH0iXSwibmFtZXMiOlsicmV2YWxpZGF0ZVBhdGgiLCJtdXRhdGlvbnMiLCJxdWVyaWVzIiwiZ2VuZXJhdGVDbGllbnQiLCJjbGllbnQiLCJjcmVhdGVUb2RvIiwiZm9ybURhdGEiLCJkYXRhIiwiZ3JhcGhxbCIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiVG9kb3MiLCJsaXN0VG9kb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/todos/todos.tsx\n"));

/***/ })

});