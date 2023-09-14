export const LOAD_PLAYERS = "LOAD_PLAYERS"
export const LOAD_TOTAL_COUNT = "LOAD_TOTAL_COUNT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function loadPlayers(data) {
    return {
        type: LOAD_PLAYERS,
        // data: data
        data,
    }
}

export function loadTotalCount(count) {
    return {
        type: LOAD_TOTAL_COUNT,
        data: count
    }
}

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        data: page
    }
}


