const conexao = require('../config/conexao.js')

const AlunoSchema = new conexao.Schema({
    aluno_Nome: String,
    aluno_Inscricao: String
})

module.exports = conexao.model('Aluno',AlunoSchema)