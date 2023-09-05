import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../redux/reducers/todosReducer";
import { useRef } from "react";
import { addTodo, removeTodo, toggleTodo } from "../redux/actions/todosActions";

type Todo = {
  id: number;
  label: string;
  done: boolean;
};

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const labelRef = useRef<HTMLInputElement | null>(null);

  const handleAddBtnClick = () => {
    dispatch(addTodo(labelRef.current == null ? "" : labelRef.current.value));
    if (labelRef.current !== null) {
      labelRef.current.value = "";
    }
  };

  //   const handleDeleteBtnClick = () => {
  //     dispatch(removeTodo());
  //   };

  return (
    <div>
      <input type="text" ref={labelRef} />
      <button onClick={handleAddBtnClick}>Add</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>label</th>
            <th>Done</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.label}</td>
              <td>{todo.done ? "YES" : "NO"}</td>
              <td>
                <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  &part;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
