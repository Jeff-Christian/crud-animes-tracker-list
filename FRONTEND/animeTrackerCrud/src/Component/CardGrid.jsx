//import axios from "axios";

function Grid({ animes }) {
  return (
    <div id="bodyCards">
      {animes.map((anime, i) => (
        <div className="cards" key={i}>
          <div className="image">
            <div className="changes">
              <button>editar</button>
              <button>excluir</button>
            </div>
          </div>
          <div>
            <h3>
              Nome do anime: {anime.AnimeName}
              {/* Display the title of the anime */}
            </h3>
            <h3>Assisti na: {anime.where}</h3>
            <h3>
              Nota: {anime.Rating} {/* Display the type of the anime */}
            </h3>
            <h3>
              Data: {anime.Date} {/* Display the type of the anime */}
            </h3>
          </div>
        </div> // Pass the anime object as a prop to Card
      ))}
    </div>
  );
}

export default Grid;
