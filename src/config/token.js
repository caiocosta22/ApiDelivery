import jwt from "jsonwebtoken";
//O JWT é um padrão para a criação de dados com assinatura opcional ou criptografia cujo payload contém o JSON que afirma algum número de declarações.
//Os tokens são assinados usando um segredo privado ou uma chave pública/privada(SENHADIFICIL99)
const secretToken = "SENHADIFICIL99";


function createJWT(id_usuario){
    const token = jwt.sign({id_usuario}, secretToken, {
        expiresIn: 99999999
    });  
    return token;
}


function verifyJWT(req, res, next){
    const authToken = req.headers.authorization;
    // authToken = ''Bearer xxxxxxxxxxxxxxxxxx''

    if (!authToken){
        return res.status(401).send({message: "Token não informado"});

    } 
    
    const [trash, token] = authToken.split(" ");
    //trash = Bearer, token = xxxxxxxxx | em authToken

    jwt.verify(token, secretToken, function(err, decoded){
        if (err){
            return res.status(401).send({message: "Token inválido"});
        } else{
            // Salva id_usuario no request para uso futuro
            req.id_usuario = decoded.id_usuario;
        
            next();
        }
    });
}

export default{createJWT, verifyJWT};