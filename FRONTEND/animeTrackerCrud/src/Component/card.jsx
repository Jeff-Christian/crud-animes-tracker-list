import { useEffect, useRef } from "react";
import axios from "axios";
//import { toast } from "react-toastify";
import "../Component/CSS/Cards.css";

function Card({ getAnimes, onEdit, setOnEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const anime = ref.current;
      anime.AnimeName.value = onEdit.AnimeName;
      anime.where.value = onEdit.where;
      anime.Rating.value = onEdit.Rating;
      anime.Date.value = onEdit.Date;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const anime = ref.current;

    if (
      !anime.AnimeName.value ||
      !anime.where.value ||
      !anime.Rating.value ||
      !anime.Date.value
    ) {
      return alert("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          AnimeName: anime.AnimeName.value,
          where: anime.where.value,
          Rating: anime.Rating.value,
          Date: anime.Date.value,
        })
        .then(({ data }) => alert(data))
        .catch(({ data }) => alert(data));
    } else {
      await axios
        .post("http://localhost:8800/", {
          AnimeName: anime.AnimeName.value,
          where: anime.where.value,
          Rating: anime.Rating.value,
          Date: anime.Date.value,
        })
        .then(({ data }) => alert(data))
        .catch(({ data }) => alert(data));
    }

    anime.AnimeName.value = "";
    anime.where.value = "";
    anime.Rating.value = "";
    anime.Date.value = "";
    // Limpa os campos após a inserção ou atualização
    setOnEdit(null);
    // Atualiza a lista de animes após a inserção ou atualização
    getAnimes();
  };

  return (
    <div id="cardForm">
      <form ref={ref} onSubmit={handleSubmit}>
        <input type="text" name="AnimeName" placeholder="Nome do Anime" />
        <input type="text" name="where" placeholder="Onde Assistiu?" />
        <input type="text" name="Rating" placeholder="Nota pro Anime" />
        <input type="date" name="Date" placeholder="Data" />
        <button type="submit" id="publish">
          Publicar
        </button>
      </form>
    </div>
  );
}

export default Card;
