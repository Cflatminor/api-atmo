'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// ---------
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const controllers = require('./src/controller/index.js')(MongoClient, app, router);
// ---------

app.use(express.static(path.join(__dirname + '')));
app.use(express.text({ type: 'text/plain' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: 'application/*+json' }));
app.use(controllers);


app.listen(port, function () {
  console.log ('we are on ' + port);
});
