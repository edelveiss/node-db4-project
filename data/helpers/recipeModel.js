const db = require("../db-config.js");
module.exports = {
  find,
  findById,
  findIngredients,
  getShoppingList,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id }).first();
}

function findIngredients(id) {
  return db("ingredients as in")
    .join("recipe_ingredients as ri", "ri.ingredient_id", "in.id")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .select(
      "in.id as id",
      "r.recipe_name as recipe_name",
      "in.ingredient_name as ingredient_name",
      "ri.quantity as quantity"
    )
    .where("ri.recipe_id", id);
}
function getShoppingList(id) {
  return db("ingredients as in")
    .join("recipe_ingredients as ri", "ri.ingredient_id", "in.id")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .select("in.ingredient_name as ingredient_name", "ri.quantity as quantity")
    .where("ri.recipe_id", id);
}
function findSteps(id) {
  return db("steps as s")
    .join("recipes as r", "r.id", "s.recipe_id")
    .select(
      "r.recipe_name as recipe_name",
      "s.step as step",
      "s.instruction as instruction"
    )
    .where("s.recipe_id", id);
}

function add(scheme) {
  return db("recipes")
    .insert(recipe)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? findById(id) : null));
}

function remove(id) {
  //   let deletedObj = {};
  //   findById(id)
  //     .then((obj) => findSteps(obj.id))
  //     .then((obj) => {
  //       console.log(obj);
  //       deletedObj = { ...obj };
  //     });
  return db("recipes")
    .where("id", id)
    .del()
    .then((delRow) => (delRow > 0 ? id : null));
}
