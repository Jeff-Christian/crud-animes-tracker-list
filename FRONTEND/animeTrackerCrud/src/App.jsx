import "./App.css";
import "../src/Component/CSS/Navbar.css";
import "../src/Component/CSS/Cards.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Routes/Home.jsx";
import Register from "./Component/Routes/Register.jsx";
import Login from "./Component/Routes/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
