import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Button, Typography} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/R (5).png';
import {useStyles} from './style'
import { Link, useLocation } from 'react-router-dom';
import {isLoggedIn,logout} from '../../../utils/auth'

function NavBar({totalItems,onClick}) {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={isLoggedIn() && location.pathname === "/adminPanel" ? classes.notShow : classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/" style={{textDecorationLine:'none',color:'black'}}>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="80px" className={classes.image}/>
                        فروشگاه گل و گیاه 
                    </Typography>
                    </Link>
                    <div className={classes.grow}/>
                   <div className={classes.button}>
                        
                        <Button variant="text"  component={Link} to={isLoggedIn() ? "/adminPanel" : '/login'}  >مدیریت</Button>
                        <IconButton >
                            <Badge component={Link} to="/basket" badgeContent={totalItems} color="secondary" >
                                <ShoppingCartIcon onClick={onClick}/>
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default NavBar
