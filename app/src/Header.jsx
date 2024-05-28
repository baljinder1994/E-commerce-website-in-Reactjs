import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './CartContext';

const Header = () => {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#1976d2', width: '100%', zIndex: 1300 }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Shopcart
                    </Link>
                </Typography>
                <div>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
                        Home
                    </Link>
                    <Link to="/whatsnewpage" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
                        WHAT'S NEW
                    </Link>
                    <IconButton color="inherit" component={Link} to="/cart">
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Badge badgeContent={cartItemCount} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
