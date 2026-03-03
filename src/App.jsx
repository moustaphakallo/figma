import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import "./App.css";
import SignUp from "./Components/sign-up";
import Login from "./Components/logn-in";
import { About } from "./Components/About";

import { Contacte } from "./Components/Contacte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />}/>
         <Route path="/contacte" element={<Contacte />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
