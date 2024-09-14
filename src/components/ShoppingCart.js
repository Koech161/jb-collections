import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const ShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + (item.price || 0), 0);
    const discount = subtotal * 0.1; 
    return subtotal - discount;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
   const handleDelete = (id) =>{
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item._id !== id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return updatedCart
    })
   }
  return (
    <div className='container my-5' style={{marginTop:'200px'}}>
      <h2 className='text-center mb-4'>Products</h2>
      {cart.length === 0 ? (
        <p className='text-center'>Your cart is empty!</p>
      ) : (
        <ul className='list-unstyled'>
          {cart.map((item) => (
            <div key={item._id} className='d-flex align-items-center mb-3'>
              <li className='flex-grow-1'>
                <div>{item.name}</div>
                <div>Price: ${item.price.toFixed(2)}</div>
                <div>Size: {item.selectedSize}</div>
              </li>
              <img 
                src={assets.bin_icon} 
                alt='Delete' 
                style={{ cursor: 'pointer', marginLeft: '10px' }} 
                onClick={() => handleDelete(item._id)}
              />
            </div>
          ))}
        </ul>
      )}
      <h1 className='text-center my-4'>Checkout</h1>
      <div className='text-center mb-4'>
        <p>Price: ${cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}</p>
        <p>10% off: ${(cart.reduce((total, item) => total + (item.price || 0), 0) * 0.1).toFixed(2)}</p>
        <h5>Total cost: ${calculateTotal().toFixed(2)}</h5>
      </div>
      <div className='text-center'>
        <h3>Payment Method</h3>
        <fieldset className='form-group'>
          <legend>Choose a payment method:</legend>
          <div className='form-check'>
            <input 
              type='radio' 
              id='cashOnDelivery' 
              name='paymentMethod' 
              className=''
            />
          
            <label htmlFor='cashOnDelivery' className='form-check-label'>
              Cash on Delivery
            </label>
          </div>
          <div className='form-check'>
            <input 
              type='radio' 
              id='razorpay' 
              name='paymentMethod' 
              className='' disabled
            />
            <label htmlFor='razorpay' className='form-check-label'>
              Pay with Razorpay
            </label>
            <img src={assets.razorpay_logo} alt='Razorpay' className='img-fluid my-2' style={{ maxWidth: '100px' }} />
          </div>
          <div className='form-check'>
            <input 
              type='radio' 
              id='stripe' 
              name='paymentMethod' 
              className='' disabled
            />
            <label htmlFor='stripe' className='form-check-label'>
              Pay with Stripe
            </label>
            <img src={assets.stripe_logo} alt='Stripe' className='img-fluid my-2' style={{ maxWidth: '100px' }} />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ShoppingCart;
