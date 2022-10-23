import React from 'react';

const Home = () => {
  return (
    <div>
        <h1>Welcome to my bakery!</h1>
    
        <div class='photo-row'>
            <div class='photo-row-container'>
                <img src='/images/oreo-cheesecake.jpg' class='food-pic'></img>
                <img src='/images/pink-macaroons.jpg' class='food-pic'></img>
                <img src='/images/oreo-cheesecake.jpg' class='food-pic'></img>
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
  );
};
export default Home;