import React from 'react'
import { Container,Typography, Button,Grid } from '@material-ui/core';
import CartItem from './cartItem/CartItem';
import { useStyles } from './Style';
import { Link } from 'react-router-dom';

const Cart = ({cart,onDelete}) => {
    const classes = useStyles();
    const isEmpty = !cart.length ;
    const EmptyCard = () => (
        <Typography variant="subtitle1">سبد خرید شما خالیست
            <Link to="/products/category" className={classes.link}>اضافه کردن محصول</Link>
        </Typography>
    );

    const FilledCard = () => (
        
        <>

            <Grid item container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <div>{item.title}</div> */}
                        <CartItem item = {item} handleDelete={onDelete}/>
                      
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                مبلغ کل: {cart.price}
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">خالی کردن سبد خرید</Button>

                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">نهایی کردن سبد خرید</Button>
                    </div>

                </Typography>

            </div>
        </>    
    )
    
    if(!cart.length) return 'Loading... '
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>سبد خرید</Typography>
            {isEmpty ? <EmptyCard /> : <FilledCard/>}
        </Container>
    )
}

export default Cart

