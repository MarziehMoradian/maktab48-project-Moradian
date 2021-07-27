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



  
// import { applyMiddleware, createStore } from "redux";

// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// // import logger from "redux-logger";
// import { reducers } from "./reducers/index";
// import { loadState } from "../localStorage";

// /*
// * set preloadedState with localStorage
// */
// const persistedState=loadState();

// const middlewareEnhancer = applyMiddleware(ReduxThunk);
// // const middlewareEnhancer = applyMiddleware(logger, ReduxThunk);
// const composedEnhancers = composeWithDevTools(middlewareEnhancer);

// const store = createStore(reducers, persistedState, composedEnhancers);

// export default store;