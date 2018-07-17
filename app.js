'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const logger = require('morgan');
const errorHandler = require('./lib/error_handler');

const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use ('/', index);
app.use(express.static(path.join(__dirname, './public')));

app.use((req, res, next) => {
  const err = new Error('Page not found.');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
