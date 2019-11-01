module.exports = function (db, app, router) {
  [
    require('./HomePageController.js')(db, router),
  ].forEach(item => app.use(item));
};
