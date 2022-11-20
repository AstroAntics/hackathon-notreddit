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
  showUsersPage,
  showPostsPage
};
