const conexao = require('../config/conexao.js')

const SistemaInsifeSchema = new conexao.Schema({
    event_Nome: String,
    event_Data: Date,
    event_Local: String,
})

module.exports = conexao.model('Evento',EventoSchema)