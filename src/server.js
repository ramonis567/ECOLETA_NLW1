const express = require("express");
const app = express();
const port = 3030;

const data = require("./database/db");

const nunjucks = require("nunjucks");
nunjucks.configure("src/pages", {
  express: app,
  noCache: true,
});

//Configuração de pasta pública
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("index.html");
});

app.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

app.get("/search-results", (req, res) => {
  db.all(`SELECT * FROM places`, function(err, rows){ // * = Todos os campos
    if(err) {
      return console.log(err); //finaliza função
    }
    console.log("DADOS");
    console.log(rows);
  });
  return res.render("search-results.html");
});

app.listen(port);