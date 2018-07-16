'use strict';

const express = require('express');
const path = require('path');
const app = express();

const errorHandler = require('./lib/error_handler');

const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use ('/', index);

app.use((req, res, next) => {
  const err = new Error('Page not found.');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
