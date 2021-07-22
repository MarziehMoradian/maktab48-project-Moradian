import React from 'react'
import { Container,Typography, Button,Grid } from '@material-ui/core'
import {useStyles} from './style'
import CartItem from './cartItem/CartItem';


const Cart = ({cart}) => {
    const classes = useStyles();
    const isEmpty = !cart.length ;
    const EmptyCard = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some</Typography>
    );

    const FilledCard = () => (
        
        <>

            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={cart.id}>
                        {/* <div>{item.title}</div> */}
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    subtotal: {cart.description}
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">CheckOut Cart</Button>
                    </div>

                </Typography>

            </div>
        </>    
    )
    
    if(!cart.length) return 'Loading... '
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCard /> : <FilledCard/>}
        </Container>
    )
}

export default Cart

