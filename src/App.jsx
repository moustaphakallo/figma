import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./Components/sign-up";
import Login from "./Components/logn-in";
import { About } from "./Components/About";
import { Contacte } from "./Components/Contacte";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;