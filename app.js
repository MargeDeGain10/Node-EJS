const express = require("express");
const app = express();
const port = 5000;
const events = require('./event');

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { events: events });
});


console.log(events);


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
