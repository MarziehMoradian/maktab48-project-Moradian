import React,{useState} from 'react'
import { InputLable,Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import CustomTextField from './CustomTextField';
import { Link } from 'react-router-dom';
const AddressForm = ({next}) => {
    const method = useForm()
    const [shippingCountries,SetShippingCountries] = useState([]);
    const [shippingCountry,SetShippingCountry] = useState();
   
    return (
        <div>
            <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit((data)=> next({...data}))}>
                    <Grid container spacing={3}>
                        <CustomTextField required name="firstName" lable="First Name" />
                        <CustomTextField required name="LastName" lable="Last Name" />
                        <CustomTextField required name="address" lable="Adress" />
                        <CustomTextField required name="phoneNumber" lable="Phone Number" />
                        <CustomTextField required name="Date" lable="Reciev Date" />
                        <CustomTextField  name="email" lable="Email" />
                        {/* <Grid item xs={12} sm={6}>
                            <InputLable>Shipping country</InputLable>
                            <Select  value ={shippingCountries} fullWidth onChange={}>
                                <MenuItem key={} value={shippingCountry}></MenuItem>
                                SelectMe
                            </Select>
                        </Grid> */}
                        
                    </Grid>
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
