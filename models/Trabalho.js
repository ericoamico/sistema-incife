const conexao = require("../config/conexao.js");

const TrabalhoSchema = new conexao.Schema({
  TrabConceito: String,
  trabConceito_: String,
});

module.exports = conexao.model("Trabalho", TrabalhoSchema);
