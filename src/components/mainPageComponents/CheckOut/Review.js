import React, { useEffect } from 'react'
import { Typography,List, ListItem, ListItemText } from '@material-ui/core';
import {setCartProducts} from '../../../redux/actions/basketAction'
import { useSelector,useDispatch } from 'react-redux';
const Review = () => {
    // const basket = useSelector(state => state.baskets.cardProducts)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(setCartProducts())
    // },[])
    return (
        <>
            <Typography varia="h6" gutterBottom>Order Summery</Typography>
            <List disablePadding>
                {/* {basket.map((product) => ( 
                    <ListItem style={{padding:'10px 0'}} key={product.id}>
                        <ListItemText primary={product.title} />
                        <Typography variant="body2">{product.image}</Typography>

                    </ListItem>

                ))} */}
                <ListItem style={{padding:'10px 0'}}>
                    <ListItemText primary="Total"/>
                    <Typography></Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
