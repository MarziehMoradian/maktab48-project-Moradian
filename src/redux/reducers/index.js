import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import {orderReducers} from './orderReducers'
import  {basketReducers}  from "./basketReducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['baskets']
}
// const basketPersistConfig = {
//     key: 'basket',
//     storage: storage,
//    whitelist: ['basket']
//   }
  export const reducers = combineReducers({
         allProducts: productReducers,
         allOrders:orderReducers,
         baskets:basketReducers,
     
     })
     // const persistedReducer = persistReducer(persistConfig,reducers)
     
      // export default persistedReducer
      // export const reducers = combineReducers({
       
      //    allProducts: productReducers,
      //    allOrders:orderReducers,
      //    baskets:basketReducers,
     
      // })

      export default persistReducer(persistConfig , reducers);