import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
    selectedProduct: {},
    data: {}
};


export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };
  
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, selectedProduct: payload };
      
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        
        return { 
          products:state.products.filter(({id})=> id !== payload),
          
        }
      case ActionTypes.CREATE_PRODUCT:
        return {...state, data:payload}

      
      case ActionTypes.EDIT_SELECTED_PRODUCT:
        return {payload,...state.products }


        default:
        return state;
    }
  };