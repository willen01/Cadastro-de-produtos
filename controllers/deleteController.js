const Perecivel = require("../Models/CadastrarPereciveis");
const NPerecivel = require("../Models/CadastrarNPereciveis");

const deleteController = {
    deletarPerecivel: async (req, res) => {
        const produtoProcurado = req.params.nome;

        const produtoDeletado = await Perecivel.findOneAndDelete({ nome: produtoProcurado });
        if (!produtoDeletado) return res.status(404).json({ message: "Produto não encontrado, tente novamente!" });

        try {
            res.status(200).json({ message: `${produtoProcurado} deletado com sucesso` });
        } catch (error) {
            res.status(400).json({ message: `Erro ao deletar produto ${error}` });
        }
    },

    deletarNPerecivel: async (req, res) => {
        const produtoProcurado = req.params.nome;

        const produtoDeletado = await NPerecivel.findOneAndDelete({ nome: produtoProcurado });
        if (!produtoDeletado) return res.status(404).json({ message: "Produto não encontrado, tente novamente!" });

        try {
            res.status(200).json({message:`${produtoProcurado} deletado com sucesso`});
        } catch (error) {
            res.status(400).json({message: "Erro ao deletar produto"});
        }
    }
}

module.exports = deleteController;