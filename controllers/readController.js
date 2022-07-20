const CadastrarPereciveis = require("../Models/CadastrarPereciveis");
const CadastrarNPereciveis = require("../Models/CadastrarNPereciveis");

const readController = {
    listarTodos: async (req, res) => {
        const pereciveis = await CadastrarPereciveis.find({});
        const npereciveis = await CadastrarNPereciveis.find({});
        // busca  produtos pereciveis e não pereciveis no db

        try {
            //array com todos os produtos
            let todosProdutos = [...pereciveis, ...npereciveis];
            res.status(200).json(todosProdutos);
        } catch (error) {
            res.status(400).json({ message: `erro ao buscar produtos ${error}` });
        }
    },

    listarPereciveis: async (req, res) => {
        const pereciveis = await CadastrarPereciveis.find({});
        //busca pereciveis no db

        try {
            res.status(200).json(pereciveis);
        } catch (error) {
            res.status(400).json({ message: `Erro ao buscar produtos ${error}` });
        }
    },

    listarNPereciveis: async (req, res) => {
        const nPereciveis = await CadastrarNPereciveis.find({});
        //busca não pereciveis no banco

        try {
            res.status(200).json(nPereciveis);
        } catch (error) {
            res.status(400).json({message:`Erro ao buscar produtos ${error}`});
        }
    }
}

module.exports = readController; 