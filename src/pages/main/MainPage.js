import React,{useState,useEffect} from 'react';
import Products from '../../components/mainPageComponents/products/Products';
import Navbar from '../../components/mainPageComponents/NavBar/Navbar';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { addToCart,} from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
import DetailProduct from '../../components/mainPageComponents/cart/Cart';
import Cart from '../../components/mainPageComponents/cart/Cart';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Route, Switch} from "react-router-dom";
import ProductDetail from '../../components/mainPageComponents/products/ProductDetail';
import {removeFromCart} from '../../redux/actions/basketAction';
import { useParams } from 'react-router';
function MainPage({shoppingCart}) {
    const dispatch = useDispatch();
    const history = useHistory()
    const products = useSelector((state) => state.allProducts.products);
    const productss = useSelector(state => state.allProducts.selectedProduct)
    const basket = useSelector((state) => state.basket.cartProducts);
//    const orders = useSelector((state) => state.basket.);
    const [cart,setCart] = useState([])
    const [open,setOpen] = useState(false)
     const { category } = useParams([]);
   
    let filterCategory = []
    
    useEffect(() => {
        dispatch(getProducts()); 
        // console.log(title);
        // dispatch(getProductsInBasket())
    }, []);

    // products.map((product,index) => {
       
    //         if(product.category == category){
    //             filterCategory.push(product);
    //           }
    //           console.log(product.category);

        
    //   })


    const handleAddToCard = (product) => {   
        // dispatch(addTocart(product))
        // dispatch(addItem ())
          dispatch(getAProduct(product))
          dispatch(addToCart(product))
        setCart([...cart,productss])
       
        console.log(cart);
    }

    const handleOpen = () => {
        history.push('/basket')
    }
    
    // const handleShowDetails = () => {
    //     history.push('/details')
    // }
    const handleDelete = (id) => {
      const item = dispatch(getAProduct(id))
       setCart (cart.filter(i =>  i.id !== item))
        
    }

    return (
        <div >
            <Navbar totalItems={cart.length} onClick={handleOpen}/>
            <Switch>
                <Route path="/products/:category" exact render={props => <Products products={products} filterCategory={filterCategory} onAddToCart={handleAddToCard} categoryName={category}/>} />
                <Route path="/product/:productId" exact component={ProductDetail} />
                <Route path="/basket" exact render={props => <Cart  cart={cart} onDelete={handleDelete}/>} />
                
                </Switch>
             {/* <Products products={products} onAddToCart={handleAddToCard} /> */}
         
                {/* <Cart cart={cart} open={open}/> */}
            
             
        </div>
    )
}

// export default connect()(MainPage)
export default connect(state => {
    return {
      shoppingCart: state.cart
    };
  })(MainPage);
