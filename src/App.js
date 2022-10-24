import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Home from './pages';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import FAQ from './pages/FAQ.js';
import Cart from './pages/Cart.js';
import { BrowserRouter as Router, Routes, Route, HashRouter}
    from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
          <Route exact path='/' exact element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/cart' element={<Cart/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
