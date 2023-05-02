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

function ListarId(req, res){
    req.id_usuario=1; //vai ser obtido pelo token, fazer teste
    // - condicao para so permitir visualizar o usuario coletado no token
    //if (req.params.id_usuario != req.id_usuario){
    //    return res.status(401).json({erro:"Operacao nao permitida:voce so pode obter informacoes do seu usuario."})
    //}
    modelUsuario.ListarId(req.params.id_usuario, function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(result[0]);
        }
    });
};

function Editar(req, res){
    req.id_usuario=1;
    modelUsuario.Editar(req.params.id_usuario, req.body.nome, req.body.email, function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).json({id_usuario: req.id_usuario});
        }
    });
};

export default {Login, ListarId,Editar};