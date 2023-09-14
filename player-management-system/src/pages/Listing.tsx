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
          <div>
            <img src={player.picture} height={30} width={30} />
          </div>
          <div className="bold">{player.name}</div>
          <div>{player.age}</div>
        </div>
      ))}
      <div>
        {/* <a
          onClick={() =>
            dispatch(setCurrentPage(currentPage === 1 ? 1 : currentPage - 1))
          }
          className="link"
        >
          prev
        </a> */}
        {currentPage > 1 ? (
          <a
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            className="link"
          >
            prev
          </a>
        ) : (
          <span>prev</span>
        )}
        {pages.map((page) => (
          <a
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={currentPage === page ? "active link" : "link"}
          >
            {page}
          </a>
        ))}
        {currentPage < pages.length ? (
          <a
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            className="link"
          >
            next
          </a>
        ) : (
          <span>next</span>
        )}
      </div>
    </div>
  );
}

export default Listing;
