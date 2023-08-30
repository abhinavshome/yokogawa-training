import { useState } from "react";
import TodoList from "./components/TodoList";
import todosFromBE from "./data/todos.json";

function App() {
  const [todos, setTodos] = useState(todosFromBE);

  const toggleTodo = (todoId: number) => {
    const newTodos = [...todos];
    const todoToChange = newTodos.find((todo) => todo.id === todoId);
    if (todoToChange) {
      todoToChange.done = !todoToChange.done;
    }
    setTodos(newTodos);
  };

  return (
    <>
      <h2>Todo List</h2>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </>
  );
}

export default App;
