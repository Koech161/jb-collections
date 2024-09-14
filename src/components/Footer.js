import React from 'react'
import logo from '../assets/collection.png'
const Footer = () => {
  return (
    <footer className='container ' style={{marginTop: '100px'}} >
        <div className='row'>
          <div className='col-md-4'>
            <img src= {logo} alt='footer-image' style={{width: '200px'}}/>
            <p>100% Original product.<br></br>
              Cash on delivery is available on this product.<br></br>
              Easy return and exchange policy within 7 days.</p>
          </div>
          <div className='col-md-4'>
            <h2>COMPANY</h2>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>PATNERS</p>
          </div>
          <div className='col-md'>
            <h2>CONTACT</h2>
            <p>+(012) 345 6789</p>
            <p>sleekstylish0@gmail.com</p>
          </div>
        </div>
        <p className='text-center'>&copy; sleek&stylish 2024. All rigth reserved.</p>
    </footer>
  )
}

export default Footer
