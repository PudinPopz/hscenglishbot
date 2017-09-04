//The scraper stuff

m.print('scraper initialised topu lel desu ne ;)');
//m.error('well')

var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

// var url = 'http://google.com';
// request(url,function(err,resp,body) {
// // if (err) {
//   m.error(err);
// }
// else {
//   m.printf(body.green)
// }// // // });
var bigmtt = "NOTHING";
var destination = fs.createWriteStream('./downloads/site.html');
var url = 'http://www.quotationspage.com/random.php3';
request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    var qTitle = $('.quote');
    var qTitleText = qTitle.text();
    m.print(qTitleText);
    bigmtt = qTitleText;

  })
  .pipe(destination)
  .on('finish', function() {
    m.print('Received HTML.');
    m.print(bigmtt);
  })
  .on('error', function() {
    m.error('ERROR - Could not download HTML. You goddamned failure.');
    m.error(err);
  });




app.listen(port);
m.printf(('SCRAPING SERVER LISTENING ON PORT ' + port + ' MATEYS').green);
