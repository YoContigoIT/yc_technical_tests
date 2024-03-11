const app = require("./app");
const env = require("./config/env");
const sequelize = require("./database/config");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(env.PORT, () => {
  console.log("Server on port", env.PORT);
});
