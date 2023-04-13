import {Router} from "express";

const routeUsuario = Router();

routeUsuario.post("/v1/usuarios/login", function(req, res){
    res.status(200).json({id_usuario: 123});
});

routeUsuario.post("/v1/usuarios/registro", function(req, res){
    res.status(200).json({id_usuario: 123});
});

routeUsuario.get("/v1/usuarios/:id_usuario", function(req, res){
    res.status(201).json({id_usuario: req.params.id_usuario});
});

routeUsuario.patch("/v1/usuarios", function(req, res){
    res.status(200).json({id_usuario: 123});
});

export default routeUsuario;