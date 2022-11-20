/*
 * New server file for NotReddit
 * Based on <https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/>
 * 11/19/22
 */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (_req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getAllUsers);

app.listen(3000, () => {
    console.log("Server listening on port 3000.");
})