// import React from "react";
import "./App.css";
import Counter from "./Counter";
import OnOffSwitch from "./OnOffSwitch";
import Simple from "./SImple";

function App() {
  return (
    <div>
      <Counter />
      <Simple />
      <OnOffSwitch />
    </div>
  );
  // return React.createElement("h2", {class: 'bold'}, "Todo List");
}

export default App;
