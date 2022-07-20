const CadastrarPereciveis = require("../Models/CadastrarPereciveis");
const CadastrarNPereciveis = require("../Models/CadastrarNPereciveis");

const createController = {
    cadastrarPereciveis: async (req, res) => {
        const cadastrarPereciveis = new CadastrarPereciveis({
            nome: req.body.nome,
            quantidade: req.body.quantidade,
            validade: req.body.validade,
            preco: req.body.preco
        })//recebe dados do body

        try {
            await cadastrarPereciveis.save();
            res.status(200).json({ message: "Produto cadastrado com sucesso" });
        } catch (error) {
            res.status(400).json({ message: `Falha ao cadastrar produto ${error}` });
        } // envia dados ao banco ou mensagem de erro
    },

    cadastrarNPereciveis: async (req, res) => {
        const cadastrarNPereciveis = new CadastrarNPereciveis({
            nome: req.body.nome,
            quantidade: req.body.quantidade,
            dataEntrada: req.body.dataEntrada
        })//recebe dados do body

        try {
            await cadastrarNPereciveis.save();
            res.status(200).json({message: "Produto cadastrado com sucesso"}); 
        } catch (error) {
            res.status(400).json({message: `Falha ao cadastrar produto ${error}`})
        }// envia dados ao banco ou mensagem de erro
    }
}

module.exports = createController;