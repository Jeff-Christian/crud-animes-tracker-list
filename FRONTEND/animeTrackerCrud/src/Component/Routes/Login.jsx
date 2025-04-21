import React from "react";
import "../CSS/Login.css";
import logo from "../../assets/Images/LOGO BRANCO.png";
import { Link } from "react-router-dom";

function Login() {
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
          <form action="" className="formLogin">
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="senha" placeholder="Senha" />
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
