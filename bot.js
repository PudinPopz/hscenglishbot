//accordingtoallknownlawsofaviation,thereisnowayabeeshouldbeabletofly.
console.log("kill me");
//Facebook
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

const token = process. env.FB_VERIFY_TOKEN
const access = process.env.FB_ACCESS_TOKEN

console.log(token);
console.log(access);


app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('memes')
})

app.get('/webhook/', function(req, res) {

  if (req.query['hub.verify_token'] ===
    token)
    {
      res.send(req.query['hub.challenge'])
    }

  res.send('No entry')
})

//yarged from facey doco
app.post('/webhook', function (req, res) {
  var data = req.body;

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
          sendTextMessage(senderID, messageText);
      }
    } else if (messageAttachments) {
      sendTextMessage(senderID, "Message with attachment received");
    }
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
    qs: { access_token: access },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
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
  console.log('running on port', app.get('port'))


})









//Twitter
var Twit = require('twit');

//var config = require('./config.js');

//console.log(config);

var T = new Twit({
  consumer_key: 'N9O5sZYoOt1uI7LEFV0WP2Tpb',
  consumer_secret: '5FDsbg5IayxJYKGKTz9MypYSVK1kzwfOhfnOJiF912XjQynSxP',
  access_token: '875342235369259008-NyuZyXEf6tpppJZt9X4D33NbczNskyV',
  access_token_secret: 'fPSXuuobMFxJuIKjfLhbT3hWrtHnhiVo0o2fc79FIwxKT'
})

console.log(T);

//creating tweet
function generateTweet() {
  //WORD BANK

  //random stuff
  var adjectives = ['', 'detailed', 'introspective', 'evaluative', 'detailed', 'insightful', 'clear', 'fabulous', 'extensive', 'persuasive'];

  function adjective() {
    var chosenArray = adjectives;
    var chosen = 0;
    if (Math.random() < 0.25) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  var atleasts = ['', 'at least '];

  function atleast() {
    var chosenArray = atleasts;
    var chosen = 0;
    if (Math.random() < 0.35) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  var onetexts = ['ONE text', 'TWO texts', 'THREE texts', 'FOUR texts', 'FIFTY-THREE texts', 'FOUR-HUNDRED-AND-TWENTY-TWO texts']

  function onetext() {
    var chosenArray = onetexts;
    var chosen = 0;
    if (Math.random() < 0.1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else if (Math.random() < 0.5) {
      chosen = 2;
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  //list of instructions
  var instructions = ['evaluate', 'analyse', 'examine', 'discuss', 'illustrate', 'explore', 'assess', 'explain'];

  function instruction() {
    var chosenArray = instructions;
    var chosen = 0;
    if (Math.random() < 0.99) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  var ks = ['the importance of', 'the use of', 'the portrayal of', 'the exploration of', 'the significance of', 'the depiction of', 'the limitations of'];

  function k() {
    var chosenArray = ks;
    var chosen = 0;
    if (Math.random() < 0.99) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }
  //ideas

  var ideas = ['honesty', 'discovery', 'discovery of place', 'self discovery', 'isolation', 'discovery of community', 'morbid discovery',
    'personal discovery', "the hero's journey", 'dream-like narrative structure', 'intense human relationships', 'textual integrity',
    'post-colonialism', 'Marxist theory', 'globalist themes', 'historical integrity', 'feminist theory', 'cultural discovery', 'discovery of culture',
    'discovery of self', 'intimacy', 'cultural appropriation', 'humanity', 'Marxism', 'the contrast between light and dark', 'morality',
    'context', 'culture', 'belonging', 'community', 'introspection', 'characterisation', 'World Bank literature', 'place', 'racial tensions', 'tension', 'conflict', 'gender roles'
  ];

  function idea() {
    var chosenArray = ideas;
    var chosen = 0;
    if (Math.random() < 0.99) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  //k2

  var k2s = ['in', 'explored in', 'illustrated in', 'evoked by', 'and its depiction in',
    'and how it is depicted in', 'and its effect on audience in', 'and its representation in',
    'and how it is represented in', 'and its exploration in', 'and how it is explored in'
  ];

  function k2() {
    var chosenArray = k2s;
    var chosen = 0;
    if (Math.random() < 0.25) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  //related texts
  var relatedtexts = [
    "ONE prescribed text",
    "TWO prescribed texts",
    "ONE related text",
    "Joseph Conrad's Heart of Darkness",
    "Simon Nasht's Frank Hurley: The Man Who Made History",
    "Francis Ford Coppola's Apocalypse Now",
    "J.D. Salinger's The Catcher in the Rye",
    "Aravind Adiga's The White Tiger",
    "Sofia Coppola's Lost in Translation",
    "Francis Ford Coppola's Apocalypse Now",
    "Michael Ondaatje's In the Skin of a Lion",
    "William Shakespeare's Richard III",
    "The Bee Movie",
    "Shark Tale",
    "William Shakespeare's King Lear",
    "William Shakespeare's Macbeth",
    "William Shakespeare's The Tempest",
    "William Shakespeare's Othello",
    "Al Pacino's Looking for Richard",
    "Season 10 Episode 2 of Mystery Diners",
    "Shrek 2",
    "Masterchef Australia",
    "Neil Breen's Pass Thru",
    "Neil Breen's Fateful Findings",
    "Suicide Squad",
    "Tommy Wiseau's The Room",
    "Spider-Man 3",
    "The Amazing Spider-Man 2",
    "X-Men Apocalypse",
    "Season 3 Episode 4 of Judge Judy"

  ]

  function relatedtext() {
    var chosenArray = relatedtexts;
    var chosen = 0;
    if (Math.random() < 0.8) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else if (Math.random() < 0.3) {
      chosen = 1;
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }


  //ender
  var enders = [
    '.', `, with ${adjective()} reference to ONE text of your own choosing.`, `, drawing ${adjective()} thematic comparisons to ${atleast()} ${onetext()} of your own choosing.`,
    ', making detailed reference to characters within the text.', ', with reference to critical theory.', `, whilst also making ${adjective()} reference to ${idea()}.`,
    `, referencing ${idea()} where possible.`, `, whilst also communicating ${adjective()} knowledge of ${idea()}.`, `, providing additional links to ${idea()} in your response.`
  ]

  function ender() {
    var chosenArray = enders;
    var chosen = 0;
    if (Math.random() < 0.25) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];

  }

  //templates
  var templates = [`${instruction()} ${k()} ${idea()} ${k2()} ${relatedtext()}${ender()}`


  ];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var output;
  output = templates[0];
  output = capitalizeFirstLetter(output);
  return output;
}

tweetIt();
setInterval(tweetIt, 4140000);


//tweeting function
function tweetIt() {
  var tweet = {
    status: generateTweet()
  };

  T.post('statuses/update', tweet, tweeted);
  console.log(tweet);

  function tweeted(err, data, response) {
    if (err) {
      console.log("ERROR");
    } else {
      console.log("SUCC!");
    }
  }



}

//yargyharg
var http = require("http");
setInterval(function() {
  http.get("http://hscenglishbot.herokuapp.com");
}, 300000); // every 5 minutes (300000)
