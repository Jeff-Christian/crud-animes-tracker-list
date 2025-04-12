import { db } from "../db.js";

export const getAnimes = (_, res) => {
  const q = "SELECT * FROM animes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// iniciando metodo post para  inserir novo anime

export const addAnime = (req, res) => {
  const q =
    "INSERT INTO animes (`AnimeName`, `where`, `Rating`, `Date`) VALUES (?)";
  // alterar informações para o banco de dados
  const values = [
    req.body.AnimeName,
    req.body.where,
    req.body.Rating,
    req.body.Date,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Anime criado com sucesso.");
  });
};

// metodo para atualizar os animes assistidos
export const updateAnimes = (req, res) => {
  const q =
    "UPDATE animes SET `AnimeName` = ?, `where` = ?, `Rating` = ?, `Date` = ? WHERE `id` = ?";

  const values = [
    req.body.AnimeName,
    req.body.where,
    req.body.Rating,
    req.body.Date,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Anime atualizado com sucesso.");
  });
};
