import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import animeRoutes from "./Routes/animes.js";
import userRoutes from "./Routes/users.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Main Route connection
app.use("/api/users", userRoutes);
app.use("/api/animes", animeRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Database connection
app.listen(8800, () => {
  console.log("Server is running on port 8800", "fdp vai funcionaaa");
});
