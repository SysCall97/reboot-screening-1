"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var _home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Snake.module.css */ \"./styles/Snake.module.css\");\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/runner/Screening-mash02/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Config = {\n  height: 20,\n  width: 20,\n  cellSize: 32\n};\nvar CellType = {\n  Snake: \"snake\",\n  Food: \"food\",\n  Empty: \"empty\"\n};\nvar Direction = {\n  Left: {\n    x: -1,\n    y: 0\n  },\n  Right: {\n    x: 1,\n    y: 0\n  },\n  Top: {\n    x: 0,\n    y: -1\n  },\n  Bottom: {\n    x: 0,\n    y: 1\n  }\n};\n\nvar Cell = function Cell(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      type = _ref.type;\n\n  var getStyles = function getStyles() {\n    switch (type) {\n      case CellType.Snake:\n        return {\n          backgroundColor: \"yellowgreen\",\n          borderRadius: 8,\n          padding: 2\n        };\n\n      case CellType.Food:\n        return {\n          backgroundColor: \"darkorange\",\n          borderRadius: 20,\n          width: 32,\n          height: 32\n        };\n\n      default:\n        return {};\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cellContainer),\n    style: {\n      left: x * Config.cellSize,\n      top: y * Config.cellSize,\n      width: Config.cellSize,\n      height: Config.cellSize\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cell),\n      style: getStyles()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cell;\n\nvar getRandomCell = function getRandomCell() {\n  return {\n    x: Math.floor(Math.random() * Config.width),\n    y: Math.floor(Math.random() * Config.width)\n  };\n};\n\nvar Snake = function Snake() {\n  _s();\n\n  var getDefaultSnake = function getDefaultSnake() {\n    return [{\n      x: 8,\n      y: 12\n    }, {\n      x: 7,\n      y: 12\n    }, {\n      x: 6,\n      y: 12\n    }];\n  };\n\n  var grid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getDefaultSnake()),\n      snake = _useState[0],\n      setSnake = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Direction.Right),\n      direction = _useState2[0],\n      setDirection = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{\n    x: 4,\n    y: 10\n  }, {\n    x: 5,\n    y: 11\n  }]),\n      food = _useState3[0],\n      setFood = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),\n      score = _useState4[0],\n      setScore = _useState4[1]; // move the snake\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var runSingleStep = function runSingleStep() {\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newHead = {\n          x: head.x + direction.x,\n          y: head.y + direction.y\n        };\n        if (newHead.x >= Config.height) newHead.x = 0;else if (newHead.x < 0) newHead.x = Config.height - 1;else if (newHead.y >= Config.width) newHead.y = 0;else if (newHead.y < 0) newHead.y = Config.width - 1; // make a new snake by extending head\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\n\n        var newSnake = [newHead].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(snake)); // remove tail\n\n        newSnake.pop();\n        return newSnake;\n      });\n    };\n\n    runSingleStep();\n    var timer = setInterval(runSingleStep, 300);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, [direction, food]); // update score whenever head touches a food\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var head = snake[0];\n\n    if (isFood(head)) {\n      var d;\n      if (direction === Direction.Top) d = Direction.Bottom;else if (direction === Direction.Bottom) d = Direction.Top;else if (direction === Direction.Left) d = Direction.Right;else if (direction === Direction.Right) d = Direction.Left;\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newTail = {\n          x: snake[snake.length - 1].x + d.x,\n          y: snake[snake.length - 1].y + direction.y\n        };\n        var newSnake = [].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(snake), [newTail]);\n        return newSnake;\n      });\n      setScore(function (score) {\n        return score + 1;\n      });\n      var newFood = getRandomCell();\n\n      while (isSnake(newFood)) {\n        newFood = getRandomCell();\n      }\n\n      setFood(function (prev) {\n        var arr = [newFood];\n        arr = ((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__.default)(\"arr\"), [].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr), (0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev.map)));\n      });\n    }\n  }, [snake]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var handleNavigation = function handleNavigation(event) {\n      switch (event.key) {\n        case \"ArrowUp\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Bottom) return Direction.Top;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowDown\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Top) return Direction.Bottom;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowLeft\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Right) return Direction.Left;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowRight\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Left) return Direction.Right;\n              return prev;\n            });\n            break;\n          }\n      }\n    };\n\n    window.addEventListener(\"keydown\", handleNavigation);\n    return function () {\n      return window.removeEventListener(\"keydown\", handleNavigation);\n    };\n  }, []); // ?. is called optional chaining\n  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining\n\n  var isFood = function isFood(_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y;\n    return food.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var isSnake = function isSnake(_ref3) {\n    var x = _ref3.x,\n        y = _ref3.y;\n    return snake.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var cells = [];\n\n  for (var x = 0; x < Config.width; x++) {\n    for (var y = 0; y < Config.height; y++) {\n      var type = CellType.Empty;\n\n      if (isFood({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Food;\n      } else if (isSnake({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Snake;\n      }\n\n      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Cell, {\n        x: x,\n        y: y,\n        type: type\n      }, \"\".concat(x, \"-\").concat(y), false, {\n        fileName: _jsxFileName,\n        lineNumber: 203,\n        columnNumber: 18\n      }, _this));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n      style: {\n        width: Config.width * Config.cellSize\n      },\n      children: [\"Score: \", score]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n      style: {\n        height: Config.height * Config.cellSize,\n        width: Config.width * Config.cellSize\n      },\n      children: cells\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 208,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Snake, \"CEyIFnJRUJi7Zs3KNWORsMzS8Us=\");\n\n_c2 = Snake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {\n  return Promise.resolve(Snake);\n}, {\n  ssr: false\n}));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Cell\");\n$RefreshReg$(_c2, \"Snake\");\n$RefreshReg$(_c3, \"%default%$dynamic\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0c7QUFBL0IsT0FGVDtBQUFBLDRCQUlVa0MsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQ0UsZUFBUyxFQUFFdEMsc0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsUUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JELE1BQU0sQ0FBQ0csUUFEMUI7QUFFTEQsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUZ4QixPQUZUO0FBQUEsZ0JBT0c2RDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQWhLRDs7R0FBTTNEOztNQUFBQTtBQWtLTiwrREFBZSxNQUFBVixtREFBTyxPQUFDO0FBQUEsU0FBTXlFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmhFLEtBQWhCLENBQU47QUFBQSxDQUFELEVBQStCO0FBQ25EaUUsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25maWcgPSB7XG4gIGhlaWdodDogMjAsXG4gIHdpZHRoOiAyMCxcbiAgY2VsbFNpemU6IDMyLFxufTtcblxuY29uc3QgQ2VsbFR5cGUgPSB7XG4gIFNuYWtlOiBcInNuYWtlXCIsXG4gIEZvb2Q6IFwiZm9vZFwiLFxuICBFbXB0eTogXCJlbXB0eVwiLFxufTtcblxuY29uc3QgRGlyZWN0aW9uID0ge1xuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXG59O1xuXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxufSk7XG5cbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiBbXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxuICAgIHsgeDogNywgeTogMTIgfSxcbiAgICB7IHg6IDYsIHk6IDEyIH0sXG4gIF07XG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcblxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcblxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZShbeyB4OiA0LCB5OiAxMCB9LCB7eDogNSwgeTogMTF9XSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gbW92ZSB0aGUgc25ha2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBydW5TaW5nbGVTdGVwID0gKCkgPT4ge1xuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgaWYobmV3SGVhZC54ID49IENvbmZpZy5oZWlnaHQpIG5ld0hlYWQueCA9IDA7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC54IDwgMCkgbmV3SGVhZC54ID0gQ29uZmlnLmhlaWdodCAtIDE7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC55ID49IENvbmZpZy53aWR0aCkgbmV3SGVhZC55ID0gMDtcbiAgICAgICAgZWxzZSBpZihuZXdIZWFkLnkgPCAwKSBuZXdIZWFkLnkgPSBDb25maWcud2lkdGggLSAxO1xuXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXG4gICAgICAgIG5ld1NuYWtlLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBydW5TaW5nbGVTdGVwKCk7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCAzMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XG5cbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xuICAgICAgbGV0IGQ7XG4gICAgICBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Ub3ApIGQgPSBEaXJlY3Rpb24uQm90dG9tO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Cb3R0b20pIGQgPSBEaXJlY3Rpb24uVG9wO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSBkID0gRGlyZWN0aW9uLlJpZ2h0O1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodCkgZCA9IERpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xuICAgICAgICBjb25zdCBuZXdUYWlsID0geyB4OiBzbmFrZVtzbmFrZS5sZW5ndGggLTFdLnggKyBkLngsIHk6IHNuYWtlW3NuYWtlLmxlbmd0aCAtMV0ueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbLi4uc25ha2UsIG5ld1RhaWxdO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHNldEZvb2QocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtuZXdGb29kXTtcbiAgICAgICAgYXJyID0gWy4uLmFyciwgLi4ucHJldi5tYXBdXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzbmFrZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjoge1xuICAgICAgICAgIHNldERpcmVjdGlvbihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmKHByZXYgIT0gRGlyZWN0aW9uLkJvdHRvbSkgcmV0dXJuIERpcmVjdGlvbi5Ub3A7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjoge1xuICAgICAgICAgIHNldERpcmVjdGlvbihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmKHByZXYgIT0gRGlyZWN0aW9uLlRvcCkgcmV0dXJuIERpcmVjdGlvbi5Cb3R0b207XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjoge1xuICAgICAgICAgIHNldERpcmVjdGlvbihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmKHByZXYgIT0gRGlyZWN0aW9uLlJpZ2h0KSByZXR1cm4gRGlyZWN0aW9uLkxlZnQ7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6IHtcbiAgICAgICAgICBzZXREaXJlY3Rpb24ocHJldiA9PiB7XG4gICAgICAgICAgICBpZihwcmV2ICE9IERpcmVjdGlvbi5MZWZ0KSByZXR1cm4gRGlyZWN0aW9uLlJpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XG4gIH0sIFtdKTtcblxuICAvLyA/LiBpcyBjYWxsZWQgb3B0aW9uYWwgY2hhaW5pbmdcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcbiAgY29uc3QgaXNGb29kID0gKHsgeCwgeSB9KSA9PiBcbiAgICBmb29kLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09PSB4ICYmIHBvc2l0aW9uLnkgPT09IHkpO1xuXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XG4gICAgc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XG5cbiAgY29uc3QgY2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud2lkdGg7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLmhlaWdodDsgeSsrKSB7XG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xuICAgICAgaWYgKGlzRm9vZCh7IHgsIHkgfSkpIHtcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLkZvb2Q7XG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5TbmFrZTtcbiAgICAgIH1cbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUgfX1cbiAgICAgID5cbiAgICAgICAgU2NvcmU6IHtzY29yZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgICB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2VsbHN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFNuYWtlKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiQ29uZmlnIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZWxsU2l6ZSIsIkNlbGxUeXBlIiwiU25ha2UiLCJGb29kIiwiRW1wdHkiLCJEaXJlY3Rpb24iLCJMZWZ0IiwieCIsInkiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNlbGwiLCJ0eXBlIiwiZ2V0U3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNlbGxDb250YWluZXIiLCJsZWZ0IiwidG9wIiwiY2VsbCIsImdldFJhbmRvbUNlbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwic25ha2UiLCJzZXRTbmFrZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsImZvb2QiLCJzZXRGb29kIiwic2NvcmUiLCJzZXRTY29yZSIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwicG9wIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpc0Zvb2QiLCJkIiwibmV3VGFpbCIsImxlbmd0aCIsIm5ld0Zvb2QiLCJpc1NuYWtlIiwicHJldiIsImFyciIsIm1hcCIsImhhbmRsZU5hdmlnYXRpb24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmluZCIsInBvc2l0aW9uIiwiY2VsbHMiLCJwdXNoIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _readOnlyError; }\n/* harmony export */ });\nfunction _readOnlyError(name) {\n  throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzPzI4MTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\n");

/***/ })

});