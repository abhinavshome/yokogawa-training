import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todosActions";

const INITIAL_STATE = [
    { id: 1, label: "Bring Milk", done: false },
    { id: 2, label: "CLean house", done: false },
]

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO: {
            const ids = state.map(todo => todo.id);
            const newTodo = {
                // id: Date.now(),
                id: Math.max(...ids) + 1,
                label: action.data,
                done: false
            };

            // Option 1
            // const newTodos = [...state];
            // newTodos.push(newTodo);
            // return newTodos;

            // Option 2
            // return state.concat(newTodo)

            // Option 3
            return [newTodo, ...state]
        }
        case REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.data);
        }
        case TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id === action.data) {
                    return { ...todo, done: !todo.done }
                } else {
                    return todo
                }
            });
        }
        default:
            return state;
    }
}

export function todosSelector(state) {
    return state.todos
}

export default todosReducer;