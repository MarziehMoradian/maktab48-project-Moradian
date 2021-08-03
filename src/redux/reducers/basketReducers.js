import { ActionTypes } from "../constants/action-type";

const initialState = {

    cardProducts:[]
}

export const basketReducers = (state = initialState,{type,payload} ) => {
   switch (type) {
       case ActionTypes.ADD_TO_CART:
           return {...state.cardProducts,cardProducts:payload }
           
        case ActionTypes.REMOVE_CART:
            console.log(state.cardProducts);
            return {
                ...state,
                cardProducts: state.cardProducts.filter(({id }) => id !== payload),
              };
            // return {state.cardProducts.filter((item, index) => index !== payload)};

        case ActionTypes.SET_CART:
                return { ...state.cardProducts, cardProducts: payload };
                
            
   
       default:
           return state;
   }
}

// import { loadState } from "./../store/localStorage";
// import { ActionTypes } from "../constants/action-type";
// const persistedState = loadState("shoppingCart");
 
// const defaultState = {
//   shoppingCart: persistedState,
//    products : []
// };

 
// export default (state = defaultState, action) => {
//   const cartItems = [...state.shoppingCart];
//   switch (action.type) {
//     case "ADD_TO_CART":
//       // if (cartItems.filter(a => a.id === action.product.id).length > 0) {
//       //   cartItems.map(a => {
//       //     if (a.id === action.product.id) {
//       //       a.count++;
//       //     }
//       //     return a;
//       //   });
//       // } else {
//       //   const newModel = {
//       //     id: action.product.id,
//       //     productName: action.product.title,
//       //     price: action.product.price,
//       //     count: 1
//       //   };
//       //   cartItems.push(newModel);
//       // }
//       // return Object.assign({}, state, {
//       //   shoppingCart: cartItems
//       // });
//       return{

//         ...state,
//           products: state.products.map(product =>
//           product.id === action.id ? {...product, selected: true} : product,

//         ),
//       }

 
//     case "REMOVE_CART":
//       const filterList = cartItems.filter(a => a.id !== action.id);
//       return Object.assign({}, state, {
//         shoppingCart: filterList
//       });

 
//     case "DECREMENT_CART":
//       cartItems.map(a => {
//         if (a.id === action.id) {
//           if (a.count > 1) {
//             a.count--;
//           }
//         }
//         return a;
//       });

 
//       return Object.assign({}, state, {
//         shoppingCart: cartItems
//       });

 
//     case "INCREMENT_CART":
//       cartItems.map(a => {
//         if (a.id === action.id) {
//           a.count++;
//         }
//         return a;
//       });

 
//       return Object.assign({}, state, {
//         shoppingCart: cartItems
//       });

 
//     default:
//       return state;
//   }
// };




// const initialState = {
//   cartProducts: [],
//   shoppingCart: persistedState,
// };

// export const basketReducers = (state = initialState, action) => {
//   const cartItems = [...state.shoppingCart];
//   switch (action.type) {
//     case ActionTypes.ADD_TO_CART:
     
//        if (cartItems.filter(a => a.id === action.product.id).length > 0) {
//                 cartItems.map(a => {
//                   if (a.id === action.product.id) {
//                     a.count++;
//                   }
//                   return a;
//                 });
//               } else {
//                 const newModel = {
//                   id: action.product.id,
//                   productName: action.product.title,
//                   price: action.product.price,
//                   count: 1
//                 };
//                 cartItems.push(newModel);
//               }
//               return Object.assign({}, state, {
//                 shoppingCart: cartItems
//               });
//               // return{
        
//               //   ...state,
//               //     products: state.products.map(product =>
//               //     product.id === action.id ? {...product, selected: true} : product,
        
//               //   ),
//               // }
//               case ActionTypes.REMOVE_CART:
//                       const filterList = cartItems.filter(a => a.id !== action.id);
//                       return Object.assign({}, state, {
//                         shoppingCart: filterList
//                       });
                
//     default:
//       return state;
//   }
// };


// const initialState = []


// export const basketReducers = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADD_TO_CART:
//             // return [...state,payload]
//             const tempItem = state.find((item) => item.title === payload.title);
//             console.log(tempItem);
//             console.log(state);
//             if (tempItem) {
//                 let item = state.splice(state.findIndex(item => item.title === payload.title), 1, payload)
//                 console.log(item);
//                 return state
//                 // return state.splice(state.findIndex(item=>item.title === payload.title),1,payload)     
//             } else {
//                 return [...state, payload]
//             }
//         case ActionTypes.REMOVE_CART_ITEM:
//             return state.filter((item, index) => index !== payload);
//         //    case ActionTypes.TOGGLE_CART_ITEM:
//         //     return state.splice(state.findIndex(item=>item.title === payload.title),1,payload)

//         default:
//             return state;
//     }
// }