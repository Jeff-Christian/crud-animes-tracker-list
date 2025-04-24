//import { toast } from "react-toastify";
import axios from "axios";

function Grid({ animes, setAnimes, setOnEdit }) {
  const handleEdit = (item) => {
    setOnEdit(item);
    // Set the anime to be edited in the parent component
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/api/animes/" + id)
      .then(({ data }) => {
        // Remove the deleted anime from the state
        // Filter out the deleted anime from the animes array
        const newArray = animes.filter((anime) => anime.id !== id);

        setAnimes(newArray);
        alert(data);
      })
      .catch(({ data }) => alert(data));

    setOnEdit(null);
  };

  return (
    <div id="bodyCards">
      {animes.map((anime) => (
        <div className="cards" key={anime.id}>
          <div className="image">
            <div className="changes">
              <button
                onClick={() => {
                  handleEdit(anime), window.scrollTo(0, 0);
                  // Scroll to the top of the page when editing
                }}
              >
                editar
              </button>
              <button onClick={() => handleDelete(anime.id)}>excluir</button>
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
