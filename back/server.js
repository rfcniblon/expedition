const express = require("express");
const parser = require("body-parser");
const app = express();
const contact = require("/routes/contact");
const users = require("/routes/users");
const panier = require("/routes/panier");
const evenement = require("/routes/evenement");


app.use(parser.json());
app.use(cors());
app.use("/images", express.static("public/images"));
// app.use("/recrutement", express.static("public/recrutement"));
app.use(parser.urlencoded({
  extended: true
}));

app.use("/", users);
app.use("/", contact);
app.use("/", panier);
app.use("/", evenement);
// home page
app.get(
    "/",
    (req, res) => {
        res.send("hello world");
    }
);

const server = app.listen(
    3000,
    () => {
        console.log("server is listening on port 3000");
    }
);


module.exports = server;

