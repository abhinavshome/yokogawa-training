import { Provider } from "react-redux";

import ContactList from "./components/ContactList";
import makeStore from "./redux/store";

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <h2>Contact List</h2>
      <ContactList />
    </Provider>
  );
}

export default App;
