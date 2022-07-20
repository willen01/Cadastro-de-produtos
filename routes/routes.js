const express = require("express");
const route = express.Router();

//controllers
const createController = require("../controllers/createController");
const readController = require("../controllers/readController");
const updateController = require("../controllers/updateController");
const deleteController = require("../controllers/deleteController");

// buscar/listar produtos
route.get("/listar/todos", readController.listarTodos);
route.get("listar/pereciveis", readController.listarPereciveis)
route.get("/listar/npereciveis", readController.listarNPereciveis)


//cadastrar produtos
route.post("/registrar/pereciveis", createController.cadastrarPereciveis);
route.post("/registrar/npereciveis", createController.cadastrarNPereciveis);


//atualizar produtos
route.put("/atualizar/perecivel/:nome", updateController.atualizarPerecivel);
route.put("/atualizar/nperecivel/:nome", updateController.atualizarNPerecivel);


//deletar produto
route.delete("/remover/perecivel/:nome", deleteController.deletarPerecivel);
route.delete("remover/nperecivel/:nome", deleteController.deletarPerecivel)

module.exports = route;