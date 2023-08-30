// import React from "react";
import "./App.css";
import Calc from "./Calc";
import Counter from "./Counter";
import OnOffSwitch from "./OnOffSwitch";
import Simple from "./SImple";
import Toggle from "./Toggle";
import TopMenu from "./TopMenu";

function App() {
  const menuItems = ["Home", "About", "Contact", "Careers", "Support"];
  return (
    <div>
      <Counter />
      <Simple />
      <OnOffSwitch />
      <Calc />
      <Toggle />
      <hr />
      <TopMenu items={menuItems} title="Any Title" />
    </div>
  );
  // return React.createElement("h2", {class: 'bold'}, "Todo List");
}

export default App;
