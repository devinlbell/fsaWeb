var express = require('express');
var app = express();
var server = app.listen(8008);

app.use(express.static('public'));

var YahooFantasy = require('yahoo-fantasy');
// you can get an application key/secret by creating a new application on Yahoo!
var yf = new YahooFantasy(
  'dj','ae93');
