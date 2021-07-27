import React,{useState,useEffect} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom'
function Sidebar({ items }) {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const [cart,setCart] = useState([])

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

  return (
    <div className="sidebar" style={{paddingTop:'30.25%',}} >
      <List disablePadding dense >
      <Link to={`/product/category/گل های آپارتمانی`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5">گل های آپارتمانی</Typography>
        </Link>
        {plant_1.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right'}}>{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        <Link to={`/product/category/گل های زینتی`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5">گل های زینتی</Typography>
          </Link>
        {plant_2.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right'}}>{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        <Link to={`/product/category/ کاکتوس`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5">کاکتوس</Typography>
          </Link>
        {plant_3.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right'}}>{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar