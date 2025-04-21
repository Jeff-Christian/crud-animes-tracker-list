import "../CSS/Register.css";
import logo from "../../assets/Images/LOGO BRANCO.png";
import Login from "./Login";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="containerRegister">
        <img src={logo} alt="logo anime Tracker List" className="logo" />
        <form action="" className="formRegister" onSubmit={handleSubmit}>
          <p>Criar uma nova conta</p>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <p>
            Ao clicar em Cadastre-se, você concorda com nossos Termos, Política
            de Privacidade e Política de Cookies.
          </p>

          <button type="submit" className="register">
            Cadastre-se
          </button>
          <Link to="/login">Já tem uma conta? </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
