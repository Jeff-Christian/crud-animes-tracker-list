import "./App.css";
import Navbar from "./Component/NavBar.jsx";
import Card from "./Component/card.jsx";
import Grid from "./Component/CardGrid.jsx";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [animes, setAnimes] = useState([]);
  //const [onEdit, setOnEdit] = useState(null);

  const getAnimes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setAnimes(res.data.sort((a, b) => (a.AnimeName > b.AnimeName ? 1 : -1)));
    } catch (error) {
      console.error("Error fetching data:", error);
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
      </div>
    </>
  );
}

export default App;
