import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todosActions";

const INITIAL_STATE = {
    items: [
        { id: 1, label: "Bring Milk", done: false },
        { id: 2, label: "CLean house", done: false },
    ],
    total: 2
}

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO: {
            const ids = state.items.map(todo => todo.id);
            const newTodo = {
                // id: Date.now(),
                id: Math.max(...ids) + 1,
                label: action.data,
                done: false
            };

            // Option 1
            const newTodos = [...state.items];
            newTodos.push(newTodo);
            return { ...state, items: newTodos, total: newTodos.length };

            // Option 2
            // return state.concat(newTodo)

            // Option 3
            // return [newTodo, ...state]
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

export function todoListSelector(state) {
    return state.todos.items
}

export function totalTodosSelector(state) {
    return state.todos.total
}

export default todosReducer;