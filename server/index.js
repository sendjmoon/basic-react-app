'use strict';

const express = require('express');
const http = require('http');

const app = require('../app');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.set('port', port);

server.listen(port, () => { console.log(`server listening on ${port}`); });
