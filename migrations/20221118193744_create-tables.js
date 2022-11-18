/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    // Make user table
    return knex.schema.createTable("user", function (table) {
        table.increments("user_id");
        table.string("username");
        table.string("password");
        table.string("avatar_url");
        table.text("bio");
        table.boolean("is_mod");
        table.boolean("is_deleted");
        table.timestamps();
      }).then(() => console.log("User table created."));
}
    
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Drop all tables (since we rollback if something's REALLY wrong)
  return knex.schema.dropTableIfExists('user').then((console.log("User table dropped.")));
};
