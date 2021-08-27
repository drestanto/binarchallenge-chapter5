users = require("../db/users.json")


function get(req, res) {
    res.status(200).json(users);
}

function loginIndex(req, res) {
    res.render("login");
}

function login(req, res) {
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    const idx = users.findIndex(x => x.username === username);
    if (idx == -1) {
        res.status(403).json({ message: 'Username tidak ada!'});
    } else {
        if (users[idx].password != password) {
            res.status(403).json({ message: 'Password salah!'});
        } else {
           res.status(200).json({ message: 'Login berhasil!' }); 
        }
    }
}

module.exports = {
    get,
    loginIndex,
    login
}