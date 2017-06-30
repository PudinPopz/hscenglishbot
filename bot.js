//accordingtoallknownlawsofaviation,thereisnowayabeeshouldbeabletofly.
//DEV MODE ON OR OFF
/*jshint esversion: 6 */
const devmode = false;   //IMPORTANT!
//MAKE FALSE WHEN DEPLOYING TO HEROKU
const version = 0.3;

console.log("kill me");
//Facebook
const express = require('express');
//const path = require('path');
//const cheerio = require('cheerio');
//const fs = require('fs');
//const bot = express();
//const port = 8000;
const colors = require('colors');
const bodyParser = require('body-parser');
const request = require('request');

const pagetoken = "EAAEl2E0us9ABABzrFVpalTfV6gBSLVAvCestWZCHvFlTgZA0qu5wg92kd494jD7RVRdhFP5mIOeQZAOCLimKe3QELTpDNkQgYuU9oaMCBe4X2aZCIUEan4iPpaHGlb9yJvJVIjEmWvYCN8njo2AFwlqauoJyua5MMJ1jZCaDbZAwZDZD";

var FB = require('fb');

//self scripts (make sure they are ran AFTER)
global.m = require('./misclib');
//const scraper = require('./scraper'); scraper disabled due to bugs
global.quotelibrary = require('./quotelibrary');
const generator = require('./generator');

//m.notif(global.memes);

m.notif("HSCENGLISHBOT: VERSION " + version + "");

// for post API

var accessToken;
FB.api('oauth/access_token', {
  client_id: '323085914780624',
  client_secret: 'cbb74a5294f1966bcd643c3559c9bf59',
  grant_type: 'client_credentials'
}, function(res) {
  if (!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    console.log("FB API ERROR :(");
    return;
  }
  console.log("AYY PASSED FACEY");
  console.log(global.generateQuestion);
  accessToken = res.access_token;
  accessToken = pagetoken;
  FB.setAccessToken(accessToken);
});
console.log(accessToken);

console.log("REGURGITATING");
console.log(FB.getAccessToken());

const app = express();

const token = process.env.FB_VERIFY_TOKEN;
const access = process.env.FB_ACCESS_TOKEN;



console.log(token);
console.log(access);


app.set('port', (process.env.PORT || 5000));
//FACEBOOK MESSENGER (NOT IN USE)


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('memes');

});

app.get('/webhook/', function(req, res) {

  if (req.query['hub.verify_token'] ===
    token) {
    res.send(req.query['hub.challenge']);
  }

  res.send('No entry');
});


//yarged from facey doco
app.post('/webhook', function(req, res) {
  var data = req.body;
  console.log('hi');
  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});

function receivedMessage(event) {

  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {

    // If we receive a text message, check to see if it matches a keyword
    // and send back the example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'generic':
        sendGenericMessage(senderID);
        break;

      default:
        sendTextMessage(senderID, global.generateQuestion);
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "delet this");
    facebookpost();
  }


  console.log("Message data: ", event.message);
}

function sendGenericMessage(recipientId, messageText) {
  // To be expanded in later sections
}

function sendTextMessage(recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: access
    },
    method: 'POST',
    json: messageData

  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}




app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'));


});

//FACEBOOK PAGE POST
//var request = require('request');
var OAuth2 = require('oauth2').OAuth2;
var oauth2 = new OAuth2("323085914780624",
  "cbb74a5294f1966bcd643c3559c9bf59",
  "", "https://www.facebook.com/dialog/oauth",
  "https://graph.facebook.com/oauth/access_token",
  null);

app.get('/facebook/auth', function(req, res) {
  var redirect_uri = "https://hscenglishbot.herokuapp.com/" + "/Path_To_Be_Redirected_to_After_Verification";
  // For eg. "http://localhost:3000/facebook/callback"
  var params = {
    'redirect_uri': redirect_uri,
    'scope': 'user_about_me,publish_actions'
  };
  res.redirect(oauth2.getAuthorizeUrl(params));
  console.log("Facebook auth stuff");
});







//Twitter
var Twit = require('twit');

//var config = require('./config.js');

//console.log(config);

var T = new Twit({
  consumer_key: 'N9O5sZYoOt1uI7LEFV0WP2Tpb',
  consumer_secret: '5FDsbg5IayxJYKGKTz9MypYSVK1kzwfOhfnOJiF912XjQynSxP',
  access_token: '875342235369259008-NyuZyXEf6tpppJZt9X4D33NbczNskyV',
  access_token_secret: 'fPSXuuobMFxJuIKjfLhbT3hWrtHnhiVo0o2fc79FIwxKT'
});

console.log(T);

//creating tweet


tweetIt();
setInterval(tweetIt, 4140000);


//tweeting function
function tweetIt() {
  var tweet = {
    status: global.generateQuestion
  };

  if (!devmode) {
    T.post('statuses/update', tweet, tweeted);
    console.log(tweet);
  }

  function tweeted(err, data, response) {
    if (err) {
      console.log("TWEET ERROR");
    } else {
      console.log("SUCC!");
    }
  }



}

//facebook post function

facebookpost();
setInterval(facebookpost, 4140000);

function facebookpost() {
  accessToken = pagetoken;
  FB.setAccessToken(accessToken);

  console.log(accessToken);
  console.log("RUNNING FBPOST AYY LMAO");

  var body = global.generateQuestion;
  if (!devmode) {
    FB.api('me/feed', 'post', {
      message: body
    }, function(res) {
      if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        console.log("FB POST ERROR :(");
        return;
      }
      console.log('Post Id: ' + res.id);
      console.log('THINGY: ' + body);
    });
  } else {
    console.log('THINGY: ' + body);
    console.log(colors.red.underline.bold("NOT SENT - DEV MODE ENABLED."));
    console.log(colors.white.underline.bold("To turn off dev mode, set const 'devmode' to 'false' at the top of bot.js. Mkay?"));
  }
}
//yargyharg
var http = require("http");
setInterval(function() {
  http.get("http://hscenglishbot.herokuapp.com");
}, 300000); // every 5 minutes (300000)
