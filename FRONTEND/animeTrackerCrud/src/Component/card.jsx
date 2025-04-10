import "../assets/CSS/Cards.css";

function Card() {
  return (
    <>
      <div className="cards">
        <form action="">
          <input type="text" placeholder="Nome do Anime" />
          <input type="text" placeholder="Onde Assistiu?" />
          <input type="text" placeholder="Nota pro Anime" />
          <input type="text" placeholder="Data" />
          <button type="submit" id="publish">
            Publicar
          </button>
        </form>
      </div>
    </>
  );
}

export default Card;
