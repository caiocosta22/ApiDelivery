//npm install expres
//npm install cors
//npm install mysql
//npm install jsonwebtoken
//npm install -g nodemon
import express from "express";
import cors from "cors";
import jwt from "./config/token.js"
import routeUsuario from "./routes/route.usuarios.js";
const app = express();

//Middleware é basicamente um software utilizado para facilitar o processamento da requisição até chegar na API
//Middleware json e Middleware CORS
app.use(express.json());
app.use(cors());

//Rotas
app.use(routeUsuario);

app.get("/criartoken", function(request, response){
    response.status(200).send({token: jwt.createJWT(1569)});
});

app.get("/validartoken", jwt.verifyJWT, function(request, response){
    console.log(request.id_usuario);
    response.status(200).send("Token validado e Usuário incluido na requisição");

});

//Resposta do Servidor
app.listen(8082, function(){
    console.log("Servidor rodando na porta 8082");
});