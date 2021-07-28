import React from 'react'
import { Typography,Button,Divider } from '@material-ui/core';
import { Elements,CardElemnt,ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review'
const PaymentForm = ({backStep}) => {
    const stripePromise = loadStripe('...');
    return (
        <>
            <Review/>
            <Divider/>
            <Typography variant="h6" gutterBottom style={{margin: '20px 0'}}>Payment</Typography>
             <Elements stripe={stripePromise}>
           
                            <Button variant="outlined" onClick={backStep}>Back</Button>
                            <Button type="submit" variant="outlined"  color="primary">Pay</Button>
             </Elements>
        </>
    )
}

export default PaymentForm
