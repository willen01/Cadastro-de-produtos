const express = require("express");
const app = express();
const router = require("./routes/routes");
const db =require("./db/dbConnection");
const PORT = 8080;


db

//leitura do body enviado como json 
app.use(express.json())

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})