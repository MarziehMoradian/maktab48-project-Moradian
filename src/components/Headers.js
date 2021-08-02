import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery,Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { logout} from '../utils/auth';
import Menu from '@material-ui/core/Menu';
import img from '../assets/images/R (5).png'
import Tabs from './Tabs'
import ProductManagement from '../pages/admin/Productsmanagement';
import PriceManagment from '../pages/admin/PriceManagement';
import OrderManagment from '../pages/admin/OrderManagment';
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar:{
    background:'linear-gradient(to left,#03130c,#165a39)',
    padding:'10px'
  },
  menuButton: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.between(375,425)]:{
      marginRight: theme.spacing(12),
    },
    [theme.breakpoints.between(425,720)]:{
      marginRight: theme.spacing(18),
    }
  },
  title: {
    flexGrow: 1,
    alignItems:'center',
    display:'flex',
    // textDecoration:'none',
    fontWeight:'bold',
    [theme.breakpoints.down('xs')]:{
     
      flexGrow: 1,
    },
  
  },
  headerOption:{
    display:'flex',
    color:'#e0f8ed',
    flex:1,
    fontWeight:'bold',
    fontSize: '18px',
    justifyContent:'center'
  },
  hambergur:{
    display:'flex',
    flexDirection:'column'
    
  },
  exist:{
    color:'black',
    // backgroundColor:'black',
   height:'50px',
   width:'30px',
    
    [theme.breakpoints.between(1024,1400)]:{
      marginRight:'200px',
      
      
    },
    [theme.breakpoints.up(1400)]:{
      marginRight:'700px'
    },
  }
  
}));

const Header =(props) => {
  const {history,match} = props;
  const {params} = match;
  const {page} = params;
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes =useStyles()
  const indexToTabName = {
    ProductManagement:0,
    PriceManagment:1,
    OrderManagment:2,
  }
  const tabNameToIndex = {
    0: "productManagment",
    1:"PriceManagment",
    2:"OrderManagment",
  }
  const [selectedTab, setSelectedTab] =React.useState(indexToTabName[page]);
  // const [selectedTab, setSelectedTab] =React.useState(0);
  
  //Actions
  const handleChange = (event, newValue) => {
     
      history.push(`/adminPanel/${tabNameToIndex[newValue]}/`)  
      setSelectedTab(newValue);
      setAnchorEl(null);
    }
 
    const handleGoToLogin = () => {
      logout()
      history.push("/login");
    };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const  handleMenuClick = (newPage) => {
    setAnchorEl(null);
    history.push(newPage)
  };
  
  return (
    <div className={classes.root}>
     
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
         
          <Link to="/" style={{textDecorationLine:'none',color:'white'}}>
            <Typography variant="h6" className={classes.title}>
              <img src={img} alt="Commerce.js" height="60px" className={classes.image}/>
              <div >
              فروشگاه گل و گیاه 
              </div>
            </Typography>
          </Link>
         
          <div> 
          {isMobile ? (
              <>
                <IconButton edge="start"
                onClick={handleMenu}
                className={classes.menuButton}
                color="inherit" 
                aria-label="menu">
                    <MenuIcon />
                </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
                // className={classes.hambergur}
              >
                  
                <MenuItem   >
                  <Tabs
                  
                  className={classes.hambergur}
                  selectedTab={selectedTab} 
                  onChange={handleChange}
                  />
                 
                  
                </MenuItem>
                 {/* <MenuItem onClick={(newValue) => handleMenuClick(`/adminPanel/${tabNameToIndex[newValue]}/`)}> کالاها</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/PriceManagment')}> موجودی وقیمت</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/OrderManagment')}> سفارش ها</MenuItem> */}
                <MenuItem><Button variant="text" className={classes.exist} onClick={handleGoToLogin}> خروج</Button></MenuItem>
              </Menu>
              </>
             
              ):(
              
                <div style={{display:'flex'}}>
                <div >
                  <Tabs
                  className={classes.headerOption}
                  selectedTab={setSelectedTab} 
                  onChange={handleChange}
                  />
                </div>
                
                 <BiLogOut className={classes.exist} onClick={handleGoToLogin} title="خروج" />
                
                </div>
           
              )}
            
            </div>
            {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleProfile}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
              
        </Toolbar>
      </AppBar>
      {selectedTab === 0 && <ProductManagement/>}
      {selectedTab === 1 && <PriceManagment/>}
      {selectedTab === 2 && <OrderManagment/>}
     
    </div>
     
  );
 
     
 
}


export default Header
