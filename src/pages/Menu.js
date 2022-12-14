import React from 'react';

const Menu = () => {
  return (
    <div>
      <div class='bakery-item-grid'>
        <div class='bakery-item-grid-container'>
          <div class='bakery-item'>
            Coconut Macaroons
            <img src={require('../images/coconut-macaroon.png')}></img>
          </div>
          <div class='bakery-item'>
            Berry Chantilly Cake
            <img src={require('../images/berry-chantilly-cake.png')}></img>
          </div>
          <div class='bakery-item'>
            Dulce de Leche Cookies
            <img src={require('../images/dulce-de-leche-cookies.png')}></img>
          </div>
          <div class='bakery-item'>
            Macaroons
            <img src={require('../images/pink-macaroons.jpg')}></img>
          </div>
          <div class='bakery-item'>
            Oreo Cheesecake
            <img src={require('../images/oreo-cheesecake.jpg')}></img>
          </div>
          <div class='bakery-item'>
            Mackle's'mores
            <img src={require('../images/macklesmores.png')}></img>
          </div>
          <div class='bakery-item'>
            Sour Dough Loaf
            <img src={require('../images/sour-dough.png')}></img>
          </div>
          <div class='bakery-item'>
            Mudslide Cookies
            <img src={require('../images/mudslide-cookies.jpg')}></img>
          </div>
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
      <div id="github-link">https://github.com/espaghetti/creative-project-3</div>
    </div>
    );
};
export default Menu;