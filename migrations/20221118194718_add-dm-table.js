/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("dm", function (table) {
        table.increments("dm_id");
        table.integer("sender").notNullable().references("user_id").inTable("user"); // FOREIGN KEY FOR SENDER
        table.integer("receiver").notNullable().references("user_id").inTable("user"); // FOREIGN KEY FOR RECIPIENT
        table.string("subject", 64);
        table.text("content");
        table.boolean("sender_deleted");
        table.boolean("recipient_deleted");
        table.timestamps();
      }).then(() => console.log("DM table created."));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dm').then((console.log("DM table dropped.")));
};
