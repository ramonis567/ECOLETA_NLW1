const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

/*
db.serialize(() => {

  // ----------- CRIA TABELA NO DATABASE  ---------------
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `);
  
  // ----------  INSERÇÃO DE DADOS NA TABELA --------------
  const query = `
      INSERT INTO places (
        name,
        image,
        address,
        address2,
        state,
        city,
        items
      ) VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      );
  `;

  const values = [
    "Papersider",
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    "Guilherme Gemballa, Jardim América",
    "Nº260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão"
  ];
  // db.run(query, values, function(err) {
  //   if(err) {
  //     return console.log(err); //finaliza função
  //   }
  //   console.log("CADASTRO FEITO COM SUCESSO");
  //   console.log(this);
  // });

  // ------------ CONSULTA DE DADOS NA TABELA ---------------
  // db.all(`SELECT * FROM places`, function(err, rows){ // * = Todos os campos
  //   if(err) {
  //     return console.log(err); //finaliza função
  //   }
  //   console.log("DADOS");
  //   console.log(rows);
  // });

  // ------------- DELETAR DADOS DA TABELA -------------------
  // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
  //   if(err) {
  //     return console.log(err); //finaliza função
  //   }
  //   console.log("EXCLUSÃO FEITA COM SUCESSO");
  // });
});

*/