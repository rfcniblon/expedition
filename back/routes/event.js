const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");


router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

//récupération de l'intégralité de la Table evenement
router.get('/event', (req, res) => {
    connection.query('SELECT * FROM event',
      (err, results) => {
        if (err) {
          console.log('Dommage!');
        } else {
          console.log('Recuperation de la table evenement recupéré avec succés');
          res.json(results);
        }
      });
  });
  // selection d'un evenement suivant id
  router.get("/event/:id", (req, res) => {
    const idEvenementOne = parseInt(req.params.id);
    const sql = "SELECT * FROM event WHERE id = ? ";
    connection.query(sql, idEvenementOne, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't get blog");
        console.log('Dommage!');
      } else {
        console.log("selection d'un evenement suivant id recupéré avec succés");
        res.json(results);
      }
    });
  });
  //creation d'un evenement
  router.post("/event", (req, res) => {
    const evenement = req.body;
    const sql = `INSERT INTO event (name, photo, alt, artiste, date, description, nombre) VALUES ("${evenement.name}", "${evenement.photo}", "${evenement.alt}", "${evenement.artiste}" , "${evenement.date}", "${evenement.description}" , "${evenement.nombre}" )`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post evenement" + error);
        console.log('Dommage!');
      } else {
        req.body.id = results.insertId;
        res.json(req.body);
        console.log("creation d'un evenement avec succés");
      }
    });
  });

  // Modification d'un evenement
  router.put("/event/:id", (req, res) => {
    const idEvenement = req.params.id;
    const evenement = req.body;
    connection.query(
      "UPDATE event SET ? WHERE id=?",
      [evenement, idEvenement],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't put evenement" + error);
          console.log('Dommage!');
        } else {
          res.json(req.body);
          console.log("update d'un evenement avec succés");
        }
      }
    );
  });

  //Suppression d'un evenement suivant l'id
  router.delete("/event/:id", (req, res) => {
    const idEvenement = req.params.id;
    connection.query(
      "DELETE FROM event WHERE id= ?",
      [idEvenement],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't delete evenement" + error);
          console.log('Dommage!');
        } else {
          res.json(idCards);
          console.log("suppression d'un evenement avec succés");
        }
      }
    );
  });
  module.exports = router;