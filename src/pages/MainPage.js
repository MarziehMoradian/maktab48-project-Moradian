import React,{useState,useEffect} from 'react';
import Products from '../components/products/Products';
import Navbar from '../components/NavBar/Navbar';
import { getProducts, getAProduct } from '../redux/actions/productActions';
 import {createAOrder,setOrders} from '../redux/actions/orderAction'
import {addTocart} from '../redux/actions/productActions';
import {createOrder} from '../api/basket'
import { useDispatch, useSelector } from "react-redux";
function MainPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
   const orders = useSelector((state) => state.allProducts.baskets);
    const [cart,setCart] = useState({})
    useEffect(() => {
        dispatch(getProducts()); 
         dispatch(setOrders())
    }, []);

    const handleAddToCard = (product,q) => {
        const item=createOrder(product,q)
        // setCart(item.cart)
       dispatch(createAOrder(product))
        setCart(product)
        console.log(item,product);

    }
    
    return (
        <div>
            <Navbar totalItems={cart.total_Item}/>
            <Products products={products} onAddToCart={handleAddToCard}/>
        </div>
    )
}

export default MainPage
