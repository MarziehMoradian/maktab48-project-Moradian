import { ActionTypes } from "../constants/action-type";
import { loadState } from "../store/localStorage";
const persistedState = loadState("shoppingCart");


const initialState = {
    products: [],
    selectedProduct: {},
    data: {},
    shoppingCart: persistedState
    
};


export const productReducers = (state = initialState, action) => {
  const cartItems = [...state.shoppingCart]; 
  switch (action.type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: action.payload };
  
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, selectedProduct: action.payload };
      
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        
        return { 
          products:state.products.filter(({id})=> id !== action.payload),
          
        }
      case ActionTypes.CREATE_PRODUCT:
        return {...state, data:action.payload}

      
      case ActionTypes.EDIT_SELECTED_PRODUCT:
        return {...state, products:[...state.products,action.payload]  }

        default:
          return state;
    }
  };