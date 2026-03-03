import { Dot, Eye, Heart, MoreHorizontal, RotateCcw, Search, ShoppingCart, Star, User, Van } from "lucide-react";
import { Navbar } from "./Navbar";

export function Contacte(){
    return(
        <>
      

     <Navbar/>

      {/* 🔥 Product Section */}
      <section className="product-section">
      <div className="product-image">
  <div className="gamer">
    <img src="src/assets/malt.png" alt="" />
    <img src="/src/assets/gamer.png" alt="" />
    <img src="/src/assets/gamer.png" alt="" />
    <img src="/src/assets/gamer.png" alt="" />
  </div>

  <div className="main-image">
    <img src="/src/assets/gamer.png" alt="" />
  </div>
</div>

        <div className="product-details">
          <h2>Havic HV G-92 Gamepad</h2>
         <div className="High">
           <p className="reviews">
            <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
           (150 Reviews)
          </p>
         </div>
          
          <h3 className="tr">$192.00</h3>

          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
              <div class="line"></div>
                <div className="colour">
           <p>Colour:</p>
            <Dot className="dot" />
            <Dot className="dot1" />
            </div>
          <div className="sizes">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>

          <div className="buy">
            <input type="number" defaultValue="2" />
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="delivery">
            
            <p className="code "><Van /><span>Free Delivery</span><p>Enter your postal code for Delivery Availability</p></p>
            
            <p className="code "> <RotateCcw /><span>Return Delivery</span>  <p>Free 30 Days Delivery Returns. Details</p></p>
          <div>
             
          </div>
          </div>
        </div>
      </section>
     
   
      {/* 🔥 Related Items */}
      <section className="related">
        <h3>Related Item</h3>

        <div className="related-grid">
               <div className="card">
              <div>
                <p className="discount">-30%</p>
                
                <div className="Eye">
                  < Heart/>
                  <Eye />
                </div>
              </div>
              
            <img src="src/assets/image31.png" alt="" />
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
            
            <img src="src/assets/image30.png" alt="" />
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
           
            <img src="src/assets/image32.png" alt="" />
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
           
           <img src="src/assets/image33.png" alt="" />
            <h4>RGB Liquid CPU Cooler</h4>
           
         <div className="IPS">
               <p className="Moni">$370 </p>
               <p>$400</p>
          </div>
                     <Star className="Skin" /><Star className="Skin" /> <Star className="Skin" />
          </div>
          </div>

      </section>

      {/* 🔥 Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Exclusive</h3>
            <p>Get 10% off your first order</p>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
          </div>

          <div>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        <p className="copyright">
          Copyright Rimel 2022. All right reserved
        </p>
      </footer>
        </>
    )
}