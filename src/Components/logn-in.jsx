import micro from "../assets/micro.jpg";
import gogol from "../assets/gogol.png";
import { Navbar } from "./Navbar";

export default function Login() {
  return (
   
    <div className="contacte3">
    
      <div className="contacte">
        <div className="actions">
          <img src={micro} alt="micro" />
        </div>

        <div className="inputContainer">
          <h1>Sign In</h1>
          <p>Enter your information</p>

          <input type="email" placeholder="Email" className="textInput" />
          <input type="password" placeholder="Password" className="textInput" />

          <button className="createAccountButton">Sign In</button>

          <button className="createAccountButton1">
            <span>
              <img src={gogol} alt="google" />
            </span>
            Sign in with Google
          </button>
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

   
    <div className="footer-col">
      <h3>Compteeeeee</h3>
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
      <p>Économisez 3$ avec l'application — nouveau pour la première fois.</p>

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
    © 2026 Exclusiv
  </p>
</footer>

    </div>
  );
}
