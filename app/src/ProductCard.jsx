import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
                title={product.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" component="div">
                    ${product.price}
                </Typography>
                <Button variant="contained" color="primary" onClick={addToCart}>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
