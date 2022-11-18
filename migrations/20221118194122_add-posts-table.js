/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("post", function (table) {
        table.increments("post_id");
        table.integer("creator").notNullable().references("user_id").inTable("user");
        table.string("title", 64);
        table.text("content");
        table.boolean("is_deleted");
        table.boolean("is_locked");
        table.timestamps();
      }).then(() => console.log("Post table created."));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('post').then((console.log("Post table dropped.")));
};
