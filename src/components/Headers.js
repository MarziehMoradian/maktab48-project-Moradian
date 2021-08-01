import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useMediaQuery } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import img from '../assets/images/R (5).png'
import Tabs from './Tabs'
import ProductManagement from '../pages/admin/Productsmanagement';
import PriceManagment from '../pages/admin/PriceManagement';
import OrderManagment from '../pages/admin/OrderManagment';
import { Link } from 'react-router-dom';

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
    flexDirection:'column',

    // width:'100px',
    // height:'300px'
  },
  
}));

const Header =(props) => {
  const {history,match} = props;
  const {params} = match;
  const {page} = params;
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
 
  const theme = useTheme()
 const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const  handleMenuClick = (newPage) => {
  //   setAnchorEl(null);
  //   history.push(newPage)
  // };
  
  return (
    <div className={classes.root}>
     
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
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
              >
                <MenuItem className={classes.hambergur}  >

                  <Tabs
                  
                  // classNameParent={classes.hambergur}
                  selectedTab={selectedTab} 
                  onChange={handleChange}
                  />
                   
                </MenuItem>
                {/* <MenuItem onClick={() => handleMenuClick('')}>My account</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>My account</MenuItem> */}
              </Menu>
              </>
             
              ):(
                <div >
                  <Tabs
                  className={classes.headerOption}
                  selectedTab={setSelectedTab} 
                  onChange={handleChange}
                  />
                </div>
              )}
            
            </div>
         
        </Toolbar>
      </AppBar>
      {selectedTab === 0 && <ProductManagement/>}
      {selectedTab === 1 && <PriceManagment/>}
      {selectedTab === 2 && <OrderManagment/>}
    </div>
     
  );
 
     
 
}


export default Header
