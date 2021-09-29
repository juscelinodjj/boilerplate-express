var express = require('express');
var app = express();

console.log('Hello World');

app.get('/', function (req, res) {
  res.send('Hello Express');
});

app.get('/form', function (req, res) {
  var absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
  var messageStyle = process.env.MESSAGE_STYLE;
  var value = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';
  res.json({'message': value});
});
































 module.exports = app;
