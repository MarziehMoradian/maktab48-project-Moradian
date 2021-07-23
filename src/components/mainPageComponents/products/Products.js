import React,{useEffect} from 'react';
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import Product from './product/Product'
import {useStyles} from './style';
import { Link, useParams } from "react-router-dom";
const Products = ({products,onAddToCart,onClick,categoryName,filterCategory}) => {
        const {category} = useParams()
        const classes = useStyles()

        products.map((product,index) => {
       
            if(product.category == category){
                filterCategory.push(product);
              }
              console.log(product.category);

        
      })
    return(
    <main className={classes.content}>
        
        <h1>{categoryName}</h1>
        <div className={classes.toolbar}/>
        
        <Grid container justify="center" spacing={4}>
            
            {products.map((product,index) => {
                 while(index < 6){
                    <Link to={`/products/${category}`}>
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                
                        <Product product={product} onAddToCart={onAddToCart} onClick={onClick}/>
                    </Grid>
                    </Link>

                }
            }   
                
            )}
            
        </Grid>
       
    </main>
    )
}

export default Products