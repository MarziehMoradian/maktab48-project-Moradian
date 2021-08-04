import React from 'react';
import { Button, Grid} from '@material-ui/core';
import Product from './product/Product'
import {useStyles} from './style';
import { Link } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
const Products = ({products,onAddToCart,onClick,categoryName,num}) => {
       
        const classes = useStyles()
      
   
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <div  >
        <div style={{display:"flex",justifyContent:'space-between',alignItems:'stretch'}}>
            <Link to={`/product/category/${categoryName}`} style={{textDecorationLine:'none',color:'#000'}}>
                <Button variant="text" className={classes.type}>{categoryName}<IoIosArrowBack/></Button>
            </Link>
            {/* {location.pathname !== `/product/category/${categoryName}` ? (

            <Link to={`/product/category/${categoryName}`} style={{textDecorationLine:'none',color:'#000'}}>
                <Button variant="outlined" style={{backgroundColor:'inherit'}} >مشاهده همه<IoIosArrowBack/> </Button>
            </Link>
            ):(
               null
            )} */}
        </div>
        
       
        <Grid container justify="start" spacing={4} style={{ }}>      
         
            {products?.map( (product,index) => {
                
                if(index<num){
                    return(  
                      
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        
                               
                              <Product  product={product} onAddToCart={onAddToCart} onClick={onClick}/>
                              
                      
                    </Grid>
                 )}
                              
            }   
                
            )}
            
        </Grid>
       </div>
    </main>
    )
}

export default Products