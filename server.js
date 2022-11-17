const express = require("express");
const app = express();

// TODO establish connection with Postgres db before spinning up the server

// GET response to web root
app.get("/", (_req, res) => {
  res.send("Hello, world!");
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
app.get("/post/:id", (_req, res) => {
  const id = req.params.id;
  res.send(`Received GET request to fetch post #${id}`);
});

// PUT request - update post by ID
app.put("/post/:id", (_eq, res) => {
  const id = req.params.id;
  res.send(`Received PUT request to update post #${id}`);
});

// DELETE request - delete post by ID
app.delete("/post/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received DELETE request for post #${id}`);
});

// Spin up the server
app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});
