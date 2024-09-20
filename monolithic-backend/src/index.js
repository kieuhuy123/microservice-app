require("dotenv").config();

const express = require("express");
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");

const StartServer = async () => {
  const app = express();

  await databaseConnection();

  await expressApp(app);

  // Handle errors
  app.use((err, req, res, next) => {
    if (!err) {
      return next();
    }

    res.status(500);
    res.send("500: Internal server error");
  });

  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
