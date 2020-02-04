const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");


router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

//récupération de l'intégralité de la Table evenement
router.get('/events', (req, res) => {
    connection.query('SELECT * FROM events',
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
  router.get("/events/:id", (req, res) => {
    const idEvenementOne = parseInt(req.params.id);
    const sql = "SELECT * FROM events WHERE id = ? ";
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
  router.post("/events", (req, res) => {
    const evenement = req.body;
    const sql = `INSERT INTO events (name, photo, alt, artiste, date, heure, description, nombre, prix) VALUES ("${evenement.name}", "${evenement.photo}", "${evenement.alt}", "${evenement.artiste}" , "${evenement.date}", "${evenement.heure}" ,"${evenement.description}" , "${evenement.nombre}", "${evenement.prix}" )`;
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
  router.put("/events/:id", (req, res) => {
    const idEvenement = req.params.id;
    const evenement = req.body;
    connection.query(
      "UPDATE events SET ? WHERE id=?",
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
  router.delete("/events/:id", (req, res) => {
    const idEvenement = req.params.id;
    connection.query(
      "DELETE FROM events WHERE id= ?",
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