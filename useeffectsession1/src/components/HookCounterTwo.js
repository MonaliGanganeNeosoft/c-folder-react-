import React, { useState, useEffect } from "react";

export default function HookCounterTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating document title");
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </>
  );
}
