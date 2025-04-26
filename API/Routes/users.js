import express from "express";
import {
  register,
  login,
  logout,
  validateToken,
  getUser,
} from "../Controllers/authController.js";
import { verifyToken as verifyToken } from "../Middleware/verifyToken.js";
import { verifyUser } from "../Middleware/verifyUser.js";

const router = express.Router();

router.get("/verifyUser", verifyUser, (req, res) => {
  res.json({ success: "Usuário verificado com sucesso", name: req.name });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ success: "Logout realizado com sucesso" });
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/", verifyToken, validateToken, getUser);

export default router;
