import { produce } from "immer"

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todosActions";

const INITIAL_STATE = {
    items: [
        { id: 1, label: "Bring Milk", done: false },
        { id: 2, label: "CLean house", done: false },
    ],
    total: 2
};

function todosReducer(prevState = INITIAL_STATE, action) {
    return produce(prevState, function (state) {
        switch (action.type) {
            case ADD_TODO: {
                const ids = state.items.map(todo => todo.id);
                const newTodo = {
                    // id: Date.now(),
                    id: Math.max(...ids) + 1,
                    label: action.data,
                    done: false
                };
                state.items.push(newTodo);
                break;
            }
            case REMOVE_TODO: {
                const indexToRemove = state.items.findIndex(item => item.id === action.data);
                state.items.splice(indexToRemove, 1)
                break;
            }
            case TOGGLE_TODO: {
                const itemToToggle = state.items.find(item => item.id === action.data);
                itemToToggle.done = !itemToToggle.done;
                break;
            }
            default:
                break;
        }
    });
}

export function todoListSelector(state) {
    return state.todos.items
}

export function totalTodosSelector(state) {
    return state.todos.total
}

export default todosReducer;