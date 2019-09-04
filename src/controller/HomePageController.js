module.exports = function (db, router) {
  router.get('/', function (request, response) {
    response.send({a: 1});
  });

  return router;
}
