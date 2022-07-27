const mongoose = require("mongoose");

const CadastrarPereciveis = mongoose.Schema({
    nome: { type: String, required: true },
    quantidade: { type: Number, required: true },
    validade: { type: String, required: true },
    preco: { type: String, required: true },
    perecivel: { type: Boolean, default: true }
})

module.exports = mongoose.model("Pereciveis", CadastrarPereciveis);