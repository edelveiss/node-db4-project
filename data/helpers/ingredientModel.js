const db = require("../db-config.js");
module.exports = {
  find,
  findById,
  findRecipes,
  add,
  update,
  remove,
};

function find() {
  return db("ingredients");
}

function findById(id) {
  return db("ingredients").where({ id }).first();
}
function findRecipes(id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "ri.recipe_id", "r.id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select(
      "i.id as ingredient_id",
      "r.recipe_name as recipe_name",
      "i.ingredient_name as ingredient_name"
    )
    .where("ri.ingredient_id", id);
}

function add(step) {
  return db("ingredients")
    .insert(step)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db("ingredients")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? findById(id) : null));
}

function remove(id) {
  return db("ingredients")
    .where("id", id)
    .del()
    .then((delRow) => (delRow > 0 ? id : null));
}
