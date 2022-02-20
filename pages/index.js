import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Snake.module.css";

const Config = {
  height: 20,
  width: 20,
  cellSize: 32,
};

const CellType = {
  Snake: "snake",
  Food: "food",
  Empty: "empty",
};

const Direction = {
  Left: { x: -1, y: 0 },
  Right: { x: 1, y: 0 },
  Top: { x: 0, y: -1 },
  Bottom: { x: 0, y: 1 },
};

const Cell = ({ x, y, type }) => {
  const getStyles = () => {
    switch (type) {
      case CellType.Snake:
        return {
          backgroundColor: "yellowgreen",
          borderRadius: 8,
          padding: 2,
        };

      case CellType.Food:
        return {
          backgroundColor: "darkorange",
          borderRadius: 20,
          width: 32,
          height: 32,
        };

      default:
        return {};
    }
  };
  return (
    <div
      className={styles.cellContainer}
      style={{
        left: x * Config.cellSize,
        top: y * Config.cellSize,
        width: Config.cellSize,
        height: Config.cellSize,
      }}
    >
      <div className={styles.cell} style={getStyles()}></div>
    </div>
  );
};

const getRandomCell = () => ({
  x: Math.floor(Math.random() * Config.width),
  y: Math.floor(Math.random() * Config.width),
});

const Snake = () => {
  const getDefaultSnake = () => [
    { x: 8, y: 12 },
    { x: 7, y: 12 },
    { x: 6, y: 12 },
  ];
  const grid = useRef();

  // snake[0] is head and snake[snake.length - 1] is tail
  const [snake, setSnake] = useState(getDefaultSnake());
  const [direction, setDirection] = useState(Direction.Right);

  const [food, setFood] = useState([{ x: 4, y: 10, counter: 0 }]);
  const [score, setScore] = useState(0);

  const [timeCounter, setTimeCounter] = useState(0);

  // move the snake
  useEffect(() => {
    const runSingleStep = () => {
      setSnake((snake) => {
        const head = snake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        if(newHead.x >= Config.height) newHead.x = 0;
        else if(newHead.x < 0) newHead.x = Config.height - 1;
        else if(newHead.y >= Config.width) newHead.y = 0;
        else if(newHead.y < 0) newHead.y = Config.width - 1;

        // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const newSnake = [...snake];

        // remove tail
        newSnake.pop();

        if(!!newSnake.find(pixel => pixel.x === newHead.x && pixel.y === newHead.y)) {
          setDirection(Direction.Right);
          setFood([{ x: 4, y: 10, counter: 0 }]);
          alert(`Game Over. Your score: ${score}`)
          setScore(0);
          setTimeCounter(0);
          return getDefaultSnake();
        }

        return [newHead, ...newSnake];
      });
    };

    runSingleStep();
    const timer = setInterval(runSingleStep, 300);

    return () => clearInterval(timer);
  }, [direction, food]);

  // update score whenever head touches a food
  useEffect(() => {
    const head = snake[0];
    if (isFood(head)) {
      let d;
      if(direction === Direction.Top) d = Direction.Bottom;
      else if(direction === Direction.Bottom) d = Direction.Top;
      else if(direction === Direction.Left) d = Direction.Right;
      else if(direction === Direction.Right) d = Direction.Left;

      setSnake((snake) => {
        const head = snake[0];
        const newTail = { x: snake[snake.length -1].x + d.x, y: snake[snake.length -1].y + direction.y };

        const newSnake = [...snake, newTail];

        return newSnake;
      });
      
      setScore((score) => {
        return score + 1;
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
  }, [snake]);

  // modify food after 3 and 10 seconds
   useEffect(() => {
    const modifyFood = () => {
      setTimeCounter(prev => {
        setFood(item => {
          const arr = item.map(it => {
            return {...it, counter: it.counter+1};
          });
          
          if((prev + 1) % 3 === 0) {
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


    }

    const timer = setInterval(modifyFood, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleNavigation = (event) => {
      switch (event.key) {
        case "ArrowUp": {
          setDirection(prev => {
            if(prev != Direction.Bottom) return Direction.Top;
            return prev;
          });
          break;
        }

        case "ArrowDown": {
          setDirection(prev => {
            if(prev != Direction.Top) return Direction.Bottom;
            return prev;
          });
          break;
        }

        case "ArrowLeft": {
          setDirection(prev => {
            if(prev != Direction.Right) return Direction.Left;
            return prev;
          });
          break;
        }

        case "ArrowRight": {
          setDirection(prev => {
            if(prev != Direction.Left) return Direction.Right;
            return prev;
          });
          break;
        }
      }
    };
    window.addEventListener("keydown", handleNavigation);

    return () => window.removeEventListener("keydown", handleNavigation);
  }, []);

  // ?. is called optional chaining
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const isFood = ({ x, y }) => 
    food.find((position) => position.x === x && position.y === y);

  const isSnake = ({ x, y }) =>
    snake.find((position) => position.x === x && position.y === y);

  const cells = [];
  for (let x = 0; x < Config.width; x++) {
    for (let y = 0; y < Config.height; y++) {
      let type = CellType.Empty;
      if (isFood({ x, y })) {
        type = CellType.Food;
      } else if (isSnake({ x, y })) {
        type = CellType.Snake;
      }
      cells.push(<Cell key={`${x}-${y}`} x={x} y={y} type={type} />);
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        style={{ width: Config.width * Config.cellSize }}
      >
        Score: {score}
      </div>
      <div
        className={styles.grid}
        style={{
          height: Config.height * Config.cellSize,
          width: Config.width * Config.cellSize,
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Snake), {
  ssr: false,
});
