import React,{useState,useEffect} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { AiFillCarryOut } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { makeStyles } from '@material-ui/core';;

const useStyles = makeStyles((theme)=>({
  list:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'nowrap',
    justifyContent:'space-around',
    padding:'10px',
    [theme.breakpoints.between(200,768)]:{
      display:'flex',
    flexDirection:'column',
    }
    
  }

}))
function Sidebar({ items }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const [cart,setCart] = useState([])
    const [isOpen,setIsOpen] = useState(false);

    const handleOpen = () => {
      if(isOpen){
        setIsOpen(false)
      }else{
        setIsOpen(true)
      }
    }

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
    <div className="sidebar"   >
      {/* <Menu pageWrapId={ "page-wrap" } >
      <main id="page-wrap"> */}
      <List disablePadding dense className={classes.list} >
      <div>
      <Link to={`/product/category/گل های آپارتمانی`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5" className="menu-item">گل های آپارتمانی{!isOpen ? <AiOutlineCaretDown onClick={handleOpen} style={{padding:'5px'}}/>:<AiOutlineCaretLeft onClick={handleOpen} style={{padding:'5px'}}/>}</Typography>
        </Link>
        {plant_1.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right',fontFamily:'BYekan+'}} className="menu-item">{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        </div>
        <div>
        <Link to={`/product/category/گل های زینتی`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5" className="menu-item">گل های زینتی{!isOpen ? <AiOutlineCaretDown onClick={handleOpen} style={{padding:'5px'}}/>:<AiOutlineCaretLeft onClick={handleOpen} style={{padding:'5px'}}/>}</Typography>
          </Link>
        {plant_2.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right'}} className="menu-item">{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        </div>
        <div>
        <Link to={`/product/category/ کاکتوس`} style={{textDecorationLine:'none',color:'#000'}}>
          <Typography variant="h5" className="menu-item">کاکتوس{!isOpen ? <AiOutlineCaretDown onClick={handleOpen} style={{padding:'5px'}}/>:<AiOutlineCaretLeft onClick={handleOpen} style={{padding:'5px'}}/>}</Typography>
          </Link>
        {plant_3.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItemText style={{textAlign:'right'}} className="menu-item">{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        </div>
      </List>
      
    {/* </main>
    </Menu> */}
    </div>
  )
}

export default Sidebar