# Api Delivery
Criação de API com NODEJS para ser um clone de aplicativos de delivery como IFOOD e RAPPI.(Documento Readme utilizado para notacao do progresso do projeto).

# 1.06
Criada a pasta routes, e o arquivo routes.usuario.js, para assim exportar e importar dentro do index.js, assim limpando o código principal
e começando o metodo de rotas para separar melhor as funções

# 01.07 
Adicionado metodo de Controladores, na parte de usuarios. Assim agora distribuindo melhor a arquitetura do projeto. o index puxa as rotas, nesse caso a rota de usuario, a rota de usuario puxa o controlador com o metodo da requisicao, e o controlador mostra qual sera a funcao que vai ser executada nessa rota.

# 01.08
Ajustado algumas linhas de codigo com redundancia e erros de sintaxe. Aplicacao do metodo Login fazendo um select no banco de dados MYSQL com base no que o usuario preencheu na
requisicao. Assim retornando pra ele um token informando que seu login foi bem sucedido.

# 01.09
Aplicado agora metodo de listar o id do usuario: no qual ele vai fazer um select no banco e te retornar o email, senha, id e data de cadastro do usuario ao voce dar um get pelo Id de usuario dele.
Aplicado tambem o metodo de Editar o cadastro do usuario, ao dar um patch pela url do id do usuario, voce consegue alterar o email e a senha dele via arquivo json. (O id do usuario no futuro vira de uma checagem de token, atualmente voce pode listar todos os usuarios que quiser, isso sera alterado).