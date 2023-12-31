import axios from "axios";
import { useState } from "react";
import Config from "../config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/reducers/authReducer";

function AddPlayer() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const auth = useSelector(authSelector);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name: name,
      age: age,
    };

    await axios.post(Config.addPlayerUrl, newPlayer, {
      headers: { Authorization: "Bearer " + auth.token },
    });
    navigate("/listing");
  };

  return (
    <div className="player-form">
      <div className="title">Add a player</div>
      Name: {name} <br />
      Age: {age}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            name="age"
            type="text"
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddPlayer;
