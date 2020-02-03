const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");
const bcrypt = require("bcryptjs");
const salt = "$2a$10$5UTQoU4Fh6.7oHE7Qyn6Vu";

router.use(parser.json());
router.use(parser.urlencoded({
    extended: true
}));

//récupération de l'intégralité de la Table users
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM users',
        (err, results) => {
            if (err) {
                console.log('Dommage!');
            } else {
                console.log('Table users recupéré avec succés');
                res.json(results);
            }
        });
});
// selection d'un compte user suivant id
router.get("/users/:id", (req, res) => {
    const idUsersOne = parseInt(req.params.id);
    const sql = "SELECT * FROM users WHERE id = ? ";
    connection.query(sql, idUsersOne, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't get blog");
            console.log('Dommage!');
        } else {
            console.log("selection d'un compte user suivant id recupéré avec succés");
            res.json(results);
        }
    });
});
//creation d'un compte user
router.post("/users", (req, res) => {
    const users = req.body;
    connection.query(
        "INSERT INTO users (name, password) VALUES (?, ?)",
        [users.name, bcrypt.hashSync(users.password, salt)],
        (error, results, fields) => {
            if (error) {
                res.send(error);
            }
            else {
                req.body.id = results.insertId;
                res.json(req.body);
            }
        })
});
// Modification d'un compte user
router.put("/users/:id", (req, res) => {
    const idUsers = req.params.id;
    const users = req.body;
    connection.query(
        "UPDATE users SET ? WHERE id=?",
        [users, idUsers],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't put user" + error);
                console.log('Dommage!');
            } else {
                res.json(req.body);
                console.log("update d'un compte user avec succés");
            }
        }
    );
});
//Suppression d'un compte user
router.delete("/users/:id", (req, res) => {
    const idUsers = req.params.id;
    connection.query(
        "DELETE FROM users WHERE id= ?",
        [idUsers],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't delete user" + error);
                console.log('Dommage!');
            } else {
                res.json(idUsers);
                console.log("suppression d'un compte user avec succés");
            }
        }
    );
});

module.exports = router;