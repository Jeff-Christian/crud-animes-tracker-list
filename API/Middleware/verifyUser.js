import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.json({ error: "Acesso negado!" });

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.json({ error: "Token inválido!" });

    req.user = decoded;
    next();
  });
};
