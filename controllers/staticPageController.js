const db = require("../queries");
const axios = require("axios");

const showMainPage = (_req, res) => {
  res.render("pages/main_page");
};

const showLoginPage = (_req, res) => {
  res.render("pages/login");
};

const showRegisterPage = (_req, res) => {
  res.render("pages/register");
};

const showFaqPage = (_req, res) => {
  res.render("pages/faq");
};

const showRulesPage = (_req, res) => {
  res.render("pages/rules");
};

const showChangelogPage = (_req, res) => {
  res.render("pages/changelog");
};

const showSearchPage = (_req, res) => {
  res.render("pages/search");
};

const showProfilePage = (req, res) => {
  const id = parseInt(req.params.id);
  let user;
  axios.get(`http://localhost:3000/api/users/${id}`).then(function(response) {
    user = response.data;
    res.render("pages/profile", {user: user});
  });
}

const showPostByIdPage = (req, res) => {
  const id = parseInt(req.params.id);
  let post;
  axios.get(`http://localhost:3000/api/post/${id}`).then(function (response) {
    post = response.data;
    res.render("pages/post", {post: post});
  });
}

const showUsersPage = (_req, res) => {
  let users;
  // Make a request for a user with a given ID
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      // handle success
      users = response.data; // uyvhopji;jlfhbwagruf9e80[grjpoe] I DID IT FINALLY OMG THANK GOD
      // ^ this line i stg
      res.render("pages/users", { users: users });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const showPostsPage = (_req, res) => {
  let posts;
  axios.get('http://localhost:3000/api/posts')
  .then(function(response) {
    posts = response.data;
    res.render("pages/posts", {posts: posts});
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
}

module.exports = {
  showMainPage,
  showLoginPage,
  showRegisterPage,
  showFaqPage,
  showRulesPage,
  showChangelogPage,
  showSearchPage,
  showProfilePage,
  showPostByIdPage,
  showUsersPage,
  showPostsPage
};