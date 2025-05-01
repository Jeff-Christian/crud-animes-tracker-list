import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import "../Component/CSS/Profile.css";

function Profile() {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const logOut = () => {
    axios
      .get("http://localhost:8800/api/users/logout")
      .then((res) => {
        toast.success(res.data.success);
        navigate("/login");
      })
      .catch((err) => toast.error(err));
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
        <div>
          <img
            src={user.avatar}
            className="avatarPhoto"
            alt="profile picture"
          />
        </div>
        <Link className="editProfile" to="/user">
          Editar perfil
        </Link>
      </div>
      <h1>{user.name}</h1>
      <div className="infosProfile"></div>

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
