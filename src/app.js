const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/index.routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", router);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = app;
