const sequelize = require("./config");
require("./models/user.model");

const alterdb = () => {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Tables created!");
      process.exit();
    })
    .catch((error) => {
      console.error("Unable to create the tables:", error);
      process.exit();
    });
};

alterdb();
