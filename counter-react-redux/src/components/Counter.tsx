import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";
import { countSelector } from "../redux/reducers/counterReducer";

function Counter() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Counter</h3>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default Counter;
