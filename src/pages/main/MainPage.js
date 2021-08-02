import React,{useState,useEffect} from 'react';
// import Products from '../../components/mainPageComponents/products/Products';
import Navbar from '../../components/mainPageComponents/NavBar/Navbar';
// import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { addToCart,deleteFromCart,setCarts} from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
// import DetailProduct from '../../components/mainPageComponents/cart/Cart';
import Cart from '../../components/mainPageComponents/cart/Cart';
// import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import { Route, Switch} from "react-router-dom";
import ProductDetail from '../../components/mainPageComponents/products/ProductDetail';
// import {removeFromCart} from '../../redux/actions/basketAction';
import ProductPage from './ProductPage';
import CategoryList from './CategoryList';
import { getAProduct } from '../../redux/actions/productActions';
// import { useParams } from 'react-router';
import SuccessPayment from '../../components/mainPageComponents/CheckOut/SuccessPayment';
import FailedPayment from '../../components/mainPageComponents/CheckOut/FailedPayment'
import CheckoutForm from '../../components/mainPageComponents/CheckOut/ChackoutForm'
import PaymentForm from '../../components/mainPageComponents/CheckOut/PaymentForm';
import Headers from '../../components/Headers'
import NavBar from '../../components/mainPageComponents/NavBar/Navbar';
function MainPage() {
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.allProducts.products);
    const selectedProduct = useSelector(state => state.allProducts.selectedProduct);
    const basket = useSelector(state => state.baskets.cardProducts)
    
    const [cart,setCart] = useState([])
    let [value, setValue] = useState([])


    // useEffect(() => {
    //     dispatch(getAProduct()); 
        
    // },[]);
//    console.log(products);

    // useEffect(() => {
    //     dispatch(setCarts())
    //     //dispatch(addToCart([...basket, selectedProduct]));
    // }, [])

   

    const handleAddToCard = (pro,v) => {   
        console.log(basket);
        v = parseInt(v)
        value.push(v)
        dispatch(getAProduct(pro))
        // basket.filter(item => item.if)
        dispatch(addToCart([...basket,selectedProduct]));
        
            setCart([...cart,basket])
            // setValue(v)
           
            
        console.log(value);
        
        
       
        
    }

  
   
    
    const handleDelete = (id) => {
        dispatch(deleteFromCart(id));
        dispatch(setCarts())
        console.log(cart); 
    }
    const handleAddValue = () => {
        value= parseInt(value)
        setValue(value + 1)
    }
    
    const handleDecValue = () => {
        value= parseInt(value)
        setValue(value - 1)
        if(value <= 0){
            setValue(0)
        }
    }

    return (
        <div   >

          
           <NavBar totalItems={cart.length}/>
           <div style={{marginTop:'100pxs'}}>
            {/* <Headers totalItems={cart.length} /> */}
            </div>
             <Switch>
                <Route path="/product" exact component={ProductPage} />
                <Route path="/Payment" exact component={PaymentForm} />
                <Route path="/Payment/FailedPayment" exact component={FailedPayment} />
                <Route path="/Payment/SuccsessPayment" exact component={SuccessPayment} />
                <Route path="/product/category/:category" exact component={CategoryList} />
                <Route path="/product/:productId" exact render={props => <ProductDetail onClick={handleAddToCard} />}/>
                <Route path="/basket" exact render={props => <Cart  cart={basket} onDelete={handleDelete} value={value} addValue={handleAddValue} decValue={handleDecValue}/>} />
                <Route path="/basket/checkOut" exact component={CheckoutForm} />
                
                </Switch> 
             {/* <Products products={products} onAddToCart={handleAddToCard}/> */}
            
             
        </div>
    )
}

export default MainPage
// export default MainPage
