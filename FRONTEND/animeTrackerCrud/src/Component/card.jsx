import { useRef } from "react";
import "../assets/CSS/Cards.css";

function Card() {
  const ref = useRef();

  return (
    <div className="cards">
      <form ref={ref} action="">
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
