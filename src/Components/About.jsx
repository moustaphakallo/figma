
import { Backpack, BadgeDollarSign, BaggageClaim, Banknote, Bird, CalendarSync, DollarSign, Headset, Linkedin, Medal, ShoppingBag, Store, Wallet, Warehouse } from "lucide-react";
import { Navbar } from "./Navbar";

export function About (){
  return(
    <>

<section className="elit">
  <div className="Autem ">
    <h1>our stat</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo minus odit voluptatem illum quis voluptates debitis fugiat doloribus maxime culpa ea quas sint, perferendis iusto alias sunt laudantium consectetur.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facilis! Consequuntur accusamus pariatur inventore assumenda vitae qui! Vel architecto suscipit explicabo, repellat, accusantium magnam dolor temporibus ratione ad corrupti est.</p>
  </div>
    <div>
      <img src="images/image 26.jpg" alt="" />
    </div>
</section>



  <section>
       <div className="stats-container">

     <div className="Sale">
       <div className="stat-card small">
        <Store  />
        
      </div>
      <h1>33k</h1>
        <p>Monthly Product Sale</p>
     </div>

      <div className="stat-card active">
        <div className="icon-circle">
          <DollarSign />
        </div>
        <h1>33k</h1>
        <p>Monthly Product Sale</p>
      </div>

      <div  className="Sale">
        <div className="stat-card small">
        <ShoppingBag />
        
      </div>
       <h1>33k</h1>
        <p>Monthly Product Sale</p>
      </div>

     <div className="Sale">
       <div className="stat-card small">
        <Wallet />
      </div>
      <h1>33k</h1>
        <p>Monthly Product Sale</p>
     </div>

    </div>
  </section>

<section className="Tempore">
  <div className="sit">

    <div className="Lamine">
<img src="images/image27.png" alt="" />
      <h1>Mohamed</h1>
      <p>Père fondateur école islamique</p>
      <Bird/> <Banknote /><Linkedin />
    </div>

    <div className="Lamine">
     <img src="images/image28.png" alt="" />
      <h1>Hawa</h1>
      <p>Directrice école islamique</p>
       <Bird/> <Banknote /><Linkedin />
    </div>

    <div className="Lamine">
      <img src="images/image29.png" alt="" />
      <h1>Lamine</h1>
      <p>Principal école islamique</p>
       <Bird/> <Banknote /><Linkedin />
    </div>

  </div>
</section>

  <section>
       <div className="stats-container">

     <div className="Sale">
       <div className="stat-card small">
        <BaggageClaim />
        
      </div>
      <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
     </div>

     
 <div className="Sale1">
       <div className="stat-card small">
       <Headset/> 
      </div>
      <h3>MONEY BACK GUARANTEE</h3>
        <p>We reurn money within 30 days</p>
     </div>


      <div  className="Sale">
        <div className="stat-card small">
     <Backpack />
        
      </div>
       <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

    

    </div>
  </section>
<footer className="footer">
  <div className="footer-container">

    <div className="footer-col">
      <h3>Exclusive</h3>
      <p>S'abonner</p>
      <p>Obtenez 10% de réduction sur votre premier achat</p>

      <div className="email-box">
      <input type="Email" placeholder="Entrez votre adresse e-mail" />
        <button>➤</button>
      </div>
    </div>

    <div className="footer-col">
      <h3>Support</h3>
      <p>111 Bijoy sarani, Dhaka</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>

    <div className="footer-col">
      <h3>Compte</h3>
      <p>Mon Compte</p>
      <p>Connexion / Inscription</p>
      <p>Panier</p>
      <p>Liste de Souhaits</p>
      <p>Boutique</p>
    </div>

    <div className="footer-col">
      <h3>Liens Rapides</h3>
      <p>Politique de Confidentialité</p>
      <p>Conditions d'Utilisation</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>

    <div className="footer-col">
      <h3>Télécharger l'Application</h3>
      <p>Économisez 3$ avec l'application</p>

      <div className="app-buttons">
        <button>🍎 App Store</button>
        <button>▶ Google Play</button>
      </div>

      <div className="socials">
        <span>f</span>
        <span>𝕏</span>
        <span>in</span>
        <span>📷</span>
      </div>
    </div>

  </div>

  <p className="copyright">
    © 2026 Exclusive
  </p>
</footer>
    </>
  )
}