const express = require("express");
const { crear, mostrar } = require("../controllers/publicacionesController");
const router = express.Router();

router.post("/agregarpublicacion", crear);
router.get("/mostrarpublicaciones", mostrar);

module.exports = router;
