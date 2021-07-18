import React,{useState} from 'react'
import DeliveryOrder from '../../components/orderPageComponent/DeliveryOrder';
import NotDeliveryTable from '../../components/orderPageComponent/NotDeliveryTable'
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
function OrderManagment() {

    const [deliveredList, setDeliveredList] = useState(true); // false for NotDelivered , true for Delivered
    const [value, setValue] = useState("notDelivered");
  
    const handleChange = (event) => {
      setValue(event.target.value);
      if (value === "delivered") {
          setDeliveredList(true);
      }
      else{
          setDeliveredList(false);
      }
    };
  

    return (
      
        <div >
        <h1 >مدیریت موجودی و قیمت</h1>
        <FormControl component="fieldset" >
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="deliveryCondition"
            name="deliveryCondition"
            value={value}
            onChange={handleChange}
            style={{flexDirection:"row"}}
          >
            <FormControlLabel
              value="delivered"
              control={<Radio />}
              label="سفارش های تحویل شده"
            />
            <FormControlLabel
              value="notDelivered"
              control={<Radio />}
              label="سفارش های در انتظار ارسال"
            />
          </RadioGroup>
        </FormControl>
        {
            !deliveredList ? 
            <DeliveryOrder/>
            :
            <NotDeliveryTable/>
        }
        </div>
    )
}

export default OrderManagment
