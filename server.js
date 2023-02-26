// Datei Einstellungen
const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
// App Einstellungen
app.listen(2000, () => {
    fs.readFile("./Daten/Signatur/signatur.txt", function(err, data) {
        console.log(String(data));
    });
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Seiten/Views"));
app.use(express.static(path.join(__dirname, "Seiten/Public")))
// Seiten Routen

// API Routen

// Intern Routen

