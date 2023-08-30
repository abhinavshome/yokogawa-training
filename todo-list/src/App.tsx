import TodoList from "./components/TodoList";
import todos from "./data/todos.json";

function App() {
  return (
    <>
      <h2>Todo List</h2>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
