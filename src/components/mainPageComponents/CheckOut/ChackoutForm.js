import React,{useState} from 'react';
import { Paper,TextField,Grid, InputLabel,Typography,CircularProgress,Divider, Button } from '@material-ui/core';
import { useStyles } from './style';
import {DatePicker} from "react-advance-jalaali-datepicker";
import { Link } from 'react-router-dom';
import AddressForm from './AddressForm';

const ChackoutForm = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center" style={{color:'#0a1c12'}}>نهایی کردن خرید</Typography>
                    <AddressForm/>
                </Paper>
            </main>
            
        </>
    )
}

export default ChackoutForm
