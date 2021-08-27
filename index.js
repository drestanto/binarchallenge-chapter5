// ----------========== INITIATE ==========----------

const express = require("express");
const app = express();

app.use(express.json());
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
const loginController = require("./controller/login.js");

// ROUTES
app.get('/', indexController.index);
app.get('/game', gameController.index);
app.get('/login', loginController.index);
app.post('/login', loginController.login);