import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './ProductList';

const ProductPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Products</Typography>
            <ProductList />
        </Container>
    );
};

export default ProductPage;
