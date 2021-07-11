
import { getAProductById, getAllProducts,deleteProductById, createAProduct, updateProduct } from "../../api/products";

import { ActionTypes } from "../constants/action-type.js";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: id
  }
}

export const editeProduct = (product) => {
  return {
    type:ActionTypes.EDIT_SELECTED_PRODUCT,
    payload:product,
  }
}

export const  createProduct = (data) => {
  return {
    type:ActionTypes.CREATE_PRODUCT,
    payload:data,
  }
}
// export const getProducts = () => (dispatch, getState) => {
//   getAllProducts().then((res) => {
//     console.log(res.data);
//     dispatch(setProducts(res.data));
//   });
// };

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  dispatch(setProducts(res.data));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  dispatch(selectedProduct(res));
};

///delete

export const deleteProduct = (id) => async(dispatch) => {
  await deleteProductById(id);
  dispatch(removeProduct(id))
}


export const createNewProduct = (data) => async (dispatch) => {
   await createAProduct(data);
   dispatch(createProduct(data))
}