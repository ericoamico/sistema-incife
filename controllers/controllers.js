const Aluno = require("../models/partialuno");
const evento = require("../models/Evento");
const tipo_evento = require("../models/Tipo_Evento");
const tipo_trabalho = require("../models/Tipo_Trabalho");
const trabalho = require("../models/Trabalho");

function abreAddEvento(req, res) {
  res.render("addEvento");
}

function add_evento(req, res) {
  let nome = req.body.event_Nome;
  let data = req.body.event_Data;
  let local = req.body.event_Local;

  let Evento = new evento({
    event_Nome: nome,
    event_Data: data,
    event_Local: local,
  });

  Evento.save().then(function (docs) {
    res.redirect("/listar");
  });
}

function abreinscreverparticipante(req, res) {
  res.render("partialuno");
}
function inscreverparticipante(req, res) {
  let nome = req.body.nome;
  let inscricao = req.body.inscricao;
  let participante = new participante({
    nome: nome,
    inscricao: inscricao,
  });
  participante.save().then(function (docs) {});
}
function listar(req, res) {
  evento.find({}).then(function (eventos) {
    res.render("listar.ejs", { Eventos: eventos });
  });
}

function pesquisaevento(req, res) {
  Evento.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    evento,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lsteventos.ejs", { Eventos: eventos });
    }
  });
}

function abreedtevento(req, res) {
  Evento.findById(req.params.id).then(function (evento, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtevento.ejs", { Evento: evento });
    }
  });
}

function edtevento(req, res) {
  evento
    .findByIdAndUpdate(req.params.id, {
      nome: req.body.nome,
      data: req.body.data,
      local: req.body.local,
    })
    .then(function (evento, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/listar");
      }
      pesquisaevento;
    });
}

function delevento(req, res) {
  Evento.findByIdAndDelete(req.params.id).then(function (evento, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/listar");
    }
  });
}

module.exports = {
  add_evento,
  abreAddEvento,
  listar,
  pesquisaevento,
  delevento,
  abreedtevento,
  edtevento,
  inscreverparticipante,
};
