
import { ActionTypes } from "../constants/action-type";

const initialState = {
  orders: [{}],
  order:{},
};

export const orderReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DELIVERED_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypes.SET_NOTDELIVERED_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypes.DELIVERED_ORDER:
      return { ...state.orders, order : payload };
    default:
      return state;
  }
};