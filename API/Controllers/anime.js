import { db } from "../db.js";

export const getAnimes = (_, res) => {
  const q = "SELECT * FROM animes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
