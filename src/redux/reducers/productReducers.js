import { ActionTypes } from "../constants/action-type";



const initialState = {
    products: [],
    selectedProduct: {},
    data: {},
    searchProduct:[]
  
  
    
};


export const productReducers = (state = initialState, action) => {
  
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
        case ActionTypes.SET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: state.products.filter(
          (item) => item.category === action.payload
        ),
      };
        case ActionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: state.products.filter(
          (item) => item.title === action.payload
        ),
      };
        default:
          return state;
    }
  };