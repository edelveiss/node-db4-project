//----------------------------------------------------------------------------//
// CREATE TABLES AND FOREIGN KEY RELATIONSHIPS
//----------------------------------------------------------------------------//
exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 255).notNullable().unique();
    })

    .createTable("recipe_ingredients", (tbl) => {
      tbl.float("quantity", 255).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.primary(["recipe_id", "ingredient_id"]);
    })

    .createTable("steps", (tbl) => {
      tbl.integer("step").unsigned().notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.text("instruction").notNullable();
      tbl.primary(["recipe_id", "step"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
