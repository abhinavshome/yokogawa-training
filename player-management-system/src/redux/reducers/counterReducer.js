import { DECREMENT, INCREMENT, INCREMENT_BY } from "../actions/counterActions";

const INITIAL_STATE = 0;
function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case INCREMENT_BY:
            return state + action.data;
        default:
            return state;
    }
}

export function countSelector(state) {
    return state.count;
}

export default counterReducer;