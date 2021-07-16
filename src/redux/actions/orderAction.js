import { ActionTypes } from "../constants/action-type.js";
import { createOrder ,getbaskets} from "../../api/basket.js";

export const createOrders = (product) => {
    return {
        type:ActionTypes.CREATE_ORDER,
        payload: product
    }
}
export const setOrder= (products) => {
    return {
        type:ActionTypes.SET_ORDERS,
        payload: products
    }
}



export const setOrders = () => async(dispatch) =>{
    let res =await createAOrder();
    dispatch(setOrder(res))
}

export const createAOrder = (data) => async(dispatch) => {
    await createOrder(data);
    dispatch(createOrders(data))
}