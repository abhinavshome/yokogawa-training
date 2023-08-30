import { useState } from "react";

function Calc() {
  const [calcString, setCalcString] = useState("");

  function handleBtnClick(key: string) {
    setCalcString(calcString + key);
  }

  function evaluate() {
    const result = eval(calcString);
    setCalcString(result);
  }

  function clearAll() {
    setCalcString("");
  }

  return (
    <div>
      <h2>Calc</h2>
      <div>{calcString}</div>
      <button
        onClick={function () {
          handleBtnClick("1");
        }}
      >
        1
      </button>
      <button onClick={() => handleBtnClick("2")}>2</button>
      <button onClick={() => handleBtnClick("3")}>3</button>
      <br />
      <button onClick={() => handleBtnClick("4")}>4</button>
      <button onClick={() => handleBtnClick("5")}>5</button>
      <button onClick={() => handleBtnClick("6")}>6</button>
      <br />
      <button onClick={() => handleBtnClick("7")}>7</button>
      <button onClick={() => handleBtnClick("8")}>8</button>
      <button onClick={() => handleBtnClick("9")}>9</button>
      <br />
      <button onClick={() => handleBtnClick("+")}>+</button>
      <button onClick={() => handleBtnClick("-")}>-</button>
      <button onClick={() => handleBtnClick("*")}>*</button>
      <button onClick={() => handleBtnClick("/")}>/</button>
      <br />
      <button onClick={clearAll}>C</button>
      <button onClick={evaluate}>=</button>
    </div>
  );
}

export default Calc;
