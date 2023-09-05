import { Provider } from "react-redux";
import Counter from "./components/Counter";
import makeStore from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  const store = makeStore();
  return (
    <Provider store={store}>
      <h2>Counter React Redux</h2>
      <Counter />
      <h3>Todos</h3>
      <TodoList />
    </Provider>
  );
}

export default App;
