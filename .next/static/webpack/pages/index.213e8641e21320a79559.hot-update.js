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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Snake.module.css */ \"./styles/Snake.module.css\");\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/runner/Screening-mash02/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Config = {\n  height: 20,\n  width: 20,\n  cellSize: 32\n};\nvar CellType = {\n  Snake: \"snake\",\n  Food: \"food\",\n  Empty: \"empty\"\n};\nvar Direction = {\n  Left: {\n    x: -1,\n    y: 0\n  },\n  Right: {\n    x: 1,\n    y: 0\n  },\n  Top: {\n    x: 0,\n    y: -1\n  },\n  Bottom: {\n    x: 0,\n    y: 1\n  }\n};\n\nvar Cell = function Cell(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      type = _ref.type;\n\n  var getStyles = function getStyles() {\n    switch (type) {\n      case CellType.Snake:\n        return {\n          backgroundColor: \"yellowgreen\",\n          borderRadius: 8,\n          padding: 2\n        };\n\n      case CellType.Food:\n        return {\n          backgroundColor: \"darkorange\",\n          borderRadius: 20,\n          width: 32,\n          height: 32\n        };\n\n      default:\n        return {};\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cellContainer),\n    style: {\n      left: x * Config.cellSize,\n      top: y * Config.cellSize,\n      width: Config.cellSize,\n      height: Config.cellSize\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cell),\n      style: getStyles()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cell;\n\nvar getRandomCell = function getRandomCell() {\n  return {\n    x: Math.floor(Math.random() * Config.width),\n    y: Math.floor(Math.random() * Config.width)\n  };\n};\n\nvar Snake = function Snake() {\n  _s();\n\n  var getDefaultSnake = function getDefaultSnake() {\n    return [{\n      x: 8,\n      y: 12\n    }, {\n      x: 7,\n      y: 12\n    }, {\n      x: 6,\n      y: 12\n    }];\n  };\n\n  var grid = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getDefaultSnake()),\n      snake = _useState[0],\n      setSnake = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Direction.Right),\n      direction = _useState2[0],\n      setDirection = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{\n    x: 4,\n    y: 10\n  }, {\n    x: 5,\n    y: 11\n  }]),\n      food = _useState3[0],\n      setFood = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      score = _useState4[0],\n      setScore = _useState4[1]; // move the snake\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var runSingleStep = function runSingleStep() {\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newHead = {\n          x: head.x + direction.x,\n          y: head.y + direction.y\n        };\n        if (newHead.x >= Config.height) newHead.x = 0;else if (newHead.x < 0) newHead.x = Config.height - 1;else if (newHead.y >= Config.width) newHead.y = 0;else if (newHead.y < 0) newHead.y = Config.width - 1; // make a new snake by extending head\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\n\n        var newSnake = [newHead].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(snake)); // remove tail\n\n        newSnake.pop();\n        return newSnake;\n      });\n    };\n\n    runSingleStep();\n    var timer = setInterval(runSingleStep, 300);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, [direction, food]); // update score whenever head touches a food\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var head = snake[0];\n\n    if (isFood(head)) {\n      var d;\n      if (direction === Direction.Top) d = Direction.Bottom;else if (direction === Direction.Bottom) d = Direction.Top;else if (direction === Direction.Left) d = Direction.Right;else if (direction === Direction.Right) d = Direction.Left;\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newTail = {\n          x: snake[snake.length - 1].x + d.x,\n          y: snake[snake.length - 1].y + direction.y\n        };\n        var newSnake = [].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(snake), [newTail]);\n        return newSnake;\n      });\n      setScore(function (score) {\n        return score + 1;\n      });\n      var newFood = getRandomCell();\n\n      while (isSnake(newFood)) {\n        newFood = getRandomCell();\n      }\n\n      setFood(function (prev) {\n        [newFood];\n      });\n    }\n  }, [snake]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var handleNavigation = function handleNavigation(event) {\n      switch (event.key) {\n        case \"ArrowUp\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Bottom) return Direction.Top;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowDown\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Top) return Direction.Bottom;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowLeft\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Right) return Direction.Left;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowRight\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Left) return Direction.Right;\n              return prev;\n            });\n            break;\n          }\n      }\n    };\n\n    window.addEventListener(\"keydown\", handleNavigation);\n    return function () {\n      return window.removeEventListener(\"keydown\", handleNavigation);\n    };\n  }, []); // ?. is called optional chaining\n  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining\n\n  var isFood = function isFood(_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y;\n    return food.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var isSnake = function isSnake(_ref3) {\n    var x = _ref3.x,\n        y = _ref3.y;\n    return snake.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var cells = [];\n\n  for (var x = 0; x < Config.width; x++) {\n    for (var y = 0; y < Config.height; y++) {\n      var type = CellType.Empty;\n\n      if (isFood({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Food;\n      } else if (isSnake({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Snake;\n      }\n\n      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n        x: x,\n        y: y,\n        type: type\n      }, \"\".concat(x, \"-\").concat(y), false, {\n        fileName: _jsxFileName,\n        lineNumber: 201,\n        columnNumber: 18\n      }, _this));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n      style: {\n        width: Config.width * Config.cellSize\n      },\n      children: [\"Score: \", score]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n      style: {\n        height: Config.height * Config.cellSize,\n        width: Config.width * Config.cellSize\n      },\n      children: cells\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 206,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Snake, \"CEyIFnJRUJi7Zs3KNWORsMzS8Us=\");\n\n_c2 = Snake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return Promise.resolve(Snake);\n}, {\n  ssr: false\n}));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Cell\");\n$RefreshReg$(_c2, \"Snake\");\n$RefreshReg$(_c3, \"%default%$dynamic\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFdEMsc0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsUUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JELE1BQU0sQ0FBQ0csUUFEMUI7QUFFTEQsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUZ4QixPQUZUO0FBQUEsZ0JBT0cyRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQTlKRDs7R0FBTXpEOztNQUFBQTtBQWdLTiwrREFBZSxNQUFBVixtREFBTyxPQUFDO0FBQUEsU0FBTXVFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjlELEtBQWhCLENBQU47QUFBQSxDQUFELEVBQStCO0FBQ25EK0QsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25maWcgPSB7XG4gIGhlaWdodDogMjAsXG4gIHdpZHRoOiAyMCxcbiAgY2VsbFNpemU6IDMyLFxufTtcblxuY29uc3QgQ2VsbFR5cGUgPSB7XG4gIFNuYWtlOiBcInNuYWtlXCIsXG4gIEZvb2Q6IFwiZm9vZFwiLFxuICBFbXB0eTogXCJlbXB0eVwiLFxufTtcblxuY29uc3QgRGlyZWN0aW9uID0ge1xuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXG59O1xuXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxufSk7XG5cbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiBbXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxuICAgIHsgeDogNywgeTogMTIgfSxcbiAgICB7IHg6IDYsIHk6IDEyIH0sXG4gIF07XG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcblxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcblxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZShbeyB4OiA0LCB5OiAxMCB9LCB7eDogNSwgeTogMTF9XSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gbW92ZSB0aGUgc25ha2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBydW5TaW5nbGVTdGVwID0gKCkgPT4ge1xuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgaWYobmV3SGVhZC54ID49IENvbmZpZy5oZWlnaHQpIG5ld0hlYWQueCA9IDA7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC54IDwgMCkgbmV3SGVhZC54ID0gQ29uZmlnLmhlaWdodCAtIDE7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC55ID49IENvbmZpZy53aWR0aCkgbmV3SGVhZC55ID0gMDtcbiAgICAgICAgZWxzZSBpZihuZXdIZWFkLnkgPCAwKSBuZXdIZWFkLnkgPSBDb25maWcud2lkdGggLSAxO1xuXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXG4gICAgICAgIG5ld1NuYWtlLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBydW5TaW5nbGVTdGVwKCk7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCAzMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XG5cbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xuICAgICAgbGV0IGQ7XG4gICAgICBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Ub3ApIGQgPSBEaXJlY3Rpb24uQm90dG9tO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Cb3R0b20pIGQgPSBEaXJlY3Rpb24uVG9wO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSBkID0gRGlyZWN0aW9uLlJpZ2h0O1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodCkgZCA9IERpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xuICAgICAgICBjb25zdCBuZXdUYWlsID0geyB4OiBzbmFrZVtzbmFrZS5sZW5ndGggLTFdLnggKyBkLngsIHk6IHNuYWtlW3NuYWtlLmxlbmd0aCAtMV0ueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbLi4uc25ha2UsIG5ld1RhaWxdO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHNldEZvb2QocHJldiA9PiB7XG4gICAgICAgIFtuZXdGb29kXX0pO1xuICAgIH1cbiAgfSwgW3NuYWtlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKHByZXYgPT4ge1xuICAgICAgICAgICAgaWYocHJldiAhPSBEaXJlY3Rpb24uQm90dG9tKSByZXR1cm4gRGlyZWN0aW9uLlRvcDtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKHByZXYgPT4ge1xuICAgICAgICAgICAgaWYocHJldiAhPSBEaXJlY3Rpb24uVG9wKSByZXR1cm4gRGlyZWN0aW9uLkJvdHRvbTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKHByZXYgPT4ge1xuICAgICAgICAgICAgaWYocHJldiAhPSBEaXJlY3Rpb24uUmlnaHQpIHJldHVybiBEaXJlY3Rpb24uTGVmdDtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgIHNldERpcmVjdGlvbihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmKHByZXYgIT0gRGlyZWN0aW9uLkxlZnQpIHJldHVybiBEaXJlY3Rpb24uUmlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcbiAgfSwgW10pO1xuXG4gIC8vID8uIGlzIGNhbGxlZCBvcHRpb25hbCBjaGFpbmluZ1xuICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9PcHRpb25hbF9jaGFpbmluZ1xuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IFxuICAgIGZvb2QuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XG5cbiAgY29uc3QgaXNTbmFrZSA9ICh7IHgsIHkgfSkgPT5cbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcblxuICBjb25zdCBjZWxscyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcuaGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCB0eXBlID0gQ2VsbFR5cGUuRW1wdHk7XG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuRm9vZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNTbmFrZSh7IHgsIHkgfSkpIHtcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaCg8Q2VsbCBrZXk9e2Ake3h9LSR7eX1gfSB4PXt4fSB5PXt5fSB0eXBlPXt0eXBlfSAvPik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSB9fVxuICAgICAgPlxuICAgICAgICBTY29yZToge3Njb3JlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBDb25maWcuaGVpZ2h0ICogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjZWxsc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldERlZmF1bHRTbmFrZSIsImdyaWQiLCJzbmFrZSIsInNldFNuYWtlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwiZm9vZCIsInNldEZvb2QiLCJzY29yZSIsInNldFNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJwb3AiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlzRm9vZCIsImQiLCJuZXdUYWlsIiwibGVuZ3RoIiwibmV3Rm9vZCIsImlzU25ha2UiLCJwcmV2IiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaW5kIiwicG9zaXRpb24iLCJjZWxscyIsInB1c2giLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});