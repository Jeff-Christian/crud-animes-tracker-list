import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AmethystSQL26",
  database: "anime_tracker_crud_schema",
});
