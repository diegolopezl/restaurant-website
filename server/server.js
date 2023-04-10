const express = require("express");
const mysql = require("mysql");
const port = 5000;

const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
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

// Post reservation form info to database

app.post("/api/reservation", (req, res) => {
  const { name, numPeople, date, time } = req.body;

  // SQL Query to insert input into reservations table
  const sql =
    "INSERT INTO reservaciones (nombre, num_personas, estado, dia, tiempo) VALUES (?, ?, 'Pending', ?, ?)";
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

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE usuario='${username}' AND pass='${password}'`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    if (results.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false, message: "Invalid credentials." });
    }
  });
});

// Send email function
app.post("/api/send-email", (req, res) => {
  const { name, subject, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "leonor22@ethereal.email",
      pass: "k6S1bX18fEJ6CHdbFd",
    },
  });

  // Define email options
  const mailOptions = {
    from: name,
    to: process.env.MAIL_USERNAME,
    subject: subject,
    text: `Mensaje de ${name} (${email}) \n
    ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Oops, something went wrong...");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

app.get("/api/reservations", (req, res) => {
  connection.query("SELECT * FROM reservaciones", (err, rows) => {
    if (err) {
      console.error("Error retrieving reservations: ", err);
      res.status(500).send("Error retrieving reservations");
      return;
    }

    res.json(rows);
  });
});

app.put("/api/reservations/:id", (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.estado; // changed to "estado"

  const sql = "UPDATE reservaciones SET estado = ? WHERE reservaID = ?";
  connection.query(sql, [newStatus, id], (err, result) => {
    if (err) {
      console.error("Error updating reservation status: ", err);
      res.status(500).send("Error updating reservation status");
      return;
    }

    // get the updated reservation object
    const sql2 = "SELECT * FROM reservaciones WHERE reservaID = ?";
    connection.query(sql2, [id], (err, result) => {
      if (err) {
        console.error("Error fetching updated reservation: ", err);
        res.status(500).send("Error fetching updated reservation");
        return;
      }

      // send the updated reservation object in the response
      res.send(result[0]);
    });
  });
});

// Server started
app.listen(port, () => {
  console.log("Server started on port " + port);
});
