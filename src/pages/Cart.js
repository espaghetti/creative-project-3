import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';


const Cart = () => {
  return (
    <div>
        <div class='full-page'>
            <div class='cart'>
                <div class='cart-content'>
                Your cart is currently empty! Add items via the 
                <LinkContainer to="/menu">
                    <a id='cart-menu' class="navbar-brand">Menu</a>
                </LinkContainer>
                page!
                </div>
            </div>
            <div class='footer'>
                <div class='address'>
                    <h2>Locations:</h2>
                    <p>1290 N Cupcake Blvd</p>
                    <p>Provo, UT 84602</p>
                </div>
                <div class='hours'>
                    <h2>Hours:</h2>
                    <p>6AM-9PM Mon-Sat</p>
                    <p>Closed Sunday</p>
                </div>
                <div class='contact'>
                    <h2>Contact us:</h2>
                    <p>Instagram: @bbakes</p>
                    <p>Phone: (801)-287-2253</p>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Cart;