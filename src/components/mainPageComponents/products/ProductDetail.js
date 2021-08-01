import React,{useEffect, useState} from 'react'
import { getAProduct } from '../../../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import NavBar from '../NavBar/Navbar';
import '../../../assets/sass/app.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductDetail = ({onClick}) => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const selectedProduct = useSelector(
      (state) => state.allProducts.selectedProduct
    );
    const basket = useSelector(state => state.baskets.cardProducts)

    const [value,setValue] = useState([1])
    useEffect(() => {
        dispatch(getAProduct(productId));
      }, []);

     
  
      
  
    return (
      
     <div className="container">
      {/* <NavBar/> */}
        <div className="details">
          <div className="big-img">
            <Image src={selectedProduct.image}  className="img"/>
            
          </div>
          <CssBaseline/>
          <div className="box">
              <Typography variant="h4" spacing={2}>{selectedProduct.title}</Typography>
              <Typography variant="h5" spacing={5}>{selectedProduct.price}تومان</Typography>
            <div className="row">
              <Typography variant="body2">{selectedProduct.category}</Typography>
            </div>
            <Typography variant="body1" className="desc">{selectedProduct.description}</Typography>
              <div className="row">
                <TextField type="number" size="small" variant="outlined" className="card desc" style={{width:'70px'}} value={value} onChange={(e)=> setValue(e.target.value <= 0 ? 0 :e.target.value ) }/>
                <Button  variant="contained" style={{backgroundColor:'#0d5b36'}} className="cart" onClick={() => onClick(selectedProduct.id,value[(value.length)-1])}>اضافه کردن به سبد خرید</Button>
            </div>
          </div>

          
        </div>
        
       </div>
    
       
    )
}

export default ProductDetail
