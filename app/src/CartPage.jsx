import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useCart } from './CartContext';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(4, 0),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    media: {
        height: 200,
    },
}));

const CartPage = () => {
    const classes = useStyles();
    const { cart, dispatch } = useCart();

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Typography variant="h4" align="center" gutterBottom>
                    Your Cart
                </Typography>
                <Grid container spacing={4}>
                    {cart.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        ${product.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Quantity: {product.quantity}
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" color="secondary" onClick={() => removeFromCart(product)}>
                                    Remove
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {cart.length > 0 && (
                    <>
                        <Typography variant="h6" align="center" gutterBottom>
                            Total Price: ${totalPrice.toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={clearCart} style={{ marginTop: theme.spacing(4) }}>
                            Clear Cart
                        </Button>
                    </>
                )}
                {cart.length === 0 && (
                    <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                        Your cart is empty.
                    </Typography>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default CartPage;
