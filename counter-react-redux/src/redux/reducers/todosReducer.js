const INITIAL_STATE = [
    { id: 1, label: "Bring Milk", done: false },
    { id: 2, label: "CLean house", done: false },
]

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodos = [...state];
            const newTodo = {
                id: state.length + 1,
                label: action.data,
                done: false
            };
            newTodos.push(newTodo);
            return newTodos;
        }
        case "REMOVE_TODO": {
            return state;
        }
        default:
            return state;
    }
};

export function todosSelector(state) {
    return state.todos
};

export default todosReducer;