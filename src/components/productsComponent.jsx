import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
const ProductComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    useEffect (()=>{
        dispatch(getProducts())
    },[])
    return ( 
        <div>
            {products.map((product) => {
                <ul>
               <span>{product.title}{product.weight}</span>
               <span>{product.price}</span>
               <span>{product.category}</span>
               <span><img src={product.image}/></span>
               </ul>
            })}

        </div>
    );
}
 
export default ProductComponent;