const express = require("express");
const route = express.Router();

//controllers
const criarProduto = require("../controllers/criarProduto");
const listarProduto = require("../controllers/listarProduto");
const atualizarProduto = require("../controllers/atualizarProduto");
const removerProduto = require("../controllers/removerProduto");
const { Router } = require("express");

//cadastrar produtos
route.post("/registrar/pereciveis", criarProduto.cadastrarPereciveis);
route.post("/registrar/npereciveis", criarProduto.cadastrarNPereciveis);

// buscar/listar produtos
route.get("/listar/todos", listarProduto.listarTodos);
route.get("/listar/todos/:nome", listarProduto.listarPorNome)
route.get("/listar/pereciveis", listarProduto.listarPereciveis)
route.get("/listar/npereciveis", listarProduto.listarNPereciveis)


//atualizar produtos
route.put("/atualizar/perecivel/:nome", atualizarProduto.atualizarPerecivel);
route.put("/atualizar/nperecivel/:nome", atualizarProduto.atualizarNPerecivel);


//deletar produto
route.delete("/remover/perecivel/:nome", removerProduto.deletarPerecivel);
route.delete("/remover/nperecivel/:nome", removerProduto.deletarNPerecivel)

module.exports = route;