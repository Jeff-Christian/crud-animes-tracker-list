import { toast } from "react-toastify";
import axios from "axios";

function Grid({ animes, setAnimes, setOnEdit, setToggleState }) {
  const handleEdit = (item) => {
    setOnEdit(item);
    // Set the anime to be edited in the parent component
    setToggleState(1);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/animes/` + id)
      .then(({ data }) => {
        // Remove the deleted anime from the state
        // Filter out the deleted anime from the animes array
        const newArray = animes.filter((anime) => anime.id !== id);

        setAnimes(newArray);
        toast.success(data);
        window.location.reload(); // força refresh na home
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <div id="bodyCards">
      {animes.map((anime) => (
        <div className="cards" key={anime.id}>
          <div className="image">
            <div className="changes">
              <button onClick={() => handleEdit(anime)}>editar</button>
              <button onClick={() => handleDelete(anime.id)}>excluir</button>
            </div>
          </div>
          <div>
            <h3>
              {anime.AnimeName}
              {/* Display the title of the anime */}
            </h3>
            <h3>Assisti na: {anime.where}</h3>
            <h3>
              Nota: {anime.Rating} {/* Display the type of the anime */}
            </h3>
            <h3>
              Data: {new Date(anime.Date).toLocaleDateString("pt-BR")}{" "}
              {/* Display the type of the anime */}
            </h3>
          </div>
        </div> // Pass the anime object as a prop to Card
      ))}
    </div>
  );
}

export default Grid;
