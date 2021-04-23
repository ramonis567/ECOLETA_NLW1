const express = require("express");
const app = express();
const port = 3030;

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
  return res.render("search-results.html");
});

app.listen(port);