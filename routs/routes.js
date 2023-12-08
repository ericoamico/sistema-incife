const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/addpaciente", controller.abreaddpaciente);
router.post("/addpaciente", controller.addpaciente);

router.get("/lstpaciente", controller.lstpaciente);
router.post("/lstpaciente", controller.pesquisapaciente);

router.get("/edtpaciente/:id", controller.abreedtpaciente);
router.post("/edtpaciente/:id", controller.edtpaciente);

router.get("/delpaciente/:id", controller.delpaciente);

module.exports = router;
