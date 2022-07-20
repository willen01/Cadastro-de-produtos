const express = require("express");
const route = express.Router();


// buscar/listar produtos
route.get("/listar/todos", (req, res) => {

})

route.get("listar/pereciveis", (req, res) => {

})

route.get("/listar/npereciveis", (req, res) => {

})


//cadastrar produtos
route.post("/registrar/pereciveis",(req, res) => {
    
})

route.post("/registrar/npereciveis",(req, res) => {

})


//atualizar produtos

route.put("/atualizar/perecivel/:nome", (req, res) => {
    
})

route.put("/atualizar/nperecivel/:nome", (req, res) => {

})


//deletar produto

route.delete("/remover/perecivel/:nome", (req, res) => {

})

route.delete("remover/nperecivel/:nome", (req, res) => {
    
})

module.exports = route;