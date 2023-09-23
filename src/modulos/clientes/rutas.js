const express = require("express");

const respuesta = require("../../red/respuestas");
const router = express.Router();

router.get("/", function (req, res) {
  respuesta.succes(req,res,'todo OK desde clientes',200);
});

module.exports = router;
