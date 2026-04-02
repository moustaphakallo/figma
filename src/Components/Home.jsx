import { Ambulance, Apple, BadgeCent, Eye, Headphones, Heart, Star } from "lucide-react";

export function Home(){
  return(
    <>


 
  {/* <!-- HERO SECTION --> */}
  <section className="section-containerr">
 
    {/* <!-- Sidebar categories --> */}
    <div className="Fashionn">
      <p>Woman's Fashion</p>
      <p>Men's Fashion</p>
      <p>Electronics</p>
      <p>Home &amp; Lifestyle</p>
      <p>Medicine</p>
      <p>Sports &amp; Outdoor</p>
      <p>Baby's &amp; Toys</p>
      <p>Groceries &amp; Pets</p>
      <p>Health &amp; Beauty</p>
    </div>
 
    {/* <!-- Hero banner --> */}
    <div className="Sho">
      <div className="her-left">
        <h3 className="her-subtitle">
          {/* <!-- Apple icon SVG --> */}
         
         <Apple /> iPhone 14 Series
        </h3>
        <h1 className="her-title">Up to 10%<br/>off Voucher</h1>
        <button className="her-btn">
          Shop Now <span className="arrow">→</span>
        </button>
      </div>
 
      <div className="her">
        {/* <!-- Remplace src par le chemin de ton image --> */}
        <img className="her-image" src="images/iphon17.png" alt="iPhone 14"/>
      </div>
    </div>
 
  </section>


{/* HERO SECTION */}


{/* FLASH SALES */}
<section className="flashsales-section-container">

<div className="section-title">

  <div className=" day ">
     <h2 >
  Flash Sales</h2>
    <h1>
       day  <br />03 :
    </h1>
    <h1>Hours<br /> 23:</h1>
    <h1> minut <br />19:</h1>
    <h1>  Seconds <br />56</h1>
  </div>
 
</div>

 <div className="related-grid">
               <div className="card">
              <div>
                <p className="discount">-30%</p>
                
                <div className="Eye">
                  < Heart />
                  <Eye />
                </div>
              </div>
              
            <img src="images/malt.png" alt="" />
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
            </div>
            <div className="star">
         
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
              <p>(88) </p>
            </div>
          </div>
          <div className="card">
            <div>
                <p className="discount">-40%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
            
            <img src="images/micro.jpg" alt="" />
            <button className="Add ">Add To Cart</button>
            <h4>HAVIT HV-G92 Gamepad</h4>
          <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

          <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           
            <img src="images/SA_Black_White_on_AkkoAlice.webp" alt="" />
            <h4>AK-900 Wired Keyboard</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                      <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

           <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           <img src="images/image17.jpg" alt="" />
           {/* <img src="images/image33.png" alt="" /> */}
            <h4>RGB Liquid CPU Cooler</h4>
           
         <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                     <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>
          </div>

</section>



<section className="flashsales-section-container">

<h2 className="section-title">Best Selling Products</h2>

<div className="products-grid">

<div className="product-card">
<img className="product-image" src="images/camera1.webp" />
<h4 className="product-name">Gaming Pad</h4>
<p className="product-price">$120</p>
</div>

<div className="product-card">
<img className="product-image" src="images/ddd.webp" />
<h4 className="product-name">Keyboard</h4>
<p className="product-price">$80</p>
</div>
<div className="product-card">
<img className="product-image" src="images/image30.png" />
<h4 className="product-name">Keyboard</h4>
<p className="product-price">$80</p>
</div>
<div className="product-card">
<img className="product-image" src="images/image31.png" />
<h4 className="product-name">Keyboard</h4>
<p className="product-price">$180</p>
</div>
<div className="product-card">
<img className="product-image" src="images/image33.png" />
<h4 className="product-name">Keyboard</h4>
<p className="product-price">$8000</p>
</div>
<div className="product-card">
<img className="product-image" src="images/Iphone16prodesert.webp" />
<h4 className="product-name">Keyboard</h4>
<p className="product-price">$8070</p>
</div>
</div>

</section>
<section className="flashsales-section-container">

<h2 className="section-title">Browse By Category</h2>

 <div className="related-grid">
               <div className="card">
              <div>
                <p className="discount">-30%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
              
            <img src="images/gamer-work-space.webp" alt="" />
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
            </div>
            <div className="star">
         
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
              <p>(88) </p>
            </div>
          </div>
          <div className="card">
            <div>
                <p className="discount">-40%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
            
          <img src="images/image33.png" alt="" />
            <button className="Add ">Add To Cart</button>
            <h4>HAVIT HV-G92 Gamepad</h4>
          <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

          <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           
            <img src="images/image32.png" alt="" />
            <h4>AK-900 Wired Keyboard</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                      <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

           <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
              <img src="images/image30.png" alt="" />
          
            <h4>RGB Liquid CPU Cooler</h4>
           
         <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                     <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>
          </div>

</section>
<section className="music-section">
  <div className="music-container">

    <div className="music-text">
      <p className="category">Categories</p>

      <h1>
        Enhance Your <br />
        Music Experience
      </h1>

      <div className="countdown">
        <div><span>23</span><p>Hours</p></div>
        <div><span>05</span><p>Days</p></div>
        <div><span>59</span><p>Minutes</p></div>
        <div><span>35</span><p>Seconds</p></div>
      </div>

      <button className="buy-btn">Buy Now!</button>
    </div>

    <div className="music-image">
   <img src="images/images15.jpg" alt="" />
    </div>

  </div>
</section>
<section className="explore">
  <h2>Explore Our Products</h2>

  <div className="related-grid">
               <div className="card">
              <div>
                <p className="discount">-30%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
              
            <img src="images/spiker.avif" alt="" />
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
            </div>
            <div className="star">
         
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
              <p>(88) </p>
            </div>
          </div>
          <div className="card">
            <div>
                <p className="discount">-40%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
            
            <img src="images/micro.jpg" alt="" />
            <button className="Add ">Add To Cart</button>
            <h4>HAVIT HV-G92 Gamepad</h4>
          <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

          <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           
            <img src="images/images15.jpg" alt="" />
            <h4>AK-900 Wired Keyboard</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                      <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

           <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           
           <img src="images/Iphone16prodesert.webp" alt="" />
            <h4>RGB Liquid CPU Cooler</h4>
           
         <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                     <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>
          </div>
           <div className="related-grid">
               <div className="card">
              <div>
                <p className="discount">-30%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
              
            <img src="images/images14.jpg" alt="" />
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
            </div>
            <div className="star">
         
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
              <p>(88) </p>
            </div>
          </div>
          <div className="card">
            <div>
                <p className="discount">-40%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
            
                <img src="images/image33.png" alt="" />
            <button className="Add ">Add To Cart</button>
            <h4>HAVIT HV-G92 Gamepad</h4>
          <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
          <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

          <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
           
            <img src="images/gamer-work-space.webp" alt="" />
            <h4>AK-900 Wired Keyboard</h4>
            <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                      <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>

           <div className="card">
             <div>
                <p className="discount">-35%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
               <img src="images/ddd.webp" alt="" />
       
            <h4>RGB Liquid CPU Cooler</h4>
           
         <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                     <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>
          </div>

  <button className="view-btn">View All Products</button>
</section>


{/* <!-- SERVICES --> */}
<section className="services">
  <div className="service">
    <p>🚚 <Ambulance /></p>
    <h4>Free Delivery</h4>
    <p>Free delivery for all orders over $140</p>
  </div>

  <div className="service">
    <p>💰<BadgeCent /></p>
    <h4>Money Back</h4>
    <p>We reurn money within 30 days</p>
  </div>

  <div className="service">
    <p>🎧<Headphones /></p>
    <h4>24/7 Support</h4>
    <p>Friendly 24/7 customer support</p>
  </div>
</section>

<section className="arrival">
  <h2>New Arrival</h2>

  <div className="arrival-container">

    {/* <!-- LEFT BIG --> */}
    <div className="arrival-left">
      
      <div className="overlay">
        <h3>PlayStation 5</h3>
        <p>Black and White version</p>
        <button>Shop Now</button>
      </div>
    </div>

    {/* <!-- RIGHT --> */}
    <div className="arrival-right">

      <div className="arrival-top">
         <img src="images/istockphoto.jpg" alt="" />
   
        <div className="overlay">
          <h3>Women’s Collections</h3>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="arrival-bottom">

        <div className="card">
         <img src="images/images18.jpg" alt="" />
          <div className="overlay small">
            <h4>Speakers</h4>
          </div>
        </div>

        <div className="card">
          <img src="images/ddd.webp" alt="" />
          <div className="overlay small">
            <h4>Perfume</h4>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
{/* <!-- FOOTER --> */}
<footer className="footer">
  <div className="footer-container">

    <div>
      <h3>Exclusive</h3>
      <p>Subscribe</p>
    </div>

    <div>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact</p>
    </div>

    <div>
      <h4>Account</h4>
      <p>Login</p>
      <p>Register</p>
    </div>

  </div>

  <p className="copy">© 2026 All rights reserved</p>
</footer>
    </>
  )
}