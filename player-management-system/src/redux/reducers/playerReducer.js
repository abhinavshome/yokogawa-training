import { produce } from "immer"
import { LOAD_PLAYERS } from "../actions/playerActions";

const INITIAL_STATE = {
    list: []
}

function playerReducer(state = INITIAL_STATE, action) {
    return produce(state, function (draft) {
        switch (action.type) {
            case LOAD_PLAYERS: {
                draft.list = action.data;
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

export default playerReducer