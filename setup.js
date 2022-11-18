/*
 * NotReddit setup file
 * 11/18/22
 */

require("dotenv").config();

const knex = require("knex")({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

knex.schema.createTable("user", function (table) {
  table.increments("user_id");
  table.string("username");
  table.string("password");
  table.string("avatar_url");
  table.text("bio");
  table.boolean("is_mod");
  table.boolean("is_deleted");
  table.timestamps();
});

knex.schema.createTable("post", function (table) {
  table.increments("post_id");
  table.integer("creator").unsigned.notNullable();
  table.string("title", 64);
  table.text("content");
  table.boolean("is_deleted");
  table.boolean("is_locked");
  table.timestamps();
  table.foreign("creator").references("user_id").inTable("user");
});

knex.schema.createTable("dm", function (table) {
  table.increments("dm_id");
  table.integer("sender").unsigned.notNullable();
  table.integer("receiver").unsigned.notNullable();
  table.string("subject", 64);
  table.text("content");
  table.boolean("sender_deleted");
  table.boolean("recipient_deleted");
  table.timestamps();
  table.foreign("sender").references("user_id").inTable("user"); // FOREIGN KEY FOR SENDER
  table.foreign("recipient").references("user_id").inTable("user"); // FOREIGN KEY FOR RECIPIENT
});

knex.schema.createTable("like", function(table) {
    table.increments("like_id");
    table.integer("caster").unsigned.notNullable();
    table.integer("post").unsigned.notNullable();
    table.timestamps();
    table.foreign("caster").references("user_id").inTable("user");
    table.foreign("post").references("post_id").inTable("post");
});
