import { composeWithDevTools } from "redux-devtools-extension";
import  reducers from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(reducers, undefined, composedEnhancers);
export const persistor = persistStore(store)
export default {store , persistor};