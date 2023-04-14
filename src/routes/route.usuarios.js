import {Router} from "express";
import controllerUsuario from "../controllers/controller.usuario.js";
const routeUsuario = Router();
const control = controllerUsuario();


//Dessa forma estou dizendo que a rota vai passar o metodo post nessa URL, usando essa função dos controladores.
routeUsuario.post("/v1/usuarios/login", controllerUsuario.Login);
routeUsuario.post("/v1/usuarios/registro", controllerUsuario.Inserir);
routeUsuario.get("/v1/usuarios/:id_usuario", controllerUsuario.ListarId);
routeUsuario.put("/v1/usuarios", controllerUsuario.Editar);

export default routeUsuario;