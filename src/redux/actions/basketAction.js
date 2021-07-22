import { ActionTypes } from "../constants/action-type";
import { addItem, getProductsInBasket } from "../../api/basket";

export const addToCart = (item) => {
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:item
    }
}

export const setBasket = (product) => {
    return {
        type:ActionTypes.SET_BASKET,
        payload:product
    }
}

export const addItems = (item) => async(dispatch) => {
  await addItem(item);
  dispatch(addToCart(item))
//   console.log(item);
}

export const getItems = () => async(dispatch) => {
    let res = await getProductsInBasket();
    // console.log(res.data);
    dispatch(setBasket(res.data))
}