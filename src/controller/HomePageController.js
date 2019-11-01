const uri = "mongodb+srv://roman:753119@cluster0-r0bey.mongodb.net/test?retryWrites=true&w=majority";
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = function (database, router) {
  /**
   * @Route ("/", method="GET")
   * @return Response
   */
  router.get('/', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*'); // todo set headers at root 
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');

   // NEW CONNECT! FULLY WORKING AND 3.0 +
    database.connect(uri, dbOptions, function(err, client) {
      if (err) { throw err }

      const cluster = client.db("Cluster0");

      cluster.collection('fruits').find().toArray(function(err, result) {
        if (err) { throw err }

        response.send(result);
      });

      client.close();
    });
  });


  /**
   * @Route ("/post", method="OPTIONS")
   * @return String
   */
  router.options('/post', function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');
    response.status(200).send('options ok');
    next();
  });


  /**
   * @Route ("/post", method="POST")
   * @return String
   */
  router.post('/post', function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');

    // NEW CONNECT! FULLY WORKING AND 3.0 +
    database.connect(uri, dbOptions, function(err, client) {
      if (err) { throw err }

      const cluster = client.db("Cluster0");

      cluster.collection('fruits').insertOne(request.body)
        .then(result => {console.log ('success insert note! id = ' + result.insertedId);})
        .catch(err => console.error(`Failed to insert item: ${err}`));

      client.close();
    });

    response.status(200).send('post ok');
    next();
  });

  return router;
}
