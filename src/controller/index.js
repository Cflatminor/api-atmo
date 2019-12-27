module.exports = function (db, app, router) {
  [
    require('./HomePageController.js')(db, router), // todo ...args
    require('./CatalogController.js')(router),
  ].forEach(item => app.use(item));
};
