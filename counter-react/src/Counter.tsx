// import React from "react";
import { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  // function increase() {
  //   setCount(count + 1);
  // }

  //   const increase = () => setCount(count + 1);
  //   const decrease = () => setCount(count - 1);

  useEffect(
    function () {
      console.log("count changed", count);
    },
    [count]
  );

  return (
    <div>
      <h2>Counter</h2>
      <div className="count">{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
  // return React.createElement("h2", {class: 'bold'}, "Todo List");
}

export default Counter;
