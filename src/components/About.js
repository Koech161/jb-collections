import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <div className='row align-items-center'>
        <img src={assets.about_img} alt='about Us' className="img-fluid mb-4 col-md-6"/>
        <div className='col-md-6'>
        <h1 className="display-4 mb-4 ">About Us</h1>
        <p className="lead">
          Welcome to <strong>Sleek & Stylish</strong>, where fashion meets passion. We believe that every piece of clothing tells a story, and we're here to help you tell yours with style and confidence.
        </p>
        <p>
          Founded in <strong>2024</strong>, our brand has grown from a small boutique into a global fashion destination. Our mission is to offer high-quality, trendsetting clothing that makes you feel as amazing as you look. We are committed to sustainability and ethical fashion practices, ensuring that our collections are both stylish and responsible.
        </p>
        <h2 className="my-4">Our Story</h2>
        <p>
          <strong>Sleek & Stylish</strong> was born out of a love for unique, high-quality fashion. Our founder, <strong>Ben White</strong>, envisioned a brand that would blend classic elegance with contemporary trends. From the very beginning, our goal has been to provide our customers with pieces that are not only fashionable but also timeless.
        </p>
        </div>
        </div>
        <h2 className="my-4">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card p-3">
              <h5 className="card-title">Quality</h5>
              <p className="card-text">We prioritize the craftsmanship and materials used in every item we create.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3">
              <h5 className="card-title">Sustainability</h5>
              <p className="card-text">We are dedicated to minimizing our environmental impact through eco-friendly practices and sustainable sourcing.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3">
              <h5 className="card-title">Customer Focus</h5>
              <p className="card-text">Our customers are at the heart of everything we do. We strive to exceed your expectations with every purchase.</p>
            </div>
          </div>
        </div>
        <h2 className="my-4">Join Us</h2>
        <p>
          Be part of our fashion journey. Follow us on social media, sign up for our newsletter, and stay updated with the latest trends and exclusive offers. Together, let’s redefine fashion with a touch of elegance and a commitment to sustainability.
        </p>
      </div>
      <div className='text-center my-5'>
        <h2>Subscribe Now & Get 10% Off</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form>
          <div className='input-group mb-4'>
            <input 
              type='email' 
              placeholder='Enter Your Email' 
              className='form-control'
              aria-label='Email Address'
            />
            <button className='btn btn-dark text-light' type='submit'>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
