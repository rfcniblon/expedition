require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const router = express();
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

let smtp = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_EXPEDITION,
        pass: process.env.PASSWORD,
    }
};

let transporter = nodemailer.createTransport(smtp);

router.post("/contact", (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const description = req.body.description;
    const message =
        `
       <div>
        <h2><strong>Demande de contact </strong></h2>
         <h3>Nom: ${nom} </h3>
         <h3>Prenom: ${prenom} </h3>
         <h3>Telephone: ${telephone} </h3>
         <h3>Email: ${email}</h3>
         <h3>Description: ${description} </h3>
         <h4> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h4>
       </div>
        `

    // send mail with defined transport object
    let mailOptions = {
        from: process.env.EMAIL_EXPEDITION, // adresse email expediteur
        to: process.env.EMAIL_EXPEDITION, // adresse email receptionnaire
        subject: ' contact ' + req.body.nom, // Subject line
        html: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {

            res.status(501).send(error);
        }
        else {
            res.status(200).json({
                message: "Votre demande de contact a bien été envoyée."
            });
        }
    })

})

module.exports = router;