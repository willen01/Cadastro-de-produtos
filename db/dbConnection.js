const mongoose = require("mongoose");
require("dotenv").config();


const connection = mongoose.connect(process.env.MONGO_URL_CONNECTION, (err) => {

    if(err){
        console.log("Erro aco conectar com db")
    } else {
        console.log("db conectado com sucesso.")
    }

})

module.exports = connection;