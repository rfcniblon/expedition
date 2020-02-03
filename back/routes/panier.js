const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");


router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

//récupération de l'intégralité de la Table cards
router.get('/cards', (req, res) => {
    connection.query('SELECT * FROM cards',
      (err, results) => {
        if (err) {
          console.log('Dommage!');
        } else {
          console.log('Recuperation de la table cards recupéré avec succés');
          res.json(results);
        }
      });
  });
  // selection d'une card suivant id
  router.get("/cards/:id", (req, res) => {
    const idCardsOne = parseInt(req.params.id);
    const sql = "SELECT * FROM cards WHERE id = ? ";
    connection.query(sql, idCardsOne, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't get blog");
        console.log('Dommage!');
      } else {
        console.log("selection d'une card suivant id recupéré avec succés");
        res.json(results);
      }
    });
  });
  //creation d'une card
  router.post("/cards", (req, res) => {
    const cards = req.body;
    const sql = `INSERT INTO cards (titre, liens, alt, text) VALUES ("${cards.titre}", "${cards.liens}", "${cards.alt}", "${cards.text}" )`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post card" + error);
        console.log('Dommage!');
      } else {
        req.body.id = results.insertId;
        res.json(req.body);
        console.log("creation d'une card avec succés");
      }
    });
  });

  // Modification d'une card
  router.put("/cards/:id", (req, res) => {
    const idCards = req.params.id;
    const cards = req.body;
    connection.query(
      "UPDATE cards SET ? WHERE id=?",
      [cards, idCards],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't put card" + error);
          console.log('Dommage!');
        } else {
          res.json(req.body);
          console.log("update d'une card avec succés");
        }
      }
    );
  });

  //Suppression d'une card suivant l'id
  router.delete("/cards/:id", (req, res) => {
    const idCards = req.params.id;
    connection.query(
      "DELETE FROM cards WHERE id= ?",
      [idCards],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't delete cards" + error);
          console.log('Dommage!');
        } else {
          res.json(idCards);
          console.log("suppression d'une card avec succés");
        }
      }
    );
  });
  module.exports = router;