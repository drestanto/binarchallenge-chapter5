users = require("../db/users.json")


function get(req, res) {
    res.status(200).json(users);
}

function loginIndex(req, res) {
    res.render("login");
}

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
    get,
    loginIndex,
    login
}