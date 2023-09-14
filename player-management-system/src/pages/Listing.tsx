import { useDispatch, useSelector } from "react-redux";
import {
  currentPageSelector,
  pagesSelector,
  playerSelector,
} from "../redux/reducers/playerReducer";
import { Player } from "../types";
import axios from "axios";
import { useEffect } from "react";
import Config from "../config";
import { loadPlayers, loadTotalCount } from "../redux/actions/playerActions";
import { setCurrentPage } from "../redux/actions/playerActions";

function Listing() {
  const players = useSelector(playerSelector);
  const pages = useSelector(pagesSelector);
  const currentPage = useSelector(currentPageSelector);

  const dispatch = useDispatch();

  useEffect(
    function () {
      // async function fetchPlayers() {
      //   const res = await axios.get(Config.apiUrl + "?_page=1");
      //   console.log(res.headers);
      //   const count = parseInt(res.headers["x-total-count"]);
      //   dispatch(loadTotalCount(count));
      //   dispatch(loadPlayers(res.data));
      // }

      // dispatch(setCurrentPage(1));

      loadPage(currentPage);
    },
    [currentPage]
  );

  const loadPage = async (page) => {
    const res = await axios.get(Config.apiUrl + "?_page=" + page);
    console.log(res.headers);
    const count = parseInt(res.headers["x-total-count"]);
    dispatch(loadTotalCount(count));
    dispatch(loadPlayers(res.data));
  };

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
      <div>
        {pages.map((page) => (
          <a
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={currentPage === page ? "active link" : "link"}
          >
            {page}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Listing;
