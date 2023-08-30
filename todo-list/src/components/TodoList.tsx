// import Todo from "../types/Todo";

interface Todo {
  id: number;
  label: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoList(props: TodoListProps) {
  const listOfTodos: Todo[] = props.todos;

  //   Todo[] listOfTodos = props.todos
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Done?</th>
        </tr>
      </thead>
      <tbody>
        {listOfTodos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.label}</td>
            <td>{todo.done ? "DONE" : "NOT DONE"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
