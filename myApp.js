var express = require('express');
var app = express();
var bodyParser = require('body-parser');

console.log('Hello World');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', function (req, res, next) {
  var method = req.method;
  var path = req.path;
  var ip = req.ip;
  var log = method + ' ' + path + ' - ' + ip;
  console.log(log);
  next();
});

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

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({'time': req.time});
});

app.get('/:word/echo', function (req, res) {
  var word = req.params.word;
  res.json({'echo': word});
});

app.get('/name', function (req, res) {
  var first = req.query['first'];
  var last = req.query['last'];
  var fullName = first + ' ' + last;
  res.json({'name': fullName});
});

app.post('/name', function (req, res) {
  var first = req.body['first'];
  var last = req.body['last'];
  var fullName = first + ' ' + last;
  res.json({'name': fullName});
});























 module.exports = app;
