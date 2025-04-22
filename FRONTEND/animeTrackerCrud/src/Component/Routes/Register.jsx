import "../CSS/Register.css";
import logo from "../../assets/Images/LOGO BRANCO.png";
import Login from "./Login";

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => {
        if (res.data.success) {
          // Aqui você pode adicionar a lógica para redirecionar o usuário após o registro bem-sucedido
          <Navigate to="/login" />;
          alert(res.data.success);
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => console.log(err));
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
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
