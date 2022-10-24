import React from 'react';

const About = () => {
  return (
    <div>
        <div class='faq'>
            <div class='faq-container'>
               <div class='faq-item'>
                    <h2>How expensive is your stuff?</h2>
                    <p>It really depends on what you order! But our least expensive item
                    is a cookie, at 3$, and our most expensive would probably be one of our cakes.</p>
               </div> 
               <div class="separator"></div>
               <div class='faq-item'>
                    <h2>Do you cater?</h2>
                    <p>Yes! We cater to places within a thirty or so mile radius from our store for 
                    all types of events, from weddings to bah mitzvahs to baby showers to any gathering 
                    where you need food:) We are willing to travel farther, but it will cost more.</p>
               </div> 
               <div class="separator"></div>
               <div class='faq-item'>
                    <h2>Are you looking to hire anyone?</h2>
                    <p>If you're looking for a job, you can come speak to me during our hours of business
                    and we can set up an appointment if you seem promising! We love encouraging bakers of
                    all ages and skill levels, so feel free to apply! We also need people to man the cash
                    register and clean the store, so you don't have to be a baker to apply.</p>
               </div>
               <div class="separator"></div>
               <div class='faq-item'>
                    <h2>How long have you been baking?</h2>
                    <p>I've been baking since I was a young girl. My mother taught me everything I know, and
                    her mother taught her, and her mother taught her, all the way back to the first of my 
                    ancestors. I love baking so much and I hope that my baked goods can bring you guys some 
                    happiness I've felt in my life.</p>
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
    </div>
  );
};
export default About;