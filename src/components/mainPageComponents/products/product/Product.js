import React from 'react'
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStyles} from './style';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
function Product({product,onAddToCart,onClick}) {
    const classes = useStyles();
    
    

    return (
        <div style={{backgroundColor:'#0c2b16'}}>
        <Card className={classes.root}>
            
            <CardMedia className={classes.media} image={product.image} title={product.title}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        <Link to={`/product/${product.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                            {product.title}
                        </Link>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"/>
               
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions} >
                {/* <IconButton aria-lable="Add to Cart"onClick={() => onAddToCart(product.id)} >
                    <AddShoppingCartIcon/>
                </IconButton> */}

            </CardActions>
            
        </Card>

        </div>
    )
}

export default Product
