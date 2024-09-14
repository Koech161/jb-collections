import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import CollectionDetails from './components/CollectionDetails';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import Contact from './components/Contact';
import { CartProvider } from './components/CartContext';


function App() {
 
  return (
    <div className="">
      <CartProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/collection/:id' element={<CollectionDetails />}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
     
    </div>
  );
}

export default App;
