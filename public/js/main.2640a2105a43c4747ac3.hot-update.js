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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Another para tag!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Another para tag!")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1db1ffa3b8d2580e69d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci8uL3NyYy9jbGllbnQvQXBwLmpzeCIsIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQXBwIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJSZWFjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JDLDJDQUFBLENBQWUsRUFBZixDQUE5QjtBQUVBQSw4Q0FBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1pHLFdBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURqQixFQUVHRixJQUZILENBRVEsQ0FBQztBQUFFRztBQUFGLE9BQUQsS0FBYU4sVUFBVSxDQUFDTSxHQUFELENBRi9CO0FBR0Q7QUFDRixHQU5EO0FBUUEsc0JBQ0UsNEVBQ0UsMkVBQ0UsNkRBQUtQLE9BQUwsQ0FERixlQUVFLGdGQUZGLGVBR0UsZ0ZBSEYsQ0FERixDQURGO0FBU0QsQ0FwQkQ7O0FBc0JBLGlFQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7VUN4QkEsc0QiLCJmaWxlIjoibWFpbi4yNjQwYTIxMDVhNDNjNDc0N2FjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBmZXRjaChcIi9hcGkvdGVzdFwiKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoeyBtc2cgfSkgPT4gc2V0TWVzc2FnZShtc2cpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e21lc3NhZ2V9PC9oMT5cbiAgICAgICAgPHA+QW5vdGhlciBwYXJhIHRhZyE8L3A+XG4gICAgICAgIDxwPkFub3RoZXIgcGFyYSB0YWchPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWRiMWZmYTNiOGQyNTgwZTY5ZDJcIikiXSwic291cmNlUm9vdCI6IiJ9