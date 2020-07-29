exports.seed = function (knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "Chicken Cordon Bleu" },
    { recipe_name: "Garlic Chicken" },
    { recipe_name: "Slow Cooker Chicken Taco Soup" },
  ]);
};
