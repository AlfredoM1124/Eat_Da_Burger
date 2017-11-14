// Set up MySQL connection.
var SQL = require("mysql");

var connection = SQL.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection to ORM for use.
module.exports = connection;