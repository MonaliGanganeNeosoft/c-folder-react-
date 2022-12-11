import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <button onClick={() => setCount(count + 1)}>Click {count} times</button>
  );
}

export default HookCounterOne;
