import { useDispatch, useSelector } from "react-redux";
import { playerSelector } from "../redux/reducers/playerReducer";
import { useEffect } from "react";
import { loadPlayers } from "../redux/actions/playerActions";

type Player = {
  id?: number;
  name: string;
  age: number;
};

function Listing() {
  const players = useSelector(playerSelector);
  const dispatch = useDispatch();

  useEffect(function () {
    async function fetchPlayers() {
      const res = await fetch("http://localhost:3000/players");
      const data = await res.json();
      dispatch(loadPlayers(data));
    }

    fetchPlayers();
  }, []);
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
