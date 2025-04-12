import "./App.css";
import Navbar from "./Component/NavBar.jsx";
import Card from "./Component/card.jsx";
import Grid from "./Component/CardGrid.jsx";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [animes, setAnimes] = useState([]);
  //const [onEdit, setOnEdit] = useState(null);

  const getAnimes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setAnimes(res.data.sort((a, b) => (a.AnimeName > b.AnimeName ? 1 : -1)));
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAnimes();
  }, [setAnimes]);

  return (
    <>
      <Navbar></Navbar>
      <div id="bodyCards">
        <Card></Card>
        <Grid animes={animes}></Grid>
        <ToastContainer autoClose={3000} position={toast} />
      </div>
    </>
  );
}

export default App;
