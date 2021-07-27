import { ActionTypes } from "../constants/action-type";
import { addItem, getProductsInBasket } from "../../api/basket";
// import { loadState } from "./../Store/localStorage";
// const persistedState = loadState("shoppingCart");

 
// const defaultState = {
//   shoppingCart: persistedState
// };

// export const addToCart = (item) => {
//     return{
//         type:ActionTypes.ADD_TO_CART,
//         payload:item
//     }
// }

export const setCarts = (product) => {
    return {
        type:ActionTypes.SET_BASKET,
        payload:product
    }
}

// // export const addItems = (item) => async(dispatch) => {
// //   await addItem(item);
// //   dispatch(addToCart(item))
// // //   console.log(item);
// // }

// export const getItems = () => async(dispatch) => {
//     let res = await getProductsInBasket();
//     // console.log(res.data);
//     dispatch(setBasket(res.data))
// }

// export const setCartProducts = product => ({
//     type: "ADD_TO_CART",
//     product
//   });
  
   
//   export const incrementCart = _id => ({
//     type: "INCREMENT_CART",
//     _id
//   });
  
   
//   export const decrementCart = _id => ({
//     type: "DECREMENT_CART",
//     _id
//   });
  
   
//   export const removeFromCart = _id => ({
//     type: "REMOVE_CART",
//     _id
//   });



export const setCartProducts = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const deleteAProduct = (id) =>{
  return{
    type: ActionTypes.REMOVE_CART,
    payload:id,
  }
}

export const addToCart = (product) => (dispatch) => {
  dispatch(setCartProducts(product));
};

export const deleteFromCart = (id) => (dispatch) =>{
dispatch(deleteAProduct(id));
}
  /************************************************************ */
  

//   export function addToCart(cartItem){
//       return {
//           type:ActionTypes.ADD_TO_CART,
//           payload:cartItem
//       }
//   }
//   export function removeCart(id){
//       return{
//           type:ActionTypes.REMOVE_CART_ITEM,
//           payload:id
//       }
  
//   }