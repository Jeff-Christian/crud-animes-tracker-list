import expresss from "express";
import { getAnimes } from "../Controllers/anime.js";

const router = expresss.Router();

router.get("/", getAnimes);

export default router;
