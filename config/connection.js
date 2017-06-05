var dotenv = require("dotenv").config();

var mysql = require("mysql");
var env = require("../.env");
//var password_DB = process.env.DB_PASS;
var connection = mysql.createConnection({

  host: "localhost",
  user: process.env.DB_USER, 
  password: process.env.DB_PASS, 
  database: "burgers_db"
});
 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



 
module.exports = connection;