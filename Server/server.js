import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "amethystSQL26",
  database: "signup",
});

app.listen(8081, () => {
  console.log("Server is running on port 8081", "fdp vai funcionaaa");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const salt = 10;

app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ error: "Error for hashing password" });

    // Check if the user already exists
    const values = [req.body.name, req.body.email, hash];

    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ error: "Vixe, deu zica zé" });
      return res.json({ success: "Sua conta foi criada com sucesso" });
    });
  });
});
