import "./App.css";
import "../src/assets/CSS/NavBar.css";
import Navbar from "./Component/NavBar.jsx";
import Card from "./Component/card.jsx";
import Grid from "./Component/CardGrid.jsx";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [animes, setAnimes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAnimes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setAnimes(res.data.sort((a, b) => (a.AnimeName > b.AnimeName ? 1 : -1)));
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAnimes();
  }, [setAnimes]);

  return (
    <>
      <Navbar></Navbar>

      <Card onEdit={onEdit} setOnEdit={setOnEdit} getAnimes={getAnimes}></Card>

      <div id="bodyCards">
        <Grid
          setOnEdit={setOnEdit}
          animes={animes}
          setAnimes={setAnimes}
        ></Grid>
        <ToastContainer autoClose={3000} position={toast} />
      </div>
    </>
  );
}

export default App;
