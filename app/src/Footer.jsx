import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container style={{ marginTop: 'auto', padding: '1em 0', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                &copy; 2023 Shopcart. All rights reserved.
                Developed By Baljinder Kaur
            </Typography>
        </Container>
    );
};

export default Footer;
