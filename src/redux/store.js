import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

const middlewareEnhancer = applyMiddleware(
    // logger,
    ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducers, undefined, composedEnhancers);

export default store;