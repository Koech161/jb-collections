import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import CollectionDetails from './components/CollectionDetails';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const addToCart = (product, size) =>{
    setCart((prevCart) => {
      const updatedCart = [...prevCart, {...product, selectedSize:size}]
      localStorage.setItem('cart',JSON.stringify(updatedCart))
      return updatedCart
    })
  }
  return (
    <div className="">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/collection/:id' element={<CollectionDetails addToCart={addToCart}/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
        </Routes>
        <Footer />
      </Router>
     
     
    </div>
  );
}

export default App;
