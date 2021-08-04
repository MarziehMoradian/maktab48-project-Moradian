import React from 'react'
import { Grid, Button} from '@material-ui/core';
import '../assets/sass/app.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {isLoggedIn} from '../utils/auth'

const useStyles = makeStyles((theme)=>({
    button:{
        width:'50%',
        height:'90px',
        // borderRadius: '30px',
        // boxShadow:'3px 4px 5px black ',
        color:'#011d0a',
        // backgroundColor:'rgb( 251 , 225 , 233 ,0.4)',
        fontSize:'54px',
        fontWeight:'bold',
        [theme.breakpoints.between(320,425)]:{
            width:'80%',
            fontSize:'25px',
            height:'40px',
            // borderRadius:'5px',
            color:'#011d0a',
            // backgroundColor: 'rgb( 153 , 243 , 211 ,0.4)'
             
        },
        [theme.breakpoints.between(425,768)]:{
            // width:'100%',
            fontSize:'25px',
            height:'40px',
            // borderRadius:'5px',
            color:'#011d0a',
            // backgroundColor: 'rgb( 153 , 243 , 211 ,0.4)'
             
        },
        [theme.breakpoints.between(768,1200)]:{
            // width:'100%',
            fontSize:'30px',
            height:'40px',
            // borderRadius:'5px',
            color:'#011d0a',
            // backgroundColor: 'rgb( 153 , 243 , 211 ,0.4)'
             
        },
       
    },
    parentButton:{
        display:'flex',
        justifyContent:'center',
        margin:'18% auto',
        border:'5px solid white',
        width:'55%',
        backgroundColor: 'rgb( 136 , 254 , 172 ,0.4)',
        // height:'0px',
        padding:'30px',
        // height:'200px',
        [theme.breakpoints.between(311,425)]:{
            margin:'20% auto',
            width:'100%'
        },
        [theme.breakpoints.between(425,768)]:{
            margin:'20% auto',
            width:'100%'
        },
        [theme.breakpoints.between(768,1200)]:{
            margin:'20% auto',
            width:'70%'
        },
    },
    btns:{
        // marginRight:'10px',
        padding:'10px',
        fontSize:'20px',
        fontWeight:'bold',
        // backgroundColor:'red',
        // color:'white'
        // backgroundColor: 'rgb( 136 , 254 , 172 ,0.4)'
    }
}))
const Carousels = () => {
    const classes = useStyles()
    
    
 return (
        <div  style={{backgroundImage:'url(http://www.upsara.com/images/w892071_.jpg)',width:'100%',height:'100vh', backgroundPosition: 'center',backgroundSize: 'cover'}}>
         <div dir="rtl" >
           
            <Grid  >
                <div style={{ display:'flex',justifyContent:'space-evenly',alignItems:'center',padding:'10px'}}>
                    
                        <Button component={Link} to="/product" variant="outlined" color="secondary" className={classes.btns} >
                            دسته بندی ها
                        </Button>
                    
                    
                        <Button component={Link} to={isLoggedIn() ? "/adminPanel" : '/login'} variant="outlined"color="secondary" className={classes.btns} >
                           مدیریت
                        </Button>
                    
                    
                </div>
                <div  className={classes.parentButton}>
                  <Button component={Link} to="/product" variant='text' className={classes.button}> مشاهده محصولات</Button>
                </div>
              
            </Grid>
              
            </div>
        </div>
    )
}

export default Carousels










