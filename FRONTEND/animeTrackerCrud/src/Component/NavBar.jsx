import React from "react";
import "../Component/CSS/Navbar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  return (
    <nav id="Navbar">
      <img id="logo" src={logo} alt="logo anime Tracker" />
      <ul>
        <button>Dark mode</button>
        <button>Favoritos</button>
        <button>Classificações</button>
      </ul>
    </nav>
  );
}

export default Navbar;
