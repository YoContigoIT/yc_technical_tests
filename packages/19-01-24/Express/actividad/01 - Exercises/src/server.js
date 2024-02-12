const express = require("express");
const publicacionesroute = require("./routes/publicacionRouter");
let publications = [];

const server = express();

server.use(express.json());
server.use("/", publicacionesroute);
const port = 4000;
server.listen(port, () => {
  console.log(`El servidor esta funcionado en el puerto ${port}`);
});
//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
