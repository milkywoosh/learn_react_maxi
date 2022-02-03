import React from 'react';

// this context is the default context
// can be modified outside but need to always suitable based on context
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
})

export default CartContext;