import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    players: playerReducer,
    auth: authReducer
});

export default reducers