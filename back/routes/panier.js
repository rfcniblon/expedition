const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");


router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

//récupération de l'intégralité de la Table panier
router.get('/panier', (req, res) => {
    connection.query('SELECT * FROM panier',
      (err, results) => {
        if (err) {
          console.log('Dommage!');
        } else {
          console.log('Recuperation de la table panier recupéré avec succés');
          res.json(results);
        }
      });
  });
  // selection d'unepanier suivant id
  router.get("/panier/:id", (req, res) => {
    const idPanierOne = parseInt(req.params.id);
    const sql = "SELECT * FROM panier WHERE id = ? ";
    connection.query(sql, idPanierOne, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't get blog");
        console.log('Dommage!');
      } else {
        console.log("selection d'un panier suivant id recupéré avec succés");
        res.json(results);
      }
    });
  });
  //creation d'un panier
  router.post("/panier", (req, res) => {
    const panier = req.body;
    const sql = `INSERT INTO panier (id_users, id_evenement) VALUES ("${panier.id_users}", "${panier.id_evenement}" )`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post panier" + error);
        console.log('Dommage!');
      } else {
        req.body.id = results.insertId;
        res.json(req.body);
        console.log("creation d'un panier avec succés");
      }
    });
  });

  // Modification d'un panier
  router.put("/panier/:id", (req, res) => {
    const idPanier = req.params.id;
    const panier = req.body;
    connection.query(
      "UPDATE panier SET ? WHERE id=?",
      [panier, idPanier],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't put panier" + error);
          console.log('Dommage!');
        } else {
          res.json(req.body);
          console.log("update d'une panier avec succés");
        }
      }
    );
  });

  //Suppression d'un panier suivant l'id
  router.delete("/panier/:id", (req, res) => {
    const idPanier = req.params.id;
    connection.query(
      "DELETE FROM panier WHERE id= ?",
      [idPanier],
      (error, results, fields) => {
        if (error) {
          res.status(501).send("couldn't delete panier" + error);
          console.log('Dommage!');
        } else {
          res.json(idPanier);
          console.log("suppression d'un panier avec succés");
        }
      }
    );
  });
  module.exports = router;