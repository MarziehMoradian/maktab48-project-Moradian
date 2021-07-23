import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import {orderReducers} from './orderReducers'
import  {basketReducers}  from "./basketReducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
    whiteList: ['basket']
}
 export const rootReducer = combineReducers({
  
    allProducts: productReducers,
    allOrders:orderReducers,
    basket:basketReducers,

 })
export const reducers = combineReducers({
    allProducts: productReducers,
    allOrders:orderReducers,
    basket:basketReducers,

})

export default persistReducer(persistConfig,reducers)