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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Snake.module.css */ \"./styles/Snake.module.css\");\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/runner/Screening-mash02/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Config = {\n  height: 20,\n  width: 20,\n  cellSize: 32\n};\nvar CellType = {\n  Snake: \"snake\",\n  Food: \"food\",\n  Empty: \"empty\"\n};\nvar Direction = {\n  Left: {\n    x: -1,\n    y: 0\n  },\n  Right: {\n    x: 1,\n    y: 0\n  },\n  Top: {\n    x: 0,\n    y: -1\n  },\n  Bottom: {\n    x: 0,\n    y: 1\n  }\n};\n\nvar Cell = function Cell(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      type = _ref.type;\n\n  var getStyles = function getStyles() {\n    switch (type) {\n      case CellType.Snake:\n        return {\n          backgroundColor: \"yellowgreen\",\n          borderRadius: 8,\n          padding: 2\n        };\n\n      case CellType.Food:\n        return {\n          backgroundColor: \"darkorange\",\n          borderRadius: 20,\n          width: 32,\n          height: 32\n        };\n\n      default:\n        return {};\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cellContainer),\n    style: {\n      left: x * Config.cellSize,\n      top: y * Config.cellSize,\n      width: Config.cellSize,\n      height: Config.cellSize\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cell),\n      style: getStyles()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cell;\n\nvar getRandomCell = function getRandomCell() {\n  return {\n    x: Math.floor(Math.random() * Config.width),\n    y: Math.floor(Math.random() * Config.width)\n  };\n};\n\nvar Snake = function Snake() {\n  _s();\n\n  var getDefaultSnake = function getDefaultSnake() {\n    return [{\n      x: 8,\n      y: 12\n    }, {\n      x: 7,\n      y: 12\n    }, {\n      x: 6,\n      y: 12\n    }];\n  };\n\n  var grid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getDefaultSnake()),\n      snake = _useState[0],\n      setSnake = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Direction.Right),\n      direction = _useState2[0],\n      setDirection = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{\n    x: 4,\n    y: 10,\n    counter: 0\n  }]),\n      food = _useState3[0],\n      setFood = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),\n      score = _useState4[0],\n      setScore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),\n      timeCounter = _useState5[0],\n      setTimeCounter = _useState5[1]; // move the snake\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var runSingleStep = function runSingleStep() {\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newHead = {\n          x: head.x + direction.x,\n          y: head.y + direction.y\n        };\n        if (newHead.x >= Config.height) newHead.x = 0;else if (newHead.x < 0) newHead.x = Config.height - 1;else if (newHead.y >= Config.width) newHead.y = 0;else if (newHead.y < 0) newHead.y = Config.width - 1; // make a new snake by extending head\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\n\n        var newSnake = (0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(snake); // remove tail\n\n\n        newSnake.pop();\n        if (!!newSnake.find(it)) return newSnake;\n      });\n    };\n\n    runSingleStep();\n    var timer = setInterval(runSingleStep, 300);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, [direction, food]); // update score whenever head touches a food\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var head = snake[0];\n\n    if (isFood(head)) {\n      var d;\n      if (direction === Direction.Top) d = Direction.Bottom;else if (direction === Direction.Bottom) d = Direction.Top;else if (direction === Direction.Left) d = Direction.Right;else if (direction === Direction.Right) d = Direction.Left;\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newTail = {\n          x: snake[snake.length - 1].x + d.x,\n          y: snake[snake.length - 1].y + direction.y\n        };\n        var newSnake = [].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(snake), [newTail]);\n        return newSnake;\n      });\n      setScore(function (score) {\n        return score + 1;\n      });\n      var newFood = getRandomCell();\n\n      while (isSnake(newFood)) {\n        newFood = getRandomCell();\n      }\n\n      newFood.counter = 0;\n      setFood(function (prev) {\n        return [newFood].concat((0,_home_runner_Screening_mash02_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev.filter(function (item) {\n          return !isSnake(item);\n        })));\n      });\n    }\n  }, [snake]); // modify food after 3 and 10 seconds\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var modifyFood = function modifyFood() {\n      setTimeCounter(function (prev) {\n        setFood(function (item) {\n          var arr = item.map(function (it) {\n            return _objectSpread(_objectSpread({}, it), {}, {\n              counter: it.counter + 1\n            });\n          });\n\n          if ((prev + 1) % 3 === 0) {\n            var newFood = getRandomCell();\n\n            while (isSnake(newFood)) {\n              newFood = getRandomCell();\n            }\n\n            newFood.counter = 0;\n            arr.push(newFood);\n          }\n\n          return arr.filter(function (it) {\n            return it.counter < 10;\n          });\n        });\n        return (prev + 1) % 3;\n      });\n    };\n\n    var timer = setInterval(modifyFood, 1000);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var handleNavigation = function handleNavigation(event) {\n      switch (event.key) {\n        case \"ArrowUp\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Bottom) return Direction.Top;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowDown\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Top) return Direction.Bottom;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowLeft\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Right) return Direction.Left;\n              return prev;\n            });\n            break;\n          }\n\n        case \"ArrowRight\":\n          {\n            setDirection(function (prev) {\n              if (prev != Direction.Left) return Direction.Right;\n              return prev;\n            });\n            break;\n          }\n      }\n    };\n\n    window.addEventListener(\"keydown\", handleNavigation);\n    return function () {\n      return window.removeEventListener(\"keydown\", handleNavigation);\n    };\n  }, []); // ?. is called optional chaining\n  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining\n\n  var isFood = function isFood(_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y;\n    return food.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var isSnake = function isSnake(_ref3) {\n    var x = _ref3.x,\n        y = _ref3.y;\n    return snake.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var cells = [];\n\n  for (var x = 0; x < Config.width; x++) {\n    for (var y = 0; y < Config.height; y++) {\n      var type = CellType.Empty;\n\n      if (isFood({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Food;\n      } else if (isSnake({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Snake;\n      }\n\n      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Cell, {\n        x: x,\n        y: y,\n        type: type\n      }, \"\".concat(x, \"-\").concat(y), false, {\n        fileName: _jsxFileName,\n        lineNumber: 239,\n        columnNumber: 18\n      }, _this));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n      style: {\n        width: Config.width * Config.cellSize\n      },\n      children: [\"Score: \", score]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 245,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n      style: {\n        height: Config.height * Config.cellSize,\n        width: Config.width * Config.cellSize\n      },\n      children: cells\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 251,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 244,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Snake, \"u+n2+SEzyA862a8236wYUTzXhGQ=\");\n\n_c2 = Snake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {\n  return Promise.resolve(Snake);\n}, {\n  ssr: false\n}));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Cell\");\n$RefreshReg$(_c2, \"Snake\");\n$RefreshReg$(_c3, \"%default%$dynamic\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FBQ0UsV0FBS1osUUFBUSxDQUFDQyxLQUFkO0FBQ0UsZUFBTztBQUNMYSxVQUFBQSxlQUFlLEVBQUUsYUFEWjtBQUVMQyxVQUFBQSxZQUFZLEVBQUUsQ0FGVDtBQUdMQyxVQUFBQSxPQUFPLEVBQUU7QUFISixTQUFQOztBQU1GLFdBQUtoQixRQUFRLENBQUNFLElBQWQ7QUFDRSxlQUFPO0FBQ0xZLFVBQUFBLGVBQWUsRUFBRSxZQURaO0FBRUxDLFVBQUFBLFlBQVksRUFBRSxFQUZUO0FBR0xqQixVQUFBQSxLQUFLLEVBQUUsRUFIRjtBQUlMRCxVQUFBQSxNQUFNLEVBQUU7QUFKSCxTQUFQOztBQU9GO0FBQ0UsZUFBTyxFQUFQO0FBakJKO0FBbUJELEdBcEJEOztBQXFCQSxzQkFDRTtBQUNFLGFBQVMsRUFBRUYsK0VBRGI7QUFFRSxTQUFLLEVBQUU7QUFDTHVCLE1BQUFBLElBQUksRUFBRVosQ0FBQyxHQUFHVixNQUFNLENBQUNHLFFBRFo7QUFFTG9CLE1BQUFBLEdBQUcsRUFBRVosQ0FBQyxHQUFHWCxNQUFNLENBQUNHLFFBRlg7QUFHTEQsTUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNHLFFBSFQ7QUFJTEYsTUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNHO0FBSlYsS0FGVDtBQUFBLDJCQVNFO0FBQUssZUFBUyxFQUFFSixzRUFBaEI7QUFBNkIsV0FBSyxFQUFFa0IsU0FBUztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FuQ0Q7O0tBQU1GOztBQXFDTixJQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTztBQUMzQmYsSUFBQUEsQ0FBQyxFQUFFZ0IsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQjVCLE1BQU0sQ0FBQ0UsS0FBbEMsQ0FEd0I7QUFFM0JTLElBQUFBLENBQUMsRUFBRWUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQjVCLE1BQU0sQ0FBQ0UsS0FBbEM7QUFGd0IsR0FBUDtBQUFBLENBQXRCOztBQUtBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTXdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxXQUFNLENBQzVCO0FBQUVuQixNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxDQUFDLEVBQUU7QUFBWCxLQUQ0QixFQUU1QjtBQUFFRCxNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxDQUFDLEVBQUU7QUFBWCxLQUY0QixFQUc1QjtBQUFFRCxNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxDQUFDLEVBQUU7QUFBWCxLQUg0QixDQUFOO0FBQUEsR0FBeEI7O0FBS0EsTUFBTW1CLElBQUksR0FBR2hDLDZDQUFNLEVBQW5CLENBTmtCLENBUWxCOztBQVJrQixrQkFTUUQsK0NBQVEsQ0FBQ2dDLGVBQWUsRUFBaEIsQ0FUaEI7QUFBQSxNQVNYRSxLQVRXO0FBQUEsTUFTSkMsUUFUSTs7QUFBQSxtQkFVZ0JuQywrQ0FBUSxDQUFDVyxTQUFTLENBQUNJLEtBQVgsQ0FWeEI7QUFBQSxNQVVYcUIsU0FWVztBQUFBLE1BVUFDLFlBVkE7O0FBQUEsbUJBWU1yQywrQ0FBUSxDQUFDLENBQUM7QUFBRWEsSUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsSUFBQUEsQ0FBQyxFQUFFLEVBQVg7QUFBZXdCLElBQUFBLE9BQU8sRUFBRTtBQUF4QixHQUFELENBQUQsQ0FaZDtBQUFBLE1BWVhDLElBWlc7QUFBQSxNQVlMQyxPQVpLOztBQUFBLG1CQWFReEMsK0NBQVEsQ0FBQyxDQUFELENBYmhCO0FBQUEsTUFhWHlDLEtBYlc7QUFBQSxNQWFKQyxRQWJJOztBQUFBLG1CQWVvQjFDLCtDQUFRLENBQUMsQ0FBRCxDQWY1QjtBQUFBLE1BZVgyQyxXQWZXO0FBQUEsTUFlRUMsY0FmRixrQkFpQmxCOzs7QUFDQTdDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU04QyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJWLE1BQUFBLFFBQVEsQ0FBQyxVQUFDRCxLQUFELEVBQVc7QUFDbEIsWUFBTVksSUFBSSxHQUFHWixLQUFLLENBQUMsQ0FBRCxDQUFsQjtBQUNBLFlBQU1hLE9BQU8sR0FBRztBQUFFbEMsVUFBQUEsQ0FBQyxFQUFFaUMsSUFBSSxDQUFDakMsQ0FBTCxHQUFTdUIsU0FBUyxDQUFDdkIsQ0FBeEI7QUFBMkJDLFVBQUFBLENBQUMsRUFBRWdDLElBQUksQ0FBQ2hDLENBQUwsR0FBU3NCLFNBQVMsQ0FBQ3RCO0FBQWpELFNBQWhCO0FBRUEsWUFBR2lDLE9BQU8sQ0FBQ2xDLENBQVIsSUFBYVYsTUFBTSxDQUFDQyxNQUF2QixFQUErQjJDLE9BQU8sQ0FBQ2xDLENBQVIsR0FBWSxDQUFaLENBQS9CLEtBQ0ssSUFBR2tDLE9BQU8sQ0FBQ2xDLENBQVIsR0FBWSxDQUFmLEVBQWtCa0MsT0FBTyxDQUFDbEMsQ0FBUixHQUFZVixNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBNUIsQ0FBbEIsS0FDQSxJQUFHMkMsT0FBTyxDQUFDakMsQ0FBUixJQUFhWCxNQUFNLENBQUNFLEtBQXZCLEVBQThCMEMsT0FBTyxDQUFDakMsQ0FBUixHQUFZLENBQVosQ0FBOUIsS0FDQSxJQUFHaUMsT0FBTyxDQUFDakMsQ0FBUixHQUFZLENBQWYsRUFBa0JpQyxPQUFPLENBQUNqQyxDQUFSLEdBQVlYLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlLENBQTNCLENBUEwsQ0FTbEI7QUFDQTs7QUFDQSxZQUFNMkMsUUFBUSxHQUFHLGtKQUFJZCxLQUFQLENBQWQsQ0FYa0IsQ0FhbEI7OztBQUNBYyxRQUFBQSxRQUFRLENBQUNDLEdBQVQ7QUFFQSxZQUFHLENBQUMsQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEVBQWQsQ0FBTCxFQUVBLE9BQU9ILFFBQVA7QUFDRCxPQW5CTyxDQUFSO0FBb0JELEtBckJEOztBQXVCQUgsSUFBQUEsYUFBYTtBQUNiLFFBQU1PLEtBQUssR0FBR0MsV0FBVyxDQUFDUixhQUFELEVBQWdCLEdBQWhCLENBQXpCO0FBRUEsV0FBTztBQUFBLGFBQU1TLGFBQWEsQ0FBQ0YsS0FBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQTVCUSxFQTRCTixDQUFDaEIsU0FBRCxFQUFZRyxJQUFaLENBNUJNLENBQVQsQ0FsQmtCLENBZ0RsQjs7QUFDQXhDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU0rQyxJQUFJLEdBQUdaLEtBQUssQ0FBQyxDQUFELENBQWxCOztBQUNBLFFBQUlxQixNQUFNLENBQUNULElBQUQsQ0FBVixFQUFrQjtBQUNoQixVQUFJVSxDQUFKO0FBQ0EsVUFBR3BCLFNBQVMsS0FBS3pCLFNBQVMsQ0FBQ0ssR0FBM0IsRUFBZ0N3QyxDQUFDLEdBQUc3QyxTQUFTLENBQUNNLE1BQWQsQ0FBaEMsS0FDSyxJQUFHbUIsU0FBUyxLQUFLekIsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ3VDLENBQUMsR0FBRzdDLFNBQVMsQ0FBQ0ssR0FBZCxDQUFuQyxLQUNBLElBQUdvQixTQUFTLEtBQUt6QixTQUFTLENBQUNDLElBQTNCLEVBQWlDNEMsQ0FBQyxHQUFHN0MsU0FBUyxDQUFDSSxLQUFkLENBQWpDLEtBQ0EsSUFBR3FCLFNBQVMsS0FBS3pCLFNBQVMsQ0FBQ0ksS0FBM0IsRUFBa0N5QyxDQUFDLEdBQUc3QyxTQUFTLENBQUNDLElBQWQ7QUFFdkN1QixNQUFBQSxRQUFRLENBQUMsVUFBQ0QsS0FBRCxFQUFXO0FBQ2xCLFlBQU1ZLElBQUksR0FBR1osS0FBSyxDQUFDLENBQUQsQ0FBbEI7QUFDQSxZQUFNdUIsT0FBTyxHQUFHO0FBQUU1QyxVQUFBQSxDQUFDLEVBQUVxQixLQUFLLENBQUNBLEtBQUssQ0FBQ3dCLE1BQU4sR0FBYyxDQUFmLENBQUwsQ0FBdUI3QyxDQUF2QixHQUEyQjJDLENBQUMsQ0FBQzNDLENBQWxDO0FBQXFDQyxVQUFBQSxDQUFDLEVBQUVvQixLQUFLLENBQUNBLEtBQUssQ0FBQ3dCLE1BQU4sR0FBYyxDQUFmLENBQUwsQ0FBdUI1QyxDQUF2QixHQUEyQnNCLFNBQVMsQ0FBQ3RCO0FBQTdFLFNBQWhCO0FBRUEsWUFBTWtDLFFBQVEsK0pBQU9kLEtBQVAsSUFBY3VCLE9BQWQsRUFBZDtBQUVBLGVBQU9ULFFBQVA7QUFDRCxPQVBPLENBQVI7QUFTQU4sTUFBQUEsUUFBUSxDQUFDLFVBQUNELEtBQUQsRUFBVztBQUNsQixlQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNELE9BRk8sQ0FBUjtBQUlBLFVBQUlrQixPQUFPLEdBQUcvQixhQUFhLEVBQTNCOztBQUNBLGFBQU9nQyxPQUFPLENBQUNELE9BQUQsQ0FBZCxFQUF5QjtBQUN2QkEsUUFBQUEsT0FBTyxHQUFHL0IsYUFBYSxFQUF2QjtBQUNEOztBQUNEK0IsTUFBQUEsT0FBTyxDQUFDckIsT0FBUixHQUFrQixDQUFsQjtBQUVBRSxNQUFBQSxPQUFPLENBQUMsVUFBQXFCLElBQUksRUFBSTtBQUNkLGdCQUFRRixPQUFSLDJKQUFvQkUsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQUMsSUFBSTtBQUFBLGlCQUFJLENBQUNILE9BQU8sQ0FBQ0csSUFBRCxDQUFaO0FBQUEsU0FBaEIsQ0FBcEI7QUFDRCxPQUZNLENBQVA7QUFHRDtBQUNGLEdBaENRLEVBZ0NOLENBQUM3QixLQUFELENBaENNLENBQVQsQ0FqRGtCLENBbUZsQjs7QUFDQ25DLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1pRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCcEIsTUFBQUEsY0FBYyxDQUFDLFVBQUFpQixJQUFJLEVBQUk7QUFDckJyQixRQUFBQSxPQUFPLENBQUMsVUFBQXVCLElBQUksRUFBSTtBQUNkLGNBQU1FLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQWYsRUFBRSxFQUFJO0FBQ3pCLG1EQUFXQSxFQUFYO0FBQWViLGNBQUFBLE9BQU8sRUFBRWEsRUFBRSxDQUFDYixPQUFILEdBQVc7QUFBbkM7QUFDRCxXQUZXLENBQVo7O0FBSUEsY0FBRyxDQUFDdUIsSUFBSSxHQUFHLENBQVIsSUFBYSxDQUFiLEtBQW1CLENBQXRCLEVBQXlCO0FBQ3ZCLGdCQUFJRixPQUFPLEdBQUcvQixhQUFhLEVBQTNCOztBQUNBLG1CQUFPZ0MsT0FBTyxDQUFDRCxPQUFELENBQWQsRUFBeUI7QUFDdkJBLGNBQUFBLE9BQU8sR0FBRy9CLGFBQWEsRUFBdkI7QUFDRDs7QUFDRCtCLFlBQUFBLE9BQU8sQ0FBQ3JCLE9BQVIsR0FBa0IsQ0FBbEI7QUFDQTJCLFlBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTUixPQUFUO0FBQ0Q7O0FBQ0QsaUJBQU9NLEdBQUcsQ0FBQ0gsTUFBSixDQUFXLFVBQUFYLEVBQUU7QUFBQSxtQkFBSUEsRUFBRSxDQUFDYixPQUFILEdBQWEsRUFBakI7QUFBQSxXQUFiLENBQVA7QUFDRCxTQWRNLENBQVA7QUFpQkEsZUFBTyxDQUFDdUIsSUFBSSxHQUFHLENBQVIsSUFBYSxDQUFwQjtBQUNELE9BbkJhLENBQWQ7QUFzQkQsS0F2QkQ7O0FBeUJBLFFBQU1ULEtBQUssR0FBR0MsV0FBVyxDQUFDVyxVQUFELEVBQWEsSUFBYixDQUF6QjtBQUVBLFdBQU87QUFBQSxhQUFNVixhQUFhLENBQUNGLEtBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0E3QlMsRUE2QlAsRUE3Qk8sQ0FBVDtBQStCRHJELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1xRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQyxjQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDRSxhQUFLLFNBQUw7QUFBZ0I7QUFDZGpDLFlBQUFBLFlBQVksQ0FBQyxVQUFBd0IsSUFBSSxFQUFJO0FBQ25CLGtCQUFHQSxJQUFJLElBQUlsRCxTQUFTLENBQUNNLE1BQXJCLEVBQTZCLE9BQU9OLFNBQVMsQ0FBQ0ssR0FBakI7QUFDN0IscUJBQU82QyxJQUFQO0FBQ0QsYUFIVyxDQUFaO0FBSUE7QUFDRDs7QUFFRCxhQUFLLFdBQUw7QUFBa0I7QUFDaEJ4QixZQUFBQSxZQUFZLENBQUMsVUFBQXdCLElBQUksRUFBSTtBQUNuQixrQkFBR0EsSUFBSSxJQUFJbEQsU0FBUyxDQUFDSyxHQUFyQixFQUEwQixPQUFPTCxTQUFTLENBQUNNLE1BQWpCO0FBQzFCLHFCQUFPNEMsSUFBUDtBQUNELGFBSFcsQ0FBWjtBQUlBO0FBQ0Q7O0FBRUQsYUFBSyxXQUFMO0FBQWtCO0FBQ2hCeEIsWUFBQUEsWUFBWSxDQUFDLFVBQUF3QixJQUFJLEVBQUk7QUFDbkIsa0JBQUdBLElBQUksSUFBSWxELFNBQVMsQ0FBQ0ksS0FBckIsRUFBNEIsT0FBT0osU0FBUyxDQUFDQyxJQUFqQjtBQUM1QixxQkFBT2lELElBQVA7QUFDRCxhQUhXLENBQVo7QUFJQTtBQUNEOztBQUVELGFBQUssWUFBTDtBQUFtQjtBQUNqQnhCLFlBQUFBLFlBQVksQ0FBQyxVQUFBd0IsSUFBSSxFQUFJO0FBQ25CLGtCQUFHQSxJQUFJLElBQUlsRCxTQUFTLENBQUNDLElBQXJCLEVBQTJCLE9BQU9ELFNBQVMsQ0FBQ0ksS0FBakI7QUFDM0IscUJBQU84QyxJQUFQO0FBQ0QsYUFIVyxDQUFaO0FBSUE7QUFDRDtBQS9CSDtBQWlDRCxLQWxDRDs7QUFtQ0FVLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNKLGdCQUFuQztBQUVBLFdBQU87QUFBQSxhQUFNRyxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDTCxnQkFBdEMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQXZDUSxFQXVDTixFQXZDTSxDQUFULENBbkhrQixDQTRKbEI7QUFDQTs7QUFDQSxNQUFNYixNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFFBQUcxQyxDQUFILFNBQUdBLENBQUg7QUFBQSxRQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxXQUNieUIsSUFBSSxDQUFDVyxJQUFMLENBQVUsVUFBQ3dCLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUM3RCxDQUFULEtBQWVBLENBQWYsSUFBb0I2RCxRQUFRLENBQUM1RCxDQUFULEtBQWVBLENBQWpEO0FBQUEsS0FBVixDQURhO0FBQUEsR0FBZjs7QUFHQSxNQUFNOEMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxRQUFHL0MsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsUUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsV0FDZG9CLEtBQUssQ0FBQ2dCLElBQU4sQ0FBVyxVQUFDd0IsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQzdELENBQVQsS0FBZUEsQ0FBZixJQUFvQjZELFFBQVEsQ0FBQzVELENBQVQsS0FBZUEsQ0FBakQ7QUFBQSxLQUFYLENBRGM7QUFBQSxHQUFoQjs7QUFHQSxNQUFNNkQsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxJQUFJOUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsTUFBTSxDQUFDRSxLQUEzQixFQUFrQ1EsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdYLE1BQU0sQ0FBQ0MsTUFBM0IsRUFBbUNVLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBSUssSUFBSSxHQUFHWixRQUFRLENBQUNHLEtBQXBCOztBQUNBLFVBQUk2QyxNQUFNLENBQUM7QUFBRTFDLFFBQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxRQUFBQSxDQUFDLEVBQURBO0FBQUwsT0FBRCxDQUFWLEVBQXNCO0FBQ3BCSyxRQUFBQSxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0UsSUFBaEI7QUFDRCxPQUZELE1BRU8sSUFBSW1ELE9BQU8sQ0FBQztBQUFFL0MsUUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLFFBQUFBLENBQUMsRUFBREE7QUFBTCxPQUFELENBQVgsRUFBdUI7QUFDNUJLLFFBQUFBLElBQUksR0FBR1osUUFBUSxDQUFDQyxLQUFoQjtBQUNEOztBQUNEbUUsTUFBQUEsS0FBSyxDQUFDUixJQUFOLGVBQVcsOERBQUMsSUFBRDtBQUF3QixTQUFDLEVBQUV0RCxDQUEzQjtBQUE4QixTQUFDLEVBQUVDLENBQWpDO0FBQW9DLFlBQUksRUFBRUs7QUFBMUMsbUJBQWNOLENBQWQsY0FBbUJDLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVaLDJFQUFoQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQSx3RUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBQS9CLE9BRlQ7QUFBQSw0QkFJVW1DLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUNFLGVBQVMsRUFBRXZDLHNFQURiO0FBRUUsV0FBSyxFQUFFO0FBQ0xFLFFBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDQyxNQUFQLEdBQWdCRCxNQUFNLENBQUNHLFFBRDFCO0FBRUxELFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFGeEIsT0FGVDtBQUFBLGdCQU9HcUU7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwTUQ7O0dBQU1uRTs7TUFBQUE7QUFzTU4sK0RBQWUsTUFBQVYsbURBQU8sT0FBQztBQUFBLFNBQU1nRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0J2RSxLQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUErQjtBQUNuRHdFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NuYWtlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ29uZmlnID0ge1xuICBoZWlnaHQ6IDIwLFxuICB3aWR0aDogMjAsXG4gIGNlbGxTaXplOiAzMixcbn07XG5cbmNvbnN0IENlbGxUeXBlID0ge1xuICBTbmFrZTogXCJzbmFrZVwiLFxuICBGb29kOiBcImZvb2RcIixcbiAgRW1wdHk6IFwiZW1wdHlcIixcbn07XG5cbmNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTGVmdDogeyB4OiAtMSwgeTogMCB9LFxuICBSaWdodDogeyB4OiAxLCB5OiAwIH0sXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxuICBCb3R0b206IHsgeDogMCwgeTogMSB9LFxufTtcblxuY29uc3QgQ2VsbCA9ICh7IHgsIHksIHR5cGUgfSkgPT4ge1xuICBjb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIENlbGxUeXBlLlNuYWtlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIENlbGxUeXBlLkZvb2Q6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtvcmFuZ2VcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICAgIHdpZHRoOiAzMixcbiAgICAgICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxDb250YWluZXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgICB0b3A6IHkgKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIHdpZHRoOiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKCkgPT4gKHtcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcbiAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcbn0pO1xuXG5jb25zdCBTbmFrZSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RGVmYXVsdFNuYWtlID0gKCkgPT4gW1xuICAgIHsgeDogOCwgeTogMTIgfSxcbiAgICB7IHg6IDcsIHk6IDEyIH0sXG4gICAgeyB4OiA2LCB5OiAxMiB9LFxuICBdO1xuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XG5cbiAgLy8gc25ha2VbMF0gaXMgaGVhZCBhbmQgc25ha2Vbc25ha2UubGVuZ3RoIC0gMV0gaXMgdGFpbFxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKGdldERlZmF1bHRTbmFrZSgpKTtcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XG5cbiAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoW3sgeDogNCwgeTogMTAsIGNvdW50ZXI6IDAgfV0pO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFt0aW1lQ291bnRlciwgc2V0VGltZUNvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gbW92ZSB0aGUgc25ha2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBydW5TaW5nbGVTdGVwID0gKCkgPT4ge1xuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgaWYobmV3SGVhZC54ID49IENvbmZpZy5oZWlnaHQpIG5ld0hlYWQueCA9IDA7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC54IDwgMCkgbmV3SGVhZC54ID0gQ29uZmlnLmhlaWdodCAtIDE7XG4gICAgICAgIGVsc2UgaWYobmV3SGVhZC55ID49IENvbmZpZy53aWR0aCkgbmV3SGVhZC55ID0gMDtcbiAgICAgICAgZWxzZSBpZihuZXdIZWFkLnkgPCAwKSBuZXdIZWFkLnkgPSBDb25maWcud2lkdGggLSAxO1xuXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbLi4uc25ha2VdO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXG4gICAgICAgIG5ld1NuYWtlLnBvcCgpO1xuXG4gICAgICAgIGlmKCEhbmV3U25ha2UuZmluZChpdCApKVxuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBydW5TaW5nbGVTdGVwKCk7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCAzMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XG5cbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xuICAgICAgbGV0IGQ7XG4gICAgICBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Ub3ApIGQgPSBEaXJlY3Rpb24uQm90dG9tO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Cb3R0b20pIGQgPSBEaXJlY3Rpb24uVG9wO1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSBkID0gRGlyZWN0aW9uLlJpZ2h0O1xuICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodCkgZCA9IERpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xuICAgICAgICBjb25zdCBuZXdUYWlsID0geyB4OiBzbmFrZVtzbmFrZS5sZW5ndGggLTFdLnggKyBkLngsIHk6IHNuYWtlW3NuYWtlLmxlbmd0aCAtMV0ueSArIGRpcmVjdGlvbi55IH07XG5cbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbLi4uc25ha2UsIG5ld1RhaWxdO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICB9XG4gICAgICBuZXdGb29kLmNvdW50ZXIgPSAwO1xuXG4gICAgICBzZXRGb29kKHByZXYgPT4ge1xuICAgICAgICByZXR1cm4gW25ld0Zvb2QsIC4uLnByZXYuZmlsdGVyKGl0ZW0gPT4gIWlzU25ha2UoaXRlbSkpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NuYWtlXSk7XG5cbiAgLy8gbW9kaWZ5IGZvb2QgYWZ0ZXIgMyBhbmQgMTAgc2Vjb25kc1xuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2RpZnlGb29kID0gKCkgPT4ge1xuICAgICAgc2V0VGltZUNvdW50ZXIocHJldiA9PiB7XG4gICAgICAgIHNldEZvb2QoaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgYXJyID0gaXRlbS5tYXAoaXQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5pdCwgY291bnRlcjogaXQuY291bnRlcisxfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZigocHJldiArIDEpICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICAgICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xuICAgICAgICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Rm9vZC5jb3VudGVyID0gMDtcbiAgICAgICAgICAgIGFyci5wdXNoKG5ld0Zvb2QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXJyLmZpbHRlcihpdCA9PiBpdC5jb3VudGVyIDwgMTApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIChwcmV2ICsgMSkgJSAzO1xuICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwobW9kaWZ5Rm9vZCwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcbiAgICAgICAgICBzZXREaXJlY3Rpb24ocHJldiA9PiB7XG4gICAgICAgICAgICBpZihwcmV2ICE9IERpcmVjdGlvbi5Cb3R0b20pIHJldHVybiBEaXJlY3Rpb24uVG9wO1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcbiAgICAgICAgICBzZXREaXJlY3Rpb24ocHJldiA9PiB7XG4gICAgICAgICAgICBpZihwcmV2ICE9IERpcmVjdGlvbi5Ub3ApIHJldHVybiBEaXJlY3Rpb24uQm90dG9tO1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcbiAgICAgICAgICBzZXREaXJlY3Rpb24ocHJldiA9PiB7XG4gICAgICAgICAgICBpZihwcmV2ICE9IERpcmVjdGlvbi5SaWdodCkgcmV0dXJuIERpcmVjdGlvbi5MZWZ0O1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKHByZXYgPT4ge1xuICAgICAgICAgICAgaWYocHJldiAhPSBEaXJlY3Rpb24uTGVmdCkgcmV0dXJuIERpcmVjdGlvbi5SaWdodDtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xuICB9LCBbXSk7XG5cbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXG4gIC8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09wdGlvbmFsX2NoYWluaW5nXG4gIGNvbnN0IGlzRm9vZCA9ICh7IHgsIHkgfSkgPT4gXG4gICAgZm9vZC5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcblxuICBjb25zdCBpc1NuYWtlID0gKHsgeCwgeSB9KSA9PlxuICAgIHNuYWtlLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09PSB4ICYmIHBvc2l0aW9uLnkgPT09IHkpO1xuXG4gIGNvbnN0IGNlbGxzID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgQ29uZmlnLndpZHRoOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xuICAgICAgbGV0IHR5cGUgPSBDZWxsVHlwZS5FbXB0eTtcbiAgICAgIGlmIChpc0Zvb2QoeyB4LCB5IH0pKSB7XG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xuICAgICAgfSBlbHNlIGlmIChpc1NuYWtlKHsgeCwgeSB9KSkge1xuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuU25ha2U7XG4gICAgICB9XG4gICAgICBjZWxscy5wdXNoKDxDZWxsIGtleT17YCR7eH0tJHt5fWB9IHg9e3h9IHk9e3l9IHR5cGU9e3R5cGV9IC8+KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XG4gICAgICA+XG4gICAgICAgIFNjb3JlOiB7c2NvcmV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IENvbmZpZy5oZWlnaHQgKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgICAgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NlbGxzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKCgpID0+IFByb21pc2UucmVzb2x2ZShTbmFrZSksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIkNvbmZpZyIsImhlaWdodCIsIndpZHRoIiwiY2VsbFNpemUiLCJDZWxsVHlwZSIsIlNuYWtlIiwiRm9vZCIsIkVtcHR5IiwiRGlyZWN0aW9uIiwiTGVmdCIsIngiLCJ5IiwiUmlnaHQiLCJUb3AiLCJCb3R0b20iLCJDZWxsIiwidHlwZSIsImdldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjZWxsQ29udGFpbmVyIiwibGVmdCIsInRvcCIsImNlbGwiLCJnZXRSYW5kb21DZWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RGVmYXVsdFNuYWtlIiwiZ3JpZCIsInNuYWtlIiwic2V0U25ha2UiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJjb3VudGVyIiwiZm9vZCIsInNldEZvb2QiLCJzY29yZSIsInNldFNjb3JlIiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwicG9wIiwiZmluZCIsIml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpc0Zvb2QiLCJkIiwibmV3VGFpbCIsImxlbmd0aCIsIm5ld0Zvb2QiLCJpc1NuYWtlIiwicHJldiIsImZpbHRlciIsIml0ZW0iLCJtb2RpZnlGb29kIiwiYXJyIiwibWFwIiwicHVzaCIsImhhbmRsZU5hdmlnYXRpb24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJjZWxscyIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});