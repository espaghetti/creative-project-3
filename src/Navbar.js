import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
  
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light navbar-style menu">
            <LinkContainer to="/">
                <a class="navbar-brand menu-item" id='logo'>B's Bakery</a>
            </LinkContainer>
            <div class='menu-content'>
                <LinkContainer to="/menu">
                    <a class="navbar-brand menu-content-item">Menu</a>
                </LinkContainer>
                <LinkContainer to="/about">
                    <a class="navbar-brand menu-content-item">About</a>
                </LinkContainer>
                <LinkContainer to="/faq">
                    <a class="navbar-brand menu-content-item">FAQ</a>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <a class="navbar-brand menu-content-item">Cart</a>
                </LinkContainer>
            </div>
        </nav>
    </div>
  );
};
export default Navbar;