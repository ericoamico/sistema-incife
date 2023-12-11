const conexao = require("../config/conexao.js");

const Tipo_EventoSchema = new conexao.Schema({
  Event_Exposiçao: String,
  Event_CoffeBreak: String,
  datanasc: Date,
  sintomas: String,
});

module.exports = conexao.model("Tipo_Evento", Tipo_EventoSchema);
