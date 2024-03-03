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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.ts\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// 1. Add the queries as an import\n\n\n\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.generateClient)();\n// const cookiesClient = generateServerClientUsingCookies({\n//   config,\n//   cookies\n// });\nasync function createTodo(formData) {\n    var _formData_get;\n    var _formData_get_toString;\n    // 'use server';\n    const { data } = await client.graphql({\n        query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_1__.createTodo,\n        variables: {\n            input: {\n                name: (_formData_get_toString = (_formData_get = formData.get(\"name\")) === null || _formData_get === void 0 ? void 0 : _formData_get.toString()) !== null && _formData_get_toString !== void 0 ? _formData_get_toString : \"\"\n            }\n        }\n    });\n// revalidatePath('/');\n}\nfunction Todos() {\n    _s();\n    const [allTodos, setAllTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // 2. Fetch additional todos\n    // const { data, errors } = await client.graphql({\n    //   query: queries.listTodos\n    // });\n    // console.log(\"data\",data.data)\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const data = client.graphql({\n            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__.listTodos\n        });\n        data.then((d)=>{\n            console.log(d.data.listTodos.items);\n            setAllTodos(d.data.listTodos.items);\n        });\n    }, []);\n    // const todos = data.listTodos.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"500px\",\n            margin: \"0 auto\",\n            textAlign: \"center\",\n            marginTop: \"100px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: createTodo,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"name\",\n                        placeholder: \"Add a todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            (!allTodos || allTodos.length === 0) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No todos, please add one.\"\n                }, void 0, false, {\n                    fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: allTodos.map((todo)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            listStyle: \"none\"\n                        },\n                        children: todo.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucianocrossa/Desktop/KSU/Services/app/match-maker/src/app/components/todos/todos.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n} // import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';\n // import { cookies } from 'next/headers';\n // import { revalidatePath } from 'next/cache';\n // import * as mutations from '@/graphql/mutations';\n // // 1. Add the queries as an import\n // import * as queries from '@/graphql/queries';\n // import config from '@/amplifyconfiguration.json';\n // const cookiesClient = generateServerClientUsingCookies({\n //   config,\n //   cookies\n // });\n // async function createTodo(formData: FormData) {\n //   'use server';\n //   const { data } = await cookiesClient.graphql({\n //     query: mutations.createTodo,\n //     variables: {\n //       input: {\n //         name: formData.get('name')?.toString() ?? ''\n //       }\n //     }\n //   });\n //   console.log('Created Todo: ', data?.createTodo);\n //   revalidatePath('/');\n // }\n // export default async function s() {\n //   // 2. Fetch additional todos\n //   const { data, errors } = await cookiesClient.graphql({\n //     query: queries.listTodos\n //   });\n //   const todos = data.listTodos.items;\n //   return (\n //     <div\n //       style={{\n //         maxWidth: '500px',\n //         margin: '0 auto',\n //         textAlign: 'center',\n //         marginTop: '100px'\n //       }}\n //     >\n //       <form action={createTodo}>\n //         <input name=\"name\" placeholder=\"Add a todo\" />\n //         <button type=\"submit\">Add</button>\n //       </form>\n //       {/* 3. Handle edge cases & zero state & error states*/}\n //       {(!todos || todos.length === 0 || errors) && (\n //         <div>\n //           <p>No todos, please add one.</p>\n //         </div>\n //       )}\n //       {/* 4. Display todos*/}\n //       <ul>\n //         {todos.map((todo) => {\n //           return <li style={{ listStyle: 'none' }}>{todo.name}</li>;\n //         })}\n //       </ul>\n //     </div>\n //   );\n // }\n_s(Todos, \"+RluyAWBeaJKCvHsoWr7sQndmUM=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS2lEO0FBQ2pELGtDQUFrQztBQUNXO0FBR0k7QUFDTDtBQUM1QyxNQUFNSyxTQUFTSCwrREFBY0E7QUFDN0IsMkRBQTJEO0FBQzNELFlBQVk7QUFDWixZQUFZO0FBQ1osTUFBTTtBQUVOLGVBQWVJLFdBQVdDLFFBQWtCO1FBUTlCQTtRQUFBQTtJQU5aLGdCQUFnQjtJQUVoQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ILE9BQU9JLE9BQU8sQ0FBQztRQUNwQ0MsT0FBT1YsMERBQW9CO1FBQzNCVyxXQUFXO1lBQ1RDLE9BQU87Z0JBQ0xDLE1BQU1OLENBQUFBLDBCQUFBQSxnQkFBQUEsU0FBU08sR0FBRyxDQUFDLHFCQUFiUCxvQ0FBQUEsY0FBc0JRLFFBQVEsZ0JBQTlCUixvQ0FBQUEseUJBQW9DO1lBQzVDO1FBQ0Y7SUFDRjtBQUdBLHVCQUF1QjtBQUN6QjtBQUVnQixTQUFTUzs7SUFFdkIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUVkLCtDQUFRQSxDQUFNLEVBQUU7SUFFOUMsNEJBQTRCO0lBQzVCLGtEQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0IsTUFBTTtJQUdOLGdDQUFnQztJQUVoQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFPSyxPQUFPSCxPQUFPSSxPQUFPLENBQUM7WUFDM0JDLE9BQU9ULHVEQUFpQjtRQUMxQjtRQUNBTyxLQUFLWSxJQUFJLENBQUMsQ0FBQ0M7WUFDVEMsUUFBUUMsR0FBRyxDQUFDRixFQUFFYixJQUFJLENBQUNXLFNBQVMsQ0FBQ0ssS0FBSztZQUN4Q04sWUFBWUcsRUFBRWIsSUFBSSxDQUFDVyxTQUFTLENBQUNLLEtBQUs7UUFDOUI7SUFDRixHQUFFLEVBQUU7SUFFSixzQ0FBc0M7SUFFdEMscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsV0FBVztRQUNiOzswQkFFQSw4REFBQ0M7Z0JBQUtDLFFBQVExQjs7a0NBQ1osOERBQUNNO3dCQUFNQyxNQUFLO3dCQUFPb0IsYUFBWTs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQU9DLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OztZQUl0QixFQUFDbEIsWUFBWUEsU0FBU21CLE1BQU0sS0FBSyxvQkFDakMsOERBQUNYOzBCQUNDLDRFQUFDWTs4QkFBRTs7Ozs7Ozs7Ozs7MEJBS1AsOERBQUNDOzBCQUNFckIsU0FBU3NCLEdBQUcsQ0FBQyxDQUFDQztvQkFDYixxQkFBTyw4REFBQ0M7d0JBQUdmLE9BQU87NEJBQUVnQixXQUFXO3dCQUFPO2tDQUFJRixLQUFLM0IsSUFBSTs7Ozs7O2dCQUNyRDs7Ozs7Ozs7Ozs7O0FBS1IsRUFFQSxzRkFBc0Y7Q0FDdEYsMENBQTBDO0NBQzFDLCtDQUErQztDQUMvQyxvREFBb0Q7Q0FDcEQscUNBQXFDO0NBQ3JDLGdEQUFnRDtDQUVoRCxvREFBb0Q7Q0FFcEQsMkRBQTJEO0NBQzNELFlBQVk7Q0FDWixZQUFZO0NBQ1osTUFBTTtDQUVOLGtEQUFrRDtDQUNsRCxrQkFBa0I7Q0FDbEIsbURBQW1EO0NBQ25ELG1DQUFtQztDQUNuQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHVEQUF1RDtDQUN2RCxVQUFVO0NBQ1YsUUFBUTtDQUNSLFFBQVE7Q0FFUixxREFBcUQ7Q0FFckQseUJBQXlCO0NBQ3pCLElBQUk7Q0FFSixzQ0FBc0M7Q0FDdEMsaUNBQWlDO0NBQ2pDLDJEQUEyRDtDQUMzRCwrQkFBK0I7Q0FDL0IsUUFBUTtDQUVSLHdDQUF3QztDQUV4QyxhQUFhO0NBQ2IsV0FBVztDQUNYLGlCQUFpQjtDQUNqQiw2QkFBNkI7Q0FDN0IsNEJBQTRCO0NBQzVCLCtCQUErQjtDQUMvQiw2QkFBNkI7Q0FDN0IsV0FBVztDQUNYLFFBQVE7Q0FDUixtQ0FBbUM7Q0FDbkMseURBQXlEO0NBQ3pELDZDQUE2QztDQUM3QyxnQkFBZ0I7Q0FFaEIsZ0VBQWdFO0NBQ2hFLHVEQUF1RDtDQUN2RCxnQkFBZ0I7Q0FDaEIsNkNBQTZDO0NBQzdDLGlCQUFpQjtDQUNqQixXQUFXO0NBRVgsZ0NBQWdDO0NBQ2hDLGFBQWE7Q0FDYixpQ0FBaUM7Q0FDakMsdUVBQXVFO0NBQ3ZFLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsYUFBYTtDQUNiLE9BQU87Q0FDUCxJQUFJO0dBM0hxQkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3RvZG9zL3RvZG9zLnRzeD81Njk5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgZ2VuZXJhdGVTZXJ2ZXJDbGllbnRVc2luZ0Nvb2tpZXMgfSBmcm9tICdAYXdzLWFtcGxpZnkvYWRhcHRlci1uZXh0anMvYXBpJztcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICdAL2dyYXBocWwvbXV0YXRpb25zJztcbi8vIDEuIEFkZCB0aGUgcXVlcmllcyBhcyBhbiBpbXBvcnRcbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSAnQC9ncmFwaHFsL3F1ZXJpZXMnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvYW1wbGlmeWNvbmZpZ3VyYXRpb24uanNvbic7XG5pbXBvcnQgeyBnZW5lcmF0ZUNsaWVudCB9IGZyb20gJ2F3cy1hbXBsaWZ5L2FwaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgY2xpZW50ID0gZ2VuZXJhdGVDbGllbnQoKTtcbi8vIGNvbnN0IGNvb2tpZXNDbGllbnQgPSBnZW5lcmF0ZVNlcnZlckNsaWVudFVzaW5nQ29va2llcyh7XG4vLyAgIGNvbmZpZyxcbi8vICAgY29va2llc1xuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG5cbiAgLy8gJ3VzZSBzZXJ2ZXInO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdyYXBocWwoe1xuICAgIHF1ZXJ5OiBtdXRhdGlvbnMuY3JlYXRlVG9kbyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpPy50b1N0cmluZygpID8/ICcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIHJldmFsaWRhdGVQYXRoKCcvJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBUb2RvcygpIHtcblxuICBjb25zdCBbYWxsVG9kb3Msc2V0QWxsVG9kb3NdPSB1c2VTdGF0ZTxhbnk+KFtdKVxuXG4gIC8vIDIuIEZldGNoIGFkZGl0aW9uYWwgdG9kb3NcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHtcbiAgLy8gICBxdWVyeTogcXVlcmllcy5saXN0VG9kb3NcbiAgLy8gfSk7XG5cbiAgIFxuICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhLmRhdGEpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgIGRhdGEgPSBjbGllbnQuZ3JhcGhxbCh7XG4gICAgICBxdWVyeTogcXVlcmllcy5saXN0VG9kb3NcbiAgICB9KTtcbiAgICBkYXRhLnRoZW4oKGQpPT57XG4gICAgICBjb25zb2xlLmxvZyhkLmRhdGEubGlzdFRvZG9zLml0ZW1zKVxuc2V0QWxsVG9kb3MoZC5kYXRhLmxpc3RUb2Rvcy5pdGVtcylcbiAgICB9KVxuICB9LFtdKVxuXG4gIC8vIGNvbnN0IHRvZG9zID0gZGF0YS5saXN0VG9kb3MuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aDogJzUwMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxmb3JtIGFjdGlvbj17Y3JlYXRlVG9kb30+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgdG9kb1wiIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7LyogMy4gSGFuZGxlIGVkZ2UgY2FzZXMgJiB6ZXJvIHN0YXRlICYgZXJyb3Igc3RhdGVzKi99XG4gICAgICB7KCFhbGxUb2RvcyB8fCBhbGxUb2Rvcy5sZW5ndGggPT09IDAgKSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+Tm8gdG9kb3MsIHBsZWFzZSBhZGQgb25lLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogNC4gRGlzcGxheSB0b2RvcyovfVxuICAgICAgPHVsPlxuICAgICAgICB7YWxsVG9kb3MubWFwKCh0b2RvOmFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+e3RvZG8ubmFtZX08L2xpPjtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuXG4vLyBpbXBvcnQgeyBnZW5lcmF0ZVNlcnZlckNsaWVudFVzaW5nQ29va2llcyB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hZGFwdGVyLW5leHRqcy9hcGknO1xuLy8gaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XG4vLyBpbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuLy8gaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gJ0AvZ3JhcGhxbC9tdXRhdGlvbnMnO1xuLy8gLy8gMS4gQWRkIHRoZSBxdWVyaWVzIGFzIGFuIGltcG9ydFxuLy8gaW1wb3J0ICogYXMgcXVlcmllcyBmcm9tICdAL2dyYXBocWwvcXVlcmllcyc7XG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnQC9hbXBsaWZ5Y29uZmlndXJhdGlvbi5qc29uJztcblxuLy8gY29uc3QgY29va2llc0NsaWVudCA9IGdlbmVyYXRlU2VydmVyQ2xpZW50VXNpbmdDb29raWVzKHtcbi8vICAgY29uZmlnLFxuLy8gICBjb29raWVzXG4vLyB9KTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9kbyhmb3JtRGF0YTogRm9ybURhdGEpIHtcbi8vICAgJ3VzZSBzZXJ2ZXInO1xuLy8gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNvb2tpZXNDbGllbnQuZ3JhcGhxbCh7XG4vLyAgICAgcXVlcnk6IG11dGF0aW9ucy5jcmVhdGVUb2RvLFxuLy8gICAgIHZhcmlhYmxlczoge1xuLy8gICAgICAgaW5wdXQ6IHtcbi8vICAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyk/LnRvU3RyaW5nKCkgPz8gJydcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIFRvZG86ICcsIGRhdGE/LmNyZWF0ZVRvZG8pO1xuXG4vLyAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHMoKSB7XG4vLyAgIC8vIDIuIEZldGNoIGFkZGl0aW9uYWwgdG9kb3Ncbi8vICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IGNvb2tpZXNDbGllbnQuZ3JhcGhxbCh7XG4vLyAgICAgcXVlcnk6IHF1ZXJpZXMubGlzdFRvZG9zXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IHRvZG9zID0gZGF0YS5saXN0VG9kb3MuaXRlbXM7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2XG4vLyAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICBtYXhXaWR0aDogJzUwMHB4Jyxcbi8vICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbi8vICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbi8vICAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4vLyAgICAgICB9fVxuLy8gICAgID5cbi8vICAgICAgIDxmb3JtIGFjdGlvbj17Y3JlYXRlVG9kb30+XG4vLyAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgdG9kb1wiIC8+XG4vLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuLy8gICAgICAgPC9mb3JtPlxuXG4vLyAgICAgICB7LyogMy4gSGFuZGxlIGVkZ2UgY2FzZXMgJiB6ZXJvIHN0YXRlICYgZXJyb3Igc3RhdGVzKi99XG4vLyAgICAgICB7KCF0b2RvcyB8fCB0b2Rvcy5sZW5ndGggPT09IDAgfHwgZXJyb3JzKSAmJiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgPHA+Tm8gdG9kb3MsIHBsZWFzZSBhZGQgb25lLjwvcD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICApfVxuXG4vLyAgICAgICB7LyogNC4gRGlzcGxheSB0b2RvcyovfVxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XG4vLyAgICAgICAgICAgcmV0dXJuIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT57dG9kby5uYW1lfTwvbGk+O1xuLy8gICAgICAgICB9KX1cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9Il0sIm5hbWVzIjpbIm11dGF0aW9ucyIsInF1ZXJpZXMiLCJnZW5lcmF0ZUNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xpZW50IiwiY3JlYXRlVG9kbyIsImZvcm1EYXRhIiwiZGF0YSIsImdyYXBocWwiLCJxdWVyeSIsInZhcmlhYmxlcyIsImlucHV0IiwibmFtZSIsImdldCIsInRvU3RyaW5nIiwiVG9kb3MiLCJhbGxUb2RvcyIsInNldEFsbFRvZG9zIiwibGlzdFRvZG9zIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJkaXYiLCJzdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiZm9ybSIsImFjdGlvbiIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSIsImxlbmd0aCIsInAiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsImxpc3RTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/todos/todos.tsx\n"));

/***/ })

});