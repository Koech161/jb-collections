import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/collection.png'
import { Link } from 'react-router-dom'
import { FaCloudsmith, FaHome, FaUserAlt } from 'react-icons/fa'
import '../style/Home.css'
import { FaPhoneSlash } from 'react-icons/fa6'
export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='container'>
             <div className='navbar-brand' to='/'>
            <img  className='img-fluid' src= {logo} alt='logo' style={{height:'60px'}} />
            </div>
            
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <Link className='nav-item' to='/'>
                    <li className='nav-link'>
                      <FaHome/>  Home
                    </li>
                    </Link>
                    <Link className='nav-item' to='/collection'>
                    <li className='nav-link'>
                      <FaCloudsmith/>  Collection
                    </li>
                    </Link>
                   
                    <Link className='nav-item' to='/about'>
                    <li className='nav-link'>
                     <FaUserAlt/>   About
                    </li>
                    </Link>
                   
                    <Link className='nav-item' to='/contact'>
                    <li className='nav-link'>
                      <FaPhoneSlash/>  Contact
                    </li>
                    </Link>
                   
                </ul>
            </div>
            <div className='profile-icon navbar-brand fixed-position'>
                <div>
                <img src={assets.search_icon} alt='' style={{width:'20px'}}/>
                </div>
               <div>
               <img src={assets.profile_icon} alt='' style={{width:'20px'}}/>
               </div>
              
                <Link to='/cart'>
                <img src={assets.cart_icon} alt='' style={{width:'20px'}}/>
                </Link>
              
            </div>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        </div> 

    </nav>
  )
}