import React from 'react'
import { assets, products } from '../assets/assets'

const ShoppingCart = () => {
  const price = products.filter(product => product.price === 140)
  console.log(price);
  

  return (
    <div className='text-center' style={{marginTop: '200px'}}>
      <h1>Checkout</h1>
      <div>
        <p>price:</p>
        <p> 10% off:</p>
        <h5>Total cost:</h5>
      </div>
      <div>
        <h3>Payments method</h3>
        <select>
        <option>Payment on delivery</option>
        <option>Pay with Razorpay </option>
        <option>Pay with Stripe</option>
        </select>
        <img src={assets.razorpay_logo} alt=''/>
        <img src={assets.stripe_logo} alt=''/>
        </div>
    </div>
  )
}

export default ShoppingCart
