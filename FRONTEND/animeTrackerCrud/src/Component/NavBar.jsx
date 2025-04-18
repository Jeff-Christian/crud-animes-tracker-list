import React from "react";
import "../Component/CSS/Navbar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  return (
    <>
      <nav id="Navbar">
        <img src={logo} alt="Logo animes tracker" id="logo" />
        <button className="login">Login</button>
      </nav>
    </>
  );
}

export default Navbar;
