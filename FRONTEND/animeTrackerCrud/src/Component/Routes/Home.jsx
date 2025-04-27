import React from "react";

import Navbar from "../NavBar.jsx";
import Card from "../card.jsx";
import Grid from "../CardGrid.jsx";
import Profile from "../userProfile.jsx";
import "../CSS/Home.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [animes, setAnimes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAnimes = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/animes/");
      setAnimes(res.data.sort((a, b) => (a.AnimeName > b.AnimeName ? 1 : -1)));
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAnimes();
  }, [setAnimes]);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    console.log("testando tab ativa", index);
    setToggleState(index);
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        <Profile />

        <div>
          <div className="containerActive">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Novo anime
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Animes Cadastrados
              </button>
            </div>

            <div className={toggleState === 1 ? "active-content" : "content"}>
              <h2>Adicione um novo anime</h2>
              <Card
                onEdit={onEdit}
                setOnEdit={setOnEdit}
                getAnimes={getAnimes}
              ></Card>
            </div>

            <div className={toggleState === 2 ? "active-content" : "content"}>
              <h2>Animes Cadastrados</h2>
              <div id="bodyCards">
                <Grid
                  setOnEdit={setOnEdit}
                  animes={animes}
                  setAnimes={setAnimes}
                ></Grid>
                <ToastContainer autoClose={3000} position={toast} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
