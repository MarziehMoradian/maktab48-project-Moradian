import React,{useState,useEffect} from 'react';
import Products from '../../components/mainPageComponents/products/Products';
import Navbar from '../../components/mainPageComponents/NavBar/Navbar';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
 import {createAOrder,setOrders} from '../../redux/actions/orderAction'
import { useDispatch, useSelector } from "react-redux";
function MainPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
   const orders = useSelector((state) => state.allOrders.baskets);
    const [cart,setCart] = useState({})
    useEffect(() => {
        dispatch(getProducts()); 
        dispatch(setOrders())
    }, []);
    useEffect(() => {
        dispatch(setOrders())
        dispatch(getProducts());
    }, [cart]);

    const handleAddToCard = (product) => {
        // const item=createOrder(q,product)
        // setCart(item.cart)
        const item = dispatch(createAOrder(product))
     
        
        setCart(orders)
        console.log(product,orders);

    }
    
    return (
        <div>
            <Navbar totalItems={cart.length}/>
            <Products products={products} onAddToCart={handleAddToCard}/>
        </div>
    )
}

export default MainPage
