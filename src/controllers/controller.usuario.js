//Aplicando método de controladores, para assim o controladores fazer a função e a rota apenas indicar a url que a função será executada.

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

export default (Login, Inserir, ListarId, Editar);
