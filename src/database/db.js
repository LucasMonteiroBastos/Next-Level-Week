// importando as dependencias do SQLite3

const sqlite3 = require("sqlite3").verbose()

// criando o objeto que irá fazer a operação no bando de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizando o objeto do banco de dados para a nossa operaçao
 db.serialize(() => {


// // usando comandos de SQL para;    


// // 1º criação da tabela;

// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXt 
// //         );
// //     `)

// // 2º inserir dados na tabela;

// //     const query = `
// //     INSERT INTO places (
// //         image,
// //         name,
// //         address,
// //         address2,
// //         state,
// //         city,
// //         items
// //     ) VALUES (?,?,?,?,?,?,?);
// // `

// //     const values = [
// //         "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
// //         "Papersider",
// //         "Av. Contorno Leste - COHATRAC I",
// //         "Número 1",
// //         "São Luís",
// //         "Maranhão",
// //         "Papéis e Papelão"
// //     ]

// //     function afterInserData(err) {
// //         if(err)  {
// //             return console.log(err)
// //         }

// //         console.log("Cadastrado com sucesso!")
// //         console.log(this)
// //     }

// //     db.run(query, values, afterInserData)


//     /*

// // 3º consultar os dados na tabela;

//     db.all(`SELECT name FROM places`, function(err, rows) {
//         if(err)  {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros")
//         console.log(rows)
//     })
//     */
    

// // 4º deletar tabelas


//    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//         if(err)  {
//             return console.log(err)
//        }

//         console.log("Registro deletado com sucesso")
//      })





})


