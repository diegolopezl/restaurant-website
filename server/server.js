const express = require("express");
const mysql = require("mysql");
const port = 5000;

const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

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

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "leonor22@ethereal.email",
    pass: "k6S1bX18fEJ6CHdbFd",
  },
});

// Send email function
app.post("/api/send-email", (req, res) => {
  const { name, subject, email, message } = req.body;

  // Define email options
  const mailOptions = {
    from: name,
    to: "leonor22@ethereal.email",
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

// Server started
app.listen(port, () => {
  console.log("Server started on port " + port);
});
