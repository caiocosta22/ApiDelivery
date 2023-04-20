

 //const Login = (req, res) =>{} e a mesma coisa que isso debaixo
function Login(req, res){
    res.status(200).json({id_usuario: 123});
};

function Inserir(req, res){
    res.status(200).json({id_usuario: 123});
};

function ListarId(req, res){
    res.status(201).json({id_usuario: req.params.id_usuario});
};

function Editar(req, res){
    res.status(200).json({id_usuario: 123});
};

export default {Login, Inserir, ListarId, Editar};