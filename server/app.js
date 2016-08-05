const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const indexPath = path.join(__dirname, '../public', 'index.html');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(express.static(__dirname + '/../browser'));

app.use('/api', require('./routes'));

app.get('/*', function (req, res) {
  res.sendFile(indexPath);
});

app.use(function (err, req, res, next) {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;


