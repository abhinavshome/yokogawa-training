import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";

const reducers = combineReducers({
    count: counterReducer,
    todos: todosReducer
});

export default reducers