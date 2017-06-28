console.log('generator fired up');
//generator
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

  var ks = ['the importance of', 'the use of', 'the portrayal of', 'the exploration of', 'the significance of', 'the depiction of', 'the limitations of', 'the embracement of', 'the criticism of'];

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
    'context', 'culture', 'belonging', 'community', 'introspection', 'characterisation', 'World Bank literature', 'place', 'racial tensions', 'tension', 'conflict', 'gender roles', 'transitions', 'change', 'personal transitions',
    'accessibility','audience','post-9/11 social commentary','cultural belonging', 'intellectual transitions', 'the immigrant\'s plight', 'postmodernism', 'capitalist critique',
    'globalisation','identity', 'religious imagery'
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
    "Dream.net"


  ];

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

  function quote() {
    var chosenArray = quotes;
    var chosen = 0;
    if (Math.random() < 1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }
    return chosenArray[chosen];

  }

  //templates
  var templates = [
    `${instruction()} ${k()} ${idea()} ${k2()} ${relatedtext()}${ender()}`,
    `"${quote()}" \nTo what extent does your understanding of ${idea()} support this view? In your response, refer to ${relatedtext()}${ender()}`


  ];

  function template() {
    var chosenArray = templates;
    var chosen = 0;
    if (Math.random() < 1) {
      chosen = Math.floor((Math.random() * chosenArray.length));
    } else {
      chosen = 0;
    }


    return chosenArray[0]; //change 0 to chosen when fully implemented
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var output;
  output = template();
  output = capitalizeFirstLetter(output);
  output = output.trim(); //removes unnecessary whitespace
  return output;
}

function randomiseQuestion() {
global.generateQuestion = generateTweet();
console.log(global.generateQuestion);


}
 randomiseQuestion()
setInterval(randomiseQuestion,69000);
