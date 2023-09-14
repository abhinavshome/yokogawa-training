import { produce } from "immer";
import { LOGOUT, SET_CURRENT_USER_AND_TOKEN } from "../actions/authActions";

const INITIAL_STATE = {
    loggedIn: false,
    token: null,
    currentUser: null
};

function authReducer(state = INITIAL_STATE, action) {
    return produce(state, function (draft) {
        switch (action.type) {
            case SET_CURRENT_USER_AND_TOKEN: {
                draft.loggedIn = true;
                draft.token = action.data.accessToken;
                draft.currentUser = action.data.user;
                break;
            }
            case LOGOUT: {
                draft.loggedIn = false;
                draft.token = null;
                draft.currentUser = null;
                break;
            }
            default:
                break;
        }
    });
}

export function authSelector(state) {
    return state.auth
}
export default authReducer;
