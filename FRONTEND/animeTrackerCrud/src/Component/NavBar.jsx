import React from "react";
import "../Component/CSS/Navbar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

function Navbar() {
  return (
    <nav id="Navbar">
      <img id="logo" src={logo} alt="logo anime Tracker" />
      <ul>
        <button className="active-tabs">Dark mode</button>
        <button className="active-tabs">Favoritos</button>
        <button className="active-tabs">Classificações</button>
      </ul>
    </nav>
  );
}

export default Navbar;
