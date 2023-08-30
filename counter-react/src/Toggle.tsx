import { useState } from "react";

function Toggle() {
  const [toggleState, setToggleState] = useState(false);

  function changeToggleStatus() {
    // setToggleState(toggleState ? false : true);
    setToggleState(!toggleState);
  }

  return (
    <div>
      <div>{toggleState ? "DONE" : "NOT DONE"}</div>
      <button onClick={changeToggleStatus}>toggle</button>
    </div>
  );
}

export default Toggle;
