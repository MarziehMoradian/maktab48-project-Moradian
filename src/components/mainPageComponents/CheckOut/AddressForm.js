import React,{useState} from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import CustomTextField from './CustomTextField';
import { Link } from 'react-router-dom';
import {DatePicker, DateTimePicker, DateRangePicker, DateTimeRangePicker} from "react-advance-jalaali-datepicker";
import { Select, MenuItem, Button, Grid, Typography, Input, TextField, InputLabel, Divider } from '@material-ui/core'
const AddressForm = ({next}) => {
    const method = useForm()
   
  const  DatePickerInput= (props) =>  {
    return (
       <Grid item xs={12} sm={12} >
        <TextField   {...props}  fullWidth size="small" />
        </Grid>
    )
}

    return (
        <div>
            
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit((data)=> next({...data}))}>
                    <Grid container spacing={3}>
                        <InputLabel>نام:</InputLabel>
                        <CustomTextField required name="firstName" />
                        <InputLabel>نام خانوادگی:</InputLabel>
                        <CustomTextField required name="LastName"  />
                        <InputLabel>آدرس:</InputLabel>
                        <CustomTextField required name="address"  />
                        <InputLabel>شماره تلفن:</InputLabel>
                        <CustomTextField required name="phoneNumber" />
                        <br/>
                        <InputLabel>  تاریخ تحویل محصول یا محصولات خود را مشخص کنید:  </InputLabel>

                        <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        // onChange={this.change}
                        id="datePicker"
                        preSelected="1400/05/15"
                        />
                      </Grid>
                      <br/>
                      <br/>
                      <br/>
                      <div style={{display:'flex' , justifyContent:'center'}}>
                        <Button type="submit" style={{width:'100%',backgroundColor:'#0d5b36',color:'white',fontSize:'20px',fontWeight:'bold'}} component={Link} to="/payment" variant="contained" >پرداخت</Button>
                        

                      </div>
                   
                </form>
            </FormProvider>
        </div>
    )
}
export default AddressForm