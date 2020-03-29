const axios = require('axios');
const xmlParser = require('fast-xml-parser');

async function freteApi() {
    const params = {
        cepOrigem: "63900340",
        cepDestino: "43810040",
        peso: 5,
        maoPropria: 'n',
        valorDeclarado: 0,
        avisoRecebimento: 'n',
        servico: 40010,
    }

    const apiPath = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=${params.cepOrigem}&sCepDestino=${params.cepDestino}&nVlPeso=${params.peso}&nCdFormato=1&nVlComprimento=20&nVlAltura=5&nVlLargura=15&sCdMaoPropria=${params.maoPropria}&nVlValorDeclarado=${params.valorDeclarado}&sCdAvisoRecebimento=${params.avisoRecebimento}&nCdServico=${params.servico}&nVlDiametro=0&StrRetorno=xml`;

    const apiResponse = await axios.get(apiPath, {responseType: 'text'});
    return xmlParser.parse(apiResponse.data);
}

module.exports = freteApi;