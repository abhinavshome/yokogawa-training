import axios from "axios";
import { useRef } from "react";
import Config from "../config";
import { useNavigate } from "react-router-dom";

function AddPlayer() {
  const playerForm = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(playerForm.current);
    const newPlayer = Object.fromEntries(data.entries());
    await axios.post(Config.apiUrl, newPlayer);
    navigate("/listing");
  };

  return (
    <div className="player-form">
      <div className="title">Add a player</div>
      <form onSubmit={handleSubmit} ref={playerForm}>
        <div>
          <label>Name</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label>Age</label>
          <input name="age" type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddPlayer;
