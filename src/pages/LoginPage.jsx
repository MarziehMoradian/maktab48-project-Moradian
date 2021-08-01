import React from 'react';
import { useStyles } from '../assets/index';
import { Grid,  Paper} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginForm from '../components/loginPageComponents/LoginForm';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyle = makeStyles ((theme)=> ({
    link:{
        position:'absolute',
         backgroundColor:'#24e486',
        color:'#5c5c5c',
        margin: theme.spacing(1, 3, 3),
        fontSize: '18px',
        fontWeight:'bold',
      }
}))
const Input = () => {

    const classes = useStyles()
    const classess = useStyle()
 
  
    return ( 
    <>
      
        <Button variant="contained"  className={classess.link} component={Link} to="/">بازگشت به صفحه اصلی</Button>
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
           
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
             
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            
                <LoginForm/>
            </Grid>
        </Grid>
    </>



   
    );
}
 
export default Input;