'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.send({a: 1});
});

app.listen(port, function () {
  console.log ('we are on ' + port);
});
