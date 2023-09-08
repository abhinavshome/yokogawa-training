import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { playerSelector } from "../redux/reducers/playerReducer";
import { useEffect } from "react";
import { loadPlayers } from "../redux/actions/playerActions";
import Config from "../config";

type Player = {
  id?: number;
  name: string;
  age: number;
};

function Listing() {
  const players = useSelector(playerSelector);
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchPlayers() {
        const res = await axios.get(Config.apiUrl);
        dispatch(loadPlayers(res.data));
      }

      fetchPlayers();
    },
    [dispatch]
  );
  return (
    <div>
      <div className="title">All Players</div>
      {players.map((player: Player) => (
        <div key={player.id}>
          <hr />
          <div className="bold">{player.name}</div>
          <div>{player.age}</div>
        </div>
      ))}
    </div>
  );
}

export default Listing;
