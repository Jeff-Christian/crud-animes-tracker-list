import React, { useEffect, useState } from "react";
import "../Component/CSS/Navbar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [auth, setAuth] = React.useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8800/api/users/").then((res) => {
      if (res.data.success) {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.message);
      }
    });
  }, []);

  const logOut = () => {
    axios
      .get("http://localhost:8800/api/users/logout")
      .then((res) => {
        alert(res.data.success);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {auth ? (
        <nav id="Navbar">
          <img src={logo} alt="Logo animes tracker" id="logo" />
          <button className="login" onClick={logOut}>
            Logout
          </button>
          <p>
            {name} {message}
          </p>
        </nav>
      ) : (
        <nav id="Navbar">
          <img src={logo} alt="Logo animes tracker" id="logo" />
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
