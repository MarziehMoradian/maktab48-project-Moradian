import React from 'react'
import { Typography,Button,Divider } from '@material-ui/core';
import { Elements,CardElemnt,ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import Img from '../../../assets/images/OIP.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Paper } from '@material-ui/core';
import { useStyles } from './style';
const PaymentForm = ({backStep}) => {
    const stripePromise = loadStripe('...');
    const history = useHistory()
    const classes = useStyles()
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom style={{margin: '20px 0',textAlign:'center'}}>درگاه پرداخت</Typography>
{/*                
                <Divider/> */}

                <img src={Img} style={{margin:'0 30px',width:'90%'}}/>
                <br/>
                <br/>
                <br/>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <Button type="submit" variant="contained"   component={Link} to="/Payment/SuccsessPayment" style={{width:'50%',backgroundColor:'#0d5b36',color:'white'}} >پرداخت</Button>
                                <Button variant="contained" component={Link} to="/Payment/FailedPayment" style={{width:'20%',backgroundColor:'#df1c12',color:'white'}}>انصراف</Button>
                            </div>
                </Paper>
            </main>
        </>
    )
}

export default PaymentForm
