import "../assets/CSS/NavBar.css";
import logo from "../assets/Images/LOGO BRANCO.png";

function App() {
  return (
    <>
      <nav id="Navbar">
        <img src={logo} alt="Logo animes tracker" id="logo" />
        <button class="login">Login</button>
      </nav>
    </>
  );
}

export default App;
