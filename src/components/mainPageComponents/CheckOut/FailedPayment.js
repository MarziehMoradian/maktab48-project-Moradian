import React from 'react'
import { useStyles } from './style';
import { Paper,Typography } from '@material-ui/core';
import { BsFillXCircleFill } from "react-icons/bs";
const FailedPayment = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
                    <BsFillXCircleFill style={{height:'100px',color:'red',width:'100px'  }} />
                    <Typography variant="h5">پرداخت ناموفق بود سفارش شما در انتظار پرداخت است</Typography>
                    </div>
                </Paper>
            </main>
        </>
    )
}

export default FailedPayment
