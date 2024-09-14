import React, { useState } from 'react'
import { assets, products } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from './CartContext'

const CollectionDetails = () => {
  const {addToCart} = useCart()
    const {id} = useParams()
    const navigate = useNavigate()
    const product = products.find(pro => pro._id === id)

    const [selectedSize, setSelectedSize] = useState('')

    
    const handlclick = () => {
      navigate('/collection')
    }
    const handleSizeSelect = (size) => {
      setSelectedSize(size)
    }
    const handleAddToCart =() =>{
      if (!selectedSize) {
        alert('please selected a size');
        return;
      }
      addToCart(product, selectedSize)
      alert(`Added ${product.name} of size ${selectedSize} to cart`)
    }
    if (!product){
        return <p>Product not found</p>
    }
  return (
    <div className='container' style={{marginTop:'130px'}}>
       <button className='btn btn-light bg-info rounded-pill ' onClick={handlclick}>{'<'} {'<'} Back</button>
      <div className='row'>
        <div className='col-md-4'>
            <img src={product.image} alt={product.name} style={{height:'100px', width:'100px'}}/>
            <img className='img-fluid' src={product.image} alt={product.name} style={{width:'350px'}}/>
            </div>
            <div className='col-md-8'>
            <div className='card p-3'>
                <h1>{product.name}</h1>
                <div>
                    <img src={assets.star_icon} alt='star_icon'/>
                    <img src={assets.star_icon} alt='star_icon'/>
                    <img src={assets.star_icon} alt='star_icon'/>
                    <img src={assets.star_icon} alt='star_icon'/>
                    <img src={assets.star_dull_icon} alt='star_icon'/>
                    (122)
                </div>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
               
                <div className=' my-4'> 
                <h5 className='fw-bold'>Select size</h5>
                {product.sizes.map((size,index)=>(
                    <button key={index}
                     className={`col-md mb-4 btn btn-light m-1 border-dark bg-light fw-bold ${selectedSize === size ? 'bg-dark text-light': 'bg-light'}`} 
                     onClick={() => handleSizeSelect(size)} >
                      {size}
                      </button>
                ))}
                </div>
               
                <button className='btn  rounded-pill bg-dark btn-light text-light  ' type='submit'
                onClick={handleAddToCart}>ADD TO CART</button>
            </div>
            </div>
            <div className='col-12'>
                <p>100% Original product.<br></br>

            Cash on delivery is available on this product.<br></br>

            Easy return and exchange policy within 7 days.</p>
            </div>
           
      </div>
    </div>
  )
}

export default CollectionDetails
