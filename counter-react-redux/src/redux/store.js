import logger from "./middlewares/logger";
import reducers from "./reducers";
import { applyMiddleware, legacy_createStore as createStore } from 'redux'

function makeStore() {
    const store = createStore(reducers, applyMiddleware(logger))
    return store
}

export default makeStore;