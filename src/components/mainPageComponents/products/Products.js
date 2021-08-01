import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import Product from './product/Product'
import {useStyles} from './style';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const Products = ({products,onAddToCart,onClick,categoryName,num}) => {
       
        const classes = useStyles()
        const location = useLocation()
   
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <div style={{display:"flex",justifyContent:'space-between'}}>
            <Link to={`/product/category/${categoryName}`} style={{textDecorationLine:'none',color:'#000'}}>
                <Typography variant="h2" className={classes.type}>{categoryName}</Typography>
            </Link>
            {location.pathname !== `/product/category/${categoryName}` ? (

            <Link to={`/product/category/${categoryName}`} style={{textDecorationLine:'none',color:'#000',marginTop:'30px'}}>
                <Typography variant="h6" >بیشتر</Typography>
            </Link>
            ):(
               null
            )}
        </div>
        
       
        <Grid container justify="center" spacing={4}>      
         
            {products?.map( (product,index) => {
                
                {if(index<num){
                    return(  
                      
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        
                               
                              <Product  product={product} onAddToCart={onAddToCart} onClick={onClick}/>
                              
                      
                    </Grid>
                 )}
                    }           
            }   
                
            )}
            
        </Grid>
       
    </main>
    )
}

export default Products