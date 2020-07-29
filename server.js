const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./api/recipes/recipeRouter.js");
const ingredientRouter = require("./api/ingredients/ingredientRouter.js");
const stepRouter = require("./api/steps/stepRouter.js");

const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientRouter);
server.use("/api/steps", stepRouter);

server.get("/", (req, res) => {
  res.send(`
              <h2>Lambda Recipes Book API</h>
              <p>Welcome to the Lambda Recipes API</p>
            `);
});

module.exports = server;
