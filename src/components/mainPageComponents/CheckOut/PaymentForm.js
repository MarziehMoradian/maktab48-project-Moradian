import React from 'react'
import { Typography,Button,Divider } from '@material-ui/core';
import { Elements,CardElemnt,ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import Img from '../../../assets/images/OIP.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const PaymentForm = ({backStep}) => {
    const stripePromise = loadStripe('...');
    const history = useHistory()
    return (
        <>
            <Review/>
            <Divider/>
            <Typography variant="h6" gutterBottom style={{margin: '20px 0'}}>Payment</Typography>
            <img src={Img} />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="submit" variant="outlined"  color="primary" component={Link} to="/Payment/SuccsessPayment" >پرداخت</Button>
                            <Button variant="outlined" component={Link} to="/Payment/FailedPayment" >انصراف</Button>
                        </div>
        </>
    )
}

export default PaymentForm
