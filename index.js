/*
 * New server file for NotReddit
 * Based on <https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/>
 * 11/19/22
 */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const renderStatic = require("./controllers/staticPageController");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// FRONTEND PAGE TEMPLATES
app.get("/", renderStatic.showMainPage);
app.get("/login", renderStatic.showLoginPage);
app.get("/register", renderStatic.showRegisterPage);
app.get("/faq", renderStatic.showFaqPage);
app.get("/search", renderStatic.showSearchPage);
app.get("/rules", renderStatic.showRulesPage);
app.get("/changelog", renderStatic.showChangelogPage);

// API ROUTES
app.get("/api/users", db.getAllUsers);
app.get("/api/users/:id", db.getUserById);
app.delete("/api/users/:id/delete", db.deleteUser);
app.post("/api/createuser", db.createUser);
app.get("/api/posts", db.getAllPosts);
app.get("/api/post/:id", db.getPostById);
app.delete("/api/post/:id/delete", db.deletePost);
app.get("/api/dm/all", db.getAllDms);
app.get("/api/dm/:id", db.getDmById);
app.get("/api/dm/:id/delete", db.deleteDm);

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
