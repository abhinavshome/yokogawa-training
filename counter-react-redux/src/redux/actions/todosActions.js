export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        data: todo
    };
}

export function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        data: todoId
    };
}

export function toggleTodo(todoId) {
    return {
        type: TOGGLE_TODO,
        data: todoId
    };
}