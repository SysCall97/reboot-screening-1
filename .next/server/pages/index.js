(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Snake.module.css */ "./styles/Snake.module.css");
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/kazi/reboot-screening-1/pages/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Config = {
  height: 20,
  width: 20,
  cellSize: 32
};
const CellType = {
  Snake: "snake",
  Food: "food",
  Empty: "empty"
};
const Direction = {
  Left: {
    x: -1,
    y: 0
  },
  Right: {
    x: 1,
    y: 0
  },
  Top: {
    x: 0,
    y: -1
  },
  Bottom: {
    x: 0,
    y: 1
  }
};

const Cell = ({
  x,
  y,
  type
}) => {
  const getStyles = () => {
    switch (type) {
      case CellType.Snake:
        return {
          backgroundColor: "yellowgreen",
          borderRadius: 8,
          padding: 2
        };

      case CellType.Food:
        return {
          backgroundColor: "darkorange",
          borderRadius: 20,
          width: 32,
          height: 32
        };

      default:
        return {};
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().cellContainer),
    style: {
      left: x * Config.cellSize,
      top: y * Config.cellSize,
      width: Config.cellSize,
      height: Config.cellSize
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().cell),
      style: getStyles()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

const getRandomCell = () => ({
  x: Math.floor(Math.random() * Config.width),
  y: Math.floor(Math.random() * Config.width)
});

const useHooks = () => {
  const getDefaultSnake = () => [{
    x: 8,
    y: 12
  }, {
    x: 7,
    y: 12
  }, {
    x: 6,
    y: 12
  }];

  const grid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail

  const {
    0: snake,
    1: setSnake
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getDefaultSnake());
  const {
    0: direction,
    1: setDirection
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Direction.Right);
  const {
    0: food,
    1: setFood
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    x: 4,
    y: 10,
    counter: 0
  }]);
  const {
    0: timeCounter,
    1: setTimeCounter
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // move the snake

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const runSingleStep = () => {
      setSnake(snake => {
        const head = snake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y
        };
        if (newHead.x >= Config.height) newHead.x = 0;else if (newHead.x < 0) newHead.x = Config.height - 1;else if (newHead.y >= Config.width) newHead.y = 0;else if (newHead.y < 0) newHead.y = Config.width - 1; // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        const newSnake = [...snake]; // remove tail

        newSnake.pop();

        if (!!newSnake.find(pixel => pixel.x === newHead.x && pixel.y === newHead.y)) {
          setDirection(Direction.Right);
          setFood([{
            x: 4,
            y: 10,
            counter: 0
          }]);
          alert(`Game Over. Your score: ${snake.length - getDefaultSnake().length}`);
          setTimeCounter(0);
          return getDefaultSnake();
        }

        return [newHead, ...newSnake];
      });
    };

    runSingleStep();
    const timer = setInterval(runSingleStep, 300);
    return () => clearInterval(timer);
  }, [direction, food]); // update score whenever head touches a food

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const head = snake[0];

    if (isFood(head)) {
      let d;
      if (direction === Direction.Top) d = Direction.Bottom;else if (direction === Direction.Bottom) d = Direction.Top;else if (direction === Direction.Left) d = Direction.Right;else if (direction === Direction.Right) d = Direction.Left;
      setSnake(snake => {
        const head = snake[0];
        const newTail = {
          x: snake[snake.length - 1].x + d.x,
          y: snake[snake.length - 1].y + direction.y
        };
        const newSnake = [...snake, newTail];
        return newSnake;
      });
      let newFood = getRandomCell();

      while (isSnake(newFood)) {
        newFood = getRandomCell();
      }

      newFood.counter = 0;
      setFood(prev => {
        return [newFood, ...prev.filter(item => !isSnake(item))];
      });
    }
  }, [snake]); // modify food after 3 and 10 seconds

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const modifyFood = () => {
      setTimeCounter(prev => {
        setFood(item => {
          const arr = item.map(it => {
            return _objectSpread(_objectSpread({}, it), {}, {
              counter: it.counter + 1
            });
          });

          if ((prev + 1) % 3 === 0) {
            let newFood = getRandomCell();

            while (isSnake(newFood)) {
              newFood = getRandomCell();
            }

            newFood.counter = 0;
            arr.push(newFood);
          }

          return arr.filter(it => it.counter < 10);
        });
        return (prev + 1) % 3;
      });
    };

    const timer = setInterval(modifyFood, 1000);
    return () => clearInterval(timer);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleSetDirection = (direction, oppositeDirection) => {
      setDirection(prev => {
        if (prev != oppositeDirection) return direction;
        return prev;
      });
    };

    const handleNavigation = event => {
      switch (event.key) {
        case "ArrowUp":
          {
            handleSetDirection(Direction.Top, Direction.Bottom);
            break;
          }

        case "ArrowDown":
          {
            handleSetDirection(Direction.Bottom, Direction.Top);
            break;
          }

        case "ArrowLeft":
          {
            handleSetDirection(Direction.Left, Direction.Right);
            break;
          }

        case "ArrowRight":
          {
            handleSetDirection(Direction.Right, Direction.Left);
            break;
          }
      }
    };

    window.addEventListener("keydown", handleNavigation);
    return () => window.removeEventListener("keydown", handleNavigation);
  }, []); // ?. is called optional chaining
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  const isFood = ({
    x,
    y
  }) => !!food.find(position => position.x === x && position.y === y);

  const isSnake = ({
    x,
    y
  }) => !!snake.find(position => position.x === x && position.y === y);

  return {
    isFood,
    isSnake,
    score: snake.length - getDefaultSnake().length
  };
};

