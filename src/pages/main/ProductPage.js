import React,{useState,useEffect} from 'react'
import Products from '../../components/mainPageComponents/products/Products'
import { getProducts,SearchAproduct } from '../../redux/actions/productActions';
// import { addToCart,} from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
// import DetailProduct from '../../components/mainPageComponents/cart/Cart';
// import Carousels from '../../components/Carousel';
// import Image from 'material-ui-image';

// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import KeySidbar from './KeySidbar'
import { Button, Grid, } from '@material-ui/core';
import PageSearch from './PageSearch'
import Slider from './Slider';
import Search from './Search';
import { List, ListItem } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Product from '../../components/mainPageComponents/products/product/Product';
const ProductPage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const searchAProduct = useSelector((state) => state.allProducts.searchProduct);
    const [search,setSearch] = useState();
    const [display,setDisplay] = useState(false);
    const [displayPage,setDisplayPage] = useState(false);
    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);
    const handleSearch=(search)=>{
        if(search!==""){
          
          setSearch(search);
          setDisplay(true);
          setDisplayPage(true)
        }else{
        //   setDisplayCount(false)
          setSearch(search);
          setDisplay(false)
          setDisplayPage(false)
        }
      }
    let filterCountry=products.filter(user=>user.title.toLocaleLowerCase().startsWith(search));
    
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
            <div style={{backgroundColor:'darkgreen',height:'50px'}}>
            <Search onSearch={handleSearch} search={search} />
            </div>
        {!displayPage &&
        <>
           <Grid >
              {/* <PageSearch/> */}

              <Products  products={plant_1} onAddToCart={handleAddToCard} categoryName="گل های آپارتمانی" num={4}/>
               
                 
            </Grid>
            <div>
        
                <Products  products={plant_2} onAddToCart={handleAddToCard}  categoryName="گل های زینتی" num={4}/>
            </div>
            <div>
          
        
              <Products  products={plant_3} onAddToCart={handleAddToCard}  categoryName=" کاکتوس" num={4}/>
            </div>
            </>
            }
              {displayPage &&
               <div>
               
              <div>
              {/* {display && <Grid lg={3} style={{display:'flex',width: '100%',flexWrap:'wrap'}}> */}
                 {/* {filterCountry.map(user=> */}
                     {/* <Grid lg={3} style={{width:'100%'}} > */}
                     {/* <Link to={`/product/${user.id}`} style={{textDecorationLine:'none',color:'#000'}}> */}
                     <Products  products={filterCountry}  num={filterCountry.length}  />
                     {/* </Link> */}
                     {/* </Grid> */}
                 {/* )} */}
                 {/* </Grid> */}
                 
             </div>
               
             </div> }   
               
              
       </Grid>
       </div>
    )
}

export default ProductPage
