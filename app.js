var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var settings = require('./settings');


var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(app.get('port'),function () {
  console.log('Express server listening on port' + app.get('port'));
})

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '主页' });
  });
  app.get('/reg', function (req, res) {
    res.render('reg', { title: '注册' });
  });
  app.post('/reg', function (req, res) {
  });
  app.get('/login', function (req, res) {
    res.render('login', { title: '登录' });
  });
  app.post('/login', function (req, res) {
  });
  app.get('/post', function (req, res) {
    res.render('post', { title: '发表' });
  });
  app.post('/post', function (req, res) {
  });
  app.get('/logout', function (req, res) {
  });
};
