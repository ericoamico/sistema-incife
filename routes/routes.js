const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
//rota para abrir formulário de adicionar
router.get("/addevento", controller.abreAddEvento);

//rota para receber dados do formulário e adicionar ao banco mongodb
router.post("/addevento", controller.add_evento);

router.get("/listar", controller.listar);
router.post("/pesquisaevento", controller.pesquisaevento);
router.post("/delevento", controller.delevento);
router.get("/abreedteevento", controller.abreedtevento);
router.post("/edtevento", controller.edtevento);
router.post("/inscreverparticipante", controller.inscreverparticipante);
module.exports = router;
