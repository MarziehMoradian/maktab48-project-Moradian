import React from 'react'
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStyles} from './style'
function Product({product,onAddToCart}) {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
            
            <CardMedia className={classes.media} image={product.image} title={product.title}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"/>
               
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions} onClick={() => onAddToCart(product,1)}>
                <IconButton aria-lable="Add to Cart" >
                    <AddShoppingCartIcon/>
                </IconButton>

            </CardActions>
            
        </Card>
    )
}

export default Product
