import { Heart, Search, ShoppingCart, User } from "lucide-react";


export function Navbar (){
    return(
        <>
     {/* Header */}
       <div className="top-banner">
        Summer Sale - Free Delivery - OFF 50%! Shop Now
      </div>
      <header className="header container">
        <h2>Exclusive</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
         
          <a href="/signup">Sign Up</a>
            <a href="/about">About</a>
            <a href="/contacte">Contacte</a>
        <div className="search-box">
 
  <input 
    type="text" 
    placeholder="what do you want about me ..." 
  />
   <Search className="search-icon" size={18} />
</div>
        </nav>
        <div className="icons">
          <Heart /><ShoppingCart /> <User
           />

        </div>
      </header>
        </>
    )
}