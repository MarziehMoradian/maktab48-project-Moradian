import { ActionTypes } from "../constants/action-type";



export const setCarts = (product) => {
    return {
        type:ActionTypes.SET_BASKET,
        payload:product
    }
}

export const editeProduct = (product) => {
  return {
    type:ActionTypes.EDIT_SELECTED_PRODUCT_BASKET,
    payload:product,
  }
}

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

export const deleteAllProduct = (products) =>{
  return{
    type:ActionTypes.REMOVE_ALL,
    payload:products
  }
  
}

/************************************************************ */
export const addToCart = (product,v) => (dispatch) => {
  dispatch(setCartProducts(product,v));
};

export const deleteAll = () =>(dispatch) =>  {
  dispatch(deleteAllProduct())
}

export const update = (product) => async (dispatch) => {
  
  dispatch(editeProduct(product))
}
export const deleteFromCart = (id) => (dispatch) =>{
dispatch(deleteAProduct(id));
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT_IN_BASKET,
    payload: product,
  };
};
export const getAProductInBasket = (product) => async (dispatch) => {
  dispatch(selectedProduct(product));
  
};
