import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Button, Typography, ListItemSecondaryAction} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/R (1).png';
import {useStyles} from './style'
import { Link, useHistory, useLocation } from 'react-router-dom';
import {isLoggedIn,logout} from '../../../utils/auth'
import { BsHouseDoorFill } from "react-icons/bs";
import { makeStyles,useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { getProducts } from '../../../redux/actions/productActions';

const useStyless = makeStyles((theme) => ({
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
    },
    btns:{
        fontSize:'18px',
        fontWeight:'bold',
        marginRight:'40px',
        [theme.breakpoints.between(768,900)]:{
            marginRight:'0',

          },
    },
    parentDiv:{
        marginLeft:'450px',
        [theme.breakpoints.between(768,1030)]:{
            marginLeft:'100px',

          },
    }
    
  }));
function NavBar({totalItems,onClick,products}) {
    const classes = useStyles()
    const location = useLocation()
    const history = useHistory()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classess =useStyless()
    const pattern = /adminPanel/;
    const patternCategory = /category/;
    const resCat=patternCategory.test(location.pathname)
    const res =pattern.test(location.pathname);
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
        <>
            <AppBar position="fixed" className={isLoggedIn() &&  location.pathname === '/' ? classes.notShow : classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/product" style={{textDecorationLine:'none',color:'black'}}>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="80px" className={classes.image}/>
                         
                    </Typography>
                    </Link>
                    <div className={classes.grow}/>
                    {/* <div className={classes.button} style={{display:'flex',justifyContent:'space-between'}}> */}
                    
                      {/* { res ? (
                          <div>
                          <Button variant="text" component={Link} to="/adminPanel/productmanagement">کالاها</Button>
                          <Button variant="text" component={Link} to="/adminPanel/PriceManagment">موجودی و قیمت</Button>
                          <Button variant="text" component={Link} to="/adminPanel/OrderManagment">سفارش ها</Button>
                          </div>
                      )
                      :
                      (
                          <div>
                          <Button variant="text"  component={Link} to={isLoggedIn() ? "/adminPanel" : '/login'}  >مدیریت</Button>
                          <IconButton >
                          <Badge component={Link} to="/basket" badgeContent={totalItems} color="secondary"  >
                              <ShoppingCartIcon onClick={onClick} style={{color:'black',marginTop:'3.5px'}}/>
                          </Badge>
                      </IconButton>
                      </div>

                      ) 
                        } */}
                         {/* <BsHouseDoorFill style={{width:'50px',height:'25px',marginTop: '13px'}}/> */}

                    {/* </div>  */}
                    <div>
                    {res && isMobile ? (
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
                  
                <MenuItem onClick={(newValue) => handleMenuClick(`/product`)}  >خانه</MenuItem>
                 <MenuItem onClick={(newValue) => handleMenuClick(`/adminPanel/productmanagement`)}> کالاها</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/PriceManagment')}> موجودی وقیمت</MenuItem>
                 <MenuItem onClick={() => handleMenuClick('/adminPanel/OrderManagment')}> سفارش ها</MenuItem>
                <MenuItem onClick={handleGoToLogin}>  خروج</MenuItem>
              </Menu>
              </>
             
              ):(
                <div className={classes.button} style={{display:'flex',justifyContent:'space-between'}}>
                { res ? (
                    <>
                    <div className={classess.parentDiv} >
                    <Button variant="text" className={classess.btns} component={Link} to="/adminPanel/PriceManagment" >موجودی و قیمت</Button>
                    <Button variant="text" className={classess.btns} component={Link} to="/adminPanel/OrderManagment"  >سفارش ها</Button>
                    <Button variant="text" className={classess.btns} component={Link} to="/adminPanel/productmanagement" >کالاها</Button>
                    </div>
                    <Button variant="text" onClick={handleGoToLogin} style={{fontSize:'18px',fontWeight:'bold',marginRight:'40px'}}>خروج</Button>
                    </>
                )
                :
                (
                    <div>
                    <Button variant="text"  component={Link} to={isLoggedIn() ? "/adminPanel" : '/login'} style={{color:'#cdf6d5'}}  >مدیریت</Button>
                    <IconButton >
                    <Badge component={Link} to="/basket" badgeContent={totalItems} color="secondary"  >
                        <ShoppingCartIcon onClick={onClick} style={{ color:'#cdf6d5',marginTop:'3.5px'}}/>
                    </Badge>
                </IconButton>
                </div>

                ) 
                  }
            </div>
              )}

          
              
                
            </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default NavBar
