const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const postgres = require("postgres");

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const knex = require("knex")({
  client: "pg",
  connection: process.env.PG_DB_URL,
});

const sql = postgres(process.env.PG_DB_URL);

// GET response to web root
app.get("/", (_req, res) => {
  res.render("pages/main_page");
});

// GET request to login page
app.get("/login", (_req, res) => {
  res.render("pages/login");
});

// GET request to registration page
app.get("/register", (_req, res) => {
    res.render("pages/register");
});

// Test response to fetch data from database
app.get("/test", (_req, res) => {
  knex
    .from("user")
    .select("id")
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});

// GET request to 404 page (intentional)
app.get("/404", (_req, res) => {
  res.status(404).json({ error: 404 });
});

// GET request to 403 page (intentional)
app.get("/403", (_req, res) => {
  res.status(403).json({ error: 403 });
});

/*
 * WEB ROUTES
 * TODO move the separate groups into router files as organized
 */

// ***** USER ROUTES *****

// POST request - create new user
app.post("/user/create", (_req, res) => {
  res.send("Received POST request to create new user.");
});

// GET request - fetch all users
// TODO this needs a limiter or something or else it might be abused by bots
app.get("/user/all", (_req, res) => {
  res.send("Received GET request to fetch all users.");
});

// TODO add GET request to fetch users by limit (i.e. /users/all?limit=X)

// GET request - fetch user by ID
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res
      .status(400)
      .json({ message: "Invalid user ID specified. Must be a number." });
  } else {
    res.send(`Received GET request to fetch user #${id}`);
  }
});

// GET request - fetch user by name
app.get("/user/:username", (req, res) => {
  const name = req.params.name;
  if (name === null) {
    res.status(404).json({ message: "No username specified." });
  } else {
    res.send(`Received GET request to fetch user ${name}`);
  }
});

// PUT request - update user
app.put("/user/:username/update", (req, res) => {
  const username = req.params.username;
  res.send(`Received PUT request to update user ${username}`);
});

// PUT request - update user
app.put("/user/:id/update", (req, res) => {
  const id = req.params.id;
  res.send(`Received PUT request to update user #${id}`);
});

// DELETE request - delete user
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received delete request for user #${id}`);
});

// DELETE request - delete user
app.delete("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Received delete request for user ${username}.`);
});

// ***** POST (COMMENT) ROUTES *****

// POST request - create comment
app.post("/post/create", (_req, res) => {
  res.send(`Received POST request to create a new comment.`);
});

// GET request - fetch all posts
// TODO add limiter (/posts?limit=X) so this doesn't crash the site
app.get("/posts/all", (_req, res) => {
  res.send(`Received GET request to fetch all posts.`);
});

// GET request - fetch post by ID
app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received GET request to fetch post #${id}`);
});

// PUT request - update post by ID
app.put("/post/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received PUT request to update post #${id}`);
});

// DELETE request - delete post by ID
app.delete("/post/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received DELETE request for post #${id}`);
});

// ***** LIKE ROUTES *****
app.post("/like/create", (_req, res) => {
  res.send(`Received POST request to create new like.`);
});

app.get("/likes/all", (_req, res) => {
  // TODO add limiter (/all?limit=X) so this doesn't crash the site
  res.send(`Received GET request to fetch all likes.`);
});

app.get("/like/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received GET request to fetch like #${id}.`);
});

app.put("/like/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received PUT request to update like #${id}.`);
});

app.delete("/like/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received DELETE request to delete like #${id}.`);
});

// Spin up the server
app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});
