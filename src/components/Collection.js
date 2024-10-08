import React from 'react'
import { products } from '../assets/assets'
import { useNavigate } from 'react-router-dom'  

const Collection = () => {
    const navigate = useNavigate()
    
    const handlclick = () =>{
      navigate('/')
    }
    const handledetails = (id) =>{
        navigate(`/collection/${id}`)
    }
    // const filtered = products.filter(product=>{
    //   product.category === 'Women'
    // })
    // console.log(filtered);
    
  return (
    <div className='container text-center' style={{marginTop:'200px'}}>
        <h1>ALL COLLECTIONS</h1>
        <button className='btn btn-light bg-info rounded-pill ' onClick={handlclick}>{'<'} {'<'} Back</button>
      <div className='cards row center  border-light'>
            {products.map(product=>(
                <div key={product._id} className='card text-center product  mb-5 p-1 border-light shadow-sm' style={{width: '230px',gap: '20px'}} onClick={()=>handledetails(product._id)}>
                    <img className='img-fluid card-img-top' src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Collection
