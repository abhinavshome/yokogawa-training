import { combineReducers } from "redux";
import contactListReducer from "./contactListReducer";

const reducers = combineReducers({
    contacts: contactListReducer
});

export default reducers