/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // No-op
    console.log("Wrong migration. Please run Migration #2. This one's broken.")
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // No-op.
  console.log("Wrong migration. Please run Migration #2. This one's broken.")
};
