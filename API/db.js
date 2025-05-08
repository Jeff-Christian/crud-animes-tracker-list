import mysql from "mysql";
require("dotenv").config();
// Create a connection to the database

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQL_DATABASE}`;

export const db = mysql.createConnection(urlDB);

module.exports = db; // Export the connection object
