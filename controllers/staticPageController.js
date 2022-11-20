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
}

module.exports = {
  showMainPage,
  showLoginPage,
  showRegisterPage,
  showFaqPage,
  showRulesPage,
  showChangelogPage,
  showSearchPage
};
