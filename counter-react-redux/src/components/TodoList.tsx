import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../redux/reducers/todosReducer";
import { useRef } from "react";
import { addTodo } from "../redux/actions/todosActions";

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

  return (
    <div>
      <input type="text" ref={labelRef} />
      <button onClick={handleAddBtnClick}>Add</button>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>{todo.label}</div>
      ))}
    </div>
  );
}

export default TodoList;
