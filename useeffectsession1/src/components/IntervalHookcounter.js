import React, { useState, useEffect } from "react";

function IntervalHookcounter() {
  const [count, setCount] = useState(0);
  //   const tick = () => {
  //     setCount(count + 1);
  //   };
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //   function doSomething() {
  //     console.log(someProp);
  //   }
  useEffect(() => {
    function doSomething() {
      console.log("hii");
    }
    doSomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  //   }, [count]);
  return <> hook {count}</>;
}

export default IntervalHookcounter;
