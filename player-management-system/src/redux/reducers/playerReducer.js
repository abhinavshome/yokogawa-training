import { produce } from "immer"
import { SET_CURRENT_PAGE, LOAD_PLAYERS, LOAD_TOTAL_COUNT } from "../actions/playerActions";


const INITIAL_STATE = {
    list: [],
    paginatedList: [],
    totalCount: 0,
    currentPage: 1
}

function playerReducer(state = INITIAL_STATE, action) {
    return produce(state, function (draft) {
        switch (action.type) {
            case LOAD_PLAYERS: {
                draft.list = action.data;
                break;
            }
            case LOAD_TOTAL_COUNT: {
                draft.totalCount = action.data;
                break;
            }
            case SET_CURRENT_PAGE: {
                draft.currentPage = action.data;
                break;
            }
            default:
                break;
        }
    });
}

export function playerSelector(state) {
    return state.players.list;
}

export function playerChartSelector(state) {
    const pieChartData = {
        labels: [
            "Under 19",
            "Players in 20s",
            "Players in 30s",
            "Players in 40s",
            "Retired Players",
        ],
        datasets: [
            {
                label: "Age groups",
                data: [],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const players = state.players.list;
    const groups = [10, 20, 30, 40, 50];

    const data = groups.map(
        (g) => players.filter((p) => Math.floor(p.age / 10) * 10 == g).length
    );
    pieChartData.datasets[0].data = data;
    return pieChartData
}

export function playerReportSelector(state) {
    const groups = [10, 20, 30, 40, 50];
    const players = state.players.list;
    return groups.map(
        (g) => ({ group: g, players: players.filter((p) => Math.floor(p.age / 10) * 10 == g) })
    );
}

export function pagesSelector(state) {
    const count = state.players.totalCount;
    const numOfPages = Math.ceil(count / 10)
    const pages = new Array(numOfPages).fill(0).map((a, i) => i + 1);
    return pages
}

export function currentPageSelector(state) {
    return state.players.currentPage;
}

export default playerReducer