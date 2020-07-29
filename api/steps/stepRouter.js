const express = require("express");
const Recipes = require("../../data/helpers/recipeModel.js");
const Ingredients = require("../../data/helpers/ingredientModel.js");
const Steps = require("../../data/helpers/stepModel.js");

const router = express.Router();
router.get("/", (req, res) => {
  Steps.find()
    .then((steps) => {
      res.status(200).json(steps);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the steps",
      });
    });
});
module.exports = router;
