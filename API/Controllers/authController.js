import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

export const register = (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ error: "Error ao criar sua senha" });

    // Check if the user already exists
    const values = [req.body.name, req.body.email, hash];

    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ error: "Vixe, deu zica zé" });
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
          const name = result[0].name;
          const token = jwt.sign({ name }, "jwt-secret-key", {
            expiresIn: "1h",
          });
          res.cookie("token", token, {
            httpOnly: true, // Para proteger o cookie contra XSS
            sameSite: "Lax", // ou "None" com secure: true se estiver em HTTPS
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
  return res.json({
    success: "Token válido",
    name: req.name,
  });
};
