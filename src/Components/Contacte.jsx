import { Eye, Heart, Star } from "lucide-react";
import { Navbar } from "./Navbar";

export function Contacte() {
  return (
    <>
      <section className="product-page">

        {/* LEFT */}
        <div className="product-images">
          <div className="thumbs">
            <img src="images/malt.png" alt="" />
            <img src="images/malt.png" alt="" />
            <img src="images/malt.png" alt="" />
            <img src="images/malt.png" alt="" />
          </div>

          <div className="main-img">
            <img src="images/malt.png" alt="" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-info">
          <h2>Havic HV G-92 Gamepad</h2>

          <div className="rating">
            ⭐⭐⭐⭐☆ <span>(150 Reviews)</span>
          </div>

          <h3 className="price">$192.00</h3>

          <p className="desc">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install.
          </p>

          <div className="colors">
            <span>Colours:</span>
            <div className="color red"></div>
            <div className="color blue"></div>
          </div>

          <div className="sizes">
            <button>XS</button>
            <button>S</button>
            <button className="active">M</button>
            <button>L</button>
            <button>XL</button>
          </div>

          <div className="buy">
            <input type="number" defaultValue="2" />
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="delivery-box">
            <p>🚚 Free Delivery <br />Enter your postal code</p>
            <p>🔄 Return Delivery <br />Free 30 Days Returns</p>
          </div>
        </div>

      </section>

      {/* RELATED */}
      <section className="related">
        <h3>Related Item</h3>

        <div className="related-grid">
          <div className="card">
            <p className="discount">-30%</p>

            <div className="Eye">
              <Heart />
              <Eye />
            </div>

            <img src="images/image31.png" alt="" />
            <h4>IPS LCD Gaming Monitor</h4>

            <div className="IPS">
              <p className="Moni">$370</p>
              <p>$400</p>
            </div>

            <div className="star">
              <Star /><Star /><Star />
              <p>(88)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}