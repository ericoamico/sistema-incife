const conexao = require("../config/conexao.js");

const TrabalhoSchema = new conexao.Schema({
  Trab_Conceito: String,
  trab_Observacao: String,
});

module.exports = conexao.model("Trabalho", TrabalhoSchema);
