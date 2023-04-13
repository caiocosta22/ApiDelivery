import mysql from "mysql";

//Conexão com o banco
const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "gpinfo",
    database: "delivery"
});

// Aqui criei uma função, para se ocorrer algum erro na conexão com o banco, ele nos mostrar o erro no log do terminal.
db.getConnection(function(err, conn){
    if(err){
        console.log(err);
    }
    else{
        console.log("Conexão com banco de dados bem sucedida");
    }
})

export default db
//aqui estou exportando a constante db, para outras partes do projeto, poderem utilizar um import nessa constante
//assim facilitando a conexão com outras partes do projeto.