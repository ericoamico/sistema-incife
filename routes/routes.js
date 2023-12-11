const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/addevento", controller.abreAddEvento);
router.post("/addevento", controller.add_evento);

router.get("/lstevento", controller.listar);
router.post("/lstevento", controller.pesquisaevento);
router.get("/partialuno", controller.inscreverparticipante);
router.get("/edtpaciente/:id", controller.abreedtevento);
router.post("/edtevento/:id", controller.edtevento);

router.get("/delevento/:id", controller.delevento);

module.exports = router;
