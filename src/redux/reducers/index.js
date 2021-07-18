import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import {orderReducers} from './orderReducers'
export const reducers = combineReducers({
    allProducts: productReducers,
    allOrders:orderReducers,
})