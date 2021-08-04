import React from 'react'
import { Typography,Button,Card,CardActions,CardContent, CardMedia } from '@material-ui/core'
import { useStyles } from './style'

const CartItem = ({item,handleDelete,value,addValue,decValue}) => {
    const classes = useStyles();
    // const dispatch = useDispatch()
    // const handleDelete = () => {
    //     dispatch(removeFromCart)
    // } 
    // const addValue = () => {
        
    // }
    // const decValue = () => {

    // }
  
    return (
        <Card>
            <CardMedia image={item.image} alt={item.title} className={classes.media} style={{ height:'360px',
        
        paddingTop:'56.25%',}}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">{item.price}تومان</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size="small" onClick={addValue(item.num)}>+</Button>
                    <Typography>{item.num}</Typography>
                    <Button type='button' size="small" onClick={decValue(item.num)}>-</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleDelete(item.id)}>حذف</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
