import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...state];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
