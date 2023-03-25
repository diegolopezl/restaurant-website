const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "restaurant_db",
  user: "root",
  password: "",
});

connection.connect((err) => {
  if (err) {
    console.log("Failed Connection");
    throw err;
  } else {
    console.log("Succesful Connection!");
  }
});
