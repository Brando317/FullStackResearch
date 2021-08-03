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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, message)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee447e313c100ac67f7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci8uL3NyYy9jbGllbnQvQXBwLmpzeCIsIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQXBwIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJSZWFjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JDLDJDQUFBLENBQWUsRUFBZixDQUE5QjtBQUVBQSw4Q0FBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1pHLFdBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURqQixFQUVHRixJQUZILENBRVEsQ0FBQztBQUFFRztBQUFGLE9BQUQsS0FBYU4sVUFBVSxDQUFDTSxHQUFELENBRi9CO0FBR0Q7QUFDRixHQU5EO0FBUUEsc0JBQ0UsNEVBQ0UsMkVBQ0UsNkRBQUtQLE9BQUwsQ0FERixDQURGLENBREY7QUFPRCxDQWxCRDs7QUFvQkEsaUVBQWVELEdBQWYsRTs7Ozs7Ozs7OztVQ3RCQSxzRCIsImZpbGUiOiJtYWluLmQ1ZDllOTY5MzU3MzYwZmViNDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGZldGNoKFwiL2FwaS90ZXN0XCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKCh7IG1zZyB9KSA9PiBzZXRNZXNzYWdlKG1zZykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57bWVzc2FnZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWU0NDdlMzEzYzEwMGFjNjdmN2FcIikiXSwic291cmNlUm9vdCI6IiJ9