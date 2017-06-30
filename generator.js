/*jshint esversion: 6 */
console.log('generator fired up');
//generator
function generateTweet() {

//ez functions
function randomfromarray(array) {
  return array[Math.floor(Math.random()*array.length)];
}
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//CREATIVE WRITING FRIDAY FLAG
var friday = false;



var chosenquote = global.quote;
//persistent vars
var topic = "";
var determinedtopic = "";
var determinedtopicno = 0;
var typeofresponse = "essay";
var firstrunforidea = true;
var firstrunfortopicornotopic = true;
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

  var onetexts = ['ONE text', 'TWO texts', 'THREE texts', 'FOUR texts', 'FIFTY-THREE texts', 'FOUR-HUNDRED-AND-TWENTY-TWO texts'];

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

var oneoranindividual;
if (Math.random < 0.5) {
  oneoranindividual = 'one';
}
else {
  oneoranindividual = 'an individual';
}

  //list of instructions
  var instructions = ['evaluate', 'analyse', 'examine', 'discuss', 'illustrate', 'explore', 'assess', 'explain'];

  function instruction() {
    var chosenArray = instructions;
    var chosen = 0;
    if (Math.random() < 1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }

  var ks = ['the importance of', 'the use of', 'the portrayal of', 'the exploration of', 'the significance of', 'the depiction of', 'the limitations of', 'the embracement of', 'the criticism of'];

  function k() {
    var chosenArray = ks;
    var chosen = 0;
    if (Math.random() < 1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];
  }
  //ideas
//DO NOT DISRUPT ARRAY BY PUTTING ELEMENTS INSIDE OR BETWEEN - ALWAYS ADD STUFF TO THE END BECAUSE I AM A TERRIBLE PROGRAMMER.
  var ideas = ['honesty', 'discovery', 'discovery of place', 'self discovery', 'isolation', 'discovery of community', 'morbid discovery', //next is 7
    'personal discovery', "the hero's journey", 'dream-like narrative structure', 'intense human relationships', 'textual integrity',
    'post-colonialism', 'Marxist theory', 'globalist themes', 'historical integrity', 'feminist theory', 'cultural discovery', 'discovery of culture', //next is 19
    'discovery of self', 'intimacy', 'cultural appropriation', 'humanity', 'Marxism', 'the contrast between light and dark', 'morality',
    'context', 'culture', 'belonging', 'community', 'introspection', 'characterisation', 'World Bank literature', 'place', 'racial tensions', 'tension', 'conflict', 'gender roles', 'transitions', 'change', 'personal transitions',
    'audience accessibility','audience','post-9/11 social commentary','cultural belonging', 'intellectual transitions', 'the immigrant\'s plight', 'postmodernism', 'capitalist critique',
    'globalisation','identity', 'religious imagery', 'romanticism', 'memory'
  ];
  //im so sorry
 var AOSlist = [
   1,2,3,4,5,6,7,8,19,27,28,29,36,38,40,44,45,50
 ];

  function idea() {
    var chosenArray = ideas;
    var chosen = 0;

    if (true) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }

//LAST CHANCE FORCING OF AOS QUESTIONS!
//This is to give them a much needed boost.
    if (Math.random < 0.5) { //Now there's a 50% chance of an AOS question.
      //I GUESS THIS COULD ACT AS A LIST OF AOS IDEAS
        var randomnumber = Math.floor((Math.random() * 18));
          //ok jamie bad code is still bad code even if you make it look pretty
          //YES THIS IS HOW IT CHOOSES RANDOMLY BETWEEN THEM IK
          //ALL THIS WORK JUST TO TWEAK THE RANDOMISER A BIT
          if(randomnumber==0){chosen = 1;}
          if(randomnumber==1){chosen = 2;}
          if(randomnumber==2){chosen = 3;}
          if(randomnumber==3){chosen = 4;}
          if(randomnumber==4){chosen = 5;}
          if(randomnumber==5){chosen = 6;}
          if(randomnumber==6){chosen = 7;}
          if(randomnumber==7){chosen = 8;}
          if(randomnumber==8){chosen = 19;} //discovery of self
          if(randomnumber==9){chosen = 27;} //culture
          if(randomnumber==10){chosen = 28;}
          if(randomnumber==11){chosen = 29;} //community
          if(randomnumber==12){chosen = 36;} //conflict
          if(randomnumber==13){chosen = 38;} //transitions
          if(randomnumber==14){chosen = 40;} //personal transitions
          if(randomnumber==15){chosen = 44;} //cultural belonging
          if(randomnumber==16){chosen = 45;} //intellectual transitions
          if(randomnumber==17){chosen = 50;} //identity

      }

//TOPIC DETERMINATION
//will on an offchance determine topic
//Determined topics are generally for AOS - they have powers to get quotes.
    if (firstrunforidea)  { // only runs if its the first time.
      topic = chosenArray[chosen];
          if (topic.includes('discovery')) {
              determinedtopic = 'discovery';
              determinedtopicno = 0;
          }
          if (topic.includes('identity')) {
              determinedtopic = 'identity';
              determinedtopicno = 1;
          }
          if (topic.includes('belonging') || topic.includes('isolation')) {
              determinedtopic = 'belonging';
              determinedtopicno = 2;
          }
          if (topic.includes('transitions')) {
              determinedtopic = 'transitions';
              determinedtopicno = 3;
          }
          if (topic.includes('journey')) {
              determinedtopic = 'journey';
              determinedtopicno = 4;
          }
          if (topic.includes('conflict')) {
              determinedtopic = 'conflict';
              determinedtopicno = 5;
          }
          if (topic.includes('culture')) {
              determinedtopic = 'culture';
              determinedtopicno = 6;
          }
          if (topic.includes('community')) {
              determinedtopic = 'community';
              determinedtopicno = 7;
          }

    }   //Stuff'll be done here later. Trust me. Around the line 260 mark, to be exact.

    firstrunforidea = false; //lets the script know if its run before
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
    "Season 3 Episode 4 of Judge Judy",
    "The Story of Tom Brennan",
    "Shrek the Third",
    "The Communist Manifesto",
    "Life of Pi",
    "Thomas the Tank Engine",
    "Season 3 Episode 6 of Paw Patrol",
    "Chocolate City",
    "Citizen Kane",
    "The Godfather",
    "Casablanca",
    "Raging Bull",
    "Singin' in the Rain",
    "Gone with the Wind",
    "Lawrence of Arabia",
    "Schindler's List",
    "Vertigo",
    "The Wizard of Oz",
    "Chinatown",
    "Annie Hall",
    "The Shawshank Redemption",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "The Good, the Bad and the Ugly",
    "Fight Club",
    "Code Name: K.O.Z.",
    "Saving Christmas",
    "Superbabies: Baby Geniuses 2",
    "Daniel the Wizard",
    "Manos: The Hands of Fate",
    "Pledge This!",
    "Turks in Space",
    "Foodfight!",
    "Birdemic: Shock and Terror",
    "Dream.net",
    "Hamlet",
    "Blade Runner",
    "Brave New World",
    "Brazil",
    "Silence of the Lambs",
    "Misery by Stephen King",
    "Eudora Welty's Moon Lake",
    "Beowulf",
    "Captain Underpants",
    "Mein Kampf",
    "Pauline Hanson: The Truth",
    "Richard II",
    "Much Ado About Nothing",
    "Merchant of Venice",
    "Northanger Abbey",
    "All Eyez On Me",
    "Dulce et Decorum Est by Wilfred Owen",
    "Insensibility by Wilfred Owen",
    "Strange Meeting by Wilfred Owen"


  ];

  function relatedtext() {
    var chosenArray = relatedtexts;
    var chosen = 0;
    if (Math.random() < 0.9) {
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
  ];

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

  //quote
  var quotes = [
    '.', `, with ${adjective()} reference to ONE text of your own choosing.`, `, drawing ${adjective()} thematic comparisons to ${atleast()} ${onetext()} of your own choosing.`,
    ', making detailed reference to characters within the text.', ', with reference to critical theory.', `, whilst also making ${adjective()} reference to ${idea()}.`,
    `, referencing ${idea()} where possible.`, `, whilst also communicating ${adjective()} knowledge of ${idea()}.`, `, providing additional links to ${idea()} in your response.`
  ];

//QUOTE GENERATION
  function quote() {
    var chosenArray = quotes;
    var chosen = 0;
    if (Math.random() < 1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    //return chosenArray[chosen];
  //OK SO QUOTE GENERATION IS A VERY COMPLICATED PROCESS GODDAMN IT
//TEMPLATE WITHIN A TEMPLATE :(
//Possible thingies (just a reminder):
// 1,2,3,4,5,6,7,8,19,27,28,29,36,38,40,44,45,50        (part of array AOSlist)
//Possible determinedtopic values (also a reminder):
// discovery,identity,belonging,transitions,journey,conflict,culture,community
var associationsorfriendships;
if (Math.random < 0.5) {associationsorfriendships = "associations";} else {associationsorfriendships = "friendships";}
var transitionortransitioning;
if (Math.random < 0.75) {transitionortransitioning = "transition";} else {transitionortransitioning = "transitioning";}
var engageinoravoid;
if (Math.random < 0.5) {engageinoravoid = "engage in";} else {engageinoravoid = "avoid";}
var engaginginoravoiding;
if (Math.random < 0.5) {engaginginoravoiding = "engaging in";} else if (Math.random < 0.5) {engaginginoravoiding = "avoiding";} else {engaginginoravoiding = "";}
var stuffyoucandotoculture = ['participate in','create', `participate in ${oneoranindividual}\'s`];
var cultureverb = stuffyoucandotoculture[Math.floor((Math.random() * stuffyoucandotoculture.length))];
function neworblank(){if (Math.random < 0.5) {return "new ";} else {return "";}}

var languageformsofdeterminedtopic = [
  //0 is present tense verb form, e.g. to discover
  //1 is the "process of" form, e.g. process of discovery.
  //2 is the tangible plural form, e.g. Individuals' identities or the identities of individuals
  //3 is kind of the 'ing' form.
  ['discover','discovery',`${neworblank()}discoveries`, 'discovering'],
  [`find ${oneoranindividual}'s identity`,`finding ${oneoranindividual}\'s identity`,'identities',`discovery of identity with regards to`],
  ['belong','belonging',`${associationsorfriendships}`, 'belonging to'],
  [`transition`,`${transitionortransitioning}`,`transitions`, `transitioning towards`],
  [`partake in a journey`,`${oneoranindividual}\'s journey`,`journeys`, `journeying towards`],
  [`${engageinoravoid} conflict`,`${engaginginoravoiding} conflict`,`conflicts`, `conflicts resulting from`],
  [`${cultureverb} culture`,`culture`,`exposure to ${neworblank()}cultures`, `cultures created upon the basis of`],
  [`belong to a community`,`community`,`exposure to communities`, `communities formed by`]
];

var throughsomething = ['the use of narrative techniques','techniques', 'narrative techniques', 'narrative techniques', 'dialogue',  'dialogue', `the creation of micronarratives`, 'empathy', 'historical integrity'];
var thing = throughsomething[Math.floor((Math.random() * throughsomething.length))];

var adjlib = ['','intense', 'meaningful', 'traumatic', 'evocative',  'provocative', 'unintended', 'powerful', 'intellectual', 'emotional', '', 'unseen', 'intimate'];

function adj(chance) {
  if (chance == undefined) {
    chance = 0.5;
  }
var adjs;
if (Math.random() < chance ) {adjs = adjlib[Math.floor((Math.random() * adjlib.length))];} else {adjs = "";}
var adjs2;
if (Math.random() < chance ) {adjs2 = adjlib[Math.floor((Math.random() * adjlib.length))];} else {adjs2 = "";}

var adj1 = adjs; //ADJECTIVE CONJUGATION

if (Math.random() < 0.3) {
  if (adjs != '') {
    var nextadjtemp = adjs2;
    if (nextadjtemp != "") {
      adj1 = adjs + ", " + nextadjtemp;
    }
    else {
      adj1 = adjs;
    }

  }
}
//console.log (adj1);
return adj1 + " ";

}
//ASPECTS OF
var asplib = ['','aspects of', 'certain aspects of', 'elements of'];
function aspectsof() {
var adjs;
if (Math.random() < 0.4) {adjs = adjlib[Math.floor((Math.random() * adjlib.length))];} else {adjs = "";}
var adj1 = adjs; //ADJECTIVE CONJUGATION
//console.log (adj1);
return " "+adj1;
}



var isorcanbe;
if (Math.random < 0.5) {isorcanbe = "is";} else {isorcanbe = "can be";}
var canorwill;
if (Math.random < 0.93) {canorwill = "can";} else {canorwill = "will";}
var provokelib = ['provoke',`lead to${aspectsof()}`, 'create', 'form', `facilitate${aspectsof()}`,  'act as a catalyst for', `provoke`, 'lead to', `result from${aspectsof()}`, 'result in'];
var provoke = provokelib[Math.floor((Math.random() * provokelib.length))];

var consequencelib = ['consequences',`results`, 'new consequences', 'opportunities', `intellectual opportunities`,  'new meanings', `${languageformsofdeterminedtopic[Math.floor((Math.random() * languageformsofdeterminedtopic.length))][2]}`, 'meaningful changes', `new ${languageformsofdeterminedtopic[Math.floor((Math.random() * languageformsofdeterminedtopic.length))][2]}`];
var consequences = consequencelib[Math.floor((Math.random() * consequencelib.length))];


var questionheaders = [
  "",
  "Texts may show us that ",
  `Through ${thing}, composers can demonstrate that `,
  "In life, ",
  `Through ${adj()} human experience, it ${isorcanbe} found that `
];
var chosenquestionheader = questionheaders[Math.floor((Math.random() * questionheaders.length))];
if (Math.random < 0.6) {chosenquestionheader = "";}
var genericquestiontemplates = [
`${chosenquestionheader}${adj()}${languageformsofdeterminedtopic[determinedtopicno][2]} ${canorwill} ${provoke} ${adj(1)}${consequences}.`

];

//should probs move this to the top of generator.js as it might need to be accessed in a global scope

return genericquestiontemplates[0]; //TEMPORARY. Will change with more templates.
  }
function quotedirections() {
//DIRECTIONS FOR QUOTES

function support() {
  if (Math.random < 0.5) { return 'align with';} else {return 'support';}
}
function topicornottopic(chance) {
  if (chance == undefined) {
    if (firstrunfortopicornotopic) {
    chance = '0.8';
  }
  else {
    chance = '0.1';
  }
  }


  if (Math.random < chance) { firstrunfortopicornotopic = true; return topic; } else {return ideas[Math.floor(Math.random()*ideas.length)];}

}
function thesomethingofthisstatement() {
  if (Math.random < 0.5) {
    if (Math.random < 0.5) { return 'the truth of this statement';} else {return 'the validity of this statement';}
  }
  else {
    if (Math.random < 0.5) { return 'this statement\'s validity';} else {return 'the impact of this statement';}
  }
}
function inrelationto() {
  if (Math.random < 0.5) {
    if (Math.random < 0.5) { return 'in relation to';} else {return 'regarding';}
  }
  else {
    if (Math.random < 0.5) { return 'with regards to';} else {return ', considering';}
  }
}
var asplib = ['','aspects of', 'certain aspects of', 'elements of'];
var adjlib = ['','intense', 'meaningful', 'traumatic', 'evocative',  'provocative', 'unintended', 'powerful', 'intellectual', 'emotional', 'new', 'unseen', 'intimate'];

function aspectsof() {
var adjs;
if (Math.random() < 0.4) {adjs = adjlib[Math.floor((Math.random() * adjlib.length))];} else {adjs = "";}
var adj1 = adjs; //ADJECTIVE CONJUGATION
//console.log (adj1);
return " "+adj1;
}
function depictedin() {
  if (Math.random < 1) {
var depictedinv = [
  `depicted in`,
  'shown in',
  'enforced in',
  'displayed in',
  'exhibited in',
  'challenged in',
  'depicted in',
  'explored in',
  'in',
  'in',
  'in',
  'in'
];
return depictedinv[Math.floor(Math.random()*depictedinv.length)];
  }
  else {return "";}
}
function thethingsof(chance) {
  if (chance == undefined) {chance = 0.7;}
  if (Math.random < chance) {
var thethingsof = [
  `themes of ${topicornottopic('0.5')} ${depictedin()}`,
  `the themes of ${topicornottopic('0.5')} ${depictedin()}`,
  `aspects of ${topicornottopic('0.5')} ${depictedin()}`,
  `${topicornottopic('0.5')} ${depictedin()}`,
    `the portrayal of ${topicornottopic('0.5')} in`,
    `the depiction of ${topicornottopic('0.5')} in`,
    `${topicornottopic('0.5')}'s portrayal in`,
    `${topicornottopic('0.5')}'s depiction in`

];
return thethingsof[Math.floor(Math.random()*thethingsof.length)];
  }
  else {return "";}
}
function properinstruction() {
var op = '';
var properinsts = [
  'assess', 'discuss', 'evaluate', 'refer to', 'reference'
];

op = (randomfromarray(properinsts));

return op;

}



function inyourresponse() {
var op = '';
var inyourresponsetemplates = [
  `In your response, make ${adjective()} reference to ${thethingsof()} ${relatedtext()}${ender()} `,
  `${properinstruction()} ${thethingsof(1)} ${relatedtext()} in your response${ender()} `,
  `In your response, ${properinstruction()} ${thethingsof(0.99)} ${relatedtext()}${ender()} `
];

op = jsUcfirst(randomfromarray(inyourresponsetemplates));

return op;

}
var directiontemplates = [
  `To what extent does your understanding of ${determinedtopic} ${support()} this view? ${String.fromCharCode(13)} ${inyourresponse()} `,
  `To what extent do you agree with this statement from your study? ${String.fromCharCode(13)} ${inyourresponse()}`,
  `${properinstruction()} ${thesomethingofthisstatement()} with regards to ${thethingsof()} ${relatedtext()}.`,
  `${properinstruction()} ${thesomethingofthisstatement()}. ${String.fromCharCode(13)} ${inyourresponse()}`,
  `${properinstruction()} ${thesomethingofthisstatement()} ${inrelationto()} ${aspectsof()} ${topicornottopic()}. ${String.fromCharCode(13)} ${inyourresponse()}`,
  `${properinstruction()} ${thesomethingofthisstatement()} ${inrelationto()} ${aspectsof()} ${topicornottopic()}, making ${adjective()} reference to ${thethingsof()} ${relatedtext()} in your response.`
];

  return jsUcfirst(randomfromarray(directiontemplates));
}


  //templates
  var templates = [
    `${instruction()} ${k()} ${idea()} ${k2()} ${relatedtext()}${ender()}`,
    ` ${quote()}${String.fromCharCode(13)}${String.fromCharCode(13)}${quotedirections()}`


  ];

  function template() {
    var chosenArray = templates;
    var chosen = 0; //By default, basic format.




//QUOTE AT BOTTOM BECAUSE LOW CHANCES SHOULD NOT BE MADE LOWER
  //Determining if quote instead of essay
    //MEANS 1 - 33% chance if an AOS-focused question
    if (determinedtopic !== "") { //if part of AOS or something
      if (Math.random() < 0.5) { //50% chance of doing a quote template
        chosen = 1; //COMMITTED TO A QUOTE! :) this is big
      }
    }



    return chosenArray[chosen]; //l
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var output;
  output = template();
  output = capitalizeFirstLetter(output);
  output = output.trim().replace(/\s+(\W)/g, "$1"); //removes unnecessary whitespace

//
//   if (output.includes()) {
//
//   }



output = jsUcfirst(output);
if (output[0] == " " || output[0] == "") {


      output = output.charAt(1).toUpperCase() + output.slice(1);

}

  return output; //RETURNS OUTPUT FOR ACTUAL USE
}

function randomiseQuestion() {
global.generateQuestion = generateTweet();
console.log(global.generateQuestion);
}

randomiseQuestion();
setInterval(randomiseQuestion,69000);
