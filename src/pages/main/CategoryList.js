import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import Products from '../../components/mainPageComponents/products/Products';
import Sidebar from './Sidbar';
import { Divider } from '@material-ui/core';

const CategoryList = () => {
    const {category} = useParams();
    console.log(category);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    let listItems=[]
    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);
    products?.map((product,index) => {
        if(product.category === category){
          listItems.push(product)
        }
    })
    return (
        <div style={{display:'flex'}}>
           
            <div style={{width:'20%',backgroundColor:'yellowgreen'}}>
                      <Sidebar  />
            </div>
            <main  style={{width:'80%',height:'100%'}}>
            <Products products={listItems} categoryName={category} num={listItems.length}/>
            </main>
        </div>
    )
}

export default CategoryList
