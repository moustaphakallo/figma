import { Link } from "react-router-dom";
import micro from "/images/micro.jpg";
// import gogol from "publ../../public/assets/gogol.png";
import gogol from "/images/gogol.png";
import { Navbar } from "./Navbar";

export default function SignUp() {
  return (
    <div className="contacte3">
       
      <div className="contacte">
        <div className="actions">
          <img src={micro} alt="micro" />
        </div>

        <div className="inputContainer">
          <h1>Sign Up</h1>
          <p>Enter your information</p>

          <input type="text" placeholder="Name" className="textInput" />
          <input type="email" placeholder="Email" className="textInput" />
          <input type="text" placeholder="Phone" className="textInput" />
          <input type="password" placeholder="Password" className="textInput" />

          <button className="createAccountButton">
            Create Account
          </button>

          <button className="createAccountButton1">
            <span>
              <img src={gogol} alt="google" />
            </span>
            Sign up with Google
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

        <footer class="footer">
  <div className="footer-container">

  
    <div class="footer-col">
      <h3>Exclusive</h3>
      <p>S'abonner</p>
      <p>Obtenez 10% de réduction sur votre premier achat</p>

      <div class="email-box">
        <input type="email" placeholder="Entrez votre adresse e-mail" />
        <button>➤</button>
      </div>
    </div>

  
    <div className="footer-col">
      <h3>Support</h3>
      <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>

   
    <div class="footer-col">
      <h3>Compte</h3>
      <p>Mon Compte</p>
      <p>Connexion / Inscription</p>
      <p>Panier</p>
      <p>Liste de Souhaits</p>
      <p>Boutique</p>
    </div>

   
    <div class="footer-col">
      <h3>Liens Rapides</h3>
      <p>Politique de Confidentialité</p>
      <p>Conditions d'Utilisation</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>

    <div class="footer-col">
      <h3>Télécharger l'Application</h3>
      <p>Économisez 3$ avec l'application — nouveau pour la première fois.</p>

      <div class="app-buttons">
        <button>🍎 App Store</button>
        <button>▶ Google Play</button>
      </div>

      <div class="socials">
        <span>f</span>
        <span>𝕏</span>
        <span>in</span>
        <span>📷</span>
      </div>
    </div>

  </div>

  <p class="copyright">
    © 2026 Exclusiv
  </p>
</footer>

 
    </div>
  );
}
