const ModelPereciveis = require("../Models/ModelPereciveis");
const ModelNPereciveis = require("../Models/ModelNPereciveis");

const updateController = {
    atualizarPerecivel: async (req, res) => {
        let nome = req.params.nome;
        let { quantidade, validade, preco } = req.body;
        let novosDados = { quantidade, validade, preco };

        const produtoAtualizado = await ModelPereciveis.findOneAndUpdate({ nome: nome }, novosDados);

        if (!produtoAtualizado) return res.status(404).json({ message: "Produto não encontrado, tente novamente" });

        try {
            res.status(200).json({ message: `${nome} atualizado com sucesso` });
        } catch (error) {
            res.status(400).json({ message: `Falha ao atualizar produto ${error}` })
        }
    },

    atualizarNPerecivel: async (req, res) => {
        let nome = req.params.nome;
        let { quantidade, validade, preco } = req.body;
        let novosDados = { quantidade, validade, preco };

        const produtoAtualizado = await ModelNPereciveis.findOneAndUpdate({nome : nome}, novosDados);
        if(!produtoAtualizado) return res.status(404).json({message: "Produto não encontrado, tente novamente"});

        try {
            res.status(200).json({message: `${nome} atualizado com sucesso`});
        } catch (error) {
            res.status(400).json({message: `Falha ao atualizar produto ${error}`});
        }
    }
}

module.exports = updateController;