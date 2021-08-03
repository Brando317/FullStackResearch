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
    if (message) {
      fetch("/api/test").then(res => res.json()).then(({
        msg
      }) => setMessage(msg));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Message: ", message)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a53e5522b54b3b448aa8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci8uL3NyYy9jbGllbnQvQXBwLmpzeCIsIndlYnBhY2s6Ly9mdWxsc3RhY2tfc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQXBwIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJSZWFjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JDLDJDQUFBLENBQWUsRUFBZixDQUE5QjtBQUVBQSw4Q0FBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUlGLE9BQUosRUFBYTtBQUNYRyxXQUFLLENBQUMsV0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFEakIsRUFFR0YsSUFGSCxDQUVRLENBQUM7QUFBRUc7QUFBRixPQUFELEtBQWFOLFVBQVUsQ0FBQ00sR0FBRCxDQUYvQjtBQUdEO0FBQ0YsR0FORDtBQVFBLHNCQUNFLDRFQUNFLDJFQUNFLDBFQUFjUCxPQUFkLENBREYsQ0FERixDQURGO0FBT0QsQ0FsQkQ7O0FBb0JBLGlFQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7VUN0QkEsc0QiLCJmaWxlIjoibWFpbi5mYTVlNzAwMmU5YzEzMDg1YjAzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGZldGNoKFwiL2FwaS90ZXN0XCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKCh7IG1zZyB9KSA9PiBzZXRNZXNzYWdlKG1zZykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NZXNzYWdlOiB7bWVzc2FnZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTUzZTU1MjJiNTRiM2I0NDhhYThcIikiXSwic291cmNlUm9vdCI6IiJ9