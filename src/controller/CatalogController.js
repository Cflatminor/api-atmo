let vapeJuices = require('../model/CatalogModel.js');

module.exports = function (router) {
  /**
   * @Route ("/catalog", method="GET")
   * @return Response
   */
  router.get('/catalog', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*'); // todo set headers at root
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');

    response.send(vapeJuices);
  });

  return router;
};
