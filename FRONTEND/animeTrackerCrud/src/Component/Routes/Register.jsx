import React from "react";
import "../CSS/Register.css";
import logo from "../../assets/Images/LOGO BRANCO.png";
import Login from "./Login";

function Register() {
  return (
    <>
      <div className="containerRegister">
        <img src={logo} alt="logo anime Tracker List" className="logo" />
        <form action="" className="formRegister">
          <p>Criar uma nova conta</p>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="senha" placeholder="Senha" required />
          <p>
            Ao clicar em Cadastre-se, você concorda com nosso Termos, Política
            de Privacidade e Política de Cookies.
          </p>

          <button type="submit" className="register">
            Cadastre-se
          </button>
          <a href={<Login />}> Já tem uma conta? </a>
        </form>
      </div>
    </>
  );
}

export default Register;
