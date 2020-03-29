const axios = require('axios');
const freteApi = require('./../models/frete-api');

module.exports = {
    async index(request, response) {
        try {
            var { Servicos:{ cServico } } = await freteApi();
        } catch (err) {
            console.log("ERRO");
        }
        
        return response.json(cServico);
    }
}