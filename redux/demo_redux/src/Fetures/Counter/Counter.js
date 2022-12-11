import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increMent = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreMent = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <button onClick={increMent}>+</button>
      {count}
      <button onClick={decreMent}>-</button>
    </div>
  );
};

export default Counter;
