import { ActionTypes } from "../constants/action-type";

const initialState = {
    products : [],
    product:{}
}

export const basketReducers = (state = initialState,{type,payload} ) => {
   switch (type) {
       case ActionTypes.ADD_TO_CART:
           return {...state.product , product:payload }
           
        case ActionTypes.SET_BASKET:
         
            return{...state , products: payload}   
            
   
       default:
           return state;
   }
}