import { loadState } from "./../Store/localStorage";
const persistedState = loadState("shoppingCart");

 
const defaultState = {
  shoppingCart: persistedState
};

 
export default (state = defaultState, action) => {
  const cartItems = [...state.shoppingCart];
  switch (action.type) {
    case "ADD_TO_CART":
      if (cartItems.filter(a => a._id === action.product._id).length > 0) {
        cartItems.map(a => {
          if (a._id === action.product._id) {
            a.count++;
          }
          return a;
        });
      } else {
        const newModel = {
          _id: action.product._id,
          productName: action.product.productName,
          price: action.product.price,
          count: 1
        };
        cartItems.push(newModel);
      }
      return Object.assign({}, state, {
        shoppingCart: cartItems
      });

 
    case "REMOVE_CART":
      const filterList = cartItems.filter(a => a._id !== action._id);
      return Object.assign({}, state, {
        shoppingCart: filterList
      });

 
    case "DECREMENT_CART":
      cartItems.map(a => {
        if (a._id === action._id) {
          if (a.count > 1) {
            a.count--;
          }
        }
        return a;
      });

 
      return Object.assign({}, state, {
        shoppingCart: cartItems
      });

 
    case "INCREMENT_CART":
      cartItems.map(a => {
        if (a._id === action._id) {
          a.count++;
        }
        return a;
      });

 
      return Object.assign({}, state, {
        shoppingCart: cartItems
      });

 
    default:
      return state;
  }
};