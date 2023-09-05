import { Provider } from "react-redux";
import { store } from "./redux/store";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Provider store={store}>
      <h2>Contact List</h2>
      <ContactList />
    </Provider>
  );
}

export default App;
