var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports = http.createServer( function(req, res){
  //EJERCICIO 1
  if( req.url === '/'){
    console.log(`Server raised in port ${PORT}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Server raised in port ${PORT}`);
    return;
  }
  //EJERCICIO 2
  else if( req.url === '/api'){
		res.writeHead(200, { 'Content-Type':'application/json' })
		fs.readFile(__dirname + '/utils/dogsData.json', 'utf-8', function(err, data){
      if(err){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      }
      else {
        var jsonData = JSON.parse(data);
        res.end(JSON.stringify(jsonData));
      }
    });
    return;
	}

  //EJERCICIO 3
  else if( req.url === '/allDogs'){
		res.writeHead(200, { 'Content-Type':'text/html' })
		fs.readFile(__dirname + '/utils/allDogs.html', 'utf-8', function(err, data){
      if(err){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('HTML not found');
      }
      else {
        res.end(data);
      }
    });
    return;
	}

  // EJERCICIO 4
  // EXCEPCIÓN DE RUTAS
  else{
		res.writeHead(404); 
		res.end(); 
	}
}).listen(PORT, '127.0.0.1');
