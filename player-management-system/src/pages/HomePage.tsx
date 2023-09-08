import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlayerPieChart from "../components/PlayerPieChart";
import Config from "../config";
import { loadPlayers } from "../redux/actions/playerActions";
import PlayerReport from "../components/PlayerReport";

function HomePage() {
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
    <>
      <div className="title">Dashboard</div>
      <div className="flex">
        <div className="chart">
          <PlayerPieChart />
        </div>
        <div className="report">
          <PlayerReport />
        </div>
      </div>
    </>
  );
}

export default HomePage;
