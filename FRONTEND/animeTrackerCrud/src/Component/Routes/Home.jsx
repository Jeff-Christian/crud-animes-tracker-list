import React from "react";

import Navbar from "../NavBar.jsx";
import Card from "../card.jsx";
import Grid from "../CardGrid.jsx";
import Profile from "../userProfile.jsx";
import "../CSS/Home.css";

import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Pagination from "../Pagination.jsx";

function Home() {
  const [animes, setAnimes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const getAnimes = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/animes/");
      setAnimes(res.data.sort((a, b) => (a.AnimeName > b.AnimeName ? 1 : -1)));
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAnimes();
  }, [setAnimes]);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const lastAnimeIndex = currentPage * postsPerPage;
  const firstAnimeIndex = lastAnimeIndex - postsPerPage;
  const currentPosts = animes.slice(firstAnimeIndex, lastAnimeIndex);

  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        <Profile />

        <div>
          <div className="containerActive">
            <div className="bloc-tabs">
              <button
                id="btn-novo-anime"
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Novo anime
              </button>
              <button
                id="btn-animes-cadastrados"
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
              <Pagination
                totalPosts={animes.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setPostsPerPage={setPostsPerPage}
              />
              <div id="bodyCards">
                <Grid
                  setOnEdit={setOnEdit}
                  animes={currentPosts}
                  setAnimes={setAnimes}
                  setToggleState={setToggleState}
                ></Grid>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
