const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/addevento", controller.abreaddevento);
router.post("/addevento", controller.addevento);

router.get("/lstevento", controller.lstevento);
router.post("/lstevento", controller.pesquisaevento);

router.get("/edtpaciente/:id", controller.abreedtevento);
router.post("/edtevento/:id", controller.edtevento);

router.get("/delevento/:id", controller.delevento);

module.exports = router;
