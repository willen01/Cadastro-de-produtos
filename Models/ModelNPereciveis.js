const mongoose = require("mongoose");

const CadastrarNpereciveis = mongoose.Schema({
    nome: { type: String, required: true },
    quantidade: { type: Number, required: true },
    dataEntrada: {type: String, required: true},
    preco: {type: Number, required:true}
})

module.exports = mongoose.model("NaoPereciveis", CadastrarNpereciveis);