//import axios from "axios";

import Card from "./card";

function Grid({ animes }) {
  return (
    <div className="cards">
      {animes.map((anime, i) => (
        <div key={i}>
          <p>
            {anime.AnimeName} {/* Display the title of the anime */}
            {anime.where}
            {anime.Rating} {/* Display the type of the anime */}
            {anime.Date} {/* Display the type of the anime */}
          </p>
        </div> // Pass the anime object as a prop to Card
      ))}
    </div>
  );
}

export default Grid;
