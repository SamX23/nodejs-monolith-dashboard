module.exports = {
  home: (req, res) => res.render("pages/default/home"),
  notFound: (req, res) => res.render("pages/default/not-found"),
  error: (req, res) => res.render("pages/default/error"),

  dashboard: require("./dashboard"),
};
