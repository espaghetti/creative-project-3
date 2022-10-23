import React from 'react';

const About = () => {
  return (
    <div>
        <div class='page'>
            <div class='content'>
                <p>
                    Hello! My name is Beatrice and I started B's Bakery a few months ago out of my kitchen!
                    Today, I am proud to announce that there is now a store-front for B's Bakery and
                    we are open for business! We cater to those early risers looking for a quick and delicious
                    breakfast fix, and we are ready for late night snacks (if you come in before 9!). Everyone
                    is welcome here at B's Bakery, and we look forward to serving you and your friends
                    from our wide variety of items!
                </p>
                <p>
                    If you have any suggestions for a new dessert or custom baked good, just give us a call 
                    and we'll see what we can do!
                </p>
            </div>
            <div class="beatrice">
                <img src='images/old_grandma_stock_photo.jpeg'></img>
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
export default About;