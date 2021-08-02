import React from 'react'
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStyles} from './style';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Image from 'material-ui-image';
function Product({product,onAddToCart,onClick}) {
    const classes = useStyles();
    
    

    return (
        <div  >
        <Card className={classes.root}>
            
            {/* <CardMedia className={classes.media} image={product.image} title={product.title}/> */}
                    <Image src={product.image} alt={product.title}  title={product.title} style={{objectFit: 'fill'}}/>
            {/* <div  style={{width:'350px',height:'100px'}}> */}
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        <Link to={`/product/${product.id}`} style={{textDecorationLine:'none',color:'#04140d'}}>
                            {product.title}
                        </Link>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}تومان
                    </Typography>
                </CardContent>
                {/* <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"/> */}
               
            {/* </div> */}
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
