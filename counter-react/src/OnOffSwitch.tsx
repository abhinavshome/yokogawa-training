import { useState } from "react";
import "./OnOffSwitch.css";

function OnOffSwitch() {
  const [switchState, setSwitchState] = useState(false);

  const switchOn = () => setSwitchState(true);
  const switchOff = () => setSwitchState(false);

  return (
    <div>
      <div className={switchState ? "green-light" : "red-light"}></div>
      <button onClick={switchOn}>ON</button>
      <button onClick={switchOff}>OFF</button>
    </div>
  );
}

export default OnOffSwitch;
