const INITIAL_STATE = [
    { id: 1, label: "Bring Milk", done: false },
    { id: 2, label: "CLean house", done: false },
]

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodo = {
                id: state.length + 1,
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
        case "REMOVE_TODO": {
            return state;
        }
        default:
            return state;
    }
}

export function todosSelector(state) {
    return state.todos
}

export default todosReducer;