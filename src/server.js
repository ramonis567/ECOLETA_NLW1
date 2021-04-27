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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.render("index.html");
});

app.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

app.post("/save-point", (req, res) => {
  const query = `
    INSERT INTO places (
      name,
      image,
      address,
      address2,
      state,
      city,
      items
    ) VALUES(?,?,?,?,?,?,?);
  `;

  const values = [
    req.body.name,
    req.body.image,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ];

  data.run(query, values, function(err) {
    if(err) {
      return console.log(err); 
    }
    console.log("CADASTRO FEITO COM SUCESSO");
    console.log(this);
    return res.render("create-point.html", { saved: true });
  });
});

app.get("/search-results", (req, res) => {
  data.all(`SELECT * FROM places`, function(err, rows){ // * = Todos os campos
    if(err) {
      return console.log(err);
    }
    return res.render("search-results.html", { places: rows, total: rows.length });
  });
});

app.listen(port);