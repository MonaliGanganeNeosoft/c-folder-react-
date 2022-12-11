// import React, { useState } from "react";
// import {
//   decrement,
//   increment,
//   incrementAsync,
//   selectCount,
// } from "./CounterSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Counter1 = () => {
//   //   const [count, setCount] = useState(0);
//   const [count, setCount] = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const increMent = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const decreMent = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
//   return (
//     <div>
//       {/* <button onClick={increMent}>+</button>
//       {count}
//       <button onClick={decreMent}>-</button> */}
//       <button onClick={() => dispatch(increment())}>+</button>
//       {count}
//       <button onClick={() => dispatch(decrement())}>-</button>
//       {/* <button
//         onClick={() => dispatch(incrementAsync(Number(incrementbyAmount)))}
//       >
//         Add async
//       </button> */}
//     </div>
//   );
// };

// export default Counter1;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./CounterSlice";

export function Counter1() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
