const ModelPereciveis = require("../Models/ModelPereciveis");
const ModelNPereciveis = require("../Models/ModelNPereciveis");

const listarProduto = {
    listarTodos: async (req, res) => {
        const pereciveis = await ModelPereciveis.find({});
        const npereciveis = await ModelNPereciveis.find({});
        // busca  produtos pereciveis e não pereciveis no db

        try {
            //array com todos os produtos
            let todosProdutos = [...pereciveis, ...npereciveis];
            res.status(200).json(todosProdutos);
        } catch (error) {
            res.status(400).json({ message: `erro ao buscar produtos ${error}` });
        }
    },

    listarPorNome: async (req, res) => {
        // coleta nome do produto procurado
        let produtoProcurado = req.params.nome;

        const pereciveis = await ModelPereciveis.find({nome: produtoProcurado});
        const npereciveis = await ModelNPereciveis.find({nome: produtoProcurado});

        let produtoEncontrado = [...pereciveis, ... npereciveis]

        //trata erro para produto não encontrado
        if (produtoEncontrado.length === 0) return res.status(404).json({ message: "Produto não encontrado" });


        try {
            res.status(200).json(produtoEncontrado);
        } catch (error) {
            res.status(400).json({message: error})
        }
    },

    listarPereciveis: async (req, res) => {
        const pereciveis = await ModelPereciveis.find({});
        //busca pereciveis no db

        try {
            res.status(200).json(pereciveis);
        } catch (error) {
            res.status(400).json({ message: `Erro ao buscar produtos ${error}` });
        }
    },

    listarNPereciveis: async (req, res) => {
        const nPereciveis = await ModelNPereciveis.find({});
        //busca não pereciveis no banco

        try {
            res.status(200).json(nPereciveis);
        } catch (error) {
            res.status(400).json({ message: `Erro ao buscar produtos ${error}` });
        }
    }
}

module.exports = listarProduto; 