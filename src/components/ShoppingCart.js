import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const ShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + (item.price || 0), 0);
    const discount = subtotal * 0.1; // 10% off
    return subtotal - discount;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='text-center' style={{ marginTop: '200px' }}>
      <h1>Checkout</h1>
      <div>
        <p>Price: ${cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}</p>
        <p>10% off: ${(cart.reduce((total, item) => total + (item.price || 0), 0) * 0.1).toFixed(2)}</p>
        <h5>Total cost: ${calculateTotal().toFixed(2)}</h5>
      </div>
      <div>
        <h3>Payment method</h3>
        <select>
          <option>Payment on delivery</option>
          <option>Pay with Razorpay</option>
          <option>Pay with Stripe</option>
        </select>
        <img src={assets.razorpay_logo} alt='Razorpay' />
        <img src={assets.stripe_logo} alt='Stripe' />
      </div>
    </div>
  );
};

export default ShoppingCart;
