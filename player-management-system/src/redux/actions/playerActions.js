export const LOAD_PLAYERS = "LOAD_PLAYERS"

export function loadPlayers(data) {
    return {
        type: LOAD_PLAYERS,
        // data: data
        data,
    }
}