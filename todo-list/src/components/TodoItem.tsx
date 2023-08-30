import Todo from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (todoId: number) => void;
};

function TodoItem(props: TodoItemProps) {
  const todo = props.todo;
  const onToggle = props.onToggle;

  return (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.label}</td>
      <td>{todo.done ? "DONE" : "NOT DONE"}</td>
      <td>
        <button onClick={() => onToggle(todo.id)}>toggle</button>
      </td>
    </tr>
  );
}

export default TodoItem;
