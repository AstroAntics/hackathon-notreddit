/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("like", function(table) {
    table.increments("like_id");
    table.integer("caster").notNullable().references("user_id").inTable("user"); // USER FOREIGN KEY
    table.integer("post").notNullable().references("post_id").inTable("post"); // POST FOREIGN KEY
    table.timestamps();
}).then(() => console.log("Like table created."));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('like').then((console.log("Like table dropped.")));
};
