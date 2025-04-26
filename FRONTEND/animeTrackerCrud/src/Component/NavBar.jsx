import React, { useEffect, useState } from "react";
import "../Component/CSS/Navbar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const logOut = () => {
    axios
      .get("http://localhost:8800/api/users/logout")
      .then((res) => {
        alert(res.data.success);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  // receber os dados do usuario
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user); // aqui vem { id, name, email }
        } else {
          // se não tiver logado, redireciona pra login
          window.location.href = "/login";
        }
      })
      .catch(() => {
        window.location.href = "/login";
      });
  }, []);

  return (
    <div>
      {user ? (
        <nav id="Navbar">
          <img src={logo} alt="Logo animes tracker" id="logo" />
          <button className="login" onClick={logOut}>
            Logout
          </button>
          <button onClick={() => navigate("/user")}>User</button>
          <p>{user.name}</p>
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
