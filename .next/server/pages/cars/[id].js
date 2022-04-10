"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cars/[id]";
exports.ids = ["pages/cars/[id]"];
exports.modules = {

/***/ "./pages/cars/[id].js":
/*!****************************!*\
  !*** ./pages/cars/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Car({ car  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            car.color,\n                            \"-\",\n                            car.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: car.image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back()\n                ,\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Car Image from File: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: car.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Car ID from File: \",\n                    car.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Car Color from File: \",\n                    car.color\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\brian\\\\code\\\\fire-ship-next-practice\\\\practice-next-app\\\\pages\\\\cars\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getStaticProps({ params  }) {\n    const req = await fetch(`http://localhost:3000/${params.id}.json`);\n    const data = await req.json();\n    return {\n        props: {\n            car: data\n        }\n    };\n}\nasync function getStaticPaths() {\n    const req = await fetch(\"http://localhost:3000/cars.json\");\n    const data = await req.json();\n    const paths = data.map((car)=>({\n            params: {\n                id: car.id\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDWDtBQUVkLFNBQVNFLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLEdBQUUsRUFBRTtJQUNuQyxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0U7OzBCQUNFLDhEQUFDQyxrREFBSTs7a0NBQ0gsOERBQUNJLE9BQUs7OzRCQUNIRixHQUFHLENBQUNHLEtBQUs7NEJBQUMsR0FBQzs0QkFBQ0gsR0FBRyxDQUFDSSxFQUFFOzs7Ozs7NEJBQ2I7a0NBQ1IsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1EsS0FBSzs7Ozs7NEJBQVM7Ozs7OztvQkFDcEM7MEJBQ1AsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNVCxNQUFNLENBQUNVLElBQUksRUFBRTtnQkFBQTswQkFBRyxTQUFTOzs7OztvQkFBVTswQkFDMUQsOERBQUNDLEdBQUM7MEJBQUMsdUJBQXFCOzs7OztvQkFBSTswQkFDNUIsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRWQsR0FBRyxDQUFDUSxLQUFLOzs7OztvQkFBSTswQkFDdkIsOERBQUNJLEdBQUM7O29CQUFDLG9CQUFrQjtvQkFBQ1osR0FBRyxDQUFDSSxFQUFFOzs7Ozs7b0JBQUs7MEJBQ2pDLDhEQUFDUSxHQUFDOztvQkFBQyx1QkFBcUI7b0JBQUNaLEdBQUcsQ0FBQ0csS0FBSzs7Ozs7O29CQUFLOztvQkFDdEMsQ0FDSDtDQUNIO0FBRU0sZUFBZVksY0FBYyxDQUFDLEVBQUVDLE1BQU0sR0FBRSxFQUFFO0lBQy9DLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRUYsTUFBTSxDQUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEUsTUFBTWUsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRTdCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xyQixHQUFHLEVBQUVtQixJQUFJO1NBQ1Y7S0FDRixDQUFDO0NBQ0g7QUFFTSxlQUFlRyxjQUFjLEdBQUc7SUFDckMsTUFBTUwsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztJQUUxRCxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFN0IsTUFBTUcsS0FBSyxHQUFHSixJQUFJLENBQUNLLEdBQUcsQ0FBQyxDQUFDeEIsR0FBRyxHQUFLLENBQUM7WUFBRWdCLE1BQU0sRUFBRTtnQkFBRVosRUFBRSxFQUFFSixHQUFHLENBQUNJLEVBQUU7YUFBRTtTQUFFLENBQUM7SUFBQSxDQUFDO0lBQzdELE9BQU87UUFDTG1CLEtBQUs7UUFDTEUsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2UtbmV4dC1hcHAvLi9wYWdlcy9jYXJzL1tpZF0uanM/OWIyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyKHsgY2FyIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHtjYXIuY29sb3J9LXtjYXIuaWR9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17Y2FyLmltYWdlfT48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT57XCJHbyBCYWNrXCJ9PC9idXR0b24+XHJcbiAgICAgIDxwPkNhciBJbWFnZSBmcm9tIEZpbGU6IDwvcD5cclxuICAgICAgPGltZyBzcmM9e2Nhci5pbWFnZX0gLz5cclxuICAgICAgPHA+Q2FyIElEIGZyb20gRmlsZToge2Nhci5pZH08L3A+XHJcbiAgICAgIDxwPkNhciBDb2xvciBmcm9tIEZpbGU6IHtjYXIuY29sb3J9PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwLyR7cGFyYW1zLmlkfS5qc29uYCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2FyOiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2Fycy5qc29uXCIpO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoY2FyKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IGNhci5pZCB9IH0pKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsIkNhciIsImNhciIsInJvdXRlciIsInRpdGxlIiwiY29sb3IiLCJpZCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW1hZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayIsInAiLCJpbWciLCJzcmMiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInJlcSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cars/[id].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cars/[id].js"));
module.exports = __webpack_exports__;

})();