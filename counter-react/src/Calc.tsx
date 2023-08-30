import { useState } from "react";

function Calc() {
  const [calcString, setCalcString] = useState("");

  function handleBtnClick(key: string) {
    setCalcString(calcString + key);
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
      <button onClick={() => handleBtnClick("4")}>4</button>
    </div>
  );
}

export default Calc;
