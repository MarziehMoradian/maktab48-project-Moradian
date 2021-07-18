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
      
        case "ADD_TO_CART":
          if (cartItems.filter(a => a.id === action.product.id).length > 0) {
            cartItems.map((a) => {
              if (a.id === action.product.id) {
                a.count++;
              }
              return (a);
            });
          } else {
            const newModel = {
              id: action.product.id,
              productName: action.product.title,
              price: action.product.price,
              count: 1
            };
            cartItems.push(...state,newModel);
          }
          return Object.assign({}, ...state, {
            shoppingCart: cartItems
        });
    
        
    case "REMOVE_CART":
      const filterList = cartItems.filter(a => a.id !== action.id);
      return Object.assign({}, state, {
        shoppingCart: filterList
      });

 
 
    case "INCREMENT_CART":
      cartItems.map(a => {
        if (a.id === action.id) {
          a.count++;
        }
        return a;
      });

 
      return Object.assign({}, state, {
        shoppingCart: cartItems
      });
    case "DECREMENT_CART":
      cartItems.map(a => {
        if (a.id === action.id) {
          if (a.count > 1) {
            a.count--;
          }
        }
        return a;
      });

        default:
        return state;
    }
  };