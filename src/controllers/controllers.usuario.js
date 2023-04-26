import modelUsuario from "../models/model.usuario.js";

function Login(req, res){

    modelUsuario.Login(req.body.email, req.body.senha, function(err, result){
        if (err) {
            res.status(500).send(err);
        } else  if (result.length == 0) {
            res.status(401).json({erro: "E-mail ou senha invalida"});
        }    else {
                let resultado = result[0];
                resultado["token"] = "0000000000000000000000000"

                res.status(200).json(resultado);
            }
    });
}

    

export default {Login};