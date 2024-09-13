import React from 'react'
import { assets, products } from '../assets/assets'
import '../style/Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  const best_seller = products.filter(product => product.bestseller === true)
   console.log(best_seller);
   
  
    
   const handledetails = (id) =>{
       navigate(`/collection/${id}`)
   }
  return (
    <div className='home container text-center'>
       <div className='cards hero-section border-dark mb-4'>
        <div className='card col-md-4 heading border-light'>
            <h4 className='fw-bold'>  OUR BESTSELLERS</h4>
            <h1 className='fw-bold'>Latest Arrivals</h1>
            <button className='btn bg-info rounded-pill'>SHOP NOW</button>
        </div>
        <div className='card  p-1 col-md-4  border-light'>
            <img className='img-fluid' src={assets.hero_img} alt='header' />
        </div>
       </div>
       <div className='latest'>
        <h1>LATEST <span className='fw-bold'>COLLECTIONS</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br></br> Ipsum has been the.</p>
        <div className='cards row center  border-light'>
            {products.slice(3,15).map(product=>(
                <div key={product._id} className='card text-center  mb-5 p-1 border-light shadow-sm' style={{width: '230px',gap: '20px'}} onClick={()=> handledetails(product._id)}>
                    <img className='img-fluid card-img-top' src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
       </div>
       <div className='best-sellers'>
       <h1>BEST <span className='fw-bold'>SELLERS</span></h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br></br>
        Ipsum has been the.</p>
        <div className='cards row border-light'>
            {best_seller.map(bestsell =>(
                 <div key={bestsell._id} className=' card mb-4 p-1 border-light shadow-sm' style={{width: '230px',gap: '20px'}} onClick={()=> handledetails(bestsell._id)}>
                 <img className='img-fluid card-img-top' src={bestsell.image} alt={bestsell.name} />
                 <p>{bestsell.name}</p>
                 <p>${bestsell.price}</p>
                 </div>
            ))}
        </div>
       </div>
       <div className='row'>
        <div className='col-md-4 mb-4'>
            <img src={assets.exchange_icon} alt='exchange'/>
            <h4>Easy Exchange Policy</h4>
            <p>We offer hassle free exchange policy</p>
        </div>
        <div className='col-md mb-4'>
            <img src={assets.quality_icon} alt='quality'/>
            <h4>7 Days Return Policy</h4>
            <p>We provide 7 days free return polic</p>
        </div>
        <div className='col-md mb-4'>
            <img src={assets.support_img} alt='support'/>
            <h4>Best customer support</h4>
            <p>we provide 24/7 customer support</p>
        </div>
       </div>
       <div className='subscribe'>
        <h1>Subscribe now & get 20% off</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <input type='email' placeholder='Enter Your email' 
        className='mb-4'/>
        <button className='btn bg-dark text-light'>
            SUBSCRIBE
        </button>
       </div>
    </div>
  )
}

export default Home
