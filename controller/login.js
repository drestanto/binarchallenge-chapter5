const express = require("express");
const app = express();

function index(req, res) {
    res.render("login");
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username == "drestanto" && password == "Abcd123456-") {
        res.status(200).json({ message: 'Login berhasil!' });
    } else {
        res.status(403).json({ message: 'Username atau password salah!'});
    }
}

module.exports = {
    index,
    login
}