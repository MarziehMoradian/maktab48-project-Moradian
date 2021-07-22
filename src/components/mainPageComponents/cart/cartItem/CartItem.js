import React from 'react'
import { Typography,Button,Card,CardActions,CardContent, CardMedia } from '@material-ui/core'
import { useStyles } from '../style'

const CartItem = ({item}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.product.image} alt={item.title} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.description}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.button}>
                    <Button type='button' size="small">+</Button>
                    <Typography>{item.id} </Typography>
                    <Button type='button' size="small">-</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
