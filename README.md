# Aplicação para cadastro de produtos.
Aplicação desenvolvida para manipular informações de produtos, perecíveis e não perecíveis, como: Nome, preço e quantidade. O banco escolhido para receber esses dados foi o Mongodb. Neste projeto é possível realizar todas as operações que caracterizam uma aplicação CRUD: criação, leitura atualização e remoção de dados.

## tecnologias utilizadas neste projeto:
- JavaScript
- node.Js 
- express
- mongodb
- mongoose
- dotEnv

## Endpoints 
Para testar a aplicação faça solicitações aos endPoints abaixo com Rest Client de sua preferência. Caso não tenha um, sugiro postman. Para baixa-lo, clique <a href="https://www.postman.com/">aqui</a>  

| endpoint | verbo HTTP | Descrição |
|------|------------|-----------|
| /registrar/pereciveis | POST | cadastro de produtos pereciveis|
| /registrar/npereciveis | POST | cadastro de produtos não prereciveis |
| /listar/todos | GET | exibe todos os produtos cadastrados |
| /listar/pereciveis | GET | exibe produtos pereciveis |
| /listar/npereciveis | GET | exibe produtos não pereciveis |
| /atualizar/perecivel/:nome | PUT | atualiza produtos pereciveis pelo nome |
| /atualizar/nperecivel/:nome | PUT | atualiza produtos não pereciveis pelo nome|
| /remover/perecivel/:nome | DELETE | remove produtos pereciveis pelo nome |
| /remover/nperecivel/:nome | DELETE | remove produtos não pereciveis pelo nome |


## executando aplicação
Para executar a aplicação você deve clonar o repositório e possuir em sua máquina o <a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/">Mongodb</a> e <a href="https://nodejs.org/en/">Node.Js</a> instalados

### instalando dependências:
Após clonar o repositório, acesse o projeto com seu editor de código, abra o terminal e instale as dependências usando `npm install`

### configurando variávies de ambiente:
Acesse o arquivo .env.example, renomei-o para .env e configure a variável de ambiente `MONGO_URL_CONNECTION` com o endereço de seu mongoDB local, por exemplo:

```
MONGO_URL_CONNECTION = "mongodb://localhost/produtos"
```
Após isso execute o comando `node server.js` e a aplicação será inicializada :)

## fazendo requisições

### cadastro:
  Para realizar o cadastro de um produto perecível, envie as seguintes informações em formato <b>json</b> para o endpoit correspondente: <b>Nome, quantidade, validade e preco</b>. Exemplo:
  
  ```````````````````````
  {
    "nome":"abacaxi",
    "quantidade":76,
    "validade":"12/02/2022",
    "preco":3.30
}
  ```````````````````````
  
 Caso o cadastro tenha seja bem sucedido, você receberá a seguinte resposta:
 
 ```````````````````````
 {
    "message": "Produto cadastrado com sucesso"
 }
  ```````````````````````
  Caso contrário uma mensagem de erro é retornada com o erro correspondente.
  
  De forma semelhante, o cadastro dos produtos não perecíveis se dá com o envio das seguintes informações para o endpoint correspondente: <b>nome, quantidade, data de entrada e preço</b>, exemplo:
  
  ```````````````````````
  {
    "nome": "sal",
    "quantidade": 355,
    "dataEntrada":"10/10/2022",
    "preco":2.50
 }
```````````````````````

### Resgatar produto:
Para buscar os produtos cadastrados, basta fazer uma requisição para o endpoint adequado e receber um lista com os dados em formato json.

### Atualizar produto:
Para atualizar um produto perecivel é necessário fazer a requisição para o endoint correspondente, passando como parâmetro de busca o nome do produto que se deseja atualizar, exemplo: 
`http://localhost:8080/atualizar/perecivel/abacaxi`
passando as seguites informações atualizadas: <b>quantidade, validade, preço</b>, exemplo :

````````
{
    "quantidade":68,
    "validade":"10/10/2010",
    "preco":2.20
}
````````
caso a atualização seja bem sucedida, você receberá a seguinte resposta em formato json:

````
{
    "message": "abacaxi atualizado com sucesso"
}
````
caso o produto passado como parâmetro não exista no banco, você receberá a seguinte resposta em formato json:

````
{
    "message": "Produto não encontrado, tente novamente"
}
````

Para atualizar produtos do tipo <b>não perecivel</b> siga os exemplos anteriores, escolhendo o endpoint correspondete para produtos não pereciveis.

### Deletar produto:

Para deletar produto precivel é necessário fazer a requisição para o endpoint correspondente, passando como parâmetro de busca o nome do produto que se deseja deletar, exemplo:
`http://localhost:8080/remover/perecivel/abacaxi`
caso o produto seja removido com sucesso, você receberá a suguinte mensagem:

````
{
    "message": "abacaxi deletado com sucesso"
}
````
Caso o produto passado como parâmetro não exista no banco, você receberá a seguinte resposta em formato json:
````
{
    "message": "Produto não encontrado, tente novamente"
}
````
Para remover produtos do tipo <b>não perecivel</b> siga os exemplos anteriores, escolhendo o endpoint correspondete para produtos não pereciveis.

