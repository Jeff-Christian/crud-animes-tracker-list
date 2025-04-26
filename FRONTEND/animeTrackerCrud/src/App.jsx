import "./App.css";
import "../src/Component/CSS/Navbar.css";
import "../src/Component/CSS/Cards.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Routes/Home.jsx";
import Register from "./Component/Routes/Register.jsx";
import Login from "./Component/Routes/Login.jsx";

import ProtectedRoute from "./Component/Routes/privateRoute.jsx";
import User from "./Component/User.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
