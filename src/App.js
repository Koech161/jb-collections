import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import CollectionDetails from './components/CollectionDetails';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div className="">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/collection/:id' element={<CollectionDetails/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
        </Routes>
        <Footer />
      </Router>
     
     
    </div>
  );
}

export default App;
