const express = require("express");
const app = express();
const port = 1234;

// CONFIG
app.use(express.static("static"));
app.set("views", "./views");
app.set("view engine", "ejs");

// MIDDLEWARES
const hello = require("./middlewares/hello");
app.use(hello);

// MODULES
const post = require("./modules/post");

// ROUTES
app.get("/", post.all);
app.get("/post/:id", post.find);

// RUN
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
