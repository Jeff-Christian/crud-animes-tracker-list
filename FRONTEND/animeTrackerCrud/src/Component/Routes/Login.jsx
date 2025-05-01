import React from "react";
import "../CSS/Login.css";
import logo from "../../assets/Images/LOGO BRANCO.png";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const Login = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/users/login", values)
      .then((res) => {
        if (res.data.success) {
          // Aqui você pode adicionar a lógica para redirecionar o usuário após o registro bem-sucedido
          toast.success(res.data.success);
          navigate("/");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) =>
        console.log("Erro ao fazer login, tente de novo fi", err)
      );
  };

  return (
    <>
      <div className="box">
        <div>
          <img src={logo} alt="logo anime Tracker List" />
          <p>
            Sua lista de animes salvas para
            <br />
            compartilhar com seus amigos.
          </p>
        </div>
        <div>
          <form action="" className="formLogin" onSubmit={Login}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              required
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <button type="submit" className="login">
              Entrar
            </button>
            <Link to="/register" className="newaccount">
              Criar nova conta
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
