import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Menu from './Menu.js';
import About from './About.js';
import FAQ from './FAQ.js';
import Cart from './Cart.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </Router>
  );
}

export default App;
