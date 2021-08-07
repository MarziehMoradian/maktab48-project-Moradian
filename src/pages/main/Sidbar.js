import React,{useEffect} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts} from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';;

const useStyles = makeStyles((theme)=>({
  list:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'nowrap',
    justifyContent:'space-around',
    padding:'10px',
    [theme.breakpoints.between(200,600)]:{
      display:'flex',
     flexDirection:'column',
    },
    [theme.breakpoints.between(600,1400)]:{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-around'
      

  }
    
  },
  title:{
    backgroundColor:'darkgreen',
    color:'white',
    border:'none',
    borderRadius:'5px',
    padding:'5px'
  },
  [theme.breakpoints.between(200,600)]:{
    // fontSize:'10px'
  },
  link:{
    textDecorationLine:'none',
    color:'#000'
  }

}))
function Sidebar({ items }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);


 

    let plant_1 = []
    let plant_2 = []
    let plant_3 = []

    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);

    products?.map((product) => {
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
   
      <List disablePadding dense className={classes.list} >
      <div>
      <Link to={`/product/category/گل های آپارتمانی`} className={classes.link}>
          <Typography variant="h5" className={classes.title}>گل های آپارتمانی</Typography>
        </Link>
        {plant_1.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} className={classes.link}>
                <ListItemText style={{textAlign:'right'}} >{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        </div>
        <div>
        <Link to={`/product/category/گل های زینتی`} className={classes.link}>
          <Typography variant="h5"  className={classes.title}>گل های زینتی</Typography>
          </Link>
        {plant_2.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} className={classes.link}>
                <ListItemText style={{textAlign:'right'}} >{item.title}</ListItemText>
            </Link>
          </ListItem>
        ))}
        </div>
        <div>
        <Link to={`/product/category/ کاکتوس`} className={classes.link}>
          <Typography variant="h5" className={classes.title}>کاکتوس</Typography>
          </Link>
        {plant_3.map((item) => (
          <ListItem key={item.id} button >
            <Link to={`/product/${item.id}`} className={classes.link}>
                <ListItemText style={{textAlign:'right'}} >{item.title}</ListItemText>
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