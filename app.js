const express = require("express");
const app = express();
const port = 1234;

const maSuperFonctionTropBienQuiEstDansMonModule = require("./modules/monModuleTropBien.js");

// CONFIG
app.use(express.static("static"));
app.set("views", "./views");
app.set("view engine", "ejs");

// MIDDLEWARES
const hello = require("./middlewares/hello");
// app.use(hello);

// MODULES
const post = require("./modules/post");

// ROUTES
app.get("/hello/:name", (req, res) => {
    const nomQueJeRecupDeLURL = req.params.name;
    console.log(`Hello ${nomQueJeRecupDeLURL}`);

    const resDeMaFonctionTropCool = maSuperFonctionTropBienQuiEstDansMonModule();
    console.log(resDeMaFonctionTropCool);

    res.send("Ok nous sommes bien sur la bonne page");
});

app.get("/", post.all);
app.get("/post/:id", post.find);

// RUN
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
