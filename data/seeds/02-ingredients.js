exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Chicken" },
    { ingredient_name: "slices Cheese" },
    { ingredient_name: "slices cooked ham meat" },
    { ingredient_name: "tablespoons Wheat flour" },
    { ingredient_name: "cup Oil" },
    { ingredient_name: "cloves Garlic" },
    { ingredient_name: "cup Progresso Italian Style Bread Crumbs" },
    { ingredient_name: "Onions" },
    { ingredient_name: "can Beans" },
    { ingredient_name: "can Corn" },
  ]);
};
