import React from 'react'
import { Container,Typography, Button,Grid } from '@material-ui/core';
import CartItem from './cartItem/CartItem';
import { useStyles } from './Style';
import { Link } from 'react-router-dom';

const Cart = ({cart,onDelete,value,addValue,decValue}) => {
    const classes = useStyles();
    const isEmpty = !cart?.length ;
    let sum = 0
    const EmptyCard = () => (
        <div >
        <Typography variant="subtitle1">سبد خرید شما خالیست  </Typography>
            <Link to="/" className={classes.link}>اضافه کردن محصول</Link>
       </div>
    );

    const FilledCard = ({value,addValue,decValue,productSum}) => (
        
        
        <>

            <Grid item container spacing={3}>
                {cart.map((item) => (
                    <>
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <div>{item.title}</div> */}
                        <CartItem item = {item} handleDelete={onDelete} value={value} addValue={addValue} decValue={decValue}/>
                      
                    </Grid>
            </>
                ))}
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                مبلغ کل:{sum}
                    <div>
                        {/* <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">خالی کردن سبد خرید</Button> */}

                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">نهایی کردن خرید</Button>
                    </div>

                </Typography>

            </div>
                 
            </Grid>
        </>    
    )
    // console.log(cart);
    let productSum = cart?.map((item) => sum = sum + item.price * value)

    // if(!cart?.length) return 'Loading... '
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>سبد خرید</Typography>
            {isEmpty ? <EmptyCard /> : <FilledCard value={value} addValue={addValue} decValue={decValue} productSum={productSum}/>}
        </Container>
    )
}

export default Cart

