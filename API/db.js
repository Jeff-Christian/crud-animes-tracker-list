import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQL_DATABASE}`;

export const db = mysql.createConnection(urlDB);

module.exports = db; // Export the connection object
