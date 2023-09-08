const express = require('express');
const bodyParser = require('body-parser');

const endPointRouter = require('./route/route');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', endPointRouter);

module.exports = app

