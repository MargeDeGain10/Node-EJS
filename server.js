const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Projet initialisé !");
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
