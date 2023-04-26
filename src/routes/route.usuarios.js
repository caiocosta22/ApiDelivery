import {Router} from "express";
import controllersUsuario from "../controllers/controllers.usuario.js";
const routeUsuario = Router();

routeUsuario.post("/v1/usuarios/login", controllersUsuario.Login);
// routeUsuario.post("/v1/usuarios/registro", controllerUsuario.Inserir);
// routeUsuario.get("/v1/usuarios/:id_usuario", controllerUsuario.ListarId);
// routeUsuario.patch("/v1/usuarios", controllerUsuario.Editar);

export default routeUsuario;