const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Connection Error: ", err);
    return;
  }

  console.log("Connection successfull");
});

app.post("/api/reservation", (req, res) => {
  const { name, numPeople, date, time } = req.body;

  const sql =
    "INSERT INTO reservaciones (nombre, num_personas, dia, tiempo) VALUES (?, ?, ?, ?)";
  const values = [name, numPeople, date, time];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error inserting reservation into database");
    }

    console.log(`Reservation for ${name} inserted into database`);
    res.json({ message: "Reservation inserted into database" });
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
