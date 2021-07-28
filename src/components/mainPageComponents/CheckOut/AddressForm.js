import React,{useState} from 'react'
import { Select, MenuItem, Button, Grid, Typography, Input, TextField, InputLabel, Divider } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import CustomTextField from './CustomTextField';
import { Link } from 'react-router-dom';
import {DatePicker, DateTimePicker, DateRangePicker, DateTimeRangePicker} from "react-advance-jalaali-datepicker";
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
            {/* <Typography variant="h6" gutterBottom>Shipping Adress</Typography> */}
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
                        {/* <CustomTextField  name="email" lable="Email" /> */}
                        {/* <Grid item xs={12} sm={6}>
                            <InputLable>Shipping country</InputLable>
                            <Select  value ={shippingCountries} fullWidth onChange={}>
                                <MenuItem key={} value={shippingCountry}></MenuItem>
                                SelectMe
                            </Select>
                        </Grid> */}
                        
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                        <Button variant="outlined" component={Link} to ="/basket">Back to go</Button>
                        <Button type="submit" variant="outlined" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
