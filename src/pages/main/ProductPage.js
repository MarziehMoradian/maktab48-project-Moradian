import React,{useState,useEffect} from 'react'
import Products from '../../components/mainPageComponents/products/Products'
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { addToCart,} from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
// import DetailProduct from '../../components/mainPageComponents/cart/Cart';
import Carousels from '../../components/Carousel';
import Image from 'material-ui-image';

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import KeySidbar from './KeySidbar'
import { Grid, Paper, Typography } from '@material-ui/core';
import Slider from './Slider';
const ProductPage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);



    let plant_1 = []
    let plant_2 = []
    let plant_3 = []

    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);
    products?.map((product,index) => {
        if(product.category === "گل های آپارتمانی"){
          plant_1.push(product)
        }
        else if(product.category === "گل های زینتی"){
          plant_2.push(product);
        }
        else if(product.category === " کاکتوس"){

            plant_3.push(product)
        }
      })

    const handleAddToCard = (pro) => {   
  
        // dispatch(getAProduct(pro))
        // dispatch(addToCart([...basket, selectedProduct]));
   
  }

    return (
        <div >
          <Grid >
            <div >
            <Slider/>
            </div>
            {/* <KeySidbar/> */}
            <Grid >

              <Products  products={plant_1} onAddToCart={handleAddToCard} categoryName="گل های آپارتمانی" num={4}/>
               
                 
            </Grid>
            <div>
        
                <Products  products={plant_2} onAddToCart={handleAddToCard}  categoryName="گل های زینتی" num={4}/>
            </div>
            <div>
          
        
              <Products  products={plant_3} onAddToCart={handleAddToCard}  categoryName=" کاکتوس" num={4}/>
            </div>
                 
               
              
       </Grid>
       </div>
    )
}

export default ProductPage
