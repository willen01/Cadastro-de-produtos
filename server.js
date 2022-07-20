const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("olá mundo")
})

// buscar/listar produtos
app.get("/listar/todos", (req, res) => {

})

app.get("listar/pereciveis", (req, res) => {

})

app.get("/listar/npereciveis", (req, res) => {

})


//cadastrar produtos
app.post("/registrar/pereciveis",(req, res) => {
    
})

app.post("/registrar/npereciveis",(req, res) => {

})


//atualizar produtos

app.put("/atualizar/perecivel/:nome", (req, res) => {
    
})

app.put("/atualizar/nperecivel/:nome", (req, res) => {

})


//deletar produto

app.delete("/remover/perecivel/:nome", (req, res) => {

})

app.delete("remover/nperecivel/:nome", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})