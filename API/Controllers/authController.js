import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

export const register = (req, res) => {
  const sql =
    "INSERT INTO users (`name`, `email`, `password`, `avatar`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ error: "Error ao criar sua senha" });

    // Check if the user already exists
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.avatar ||
        "https://i.pinimg.com/736x/79/8f/bf/798fbf62ba74a844ceeef90b83c76e59.jpg",
    ];

    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ error: "Não foi possível criar a sua conta" });
      return res.json({ success: "Sua conta foi criada com sucesso" });
    });
  });
};

export const login = (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ error: "Vixe, deu zica zé" });
    if (result.length === 0) {
      return res.json({ error: "Usuário não encontrado" }); // Corrige isso aqui
    }

    // Agora sim compara a senha SE o usuário existir
    bcrypt.compare(
      req.body.password.toString(),
      result[0].password,
      (err, response) => {
        if (err) return res.json({ error: "Erro ao verificar senha" });
        if (response) {
          const user = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            avatar: result[0].avatar,
          };
          const token = jwt.sign(user, "jwt-secret-key", {
            expiresIn: "1h",
          });
          res.cookie("token", token, {
            httpOnly: true, // Para proteger o cookie contra XSS
          });
          return res.json({ success: "Login realizado com sucesso" });
        } else {
          return res.json({ error: "Senha incorreta" });
        }
      }
    );
  });
};

export const logout = (req, res) => {
  res.clearCookie("token", { path: "/" });
  return res.json({ success: "Logout realizado com sucesso" });
};

export const validateToken = (req, res, next) => {
  const user = req.user;

  return res.json({
    success: true,
    message: "Token válido",
    user,
  });
};

export const getUser = (req, res) => {
  const { id } = req.user;
  const sql = "SELECT id, name, email, avatar FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ error: "Vixe, deu zica zé" });
    if (result.length === 0) {
      return res.json({ error: "Usuário não encontrado" });
    }
    return res.json(result[0]);
  });
};

export const updateProfile = (req, res) => {
  const { id } = req.user;
  const { avatarUrl } = req.body; // pega a URL vinda do frontend

  const sql = "UPDATE users SET avatar = ? WHERE id = ?";
  db.query(sql, [avatarUrl, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao atualizar avatar." });
    }

    return res.status(200).json({ message: "Avatar atualizado com sucesso." });
  });
};
