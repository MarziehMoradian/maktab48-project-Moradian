import { ActionTypes } from "../constants/action-type.js";
import { deliveredOrder,createOrder ,getAllOrders,getAOrderById,getNotDeliveryOrder,getDeliveryOrder} from "../../api/basket.js";
import { addTocart } from "./productActions.js";
export const createOrders = (product) => {
    return {
        type:ActionTypes.CREATE_ORDER,
        payload: product
    }
}
export const setOrder= (products) => {
    return {
        type:ActionTypes.SET_ORDERS,
        payload: products
    }
}

export const selectedOrder = (product) => {
    return {
      type: ActionTypes.SELECTED_ORDER,
      payload: product,
    };
  };

  export const selectNotDelivery = (notDeliveryOrder) => {
      return {
          type: ActionTypes.SET_NOTDELIVERED_ORDERS,
          payload:notDeliveryOrder
      }
  }

export const selectDeliveryOrder = (deliveryOrder) => {
    return {
        type:ActionTypes.SET_DELIVERED_ORDERS,
        payload:deliveryOrder
    }
}
// ************************************************************
export const setOrders = () => async(dispatch) =>{
    let res =await getAllOrders();
    dispatch(setOrder(res.data))
   
}

export const createAOrder = (data) => async(dispatch) => {
    await createOrder(data);
    dispatch(createOrders(data))
}

export const getAOrder = (id) => async (dispatch) => {
    let res = await getAOrderById(id);
   
    dispatch(selectedOrder(res.data));
 };

 export const getNotDeliveryOrders =()=> async(dispatch) => {
     let res= await getNotDeliveryOrder ();
     dispatch (selectDeliveryOrder(res.data))

}

export const getDeliveryOrders = () => async (dispatch) => {
    let res = await getDeliveryOrder();
    dispatch(selectDeliveryOrder(res.data))
}
export const deliveryOrder = (order) => {
    return {
      type: ActionTypes.DELIVERED_ORDER,
      payload: order,
    };
  };
export const delivery = (order) => async(dispatch)=>{
    console.log(order);
    await deliveredOrder(order);
    dispatch(deliveryOrder(order));
  }