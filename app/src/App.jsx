import React from 'react';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import ProductPage from './ProductPage'; 
function App() {
  const router=createBrowserRouter([
   
    {
      path:'/',
      element:    <><Header/><HomePage/></>
    },
    {
      path:'/footer',
      element:    <><Header/><Footer/></>
    },
    {
      path:'/homepage',
      element:    <><Header/><HomePage/></>
    },
    {
      path:'/cart',
      element:    <><Header/><CartPage/></>
    },
    {
      path:'/products',
      element:    <><Header/><ProductPage/></>
    },
    
    
    
  ])
    return (
        <>
            <div style={{ marginTop: '64px' }}>  
        
         <CartProvider>
          
    <RouterProvider router={router} />
    <Footer />
    </CartProvider>
    </div>
    </>
    );
}

export default App;
