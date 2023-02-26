// Datei Einstellungen
const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
// App Einstellungen
app.listen(2000, () => {
    
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Seiten/Views"));
app.use(express.static(path.join(__dirname, "Seiten/Public")))
// Seiten Routen
app.get("/", (req, res) => {
    res.render("index")
})
// API Routen

// Intern Routen

