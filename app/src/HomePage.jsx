import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProductList from './ProductList';

const HomePage = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Grab Up to 50% Off On Selected Headphones
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    
                </Box>
               
                <ProductList />
            </Box>
        </Container>
    );
};

export default HomePage;
