import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Wireless Earbuds, IPX8', price: 89.00, description: 'Original Cotton, fairtrade certified', image: '/images/img1.jpg' },
    { id: 2, name: 'AirPods Max', price: 559.00, description: 'A perfect balance of high-fidelity audio', image: '/images/img2.jpg' },
    { id: 3, name: 'Bose BT Earphones', price: 289.00, description: 'Table with air purifier, stained veneer/black', image: '/images/img3.jpg' },
    { id: 4, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 5, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 6, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 7, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 8, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 9, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 10, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 11, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
    { id: 12, name: 'VIVEFOX Headphones', price: 39.00, description: 'Wired Stereo Headsets with Mic', image: '/images/img4.jpg' },
];

const ProductList = () => {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
