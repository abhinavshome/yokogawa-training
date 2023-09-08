import { useDispatch, useSelector } from "react-redux";
import { playerSelector } from "../redux/reducers/playerReducer";
import { Player } from "../types";
import axios from "axios";
import { useEffect } from "react";
import Config from "../config";
import { loadPlayers } from "../redux/actions/playerActions";

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
