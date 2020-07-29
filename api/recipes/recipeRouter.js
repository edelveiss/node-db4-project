const express = require("express");
const Recipes = require("../../data/helpers/recipeModel.js");
const Ingredients = require("../../data/helpers/ingredientModel.js");
const Steps = require("../../data/helpers/stepModel.js");

const router = express.Router();

router.post("/", validateRecipe, (req, res) => {
  Recipes.add(req.body)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the recipe",
      });
    });
});

router.post(
  "/:id/ingredients",
  validateRecipeId,
  validateIngredient,
  (req, res) => {
    Ingredients.add(req.ingredient)
      .then((ingredient) => {
        res.status(201).json(ingredient);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error adding the ingredient",
        });
      });
  }
);

router.post("/:id/steps", validateRecipeId, validateInstruction, (req, res) => {
  Steps.add(req.step)
    .then((step) => {
      res.status(201).json(step);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the instruction",
      });
    });
});

router.get("/", (req, res) => {
  Recipes.find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the Recipes",
      });
    });
});

router.get("/:id", validateRecipeId, (req, res) => {
  res.status(200).json(req.recipe);
});

router.get("/:id/ingredients", validateRecipeId, (req, res) => {
  Recipes.findIngredients(req.recipe.id)
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
router.get("/:id/shoppingList", validateRecipeId, (req, res) => {
  Recipes.getShoppingList(req.recipe.id)
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the getShoppingList",
      });
    });
});
router.get("/:id/steps", validateRecipeId, (req, res) => {
  Recipes.findSteps(req.recipe.id)
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

router.delete("/:id", validateRecipeId, (req, res) => {
  Recipes.remove(req.recipe.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    // .then((count) => {
    //   if (count > 0) {
    //     res.status(200).json(req.scheme);
    //   } else {
    //     res.status(404).json({ message: "The scheme could not be found" });
    //   }
    // })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the recipe",
      });
    });
});

router.put("/:id", validateRecipeId, validateRecipe, (req, res) => {
  Recipes.update(req.recipe.id, req.body)
    .then((recipe) => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        req
          .status(500)
          .json({ message: "An error occured during getting recipe" });
      }
    })
    // .then((count) => {
    //   if (count) {
    //     Schemes.findById(req.scheme.id)
    //       .then((scheme) => {
    //         res.status(200).json(scheme);
    //       })
    //       .catch((err) => {
    //         req
    //           .status(500)
    //           .json({ message: "An error occured during getting scheme" });
    //       });
    //   } else {
    //     res.status(404).json({ message: "The scheme could not be found" });
    //   }
    // })
    .catch((error) => {
      res.statusMessage = "Error updating the recipe";
      console.log(error);
      res.status(500).json({
        message: "Error updating the recipe",
      });
    });
});

//custom middleware
function validateRecipeId(req, res, next) {
  const { id } = req.params;
  Recipes.findById(id)
    .then((recipe) => {
      if (recipe) {
        req.recipe = recipe;
        next();
      } else {
        res.status(400).json({ message: "invalid recipe id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "failed", err });
    });
}

function validateRecipe(req, res, next) {
  if (!isEmpty(req.body)) {
    if (!req.body.recipe_name) {
      res.statusMessage = "missing required recipe name  field";
      res.status(400).json({ message: "missing required recipe name field" });
      //res.status(400).end();
    } else {
      next();
    }
  } else {
    res.statusMessage = "missing recipe data";
    res.status(400).json({ message: "missing recipe data" });
  }
}

function validateIngredient(req, res, next) {
  if (!isEmpty(req.body)) {
    if (!req.body.ingredient_name) {
      res.statusMessage = "missing required ingredient_name field";
      res
        .status(400)
        .json({ message: "missing required ingredient_name field" });
    }
    // else if (!req.body.steps) {
    //   res.statusMessage = "missing required steps field";
    //   res.status(400).json({ message: "missing required steps field" });
    // }
    else {
      //   req.ingredient = {
      //     ...req.body,
      //     scheme_id: req.scheme.id,
      //   };
      next();
    }
  } else {
    res.statusMessage = "missing step data";
    res.status(400).json({ message: "missing step data" });
  }
}
function validateInstruction(req, res, next) {
  if (!isEmpty(req.body)) {
    if (!req.body.instruction_name) {
      res.statusMessage = "missing required instruction_name field";
      res
        .status(400)
        .json({ message: "missing required instruction_name field" });
    }
    // else if (!req.body.steps) {
    //   res.statusMessage = "missing required steps field";
    //   res.status(400).json({ message: "missing required steps field" });
    // }
    else {
      //   req.ingredient = {
      //     ...req.body,
      //     scheme_id: req.scheme.id,
      //   };
      next();
    }
  } else {
    res.statusMessage = "missing step data";
    res.status(400).json({ message: "missing step data" });
  }
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

module.exports = router;