const Snake = () => {
  const {
    isFood,
    isSnake,
    score
  } = useHooks();
  const cells = [];

  for (let x = 0; x < Config.width; x++) {
    for (let y = 0; y < Config.height; y++) {
      let type = CellType.Empty;

      if (isFood({
        x,
        y
      })) {
        type = CellType.Food;
      } else if (isSnake({
        x,
        y
      })) {
        type = CellType.Snake;
      }

      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        x: x,
        y: y,
        type: type
      }, `${x}-${y}`, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 18
      }, undefined));
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      style: {
        width: Config.width * Config.cellSize
      },
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
      style: {
        height: Config.height * Config.cellSize,
        width: Config.width * Config.cellSize
      },
      children: cells
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(Snake), {
  ssr: false
}));

/***/ }),

/***/ "./styles/Snake.module.css":
/*!*********************************!*\
  !*** ./styles/Snake.module.css ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Snake_container__1heuj",
	"header": "Snake_header__3kyFz",
	"grid": "Snake_grid__2Y1Rs",
	"cellContainer": "Snake_cellContainer__31SHE",
	"cell": "Snake_cell__1yDMj"
};


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQUksRUFBRUs7QUFBMUMsU0FBWSxHQUFFTixDQUFFLElBQUdDLENBQUUsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVaLDJFQUFoQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQSx3RUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBQS9CLE9BRlQ7QUFBQSw0QkFJVXdFLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFDRSxlQUFTLEVBQUU1RSxzRUFEYjtBQUVFLFdBQUssRUFBRTtBQUNMRSxRQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkQsTUFBTSxDQUFDRyxRQUQxQjtBQUVMRCxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBRnhCLE9BRlQ7QUFBQSxnQkFPR3lFO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQW5DRDs7QUFxQ0EsaUVBQWVqRixtREFBTyxDQUFDLE1BQU1vRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IzRSxLQUFoQixDQUFQLEVBQStCO0FBQ25ENEUsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCOzs7Ozs7Ozs7O0FDelFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL3N0eWxlcy9TbmFrZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3NuYWtlL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vc25ha2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NuYWtlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25maWcgPSB7XG4gIGhlaWdodDogMjAsXG4gIHdpZHRoOiAyMCxcbiAgY2VsbFNpemU6IDMyLFxufTtcblxuY29uc3QgQ2VsbFR5cGUgPSB7XG4gIFNuYWtlOiBcInNuYWtlXCIsXG4gIEZvb2Q6IFwiZm9vZFwiLFxuICBFbXB0eTogXCJlbXB0eVwiLFxufTtcblxuY29uc3QgRGlyZWN0aW9uID0ge1xuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXG59O1xuXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxufSk7XG5cbmNvbnN0IHVzZUhvb2tzID0gKCkgPT4ge1xuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiBbXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxuICAgIHsgeDogNywgeTogMTIgfSxcbiAgICB7IHg6IDYsIHk6IDEyIH0sXG4gIF07XG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcblxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcblxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZShbeyB4OiA0LCB5OiAxMCwgY291bnRlcjogMCB9XSk7XG5cbiAgY29uc3QgW3RpbWVDb3VudGVyLCBzZXRUaW1lQ291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBtb3ZlIHRoZSBzbmFrZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcblxuICAgICAgICBpZihuZXdIZWFkLnggPj0gQ29uZmlnLmhlaWdodCkgbmV3SGVhZC54ID0gMDtcbiAgICAgICAgZWxzZSBpZihuZXdIZWFkLnggPCAwKSBuZXdIZWFkLnggPSBDb25maWcuaGVpZ2h0IC0gMTtcbiAgICAgICAgZWxzZSBpZihuZXdIZWFkLnkgPj0gQ29uZmlnLndpZHRoKSBuZXdIZWFkLnkgPSAwO1xuICAgICAgICBlbHNlIGlmKG5ld0hlYWQueSA8IDApIG5ld0hlYWQueSA9IENvbmZpZy53aWR0aCAtIDE7XG5cbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvU3ByZWFkX3N5bnRheFxuICAgICAgICBjb25zdCBuZXdTbmFrZSA9IFsuLi5zbmFrZV07XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRhaWxcbiAgICAgICAgbmV3U25ha2UucG9wKCk7XG5cbiAgICAgICAgaWYoISFuZXdTbmFrZS5maW5kKHBpeGVsID0+IHBpeGVsLnggPT09IG5ld0hlYWQueCAmJiBwaXhlbC55ID09PSBuZXdIZWFkLnkpKSB7XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XG4gICAgICAgICAgc2V0Rm9vZChbeyB4OiA0LCB5OiAxMCwgY291bnRlcjogMCB9XSk7XG4gICAgICAgICAgYWxlcnQoYEdhbWUgT3Zlci4gWW91ciBzY29yZTogJHtzbmFrZS5sZW5ndGggLSBnZXREZWZhdWx0U25ha2UoKS5sZW5ndGh9YCk7XG4gICAgICAgICAgc2V0VGltZUNvdW50ZXIoMCk7XG4gICAgICAgICAgcmV0dXJuIGdldERlZmF1bHRTbmFrZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtuZXdIZWFkLCAuLi5uZXdTbmFrZV07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcnVuU2luZ2xlU3RlcCgpO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwocnVuU2luZ2xlU3RlcCwgMzAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW2RpcmVjdGlvbiwgZm9vZF0pO1xuXG4gIC8vIHVwZGF0ZSBzY29yZSB3aGVuZXZlciBoZWFkIHRvdWNoZXMgYSBmb29kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xuICAgIGlmIChpc0Zvb2QoaGVhZCkpIHtcbiAgICAgIGxldCBkO1xuICAgICAgaWYoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVG9wKSBkID0gRGlyZWN0aW9uLkJvdHRvbTtcbiAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uQm90dG9tKSBkID0gRGlyZWN0aW9uLlRvcDtcbiAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCkgZCA9IERpcmVjdGlvbi5SaWdodDtcbiAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQpIGQgPSBEaXJlY3Rpb24uTGVmdDtcblxuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcbiAgICAgICAgY29uc3QgbmV3VGFpbCA9IHsgeDogc25ha2Vbc25ha2UubGVuZ3RoIC0xXS54ICsgZC54LCB5OiBzbmFrZVtzbmFrZS5sZW5ndGggLTFdLnkgKyBkaXJlY3Rpb24ueSB9O1xuXG4gICAgICAgIGNvbnN0IG5ld1NuYWtlID0gWy4uLnNuYWtlLCBuZXdUYWlsXTtcblxuICAgICAgICByZXR1cm4gbmV3U25ha2U7XG4gICAgICB9KTtcblxuICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xuICAgICAgfVxuICAgICAgbmV3Rm9vZC5jb3VudGVyID0gMDtcblxuICAgICAgc2V0Rm9vZChwcmV2ID0+IHtcbiAgICAgICAgcmV0dXJuIFtuZXdGb29kLCAuLi5wcmV2LmZpbHRlcihpdGVtID0+ICFpc1NuYWtlKGl0ZW0pKV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzbmFrZV0pO1xuXG4gIC8vIG1vZGlmeSBmb29kIGFmdGVyIDMgYW5kIDEwIHNlY29uZHNcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5Rm9vZCA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVDb3VudGVyKHByZXYgPT4ge1xuICAgICAgICBzZXRGb29kKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGFyciA9IGl0ZW0ubWFwKGl0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7Li4uaXQsIGNvdW50ZXI6IGl0LmNvdW50ZXIrMX07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYoKHByZXYgKyAxKSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIGxldCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xuICAgICAgICAgICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcbiAgICAgICAgICAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0Zvb2QuY291bnRlciA9IDA7XG4gICAgICAgICAgICBhcnIucHVzaChuZXdGb29kKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoaXQgPT4gaXQuY291bnRlciA8IDEwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiAocHJldiArIDEpICUgMztcbiAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKG1vZGlmeUZvb2QsIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTZXREaXJlY3Rpb24gPSAoZGlyZWN0aW9uLCBvcHBvc2l0ZURpcmVjdGlvbikgPT4ge1xuICAgICAgc2V0RGlyZWN0aW9uKHByZXYgPT4ge1xuICAgICAgICBpZihwcmV2ICE9IG9wcG9zaXRlRGlyZWN0aW9uKSByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgaGFuZGxlU2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Ub3AsIERpcmVjdGlvbi5Cb3R0b20pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgaGFuZGxlU2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Cb3R0b20sIERpcmVjdGlvbi5Ub3ApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgaGFuZGxlU2V0RGlyZWN0aW9uKERpcmVjdGlvbi5MZWZ0LCBEaXJlY3Rpb24uUmlnaHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgIGhhbmRsZVNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQsIERpcmVjdGlvbi5MZWZ0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcbiAgfSwgW10pO1xuXG4gIC8vID8uIGlzIGNhbGxlZCBvcHRpb25hbCBjaGFpbmluZ1xuICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9PcHRpb25hbF9jaGFpbmluZ1xuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IFxuICAgICEhZm9vZC5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcblxuICBjb25zdCBpc1NuYWtlID0gKHsgeCwgeSB9KSA9PlxuICAgICEhc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XG5cbiAgcmV0dXJuIHtpc0Zvb2QsIGlzU25ha2UsIHNjb3JlOiBzbmFrZS5sZW5ndGggLSBnZXREZWZhdWx0U25ha2UoKS5sZW5ndGh9O1xufVxuXG5jb25zdCBTbmFrZSA9ICgpID0+IHtcbiAgY29uc3Qge2lzRm9vZCwgaXNTbmFrZSwgc2NvcmV9ID0gdXNlSG9va3MoKTtcblxuICBjb25zdCBjZWxscyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcuaGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCB0eXBlID0gQ2VsbFR5cGUuRW1wdHk7XG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuRm9vZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNTbmFrZSh7IHgsIHkgfSkpIHtcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaCg8Q2VsbCBrZXk9e2Ake3h9LSR7eX1gfSB4PXt4fSB5PXt5fSB0eXBlPXt0eXBlfSAvPik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSB9fVxuICAgICAgPlxuICAgICAgICBTY29yZToge3Njb3JlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBDb25maWcuaGVpZ2h0ICogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjZWxsc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNuYWtlX2NvbnRhaW5lcl9fMWhldWpcIixcblx0XCJoZWFkZXJcIjogXCJTbmFrZV9oZWFkZXJfXzNreUZ6XCIsXG5cdFwiZ3JpZFwiOiBcIlNuYWtlX2dyaWRfXzJZMVJzXCIsXG5cdFwiY2VsbENvbnRhaW5lclwiOiBcIlNuYWtlX2NlbGxDb250YWluZXJfXzMxU0hFXCIsXG5cdFwiY2VsbFwiOiBcIlNuYWtlX2NlbGxfXzF5RE1qXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVzZUhvb2tzIiwiZ2V0RGVmYXVsdFNuYWtlIiwiZ3JpZCIsInNuYWtlIiwic2V0U25ha2UiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJmb29kIiwic2V0Rm9vZCIsImNvdW50ZXIiLCJ0aW1lQ291bnRlciIsInNldFRpbWVDb3VudGVyIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJwb3AiLCJmaW5kIiwicGl4ZWwiLCJhbGVydCIsImxlbmd0aCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaXNGb29kIiwiZCIsIm5ld1RhaWwiLCJuZXdGb29kIiwiaXNTbmFrZSIsInByZXYiLCJmaWx0ZXIiLCJpdGVtIiwibW9kaWZ5Rm9vZCIsImFyciIsIm1hcCIsIml0IiwicHVzaCIsImhhbmRsZVNldERpcmVjdGlvbiIsIm9wcG9zaXRlRGlyZWN0aW9uIiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvbiIsInNjb3JlIiwiY2VsbHMiLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=