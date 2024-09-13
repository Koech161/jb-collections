import React from 'react'
import { assets, products } from '../assets/assets'
import { useParams } from 'react-router-dom'

const CollectionDetails = () => {
    const {id} = useParams()
    const product = products.find(pro => pro._id === id)
  

    if (!product){
        return <p>Product not found</p>
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='cols-md-4'>
            <img src={product.image} alt={product.name} style={{height:'100px', width:'100px'}}/>
            <img src={product.image} alt={product.name} style={{width:'350px'}}/>
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
                    <span key={index} className=' col-md mb-4 btn btn-light m-1 border-dark bg-light fw-bold' >{size}</span>
                ))}
                </div>
               
                <button className='btn bg-dark btn-light text-light btn-secondary' type='submit'>ADD TO CART</button>
            </div>
            </div>
            <div>
                <p>100% Original product.<br></br>

            Cash on delivery is available on this product.<br></br>

            Easy return and exchange policy within 7 days.</p>
            </div>
           
      </div>
    </div>
  )
}

export default CollectionDetails
