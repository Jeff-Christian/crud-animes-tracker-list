import expresss from "express";
import {
  getAnimes,
  addAnime,
  updateAnime,
  deleteAnime,
} from "../Controllers/anime.js";

const router = expresss.Router();

router.get("/", getAnimes);

router.post("/", addAnime);

router.put("/:id", updateAnime);

router.delete("/:id", deleteAnime);

export default router;
