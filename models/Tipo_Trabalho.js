const conexao = require("../config/conexao.js");

const Tipo_TrabalhoSchema = new conexao.Schema({
  Trab_MineCursso: String,
  TrabPalestra: String,
});

module.exports = conexao.model("Tipo_Trabalho", Tipo_TrabalhoSchema);
