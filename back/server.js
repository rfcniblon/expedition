const express = require("express");
const parser = require("body-parser");
const app = express();


app.use(parser.json());

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

