const crear = async (req, res) => {
  console.log(req.params);
};

const mostrar = async (req, res) => {
  console.log("mostrar info");
  res.send("hola mundo");
};

module.exports = {
  crear,
  mostrar,
};
