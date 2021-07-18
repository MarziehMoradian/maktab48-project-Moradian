import React,{useEffect} from 'react'
import OrdersTable from './OrdersTable';
import { useDispatch, useSelector } from "react-redux";
import {setOrders,getDeliveryOrders} from '../../redux/actions/orderAction'
function DeliveryOrder() {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.allOrders.orders);
     
    useEffect(() => {
        dispatch(getDeliveryOrders()); 
        
      }, []);

    return (
        <div>
            <OrdersTable orders={orders} />
        </div>
    )
}

export default DeliveryOrder
