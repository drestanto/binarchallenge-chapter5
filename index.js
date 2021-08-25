// ----------========== INITIATE ==========----------

const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
const port = 3000;

function start() {
    console.log("Express project listening at http://localhost:" + port);
}

app.listen(port, start);

// ----------==============================----------

// MIDDLEWARE
app.use(express.static("public"));

// CONTROLLER
const indexController = require("./controller/index.js");
const gameController = require("./controller/game.js");

// ROUTES
app.get('/', indexController.index);
app.get('/game', gameController.index);