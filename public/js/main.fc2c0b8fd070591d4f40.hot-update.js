self["webpackHotUpdatefullstack_starter"]("main",{

/***/ "./src/client/App.jsx":
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const App = () => {
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!message) {
      fetch("/api/test").then(res => res.json()).then(({
        msg
      }) => setMessage(msg));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8641e31eeeb2e8d1a7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci8uL3NyYy9jbGllbnQvQXBwLmpzeCIsIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQXBwIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJSZWFjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JDLDJDQUFBLENBQWUsRUFBZixDQUE5QjtBQUVBQSw4Q0FBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1pHLFdBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURqQixFQUVHRixJQUZILENBRVEsQ0FBQztBQUFFRztBQUFGLE9BQUQsS0FBYU4sVUFBVSxDQUFDTSxHQUFELENBRi9CO0FBR0Q7QUFDRixHQU5EO0FBUUEsc0JBQ0UsNEVBQ0UsMkVBQ0UsNkRBQUtQLE9BQUwsQ0FERixlQUVFLDJEQUZGLENBREYsQ0FERjtBQVFELENBbkJEOztBQXFCQSxpRUFBZUQsR0FBZixFOzs7Ozs7Ozs7O1VDdkJBLHNEIiwiZmlsZSI6Im1haW4uZmMyYzBiOGZkMDcwNTkxZDRmNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgZmV0Y2goXCIvYXBpL3Rlc3RcIilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHsgbXNnIH0pID0+IHNldE1lc3NhZ2UobXNnKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnttZXNzYWdlfTwvaDE+XG4gICAgICAgIDxwPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM4NjQxZTMxZWVlYjJlOGQxYTdkXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==