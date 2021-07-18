import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {getNotDeliveryOrders} from '../redux/actions/orderAction'
import OrdersTable from './OrdersTable';

  
const useStyles = makeStyles((theme) => ({
    
  
    table: {
        height:400,
        width:'50%',
        margin:'30px auto',
   
      color:'#05280e',
      [theme.breakpoints.down('sm')]: {
        width:'100%',
      },
      [theme.breakpoints.between(375,768)]: {
        width:'100%',
      },
     
      [theme.breakpoints.between(768,1024)]: {
        width:'75%',
        // margin:'auto',
      }
    }
}))


const  NotDeliveryTable = () => {

  const dispatch = useDispatch();
  const notDeliveryOrders = useSelector((state) => state.allOrders.orders);
  
   
  useEffect(()=>{
      dispatch(getNotDeliveryOrders())

   },[])
 
      
    return (
    
      
        <div>
            <OrdersTable orders={notDeliveryOrders}/>
  
        </div>
    )
}


 


export default NotDeliveryTable


