import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

export function Navbar() {
  return (
    <>
      <div className="top-banner">
        Summer Sale - Free Delivery - OFF 50%! Shop Now
      </div>
      <header className="header container">
        <h2>Exclusive</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="search-box">
            <input type="text" placeholder="What do you want about me ..." />
            <Search className="search-icon" size={18} />
          </div>
        </nav>
        <div className="icons">
          <Heart /> <ShoppingCart /> <User />
        </div>
      </header>
    </>
  );
}