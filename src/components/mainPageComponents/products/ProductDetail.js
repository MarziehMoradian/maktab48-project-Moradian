import React,{useEffect, useState} from 'react'
import { getAProduct } from '../../../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
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
  container:{
    maxWidth:' 1200px',
    width:' auto',
    margin:' 120px auto',
    boxShadow:' 0 0 5px #ccc', 
    background:'linear-gradient(to top,#88feac,#bafecf,#ecfef2)'  
  },
  details:{
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '30px 0',
    // width: 100%;

  },
  bigImg:{
    maxWidth: '500px',
    minWidth:'290px',
    overflow: 'hidden',
    margin:'25px',
  },
  img: {
    width:'100%',
    height: '100%',
    maxHeight:'400px',
    display: 'block',
    objectFit: 'cover',
  },
  box:{
    maxWidth: '500px',
    minWidth:'290px',
    margin:'25px',

  },
  row:{
    display: 'flex',
    justifyContent:' space-between',
    marginBottom: '15px',
  },
  desc:{
    lineHeight:' 1.5',
    margin:'15px 0',
  },
  cart:{
    backgroundColor:'#0d5b36',
    // padding: '0 25px',
    marginTop:'22px',
    border: 'none',
    outline: 'none',
    color:'white'
  },
  textField:{
 
    // padding: '0 25px',
    // marginTop:'15px',
    border: 'none',
    outline: 'none',
    color:'white',
    lineHeight:' 1.5',
    margin:'20px 10px',
    width:'70px'
  }
}));

const ProductDetail = ({onClick}) => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles()
    const selectedProduct = useSelector(
      (state) => state.allProducts.selectedProduct
    );
    const basket = useSelector(state => state.baskets.cardProducts)

    const [value,setValue] = useState([1])
    useEffect(() => {
        dispatch(getAProduct(productId));
      }, []);

      const imageProps = {
        smallImage: {
          alt: 'Phasellus laoreet',
          isFluidWidth: true,
          src:selectedProduct.image
        },
        largeImage: {
          src: selectedProduct.image,
          width: 1200,
          height: 1800,
         
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
      };
  
      
  
    return (
 
     <Box className={classes.container}>
        <div className={classes.details} dir="ltr">
          <Grid item lg={4} >
          <ReactImageMagnify {...imageProps} />
            {/* <Image src={selectedProduct.image}  className={classes.img}/> */}
            
          </Grid>
          <CssBaseline/>
          <div className={classes.box} dir="rtl">
              <Typography variant="h4" spacing={2}>{selectedProduct.title}</Typography>
              <Typography variant="h5" spacing={5}>{selectedProduct.price}تومان</Typography>
            <div className={classes.row}>
              <Button variant="text" component={Link} to={`/product/category/${selectedProduct.category}`}>{selectedProduct.category}<AiOutlineCaretLeft/></Button>
            </div>
            <Typography variant="h5">توضیحات</Typography>
            <Typography variant="body1" className={classes.desc}>{selectedProduct.description}</Typography>
              <div>
                <TextField type="number" size="small" variant="outlined" className={classes.textField} value={value} onChange={(e)=> setValue(e.target.value <= 0 ? 0 :e.target.value ) }/>
                <Button  variant="contained"  className={classes.cart} onClick={() => onClick(selectedProduct.id,value[(value.length)-1])}>اضافه کردن به سبد خرید</Button>
            </div>
          </div>

          
        </div>
        {/* <div className={classes.bigImg}> */}
       
       </Box>
        
    
       
    )
}

export default ProductDetail
