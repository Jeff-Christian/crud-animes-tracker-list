import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

import "../Component/CSS/Profile.css";

function Profile() {
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
    <div className="containerProfile">
      <div>
        <div className="profilePicture">
          <img src={user.avatar} alt="profile picture" />
        </div>
        <button>
          <Link to="/user" className="editProfile">
            Editar perfil
          </Link>
        </button>
      </div>
      <h1>{user.name}</h1>
      <div className="infospProfile">Aqui vai as informações de usuário</div>

      <div>
        {user ? (
          <button className="logOut" onClick={logOut}>
            Logout
          </button>
        ) : (
          <button className="logOut" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
