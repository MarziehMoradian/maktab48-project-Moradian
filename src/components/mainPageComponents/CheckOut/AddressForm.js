import React,{useEffect, useState} from 'react'
import {  useHistory } from 'react-router-dom';
import {DatePicker} from "react-advance-jalaali-datepicker";
import { Button, Grid,  TextField, InputLabel } from '@material-ui/core';
import {createAOrder} from '../../../redux/actions/orderAction'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCarts} from '../../../redux/actions/basketAction';

const AddressForm = ({next}) => {
    // const method = useForm()
    const dispatch = useDispatch()
    const history = useHistory()
    const basket = useSelector(state => state.baskets.cardProducts)
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [address,setAddress] = useState()
    const [PhoneNumber,setPhoneNumber] = useState()
    const [date,setDate] = useState()
    useEffect(()=>{
        dispatch(setCarts())
    },[])
    let sum = 0
    basket.map( item => {
        sum =sum + item.price
    })
   const handleSubmit = () => {
        if(firstName && lastName && address && PhoneNumber &&date){
           
            dispatch(createAOrder({
                id:((Math.random()+1).toFixed(2)),
                name:firstName + "  " + lastName,
                address:address,
                PhoneNumber:PhoneNumber,
                orderTime:date,
                deliveryTime:'',
                condition:false,
                sum:sum,
                orderedProducts:
                    basket
                

            }))
            history.push('/Payment')
        }

   }
  const  DatePickerInput= (props) =>  {
    return (
       <Grid item xs={12} sm={12} >
        <TextField   {...props}  fullWidth size="small" required value={date} onChange={(e)=>setDate(e.target.value)}/>
        </Grid>
    )
}

    return (
        <>
            
            {/* <FormProvider {...method}> */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <InputLabel style={{marginTop:'15px'}}>نام:</InputLabel>
                        <TextField  value={firstName}onChange={(e)=> setFirstName(e.target.value)} required name="firstName" variant="outlined" fullWidth size="small" style={{marginTop:'15px'}} />
                        <InputLabel style={{marginTop:'15px'}}>نام خانوادگی:</InputLabel>
                        <TextField value={lastName}onChange={(e)=> setLastName(e.target.value)} required name="LastName" variant="outlined" fullWidth size="small" style={{marginTop:'15px'}}/>
                        <InputLabel style={{marginTop:'15px'}}>آدرس:</InputLabel>
                        <TextField value={address}onChange={(e)=> setAddress(e.target.value)} required name="address" variant="outlined" fullWidth size="small" style={{marginTop:'15px'}}/>
                        <InputLabel style={{marginTop:'15px'}}>شماره تلفن:</InputLabel>
                        <TextField value={PhoneNumber}onChange={(e)=> setPhoneNumber(e.target.value)} required name="phoneNumber" variant="outlined" fullWidth size="small" style={{marginTop:'15px'}}/>
                        <br/>
                        <InputLabel style={{marginTop:'15px'}}>  تاریخ تحویل محصول یا محصولات خود را مشخص کنید:  </InputLabel>
                        <br/>
                       
                        <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        id="datePicker"
                        preSelected="1400/05/15"
                        
                        />
                      </Grid>
                      <br/>
                      <br/>
                      <br/>
                      <div style={{display:'flex' , justifyContent:'center'}}>
                        <Button type="submit" style={{width:'100%',backgroundColor:'#0d5b36',color:'white',fontSize:'20px',fontWeight:'bold'}}  variant="contained" >پرداخت</Button>
                        

                      </div>
                   
                </form>
            {/* </FormProvider> */}
        </>
    )
}
export default AddressForm