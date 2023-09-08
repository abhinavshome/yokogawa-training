import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NoMatch from "./pages/NoMatch";
import Listing from "./pages/Listing";
import { Provider } from "react-redux";
import makeStore from "./redux/store";

function App() {
  const store = makeStore();

  return (
    <>
      <Provider store={store}>
        <h2>Player Management System</h2>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="listing" element={<Listing />} />
            <Route path="about" element={<AboutPage />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
