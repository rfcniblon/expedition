const express = require("express");
const parser = require("body-parser");
const app = express();
const multer = require("multer");
const cors = require("cors");
const connection = require("./config/database");
const jwtsecret = 'projetgeometrelaloupe';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = "$2a$10$5UTQoU4Fh6.7oHE7Qyn6Vu";

const contact = require("./routes/contact");
const users = require("./routes/users");
const panier = require("./routes/panier");
const events = require("./routes/events");


app.use(parser.json());
app.use(cors());
app.use("/images", express.static("public/images"));
app.use(parser.urlencoded({
  extended: true
}));

app.use("/", users);
app.use("/", contact);
app.use("/", panier);
app.use("/", events);
// home page
app.get(
    "/",
    (req, res) => {
        res.send("hello world");
    }
);

function verifyToken(req, res, next) {

  // on récupère l'en-tête Authorization qui contient le Bearer Token
  const header = req.headers["authorization"];

  // si l'en-tête est défini
  if (header !== undefined) {
    // on coupe notre token en 2 par rapport à l'espace vide 
    // ( le token est toujours sous la forme Bearer daebz89d41ed4984d1ezd4)
    let tab = header.split(" ");
    let token = tab[1];

    // on enrichit notre objet req ( qui représente la requête du client )
    // en lui créant une propriété token dans laquelle on stocke le token 
    // que nous a envoyé le client
    req.token = token;

    // on vérifie que le token envoyé par le client correspond
    // à un token précédemment renvoyé à une personne qui s'est authentifié
    // avec succès ( bah oui un token bidon ça ne sert à rien ! )
    jwt.verify(
      token,
      jwtsecret,
      (err, authenticationData) => {
        //  si le token envoyé ne correspond à un aucun token 
        // attribué à un l'un des utilisateurs connectés alors il y a une erreur
        if (err) {
          // on renvoie le status 401, qui signifie que l'utilisateur n'est pas autorisé
          // à consulter cette ressource, et on ajoute le motif de l'erreur
          res.status(401).send("Unauthorized: " + err.toString());
        }
        else {
          // sinon le token correspond bien à un utilisateur connecté
          // dont les données sont contenues dans authenticationData.
          // afin de pouvoir exploiter ces données dans la méthode d'API
          // on enrichit une nouvelle fois l'objet req.
          req.authenticationData = authenticationData;
          // et on passe à la méthode de middleware suivante
          next();
        }
      }
    )
    next();
  }
  else {
    // renvoie un status 401 Unauthorized
    res.status(401).send("Unauthorized");
  }
}

app.post(
  '/api/secured-example',
  verifyToken,
  (req, res) => {
    res.send(req.authenticationData);
  }
);

app.post(
  '/api/login',
  (req, res) => {

    // on récupère les données de connexion de notre utilisateur 
    const users = req.body;
    const crypted = bcrypt.hashSync(users.password, salt);

    // on va essayer de trouver dans la base de données un utilisateur 
    // dont les noms et mots de passe correspondent

    connection.query(
      "SELECT * FROM users WHERE name=? AND password=?",
      [users.name, crypted],
      
      (error, results, fields) => {
        if (error) {
          res.send("Erreur");
        } else if (results.length === 0) {
          res.send("Resultat vide");
        } else {
          // token creation
          jwt.sign(
            // results[0],
            { users },
            jwtsecret,
            (err, token) => {
              if (err) {
                res.status(501).send("JWT error");
              }
              else {
                res.json({ token });
              }
            })
        }
      }
    )
    
  })


const server = app.listen(
    3001,
    () => {
        console.log("server is listening on port 3001");
    }
);


module.exports = server;

