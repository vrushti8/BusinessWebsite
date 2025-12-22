const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Save reservation to text file
app.post("/reserve", (req, res) => {
  const { name, date, time, people } = req.body;
  const entry = `Name: ${name}, Date: ${date}, Time: ${time}, People: ${people}\n`;

  fs.appendFile("reservations.txt", entry, (err) => {
    if (err) return res.status(500).send("Error saving reservation");
    res.send("Reservation saved");
  });
});

// Save contact message to text file
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const entry = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

  fs.appendFile("contacts.txt", entry, (err) => {
    if (err) return res.status(500).send("Error saving message");
    res.send("Message saved");
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
