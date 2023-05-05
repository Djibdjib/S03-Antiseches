# Antisèches

## Initialiser un projet node

```
npm init -y
```

Ensuite, créer un fichier app.js et nous allons mettre en place dedans notre serveur Express

### Installation des packages

```
npm install express ejs
```

On peut à ce moment là créer un fichier .gitignore (même si le projet n'est pas encore un projet Git.)

### Mise en place du serveur Express

A mettre dans app.js

```javascript
const express = require("express");
const app = express();
const port = 1234;

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

On lance notre projet avec nodemon app.js

### Mettre en place la gestion des fichiers statiques

On créé un dossier du nom de "public"

```javascript
app.use(express.static("public"));
```

### Mettre en place EJS

On créé un dossier views à la racine du projet et on copie les ligne ci-dessous dans app.js (au début)

```javascript
app.set("views", "./views");
app.set("view engine", "ejs");
```

### On teste un rendu HTMLavec EJS

On crée un fichier home.ejs dans le dossier views qu'on va appeler dans notre route "/".

```javascript
app.get("/", (request, response) => {
    response.render("home");
});
```

### Mise en place des partials

On créé un dossier partials dans le dossier views et on créé dedans un fichier head.ejs
On appelle le partial head.ejs depuis notre home.ejs

### Utilisation d'un fichier de données au format json

```javascript

const data = require('chemin/vers/notre/fichier/json)
```
