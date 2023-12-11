const Aluno = require('../models/Aluno')
const evento = require('../models/Evento')
const tipo_evento = require('../models/Tipo_Evento')
const tipo_trabalho = require ('../models/Tipo_Trabalho')
const trabalho = require('../models/Trabalho')

function abreAddEvento(req,res){
    res.render('addEvento')
}


function add_evento(req,res){
    let nome = req.body.nome
    let data = req.body.data
    let local = req.body.local

    let evento = new Evento({

        nome: nome,
        data: data,
        local : local
    })

    evento.save().then(function(docs){
        res.send("Salvo")
    })
}

function listar(req,res){
    Evento.find({}).then(function(eventos){
        res.render('lst.ejs',{Eventos:eventos})
    })    


    }

function pesquisaevento(req,res){
    Evento.find({nome: new RegExp(req.body.pesquisar, "i")}).then(function(evento,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstevento.ejs',{Eventos:eventos})
        }
    })
}


function abreedtevento(req,res){
    Evento.findById(req.params.id).then(function(evento,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('edtevento.ejs',{Evento:evento})
        }
    })
}

function edtevento(req,res){
    evento.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        data: req.body.data,
        local: req.body.local,
    }).then(function(evento,err){
        if(err){
            res.send(err.message);
        }else{
            res.redirect('/lstevento');
        }
    })
}

function delevento(req,res){
    Evento.findByIdAndDelete(req.params.id)
        .then(function(evento,err){
            if(err){
                res.send(err.message);
            }else{
                res.redirect('/lstevento')
            }
        })
}



module.exports = {
    abreaddevento,
    addevento,
    lstevento,
    pesquisaevento,
    delevento,
    abreedtevento,
    edtevento
}