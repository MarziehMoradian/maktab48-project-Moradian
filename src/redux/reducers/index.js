import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import {orderReducers} from './orderReducers'
import { basketReducers } from "./basketReducers";
export const reducers = combineReducers({
    allProducts: productReducers,
    allOrders:orderReducers,
    basket:basketReducers,
})