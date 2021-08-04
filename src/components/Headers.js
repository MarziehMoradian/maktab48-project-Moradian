import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery,  Badge } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { logout} from '../utils/auth';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
// import { BsHouseDoorFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar:{
    background:'linear-gradient(to left,#03130c,#165a39)',
    padding:'10px',
  
  },
  menuButton: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.between(320,425)]:{
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.between(425,720)]:{
      marginRight: theme.spacing(18),
    },
    [theme.breakpoints.between(425,720)]:{
      marginRight: theme.spacing(18),
    },
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
    color:'white',
    cursor:'pointer',
    // backgroundColor:'black',
   height:'50px',
   width:'30px',

    
    [theme.breakpoints.between(1024,1400)]:{
      marginRight:'200px',
      
      
    },
    [theme.breakpoints.up(1400)]:{
      marginRight:'700px'
    },
  },
  divi:{
    marginRight:'500px',
    display:'flex',
    flexWrap:'nowrap',
    justifyContent:'space-between',
    [theme.breakpoints.down('xs')]:{
      marginRight:'200px',
      
      
    },
    [theme.breakpoints.up(1020,1400)]:{
      marginRight:'600px',
      
      
    },
    [theme.breakpoints.between(425,768)]:{
      marginRight:'100px',
      
      
    },
  }
  
}));

const Header =({totalItems,onClick}) => {
  // const {history,match} = props;
  // const {params} = match;
  // const {page} = params;
  const history = useHistory()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes =useStyles()
  // const indexToTabName = {
  //   ProductManagement:0,
  //   PriceManagment:1,
  //   OrderManagment:2,
  // }
  // const tabNameToIndex = {
  //   0: "productManagment",
  //   1:"PriceManagment",
  //   2:"OrderManagment",
  // }
  // const [selectedTab, setSelectedTab] =React.useState(indexToTabName[page]);
  // const [selectedTab, setSelectedTab] =React.useState(0);
  
  //Actions
  // const handleChange = (event, newValue) => {
     
  //     history.push(`/adminPanel/${tabNameToIndex[newValue]}/`)  
  //     setSelectedTab(newValue);
  //     setAnchorEl(null);
  //   }
 
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
         
          {/* <Link to="/" style={{textDecorationLine:'none',color:'white'}}>
            <Typography variant="h6" className={classes.title}>
              <img src={img} alt="Commerce.js" height="60px" className={classes.image}/>
              <div >
              فروشگاه گل و گیاه 
              </div>
            </Typography>
          </Link> */}
           
          <div> 
          {isMobile ? (
              <>
                <IconButton edge="start"
                onClick={handleMenu}
                className={classes.menuButton}
                color="inherit" 
                // style={{marginLeft:'100px'}}
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
                  
                <MenuItem   >خانه</MenuItem>
                 <MenuItem onClick={(newValue) => handleMenuClick(`adminPanel/productmanagement`)}> کالاها</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/PriceManagment')}> موجودی وقیمت</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/OrderManagment')}> سفارش ها</MenuItem>
                <MenuItem onClick={handleGoToLogin}>  خروج</MenuItem>
              </Menu>
              </>
             
              ):(
              
              null
   
              )}
                
            </div>
            <div className={classes.divi}>
                 <RiAccountCircleLine className={classes.exist} onClick={handleGoToLogin} title="خروج" />
                 {/* <BsHouseDoorFill style={{width:'50px',height:'25px',marginTop: '13px'}}/> */}
                
                    <IconButton >
                      <Badge component={Link} to="/basket" badgeContent={totalItems} color="secondary"  >
                        <ShoppingCartIcon onClick={onClick} style={{color:'white'}}/>
                      </Badge>
                  </IconButton>
            </div>
        </Toolbar>
      </AppBar>
 
     
    </div>
     
  );
 
     
 
}


export default Header
