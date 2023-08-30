import Todo from "../types/Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (todoId: number) => void;
};

function TodoList(props: TodoListProps) {
  const listOfTodos: Todo[] = props.todos;
  const onToggle = props.onToggle;
  //   Todo[] listOfTodos = props.todos
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Done</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listOfTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
