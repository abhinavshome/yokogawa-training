// import React from "react";
import "./App.css";
import Calc from "./Calc";
import Counter from "./Counter";
import OnOffSwitch from "./OnOffSwitch";
import Simple from "./SImple";
import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <Counter />
      <Simple />
      <OnOffSwitch />
      <Calc />
      <Toggle />
    </div>
  );
  // return React.createElement("h2", {class: 'bold'}, "Todo List");
}

export default App;
