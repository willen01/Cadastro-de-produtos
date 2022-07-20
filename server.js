const express = require("express");
const app = express();
const router = require("./routes/routes");
const PORT = 8080;

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})