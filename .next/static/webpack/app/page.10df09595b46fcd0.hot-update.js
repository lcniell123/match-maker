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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.ts\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// 1. Add the queries as an import\n\n\n\n\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__.generateClient)();\n// const cookiesClient = generateServerClientUsingCookies({\n//   config,\n//   cookies\n// });\nasync function createTodo(formData) {\n    var _formData_get;\n    var _formData_get_toString;\n    // 'use server';\n    const { data } = await client.graphql({\n        query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_1__.createTodo,\n        variables: {\n            input: {\n                name: (_formData_get_toString = (_formData_get = formData.get(\"name\")) === null || _formData_get === void 0 ? void 0 : _formData_get.toString()) !== null && _formData_get_toString !== void 0 ? _formData_get_toString : \"\"\n            }\n        }\n    });\n// revalidatePath('/');\n}\nfunction Todos() {\n    _s();\n    const [allTodos, setAllTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [newTodos, setNewTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // 2. Fetch additional todos\n    // const { data, errors } = await client.graphql({\n    //   query: queries.listTodos\n    // });\n    // console.log(\"data\",data.data)\n    const data = client.graphql({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__.listTodos\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        data.then((d)=>{\n            console.log(d.data.listTodos.items);\n            setAllTodos(d.data.listTodos.items);\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/\");\n        });\n    }, []);\n    // const todos = data.listTodos.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"500px\",\n            margin: \"0 auto\",\n            textAlign: \"center\",\n            marginTop: \"100px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: createTodo,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"name\",\n                        placeholder: \"Add a todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            (!allTodos || allTodos.length === 0) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No todos, please add one.\"\n                }, void 0, false, {\n                    fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: allTodos.map((todo)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            listStyle: \"none\"\n                        },\n                        children: todo.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n} // import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';\n // import { cookies } from 'next/headers';\n // import { revalidatePath } from 'next/cache';\n // import * as mutations from '@/graphql/mutations';\n // // 1. Add the queries as an import\n // import * as queries from '@/graphql/queries';\n // import config from '@/amplifyconfiguration.json';\n // const cookiesClient = generateServerClientUsingCookies({\n //   config,\n //   cookies\n // });\n // async function createTodo(formData: FormData) {\n //   'use server';\n //   const { data } = await cookiesClient.graphql({\n //     query: mutations.createTodo,\n //     variables: {\n //       input: {\n //         name: formData.get('name')?.toString() ?? ''\n //       }\n //     }\n //   });\n //   console.log('Created Todo: ', data?.createTodo);\n //   revalidatePath('/');\n // }\n // export default async function s() {\n //   // 2. Fetch additional todos\n //   const { data, errors } = await cookiesClient.graphql({\n //     query: queries.listTodos\n //   });\n //   const todos = data.listTodos.items;\n //   return (\n //     <div\n //       style={{\n //         maxWidth: '500px',\n //         margin: '0 auto',\n //         textAlign: 'center',\n //         marginTop: '100px'\n //       }}\n //     >\n //       <form action={createTodo}>\n //         <input name=\"name\" placeholder=\"Add a todo\" />\n //         <button type=\"submit\">Add</button>\n //       </form>\n //       {/* 3. Handle edge cases & zero state & error states*/}\n //       {(!todos || todos.length === 0 || errors) && (\n //         <div>\n //           <p>No todos, please add one.</p>\n //         </div>\n //       )}\n //       {/* 4. Display todos*/}\n //       <ul>\n //         {todos.map((todo) => {\n //           return <li style={{ listStyle: 'none' }}>{todo.name}</li>;\n //         })}\n //       </ul>\n //     </div>\n //   );\n // }\n_s(Todos, \"lM9K1YAuZh4edL1XAMTUxndCeJA=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9pRDtBQUNqRCxrQ0FBa0M7QUFDVztBQUdJO0FBQ0w7QUFDRDtBQUMzQyxNQUFNTSxTQUFTSiwrREFBY0E7QUFDN0IsMkRBQTJEO0FBQzNELFlBQVk7QUFDWixZQUFZO0FBQ1osTUFBTTtBQUVOLGVBQWVLLFdBQVdDLFFBQWtCO1FBUTlCQTtRQUFBQTtJQU5aLGdCQUFnQjtJQUVoQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ILE9BQU9JLE9BQU8sQ0FBQztRQUNwQ0MsT0FBT1gsMERBQW9CO1FBQzNCWSxXQUFXO1lBQ1RDLE9BQU87Z0JBQ0xDLE1BQU1OLENBQUFBLDBCQUFBQSxnQkFBQUEsU0FBU08sR0FBRyxDQUFDLHFCQUFiUCxvQ0FBQUEsY0FBc0JRLFFBQVEsZ0JBQTlCUixvQ0FBQUEseUJBQW9DO1lBQzVDO1FBQ0Y7SUFDRjtBQUdBLHVCQUF1QjtBQUN6QjtBQUVnQixTQUFTUzs7SUFFdkIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUVmLCtDQUFRQSxDQUFNLEVBQUU7SUFDOUMsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFDakIsK0NBQVFBLENBQU0sRUFBRTtJQUU5Qyw0QkFBNEI7SUFDNUIsa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixNQUFNO0lBR04sZ0NBQWdDO0lBQ2hDLE1BQU9LLE9BQU9ILE9BQU9JLE9BQU8sQ0FBQztRQUMzQkMsT0FBT1YsdURBQWlCO0lBQzFCO0lBQ0FFLGdEQUFTQSxDQUFDO1FBRVJNLEtBQUtjLElBQUksQ0FBQyxDQUFDQztZQUNUQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVmLElBQUksQ0FBQ2EsU0FBUyxDQUFDSyxLQUFLO1lBQ3hDUixZQUFZSyxFQUFFZixJQUFJLENBQUNhLFNBQVMsQ0FBQ0ssS0FBSztZQUNsQ3RCLHlEQUFRQSxDQUFDO1FBQ0w7SUFDRixHQUFFLEVBQUU7SUFJSixzQ0FBc0M7SUFFdEMscUJBQ0UsOERBQUN1QjtRQUNDQyxPQUFPO1lBQ0xDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hDLFdBQVc7UUFDYjs7MEJBRUEsOERBQUNDO2dCQUFLQyxRQUFRNUI7O2tDQUNaLDhEQUFDTTt3QkFBTUMsTUFBSzt3QkFBT3NCLGFBQVk7Ozs7OztrQ0FDL0IsOERBQUNDO3dCQUFPQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFJdEIsRUFBQ3BCLFlBQVlBLFNBQVNxQixNQUFNLEtBQUssb0JBQ2pDLDhEQUFDWDswQkFDQyw0RUFBQ1k7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUtQLDhEQUFDQzswQkFDRXZCLFNBQVN3QixHQUFHLENBQUMsQ0FBQ0M7b0JBQ2IscUJBQU8sOERBQUNDO3dCQUFHZixPQUFPOzRCQUFFZ0IsV0FBVzt3QkFBTztrQ0FBSUYsS0FBSzdCLElBQUk7Ozs7OztnQkFDckQ7Ozs7Ozs7Ozs7OztBQUtSLEVBRUEsc0ZBQXNGO0NBQ3RGLDBDQUEwQztDQUMxQywrQ0FBK0M7Q0FDL0Msb0RBQW9EO0NBQ3BELHFDQUFxQztDQUNyQyxnREFBZ0Q7Q0FFaEQsb0RBQW9EO0NBRXBELDJEQUEyRDtDQUMzRCxZQUFZO0NBQ1osWUFBWTtDQUNaLE1BQU07Q0FFTixrREFBa0Q7Q0FDbEQsa0JBQWtCO0NBQ2xCLG1EQUFtRDtDQUNuRCxtQ0FBbUM7Q0FDbkMsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQix1REFBdUQ7Q0FDdkQsVUFBVTtDQUNWLFFBQVE7Q0FDUixRQUFRO0NBRVIscURBQXFEO0NBRXJELHlCQUF5QjtDQUN6QixJQUFJO0NBRUosc0NBQXNDO0NBQ3RDLGlDQUFpQztDQUNqQywyREFBMkQ7Q0FDM0QsK0JBQStCO0NBQy9CLFFBQVE7Q0FFUix3Q0FBd0M7Q0FFeEMsYUFBYTtDQUNiLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCLDRCQUE0QjtDQUM1QiwrQkFBK0I7Q0FDL0IsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxRQUFRO0NBQ1IsbUNBQW1DO0NBQ25DLHlEQUF5RDtDQUN6RCw2Q0FBNkM7Q0FDN0MsZ0JBQWdCO0NBRWhCLGdFQUFnRTtDQUNoRSx1REFBdUQ7Q0FDdkQsZ0JBQWdCO0NBQ2hCLDZDQUE2QztDQUM3QyxpQkFBaUI7Q0FDakIsV0FBVztDQUVYLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2IsaUNBQWlDO0NBQ2pDLHVFQUF1RTtDQUN2RSxjQUFjO0NBQ2QsY0FBYztDQUNkLGFBQWE7Q0FDYixPQUFPO0NBQ1AsSUFBSTtHQS9IcUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy50c3g/NTY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IGdlbmVyYXRlU2VydmVyQ2xpZW50VXNpbmdDb29raWVzIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2FkYXB0ZXItbmV4dGpzL2FwaSc7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICdAL2dyYXBocWwvbXV0YXRpb25zJztcbi8vIDEuIEFkZCB0aGUgcXVlcmllcyBhcyBhbiBpbXBvcnRcbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSAnQC9ncmFwaHFsL3F1ZXJpZXMnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvYW1wbGlmeWNvbmZpZ3VyYXRpb24uanNvbic7XG5pbXBvcnQgeyBnZW5lcmF0ZUNsaWVudCB9IGZyb20gJ2F3cy1hbXBsaWZ5L2FwaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuY29uc3QgY2xpZW50ID0gZ2VuZXJhdGVDbGllbnQoKTtcbi8vIGNvbnN0IGNvb2tpZXNDbGllbnQgPSBnZW5lcmF0ZVNlcnZlckNsaWVudFVzaW5nQ29va2llcyh7XG4vLyAgIGNvbmZpZyxcbi8vICAgY29va2llc1xuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG5cbiAgLy8gJ3VzZSBzZXJ2ZXInO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdyYXBocWwoe1xuICAgIHF1ZXJ5OiBtdXRhdGlvbnMuY3JlYXRlVG9kbyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpPy50b1N0cmluZygpID8/ICcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIHJldmFsaWRhdGVQYXRoKCcvJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBUb2RvcygpIHtcblxuICBjb25zdCBbYWxsVG9kb3Msc2V0QWxsVG9kb3NdPSB1c2VTdGF0ZTxhbnk+KFtdKVxuICBjb25zdCBbbmV3VG9kb3MsIHNldE5ld1RvZG9zXT11c2VTdGF0ZTxhbnk+KFtdKVxuXG4gIC8vIDIuIEZldGNoIGFkZGl0aW9uYWwgdG9kb3NcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHtcbiAgLy8gICBxdWVyeTogcXVlcmllcy5saXN0VG9kb3NcbiAgLy8gfSk7XG5cbiAgIFxuICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhLmRhdGEpXG4gIGNvbnN0ICBkYXRhID0gY2xpZW50LmdyYXBocWwoe1xuICAgIHF1ZXJ5OiBxdWVyaWVzLmxpc3RUb2Rvc1xuICB9KTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgXG4gICAgZGF0YS50aGVuKChkKT0+e1xuICAgICAgY29uc29sZS5sb2coZC5kYXRhLmxpc3RUb2Rvcy5pdGVtcylcbnNldEFsbFRvZG9zKGQuZGF0YS5saXN0VG9kb3MuaXRlbXMpXG5yZWRpcmVjdCgnLycpXG4gICAgfSlcbiAgfSxbXSlcblxuICBcblxuICAvLyBjb25zdCB0b2RvcyA9IGRhdGEubGlzdFRvZG9zLml0ZW1zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWF4V2lkdGg6ICc1MDBweCcsXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpblRvcDogJzEwMHB4J1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8Zm9ybSBhY3Rpb249e2NyZWF0ZVRvZG99PlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHRvZG9cIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgey8qIDMuIEhhbmRsZSBlZGdlIGNhc2VzICYgemVybyBzdGF0ZSAmIGVycm9yIHN0YXRlcyovfVxuICAgICAgeyghYWxsVG9kb3MgfHwgYWxsVG9kb3MubGVuZ3RoID09PSAwICkgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPk5vIHRvZG9zLCBwbGVhc2UgYWRkIG9uZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIDQuIERpc3BsYXkgdG9kb3MqL31cbiAgICAgIDx1bD5cbiAgICAgICAge2FsbFRvZG9zLm1hcCgodG9kbzphbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19Pnt0b2RvLm5hbWV9PC9saT47XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn1cblxuLy8gaW1wb3J0IHsgZ2VuZXJhdGVTZXJ2ZXJDbGllbnRVc2luZ0Nvb2tpZXMgfSBmcm9tICdAYXdzLWFtcGxpZnkvYWRhcHRlci1uZXh0anMvYXBpJztcbi8vIGltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuLy8gaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbi8vIGltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICdAL2dyYXBocWwvbXV0YXRpb25zJztcbi8vIC8vIDEuIEFkZCB0aGUgcXVlcmllcyBhcyBhbiBpbXBvcnRcbi8vIGltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSAnQC9ncmFwaHFsL3F1ZXJpZXMnO1xuXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJ0AvYW1wbGlmeWNvbmZpZ3VyYXRpb24uanNvbic7XG5cbi8vIGNvbnN0IGNvb2tpZXNDbGllbnQgPSBnZW5lcmF0ZVNlcnZlckNsaWVudFVzaW5nQ29va2llcyh7XG4vLyAgIGNvbmZpZyxcbi8vICAgY29va2llc1xuLy8gfSk7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4vLyAgICd1c2Ugc2VydmVyJztcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjb29raWVzQ2xpZW50LmdyYXBocWwoe1xuLy8gICAgIHF1ZXJ5OiBtdXRhdGlvbnMuY3JlYXRlVG9kbyxcbi8vICAgICB2YXJpYWJsZXM6IHtcbi8vICAgICAgIGlucHV0OiB7XG4vLyAgICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpPy50b1N0cmluZygpID8/ICcnXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICBjb25zb2xlLmxvZygnQ3JlYXRlZCBUb2RvOiAnLCBkYXRhPy5jcmVhdGVUb2RvKTtcblxuLy8gICByZXZhbGlkYXRlUGF0aCgnLycpO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzKCkge1xuLy8gICAvLyAyLiBGZXRjaCBhZGRpdGlvbmFsIHRvZG9zXG4vLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSBhd2FpdCBjb29raWVzQ2xpZW50LmdyYXBocWwoe1xuLy8gICAgIHF1ZXJ5OiBxdWVyaWVzLmxpc3RUb2Rvc1xuLy8gICB9KTtcblxuLy8gICBjb25zdCB0b2RvcyA9IGRhdGEubGlzdFRvZG9zLml0ZW1zO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdlxuLy8gICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgbWF4V2lkdGg6ICc1MDBweCcsXG4vLyAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4vLyAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4vLyAgICAgICAgIG1hcmdpblRvcDogJzEwMHB4J1xuLy8gICAgICAgfX1cbi8vICAgICA+XG4vLyAgICAgICA8Zm9ybSBhY3Rpb249e2NyZWF0ZVRvZG99PlxuLy8gICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHRvZG9cIiAvPlxuLy8gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cblxuLy8gICAgICAgey8qIDMuIEhhbmRsZSBlZGdlIGNhc2VzICYgemVybyBzdGF0ZSAmIGVycm9yIHN0YXRlcyovfVxuLy8gICAgICAgeyghdG9kb3MgfHwgdG9kb3MubGVuZ3RoID09PSAwIHx8IGVycm9ycykgJiYgKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIDxwPk5vIHRvZG9zLCBwbGVhc2UgYWRkIG9uZS48L3A+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKX1cblxuLy8gICAgICAgey8qIDQuIERpc3BsYXkgdG9kb3MqL31cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xuLy8gICAgICAgICAgIHJldHVybiA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+e3RvZG8ubmFtZX08L2xpPjtcbi8vICAgICAgICAgfSl9XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfSJdLCJuYW1lcyI6WyJtdXRhdGlvbnMiLCJxdWVyaWVzIiwiZ2VuZXJhdGVDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlZGlyZWN0IiwiY2xpZW50IiwiY3JlYXRlVG9kbyIsImZvcm1EYXRhIiwiZGF0YSIsImdyYXBocWwiLCJxdWVyeSIsInZhcmlhYmxlcyIsImlucHV0IiwibmFtZSIsImdldCIsInRvU3RyaW5nIiwiVG9kb3MiLCJhbGxUb2RvcyIsInNldEFsbFRvZG9zIiwibmV3VG9kb3MiLCJzZXROZXdUb2RvcyIsImxpc3RUb2RvcyIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImZvcm0iLCJhY3Rpb24iLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiLCJsZW5ndGgiLCJwIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJsaXN0U3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/todos/todos.tsx\n"));

/***/ })

});