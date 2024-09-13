import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import '../style/Home.css'
export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
             <div className='navbar-brand' to='/'>
            <img src= {assets.logo} alt='logo' style={{height:'40px'}} />
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
                        Collection
                    </li>
                    </Link>
                   
                    <Link className='nav-item' to='/'>
                    <li className='nav-link'>
                     <FaUserAlt/>   About
                    </li>
                    </Link>
                   
                    <Link className='nav-item' to='/'>
                    <li className='nav-link'>
                        Contact
                    </li>
                    </Link>
                   
                </ul>
            </div>
            <div className='profile-icon'>
                <div>
                <img src={assets.search_icon} alt='' style={{width:'20px'}}/>
                </div>
               <div>
               <img src={assets.profile_icon} alt='' style={{width:'20px'}}/>
               </div>
              
                <div>
                <img src={assets.cart_icon} alt='' style={{width:'20px'}}/>
                </div>
              
            </div>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target= '#navbarnav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

        </div> 

    </nav>
  )
}