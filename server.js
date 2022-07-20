const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("olá mundo")
})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})