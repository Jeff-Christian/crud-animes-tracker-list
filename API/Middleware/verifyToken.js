import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ error: "Token não encontrado" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ error: "Token inválido" });
      } else {
        req.user = decoded.name;
        next();
      }
    });
  }
};
