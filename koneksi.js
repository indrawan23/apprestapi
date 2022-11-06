let mysql = require("mysql");

// make connection to database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbeagenda",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
