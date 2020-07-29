const express = require("express");
const Recipes = require("../../data/helpers/recipeModel.js");
const Ingredients = require("../../data/helpers/ingredientModel.js");

const router = express.Router();
router.get("/", (req, res) => {
  Ingredients.find()
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the ingredients",
      });
    });
});
router.get("/:id", validateIngredientId, (req, res) => {
  res.status(200).json(req.ingredient);
});
router.get("/:id/recipes", validateIngredientId, (req, res) => {
  Ingredients.findRecipes(req.ingredient.id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the recipes",
      });
    });
});

//custom middleware
function validateIngredientId(req, res, next) {
  const { id } = req.params;
  Ingredients.findById(id)
    .then((ingredient) => {
      if (ingredient) {
        req.ingredient = ingredient;
        next();
      } else {
        res.status(400).json({ message: "invalid ingredient id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "failed", err });
    });
}
module.exports = router;
