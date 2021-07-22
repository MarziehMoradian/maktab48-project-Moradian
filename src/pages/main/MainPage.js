import React,{useState,useEffect} from 'react';
import Products from '../../components/mainPageComponents/products/Products';
import Navbar from '../../components/mainPageComponents/NavBar/Navbar';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { addItems,getItems } from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
import DetailProduct from '../../components/mainPageComponents/cart/Cart';
import Cart from '../../components/mainPageComponents/cart/Cart';
import { useHistory } from 'react-router';
function MainPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const products = useSelector((state) => state.allProducts.products);
   const orders = useSelector((state) => state.basket.products);
    const [cart,setCart] = useState([])
    const [open,setOpen] = useState(false)
    
    useEffect(() => {
        dispatch(getItems()) 
        dispatch(getProducts()); 
     
        setCart(orders)
        console.log(cart.lastIndexOf);
    }, []);

 


    const handleAddToCard = (product,q) => {   
        dispatch(addItems(product))
        // dispatch(getItems())
         
        // setCart([...cart,product])
       
        //console.log(cart);
    }

    const handleOpen = () => {
        setOpen(true)
    }
    
    // const handleShowDetails = () => {
    //     history.push('/details')
    // }


    return (
        <div >
            <Navbar totalItems={cart.length} onClick={handleOpen}/>
             <Products products={products} onAddToCart={handleAddToCard} />
            
            {/* <Cart cart={cart}/> */}
        </div>
    )
}

export default MainPage
