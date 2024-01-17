var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
})

server.listen( PORT, () => {
  console.log(`Server raised in port ${PORT}`);
}
)

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  null;
