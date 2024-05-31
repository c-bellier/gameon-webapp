import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.reference === product.reference);
      if (existingProduct) {
        const sizeItem = product.sizeChart.find(stock => stock.size === existingProduct.selectedSize);
        const maxQuantity = sizeItem ? sizeItem.quantity : 1;
        const newQuantity = Math.min(existingProduct.quantity + 1, maxQuantity);

        return prevCart.map(item =>
          item.reference === product.reference
          ? { ...item, quantity: newQuantity }
          : item
        );
      } else {
        const selectedSize = product.sizeChart.find(stock => stock.quantity > 0)?.size;
        const sizeItem = product.sizeChart.find(stock => stock.size === selectedSize);
        const initialQuantity = Math.min(1, sizeItem.quantity);

        return [...prevCart, { ...product, quantity: initialQuantity, selectedSize }];
      }
    });
  };

  const removeFromCart = (reference) => {
    setCart(prevCart => prevCart.filter(item => item.reference !== reference));
  };

  const updateQuantity = (product, quantity) => {
    const sizeItem = product.sizeChart?.find(stock => stock.size === product.selectedSize);
    const maxQuantity = sizeItem ? sizeItem.quantity : 1;
    const validQuantity = Math.min(quantity, maxQuantity);

    if (validQuantity <= 0) {
      removeFromCart(product.reference);
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.reference === product.reference ? { ...item, quantity: validQuantity } : item
      ));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
