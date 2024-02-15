import React, { createContext, useContext, useReducer, useEffect } from 'react';
import useLocalStorage from './hooks/use-localstorage';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const isInCart = state.find(item => item.id === action.payload.id);
      if (isInCart) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);

    case 'CLEAR_CART':
      return [];

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const [state, dispatch] = useReducer(cartReducer, cart);

  useEffect(() => {
    setCart(state);
  }, [state, setCart]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
